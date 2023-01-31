# Getting Started

To get started using Vantage to explore your cloud infrastructure costs, you'll want to create a data integration between at least one of your providers and Vantage.

![Connecting providers](/img/connecting-providers-2.png)

## Connecting Amazon Web Services (AWS)

Vantage integrates with AWS via a [cross-account IAM role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_common-scenarios_third-party.html). This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their AWS spend.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting an AWS account](https://console.vantage.sh/setup). The onboarding flow will guide you through connecting your AWS account to Vantage. Full documentation on connecting an AWS account, can be found [here](/connecting_aws/).

## Connecting Microsoft Azure

Vantage integrates with your Azure account through the use of a Active Directory [Service Principal](https://learn.microsoft.com/en-us/azure/active-directory/fundamentals/service-accounts-principal). This principal is then assigned access to either [management groups](https://learn.microsoft.com/en-us/azure/governance/management-groups/overview) or individual [subscriptions](https://learn.microsoft.com/en-us/azure/cloud-adoption-framework/ready/landing-zone/design-area/resource-org-subscriptions). Any subscriptions that are part of a [resource group](https://learn.microsoft.com/en-us/azure/azure-resource-manager/management/manage-resource-groups-portal) will be automatically imported.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting an Azure account](https://console.vantage.sh/setup). The onboarding flow will guide you through connecting your Azure account to Vantage. Full documentation on connecting an Azure account can be found [here](/connecting_azure/).

## Connecting Google Cloud Platform (GCP)

Vantage integrates with GCP via a [service account](https://cloud.google.com/iam/docs/service-accounts). This gives Vantage read-only access to an organization's cost data. Once the role has been created and given the correct set of permissions, Vantage will begin syncing an organization's cost data and resource metadata. After the initial sync is complete, users will be able to take advantage of all of the features of the Vantage platform to manage, inspect and model their GCP spend.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting a GCP billing account](https://console.vantage.sh/setup). The onboarding flow will guide you through connecting your GCP account to Vantage. Full documentation on connecting a GCP billing account can be found [here](/connecting_gcp/).

## Connecting Kubernetes

Vantage recommends [OpenCost](/opencost) as the preferred integration point for Kubernetes costs, but can also ingest metrics through AWS Container Insights.

Get started by [creating a Vantage account](https://console.vantage.sh/signup) and [connecting a cloud provider account](https://console.vantage.sh/setup). The onboarding flow will guide you through creating the data integration to your cloud provider. Full documentation on getting started with Kubernetes can be found [here](/connecting_kubernetes/).

## Connecting Datadog

Vantage integrates with your Datadog account through a read only Datadog OAuth token. The user which completes this OAuth flow will need access to the **usage_read** scope to complete the connection. Get started with Datadog costs [here](/connecting_datadog).

## Connecting Snowflake

Vantage integrates with your Snowflake account through a secure, read-only user that has access to Snowflake usage tables. Optionally, we have a recommendation for creating a dedicated schema which Vantage can pull from. Get started with Snowflake costs [here](/connecting_snowflake).

## Connecting Databricks

Vantage integrates with your Databricks account through the use of [Billable Usage Logs](https://docs.databricks.com/administration-guide/account-settings/billable-usage-delivery.html). Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis. Get started with Databricks costs [here](/connecting_databricks).

## Connecting Fastly

Vantage integrates with your Fastly account through a read-only API token. Fastly API Tokens are free for you to create. Adding them to the [Vantage console](https://console.vantage.sh/signup) only takes a few minutes. Step by step instructions to connect Fastly can be found [here](/connecting_fastly).

## Other Providers

Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to [support@vantage.sh](mailto:support@vantage.sh).
