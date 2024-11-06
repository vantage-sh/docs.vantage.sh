---
id: connecting_snowflake
title: Snowflake
description: This page walks through how to integrate Vantage with your Snowflake account.
keywords:
  - Snowflake
  - Connect Snowflake
---

# Snowflake

Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, you can create a [specific schema](/connecting_snowflake#vantage-schema) for the Vantage user.

Vantage requires read-only access to the following tables:

- [`SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY`](https://docs.snowflake.com/en/sql-reference/functions/warehouse_metering_history.html)
  - Returns hourly credit usage for both Virtual Warehouse credit usage and Cloud Services credit usage per warehouse, for all warehouses in your account. Data is retained for one year.
- [`SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY`](https://docs.snowflake.com/en/sql-reference/account-usage/query_history.html)
  - Query history with various dimensions, including total elapsed time, warehouse used, data bytes scanned, etc. Data is retained for one year.
- [`SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY`](https://docs.snowflake.com/en/sql-reference/organization-usage/usage_in_currency_daily.html)
  - Returns the daily credit usage and usage in currency format for an organization.

:::note
As a best practice, it is suggested you create a schema specifically for the `vantage` user. Note, however, that this is optional. See the [steps below](/connecting_snowflake#vantage-schema) for details on how to create this schema.
:::

## Connect Your Snowflake Account

### Prerequisites

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate Snowflake costs.

### Snowflake IP Allowed List

If your Snowflake cluster uses an IP allow list for access control, you will need to add the following IPs to that allowed list:

```
54.87.66.45
3.95.43.133
54.162.3.72
44.199.143.63
3.218.103.23
```

### Snowflake Schema for Vantage {#vantage-schema}

After creating the below schema, you can add only the needed views to that schema and grant the `vantage` user access to the schema.

:::info
The below commands are based on the Snowflake [documentation](https://community.snowflake.com/s/article/Solution-Grant-access-to-specific-views-in-SNOWFLAKE-ACCOUNT-USAGE-to-custom-roles).
:::

1. In Snowflake, create a user named `vantage`, a role named `vantage`, and a warehouse named `vantage`. Grant the necessary permissions. Ensure you replace the password placeholder with a strong password for the `vantage` user.

  ```sql
  use role accountadmin;
  create database vantage;
  create role vantage;
  create user vantage;
  grant role vantage to user vantage;
  grant role vantage to role accountadmin;
  create warehouse vantage;
  grant all on warehouse vantage to role vantage;
  alter user vantage set DEFAULT_WAREHOUSE=vantage, DEFAULT_ROLE=vantage;
  alter user vantage set password='<A STRONG PASSWORD>';
  ```

2. Set up the Vantage-specific schema to read billing and usage data from your account.

  ```sql
  use warehouse vantage;
  create view VANTAGE.PUBLIC.QUERY_HISTORY as select * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY;
  create view VANTAGE.PUBLIC.WAREHOUSE_METERING_HISTORY as select * from SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY;
  create view VANTAGE.PUBLIC.USAGE_IN_CURRENCY_DAILY as select * from SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY;
  grant usage on schema vantage.public to role vantage;
  grant usage on database vantage to role vantage;
  grant select on all views in schema VANTAGE.PUBLIC to role vantage;
  ```

3. Test your setup.

  ```sql
  use role vantage;
  select * from vantage.public.query_history limit 1;
  ```

4. Navigate to the [Snowflake Settings page](https://console.vantage.sh/settings/snowflake) in the Vantage console to add a new Snowflake connection. Then, click **Add Connection**. 
5. Add the following information to the form:
   - **Server URL**: In the format `<account_identifier>.<region>.snowflakecomputing.com`. 
   - **Database**: The name of the database the usage views are in (e.g., `vantage`).
   - **Schema**: The name of the schema the usage views are in (e.g., `public`).
   - **Username** and **Password** set for the `vantage` user. 
6. Click **Connect Account**. The status of your account will change to `Importing`. 

Costs will be ingested and processed immediately, but it may take several hours to populate all Vantage tools depending on the query volume of your warehouse. 

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Troubleshoot Snowflake Errors {#troubleshoot-snowflake-errors}

Snowflake occasionally makes changes to the queries/tables that get used for cost and usage attribution, causing the views in Vantage to then be based on an old query. You may see an error in the Vantage console, similar to the below error:

```bash
View definition for 'VANTAGE.PUBLIC.QUERY_HISTORY' declared 66 column(s), but view query produces 77 column(s).
```

To fix the issue, replace the three `Vantage` views in Snowflake and ensure the `vantage` user is granted permission on those views. 

:::note
After you've completed the below steps, contact [support@vantage.sh](mailto:support@vantage.sh) to reimport your Snowflake data.
:::

```sql
USE WAREHOUSE vantage;
CREATE OR REPLACE VIEW VANTAGE.PUBLIC.QUERY_HISTORY as select * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY;
CREATE OR REPLACE VIEW VANTAGE.PUBLIC.WAREHOUSE_METERING_HISTORY as select * from SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY;
CREATE OR REPLACE VIEW VANTAGE.PUBLIC.USAGE_IN_CURRENCY_DAILY as select * from SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY;
GRANT USAGE ON SCHEMA vantage.public TO ROLE vantage;
GRANT USAGE ON DATABASE vantage TO ROLE vantage;
GRANT SELECT ON ALL VIEWS IN SCHEMA vantage.public TO ROLE vantage;
```

## Snowflake Reporting Dimensions

On Snowflake [Cost Reports](/cost_reports), you can filter across several dimensions:

- Account (account name)
- Category (e.g., Data Cloud Data Transfer)
- Metadata (e.g., `environment is staging`)
- Region (e.g., AWS Eu West 1)
- Organization (organization name)
- Service (e.g., Data Cloud)
- Tag ([virtual tags](/virtual_tagging) created in Vantage for this provider)
- Charge Type (e.g., Usage)

## Active Resources 

Snowflake queries are synced as active resources and available in [resource reports](/active_resources).

