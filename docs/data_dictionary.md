---
id: data_dictionary
title: Data Dictionary
description: The page is a data dictionary of values used for creating VQL statements in the Vantage API and Terraform provider.
keywords:
  - Data dictionary
  - VQL
  - Terraform
---

# Data Dictionary

Each provider that Vantage integrates with makes different fields available in their billing data. This data is normalized into the fields below. These fields are queryable via the [Vantage API](https://vantage.readme.io/reference/general) and used when constructing [VQL](/vql) statements.

Each provider table contains four columns: Filter, API Field Name, Data Type, and `namespace.field`.

- The Filter is the friendly name that is displayed on Cost Report filters within the Vantage console.
- The API Field Name is the normalized version of the filter name.
- The Data Type indicates that type of data that is accepted for that field.
- `namespace.field` is how that field is referenced in a VQL query (e.g., `costs.provider = 'aws'`, where `costs` is the namespace and `provider` is the field).

:::info
See the [list of VQL examples](/vql#examples) for information on how to use these fields.
:::

## Provider Field Values

Each cost provider also has a normalized name within the API. The `provider` field is part of the `costs` namespace.

| Provider      | API Field Name | Link to Provider Fields                     |
| ------------- | -------------- | ------------------------------------------- |
| AWS           | `aws`          | [View AWS Fields](#aws)                     |
| Azure         | `azure`        | [View Azure Fields](#azure)                 |
| Confluent     | `confluent`    | [View Confluent Fields](#confluent)         |
| Databricks    | `databricks`   | [View Databricks Fields](#databricks)       |
| Datadog       | `datadog`      | [View Datadog Fields](#datadog)             |
| Fastly        | `fastly`       | [View Fastly Fields](#fastly)               |
| Google Cloud  | `gcp`          | [View GCP Fields](#google-cloud-platform)   |
| Kubernetes    | `kubernetes`   | [View Kubernetes Fields](#kubernetes)       |
| MongoDB Atlas | `mongo`        | [View MongoDB Atlas Fields](#mongodb-atlas) |
| New Relic     | `newrelic`     | [View New Relic Fields](#new-relic)         |
| Oracle Cloud  | `oracle`       | [View Oracle Cloud Fields](#oracle-cloud)   |
| PlanetScale   | `planetscale`  | [View PlanetScale Fields](#planetscale)     |
| Snowflake     | `snowflake`    | [View Snowflake Fields](#snowflake)         |

## AWS {#aws}

| Filter          | API Field Name        | Data Type | `namespace.field`           |
| --------------- | --------------------- | --------- | --------------------------- |
| Account         | `account_id`          | string    | `costs.account_id`          |
| Billing Account | `provider_account_id` | string    | `costs.provider_account_id` |
| Tag             | `name`                | string    | `tags.name`                 |
| Tag Value       | `value`               | string    | `tags.value`                |
| Service         | `service`             | string    | `costs.service`             |
| Region          | `region`              | string    | `costs.region`              |
| Provider        | `provider`            | string    | `costs.provider`            |
| Category        | `category`            | string    | `costs.category`            |
| Subcategory     | `subcategory`         | string    | `costs.subcategory`         |
| Marketplace     | `marketplace`         | boolean   | `costs.marketplace`         |
| Resource        | `resource_id`         | string    | `costs.resource_id`         |
| Charge Type     | `charge_type`         | string    | `costs.charge_type`         |

## Azure {#azure}

| Filter         | API Field Name        | Data Type | `namespace.field`           |
| -------------- | --------------------- | --------- | --------------------------- |
| Subscription   | `provider_account_id` | string    | `costs.provider_account_id` |
| Resource Group | `account_id`          | string    | `costs.account_id`          |
| Tag            | `name`                | string    | `tags.name`                 |
| Tag Value      | `value`               | string    | `tags.value`                |
| Service        | `service`             | string    | `costs.service`             |
| Region         | `region`              | string    | `costs.region`              |
| Provider       | `provider`            | string    | `costs.provider`            |
| Category       | `category`            | string    | `costs.category`            |
| Subcategory    | `subcategory`         | string    | `costs.subcategory`         |
| Resource       | `resource_id`         | string    | `costs.resource_id `        |
| Charge Type    | `charge_type`         | string    | `costs.charge_type`         |

## Confluent {#confluent}

| Filter       | API Field Name | Data Type | `namespace.field `  |
| ------------ | -------------- | --------- | ------------------- |
| Category     | `category`     | string    | `costs.category`    |
| Organization | `account_id`   | string    | `costs.account_id`  |
| Service      | `service`      | string    | `costs.service`     |
| Resource     | `resource_id`  | string    | `costs.resource_id` |
| Charge Type  | `charge_type`  | string    | `costs.charge_type` |

## Databricks {#databricks}

| Filter      | API Field Name | Data Type | `namespace.field  ` |
| ----------- | -------------- | --------- | ------------------- |
| Account     | `account_id`   | string    | `costs.account_id`  |
| Service     | `service`      | string    | `costs.service`     |
| Cluster     | `resource_id`  | string    | `costs.resource_id` |
| Tag         | `name`         | string    | `tags.name`         |
| Tag Value   | `value`        | string    | `tags.value`        |
| Category    | `category`     | string    | `costs.category`    |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |

## Datadog {#datadog}

| Filter       | API Field Name | Data Type | `namespace.field`   |
| ------------ | -------------- | --------- | ------------------- |
| Organization | `account_id`   | string    | `costs.account_id`  |
| Service      | `service`      | string    | `costs.service`     |
| Provider     | `provider`     | string    | `costs.provider`    |
| Tag          | `name`         | string    | `tags.name`         |
| Tag Value    | `value`        | string    | `tags.value`        |
| Charge Type  | `charge_type`  | string    | `costs.charge_type` |

## Fastly {#fastly}

| Filter      | API Field Name | Data Type | `namespace.field`   |
| ----------- | -------------- | --------- | ------------------- |
| Account     | `account_id`   | string    | `costs.account_id`  |
| Service     | `service`      | string    | `costs.service`     |
| Provider    | `provider`     | string    | `costs.provider`    |
| Region      | `region`       | string    | `costs.region`      |
| Category    | `category`     | string    | `costs.category`    |
| Subcategory | `subcategory`  | string    | `costs.subcategory` |
| Resource    | `resource_id`  | string    | `costs.resource_id` |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |

## Google Cloud {#google-cloud-platform}

| Filter          | API Field Name        | Data Type | `namespace.field`           |
| --------------- | --------------------- | --------- | --------------------------- |
| Project         | `account_id`          | string    | `costs.account_id`          |
| Billing Account | `provider_account_id` | string    | `costs.provider_account_id` |
| Label           | `name`                | string    | `tags.name`                 |
| Label Value     | `value`               | string    | `tags.value`                |
| Service         | `service`             | string    | `costs.service`             |
| Region          | `region`              | string    | `costs.region`              |
| Provider        | `provider`            | string    | `costs.provider`            |
| Category        | `category`            | string    | `costs.category`            |
| Resource        | `resource_id`         | string    | `costs.resource_id`         |
| Charge Type     | `charge_type`         | string    | `costs.charge_type`         |

## Kubernetes {#kubernetes}

| Filter         | API Field Name | Data Type | `namespace.field`   |
| -------------- | -------------- | --------- | ------------------- |
| Account        | `account_id`   | string    | `costs.account_id`  |
| Grouping       | `name`         | string    | `tags.name`         |
| Grouping Value | `value`        | string    | `tags.value`        |
| Cluster        | `service`      | string    | `costs.service`     |
| Region         | `region`       | string    | `costs.region`      |
| Provider       | `provider`     | string    | `costs.provider`    |
| Charge Type    | `charge_type`  | string    | `costs.charge_type` |

## MongoDB Atlas {#mongodb-atlas}

| Filter       | API Field Name        | Data Type | `namespace.field`           |
| ------------ | --------------------- | --------- | --------------------------- |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Project      | `account_id`          | string    | `costs.account_id`          |
| Service      | `service`             | string    | `costs.service`             |
| Category     | `category`            | string    | `costs.category`            |
| Resource     | `resource_id`         | string    | `costs.resource_id`         |
| Charge Type  | `charge_type`         | string    | `costs.charge_type`         |

## New Relic {#new-relic}

| Filter      | API Field Name | Data Type | `namespace.field`   |
| ----------- | -------------- | --------- | ------------------- |
| Account     | `account_id`   | string    | `costs.account_id`  |
| Service     | `service`      | string    | `costs.service`     |
| Category    | `category`     | string    | `costs.category`    |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |

## Oracle Cloud {#oracle-cloud}

| Filter      | API Field Name        | Data Type | `namespace.field`           |
| ----------- | --------------------- | --------- | --------------------------- |
| Tenancy     | `provider_account_id` | string    | `costs.provider_account_id` |
| Compartment | `account_id`          | string    | `costs.account_id`          |
| Tag         | `name`                | string    | `tags.name`                 |
| Tag Value   | `value`               | string    | `tags.value`                |
| Service     | `service`             | string    | `costs.service`             |
| Region      | `region`              | string    | `costs.region`              |
| Provider    | `provider`            | string    | `costs.provider`            |
| Category    | `category`            | string    | `costs.category`            |
| Resource    | `resource_id`         | string    | `costs.resource_id`         |
| Charge Type | `charge_type`         | string    | `costs.charge_type`         |

## PlanetScale {#planetscale}

| Filter       | API Field Name | Data Type | `namespace.field `  |
| ------------ | -------------- | --------- | ------------------- |
| Category     | `category`     | string    | `costs.category`    |
| Organization | `account_id`   | string    | `costs.account_id`  |
| Service      | `service`      | string    | `costs.service`     |
| Resource     | `resource_id`  | string    | `costs.resource_id` |
| Charge Type  | `charge_type`  | string    | `costs.charge_type` |

## Snowflake {#snowflake}

| Filter         | API Field Name        | Data Type | `namespace.field `          |
| -------------- | --------------------- | --------- | --------------------------- |
| Organization   | `provider_account_id` | string    | `costs.provider_account_id` |
| Account        | `account_id`          | string    | `costs.account_id`          |
| Provider       | `provider`            | string    | `costs.provider`            |
| Region         | `region`              | string    | `costs.region`              |
| Category       | `category`            | string    | `costs.category`            |
| Metadata       | `name`                | string    | `tags.name`                 |
| Metadata Value | `value`               | string    | `tags.value`                |
| Service        | `service`             | string    | `costs.service`             |
| Charge Type    | `charge_type`         | string    | `costs.charge_type`         |
