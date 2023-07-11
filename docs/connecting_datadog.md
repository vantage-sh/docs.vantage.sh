# Datadog

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate Datadog costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Datadog Cost Reports" width="60%" src="/img/datadog_cost_report.png" />
</div>

## Connecting Your Datadog Account

Vantage uses a read only (scoped to usage_read) Datadog OAuth token. When connecting your Datadog account your user will need access to the **usage_read** scope in order to complete the connection.

This token is used to pull data from the [usage metering endpoint](https://docs.datadoghq.com/api/latest/usage-metering/). The usage metering API allows you to get hourly, daily, and monthly usage across multiple facets of Datadog. This API is available to all Pro and Enterprise customers. Usage is only accessible for [parent-level organizations](https://docs.datadoghq.com/account_management/multi_organization/).

For documentation about Vantage from Datadog, please refer to the [Vantage Integration page](https://docs.datadoghq.com/integrations/vantage/) in Datadog's documentation.

## Cost Data Ingestion

Vantage will ingest six months of historical Datadog costs upon connection. Each day at 2 AM UTC this data is refreshed, but delays up to 72 hours may occur.

## Datadog Cost Reports

Within [Cost Reports](/cost_reports/) Vantage will show cost data for at least the following services.

- APM
- Application Security Monitoring
- Audit Trail
- CI Visibility
- CSPM
- Database Monitoring
- Incident Management
- Infrastructure
- Log Management
- Network Monitoring
- Observability pipelines
- RUM
- Sensitive Data Scanner
- Serverless Monitoring
- Synthetic Monitoring
- Workload Security

Data is available at the "Category" and "Sub-category" level as well so you may access information such as how much Datadog spend is covered by committed-use discounts or which individual Datadog container is contributing to overall Logging costs. Data can be filtered per organization or service.

## Datadog Cost Tags (Usage Attribution Tags)

:::info
This feature is only available if you have a Datadog Enterprise plan with usage tags enabled.
:::

Datadog allows customers to have up to three tag keys per organization enabled for [usage attribution](https://docs.datadoghq.com/account_management/billing/usage_attribution/). Once enabled, Datadog begins breaking down the usage by any number of tag values for these keys. This allows you to see usage for specific services allocated to a specific key/value pair.

The following Datadog services support Datadog cost tags:

- APM
- CI Pipeline
- Fargate
- Infrastructure Hosts
- Lambda
- Logs
- NPM
- Synthetic Tests
- Time Series

To use these tags within Vantage, open any [Cost Report](/cost_reports) and select Tag from the dropdown with Datadog as the provider. You can also Group By a specific tag key on a Datadog cost report. The following filtering operators are supported:

- Tagged with key
- Tagged with key where the value (is, is not, contains does not contain)
- Not Tagged
- Not Tagged with Key

If you have just applied your first Datadog tag key and value it can take up to 48 hours for the tag to appear in Vantage. Tags are not applied retroactively.

## Feature Availability for Datadog

The following Vantage features are not currently available for Datadog costs.

- [Active Resources](/active_resources/)
- [Savings Planner](/savings_planner/)
- [Autopilot](/autopilot/)
