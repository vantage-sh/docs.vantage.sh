# Kubernetes (OpenCost)

[OpenCost](https://www.opencost.io) is an emerging [specification](https://github.com/opencost/opencost/blob/develop/spec/opencost-specv01.md) for Kubernetes costs. Once OpenCost is deployed on your Kubernetes cluster, Vantage can ingest costs by leveraging Prometheus remote write functionality to retrieve and ingest cluster costs accoriingly to make available in the Vantage console accordingly. All Kubernetes environments are supported by OpenCost, including AWS, GCP, Azure, and on-prem, are supported by Vantage.

OpenCost is the recommended way to integrate Kubernetes cost reporting into Vantage because of simplicity, ease of use as well as the most cost effective manner relative to other native tools offered by infrastructure providers such as container insights. 

# Overview

Vantage makes it easy for deploying and integrating with OpenCost. Here are the steps for how this is done below:

1. An AWS Managed Prometheus Workspace will be provisioned into your AWS Account in us-east-1 - which the Vantage cross account IAM Role will query directly to ingest OpenCost data. 
2. An IAM User is created with permissions to write to this newly created workspace.
3. Opencost and Prometheus are deployed to your Kubernetes cluster and configured to remote_write to the AWS Managed Prometheus. The created IAM User credentials are used for authentication.
4. Vantage will regularly query the AWS Managed Prometheus Workspace to keep your Kubernetes cost information up-to-date. 

To get started with this integration visit the [integrations](https://console.vantage.sh/settings/integrations) page and select the AWS account you would like to get started with. Deploying a Managed Prometheus per account is optional. You can use the single Managed Prometheus Workspace across all regions across all accounts.

If you already have a hosted Prometheus solution (such as Grafana) you can contact support@vantage.sh to integrate directly.

## Check that OpenCost data is being ingested

Once the integration is deployed you can check the Kubernetes [integration page](https://console.vantage.sh/settings/integrations) in the Vantage console to see if data is flowing. If you see the cluster names listed on this page then data is being ingested and your Kuberentes cost data through OpenCost will be available within a day or two.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="OpenCost is working" width="60%" src="/img/opencost_working.png" />
</div>
