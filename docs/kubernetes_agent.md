---
id: kubernetes_agent
title: Vantage Kubernetes Agent
description: This page walks through how to connect the Vantage Kubernetes agent with your Kubernetes cluster.
---

# Vantage Kubernetes Agent

The Vantage Kubernetes agent is the default, recommended configuration to ingest cost and usage data from Kubernetes clusters to Vantage. The agent is a Docker container that's run in your Kubernetes cluster. The agent collects metrics and uploads them to Vantage. 

## Agent Functionality 

The Vantage Kubernetes agent relies on native Kubernetes APIs, such as `kube-apiserver` for metadata and `kubelet` for container data. Access to these APIs is controlled via Kubernetes RBAC using a Service Account and ClusterRole, included in the Vantage Kubernetes agent [Helm chart](https://github.com/vantage-sh/helm-charts). 

Data is periodically collected and stored for aggregation, then sent directly to the Vantage service through an API, with your Vantage API token for authentication. This process avoids extra storage costs incurred by the OpenCost integration. The agent's architecture eliminates the need for deploying OpenCost-specific Prometheus pods, which makes scaling easier. 

<div style={{ display: "flex", justifyContent: "center", borderRadius: 10, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <img alt="Vantage Kubernetes agent architecture diagram" width="60%" src="https://assets.vantage.sh/blog/announcing-the-official-kubernetes-integration/vantage-kubernetes-agent-architecture.png" style={{ borderRadius: 10 }} />
</div>

## Service Compatibility

The Vantage Kubernetes agent is compatible with the following services: 

- Amazon Elastic Kubernetes Service (EKS)
- Azure Kubernetes Service (AKS)
- Google Kubernetes Engine (GKE)

:::note
At this time, the agent does not support custom rates for on-premises servers. Note that this is a planned future feature. If you have an on-premises cluster and would like to track these costs, see the [OpenCost](/opencost) documentation.
:::

As long as the cost data for an underlying cluster instance is ingested into Vantage via a cloud integration, it is possible to calculate the corresponding pod costs.

## Install Vantage Kubernetes Agent {#install-vantage-kubernetes-agent}

### Prerequisites {#prerequisites}

The following prerequisites are required before you install the Vantage Kubernetes agent:

- The [Helm package manager](https://helm.sh/) for Kubernetes 

- `kubectl`

- A running Kubernetes cluster

- A [Vantage API token](/vantage_account#api-token) with READ and WRITE scopes enabled

- **If you do not already have an integration enabled**, navigate to the [Kubernetes Integration page](https://console.vantage.sh/settings/kubernetes?connect=true) in the Vantage console, and click the **Enable Kubernetes Agent** button (you won't need to do this for subsequent integrations)

## Create a Connection

:::info
The following steps are also provided in the Vantage Kubernetes agent Helm chart repository. See [the Helm chart repository](https://github.com/vantage-sh/helm-charts/tree/main/charts/vantage-kubernetes-agent) for all value configurations.
:::

To set up a _new_ Kubernetes agent connection:

1. Add the repository for the Vantage Kubernetes agent Helm chart. 
   
   ```bash
   helm repo add vantage https://vantage-sh.github.io/helm-charts
   ```

2. Install the `vantage-kubernetes-agent` Helm chart. Ensure you update the values for `VANTAGE_API_TOKEN` (obtained in the [Prerequisites](/kubernetes_agent#prerequisites) above) and `CLUSTER_ID` (the unique value for your cluster).
   
   ```bash
   helm upgrade -n vantage vka vantage/vantage-kubernetes-agent --install --set agent.token=$VANTAGE_API_TOKEN,agent.clusterID=$CLUSTER_ID --create-namespace
   ```

### (Optional) Enable Collection of Annotations and Namespace Labels {#enable-annotations-namespace-labels}

You can optionally enable the collection of Annotations and Namespace labels.

- **Annotations.** The agent accepts a comma-separated list of annotation keys, called `VANTAGE_ALLOWED_ANNOTATIONS`, as an environment variable at startup. To enable collection of Annotations, configure the `agent.allowedAnnotations` [parameter of the Helm chart](https://github.com/vantage-sh/helm-charts/blob/main/charts/vantage-kubernetes-agent/values.yaml#L31) with a list of Annotations to be sent to Vantage. Note there is a max of 10 annotations, and values are truncated after 100 characters.
- **Namespace labels.** The agent accepts `VANTAGE_COLLECT_NAMESPACE_LABELS` as an environment variable at startup. To enable collection of Namespace labels, configure the `agent.collectNamespaceLabels` [parameter of the Helm chart](https://github.com/vantage-sh/helm-charts/blob/main/charts/vantage-kubernetes-agent/values.yaml#L34).
  
### Resource Usage {#resource-usage}

The limits provided within the Helm chart are set low to support small clusters (approximately 10 nodes) and should be considered the minimum values for deploying an agent.

Estimates for larger clusters are roughly:
- ~1 CPU/1000 node
- ~2 MB/node

For example, a 100-node cluster would be approximately 200 MB and 100 mCPU. These amounts are estimates, which will vary based on node density, label usage, cluster activity, etc. The agent should reach an approximate steady state after about one hour of uptime and can be tuned accordingly after the fact.

To set these options, extend the `--set` flag. You can also include the values using one of the [many options Helm supports](https://helm.sh/docs/chart_template_guide/values_files/):
```
--set agent.token=$VANTAGE_API_TOKEN,agent.clusterID=$CLUSTER_ID,resources.limits.memory=100Mi,resources.requests.memory=100Mi
```

### Validate Installation

Follow the steps below to validate the agent's installation. 

1. Once installed, the agent's pod should become `READY`:
   ```bash
   ➜ kubectl -n vantage get po
   NAME                             READY   STATUS    RESTARTS   AGE
   vka-vantage-kubernetes-agent-0   1/1     Running   0          54m
   ```
2. Logs should be free of `ERROR` messages:
   ```bash
   ➜  containers kubectl -n vantage logs -f vka-vantage-kubernetes-agent-0
   {"time":"2023-10-23T22:01:12.065481528Z","level":"INFO","msg":"found nodes","nodes":231}
   ...
   {"time":"2023-10-23T22:01:15.471399742Z","level":"INFO","msg":"finished initializing"}
   ```
3. Agent reporting should occur once per hour at the start of the hour and should not generate an `ERROR` log line. It should also attempt a report soon after the initial start:
   ```bash
   {"time":"2023-10-23T22:01:00.015243974Z","level":"INFO","msg":"reporting now"}
   {"time":"2023-10-23T22:01:01.168390414Z","level":"INFO","msg":"finished reporting"}
   {"time":"2023-10-23T22:01:01.169876296Z","level":"INFO","msg":"next report window","start":"2023-10-23T22:00:00Z","end":"2023-10-23T23:00:00Z","sleeping_seconds":3598.830199804}
   ```

Costs are exported from the cluster hourly and then made available nightly. It's important to note that these costs might encounter delays based on their associated cloud integration's cost data. For instance, if there is a one-day delay in an AWS Cost and Usage Report, the clusters dependent on that data will experience a similar delay.

:::tip
You can view and manage your Kubernetes integration on [Kubernetes Integration page](https://console.vantage.sh/settings/kubernetes) in the console. Hover over the integration in the list, and click **Manage**.
:::

## Common Errors
### DNS Lookup Error

The agent uses the [node status addresses](https://kubernetes.io/docs/reference/node/node-status/#addresses) to determine what hostname to look up for the node's stats, which are available via the `/metrics/resource` endpoint. This can be configured with the `VANTAGE_NODE_ADDRESS_TYPES` environment variable, which is controlled by the `agent.nodeAddressTypes` in the Helm chart. By default, the priority order is `Hostname,InternalDNS,InternalIP,ExternalDNS,ExternalIP`.

To understand which type to use for your cluster, you can look at the available addresses for one of your nodes. The `type` corresponds to one of the configurable `nodeAddressTypes`.

```bash
➜  kubectl get nodes -o=jsonpath='{.items[0].status.addresses}'
[{"address":"10.0.12.185","type":"InternalIP"},{"address":"ip-10-0-12-185.ec2.internal","type":"InternalDNS"},{"address":"ip-10-0-12-185.ec2.internal","type":"Hostname"}]
```

### EOF Error When Starting

The agent uses local files for recovering from crashes or restarts. If this backup file becomes corrupted, most commonly due to [OOMKill](/kubernetes_agent#resource-usage), the most straightforward approach to get the agent running again is to perform a fresh install or remove the `PersistentVolumeClaim`, `PersistentVolume`, and `Pod`.

An example error log line might look like:
```bash
{"time":"2023-12-01T00:00:00.000000000Z","level":"ERROR","msg":"failed to setup data store","err":"unexpected EOF"}
```

To uninstall the agent via `helm`, run:
```bash
helm uninstall vka -n vantage
```
Then, follow the original installation steps outlined in the above sections.

## (Optional) Using S3 for Data Persistence

The agent requires a persistent store for periodic backups of timeseries data as well as checkpointing for periodic reporting. The default deployment option uses a Persistent Volume and works for clusters ranging from tens to thousands of nodes. However, if Persistent Volumes are not supported with your cluster an alternative configuration using S3 is available for agents deployed in AWS. If you require persistence to different object store, you can contact [support@vantage.sh](mailto:support@vantage.sh).

### Configure Agent for S3 Persistence

The agent uses [IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) to access the configured bucket. The default `vantage` namespace and `vka-vantage-kubernetes-agent` service account names may vary based on your configuration.

Below are the expected associated permissions for the IAM Role:
```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Effect": "Allow",
            "Action": [
                "s3:GetObject",
                "s3:PutObject",
                "s3:ListBucket",
                "s3:AbortMultipartUpload",
                "s3:ListMultipartUploadParts",
                "s3:DeleteObject"
            ],
            "Resource": [
                "arn:aws:s3:::example-bucket-name/*",
                "arn:aws:s3:::example-bucket-name"
            ]
        }
    ]
}
```

Once the permissions are available, the agent can be configured to start with S3 persistence via the environment variable `VANTAGE_PERSIST_S3_BUCKET` or if using the helm chart `--set persist=null --set persist_s3=example-bucket-name` values.

The agent will write persisted data to the `$CLUSTER_ID/` prefix within the bucket. Multiple agents may use the same bucket as long as they do not have overlapping `CLUSTER_ID` values.


## Migrate Costs from OpenCost to Vantage Kubernetes Agent

If you are moving from an OpenCost integration to the agent-based integration, you can contact [support@vantage.sh](mailto:support@vantage.sh) to have your previous integration data maintained. Any overlapping data will be removed from the agent data by the Vantage team.

### Maintaining OpenCost Filters

If you previously used the OpenCost integration and are transitioning to the new agent-based integration, your existing filters will be retained. It's important to note that in situations where labels contained characters excluded from Prometheus labels, such as `-`, the OpenCost integration received the normalized versions of those labels from Prometheus. The Vantage Kubernetes agent, on the other hand, directly retrieves labels from the `kube-apiserver`, resulting in more precise data. However, this change may necessitate updates to filters that previously relied on the normalized values. You can contact [support@vantage.sh](mailto:support@vantage.sh) to have these filters converted for you.
