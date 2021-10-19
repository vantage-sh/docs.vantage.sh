Vantage supports breaking down the cost to run a Kubernetes cluster by service. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications.

## How it works
Vantage calculates the cost of a running POD by taking the reserved CPU and Memory along with the actually used CPU and Memory and multiplying it by the cost to use a single core and single GB of RAM on a specific type of EC2 Instance. 

## Enabling Kubernetes Costs

In order to enable Kubernetes costs visit your Workspace settings page and click into Integrations. From there you will see all of the EKS Clusters currently running in your account along with the status of the Integration. If additional permissions are required it will be indicated next to the cluster. In order to enable Kubernetes Costs Advanced Analytics must be enabled for your acount and [CloudWatch Container Insights](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/ContainerInsights.html) must be enabled for the cluster. 

### Enabling Container Insights

In order to enable Container Insights you must install the CloudWatch agent or the AWS Distro for OpenTelemetry on your EKS cluster. In order to do so follow [these instructions](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/deploy-container-insights-EKS.html) from AWS. 
