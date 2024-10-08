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

- **API**. On supported endpoints, such as `/cost_reports`, you can use VQL in the `filter` parameter to programmatically create and fetch Cost Reports. There are two VQL scopes currently available for Cost Reports and Resource Reports.
- **Terraform provider**. In supported Terraform resources, such as `vantage_saved_filter` or `vantage_cost_report`, you can use VQL for the `filter` argument to create filtered Cost Reports or saved filters.

The below examples show how to use VQL on both the API and on the Terraform provider. This example creates a [saved filter](/cost_reports#saved-filters) in your Vantage account using VQL.

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

## Scopes

VQL has a separate scope for each type of report—meaning that you cannot use VQL statements for Cost Reports when querying Resource Reports. See the following pages below to learn more about each VQL scope.

- [VQL for Cost Reports](/vql_cost_reports)
- [VQL for Resource Reports](/vql_resource_reports)
