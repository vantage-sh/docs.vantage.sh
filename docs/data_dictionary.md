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

Each provider that Vantage integrates with makes different fields available in their billing data. This data is normalized into the the fields below. These fields are queryable via the [Vantage API](https://vantage.readme.io/reference/general) and used when constructing [VQL](/vql) statements.

:::tip
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

## Confluent {#confluent}

| Filter       | API Field Name | Data Type | `namespace.field `  |
| ------------ | -------------- | --------- | ------------------- |
| Category     | `category`     | string    | `costs.category`    |
| Organization | `account_id`   | string    | `costs.account_id`  |
| Service      | `service`      | string    | `costs.service`     |
| Resource     | `resource_id`  | string    | `costs.resource_id` |

## Databricks {#databricks}

| Filter    | API Field Name | Data Type | `namespace.field  ` |
| --------- | -------------- | --------- | ------------------- |
| Account   | `account_id`   | string    | `costs.account_id`  |
| Service   | `service`      | string    | `costs.service`     |
| Cluster   | `resource_id`  | string    | `costs.resource_id` |
| Tag       | `name`         | string    | `tags.name`         |
| Tag Value | `value`        | string    | `tags.value`        |
| Category  | `category`     | string    | `costs.category`    |

## Datadog {#datadog}

| Filter       | API Field Name | Data Type | `namespace.field`  |
| ------------ | -------------- | --------- | ------------------ |
| Organization | `account_id`   | string    | `costs.account_id` |
| Service      | `service`      | string    | `costs.service`    |
| Provider     | `provider`     | string    | `costs.provider`   |
| Tag          | `name`         | string    | `tags.name`        |
| Tag Value    | `value`        | string    | `tags.value`       |

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

## Google Cloud {#google-cloud-platform}

| Filter          | API Field Name        | Data Types | `namespace.field`           |
| --------------- | --------------------- | ---------- | --------------------------- |
| Project         | `account_id`          | string     | `costs.account_id`          |
| Billing Account | `provider_account_id` | string     | `costs.provider_account_id` |
| Label           | `name`                | string     | `tags.name`                 |
| Label Value     | `value`               | string     | `tags.value`                |
| Service         | `service`             | string     | `costs.service`             |
| Region          | `region`              | string     | `costs.region`              |
| Provider        | `provider`            | string     | `costs.provider`            |
| Category        | `category`            | string     | `costs.category`            |
| Resource        | `resource_id`         | string     | `costs.resource_id`         |

## Kubernetes {#kubernetes}

| Filter         | API Field Name | Data Type | `namespace.field`  |
| -------------- | -------------- | --------- | ------------------ |
| Account        | `account_id`   | string    | `costs.account_id` |
| Grouping       | `name`         | string    | `tags.name`        |
| Grouping Value | `value`        | string    | `tags.value`       |
| Cluster        | `service`      | string    | `costs.service`    |
| Region         | `region`       | string    | `costs.region`     |
| Provider       | `provider`     | string    | `costs.provider`   |

## MongoDB Atlas {#mongodb-atlas}

| Filter       | API Field Name        | Data Type | `namespace.field`           |
| ------------ | --------------------- | --------- | --------------------------- |
| Organization | `provider_account_id` | string    | `costs.provider_account_id` |
| Project      | `account_id`          | string    | `costs.account_id`          |
| Service      | `service`             | string    | `costs.service`             |
| Category     | `category`            | string    | `costs.category`            |
| Resource     | `resource_id`         | string    | `costs.resource_id`         |

## New Relic {#new-relic}

| Filter   | API Field Name | Data Type | `namespace.field`  |
| -------- | -------------- | --------- | ------------------ |
| Account  | `account_id`   | string    | `costs.account_id` |
| Service  | `service`      | string    | `costs.service`    |
| Category | `category`     | string    | `costs.category`   |

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
