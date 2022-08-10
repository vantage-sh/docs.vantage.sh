Vantage supports breaking down the cost to run a Kubernetes cluster by service, namespace and label. Vantage supports any type of Kubernetes deployment. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications.

Vantage recommends [OpenCost](/opencost) as the preferred integration point for Kubernetes costs.

## How it Works

Vantage looks at Pod lifecycle data and the underlying EC2 instance that the Pod is running on. By joining the lifecycle data of each Pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying EC2 instance, we allocate subcategories of the EC2 instance (vPCU, Memory, GPU, Storage, etc) to the Pod. The lifecycle of the EC2 instance is also automatically determined (on-demand, spot, reserved, savings plan, EDP, etc). This allows you to see costs by the following dimensions:

- By Kubernetes Service
- By Kubernetes Namespace
- By Kubernetes Label

Vantage automatically profiles your clusters for all existing services, namespaces and labels to make available for you in the Vantage console.

## Enabling Kubernetes Costs

Vantage offers two different mechanisms for enabling Kubernetes costs: (1) AWS Container Insights and (2) Connecting to Prometheus instances directly.

In order to enable Kubernetes costs, visit your Workspace settings page and click into [Integrations](https://console.vantage.sh/settings/integrations). From there you will see all of the EKS Clusters currently running in your account along with the status of the Integration. If additional permissions are required it will be indicated next to the cluster. In order to enable Kubernetes Costs, a [Cost and Usage integration](/connecting_aws/#aws-data-ingestion-delay) must be enabled.

### Enabling Container Insights

Vantage supports seeing Kubernetes costs via AWS Container Insights. In order to enable Container Insights you must install the CloudWatch agent or the AWS Distro for OpenTelemetry on your EKS cluster. In order to do so follow [these instructions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) from AWS.

In the event you already have Container Insights enabled, no action is necessary and costs should be visualized automatically.

### Enabling a Prometheus Connection

Vantage supports seeing Kubernetes costs via a direct Prometheus integration.

!!! contribute "You'll need to contact Vantage support to get this up and running."
Because of the bespoke setup that various organizations have around Prometheus, we recommend contacting either support@vantage.sh or booking a call with Sales to speak through how to get up and running with Prometheus.
