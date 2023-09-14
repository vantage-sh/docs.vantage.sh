# Data Dictionary

Each provider that Vantage integrates makes different fields available in their billing data. This data is normalized into the following fields, which are also queryable via the [Vantage API](https://vantage.readme.io/v2.0/reference/general) and [VQL](/vql).

| Provider     | Filter          | API Name            |
| ------------ | --------------- | ------------------- |
| AWS          | Account         | account_id          |
| AWS          | Billing Account | provider_account_id |
| AWS          | Tag             | tag_name            |
| AWS          | Tag Value       | tag_value           |
| AWS          | Not Tagged      | untagged            |
| AWS          | Service         | service             |
| AWS          | Region          | region              |
| AWS          | Provider        | provider            |
| AWS          | Category        | category            |
| AWS          | Subcategory     | sub_category        |
| AWS          | Marketplace     | marketplace         |
| AWS          | Resource        | resource_id         |
| Azure        | Subscription    | provider_account_id |
| Azure        | Resource Group  | account_id          |
| Azure        | Tag             | tag_name            |
| Azure        | Tag Value       | tag_value           |
| Azure        | Not Tagged      | untagged            |
| Azure        | Service         | service             |
| Azure        | Region          | region              |
| Azure        | Provider        | provider            |
| Azure        | Category        | category            |
| Azure        | Subcategory     | sub_category        |
| Azure        | Resource        | resource_id         |
| Google Cloud | Project         | account_id          |
| Google Cloud | Billing Account | provider_account_id |
| Google Cloud | Label           | tag_name            |
| Google Cloud | Label Value     | tag_value           |
| Google Cloud | Not Labeled     | untagged            |
| Google Cloud | Service         | service             |
| Google Cloud | Region          | region              |
| Google Cloud | Provider        | provider            |
| Google Cloud | Category        | category            |
| Google Cloud | Resource        | resource_id         |
| Oracle       | Tenancy         | provider_account_id |
| Oracle       | Compartment     | account_id          |
| Oracle       | Tag             | tag_name            |
| Oracle       | Tag Value       | tag_value           |
| Oracle       | Not Tagged      | untagged            |
| Oracle       | Service         | service             |
| Oracle       | Region          | region              |
| Oracle       | Provider        | provider            |
| Oracle       | Category        | category            |
| Oracle       | Resource        | resource_id         |
| Kubernetes   | Account         | account_id          |
| Kubernetes   | Grouping        | tag_name            |
| Kubernetes   | Grouping Value  | tag_value           |
| Kubernetes   | Cluster         | service             |
| Kubernetes   | Region          | region              |
| Kubernetes   | Provider        | provider            |
| Datadog      | Organization    | account_id          |
| Datadog      | Service         | service             |
| Datadog      | Provider        | provider            |
| Datadog      | Tag             | tag_name            |
| Datadog      | Tag Value       | tag_value           |
| Datadog      | Not Tagged      | untagged            |
| New Relic    | Account         | account_id          |
| New Relic    | Service         | service             |
| New Relic    | Category        | category            |
| Snowflake    | Organization    | provider_account_id |
| Snowflake    | Account         | account_id          |
| Snowflake    | Provider        | provider            |
| Snowflake    | Region          | region              |
| Snowflake    | Category        | category            |
| Snowflake    | Metadata        | tag_name            |
| Snowflake    | Metadata Value  | tag_value           |
| Snowflake    | Service         | service             |
| Databricks   | Account         | account_id          |
| Databricks   | Service         | service             |
| Databricks   | Cluster         | resource_id         |
| Databricks   | Tag             | tag_name            |
| Databricks   | Tag Value       | tag_value           |
| Databricks   | Not Tagged      | untagged            |
| Databricks   | Category        | category            |
| Mongo        | Organization    | provider_account_id |
| Mongo        | Project         | account_id          |
| Mongo        | Service         | service             |
| Mongo        | Category        | category            |
| Mongo        | Resource        | resource_id         |
| Fastly       | Account         | account_id          |
| Fastly       | Service         | service             |
| Fastly       | Provider        | provider            |
| Fastly       | Region          | region              |
| Fastly       | Category        | category            |
| Fastly       | Subcategory     | sub_category        |
| Fastly       | Resource        | resource_id         |
