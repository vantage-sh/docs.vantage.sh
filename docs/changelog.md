---
id: changelog
title: Changelog
description: A changelog of all user-facing updates to the Vantage console as well as API updates.
keywords:
  - Changelog
  - Release notes
pagination_prev: null
pagination_next: null
image: /img/product_changelog.jpg
---

# Changelog

_This page was last updated on May 15, 2025, with product updates for May 2025._

## May 2025

### Product Updates 

- **Anomaly Detection with Resource Attribution**: Vantage will [associate Anomalies with individual Resource ARN’s](https://www.vantage.sh/blog/resource-anomalies) that caused them to enable faster root-cause analysis
- **Filter by Human Readable Name**: If a resource has a human readable name in Vantage, you can now search for that in addition to the resource ARN when using Filters.
- **Human Readable Names in Cost Report Legends**: Human readable names now replace the ARN of a resource in the legend when viewing a [Cost Report](https://docs.vantage.sh/cost_reports).
- **EFS in Active Resources**: EFS has been added as an [Active Resource](https://docs.vantage.sh/active_resources).
- **Business Metric Sources:** The source of your Business Metric, either Datadog, Cloudwatch, or CSV, will now be displayed in the Business Metrics List page
- **Google OAuth**: Google Workspace is now available for for SSO authentication.

### Kubernetes Agent Updates 

- **Anomaly Alerts**: Anomaly Alerts endpoint now returns the resource that drove the anomaly, if applicable
- **Data Export:** New `/costs/data_exports` [endpoint](https://vantage.readme.io/reference/createcostexport) and `/data_exports/{data_export_token}` [endpoint](https://vantage.readme.io/reference/getdataexport) available to initiate a CSV export of a Cost Report, and check on the status of an export to retrieve the URL to download the report
- **Business Metrics**: The `/business_metrics` [endpoint](https://vantage.readme.io/reference/createbusinessmetric) now has new objects for datadog_metric_fields and cloudwatch_fields in order to configure Datadog and Cloudwatch Business Metric integrations programatically
- The following updates were made to the Terraform provider. The latest version is [version 0.1.60](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs)
    - `vantage_business_metric` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/business_metric) now has additional optional attributes for `cloudwatch_fields` and `datadog_metroc_fields`
    - `cost_alerts` data source

- **Configurable Polling Period:** You can now set [configurable polling periods](https://www.vantage.sh/blog/ephemeral-workload-monitoring) for the Vantage kubernetes agent, as short as 5 seconds.

### API Updates

## April 2025

### Product Updates 

- **Vantage MCP Server:** The [Vantage MCP Server](https://www.vantage.sh/blog/vantage-mcp) is now generally available, which allows customers to seamlessly interact with Vantage through LLM tools.
- **Custom Cost Alerts:** The [Cost Alerts](/cost_alerts) feature automatically detects and notifies you of cost changes—whether by percentage or fixed amount—across customizable time periods, like day-over-day, month-over-month, or quarter-over-quarter.
- **Twilio Integration:** Vantage now integrates with [Twilio](https://docs.vantage.sh/connecting_twilio) as its latest cost provider.
- **Datadog Query Syntax:** Customers can now use [Datadog queries](https://docs.vantage.sh/per_unit_costs#importing-from-datadog) directly within Vantage to import Business Metrics.
- **Unit Cost Export:** You can now [export Unit Costs](https://docs.vantage.sh/cost_reports#exporting-cost-reports) from Cost Reports from the Vantage console.
- **App integrations:** The connection workflows for [Microsoft Teams](/microsoft_teams) and [Slack](/slack) have moved from the **Notifications** page to the **Settings** page in the App integrations section.
- **Jira budget display fix:** A fix was made to the **Budget Alerts** screen so that if a [Jira alert](/jira) is set for a budget, this now displays for configured alerts.
- **EBS volume unattached times:** EBS volume attach/detach times are available when querying EBS volume [active resources](/active_resources).
- **MSP updates:** The following updates were released for the [Vantage for MSPs](/partners) feature:
  - Optional start and end dates are added to adjustment billing rules.
  - The Retiering adjustment billing rule now has an option for whether to include Free Tier.
  - You can now use the **Apply to All** functionality to add a new billing rule to all new and existing Managed Accounts.
  - A new button for deleting a billing rule from a Managed Account is available on the Managed Account's billing rule settings.
- **Azure amortization:** You can now switch between viewing your actual costs and your [amortized costs](/connecting_azure#azure-amortization) in Azure Cost Reports.
- **Snowflake query tags:** [Snowflake](/connecting_snowflake) query tags that are written in JSON will now be parsed accordingly and turned into tag key/values. 
- **Savings Plan Covered Spend renamed:** Savings Plan Covered Spend has been renamed in reports to Savings Plan Discounted Spend in [Financial Commitment Reports](https://docs.vantage.sh/financial_commitment_reports). 
- **ARN names:** ARN names have been added to EBS and CloudFront. When viewing a CloudFront distribution in a Cost Report, the domain is displayed instead of the shortened ARN for easier reading. In Cost Reports and Active Resource views, when a human-readable name is available for an EBS volume, the ARN is replaced for a more readable experience.
- **Cloudwatch metrics for EBS:** you can now view VolumeReadBytes, VolumeWriteBytes, and VolumeQueueLength directly within [Resources Reports](https://docs.vantage.sh/active_resources/) for EBS volumes.
- **New report placeholder:** The default text in the Save Report modal for Cost Reports has been updated—you no longer need to delete "Untitled Report" before entering a title.
- **Hover state added to Autopilot managed service graphs:** you can now hover over the charts within [Autopilot](https://docs.vantage.sh/autopilot#autopilot-graphs).
- **Updated UI for Business Metrics:** we have updated the UI for business metrics for [Business metrics](https://docs.vantage.sh/per_unit_costs). You can now find your imported your data in the “Imported Metrics” tab.
- **Description added to EC2 Termination Recommendations:** we now include more specific language in the Recommendations tab and Active Resources for EC2 instances that are recommended to be terminated.
- **Support for Multiple label grouping values for Datadog Business Metrics:** you can now group by multiple label values for Datadog Business Metrics.
- **Unit Standardization for Hours:** Vantage will now automatically correct various forms of the “Hours” usage units across providers, such as “Hrs” or “hr” to enhance group-by experiences for usage types that use hours.

### Kubernetes Agent Updates 

- **Updated Efficiency Calculations:** Kubernetes [efficiency calculations](https://docs.vantage.sh/kubernetes#efficiency-calculations) will now be prorated based on node uptime for a more accurate calculation. 

### API Updates

- **Dashboards endpoint:** On the `/dashboards` [endpoint](http://vantage.readme.io/reference/updatedashboard), you can now pass an empty string to the `date_interval parameter`. In addition, `end_date` is now an optional parameter. 
- **Costs endpoint:** The `workspace_token` and `page` parameters are now available on the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts).
- **Anomaly filtering:** Filtering (e.g., for category or provider) parameters have been added to the `/anomaly_alerts` [endpoint](https://vantage.readme.io/reference/getanomalyalerts). 
- **Cost Alerts endpoints:** New `cost_alerts` [endpoints](https://vantage.readme.io/reference/getcostalertevent) are available to support the newly released Cost Alerts feature.
- **Unit Costs:** The new endpoint `/unit_costs` [endpoint](https://vantage.readme.io/reference/getunitcosts) lets you retrieve the Unit Costs for a Cost Report
- **Updates to Billing Rules API:** New params of `start_date`, `end_date`, and `apply_to_all` for additional flexibility when creating billing rules
- **Data Export API:** The new endpoint
- **Pagination in Tags API endpoint:** results in the /tags endpoint are now paginated for better experience when fetching large list of tag keys or tag values.
- The following updates were made to the Terraform provider. The latest version is [version 0.1.56](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs):
    - `vantage_cost_alerts` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs) was added
    - `vantage_billing_rule` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/billing_rule) was updated to include `start_period`, `end_period`, and `apply_to_all`
 
## March 2025

### Product Updates

- **cur.vantage.sh console integration:** [cur.vantage.sh](https://cur.vantage.sh/) integrates with the Vantage console. Navigate to descriptions for subcategory costs on Cost Reports and service descriptions on Resource Reports. 
- **New cost provider integrations:** Support is now available for [Temporal](/connecting_temporal) and [ClickHouse Cloud](/connecting_clickhouse) costs in the console. Support has also been updated for the [GitHub](/connecting_github) integration to use the new Enhanced Billing API.
- **Virtual Tags updates:** The following Virtual Tags updates were released this month:
  - [Nested Virtual Tags](/tagging#nested-virtual-tags) allow you to use the filter criteria from existing Virtual Tags in the creation of new Virtual Tags.
  - Pagination has been added to the Virtual Tags page to assist with readability.
- **Vantage for MSPs updates:** The following updates are available for [Vantage for MSPs](/partners) functionality:
  - A new adjustment for [Re-Rate to Public Pricing](/partners#rerate-public) allows Vantage for MSPs users to revert their customers’ pricing back to list price, removing any enterprise discounts or private pricing
  - A new adjustment for [Remove SP/RI Discounts](/partners#remove-discounts) lets Vantage for MSPs users decide which Reserved Instance and Savings Plan benefits their end customers receive.
  - A new adjustment for [Re-Rate Tiered Discounts](/partners#rerate-tiered) lets Management Accounts recalculate tiered pricing models for applicable services for a customer's Managed Account.
  - A customer Managed Account's **Tracked Spend** is now displayed on the **Managed Accounts** homepage.
- **Kubernetes report updates:** The following updates are available for Kubernetes Cost Reports and Efficiency Reports:
  - The Kubernetes `__idle__` namespace is now enabled by default on [Kubernetes Efficiency Reports](/kubernetes#idle-namespace).
  - Filtering by [category](/kubernetes#kubernetes-cost-reports) to see CPU, RAM, and GPU is available on Kubernetes Cost Reports.
  - The aggregated total metric is now available at the top of Kubernetes Efficiency Reports. 

### Kubernetes Agent Updates {#k8s-march-25}

The Vantage Kubernetes agent now supports ingesting costs for Amazon SageMaker hyperpods. See [February's update](/changelog#k8s-feb-25) for other recent updates.

### API Updates

- **Costs endpoint:** The `filters` parameter is now available on the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts). If this parameter is supplied, you do not need to supply the `cost_report_token` parameter.  
- **Dashboards endpoint:** A fix was made on the `/dashboards` [endpoint](https://vantage.readme.io/reference/createdashboard) so that you can create a dashboard with a null date interval.


## February 2025

### Product Updates

- **Business metrics on reports:** The [business metrics](/per_unit_costs) line is now displayed on reports, regardless of binning type (e.g., cumulative, daily). 
- **Forecasts on segment reports:** Forecasts are now displayed on ungrouped [segment reports](/segments).
- **Budget hierarchy chart updates:** On the [Budgets **Hierarchy**](/budgets#budget-hierarchy) screen, when you hover over the chart, the difference between the total budget and actual spend is now displayed. The chart is also updated to show costs aggregated by day rather than month.
- **Tag updates:**
  - On the **Group by** menu in reports, when you select to group by **Tag**, an icon indicating the associated cost provider is displayed next to each listed tag key.
  - On the **Tags** configuration screen, the **View in Cost Report** button is now available for [Virtual Tags](/tagging).
  - When creating a custom tag value filter on the **Virtual Tags** screen, hidden tags are now displayed with a hidden eye icon, indicating they are only usable in Virtual Tag configurations.
  - The `@` character is now an accepted character for Virtual Tag value names.
- **Grafana Cloud integration:** Vantage now integrates with [Grafana Cloud](/connecting_grafana) as its latest cost provider.
- **View as VQL:** On Financial Commitment and Network Flow Report filters, a new button is available to see the [VQL](/vql) representation of a Financial Commitment or Network Flow Report filter.
- **cur.vantage.sh:** The new microsite, [cur.vantage.sh](https://cur.vantage.sh/), helps you decode AWS Cost and Usage Report (CUR) billing codes for any AWS service.

### Kubernetes Agent Updates {#k8s-feb-25}

- Version 1.0.28, Helm Chart [vantage-kubernetes-agent-1.1.0](https://github.com/vantage-sh/helm-charts/releases/tag/vantage-kubernetes-agent-1.1.0), includes the following update: 
  - Support was added for mounting volumes to the agent.

### API Updates

- **Business metric values endpoint:** The new `/business_metrics/{business_metric_token}/values` [endpoint](https://vantage.readme.io/reference/getbusinessmetricvalues) lets you return values related to a business metric.
- **Forecasted costs endpoint:** The new `/cost_reports/{cost_report_token}/forecasted_costs` [endpoint](https://vantage.readme.io/reference/getforecastedcosts) lets you retrieve projected future spend from a Cost Report.
- **Tags endpoint:** The new `/tags/{key}/values` [endpoint](https://vantage.readme.io/reference/gettagvalues) lets you retrieve corresponding tag values for a given tag.
- **Date bucket on costs:** The `date_bin` parameter is now available on the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts). 
- **Network Flow Reports endpoint:** The `/network_flow_reports` [endpoint](https://vantage.readme.io/reference/createnetworkflowreport) lets you create and manage Network Flow Reports with `POST`, `GET`, `DELETE`, and `PUT` methods.
- **Financial Commitment Reports endpoint:** The `/financial_commitment_reports` [endpoint](https://vantage.readme.io/reference/createfinancialcommitmentreport) lets you create and manage Financial Commitment Reports with `POST`, `GET`, `DELETE`, and `PUT` methods.
- The following updates were made to the Terraform provider. The latest version is [version 0.1.46](https://github.com/vantage-sh/terraform-provider-vantage/releases/tag/v0.1.46).
  - The following resources and data source were added:
    - `vantage_network_flow_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/network_flow_report)
    - `vantage_financial_commitment_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/financial_commitment_report)
    - `vantage_financial_commitment_reports` [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/financial_commitment_reports)
  - The `vantage_business_metric` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/business_metric) is updated to support the above-mentioned modification to the corresponding API endpoint, which no longer returns the `values` field in the API response. Values are now served via the `/business_metrics/{business_metric_token}/values` endpoint.

## January 2025

### Product Updates

- **Tagging updates:** Multiple updates were released related to tagging and [virtual tags](/tagging):
  - New Tags Settings page to manage virtual and provider-created tags
  - The ability to hide and unhide tag keys
  - The ability to view an associated Cost Report for a given tag
- **Jira integration:** Vantage integrates with [Jira](/jira) for tracking issues connected to budget alerts, cost anomalies, and Resource Reports. 
- **Annotations for Budget Alerts:** An [annotation](/annotations#budget-alert-annotations) is now added to the corresponding Cost Report when a budget alert is triggered.
- **Filter by Commitment ARN:** You can now filter by Commitment ARN on [Financial Commitment Reports](/financial_commitment_reports#create-report) to understand the discount impact of a single Savings Plan or Reserved Instance. 
- **Commitments pagination:** Pagination has been added to the [**Commitments** screen](https://console.vantage.sh/financial_planning/financial_commitments) for better readability when there are many commitments. 
- **Acronym searching for resource services:** A fix was added so that when searching for a specific resource in report filters, you can now search by common acronyms for AWS services, such as **RDS** or **S3**, rather than typing the full service name.
- **Budgets UI updates:** On the **Budgets** [screen](/budgets), you can now filter by **Budget Type**. Additional UI updates have been made to the **Performance** and **Hierarchy** screens.
- **Kubernetes Efficiency Report export:** You can now export [Kubernetes Efficiency Reports](/kubernetes#exporting-k8s-efficiency-reports) from the console. 

### Kubernetes Agent Updates {#k8s-jan-25}

- Version 1.0.28, Helm Chart [vantage-kubernetes-agent-1.0.40](https://github.com/vantage-sh/helm-charts/releases/tag/vantage-kubernetes-agent-1.0.40), includes the following updates: 
  - Default value for `disableKubeTLSverify` is corrected from `string` to `boolean`.
  - Now includes [sidecar init containers](https://kubernetes.io/docs/concepts/workloads/pods/sidecar-containers/) resource requests in pod resources.

### API Updates

- **Tags API:** The `tags` [endpoint](https://vantage.readme.io/reference/updatetag) was added with `PUT` and `GET` methods for retrieving all tags and hiding tags.
- **Usage API:** The `/costs` [endpoint](https://vantage.readme.io/reference/getcosts) has been updated to include the ability to aggregate by and retrieve usage values via the `settings[aggregate_by]` parameter.
- **Hierarchical budgets:** The `/budgets` [endpoint](https://vantage.readme.io/reference/getbudgets) is updated to return or specify `child_budget_tokens` for any hierarchical budgets.
- **Parameter name update:** On the `/kubernetes_efficiency_reports` [endpoint](https://vantage.readme.io/reference/createkubernetesefficiencyreport), the `date_bin` parameter is now `date_bucket`.

## December 2024

### Product Updates

- **OpenAI cost support:** Vantage now fully integrates with [OpenAI](/connecting_open_ai) as its latest cost provider.
- **Service aliases in Financial Commitment Reports:** When searching for services in [Financial Commitment Report](/financial_commitment_reports) filters, you can now search by common acronyms for AWS services, such as **RDS** or **S3**, rather than typing the full service name.
- **Explore menu:** The new **Explore** menu, on the top right of the console, allows you to perform quick actions, like view recent reports, view starred reports, and create new reports—all from one menu.
- **Customized Dashboards:** Vantage now supports the ability to move around the widget order on [Dashboards](/dashboards), change between chart and table widget types, and rename widgets directly from the Dashboard.
- **Hierarchical Budgets:** [Hierarchical Budgets](/budgets) are available to help you match your budgets to your organization's structure. Create parent-child budgeting relationships and hierarchies. 
- **AWS Model Training SKU Group:** The AWS Model Training SKU Group is added to the [supported custom pricing](/connecting_databricks#custom-pricing) Databricks SKU Groups.
- **Choose a currency display preference:** If your imported costs are already billed in a currency other than USD, you can enable a [display preference](/vantage_account#currency-conversion). This lets you view your costs with the appropriate currency symbol—without using Vantage's currency conversion rates. 

### Kubernetes Agent Updates

_See [September's update](/changelog#k8s-sept-24) for the most recent Kubernetes agent release._

### API Updates

- **Dashboards endpoint:** The `widget_tokens` parameter of the `/dashboards` [endpoint](https://vantage.readme.io/reference/createdashboard) now supports `CostReport`, `ResourceReport`, `KubernetesEfficiencyReport`, and `FinancialCommitmentReport` tokens.
- **Dashboards Terraform:** `widget_tokens` is now a supported parameter on the `vantage_dashboard` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/dashboard) and `vantage_dashboards` [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/dashboards).

## November 2024

### Product Updates

- **Update Dashboard order:** You now have the option to update the [report order](/dashboards#edit-dashboard-report-order) on Dashboards.
- **AWS human-readable account names:** In addition to the account number, the human-readable account name is now visible on the [AWS Integrations](/connecting_aws) page for AWS account integrations.
- **Virtual Tags processing status:** The "Processing..." indicator on [Virtual Tags](/tagging) now provides more accurate status updates, specifically for the initial run of new or updated Virtual Tag configurations.
- **Virtual Tags in Resource Reports:** You can now [filter by Virtual Tags](/active_resources#resource-report-filters) within Resource Report filters.
- **Linode integration:** Vantage now integrates with [Linode from Akamai Connected Cloud](/connecting_linode) as its latest cost provider.
- **Integration Owner role:** The new [Integration Owner role](/rbac) has all the privileges of the Editor role, as well as the ability to configure and manage access to provider integrations. The role does not have access to other sensitive configuration settings.
- **View as VQL:** On Kubernetes Efficiency Report filters, a new button is available to see the [VQL](/vql) representation of a Kubernetes Efficiency Report filter.
- **Costs drilldown:** New costs [drilldown options](/cost_reports#drilldown) are available to add additional targeted filters and grouping criteria to a Cost Report.
- **Service aliases:** When searching for services in report filters, you can now search by common acronyms for AWS services, such as **RDS** or **S3**, rather than typing the full service name.

### Kubernetes Agent Updates

_See [September's update](/changelog#k8s-sept-24) for the most recent Kubernetes agent release._

### API Updates

- **Kubernetes Efficiency Endpoint:** The following API methods were added to support the new `/kubernetes_efficiency_reports` [endpoint](https://vantage.readme.io/reference/createkubernetesefficiencyreport):
  - `POST` `/kubernetes_efficiency_reports`: Creates a new Kubernetes Efficiency Report
  - `PUT` `/kubernetes_efficiency_reports/{kubernetes_efficiency_report_token}`: Updates an existing Kubernetes Efficiency Report
  - `GET` `/kubernetes_efficiency_reports`: Retrieves all existing Kubernetes Efficiency Reports
  - `GET` `/kubernetes_efficiency_reports/{kubernetes_efficiency_report_token}`: Retrieves a specific Kubernetes Efficiency Report by its `kubernetes_efficiency_report_token`
  - `DELETE` `/kubernetes_efficiency_reports/{kubernetes_efficiency_report_token}`: Deletes a specific Kubernetes Efficiency Report by its `kubernetes_efficiency_report_token`
- **Terraform updates:** The following resource and data source were added to the Terraform Provider to support the new Kubernetes Efficiency Reports API:
  - `vantage_kubernetes_efficiency_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/kubernetes_efficiency_report)
  - `vantage_kubernetes_efficiency_reports` [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/kubernetes_efficiency_reports)

## October 2024

### Product Updates

- **Usage Reporting:** [Usage-Based Reporting](/usage_based_reporting) is available to provide infrastructure consumption in non-monetary metrics, such as virtual machine running hours, stored gigabytes of data, and read/write units consumed.
- **New Azure recommendations:** Additional [recommendations](/cost_recommendations#azure), such as for rightsizing, were added for Azure.
- **Visual UI updates:** Visual updates have been made to the look and feel of the Cost Reporting and Segments screens.
- **View as VQL:** On Resource Report filters, a new button is available to see the [VQL](/vql) representation of a Resource Report filter.

### Kubernetes Agent Updates

_See [September's update](/changelog#k8s-sept-24) for the most recent Kubernetes agent release._

### API Updates

- **User token endpoint:** The `last_seen_at` field is added to the response of the `/users/{user_token}` [endpoint](https://vantage.readme.io/reference/getuser).
- **Currency on workspaces:** The `enable_currency_conversion` parameter is added to the `/workspaces` [endpoint](https://vantage.readme.io/reference/createworkspace) to enable currency conversion on workspaces.
- **Resource Reports API:** The following endpoints were added to support the new Resource Reports API:
  - `POST` option for the `/resource_reports` [endpoint](https://vantage.readme.io/reference/createresourcereport)
  - `PUT` option for the `/resource_reports/{resource_report_token}` [endpoint](https://vantage.readme.io/reference/updateresourcereport)
  - `GET` option for `/resources` [endpoint](https://vantage.readme.io/reference/getreportresources)
  - `GET` option for the `/resources/{resource_token}` [endpoint](https://vantage.readme.io/reference/getresource)
  - [VQL is now available](/vql_resource_report) with its own namespace and schema to support creating and managing Resource Reports
- **Resource Reports Terraform updates:** The following resource and data source were added to the Terraform Provider to support the new Resource Reports API:
  - `vantage_resource_report` [Terraform resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/resource_report)
  - `vantage_resource_reports` [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/resource_reports)
- **`vantage-go` updates:** [Version 0.0.40](https://github.com/vantage-sh/vantage-go) of the `vantage-go` library includes the following updates:
  - `GET /resources` added
  - `GET`/`PUT`/`POST`/`DELETE` of `/resource_reports`
  - `PUT /workspaces` can now configure currency for a workspace
  - `/users` API response now includes `last_seen_at`
- You can now use `terraform import` to manage Terraform resources outside of the current state on the [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs).

## September 2024

### Product Updates

- **Currency conversion:** You can now set a [presentational currency](/vantage_account#currency-conversion), on a per-workspace basis, to visualize cost reporting data in a currency of your choice.
- **Datadog integration update:** Vantage provides a [visual alert](/connecting_datadog#update-datadog) in the integration settings screen when the Datadog integration requires an update.
- **Datadog hosts costs:** For cloud resources that have the Datadog agent installed, Vantage [can associate](/active_resources#datadog-host-costs) Datadog per-host fees along with the primary cloud resources from AWS, Azure, and Google Cloud that drive those costs.
- **Auto-generated Datadog Resource Reports:** Vantage automatically generates a Resource Report when it finds the Datadog Agent installed on relevant resources. Auto-generated reports will have a name similar to _AWS EC2 Instances with the Datadog Agent Installed_.
- **Visual UI updates:** Visual updates have been made to the look and feel of the Cost Reporting sidebar.
- **View as VQL:** On Cost Report filters, a new button is available to see the [VQL](/vql) representation of a Cost Report filter.
- **GitHub integration:** Vantage now integrates with GitHub. See the [Connecting GitHub](/connecting_github) documentation for details on how to get started.
- **New Autopilot banner:** A banner is now displayed at the top of the **Coverage Overview** page on [Autopilot](/autopilot) when a Savings Plan is purchased.
- **Drill down on Cost Reports:** You can now [drill down](/cost_reports#category-and-subcategory-cost-filters) in the Cost Report table when the report is grouped by more than three options.
- **Account search for Cost Recommendations:** Organizations with many accounts can now search for an account to filter by on the [Cost Recommendations](/cost_recommendations) screen.
- **Faster Budget loads:** Performance improvements were made to the [Budgets](/budgets) page for faster page loads.
- **Cost Report link in Slack alerts:** A link to the corresponding Cost Report is now displayed on Slack budget alerts.
- **AWS Organization tags:** You can now filter and group by [AWS Organization tags](/cost_reports#aws-organization-tags) on Cost Reports.

### Kubernetes Agent Updates {#k8s-sept-24}

- **Updated cost calculation:** Kubernetes Efficiency Reporting and Rightsizing Recommendations now accurately [calculate pod costs](/kubernetes#cost-data-source) down to the minute, meaning if a pod runs for only 5 minutes within an hour, Vantage recognizes only 5 minutes of spend, rather than the full hour.
- Version 1.0.26, Helm Chart [vantage-kubernetes-agent-1.0.36](https://github.com/vantage-sh/helm-charts/releases/tag/vantage-kubernetes-agent-1.0.36), includes the following update:
  - Added support for `podSecurityContext` to define the security options the pod should be run with

### API Updates

[v0.1.27](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs) of the Vantage Terraform Provider is now available:

- The `created_by_token` is now available as an option on the [`vantage_budgets`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/budgets) data source.

## August 2024

### Product Updates

- **Savings Planner visual updates:** Visual updates were made to [Savings Planner](/savings_planner) for navigability.
- **Custom Providers integration:** [Custom Providers](/connecting_custom_providers) are now available as an integration option, so you can connect any of your providers to Vantage using the FinOps FOCUS schema.
- **Cost Report and Dashboard header visual updates:** Visual updates were made to Cost Report and Dashboard headers for better organization and navigation.
- **Provider icons visual improvements:** On the main [Virtual Tags](https://console.vantage.sh/settings/virtual_tags) and [Cost Reporting](https://console.vantage.sh/reporting) screens, visual updates were made to include provider icons next to each report or virtual tag in the list.
- **Autopilot for AWS Savings Plans:** [Autopilot](/autopilot) for AWS Savings Plans is now available, which allows Vantage to purchase Compute Savings Plans commitments on your behalf, with manual and automated options.
- **Account filter matching:** For cost providers, like AWS, that have human-readable account names, you can now wildcard-match on account names in [Cost Report filters](/cost_reports#filtering-cost-reports) (e.g., set a filter, like _Account **contains** dev_).
- **Total costs by date:** On [Cost Reports](/cost_reports#comparative-cost-reporting), the **Total Costs** row is displayed when you change the table display to **By Date**.
- **Set default dashboard:** You can set the [default dashboard](/dashboards#default-dashboard) that's displayed for a team or individual users when they log in to Vantage.
- **Additional GCP Active Resources:** The following [GCP services](/gcp_supported_services) were added and synced as active resources:
  - Cloud AlloyDB clusters, instances, and backups
  - Cloud Container clusters
  - Cloud Functions functions
  - Memorystore for Redis instances
  - Secrets Manager secrets

### Kubernetes Agent Updates

_See [May's update](/changelog#may-24-k8s) for the most recent Kubernetes agent release._

### API Updates

- The following API endpoints were released along with the Custom Providers feature:
  - `/integrations/custom_provider` [endpoint](https://vantage.readme.io/reference/createcustomproviderintegration) to create a Custom Provider
  - `/integrations/{integration_token}/costs.csv` [endpoint](https://vantage.readme.io/reference/createusercostsuploadviacsv-1) to upload a Custom Provider CSV file
  - `/integrations/{integration_token}/costs/{user_costs_upload_token}` [endpoint](https://vantage.readme.io/reference/deleteusercostsupload) to delete a Custom Provider CSV file
  - `/integrations/{integration_token}/costs` [endpoint](https://vantage.readme.io/reference/getusercostsuploads) to list all uploaded CSV files for a Custom Provider

## July 2024

### Product Updates

- **Dynamic Cost Allocation:** Dynamic cost allocation, which is the process of allocating costs based on another existing cost or metric, is now available. See the [Virtual Tagging](/tagging) documentation for details.
- **Workspace access updates:** If you are granted access via [RBAC](/rbac) to a report in a workspace outside your regularly accessed workspace, when you access the link to the report, you will have temporary access to the new workspace and can view the items that you were granted access to.
- **Share reports across workspaces:** You can now share report links across different [workspaces](/workspaces). For example, if you're in Workspace A and open a report link from Workspace B, you'll be automatically switched to Workspace B to view the report. Previously, a `404` error was displayed.
- **GCP active resources:** [GCP active resources](/gcp_supported_services) are now synced and available to filter within Resource Reports.
- **GCP cost recommendations:** [Recommendations](/cost_recommendations#gcp-compute-rightsizing-recommendations) are now available for GCP Compute rightsizing and commitments.
- **Grouped report forecasts:** You can now view [forecasts](/forecasting#bar-chart-view) for bar charts when they are grouped.
- **Flow weight on Network Flow Reports:** You can now change the Sankey diagram to be weighted by either costs or bytes on [Network Flow Reports](/network_flow_reports#flow-weight).
- **Save as new on reports:** On existing reports, like a [Cost Report](/cost_reports#saving-cost-reports), you can now click **Save as New** at the top to create a new report based on the current report's filters.
- **Vantage for MSPs**: Vantage for MSPs is a new set of features for managed service providers. Learn more on the [Partners website](https://www.vantage.sh/partners).

### Kubernetes Agent Updates

_See [May's update](/changelog#may-24-k8s) for the most recent Kubernetes agent release._

### API Updates

- **Costs endpoint updates:** The `/costs` [endpoint](https://vantage.readme.io/reference/getcosts) has been updated with the ability to specify settings parameters for returned costs, like credits, refunds, etc.
- **Cost Report endpoint updates:** The `/cost_reports` [endpoint](https://vantage.readme.io/reference/createcostreport) has been updated to include the following parameters for `POST` and `PUT`:
  - `previous_period_start_date`
  - `previous_period_end_date`
  - `start_date`
  - `end_date`
  - `date_interval`
  - `chart_type`
  - `date_bin`
- Two version updates were released of the Terraform provider:
  - [v0.1.23](https://github.com/vantage-sh/terraform-provider-vantage/releases/tag/v0.1.23) is based on the above API changes, including new parameters for the `vantage_cost_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report) and the `vantage_cost_reports` [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/cost_reports).
  - [v0.1.24](https://github.com/vantage-sh/terraform-provider-vantage/releases/tag/v0.1.24) adds support for dynamic cost allocation on the `virtual_tag_config` resource.

## June 2024

### Product Updates

- **Visual UI updates:** Visual updates have been made to the look and feel of the main navigation and related Active Resources screens.
- **New dashboard widgets:** Resource Reports are a new widget option on [dashboards](/dashboards).
- **Data transfer cost visibility:** [Network Flow Reports](/network_flow_reports) are available to provide visibility by source and destination to the flows within your network that are driving costs.
- **New active resources:** VPC Flow Logs are now synced as [active resources](/active_resources).
- **VPC Flow Logs active resources tab:** The **VPC Flow Logs** tab is available on the [Active Resources screen](/active_resources#flow-logs) for resources that generate network traffic. This tab shows network flows for related resources.
- **Network costs:** A new **Network Costs** button is displayed on [Cost Reports](/cost_reports#network-costs) for resources that generate network costs, like NAT Gateways.

### Kubernetes Agent Updates

_See [May's update](/changelog#may-24-k8s) for the most recent Kubernetes agent release._

### API Updates

New `/integrations` [endpoints](https://vantage.readme.io/reference/createazureintegration) are available:

- `GET` `/integrations`: retrieves all existing integrations
- `POST` `/integrations/azure`: creates a new Azure integration
- `POST` `/integrations/gcp`: creates a new GCP integration
- `DELETE` `/integrations/{integration_token}`: deletes a specific integration
- `GET` `/integrations/{integration_token}`: gets information about an existing integration
- `PUT` `/integrations/{integration_token}`: updates workspace access for an existing integration

## May 2024

### Product Updates

- **Visual UI updates:** Visual updates have been made to the look and feel of the Budgets, Business Metrics, Cost Recommendations, Active Resources, and Resource Reports screens.
- **Segments RBAC:** Users with the [editor role](/rbac) can now update [segments](/segments).
- **MongoDB tags:** Tags are now available as a filtering dimension for [MongoDB](/connecting_mongodb-atlas) Cost Reports.
- **Forecasted performance of a budget:** Future [budget periods](/budgets) are now displayed and compared to forecasts on Cost Reports.
- **Reserved Instance recommendations:** Reserved Instance [recommendations](/cost_recommendations) now include a link to [Autopilot](/autopilot) with split-out categories and usage.
- **Negative cost axis:** The range of the cost axis on Cost Reports is updated to include negative values. This is visible in cases where costs may be negative due to things like credits.
- **Vantage University:** [Vantage University](/vantage_university) is available on the docs site and includes a set of videos for getting started with Vantage.
- **Labeled business metrics:** [Labeled business metrics](/per_unit_costs#labels) are available to identify the source of a metric—like an associated application or cost center.
- **Kubernetes GPU idle costs:** For each Kubernetes pod, you can now view the [idle and total costs](/kubernetes#gpu) for NVIDIA GPU usage within a Kubernetes cluster.

### Kubernetes Agent Updates {#may-24-k8s}

- Version 1.0.26, Helm Chart [vantage-kubernetes-agent-1.0.34](https://github.com/vantage-sh/helm-charts/releases/tag/vantage-kubernetes-agent-1.0.34), includes the following updates:
  - Support is now available for NVIDIA GPU exporters.
  - Fargate nodes are now ignored.
- Version 1.0.25, Helm Chart [vantage-kubernetes-agent-1.0.33](https://github.com/vantage-sh/helm-charts/releases/tag/vantage-kubernetes-agent-1.0.33), includes the following update:
  - The `report_http_proxy` flag is available to supply during configuration. HTTP proxy is used for the HTTP client that calls Vantage and S3 during periodic reports. Overrides `HTTP_PROXY` in the event both are specified.

### API Updates

- **Cost recommendations endpoint:** The `/recommendations` [endpoint](https://vantage.readme.io/reference/getrecommendations) automates the retrieval of cost recommendations. The endpoint includes filtering options for parameters like category and provider.
- **Integrations endpoint:** The `/integrations` [endpoint](https://vantage.readme.io/reference/getintegrations) automates the retrieval of information about existing integrations. You can also send a `DELETE` call to delete existing integrations.
- **Segment tokens in budgets:** The `cost_report_token` parameter of the `/budgets` [endpoint](https://vantage.readme.io/reference/createbudget) now accepts segment tokens (in addition to Cost Report tokens).
- **Business metrics endpoint updates:** With the release of labeled business metrics, the `/business_metrics` [endpoint](https://vantage.readme.io/reference/createbusinessmetric) is updated to include a `label` object as part of the `values` array of objects.

## April 2024

### Product Updates

- **Visual navigation improvements:** A **Create New** menu for quick actions is available on the top navigation bar.
- **Datadog metrics:** Business metrics have been updated with the option to directly ingest [Datadog metrics](/per_unit_costs#importing-from-datadog).
- **New virtual tagging feature:** [Virtual tagging](/tagging) is available to consistently tag costs across providers in Vantage. This feature can help to increase tagging coverage across your cloud infrastructure.
- **New rightsizing recommendations:** Kubernetes [rightsizing recommendations](/cost_recommendations#kubernetes-rightsizing) are now available for rightsizing managed workloads in Kubernetes.
- **New to active resources:** Kubernetes managed workloads are synced as [active resources](/active_resources) in Vantage.
- **Expanded forecasts:** [Forecasts](/forecasting) have been expanded to include the upcoming month, the next three months, and six months ahead.
- **Kubernetes agent version:** The [Clusters](/kubernetes_agent#upgrade-agent) section of the Kubernetes agent settings screen is updated to show cluster name, version, and indicate if the cluster is out of date.
- **Expanded chart options:** [Expanded chart options](/cost_reports#adjust-chart-visualization) are available for Cost Reports, including expanded date bin selections for area and line charts and multi-line charts for grouped data.
- **API service tokens:** Users with owner-level permissions can now create [API service tokens](/vantage_account#api-token) for authenticating with the Vantage API at the account level, rather than being associated with a specific user.

### Kubernetes Agent Updates

_See [March's update](/changelog#kubernetes-agent-updates-1) for the most recent Kubernetes agent release._

### API Updates

- **New API endpoints:** The following endpoints have been added to the API:
  - The [`/resource_reports`](https://vantage.readme.io/reference/getresourcereports) endpoint automates the retrieval of existing [resource reports](/active_resources).
  - The [`/financial_commitment_reports`](https://vantage.readme.io/reference/getfinancialcommitmentreports) endpoint automates the retrieval of [financial commitment reports](/financial_commitment_reports).
  - The [`/kubernetes_efficiency_reports`](https://vantage.readme.io/reference/getkubernetesefficiencyreports) endpoint automates the retrieval of [Kubernetes efficiency reports](/kubernetes).
  - The [`/anomaly_alerts`](https://vantage.readme.io/reference/getanomalyalerts) endpoint allows you to retrieve and update [anomaly alerts](/cost_anomaly_alerts).
  - The [`/virtual_tag_configs`](https://vantage.readme.io/reference/createvirtualtagconfig) endpoint automates the creation, retrieval, and update of [virtual tags](/tagging).
  - The [`/anomaly_notifications`](https://vantage.readme.io/reference/createanomalynotification) endpoint automates the creation, retrieval, and update of anomaly notifications.
  - The [`/budgets`](https://vantage.readme.io/reference/createbudget) endpoint automates the creation, retrieval, and update of [budgets](/budgets).
  - The [`/budgets_alerts`](https://vantage.readme.io/reference/createbudgetalert) endpoint automates the creation, retrieval, and update of budgets alerts.
- **New Terraform resources:** The following resources have been added to the Terraform provider:
  - [`vantage_virtual_tag_config`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/virtual_tag_config)
  - [`vantage_anomaly_notification`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/anomaly_notification)
  - [`vantage_budget`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/budget)
  - [`vantage_business_metric`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/business_metric)
  - [`vantage_report_notification`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification)
- **New Terraform data sources:** The following data sources have been added to the Vantage provider:
  - [`vantage_anomaly_notifications`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/anomaly_notifications)
  - [`vantage_financial_commitment_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/financial_commitment_reports)
  - [`vantage_kubernetes_efficiency_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/kubernetes_efficiency_reports)
  - [`vantage_resource_reports`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/resource_reports)
  - [`vantage_virtual_tag_configs`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/virtual_tag_configs)
  - [`vantage_budgets`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/budgets)
  - [`vantage_business_metrics`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/business_metrics)
  - [`vantage_report_notifications`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/report_notifications)

## March 2024

### Product Updates

- **Saved filters on dashboards**: You can now add a [saved filter](/dashboards/#saved-filter) to a dashboard to view all Cost Reports on the dashboard with consistent filters applied.
- **Updated Overview page**: Associated budget and per unit costs are now displayed on Cost Report widgets on the [Overview](/overview) page.
- **Updated UI look and feel**: Visual improvements were made to the look and feel of the Overview and Budgets screens.
- **Segments sync status**: Cost allocation [segments](/segments#edit-a-segment) are now updated to show segment sync status. The look and feel of this page have been visually updated as well.
- **Filterable cost recommendations**: Recommendations are now filterable by provider on the [Cost Recommendations](/cost_recommendations) screen.
- **Pie chart option**: You can now change the [graph view](/cost_reports#configure-report-groups) on Cost Reports to a pie chart.
- **Custom date filtering**: The date picker on [Cost Reports](/cost_reports#create-report) is updated to allow for custom period selections.
- **Custom Databricks pricing**: Custom discounts are [now supported](/connecting_databricks#custom-pricing) for Databricks SKU groups.

### Kubernetes Agent Updates

The following versions were released this month.

- **Version 1.0.24** includes the following update:

  - Supports monitoring ArgoCD resources in the cluster.

- **Version 1.0.23** includes the following updates:
  - `app.kubernetes.io` labels are now allowed.
  - Agent scrape results are added to agent metadata.
  - [Prometheus metrics](/kubernetes_agent/#monitoring) are added for tracking reporting successes/failures.
  - Dependencies are updated to the latest stable versions.
  - Additional controller metadata is included in agent reports for use in [Active Resources](/active_resources).

### API Updates

- **New `tagged` option**: On the `/cost_reports` [endpoint](https://vantage.readme.io/reference/createcostreport) in the API, and the `vantage_cost_report` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report) in the Terraform provider, `tagged` is a valid option for the `groupings` parameter.
- **New dashboard parameter**: The `saved_filter_tokens` parameter is now available on the `/dashboards` [endpoint](https://vantage.readme.io/reference/createdashboard). It is also available on the `vantage_dashboard` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/dashboard) in the Terraform provider.
- **New Terraform resources**: Additional Terraform resources are now available:
  - The `vantage_segment` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/segment) automates the creation of cost allocation segments in Vantage. Large segment hierarchies can easily be automated with filters applied as needed.
  - The `vantage_team` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/segment) automates the creation of Vantage teams. Create a team and assign Vantage users, by email, to the team.
  - The `vantage_access_grant` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/access_grant) automates access grants via role-based access controls in Vantage. Create grants to allow or deny teams access to resources, like folders or Cost Reports.
  - The `vantage_report_notification` [resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification) automates the creation of Report Notifications. Create a notification for a specific Cost Report. Specify the notification’s frequency (e.g., daily) and change (e.g., in dollars).
- **Terraform data sources**: [Data sources](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/access_grants) are now available to retrieve information outside your Terraform configuration.
- **Business metrics endpoint**: The `/business_metric` [endpoint](https://vantage.readme.io/reference/createbusinessmetric) is now available to create and update business metrics in the console.

## February 2024

### Product Updates

- **Ability to group by multiple tags**: You can now group by multiple tags in the console.
- **EC2 rightsizing recommendations**: New [recommendations](/cost_recommendations) are added for rightsizing EC2 instances.
- **Segment settings**: You can now edit the default report settings on a top-level [segment report](/segments#create-a-segment).
- **Updated UI look and feel**: Visual updates were made to Financial Planning menus and screens.
- **Financial Commitment Reports**: [Financial commitment reports](/financial_commitment_reports) are now available to help you understand how your organization is utilizing financial commitments.
- **Bulk actions for folders and Cost Reports**: You can now [move and star](/folders#move-cost-reports-and-folders) folders and Cost Reports in bulk.
- **Additional operators on resource reports**: The `is greater than` and `is less than` operators are both available for Metadata filters on [resource reports](/active_resources). For example: **where** Metadata CloudWatch Log Groups Retention in Days **is greater than** 5.

### API Updates

- **New notifications endpoint:** The `/report_notifications` [endpoint](https://vantage.readme.io/reference/createreportnotification) is now available. This endpoint also now has support via the [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/report_notification).
- **Multi-tag support**: The `groupings` parameter of the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts) has support for multiple tags.
- **Data sources in Terraform**: [Data sources](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/access_grants) for multiple Vantage resources are now available in the Terraform provider.
- **Segment costs**: You can now obtain costs for segment reports from the `/costs` [endpoint](https://vantage.readme.io/reference/getcosts).
- **Settings options on segments**: The `report_settings` object is now available on the `/segments` [endpoint](https://vantage.readme.io/reference/createsegment).
- **Settings on Cost Reports**: The `settings` [object](https://vantage.readme.io/reference/createcostreport) is now available on the `/cost_reports` endpoint.

## January 2024

### Product Updates

- **PlanetScale support**: [PlanetScale](/connecting_planetscale) is now supported as a provider in Vantage.
- **Updated UI look and feel**: The **Settings** UI and main navigation bar are visually updated for better navigability.
- **Charge Type filter and group**: Charge Type is available as a new [filter and grouping category](/cost_reports#configure-report-groups) on Cost Reports.
- **Created by column**: The **Created by** column is added to Business Metrics, Savings Models, as well as Cost Reporting screens, like Dashboards.
- **Created On column sort**: The **Created On** column, available on Cost Reporting screens, correctly sorts by date.
- **Created by me filter**: The **Created by me** filter screen is available in Cost Reporting. New reports you create will now be visible within this view.
- **Tag grouping for advanced exports**: The [advanced export](/cost_reports#exporting-cost-reports) on Cost Reports now has a Tag grouping option.
- **"Other" grouping expanded**: The [**Other** grouping](/cost_reports/#expand-other-grouping-category) is expanded on Cost Reports so you can display additional costs, beyond what's already displayed, in the table and graph.
- **Cost Reports line and area charts**: When grouping by specific criteria, you can now adjust the Cost Report graph to be displayed as an area chart or [line chart](/cost_reports/#configure-report-groups), with a line for each group.
- **Searchable Business Metrics Report dropdown**: The **Report** dropdown menu on the [Business Metrics](/per_unit_costs#assign-business-metrics-to-cost-reports) screen is now searchable.

### API Updates

- **Priority added to `PUT` request for segments:** The `priority` parameter is available on the [`/segments/{segment_token}`](https://vantage.readme.io/reference/updatesegment) endpoint.
- **New groupings parameter:** The `groupings` parameter is available on the [`/costs`](https://vantage.readme.io/reference/getcosts) endpoint.
- **Access grant endpoint update:** [Update/destroy endpoints](https://vantage.readme.io/reference/createaccessgrant) for `/access_grant` now use the access grant token to identify an access grant.

## December 2023

### Product Updates

- **Expanded recommendations**: [Cost recommendations](/cost_recommendations) have been expanded for Azure.
- **Kubernetes efficiency reports**: [Kubernetes efficiency reports](/kubernetes) allow teams to quickly identify which Kubernetes pods are running inefficiently. These reports are a customized view of Kubernetes idle and total costs based on Cluster, Namespace, and Label.
- **Official Kubernetes integration**: The [Vantage Kubernetes agent](/kubernetes_agent) provides a single in-cluster deployment that handles both metrics collection and upload to Vantage—without any intermediary requirements.

### API Updates

- **Cost allocations segment API**: Script both the creation and modification of cost allocation segments via new [API endpoints](https://vantage.readme.io/reference/createsegment).

## November 2023

### Product Updates

- **Automatic team assignment for SSO**: Automatically assign users to teams in Vantage based on your organization's [existing SSO groups](/sso).
- **Confluent support**: [Confluent](/connecting_confluent) is now supported as a provider in Vantage.
- **Team-based access controls**: Enterprise customers can now use [role-based access control](/rbac) to create fine-grained permissions for teams across their organizations.

## October 2023

### Product Updates

- **Resource report exports**: You can now download lists of resources for further exploration via [resource reports](/active_resources).

## September 2023

### Product Updates

- **Annotations for reports**: You can now add [annotations](/annotations) to Cost Reports for infrastructure changes or events.
- **Oracle support**: [Oracle](/connecting_oracle) is now supported as a provider in Vantage.
- **Dashboards**: You can now create [dashboards](/dashboards) with custom collections of Cost Reports and apply date range and period filters to all reports present on them.

### API Updates

- **Write API**: The new write [API](/api) automates the management of Cost Reports, saved filters, and dashboards.
- **New Terraform resources**: [New Terraform resources](/terraform) are available for Cost Reports, folders, saved filters, and dashboards.

## August 2023

### Product Updates

- **Alert thresholds for anomaly detection**: Set custom alert thresholds on [cost anomaly alerts](/cost_anomaly_alerts), so alerts are tailored to your tolerance for cost spikes.
- **Comparative cost reporting**: [Cost Reports](/cost_reports) now have a **By Date** toggle to display costs by day, week, or month in the costs table.
- **Budget alerts**: You can now create [budget alerts](/budgets/#budget-alerts) to receive automated notifications when costs exceed user-defined alert thresholds.

## July 2023

### Product Updates

- **Datadog support**: [Datadog](/connecting_datadog) is now supported as a provider in Vantage.
- **Multi-dimensional cost reporting**: You can now group [Cost Reports](/cost_reports) by multiple dimensions.

## June 2023

### Product Updates

- **GCP resource-level costs**: Resource-level costs are available for GCP Cost Reports.
- **Resource reports**: You can create [resource reports](/active_resources) to view and access resources generated per provider.

## May 2023

### Product Updates

- **Kubernetes cost efficiency metrics**: Manage the [efficiency of your Kubernetes clusters](/kubernetes) in addition to enterprise reporting, visibility, and cost allocation.

## April 2023

### Product Updates

- **Self-service SAML**: Users can now [configure SAML-based SSO](/sso) for their account without contacting Vantage support.
- **Saved filters**: [Saved filters](/cost_reports#saved-filters) are available to save and reuse filter logic across multiple Cost Reports.
- **Azure cost recommendations**: Azure [cost recommendations](/cost_recommendations) are now supported.

## March 2023

### Product Updates

- **Cost Report exports**: You can now [export Cost Reports](cost_reports/#exporting-cost-reports) via custom exports.
- **Per-unit cost support**: With [per-unit costs](/per_unit_costs), you can track costs per customer, endpoint, transaction, etc.

### API Updates

- **Terraform provider**: [Terraform provider](https://www.vantage.sh/blog/vantage-launches-terraform-provider) is now available to integrate AWS accounts with Vantage.

## February 2023

### Product Updates

- **New Relic support**: [New Relic](/connecting_new_relic) is now supported as a provider in Vantage.
- **Expanded resource filtering**: You can now filter by resource in [Cost Reports](/cost_reports).
- **MongoDB Atlas support**: [MongoDB Atlas](/connecting_mongodb-atlas) is now supported as a provider in Vantage.

## January 2023

### Product Updates

- **Updates to Cost Reports**: You can now save custom date ranges, date bins, and groupings to share with teammates in [Cost Reports](/cost_reports).
- **Autopilot recommendations expanded**: [Autopilot](/autopilot) is expanded to recommend Reserved Instance purchases on RDS, ElastiCache, Redshift, and OpenSearch.
- **Cost allocation segments**: [Segments](/segments) are now enabled for teams to allocate costs to business units.
