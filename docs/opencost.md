[OpenCost](https://www.opencost.io) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.

OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage.





# Overview

The following are instructions for importing Kubernetes pod-level costs into Vantage using [OpenCost](https://www.opencost.io). This process is broken down into a few steps:

1. Deploying an AWS Managed Prometheus Workspace which Vantage will query directly.
2. Deploying a local Prometheus server on your Kubernetes Cluster which will be configured to use remote_write to push the metrics into the AWS Managed Cluster.
3. Deploying OpenCost on your Kubernetes Cluster

# Deploy Managed Prometheus

*If you have already deployed a managed Prometheus you can skip this step and re-use the same managed prometheus for multiple Kubernetes Clusters. Ensure you are setting CLUSTER_ID when deploying OpenCost so that metrics from multiple clusters can be differentiated.*

Deploy [this](https://vantage-public.s3.amazonaws.com/opencost-setup-latest.json) CloudFormation Stack with variables provided by Vantage. This will install an [AWS Managed Prometheus Workspace](https://docs.aws.amazon.com/prometheus/latest/userguide/what-is-Amazon-Managed-Service-Prometheus.html), as well as configure the already deployed Vantage Cross Account IAM Role, with the needed permissions to query this workspace. Along with the workspace, it will also create an IAM User which will be used for authentication between OpenCost and the Managed Prometheus Workspace. 

After this stack finishes deploying you will need to generate an AWS Access Key and Secret. You can generate these credentials with the following command:

```bash
aws iam create-access-key --user-name VantageOpenCost

# This will output the following:
{
    "AccessKey": {
        "UserName": "VantageOpenCost",
        "AccessKeyId": "AKIASHL5XPBACKKFOAK",
        "Status": "Active",
        "SecretAccessKey": "0WKdIHw0o+rADPc6PCLQrxbtvtsHg463nf4iE0Mp",
        "CreateDate": "2022-08-05T20:48:20+00:00"
    }
}
```

*Take note of the **AccessKeyId** and **SecretAccessKey.***

# Install OpenCost

## Install Local Prometheus

This will install onto your Kubernetes cluster. This will be used to scrape the OpenCost metrics locally in the cluster. For this you will need the access key and secret key from the `VantageOpenCost` IAM User above. It is recommended to store these in [Kubernetes](https://kubernetes.io/docs/concepts/configuration/secret/) secrets.

Before continuing you will need to retrieve the API URL for the deployed Prometheus workspace. 

First query for the workspace:

```bash
aws amp list-workspaces --alias VantageOpenCost --query 'workspaces[0].workspaceId'
```

Then retrieve the Prometheus endpoint value:

```json
aws amp describe-workspace --workspace-id <workspaceId> --query "workspace.prometheusEndpoint"
```

*This will resemble “https://aps-workspaces.us-east-1.amazonaws.com/workspaces/ws-291jc44b-f66a-4f04-85f1-0c44589f061c/”*

With those values you can install Prometheus using the Helm chart:

```bash
helm install my-prometheus --repo https://prometheus-community.github.io/helm-charts prometheus \
  --namespace prometheus --create-namespace \
  --set pushgateway.enabled=false \
  --set alertmanager.enabled=false \
  --set "server.global.external_labels.cluster_id=<CLUSTER_NAME>" \
  --set "server.remoteWrite[0].url=<REMOTE_WRITE_URL>/api/v1/remote_write" \
  --set "server.remoteWrite[0].sigv4.region=us-east-1" \
	--set "server.remoteWrite[0].sigv4.access_key=<ACCESS_KEY>" \
	--set "server.remoteWrite[0].sigv4.secret_key=<SECRET_KEY>" \
  -f https://raw.githubusercontent.com/opencost/opencost/develop/kubernetes/prometheus/extraScrapeConfigs.yaml
```

## Install OpenCost

Now that Prometheus is configured you can go ahead and install OpenCost . 

This will install the OpenCost server to your Kubernetes cluster:

```bash
# Download the Opencost manifest:
curl https://raw.githubusercontent.com/opencost/opencost/develop/kubernetes/opencost.yaml -o opencost.yaml -s

# Edit the opencost.yaml and modify the CLUSTER_ID.
# If you changed the name of the prometheus endpoint you should change PROMETHEUS_SERVER_ENDPOINT as to match.
kubectl apply --namespace opencost -f ./opencost.yaml
```

To test that OpenCost is running correctly you can retrieve values from the API:

```bash

kubectl port-forward --namespace opencost service/opencost 9003

curl http://localhost:9003/allocation/compute \
  -d window=60m \
  -d resolution=1m \
  -d aggregate=namespace \
  -d accumulate=true \
  -G

# You should see an output that resembles:
{"code":200,"status":"success","data":[...]}
```

# Complete

Once all of this is complete you should see your Kubernetes costs showing up in the Vantage console within two days. During the CloudFormation step the Prometheus information was passed to Vantage and configured within your account. 

  

1. You can follow these steps to setup additional clusters.
2. You can re-use the same Managed Prometheus for multiple clusters.
3. You can also deploy further Managed Prometheus Workspaces in other regions.

If you have any questions or run into any issues feel free to reach out to support@vantage.sh.