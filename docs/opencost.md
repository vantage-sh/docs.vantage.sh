---
id: opencost
title: Kubernetes (OpenCost)
description: This page walks through how to integrate your Kubernetes costs via OpenCost in Vantage.
keywords:
    - Kubernetes
    - OpenCost
---

# Kubernetes (OpenCost)

[OpenCost](https://www.opencost.io) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Once OpenCost is deployed on your Kubernetes cluster, Vantage can ingest costs by leveraging the Prometheus remote write functionality to retrieve and ingest cluster costs accordingly to make available in the Vantage console. All Kubernetes environments are supported by OpenCost, including AWS, GCP, Azure, and on-premises, are supported by Vantage.

:::note
The steps below are for integrations that use OpenCost instead of the recommended [Vantage Kubernetes agent](/kubernetes_agent) integration.
:::

## Deploy and Integrate with OpenCost

:::info
To set up OpenCost in Azure or Google Cloud, please contact us at [support@vantage.sh](mailto:support@vantage.sh) to be included in private support for Azure Monitor Managed Service for Prometheus or Google Cloud Managed Service for Prometheus.
:::

Vantage makes it easy to deploy and integrate with OpenCost. Here are the steps for how the integration is done:

1. An AWS Managed Prometheus Workspace will be provisioned into your AWS account in _us-east-1_—which the Vantage Cross-Account IAM role will query directly to ingest OpenCost data.
2. An IAM user is created with permissions to write to this newly created workspace.
3. OpenCost and Prometheus are deployed to your Kubernetes cluster and configured to `remote_write` to the AWS Managed Prometheus. The created IAM user credentials are used for authentication.
4. Vantage will regularly query the AWS Managed Prometheus Workspace to keep your Kubernetes cost information up to date.

To get started with this integration, navigate to the [Integrations](https://console.vantage.sh/settings/integrations) page in the Vantage console, and select the AWS account you would like to get started with. 

Deploying a Managed Prometheus per account is optional. You can use the single Managed Prometheus Workspace across all regions, across all accounts. If you already have a hosted Prometheus solution (such as Grafana), you can contact [support@vantage.sh](mailto:support@vantage.sh) to integrate directly.

## Validate OpenCost Data Is Being Ingested

1. Once the integration is deployed, you can check the [Kubernetes Integration page](https://console.vantage.sh/settings/integrations) in the Vantage console to see if data is flowing. 
2. If you see the cluster names listed below, then data is being ingested and your Kubernetes cost data through OpenCost will be available within a day or two.

<div style={{ display: "flex", justifyContent: "center", borderRadius: 10, boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
    <img alt="OpenCost is working" width="60%" src="/img/opencost_working.png" style={{ borderRadius: 10 }} />
</div>
