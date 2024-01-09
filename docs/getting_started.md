---
id: getting_started
title: Quickstart
description: Learn how to use Vantage to connect multiple cloud providers and create cost reports as resources. 
keywords:
    - Quickstart
    - Connect providers
---
import CustomCardGroup from '@site/src/components/CustomCardGroup';
import CustomCard from '@site/src/components/CustomCard';

# Quickstart

:::tip Get Started
This quickstart guide will help you to set up your Vantage account, connect one or multiple providers, and start using Cost Reporting and Financial Planning features. 
:::

## Step 1: Create an Account

- Get started by [creating a Vantage account](https://console.vantage.sh/signup). 
- Optionally, you can upgrade to a paid plan to unlock additional features and track higher amounts of cloud infrastructure costs. View the [Vantage Pricing page](https://www.vantage.sh/pricing) for all pricing and plan details. All paid plans have an option to trial the service before committing to a subscription.

---

## Step 2: Connect Providers

Next, create a data integration between at least one of your providers and Vantage. Detailed integration documentation is linked for each of the providers below. 

<CustomCardGroup
  cards={[
    {
      icon: '/img/logos/logo-icon-aws.svg',
      iconAltText: 'AWS logo',
      title: 'Amazon Web Services (AWS)',
      content: "Vantage integrates with your AWS account through a Cross-Account IAM role, giving Vantage read-only access to an organization's cost data. After the initial sync, you will be able to take advantage of features in Vantage to manage, inspect, and model your AWS spend.",
      link: "/connecting_aws",
    },
    {
      icon: '/img/logos/logo-icon-azure.svg',
      iconAltText: 'Azure logo',
      title: 'Azure',
      content: "Vantage integrates with your Azure account by using an Active Directory Service Principal, which can be assigned access to both management groups or individual subscriptions. Any subscriptions that are part of a resource group will be automatically imported.",
      link: "/connecting_azure",
    },
    {
      icon: '/img/logos/logo-icon-gcp.svg',
      iconAltText: 'GCP logo',
      title: 'Google Cloud Platform (GCP)',
      content: "Vantage integrates with your GCP account through a service account, providing Vantage with read-only access to an organization's cost data. Following the creation of the role with the appropriate permissions, Vantage will initiate the synchronization of cost data and resource metadata.",
      link: "/connecting_gcp",
    },
    {
      icon: '/img/logos/logo-icon-kubernetes.svg',
      iconAltText: 'Kubernetes logo',
      title: 'Kubernetes',
      content: 'Vantage allows you to see in-cluster costs for Kubernetes clusters, including seeing costs by container, service, namespace and label. The Vantage Kubernetes agent is the recommended integration point for ingesting Kubernetes costs into Vantage.',
      link: "/connecting_kubernetes",
    },
    {
      icon: '/img/logos/logo-icon-datadog.svg',
      iconAltText: 'Datadog logo',
      title: 'Datadog',
      content: 'Vantage integrates with your Datadog account through a read-only Datadog OAuth token. After connecting, Vantage automatically receives read-only access to appropriate cost and usage APIs to begin ingesting Datadog cost data',
      link: "/connecting_datadog",
    },
    {
      icon: '/img/logos/logo-icon-new-relic.svg',
      iconAltText: 'New Relic logo',
      title: 'New Relic',
      content: 'Vantage integrates with your New Relic account through the use of New Relic Usage Data via the New Relic GraphQL API.',
      link: "/connecting_new_relic",
    },
    {
      icon: '/img/logos/logo-icon-mongodb.svg',
      iconAltText: 'MongoDB Atlas logo',
      title: 'MongoDB Atlas',
      content: 'Vantage integrates with MongoDB Atlas account through read-only use of the Invoices API. To see Active Resources for your MongoDB Atlas account, Vantage uses the Clusters API and the Projects API.',
      link: "/connecting_mongodb-atlas",
    },
    {
      icon: '/img/logos/logo-icon-snowflake.svg',
      iconAltText: 'Snowflake logo',
      title: 'Snowflake',
      content: 'Vantage integrates with your Snowflake account through a secure, read-only user who has access to Snowflake usage tables. Optionally, Vantage can pull from a dedicated schema that you create.',
      link: "/connecting_snowflake",
    },
    {
      icon: '/img/logos/logo-icon-databricks.svg',
      iconAltText: 'Databricks logo',
      title: 'Databricks',
      content: 'Vantage integrates with your Databricks account through the use of Billable Usage Logs. Vantage provides an S3 bucket for Databricks to deliver usage logs to on a periodic basis.',
      link: "/connecting_databricks",
    },
    {
      icon: '/img/logos/logo-icon-fastly.svg',
      iconAltText: 'Fastly logo',
      title: 'Fastly',
      content: 'Vantage integrates with your Fastly account through a read-only API token. Fastly API tokens are free for you to create—and adding them to the Vantage console only takes a few minutes.',
      link: "/connecting_fastly",
    },
    {
      icon: '/img/logos/logo-icon-oracle.svg',
      iconAltText: 'Oracle Cloud logo',
      title: 'Oracle Cloud',
      content: 'Vantage connects to Oracle Cloud using a read-only IAM user and API key to read from a Cost and Usage Reports object storage bucket.',
      link: "/connecting_oracle",
    },
    {
      icon: '/img/logos/logo-icon-confluent.svg',
      iconAltText: 'Confluent logo',
      title: 'Confluent',
      content: 'Vantage integrates with your Confluent account through a revocable read/write API key and secret. Confluent API keys are free for you to create—and adding to the Vantage console only takes a few minutes.',
      link: "/connecting_confluent",
    },
    {
      icon: '/img/logos/logo-icon-planetscale.svg',
      iconAltText: 'PlanetScale logo',
      title: 'PlanetScale',
      content: 'Vantage integrates with your PlanetScale account through the PlanetScale Costs API using an OAuth workflow.',
      link: "/connecting_planetscale",
    },
  ]}
  columns={2}
/>
<br/>

:::info Other Providers
Vantage will be launching support for additional cloud infrastructure providers in the future. If you have a particular provider that you would like supported, please reach out to [support@vantage.sh](mailto:support@vantage.sh).
:::

---

## Step 3: View Ingested Costs and Create Cost Reporting Resources

Once you create some provider integrations, Vantage will automatically begin ingesting billing information for your account. The default landing page in the Vantage console is the [**Overview**](/overview) page. This page serves as an executive-level summary, providing a comprehensive snapshot of the cost metrics that matter most to you. 

As you continue to set up your cost reporting infrastructure, you can use the below guides for some best practices in Vantage. 

- [**Team Accountability**](/team_accountability): To ensure team accountability in cloud cost management, follow this guide. Create Cost Report Folders for specific teams, generate Cost Reports for various dimensions, implement Cost Report notifications, set team budgets, and continually monitor and optimize to minimize unnecessary expenses, thus guaranteeing efficient cloud spending.
- [**Executive Reporting**](/executive_reporting): If you want to set up executive-level reporting, follow this guide. Use tools in Vantage to effortlessly gather and present comprehensive insights into your organization's cloud spending, enabling you to deliver actionable reports that facilitate informed decision-making at the executive level.
- [**Find Hidden Costs**](/hidden_costs): If you want to uncover hidden costs and optimize spending, follow this guide. Vantage provides tools like Active Resources for listing cost-driving resources and Cost Anomaly Alerts to automatically detect and alert on unexpected expenses. 
