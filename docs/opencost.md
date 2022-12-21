[OpenCost](https://www.opencost.io) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Vantage can ingest costs via OpenCost and Prometheus Remote Write and display them in the console. Any environments supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.

OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage.



# Overview

When deploying an Opencost integration in Vantage the follow steps occur:

1. An AWS Managed Prometheus Workspace is deployed into your AWS Account in us-east-1 - which Vantage will query directly.
2. An IAM User is created with permissions to write to this workspace.
3. Opencost and Prometheus are deployed to your Kubernetes cluster and configured to remote_write to the AWS Managed Prometheus. The created IAM User credentials are used for authentication.

To get started with this integration visit the [integrations](https://console.vantage.sh/settings/integrations) page and select the AWS account you would like to get started with. Deploying a Managed Prometheus per account is optional. You can use the single Managed Prometheus Workspace across all regions across all accounts.

If you already have a hosted Prometheus solution (such as Grafana) you can contact support@vantage.sh to integrate directly.
