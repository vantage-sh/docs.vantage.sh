Vantage supports breaking down the cost to run a Kubernetes cluster by service, namespace and label. Vantage supports any type of Kubernetes deployment. This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications.

Vantage recommends [OpenCost](/opencost) as the preferred integration point for Kubernetes costs.

## How it Works

Vantage looks at Pod lifecycle data and the underlying EC2 instance that the Pod is running on. By joining the lifecycle data of each Pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying EC2 instance, we allocate subcategories of the EC2 instance (vPCU, Memory, GPU, Storage, etc) to the Pod. The lifecycle of the EC2 instance is also automatically determined (on-demand, spot, reserved, savings plan, EDP, etc). This allows you to see costs by the following dimensions:

- By Kubernetes Service
- By Kubernetes Namespace
- By Kubernetes Label

Vantage automatically profiles your clusters for all existing services, namespaces and labels to make available for you in the Vantage console.

## Enabling Kubernetes Costs

Vantage supports seeing Kubernetes costs via Opencost and Prometheus. You can get started by following these [instructions](https://docs.vantage.sh/opencost/).

