---
id: kubernetes_agent
title: Vantage Kubernetes Agent
description: This page walks through how to connect the Vantage Kubernetes agent with your Kubernetes cluster.
---

# Vantage Kubernetes Agent

The Vantage Kubernetes agent is the default, recommended configuration to ingest cost and usage data from Kubernetes clusters to Vantage. The agent is a Docker container that runs in your Kubernetes cluster. The agent collects metrics and uploads them to Vantage.

:::note
A primary provider (e.g., AWS, Azure, or GCP) is required to connect Kubernetes costs.
:::

## Agent Functionality

The Vantage Kubernetes agent relies on native Kubernetes APIs, such as `kube-apiserver` for metadata and `kubelet` for container data. Access to these APIs is controlled via Kubernetes RBAC using a Service Account and ClusterRole included in the Vantage Kubernetes agent [Helm chart](https://github.com/vantage-sh/helm-charts).

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

- An already connected primary provider (e.g., [AWS](/connecting_aws), [Azure](/connecting_azure), or [GCP](/connecting_gcp))

- A [Vantage API token](/vantage_account#api-token) with READ and WRITE scopes enabled

- **If you do not already have an integration enabled**, navigate to the [Kubernetes Integration page](https://console.vantage.sh/settings/kubernetes?connect=true) in the Vantage console, and click the **Enable Kubernetes Agent** button (you won't need to do this for subsequent integrations)

## Create a Connection

:::info
The following steps are also provided in the Vantage Kubernetes agent Helm chart repository. See [the Helm chart repository](https://github.com/vantage-sh/helm-charts/tree/main/charts/vantage-kubernetes-agent) for all value configurations. If you would like to use a manifest-based option instead, see the [section below](/kubernetes_agent#manifest-deploy)
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

### Azure Kubernetes Service (AKS) Connections {#aks}

If you are creating an AKS connection, you will need to configure the following parameters to avoid AKS-specific errors:

- Set the `VANTAGE_KUBE_SKIP_TLS_VERIFY` environment variable to `true`. This setting is controlled by `agent.disableKubeTLSverify` within the Helm chart. For details, see the [TLS verify error](/kubernetes_agent#tls-verify-error-when-scraping-nodes) section.
- Configure the `VANTAGE_NODE_ADDRESS_TYPES` environment variable, which is controlled by the `agent.nodeAddressTypes` in the Helm chart. In this case, the type to use for your cluster will most likely be `InternalIP`. For configuration details, see the [DNS lookup error](/kubernetes_agent#dns-lookup-error) section.

### (Optional) Enable Collection of Annotations and Namespace Labels {#enable-annotations-namespace-labels}

You can optionally enable the collection of annotations and namespace labels.

- **Annotations:** The agent accepts a comma-separated list of annotation keys, called `VANTAGE_ALLOWED_ANNOTATIONS`, as an environment variable at startup. To enable the collection of annotations, configure the `agent.allowedAnnotations` [parameter of the Helm chart](https://github.com/vantage-sh/helm-charts/blob/main/charts/vantage-kubernetes-agent/values.yaml#L31) with a list of annotations to be sent to Vantage. Note there is a max of 10 annotations, and values are truncated after 100 characters.
- **Namespace labels:** The agent accepts `VANTAGE_COLLECT_NAMESPACE_LABELS` as an environment variable at startup. To enable the collection of namespace labels, configure the `agent.collectNamespaceLabels` [parameter of the Helm chart](https://github.com/vantage-sh/helm-charts/blob/main/charts/vantage-kubernetes-agent/values.yaml#L34).

### Upgrade the Agent {#upgrade-agent}

To upgrade the agent, use the following command:

```bash
helm repo update && helm upgrade -n vantage vka vantage/vantage-kubernetes-agent --reuse-values
```

### Manifest-Based Deployment Option {#manifest-deploy}

You can use `helm template` to generate a static manifest via the existing repo. This option generates files (YAML) so that you can then decide to deploy them however you want.

1. Add the repository for the Vantage Kubernetes agent Helm chart.

   ```bash
   helm repo add vantage https://vantage-sh.github.io/helm-charts
   ```

2. Generate the static manifest.

   ```bash
   helm template -n vantage vka vantage/vantage-kubernetes-agent --set agent.token=$VANTAGE_API_TOKEN,agent.clusterID=$CLUSTER_ID
   ```

### Resource Usage {#resource-usage}

The limits provided within the Helm chart are set low to support small clusters (approximately 10 nodes) and should be considered the minimum values for deploying an agent.

Estimates for larger clusters are roughly:

- ~1 CPU/1000 node
- ~5 MB/node

For example, a 100-node cluster would be approximately 500 MB and 100 mCPU. These amounts are estimates, which will vary based on pod density per node, label usage, cluster activity, etc. The agent should reach an approximate steady state after about one hour of uptime and can be tuned accordingly after the fact.

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
You can view and manage your Kubernetes integration on the [Kubernetes Integration page](https://console.vantage.sh/settings/kubernetes) in the console. Hover over the integration in the list, and click **Manage**.
:::

### Monitoring

The agent exposes a Prometheus metrics endpoint via the `/metrics` endpoint, exposed by default on port `9010`. This port can be changed via the Helm chart's `service.port` value.

The metrics endpoint includes standard Golang process stats as well as agent-related metrics for node scrape results, node scrape duration, internal data persistence, and reporting.

For users who want to monitor the agent:

1. `vantage_last_node_scrape_count{result="fail"}` should be low (between 0 and 1% of total nodes). Some failures may occur as nodes come and go within the cluster, but consistent failures are not expected and should be investigated.
2. `rate(vantage_report_count{result="fail"}[5m])` should be 0. Reporting occurs within the first 5 minutes of every hour and will retry roughly once per minute. Each failure increments this counter. If the agent is unable to report within the first 10 minutes of an hour, some data may be lost from the previous window, as only the previous ~70 data points are retained.

## Common Errors

### DNS Lookup Error {#dns-lookup-error}

The agent uses the [node status addresses](https://kubernetes.io/docs/reference/node/node-status/#addresses) to determine what hostname to look up for the node's stats, which are available via the `/metrics/resource` endpoint. This can be configured with the `VANTAGE_NODE_ADDRESS_TYPES` environment variable, which is controlled by the `agent.nodeAddressTypes` in the Helm chart. By default, the priority order is `Hostname,InternalDNS,InternalIP,ExternalDNS,ExternalIP`.

To understand which type to use for your cluster, you can look at the available addresses for one of your nodes. The `type` corresponds to one of the configurable `nodeAddressTypes`.

```bash
➜  kubectl get nodes -o=jsonpath='{.items[0].status.addresses}'
[{"address":"10.0.12.185","type":"InternalIP"},{"address":"ip-10-0-12-185.ec2.internal","type":"InternalDNS"},{"address":"ip-10-0-12-185.ec2.internal","type":"Hostname"}]
```

### EOF Error When Starting {#eof-error-when-starting}

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

### TLS Verify Error When Scraping Nodes {#tls-verify-error-when-scraping-nodes}

The agent connects to each node to collect usage metrics from the `/metrics/resources` endpoint. This access is managed via Kubernetes RBAC, but in some cases, the node's TLS certificate may not be valid and will result in TLS errors when attempting this connection. This most often affects clusters in AKS. To skip TLS verify within the Kubernetes client, you can set the `VANTAGE_KUBE_SKIP_TLS_VERIFY` environment variable to `true`. This setting is controlled by `agent.disableKubeTLSverify` within the Helm chart. This does not affect requests outside of the cluster itself, such as to the Vantage API or S3.

An example error log line might look like:

```bash
{"time":"2024-02-10T12:00:00.000000000Z","level":"ERROR","msg":"failed to scrape node","err":"Get \"https://10.100.20.20:10250/metrics/resource\": tls: failed to verify certificate: x509: cannot validate certificate for 10.100.20.20 because it doesn't contain any IP SANs","node":"aks-nodepool9ids-1234567-vm0000001"}
```

Once changed, you can validate the change by looking for the scraping summary log line and ensuring no more `ERROR` level messages appear:

```bash
{"time":"2024-02-10T12:00:00.000000000Z","level":"INFO","msg":"finished scraping metrics from nodes","success":25,"failure":0,"duration_ms":102}
```

### Pod Scheduling Errors {#pod-scheduling-errors}

The most common cause for pod scheduling errors is the persistent volume not being provisioned. By default, the agent is deployed as a StatefulSet with a persistent volume for persisting internal state. The state allows the agent to recover from a restart without losing the historical data for the current reporting window. An example error for this case would be present in the events on the `vka-vantage-kubernetes-agent-0` pod and include an error that contains `unbound immediate PersistentVolumeClaims`.

The resolution to this error is based on the cluster's configuration and the specific cloud provider. More information might be present on the persistent volume claim or persistent volume. For Kubernetes clusters on AWS, S3 can be used for data persistence, which is documented in the next section. 

Additional provider references are also listed here:

- [GCP: Using the Compute Engine persistent disk CSI Driver](https://cloud.google.com/kubernetes-engine/docs/how-to/persistent-volumes/gce-pd-csi-driver)
- [Azure: Container Storage Interface (CSI) drivers on Azure Kubernetes Service (AKS)](https://learn.microsoft.com/en-us/azure/aks/csi-storage-drivers)
- [AWS: Amazon EBS CSI driver](https://docs.aws.amazon.com/eks/latest/userguide/ebs-csi.html)

## (Optional) Use S3 for Data Persistence

The agent requires a persistent store for periodic backups of time-series data as well as checkpointing for periodic reporting. The default deployment option uses a Persistent Volume and works for clusters ranging from tens to thousands of nodes; however, if Persistent Volumes are not supported with your cluster, an alternative configuration, using S3, is available for agents deployed in AWS. If you require persistence to a different object store, you can contact [support@vantage.sh](mailto:support@vantage.sh).

### Configure Agent for S3 Persistence

The agent uses [IAM roles for service accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) to access the configured bucket. The default `vantage` namespace and `vka-vantage-kubernetes-agent` service account names may vary based on your configuration.

Below are the expected associated permissions for the IAM role:

```json
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

Once the permissions are available, the agent can be configured to start with S3 persistence via the environment variable `VANTAGE_PERSIST_S3_BUCKET` or, if using the Helm chart, via the `--set persist=null --set persist_s3=example-bucket-name` values.

The agent will write persisted data to the `$CLUSTER_ID/` prefix within the bucket. Multiple agents can use the same bucket as long as they do not have overlapping `CLUSTER_ID` values. An optional prefix can be prepended with `VANTAGE_PERSIST_S3_PREFIX` resulting in `$VANTAGE_PERSIST_S3_PREFIX/$CLUSTER_ID/` being the prefix used by the agent for all objects uploaded.

## Migrate Costs from OpenCost to Vantage Kubernetes Agent

If you are moving from an OpenCost integration to the agent-based integration, you can contact [support@vantage.sh](mailto:support@vantage.sh) to have your previous integration data maintained. Any overlapping data will be removed from the agent data by the Vantage team.

### Maintaining OpenCost Filters

If you previously used the OpenCost integration and are transitioning to the new agent-based integration, your existing filters will be retained. It's important to note that in situations where labels contained characters excluded from Prometheus labels, such as `-`, the OpenCost integration received the normalized versions of those labels from Prometheus. The Vantage Kubernetes agent, on the other hand, directly retrieves labels from the `kube-apiserver`, resulting in more precise data. However, this change may necessitate updates to filters that previously relied on the normalized values. You can contact [support@vantage.sh](mailto:support@vantage.sh) to have these filters converted for you.
