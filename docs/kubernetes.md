---
id: kubernetes
title: Kubernetes Costs
description: Kubernetes cost reporting and efficiency metrics documentation for Vantage including costs by cluster, namespace, and label as well as idle costs and pod efficiency metrics.
keywords:
    - Kubernetes 
    - Kubernetes costs
    - Kubernetes efficiency metrics
---

# Kubernetes Costs and Efficiency Metrics

Vantage has two sets of tools for viewing and optimizing Kubernetes costs: viewing Kubernetes costs in [Cost Reports](/cost_reports) and viewing Kubernetes efficiency metrics in the devoted [Kubernetes page](https://console.vantage.sh/kubernetes) in the console. 
- **Kubernetes Cost Reports** are most useful to drill into costs by Cluster, Namespace, Service, and Label as well as combine Kubernetes costs with other providers, such as a database or cache layer. 
- **Kubernetes Efficiency Metrics** display the cost efficiency down to the pod level of a cluster and are useful for rightsizing and cost optimization.

## Kubernetes Cost Reports

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/vantage-kubernetes-reporting.png" />
</div>

Kubernetes Cost Reports have cost visibility by Cluster, Label, Namespace, and Service. They include Kubernetes-specific filters and filter logic. This allows you to combine specific Kubernetes costs with other services. For example, a customer can see the costs of a specific service with corresponding RDS database costs.

Cost Reports also include forecasts, which define Kubernetes-specific filters that will receive end-of-month forecasts. These forecasts are updated daily and give you confidence intervals of where your costs are likely to end up for the month.

The costs displayed on these reports come from the [Vantage Kubernetes agent](/kubernetes_agent). The agent calculates the cost of a running pod by looking at the CPU, RAM, GPU, and storage usage and calculates the cost of each based on the cost of the underlying infrastructure. There is a formula for dividing the cost of a compute instance into CPU, RAM and GPU which then computes the cost per hour of each type of resource. The agent does all the cost allocation calculations locally to your cluster and makes this data available for querying.

Kubernetes costs are not included in monthly tracked infrastructure costs as they’re already captured from underlying EKS, GKE, or AKS costs.

## Kubernetes Efficiency Metrics

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/k8s-efficiency.png" />
</div>

Navigate to the [Kubernetes portion](https://console.vantage.sh/kubernetes) of the Vantage console to view Kubernetes costs and efficiency metrics. On the left navigation menu, select an option to view connected Clusters, Namespaces, and Labels. Each view contains a graph as well as a table with the following headings:

- **Name**. The name of the Cluster, Namespace, or Label you’re viewing.
- **Idle Costs**. A dollar value representation of the amount of resources requested that are idle.
- **Total Costs**. A dollar value representation of the total cost of resources.
- **Cost Efficiency**. The percent ratio of idle costs and total costs.

You can filter efficiency metrics for a cluster using a few different options:

- Change the date range to see how they have changed over time. Select the date options on the top right of the chart. 
- Change the aggregation to see the metrics by Cluster, Namespace, or Label. From the resource list below each chart, click the icons next to each resource to view different aggregations. 

### Efficiency Calculations

Pod resource efficiency is defined as the resource utilization versus the resource request over a given time window. These resource utilization metrics include CPU and RAM. When viewing efficiency, it will be shown as a percentage. 100% means the resource allocation is fully efficient.

Idle costs are defined as the difference between the cost of requested resources (CPU and Memory) and the associated usage of those costs:

```
idle_cost = (cpu_request_cost - cpu_usage_cost) +
            (memory_request_cost - memory_usage_cost)
```

Efficiency metrics are available immediately after your OpenCost metrics are imported, generally once per day. For more information on how container costs are allocated for OpenCost integrations, see the [OpenCost specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md).

## Integration Methods

:::tip
Vantage recommends integrating with the [Vantage Kubernetes Agent](/kubernetes_agent) to utilize the most granular reporting features and the cost-efficiency metrics. 
:::

For the Vantage Kubernetes Agent, costs are exported from the cluster hourly and then made available nightly. It's important to note that these costs might encounter delays based on their associated cloud integration's cost data. For instance, if there is a one-day delay in an AWS Cost and Usage Report, the clusters dependent on that data will experience a similar delay.

For OpenCost integrations, while we work to upstream the efficiency metrics into the main OpenCost project, you can deploy the Vantage-maintained OpenCost branch via [the repository](https://quay.io/repository/vantage-sh/opencost?tab=tags&tag=latest).

Efficiency metrics will be available up to 24 hours after updating your clusters. For OpenCost users, you can query the Amazon Managed Prometheus associated with your integration for `count(container_cpu_idle) by (cluster_id)` to verify the metrics are making it from your Kubernetes cluster to the Prometheus that Vantage will use to gather them periodically.

In most cases, Prometheus running on a Kubernetes cluster will not be exposed with a public endpoint. To get around this a second centralized Prometheus instance is deployed into your account to be used as an aggregation point which Vantage has both network and IAM access to query. Vantage can integrate with any publicly accessible Prometheus endpoint—including Grafana cloud.
