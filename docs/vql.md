# VQL (Vantage Query Language)

:::info
**Beta:** VQL and the Vantage Write API (API V2) are currently in Beta.
:::

## Introduction

The Vantage Query Language (VQL) is a SQL-like language for filtering cloud cost data. It includes a normalized schema across cloud providers and basic filter syntax for creating complex filters.

VQL is currently available as part of the [Vantage API](https://vantage.readme.io/v2.0/reference/general). On supported endpoints, such as `/cost_reports` you can include VQL snippets in the `filter` parameter to programmatically create and fetch cost reports.

For example, the following API call would create a [saved filter](/cost_reports#saved-filters) in your Vantage account using VQL.

```bash
curl --request POST \
     --url https://api.vantage.sh/v2/saved_filters \
     --header 'content-type: application/json' \
     --header 'authorization: Bearer <ACCESS_TOKEN>' \
     --data @- <<EOF
{
  "filter": "(costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service') OR costs.provider = 'kubernetes'",
  "title": "RDS and Kubernetes",
  "workspace_token": "wrkspc_abcde12345"
}
EOF
```

## Schema

VQL contains two namespaces representative of the filters which are available in the Vantage console.

| Namespace | Field                                                                                                                                              |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| costs     | provider<br/>allocation<br/>region<br/>marketplace<br/>account_id<br/>provider_account_id<br/>service<br/>category<br/>subcategory<br/>resource_id |
| tags      | name<br/>value                                                                                                                                     |

Different providers have different fields available. For a full listing of available fields please consult the [data dictionary](/data_dictionary).

## Keywords

| Keyword | Description                |
| ------- | -------------------------- |
| AND     | Logical and                |
| OR      | Logical or                 |
| IN      | Compare against array list |
| LIKE    | String comparison          |
| NOT     | Negation                   |

## Syntax

You can think of VQL in its current iteration as the `WHERE` clause of a SQL query. By combining the schema and keywords above with parentheses you can form complex filter operations such as:

```sql
costs.provider = 'mongo' AND costs.allocation = 1.0 AND (costs.service = 'REALM' AND costs.resource_id IN ('s3')) OR (costs.provider = 'aws' AND costs.allocation = 1.0 AND costs.account_id IN ('123456798'))
```

:::info
**Beta:** Please contact support@vantage.sh or chat us with Intercom to request a list of values for filters in your account. We are currently working on a way to expose this information in the Vantage console.
:::

## Examples

The following examples cover common use cases for VQL.

### Combining Providers

```sql
costs.provider = 'mongo' OR costs.provider = 'aws'
```

### Cost Allocation

```sql
costs.allocation = 0.5
```

### Per Resource Costs

Resource costs require both `provider` and `service` in addition to the `resource_id`

```sql
costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'
```

```sql
costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-01', 'arn:aws:rds:us-east-1:123456789:db:primary-02')
```

### Filtering by Tag

```sql
costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'production'
```

### Get Marketplace Transactions

```sql
costs.provider = 'aws' AND costs.marketplace = true
```
