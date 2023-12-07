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

- **Kubernetes Cost Reports.** Use Cost Reports to drill into costs by Cluster, Namespace, Service, and Label, as well as combine Kubernetes costs with other providers, such as a database or cache layer.
- **Kubernetes Efficiency Metrics and Reports.** Display the cost efficiency down to the pod level of a cluster. These metrics are useful for rightsizing and cost optimization. You can also create efficiency reports based on these metrics.

## Kubernetes Cost Reports

Kubernetes Cost Reports provide cost visibility by Cluster, Label, Namespace, and Service. They include Kubernetes-specific filters and filter logic. You can combine specific Kubernetes costs with other services. In the below example, the filter includes the costs of a specific service with corresponding RDS database costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource Reports" width="60%" src="/img/vantage-kubernetes-reporting.png" />
</div>

Cost Reports also provide [forecasts](/forecasting). These forecasts are updated daily and provide confidence intervals for what your costs are likely to be for the month.

### Cost Data Source

The costs displayed on these reports come from your integration with the [Vantage Kubernetes agent](/kubernetes_agent). The agent calculates the cost of a running pod by analyzing the CPU, RAM, GPU, as well as storage usage and calculates the cost of each input based on the cost of the underlying infrastructure.

The [agent uses a formula](/kubernetes#efficiency-calculations) to divide the cost of a compute instance into CPU, RAM, and GPU and then computes the cost per hour for each type of resource. The agent does all the cost allocation calculations locally in your cluster and makes this data available for querying.

:::note
Kubernetes costs are not included in monthly tracked infrastructure costs as they’re already captured from underlying EKS, GKE, or AKS costs.
:::

## Kubernetes Efficiency Metrics and Reports

### View Kubernetes Efficiency Metrics

1. Navigate to the [Kubernetes page](https://console.vantage.sh/kubernetes) in the Vantage console.
2. On the left navigation menu, select and option to view connected **Clusters**, **Namespaces**, or **Labels**. Each view contains a graph as well as a table with the following headings:
   - **Name.** The name of the Cluster, Namespace, or Label you’re viewing.
   - **Idle Costs.** A dollar value representation for the number of resources requested idle resources.
   - **Total Costs.** A dollar value representation of the total cost of the resources.
   - **Cost Efficiency.** The percent ratio of idle costs to total costs.
3. Filter a cluster's efficiency metrics by date or resource:
   - From the top right of the graph, change the date range to see how costs have changed over time.
   - From the resource list below each chart, click the icons next to each resource to view different aggregations. Click the **View on chart** button to isolate that specific resource on the chart.

### Create Efficiency Reports

With Kubernetes efficiency reports you can filter your Kubernetes cost data and create reports based on their filters. You have the option to filter for costs by Cluster, Namespace, or Label.

:::note
Labels include namespace labels, and if enabled in your Kubernetes agent integration, [annotations](/annotations). See the [Vantage Kubernetes agent documentation](/kubernetes#enable-annotations-namespace-labels) for information on how to enable these parameters.
:::

1. Navigate to the [Kubernetes page](https://console.vantage.sh/kubernetes) in the Vantage console.
2. On the left navigation menu, select **Efficiency Reports**. All existing Kubernetes efficiency reports will be listed, along with the creator and date when the report was created.
3. From the top right of the screen, click **New Report**. Like the efficiency metrics view, a chart with idle costs is displayed. Below the chart, a table is displayed with the following columns: the resource's name, **Idle Costs**, **Total Costs**, and **Cost Efficiency**.
4. To filter costs, click the **Filters** button at the top left of the chart:
   - The **Kubernetes costs where...** tile is displayed. Click **+ New Rule**.
   - For **Category**, select wither **Cluster**, **Namespace**, or **Label**.
   - Two additional dropdown menus are displayed. Select **is** or **is not** based on your desired filter criteria, then select one or more Clusters, Namespaces, or Labels from the list.
   - Click **Save**.
   <details><summary>Click to view visual example</summary>
   <div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="Create Kubernetes Efficiency filters" width="100%" src="/img/create-filter.gif" />
   </div>
   </details>
5. You can optionally edit your existing rule or add additional filter criteria:
   - To edit the rule you just created, select the rule, make your changes, then, click **Save**.
   - I you want to add a rule to filter multiple criteria, such as filter by certain Clusters and another rule to filter by certain Namespaces, click **+ New Rule**. Add the additional criteria and save.
   - To add a separate rule set, click **+ New Filter**. This rule set will be displayed as **Or Kubernetes costs where...**.
   - To delete a rule set, click the trashcan icon on the top right of the rule set.
   <details><summary>Click to view visual example</summary>
   <div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="Add OR clause to Kubernetes Efficiency Report" width="100%" src="/img/add-or-clause.gif" />
   </div>
   </details>
6. Above the rule sets, click **Apply**. The graph will update with your existing filter criteria.
7. You have the option to further drill down into your costs:
   - Above the graph, click the **Aggregate By** dropdown menu. Select either **Idle Costs** or **Total Costs**.
   - To adjust aggregation dimensions, above the graph, click the **Group By** dropdown menu. Select one or more of the following options: **Cluster**, **Namespace**, and specific **Label**.
   - To adjust date binning, select the menu at the top right of the graph. Select either **Daily**, **Weekly**, or **Monthly**.
   - To change the date range, click the date picker at the top right of the graph and adjust the date range.
8. To save the efficiency report, click **Save as New**. To edit the name, click the pencil icon next to the existing report name in the report breadcrumbs, then click **Save**.

You can edit the filter criteria on a report at any time. Ensure you click **Save** once you are done making changes.

### Add an Efficiency Report to Dashboard

You can add your efficiency reports to [Dashboards](/cost_reports#dashboards). These reports wil be displayed on the dashboard, along with other cost and segment reports

1. From the top navigation, click **Cost Reporting**.
2. From the side navigation, click **Dashboards**.
3. Select an existing dashboard, or click **+ New** to create a new dashboard.
   - If you are creating a new dashboard:
     - Enter a **Name**.
     - Under **Add Reports**, find your efficiency report.
     - Click **Save**.
   - If you want to add the report to an existing dashboard:
     - At the top right of the existing dashboard, click **Edit**.
     - Under **Add Reports**, find your efficiency report.
     - Click **Save**.

### Efficiency Calculations {#efficiency-calculations}

Pod resource efficiency is defined as the resource utilization versus the resource request over a given time window. These resource utilization metrics include CPU and RAM. When viewing efficiency, it will be shown as a percentage. 100% means the resource allocation is fully efficient.

Idle costs are defined as the difference between the cost of requested resources (CPU and Memory) and the associated usage of those costs:

```bash
idle_cost = (cpu_request_cost - cpu_usage_cost) +
            (memory_request_cost - memory_usage_cost)
```

Efficiency metrics are available immediately after your OpenCost metrics are imported, generally once per day. For more information on how container costs are allocated for OpenCost integrations, see the [OpenCost specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md).

## Kubernetes Integration Methods

:::tip
Vantage recommends integrating with the [Vantage Kubernetes agent](/kubernetes_agent) to utilize the most granular reporting features and the cost-efficiency metrics.
:::

### Vantage Kubernetes Agent

Costs are exported from the cluster hourly and then made available nightly. Costs are calculated once the costs from the cluster’s corresponding infrastructure are available, which often takes 48 hours. These costs might encounter delays based on their associated cloud integration's cost data. For instance, if there is a one-day delay in an AWS Cost and Usage Report, the clusters dependent on that data will experience a similar delay.

### OpenCost Integrations

While Vantage works to upstream the efficiency metrics into the main OpenCost project, you can also deploy the Vantage-maintained OpenCost branch via [the OpenCost repository](https://quay.io/repository/vantage-sh/opencost?tab=tags&tag=latest).

Efficiency metrics will be available up to 24 hours after updating your clusters. You can query the Amazon Managed Prometheus associated with your integration for `count(container_cpu_idle) by (cluster_id)` to verify the metrics are making it from your Kubernetes cluster to the Prometheus that Vantage will use to periodically gather the metrics.

In most cases, Prometheus running on a Kubernetes cluster will not be exposed with a public endpoint. As a workaround, a second centralized Prometheus instance is deployed into your account. This instance is used as an aggregation point that Vantage has both network and IAM access to query. Vantage can integrate with any publicly accessible Prometheus endpoint, including Grafana Cloud.
