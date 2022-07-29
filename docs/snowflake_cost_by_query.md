# Snowflake Costs by Query

Vantage supports breaking down the use of Snowflake [compute credits](https://docs.snowflake.com/en/user-guide/credits.html#virtual-warehouse-credit-usage) in order to calculate a weighted cost by specific query. This allows users to easily root cause which queries are the most expensive.


## How it Works

Snowflake Compute is only billed when a query is running (rounded up to the hour). However, if multiple queries are running simaltaneously the cost is still only for that hour. This makes it difficult to understand which queries are contributing the most compute cost as they all share a pool of credits.

On a daily basis Vantage will look at all of the compute credits used and their equivalent cost and assign a weighted cost to each query based on the total duration in which that query ran. For example if you had three queries that each ran for 1, 2 and 3 minutes and a total bill of $5.00 - The query which ran for 3 minutes would be assigned a cost of $2.50 as it accounted for half of the overall query time.

## Grouping Queries

Vantage groups queries based on the source and structure of a query. This allows users to easily identify the source of the query. To determine the source Vantage looks at the warehouse in which the query was run and the user who ran the query. To determine the structure of a query Vantage will strip all query values and ordering of columns and generate a normalized unique fingerprint for the query.

## Viewing the Costs

Query costs are available in two views. The first is on a Cost Report with Snowflake costs. You can click on Costs by Resource on the Snowflake Data Cloud line item and see a paginated list of each query and view a day-by-day breakdown of that queries costs. You can also visit the [active resources page](https://console.vantage.sh/services/snowflake_queries/resources) for Snowflake Queries and see a list of active queries and their associated costs. Queries are considered active if they have occured in the past 30 days and are in the top 1,000 queries by cost for that account. 

## Security

Vantage ensures that any sensitive data contained in queries in never stored in Vantage systems. When the QUERY_HISTORY view is queried from Snowflake that data is immediately processed to strip all values from queries before they are stored.
