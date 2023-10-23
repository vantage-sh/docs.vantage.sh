---
id: kubernetes_agent
title: Kubernetes (Vantage Agent)
description: This page walks through how to connect the Vantage Kubernetes agent with your Kubernetes cluster.
---

# Kubernetes (Vantage Agent)

:::note Beta
The Vantage Kubernetes agent is currently in Beta.
:::

The Vantage Kubernetes agent is the default, recommended configuration to ingest cost and usage data from Kubernetes clusters to Vantage. The agent is a Docker container that's run in your Kubernetes cluster. The agent collects metrics and uploads them to Vantage. 

## Agent Functionality 

The Vantage agent relies on native Kubernetes APIs, such as `kube-apiserver` for metadata and `kubelet` for container data. Access to these APIs is controlled via Kubernetes RBAC using a Service Account and ClusterRole, included in the Vantage [Kubernetes Agent Helm chart](https://github.com/vantage-sh/helm-charts). 

Data is periodically collected and stored for aggregation, then sent directly to Vantage service through an API with your Vantage API token for authentication, which avoids extra storage costs. This architecture eliminates the need for deploying OpenCost-specific Prometheus pods, making scaling easier. 

## Service Compatibility

The agent is compatible with the following services: 

- Azure Kubernetes Service (AKS)

- Google Kubernetes Engine (GKE)

- Amazon Elastic Kubernetes Service (EKS)

:::note
At this time, the agent does not support custom rates for on-premises servers. Note that this is a planned future feature. If you have an on-premises cluster and would like to track these costs, see the [OpenCost](/opencost) documentation.
:::

As long as the cost data for an underlying cluster instance is ingested into Vantage, it is possible to calculate the corresponding pod costs.

## Collected Metrics

The agent collects the following metrics:

- Container
- Kubernetes service
- Kubernetes namespace
- Namespace labels
- Annotations (optionally enabled)

In addition, the agent also reflects the following items in Cost Reports:

- Reserved Instance and Savings Plan discounts
- Spot prices

## Install Vantage Kubernetes Agent

### Prerequisites

The following prerequisites are required before you install the Vantage Kubernetes agent:

- The [Helm package manager](https://helm.sh/) for Kubernetes 

- `kubectl`

- A running Kubernetes cluster

- A [Vantage API token](/vantage_account#get-a-vantage-api-token) with READ and WRITE scopes enabled

## Create a Connection

To set up a _new_ Kubernetes agent connection:

1. Add the repository for the Vantage agent Helm chart. 
   
   ```bash
   helm repo add vantage https://vantage-sh.github.io/helm-charts
   ```

2. Install the `vantage-kubernetes-agent` chart. Ensure you update the values for `VANTAGE_API_TOKEN` and `CLUSTER_ID`.
   
   ```bash
   helm install -n vantage vantage-kubernetes-agent vantage/vantage-kubernetes-agent --set agent.token=$VANTAGE_API_TOKEN,agent.clusterID=$CLUSTER_ID
   ```

3. From the Vantage console, on the [Integrations page](https://console.vantage.sh/settings/integrations), click....then click....


Costs are aggregated and exported several times throughout the day and updated within the Vantage platform nightly.

## Migrate Costs from OpenCost to Vantage Kubernetes Agent

If you are moving from an OpenCost integration to the agent-based integration, you can contact [support@vantage.sh](mailto:support@vantage.sh) to have your previous integration data maintained.

### Maintaining OpenCost Filters

If you previously used the OpenCost integration and are transitioning to the new agent-based integration, your existing filters will be retained. It's important to note that, in situations where labels contained characters excluded from Prometheus labels, such as `-`, the OpenCost integration received the normalized versions of those labels from Prometheus. The Vantage agent, on the other hand, directly retrieves labels from the `kube-apiserver`, resulting in more precise data. However, this change may necessitate updates to filters that previously relied on the normalized values. You can contact [support@vantage.sh](mailto:support@vantage.sh) to have these filters converted for you.
