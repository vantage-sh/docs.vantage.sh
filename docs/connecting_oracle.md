# Oracle Cloud

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate Oracle Cloud Infrastructure (OCI) costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Oracle Cost Reports" width="80%" src="/img/oracle-cost-report.png" />
</div>

## Connecting Your Oracle Account

Vantage uses a read-only IAM user and API key to read from a [Cost and Usage Reports object storage bucket](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm). When connecting Oracle you will be required to create a Vantage-specific IAM user and upload a generated RSA public key to that user. That user must then be granted access to read objects from the [Cost and Usage Report tenancy](https://docs.oracle.com/en-us/iaas/Content/Billing/Concepts/usagereportsoverview.htm#policy).

## Integration Setup

To connect your Oracle account, open the [Oracle Settings](https://console.vantage.sh/settings/oracle/) page and click on the `Connect` tab and follow the instructions. You will be asked to run a series of commands to give Vantage permission to ingest cost and usage information from your Oracle Cloud account through an API key.

After running these commands, you will have a Tenancy and User ID to input into Vantage as well as a home region to select. Once input, your Oracle integration status should move from `Pending` to `Importing` automatically. Oracle generally delivers usage logs once per day. The default timeframe for imports is 6 months of historical costs.

## Oracle Cloud Reporting Dimensions

Oracle [Cost Reports](/cost_reports/) enable you to filter Oracle costs along several dimensions:

- Service
- Tenancy
- Region
- Cost Category
- Resource
- Tag
- Region
- Compartment
