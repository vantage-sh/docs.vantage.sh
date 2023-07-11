# Setup Snowflake

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate Snowflake costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake Cost Reports" width="60%" src="/img/snowflake_cost_report.png" />
</div>

## Connecting Your Snowflake Account

Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, see below for instructions on creating a specific schema for the Vantage user.

Vantage requires read-only access to the following tables:

- [SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY](https://docs.snowflake.com/en/sql-reference/functions/warehouse_metering_history.html)

  Returns hourly credit usage for both virtual warehouse credit usage and cloud service credit usage per each warehouse for all warehouses in your account. Data retained for 1 year.

- [SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY](https://docs.snowflake.com/en/sql-reference/account-usage/query_history.html)

  Query history with various dimensions, including total elapsed time, warehouse used, data bytes scanned, etc. Data retained for 1 year.

- [SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY](https://docs.snowflake.com/en/sql-reference/organization-usage/usage_in_currency_daily.html)

  Returns the daily credit usage and usage in currency for an organization.

### Snowflake IP Allowed List

If your Snowflake cluster uses IP allowed list for access control, you will need to add the following IPs to that allowed list:

```
54.87.66.45
3.95.43.133
54.162.3.72
44.199.143.63
```

## Snowflake Schema for Vantage

A best practice is to create a schema specifically for the Vantage user. Note that this is optional. After creating the schema you can add only the needed views to that schema and grant the vantage user access to the schema. Below are a set of commands to accomplish this modified from the Snowflake instructions [here](https://community.snowflake.com/s/article/Solution-Grant-access-to-specific-views-in-SNOWFLAKE-ACCOUNT-USAGE-to-custom-roles).

To start create a user `vantage`, a role `vantage` and a warehouse `vantage` and grant necessary permissions.

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

Next, setup the Vantage specific schema to read billing and usage data from your account.

```sql
use warehouse vantage;
create view VANTAGE.PUBLIC.QUERY_HISTORY as select * from SNOWFLAKE.ACCOUNT_USAGE.QUERY_HISTORY;
create view VANTAGE.PUBLIC.WAREHOUSE_METERING_HISTORY as select * from SNOWFLAKE.ORGANIZATION_USAGE.WAREHOUSE_METERING_HISTORY;
create view VANTAGE.PUBLIC.USAGE_IN_CURRENCY_DAILY as select * from SNOWFLAKE.ORGANIZATION_USAGE.USAGE_IN_CURRENCY_DAILY;
grant usage on schema vantage.public to role vantage;
grant usage on database vantage to role vantage;
grant select on all views in schema VANTAGE.PUBLIC to role vantage;
```

Lastly, test your setup.

```sql
use role vantage;
select * from vantage.public.query_history limit 1;
```

After creating the user and granting access you can visit the [integrations](https://console.vantage.sh/settings/integrations) page and click "Add" on the Snowflake section.
