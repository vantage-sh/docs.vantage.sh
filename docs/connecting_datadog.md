# Setup Datadog

![Datadog Cost Reports](/img/datadog_cost_report.png)

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

## Feature Availability for Datadog

The following Vantage features are not currently available for Datadog costs.

- [Active Resources](/active_resources/)
- [Savings Planner](/savings_planner/)
- [Autopilot](/autopilot/)
