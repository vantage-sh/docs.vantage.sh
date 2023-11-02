# Snowflake Costs by Query

Vantage calculates a weighted cost per query by breaking down the use of Snowflake [compute credits](https://docs.snowflake.com/en/user-guide/credits.html#virtual-warehouse-credit-usage). This allows users to easily identify the most expensive queries.

![Snowflake Cost per Query](/img/snowflake_queries.png)

## How it Works

Snowflake Compute is only billed when a query is running, rounded up to the hour. However, if multiple queries are running simultaneously the cost is still only reported for that hour. This shared credit pool makes it difficult to understand which singular queries are contributing the most costs.

On a daily basis Vantage will ingest the compute credits used and their equivalent cost and assign a weighted cost to each query based on the total duration for which that query ran. For example, if you had 3 queries that ran for 1, 2 and 3 minutes respectively and a total bill of $500, the query which ran for 3 minutes would be assigned a cost of $250 as it accounted for half of the overall query time.

## Grouping Queries

Vantage groups queries based on the source and structure of a query so users can easily identify it. To determine the source, Vantage looks at the warehouse in which the query was run and the user who ran the query. To determine the structure of a query, Vantage will strip all query values and ordering of columns and generate a normalized unique fingerprint for the query.

## Viewing the Costs

Query costs are available in two views. The first is on a [Cost Report](/cost_reports/) with Snowflake costs. You can click on [Costs by Resource](/cost_reports/#per-resource-costs) on the "Snowflake Data Cloud" line item and see a paginated list of each query, as well as a day-by-day breakdown of that query's costs. You can also visit the [Active Resources page](https://console.vantage.sh/services/snowflake_queries/resources) for "Snowflake Queries" and see a list of active queries and their associated costs. Queries are considered active if they have occurred costs in the past 30 days and are in the top 1,000 queries by cost for that account. 

## Security

Vantage ensures that any sensitive data contained in queries is never stored in Vantage systems. When the `QUERY_HISTORY` view is queried from Snowflake that data is immediately processed to strip all values from queries before they are stored.
