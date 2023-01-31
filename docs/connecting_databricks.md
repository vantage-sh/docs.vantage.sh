# Setup Databricks

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate Databricks costs.

## Connecting Your Databricks Account

Vantage integrates with your Databricks account through the use of [Billable Usage Logs](https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html). Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis.

## Billing Data Only

Databricks delivers cost only data to the bucket outlining the Databricks service utilized, usage in DBU, and metadata related to workspace, cluster, and any related tags.

## Databricks Reporting Dimensions

Databricks [Cost Reports](/cost_reports/) enable you to filter Databricks costs along several dimensions:

* Account
* Category
* Tag
* Not tagged
* Service

Note that the Tag filter contains values like `JobID` which can be used to view costs for specific Databricks jobs.

## Integration Setup

To connect your Databricks account, open the [Databricks Settings](https://console.vantage.sh/settings/databricks/) page and . Click on `Setup Account` and follow the instructions. Once created, you will see an additional set of instructions that are run against the [Databricks Account API](https://docs.databricks.com/dev-tools/api/latest/account.html) to finalize the integration. Once followed your Databricks integration status should move from `Pending` to `Importing` automatically. Databricks generally delivers usage logs once per day.
