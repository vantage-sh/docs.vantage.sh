# VQL (Vantage Query Language)

## Introduction

The Vantage Query Language (VQL) is a SQL-like language for filtering cloud cost data.

## Schema

| Keyword | Description                     |
| ------- | ------------------------------- |
| AND     | Logical and for combining costs |
| OR      | Logical and for combining costs |

## Syntax

Every VQL statement starts and ends with a parentheses `( <statement> )`.

## Examples

### Combining Providers

```sql
(costs.provider = 'mongo' OR costs.provider = 'aws')
```

### Cost Allocation

```sql
(costs.allocation = 0.5)
```

### Per Resource Costs

```sql
costs.resource_id IN ('production', 'staging')
```

### Filtering by Tag

## Data Dictionary

| Column         | Field      |
| -------------- | ---------- |
| costs.provider | aws        |
| costs.provider | azure      |
| costs.provider | gcp        |
| costs.provider | datadog    |
| costs.provider | snowflake  |
| costs.provider | databricks |
| costs.provider | kubernetes |
| costs.provider | newrelic   |
| costs.provider | oracle     |

(costs.provider = 'mongo' AND costs.allocation = 1.0 AND (costs.service = 'REALM' AND costs.resource_id IN ('s3'))) OR (costs.provider = 'aws' AND costs.allocation = 1.0 AND costs.account_id IN ('123456798'))
