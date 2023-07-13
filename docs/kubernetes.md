---
description: Kubernetes cost reporting and efficiency metrics documentation for Vantage including costs by cluster, namespace, and label as well as idle costs and pod efficiency metrics.
---

# Kubernetes Costs

Vantage has two sets of tools for viewing and optimizing Kubernetes costs. The first is Kubernetes costs reporting in [Cost Reports](/cost_reports). The second is Kubernetes efficiency metrics in the devoted [Kubernetes](https://console.vantage.sh/kubernetes) page in the console. Kuberentes Cost Reports are most useful to drill into costs by cluster, namespace, service, and label as well as combine Kubernetes costs with other providers such as a database or cache layer. Kubernetes Efficiency Metrics display the cost efficiency down to the pod level of a cluster and are useful for rightsizing and cost optimization.

## Kubernetes Cost Reporting

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/vantage-kubernetes-reporting.png" />
</div>

Kuberentes Cost Reports have cost visibility by Cluster, Label, Namespace, and Service. They include Kubernetes-specific filters and filter logic. This allows you to combine specific Kubernetes costs with other services. For example, a customer can see the costs of a specific service with corresponding RDS database costs.

Cost reports also include forecasts which define Kubernetes specific filters will receive end-of-month forecasts. These forecasts are updated daily and give you confidence intervals of where your costs are likely to end up for the month.

The costs displayed on these reports come from [OpenCost](/opencost). OpenCost calculates the cost of a running pod by looking at the CPU, RAM, GPU and storage usage and calculates the cost of each based on the cost of the underlying infrastructure. There is a formula for dividing the cost of a compute instance into CPU, RAM and GPU which then computes the cost per hour of each type of resource. OpenCost does all of the cost allocation calculations locally to your cluster and makes this data available for querying.

Kubernetes costs are not included in monthly tracked infrastructure costs as they’re already captured from underlying EKS, GKE, or AKS costs.

## Kubernetes Efficiency Metrics

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="80%" src="/img/k8s-efficiency.png" />
</div>

There is a [Kubernetes](https://console.vantage.sh/kubernetes) portion of the Vantage console devoted to viewing Kubernetes costs and efficiency metrics. You can view connected clusters, namespaces and labels with the following information:

- Name: The name of the cluster, namespace of label you’re viewing.
- Idle Cost: A dollar value representation of the amount of resources requested that are idle.
- Total Cost: A dollar value representation of the total cost of resources.
- Cost Efficiency %: The ratio of idle costs and total costs.

When viewing efficiency metrics for a cluster you can filter them in a couple different ways:

- Change the date range to see how they have changed over time
- Change the aggregation to see the metrics by cluster, namespace, label.

### Efficiency Calculations

Pod resource efficiency is defined as the resource utilization versus the resource request over a given time window. These resource utilization metrics include CPU and RAM. When viewing efficiency it will be shown as a percentage. 100% means the resource allocation is fully efficient.

Idle costs are defined as the difference between the cost of requested resources (CPU and Memory) and the associated usage of those costs:

```
idle_cost = (cpu_request_cost - cpu_usage_cost) +
            (memory_request_cost - memory_usage_cost)
```

Efficiency metrics are available immediately after your OpenCost metrics are imported, generally once per day. For more information on how container costs are allocated, please consult the [OpenCost specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md).

## Integration Methods

Vantage recommends installing [OpenCost](/opencost) in your cluster in order to utilize our most granular reporting features and the cost efficiency metrics. While we work to upstream the efficiency metrics into the main OpenCost project, you can deploy the Vantage-maintained OpenCost branch at [quay.io/vantage-sh/opencost:efficiency](https://quay.io/vantage-sh/opencost:efficiency).

Efficiency metrics will be available up to 24 hours after updating your clusters. You can query the Amazon Managed Prometheus associated with your integration for `count(container_cpu_idle) by (cluster_id)` to verify the metrics are making it from your Kubernetes cluster to the Prometheus that Vantage will use to gather them periodically.

In most cases Prometheus running on a Kubernetes cluster will not be exposed with a public endpoint. To get around this a second centralized Prometheus instance is deployed into your account to be used as an aggregation point which Vantage has both network and IAM access to query. Vantage can integrate with any publicly accessible Prometheus endpoint - including Grafana cloud.

For Google Cloud, Azure, and on-prem support for Kubernetes efficiency metrics, please contact us at [support@vantage.sh](mailto:support@vantage.sh).

### Why we Recommend OpenCost vs Container Insights

Container Insights stores all pod level system metrics such as CPU and RAM. From there Vantage queries CloudWatch for these metrics and does the cost allocation calculation. Container Insights is more expensive for users to run as they have to pay to store the system metrics and pay for the cost of Vantage querying these costs.
