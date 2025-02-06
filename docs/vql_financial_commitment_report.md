---
id: vql_financial_commitment_report
title: VQL for Financial Commitment Reports
description: This page walks through the Vantage Query Language, or VQL, for use in Financial Commitment Reports.
keywords:
  - VQL
  - Vantage Query Language
  - Terraform
---

# VQL for Financial Commitment Reports

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to use VQL when querying Financial Commitment Reports in the API or using the Terraform Provider.

:::tip
If you need help constructing a VQL query, navigate to the [**Financial Commitment Reports**](https://console.vantage.sh/financial_planning/financial_commitment_reports) page and click **New Report**. From the top left, open the **Filters** menu. Create a filter and click the **View as VQL** button at the top of the **Filters** menu to see a filter's VQL representation. You can copy this syntax to use within your API calls.
:::

## Financial Commitment Reports VQL Schema

VQL for Financial Commitment Reports comprises one namespace, `financial_commitments`, which represents the available [filters](/financial_commitment_reports#create-report) on Financial Commitment Reports in the Vantage console. To reference a filter, use the following syntax: `namespace.field` (e.g., `financial_commitments.service`). The following fields are available within the `financial_commitments` namespace.

<table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>Namespace</th>
      <th>Field</th>
      <th>VQL Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="18"><code>financial_commitments</code></td>
      <td><code>provider</code></td>
      <td><code>provider = 'aws'</code> should be added as the first part of each statement</td>
    </tr>
    <tr>
      <td><code>service</code></td>
      <td><a href="#service">Service example</a></td>
    </tr>
    <tr>
      <td><code>resource_account_id</code></td>
      <td><a href="#account">Account example</a></td>
    </tr>
    <tr>
      <td><code>provider_account_id</code></td>
      <td><a href="#billing">Billing Account example</a></td>
    </tr>
    <tr>
      <td><code>commitment_type</code></td>
      <td><a href="#commitment-type">Commitment Type example</a></td>
    </tr>
        <tr>
      <td><code>commitment_id</code></td>
      <td><a href="#commitment-id">Commitment ARN example</a></td>
    </tr>
        <tr>
      <td><code>cost_type</code></td>
      <td><a href="#cost-type">Charge Type example</a></td>
    </tr>
        <tr>
      <td><code>cost_category</code></td>
      <td><a href="#category">Category example</a></td>
    </tr>
        <tr>
      <td><code>cost_sub_category</code></td>
      <td><a href="#subcategory">Subcategory example</a></td>
    </tr>
        <tr>
      <td><code>instance_type</code></td>
      <td><a href="#instance">Instance Type example</a></td>
    </tr>
        <tr>
      <td><code>Region</code></td>
      <td><a href="#region">Region example</a></td>
    </tr>
        <tr>
      <td><code>resource_tags</code></td>
      <td><a href="#tags">Tags example</a></td>
    </tr>
  </tbody>
</table>

### Keywords

VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents. Note that each expression started with `provider = 'aws'`, followed by additional filters.

| Keyword               | Description                                                            | VQL Sample                                                                                                            | Explanation                                                                                                                                                                                                                                                                                                         |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AND`                 | Logical AND operator                                                   | `(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'business-metric' = 'us-east-1a') AND (financial_commitments.cost_category = 'Alarm'))`                                                           | This example filters for a specific tag and category, where both conditions must be true.                                                                                                                                                                                                           |
| `OR`                  | Logical OR operator                                                    | `(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'business-metric' = 'us-east-1a') AND (financial_commitments.resource_tags->>'business-metric' = 'us-east-1b'))`                                                        | This example looks for results associated with two different tags. At least one condition must be true.                                                                                                                                                                                                                       |
| `!=`                  | Is not                                                    | `(financial_commitments.provider = 'aws' AND (financial_commitments.cost_type != 'Credit'))`                                                        | This example looks for results that are any charge type except for `Credit`.                                                                                                                                                                                                                       |
| `IN` and `NOT IN` | Used to compare against an array/list                                            | `(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'business-metric' IN ('us-east-1a','us-east-1b','us-east-1c')))`                                      | This example searches for results with the `business-metric` tag key and multiple values. <br/><br/>This same query also works for `NOT IN` where the results are anything matching the tag key except for those particular values: `(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'business-metric' NOT IN ('us-east-1a','us-east-1b','us-east-1c')))`. |
| `LIKE` and `NOT LIKE` | Performs string comparisons                                            | `(financial_commitments.provider = 'aws' AND (financial_commitments.commitment_id LIKE '%arn:aws:ec2%'))`                                      | This example selects data where the commitment ARN value contains `arn:aws:ec2`, such as `arn:aws:ec2:us-west-2:1234`. <br/><br/>This same query also works for `NOT LIKE` where data does not contain a particular string: `(financial_commitments.provider = 'aws' AND (financial_commitments.commitment_id NOT LIKE '%arn:aws:ec2%'))`. |
| `->>`                 | This operator is used only when constructing queries related to tags | `(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'environment' = 'staging'))` | This example looks results with the tag name of `environment` and value of `staging`.                                                                                                                                                                                                                                            |

With these operators and keywords, you can construct complex filter conditions in VQL.

## VQL Examples {#examples}

The following examples cover common use cases for VQL.

### Financial Commitments by Service {#service}

Filter for multiple services.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.service IN ('AmazonAthena','AmazonCloudFront','AmazonECS')))
```

### Financial Commitments by Specific Account {#account}

Filter down to an individual account.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.resource_account_id = '123456789012'))
```

### Financial Commitments by Specific Billing Account {#billing}

Filter down to an individual billing account.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.provider_account_id = '123456789012'))
```

### See Specific Commitment Types {#commitment-type}

Filter out certain commitment types to see everything else.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.commitment_type NOT IN ('credit','free')))
```

### Financial Commitments by Commitment ARN {#commitment-id}

See the impact of specific financial commitments related to EC2 by ARNs.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.commitment_id LIKE '%arn:aws:ec2%'))
```

### Financial Commitments by Charge Type {#cost-type}

See only usage-related commitments. 

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.cost_type = 'Usage'))
```

### Financial Commitments by Category {#category}

All data transfer-related commitments. 

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.cost_category = 'Data Transfer'))
```

### Financial Commitments by Subcategory {#subcategory}

Filter for Cloudfront and data transfer egress in APN2.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.cost_sub_category IN ('APN2-DataTransfer-Out-Bytes','APN2-CloudFront-Out-Bytes')))
```

### Financial Commitments by Instance Types {#instance}

Filter from a list of different instance types.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.instance_type IN ('c7a.12xlarge','c7gn.large','c7gn.medium')))
```

### Financial Commitments by Region {#region}

See all financial commitments outside of `us-east-1`.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.region = 'us-east-1'))
```

### Financial Commitments by Tags {#tags}

Filter based on a specific tag called `business-metric` and a list of provided values.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.resource_tags->>'business-metric' IN ('us-east-1a','us-east-1b','us-east-1c')))
```

### Multiple Filters

Complex filter that shows combining two different statements using `OR` with multiple criteria.

```sql
(financial_commitments.provider = 'aws' AND (financial_commitments.resource_account_id = '123456789012') AND (financial_commitments.service = 'AmazonEC2')) OR (financial_commitments.provider = 'aws' AND (financial_commitments.resource_account_id = '098765432109') AND (financial_commitments.service = 'AmazonRDS'))
```
