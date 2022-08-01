# Setup Snowflake

## Connecting Your Snowflake Account

Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake metadata tables. Optionally, see below for instructions on creating a specific schema for the Vantage user.

Vantage requires read-only access to the following tables:

* [SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY](https://docs.snowflake.com/en/sql-reference/functions/warehouse_metering_history.html)

    Returns hourly credit usage for both virtual warehouse credit usage and cloud service credit usage per each warehouse for all warehouses in your account. Data retained for 1 year.

* [SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY](https://docs.snowflake.com/en/sql-reference/account-usage/query_history.html)

    Query history with various dimensions, including total elapsed time, warehouse used, data bytes scanned, etc. Data retained for 1 year.

* [SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY](https://docs.snowflake.com/en/sql-reference/organization-usage/usage_in_currency_daily.html)

    Returns the daily credit usage and usage in currency for an organization.

## Snowflake Schema for Vantage

A best practice is to create a schema specifically for the Vantage user. After creating the schema you can add only the needed views to that schema and grant the vantage user access to the schema. You can follow [these](https://community.snowflake.com/s/article/Solution-Grant-access-to-specific-views-in-SNOWFLAKE-ACCOUNT-USAGE-to-custom-roles) instructions from Snowflake on how to do this.

After creating the user and granting access you can visit the [integrations](https://console.vantage.sh/settings/integrations) page and click "Add" on the Snowflake section.