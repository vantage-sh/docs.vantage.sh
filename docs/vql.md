---
id: vql
title: VQL (Vantage Query Language)
description: This page walks through the Vantage Query Language, or VQL, use for filter criteria on the Vantage API and with the Vantage Terraform provider.
keywords:
  - VQL
  - Vantage Query Language
  - Terraform
---

# VQL (Vantage Query Language)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The Vantage Query Language (VQL) is a SQL-like language for filtering cloud cost data. It includes a normalized schema across cloud providers and basic filter syntax for creating complex filters. VQL is currently available as part of the [Vantage API](https://vantage.readme.io/reference/general) as well as within the [Vantage Terraform provider](/terraform).

- **API**. On supported endpoints, such as `/cost_reports`, you can use VQL in the `filter` parameter to programmatically create and fetch Cost Reports.
- **Terraform provider**. In supported Terraform resources, such as `vantage_saved_filter` or `vantage_cost_report`, you can use VQL for the `filter` argument to create filtered Cost Reports or saved filters.

The below examples show how to use VQL on both the API as well as on the Terraform provider. This example creates a [saved filter](/cost_reports#saved-filters) in your Vantage account using VQL.

<Tabs>
<TabItem value="api" label="API">

```bash
curl --request POST \
     --url https://api.vantage.sh/v2/saved_filters \
     --header 'content-type: application/json' \
     --header 'authorization: Bearer <ACCESS_TOKEN>' \
     --data @- <<EOF
{
  "filter": "(costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service') OR (costs.provider = 'kubernetes')",
  "title": "RDS and Kubernetes",
  "workspace_token": "wrkspc_abcde12345"
}
EOF
```

</TabItem>
<TabItem value="terraform" label="Terraform Provider">

```hcl
resource "vantage_saved_filter" "rds_kubernetes" {
  title  = "RDS and Kubernetes"
  filter = "(costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service') OR (costs.provider = 'kubernetes')"
  workspace_token = "wrkspc_abcde1234"
}
```

</TabItem>
</Tabs>

---

## Key Concepts

VQL is based on the following key concepts, further described in subsequent sections.

<Tabs>
<TabItem value="schema" label="Schema">

VQL uses a schema that organizes filters into namespaces. These namespaces comprise various fields that you can leverage to filter and retrieve specific cost-related data.

</TabItem>

<TabItem value="keywords" label="Keywords">

VQL includes keywords, like `AND`, `OR`, `IN`, `LIKE`, and `NOT`, to create complex and precise filter conditions.

</TabItem>

<TabItem value="syntax" label="Syntax">

VQL syntax closely resembles the `WHERE` clause of a SQL query. You can construct filter operations to extract desired cost insights.

</TabItem>
</Tabs>

---

### Schema

VQL comprises two namespaces, `costs` and `tags`, which represent the available [filters](/cost_reports#filtering-cost-reports) on Cost Reports in the Vantage console. To reference a filter, use the following syntax: `namespace.field` (e.g., `costs.provider` or `tags.name`).

<table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th style={{ width: '33%' }}>Namespace</th>
      <th style={{ width: '33%' }}>Field</th>
      <th style={{ width: '33%' }}>VQL Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="11" style={{ textAlign: 'center' }}><code>costs</code></td>
      <td><code>provider</code></td>
      <td><a href="#providers">Providers example</a></td>
    </tr>
    <tr>
      <td><code>allocation</code></td>
      <td><a href="#cost-allocation">Cost allocation example</a></td>
    </tr>
    <tr>
      <td><code>region</code></td>
      <td><a href="#region">Region example</a></td>
    </tr>
    <tr>
      <td><code>marketplace</code></td>
      <td><a href="#marketplace">Marketplace example</a></td>
    </tr>
    <tr>
      <td><code>account_id</code></td>
      <td><a href="#account">Account ID example</a></td>
    </tr>
    <tr>
      <td><code>provider_account_id</code></td>
      <td><a href="#provider-account">Provider account ID example</a></td>
    </tr>
    <tr>
      <td><code>service</code></td>
      <td><a href="#resource">Service example</a></td>
    </tr>
    <tr>
      <td><code>category</code></td>
      <td><a href="#category">Category example</a></td>
    </tr>
    <tr>
      <td><code>subcategory</code></td>
      <td><a href="#subcategory">Subcategory example</a></td>
    </tr>
    <tr>
      <td><code>resource_id</code></td>
      <td><a href="#resource">Resource example</a></td>
    </tr>
    <tr>
      <td><code>charge_type</code></td>
      <td><a href="#charge-type">Charge Type example</a></td>
    </tr>
    <tr>
      <td rowspan="2" style={{ textAlign: 'center' }}><code>tags</code></td>
      <td><code>name</code></td>
      <td rowspan="2"><ul><li><a href="#tags">Tags name/value example</a></li><li><a href="#untagged">Untagged example</a></li></ul></td>
    </tr>
    <tr>
      <td><code>value</code></td>
    </tr>
  </tbody>
</table>

:::note
Availability of the fields listed above varies among different cloud providers. For a comprehensive list of available fields per provider, see the [Data Dictionary](/data_dictionary).
:::

### Keywords

VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents.

| Keyword | Description                           | VQL Sample                                                                          | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AND`   | Logical AND operator                  | `costs.provider = 'aws' AND costs.service = 'EC2'`                                  | This example filters AWS costs for the EC2 service, where both conditions must be true.                                                                                                                                                                                                                                                                                                                                                                                          |
| `OR`    | Logical OR operator                   | `costs.provider = 'azure' OR costs.provider = 'aws'`                                | This example retrieves costs from either Azure or AWS. At least one condition must be true.                                                                                                                                                                                                                                                                                                                                                                                      |
| `IN`    | Used to compare against an array list | `costs.provider = 'azure' AND costs.account_id IN ('account-1', 'account-2')`       | This example filters based on a list of account IDs, returning data for the specified accounts<br/><br/>You can also use `IN` along with a special syntax for filtering by multiple tags. See [Filter by Multiple Tags](/vql#multiple-tags) for details.                                                                                                                                                                                                                         |
| `LIKE`  | Performs string comparisons           | `costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value LIKE '%prod%'` | This example selects data where the tag value contains `prod`, such as `production-1`. <br /> Note that at this time, `LIKE` is not compatible with `costs.account_id`, `costs.provider_account_id`, `costs.region`, and `costs.service`.                                                                                                                                                                                                                                        |
| `NOT`   | Represents negation                   | `costs.provider = 'aws' AND costs.region NOT IN ('us-east-1', 'us-east-2')`         | This example filters out data from both specified regions, providing all AWS costs _not_ in these regions. Use `NOT IN` to specify a list of single or multiple values. <br/><br/> You can also use the `!=` or `<>` operators for "is not." <br/><br/> `costs.provider = 'aws' AND costs.region != 'us-east-1'`<br/><br/>You can use `NOT LIKE` to perform string comparisons:<br/><br/>`costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value NOT LIKE '%prod%'` |

With these keywords, you can construct complex filter conditions in VQL, providing flexibility and precision when querying and analyzing cloud cost data.

### Syntax

You can think of VQL in its current iteration as the `WHERE` clause of a SQL query. By combining the schema and keywords above with parentheses, you can form complex filter operations, such as:

```sql
costs.provider = 'mongo' AND costs.allocation = 1.0 AND (costs.service = 'REALM' AND costs.resource_id IN ('s3')) OR (costs.provider = 'aws' AND costs.allocation = 1.0 AND costs.account_id IN ('123456798'))
```

## VQL Examples {#examples}

The following examples cover common use cases for VQL.

### Combining Providers {#providers}

Filter for provider costs associated with either MongoDB Atlas or AWS.

```sql
costs.provider = 'mongo' OR costs.provider = 'aws'
```

### Cost Allocation {#cost-allocation}

Set cost allocation to `0.5`.

```sql
costs.provider = 'gcp' AND costs.allocation = 0.5
```

### Costs from a List of Regions {#region}

Filter for Snowflake costs in two regions. Note that you will need to use the region code, such as `us-east-1` in the case of AWS, or `AWS_US_EAST_1` in the case of Snowflake, below.

```sql
costs.provider = 'snowflake' AND costs.region IN ('AWS_US_EAST_1', 'AWS_US_EAST_2')
```

### Get Marketplace Transactions {#marketplace}

Retrieve costs associated with the AWS Marketplace.

```sql
costs.provider = 'aws' AND costs.marketplace = true
```

### Costs by Account ID {#account}

Costs for a specific set of services and account ID.

```sql
costs.provider = 'aws' AND costs.account_id = '123456758' AND costs.service IN ('Amazon Relational Database', 'Amazon Elastic Compute Cloud - Compute')
```

### Costs by Provider Account ID {#provider-account}

The following example represents costs from a specific AWS billing account or costs from a specific Azure subscription.

```sql
(costs.provider = 'aws' AND costs.provider_account_id = 'abcd1234') OR (costs.provider = 'azure' AND costs.provider_account_id = 'abcd1234')
```

### Per-Resource Costs and Costs by Service {#resource}

Resource costs require both `provider` and `service` in addition to the `resource_id`.

```sql
costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'
```

#### Multiple Resource IDs

```sql
costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-01', 'arn:aws:rds:us-east-1:123456789:db:primary-02')
```

### Costs by Specific Category {#category}

Filter costs to see a specific cost category. Category costs require both `provider` and `service` as well as `category`.

```sql
costs.provider = 'fastly' AND costs.service = 'CDN' AND costs.category = 'Data Transfer'
```

### Costs by Specific Subcategory {#subcategory}

Filter costs by a specific service and subcategory. Subcategory costs require both `provider` and `service` as well as `subcategory`.

```sql
costs.provider = 'aws' AND costs.service = 'AWS Certificate Manager' AND costs.subcategory = 'USE1-PaidPrivateCA'
```

### Cost by Charge Type {#charge-type}

Filter costs by a specific charge type.

```sql
costs.provider = 'aws' AND costs.charge_type = 'Usage'
```

### Filter by Tag {#tags}

#### Filter by Single Tag

Filter costs based on a specific tag, such as `environment`, with the value `production`, in AWS.

```sql
costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'production'
```

#### Filter for Multiple Values from a Single Tag Key

If you want to filter for multiple tag values that are tied to one tag key (e.g., costs tagged with the `team` tag of `mobile` and `data`), use the below syntax.

```sql
costs.provider = 'aws' AND tags.name = 'team' AND tags.value IN ('mobile', 'data')
```

#### Filter by Multiple Tags {#multiple-tags}

If you want to filter for resources that have more than one tag associated, you can use the syntax shown in the example below.

```sql
costs.provider = 'aws' AND (tags.name, tags.value) IN (('environment', 'staging'), ('team', 'engineering'))
```

This example filters for resources that are tagged with the `environment` tag with a value of `staging` as well as the `team` tag with a value of `engineering`. This filter is the same as creating the following manual filter in the console.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filter by multiple tags in the console" width="80%" src="/img/multiple-tags-example.png" />
</div>

#### Filter for Matching Tags Using `LIKE`

```sql
costs.provider = 'azure' AND tags.name = 'environment' AND tags.value LIKE '%prod%'
```

### Filter for Untagged Resources {#untagged}

On providers that have a **Not Tagged**/**Not Labeled** filter option in the console, you can use the below VQL to see untagged resources. This example looks for untagged resources in a multi-cloud environment.

```sql
(costs.provider = 'aws' AND tags.name = NULL) OR (costs.provider = 'azure' AND tags.name = NULL) OR (costs.provider = 'gcp' AND tags.name = NULL)
```

## Troubleshooting

If you are receiving an error when trying to complete a query, check the following troubleshooting tips below.

- Each provider exposes certain names to the API. Those names are normalized within the schema. Check the [Data Dictionary](/data_dictionary) for normalized field names.
- Query parameter values should be wrapped in single quotes.
  <details><summary>Click to view examples</summary>

  :::tip This works

  ```sql
  costs.provider='aws'
  ```

  :::
  :::caution This does not work

  ```sql
  costs.provider="aws"
  ```

  :::

  </details>

- Currently, there is a limitation where `AND` and `OR` are not supported together in a single "query group."
  <details><summary>Click to view examples</summary>

  :::tip This works

  ```sql
  (costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'dev') OR (costs.provider = 'aws' AND tags.name = 'environment' AND tags.value = 'prod')
  ```

  :::
  :::caution This does not work

  ```sql
  costs.provider = 'aws' AND ((tags.name = 'environment' AND tags.value = 'dev') OR (tags.name = 'environment' AND tags.value = 'prod'))
  ```

  :::

  </details>

- The `costs.provider` field is required on every call.
  <details><summary>Click to view examples</summary>

  :::tip This works

  ```sql
  costs.provider = 'fastly' AND costs.service = 'CDN'
  ```

  :::
  :::caution This does not work

  ```sql
  costs.service = 'CDN'
  ```

  :::

  </details>

- Resource costs require both provider and service in addition to the resource ID.
  <details><summary>Click to view examples</summary>

  :::tip This works

  ```sql
  costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'
  ```

  :::
  :::caution This does not work

  ```sql
  costs.provider = 'aws' AND costs.resource_id = 'arn:aws:rds:us-east-1:123456789:db:primary-01'
  ```

  :::

  </details>

- Category and subcategory costs also require provider and service.
  <details><summary>Click to view examples</summary>

  :::tip These work

  ```sql
  costs.provider = 'fastly' AND costs.service = 'CDN' AND costs.category = 'Data Transfer'
  ```

  ```sql
  costs.provider = 'aws' AND costs.service = 'AWS Certificate Manager' AND costs.subcategory = 'USE1-PaidPrivateCA'
  ```

  :::

  :::caution These do not work

  ```sql
  costs.provider = 'fastly' AND costs.category = 'Data Transfer'
  ```

  ```sql
  costs.provider = 'aws' AND costs.subcategory = 'USE1-PaidPrivateCA'
  ```

  :::

  </details>
