---
id: data_dictionary
title: Data Dictionary (Cost Reports)
description: The page is a data dictionary of values used for creating VQL statements in the Vantage API and Terraform provider.
keywords:
  - Data dictionary
  - VQL
  - Terraform
---

# Data Dictionary

Each provider that Vantage integrates with makes different fields available in their billing data. This data is normalized into the fields below. These fields are queryable via the [Vantage API](https://vantage.readme.io/reference/general) and used when constructing [VQL](/vql) statements.

Each provider table contains four columns: Filter, API Field Name, Data Type, and `namespace.field`.

- The _Filter_ is the friendly name that is displayed on Cost Report filters within the Vantage console.
- The _API Field Name_ is the normalized version of the filter name.
- The _Data Type_ indicates the type of data that is accepted for that field.
- `namespace.field` is how that field is referenced in a VQL query (e.g., `costs.provider = 'aws'`, where `costs` is the namespace and `provider` is the field).

:::info
See the [list of VQL examples](/vql#examples) for information on how to use these fields.
:::

## Provider Field Values

Each cost provider also has a normalized name within the API. The `provider` field is part of the `costs` namespace.

| Provider         | API Field Name | Link to Provider Fields                          |
| ---------------- | -------------- | ------------------------------------------------ |
| AWS              | `aws`          | [View AWS Fields](#aws)                          |
| Azure            | `azure`        | [View Azure Fields](#azure)                      |
| ClickHouse Cloud | `clickhouse`   | [View ClickHouse Cloud Fields](#clickhouse)      |
| Confluent        | `confluent`    | [View Confluent Fields](#confluent)              |
| Coralogix        | `coralogix`    | [View Coralogix Fields](#coralogix)              |
| Custom Providers | _See note_     | [View Custom Provider Fields](#custom_providers) |
| Databricks       | `databricks`   | [View Databricks Fields](#databricks)            |
| Datadog          | `datadog`      | [View Datadog Fields](#datadog)                  |
| Fastly           | `fastly`       | [View Fastly Fields](#fastly)                    |
| GitHub           | `github`       | [View GitHub Fields](#github)                    |
| Google Cloud     | `gcp`          | [View GCP Fields](#google-cloud-platform)        |
| Grafana Cloud    | `grafana`      | [View Grafana Cloud Fields](#grafana-cloud)      |
| Kubernetes       | `kubernetes`   | [View Kubernetes Fields](#kubernetes)            |
| Linode           | `linode`       | [View Linode Fields](#linode)                    |
| MongoDB Atlas    | `mongo`        | [View MongoDB Atlas Fields](#mongodb-atlas)      |
| New Relic        | `newrelic`     | [View New Relic Fields](#new-relic)              |
| OpenAI           | `openai`       | [View OpenAI Fields](#openai)                    |
| Oracle Cloud     | `oracle`       | [View Oracle Cloud Fields](#oracle-cloud)        |
| PlanetScale      | `planetscale`  | [View PlanetScale Fields](#planetscale)          |
| Snowflake        | `snowflake`    | [View Snowflake Fields](#snowflake)              |
| Temporal Cloud   | `temporal`     | [View Temporal Cloud Fields](#temporal)          |

:::note
To reference a [Custom Provider](/connecting_custom_providers) in VQL queries, navigate to the [**Integrations** page](https://console.vantage.sh/settings/custom_providers). Use the displayed **Provider ID** (e.g., `custom_provider:accss_crdntl_123a45bfdaf38765`).
:::

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

## ClickHouse Cloud {#clickhouse}

| Filter       | API Field Name        | Data Type | `namespace.field`           |
| ------------ | --------------------- | --------- | --------------------------- |
| Provider     | `provider`            | string    | `costs.provider`            |
| Category     | `category`            | string    | `costs.category`            |
| Tag\*        | `name`                | string    | `tags.name`                 |
| Tag Value\*  | `value`               | string    | `tags.value`                |
| Subcategory  | `subcategory`         | string    | `costs.subcategory`         |
| Resource     | `resource_id`         | string    | `costs.resource_id `        |
| Charge Type  | `charge_type`         | string    | `costs.charge_type`         |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Service      | `service`             | string    | `costs.service`             |

_\* Virtual tags associated with this provider_

## Confluent {#confluent}

| Filter       | API Field Name | Data Type | `namespace.field `  |
| ------------ | -------------- | --------- | ------------------- |
| Category     | `category`     | string    | `costs.category`    |
| Organization | `account_id`   | string    | `costs.account_id`  |
| Service      | `service`      | string    | `costs.service`     |
| Resource     | `resource_id`  | string    | `costs.resource_id` |
| Charge Type  | `charge_type`  | string    | `costs.charge_type` |
| Tag\*        | `name`         | string    | `tags.name`         |
| Tag Value\*  | `value`        | string    | `tags.value`        |
| Provider     | `provider`     | string    | `costs.provider`    |

_\* Virtual tags associated with this provider_

## Coralogix {#coralogix}

| Filter      | API Field Name | Data Type | `namespace.field `   |
| ----------- | -------------- | --------- | -------------------- |
| Category    | `category`     | string    | `costs.category`     |
| Subcategory | `subcategory`  | string    | `costs.subcategory`  |
| Service     | `service`      | string    | `costs.service`      |
| Resource    | `resource_id`  | string    | `costs.resource_id ` |
| Charge Type | `charge_type`  | string    | `costs.charge_type`  |
| Tag\*       | `name`         | string    | `tags.name`          |
| Tag Value\* | `value`        | string    | `tags.value`         |
| Provider    | `provider`     | string    | `costs.provider`     |

_\* Virtual tags associated with this provider_

## Custom Providers {#custom_providers}

Available fields are based on what you've uploaded for this Custom Provider. See the [Custom Providers](/connecting_custom_providers) documentation for details.

| Filter      | API Field Name | Data Type | `namespace.field `   |
| ----------- | -------------- | --------- | -------------------- |
| Category    | `category`     | string    | `costs.category`     |
| Subcategory | `subcategory`  | string    | `costs.subcategory`  |
| Region      | `region`       | string    | `costs.region`       |
| Resource    | `resource_id`  | string    | `costs.resource_id ` |
| Service     | `service`      | string    | `costs.service`      |
| Charge Type | `charge_type`  | string    | `costs.charge_type`  |
| Tag\*       | `name`         | string    | `tags.name`          |
| Tag Value\* | `value`        | string    | `tags.value`         |
| Provider    | `provider`     | string    | `costs.provider`     |

_\* Regular and virtual tags associated with this provider_

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
| Provider    | `provider`     | string    | `costs.provider`    |

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
| Tag\*       | `name`         | string    | `tags.name`         |
| Tag Value\* | `value`        | string    | `tags.value`        |

_\* Virtual tags associated with this provider_

## GitHub {#github}

| Filter      | API Field Name | Data Type | `namespace.field`   |
| ----------- | -------------- | --------- | ------------------- |
| Service     | `service`      | string    | `costs.service`     |
| Provider    | `provider`     | string    | `costs.provider`    |
| Category    | `category`     | string    | `costs.category`    |
| Subcategory | `subcategory`  | string    | `costs.subcategory` |
| Resource    | `resource_id`  | string    | `costs.resource_id` |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |
| Tag         | `name`         | string    | `tags.name`         |
| Tag Value   | `value`        | string    | `tags.value`        |

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

## Grafana Cloud {#grafana-cloud}

| Filter       | API Field Name        | Data Type | `namespace.field`           |
| ------------ | --------------------- | --------- | --------------------------- |
| Service      | `service`             | string    | `costs.service`             |
| Account      | `account_id`          | string    | `costs.account_id`          |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Tag\*        | `name`                | string    | `tags.name`                 |
| Tag Value\*  | `value`               | string    | `tags.value`                |
| Provider     | `provider`            | string    | `costs.provider`            |
| Category     | `category`            | string    | `costs.category`            |
| Charge Type  | `charge_type`         | string    | `costs.charge_type`         |

_\* Virtual tags associated with this provider_

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

## Linode {#linode}

| Filter      | API Field Name | Data Type | `namespace.field`   |
| ----------- | -------------- | --------- | ------------------- |
| Service     | `service`      | string    | `costs.service`     |
| Category    | `category`     | string    | `costs.category`    |
| Subcategory | `subcategory`  | string    | `costs.subcategory` |
| Resource    | `resource_id`  | string    | `costs.resource_id` |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |
| Tag\*       | `name`         | string    | `tags.name`         |
| Tag Value\* | `value`        | string    | `tags.value`        |
| Provider    | `provider`     | string    | `costs.provider`    |

_\* Virtual tags associated with this provider_

## MongoDB Atlas {#mongodb-atlas}

| Filter       | API Field Name        | Data Type | `namespace.field`           |
| ------------ | --------------------- | --------- | --------------------------- |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Project      | `account_id`          | string    | `costs.account_id`          |
| Service      | `service`             | string    | `costs.service`             |
| Category     | `category`            | string    | `costs.category`            |
| Resource     | `resource_id`         | string    | `costs.resource_id`         |
| Charge Type  | `charge_type`         | string    | `costs.charge_type`         |
| Tag          | `name`                | string    | `tags.name`                 |
| Tag Value    | `value`               | string    | `tags.value`                |
| Provider     | `provider`            | string    | `costs.provider`            |

## New Relic {#new-relic}

| Filter      | API Field Name | Data Type | `namespace.field`   |
| ----------- | -------------- | --------- | ------------------- |
| Account     | `account_id`   | string    | `costs.account_id`  |
| Service     | `service`      | string    | `costs.service`     |
| Category    | `category`     | string    | `costs.category`    |
| Charge Type | `charge_type`  | string    | `costs.charge_type` |
| Tag\*       | `name`         | string    | `tags.name`         |
| Tag Value\* | `value`        | string    | `tags.value`        |
| Provider    | `provider`     | string    | `costs.provider`    |

_\* Virtual tags associated with this provider_

## OpenAI {#openai}

| Filter          | API Field Name        | Data Type | `namespace.field`           |
| --------------- | --------------------- | --------- | --------------------------- |
| Account         | `account_id`          | string    | `costs.account_id`          |
| Billing Account | `provider_account_id` | string    | `costs.provider_account_id` |
| Service         | `service`             | string    | `costs.service`             |
| Provider        | `provider`            | string    | `costs.provider`            |
| Category        | `category`            | string    | `costs.category`            |
| Subcategory     | `subcategory`         | string    | `costs.subcategory`         |
| Charge Type     | `charge_type`         | string    | `costs.charge_type`         |
| Tag\*           | `name`                | string    | `tags.name`                 |
| Tag Value\*     | `value`               | string    | `tags.value`                |

_\* Virtual tags associated with this provider_

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
| Tag\*        | `name`         | string    | `tags.name`         |
| Tag Value\*  | `value`        | string    | `tags.value`        |
| Provider     | `provider`     | string    | `costs.provider`    |

_\* Virtual tags associated with this provider_

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

## Temporal Cloud {#temporal}

| Filter       | API Field Name        | Data Type | `namespace.field `          |
| ------------ | --------------------- | --------- | --------------------------- |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Service      | `service`             | string    | `costs.service`             |
| Provider     | `provider`            | string    | `costs.provider`            |
| Charge Type  | `charge_type`         | string    | `costs.charge_type`         |
| Category     | `category`            | string    | `costs.category`            |
| Subcategory  | `subcategory`         | string    | `costs.subcategory`         |
| Tag Name\*   | `name`                | string    | `tags.name`                 |
| Tag Value\*  | `value`               | string    | `tags.value`                |

_\* Virtual tags associated with this provider_
