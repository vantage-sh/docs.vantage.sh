---
id: snowflake_cost_by_query
title: Snowflake Costs per Query
description: Calculate your Snowflake cost per query in Vantage. 
keywords:
  - Snowflake
  - Snowflake cost per query
---

# Snowflake Costs per Query

Vantage calculates a weighted cost per query by breaking down the use of Snowflake [compute credits](https://docs.snowflake.com/en/user-guide/credits.html#virtual-warehouse-credit-usage). This allows users to easily identify the most expensive queries.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake cost per query" width="80%" src="/img/snowflake_queries.png" />
</div>

## How It Works

Snowflake Compute is billed only when a query is running, rounded up to the hour; however, if multiple queries are running simultaneously, the cost is still only reported for that hour. This shared credit pool makes it difficult to understand which individual queries are contributing the most to costs.

Each day, Vantage ingests the compute credits used, and their equivalent cost, and assigns a weighted cost to each query based on the total duration for which the query ran. For example, if you had 3 queries that ran for 1, 2, and 3 minutes respectively, and a total bill of $500, the query that ran for 3 minutes would be assigned a cost of $250 as it accounted for half of the overall query time.

## Grouping Queries

Vantage groups queries based on the source and structure of a query, so users can easily identify it. To determine the source, Vantage looks at the warehouse in which the query was run as well as the user who ran the query. To determine the structure of a query, Vantage will strip all query values and the order of columns and generate a normalized, unique fingerprint for the query.

## Viewing the Costs

Query costs are available in two views: on Cost Reports and in Active Resources. 

### Query Costs in Cost Reports

To view query costs on a [Cost Report](/cost_reports/):

1. In the console, navigate to [Cost Reports](https://console.vantage.sh/reporting).
2. Create a new report and add a provider filter for **Snowflake**.
3. Click the **Cost by Resource** icon next to the **Snowflake Data Cloud** line item and see a paginated list of each query, as well as a day-by-day breakdown of that query's costs. 

### Query Costs in Active Resources View

To view query costs in the [Active Resources](/active_resources) view:

1. Navigate to the [Active Resources page](https://console.vantage.sh/services/snowflake_queries/resources) in the console. 
2. Select **Snowflake Query** and see a list of active queries, as well as their associated costs. Queries are considered active if they have incurred costs in the past 30 days and are in the top 1,000 queries by cost for that account. 

## Security

Vantage ensures that any sensitive data contained in queries is never stored in Vantage systems. When the `QUERY_HISTORY` view is queried from Snowflake, that data is immediately processed to strip all values from queries before they are stored.
