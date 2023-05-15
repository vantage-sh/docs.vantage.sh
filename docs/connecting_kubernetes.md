# Setup Kubernetes

Vantage allows you to see in-cluster costs for Kubernetes clusers including seeing costs by container, service, namespace and label. Vantage supports any type of Kubernetes deployment (EKS, GKE, self-managed, etc.). This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications. 

Vantage recommends integrating with [OpenCost](/opencost) as the preferred method for ingesting and tracking Kubernetes costs.

## How it Works

Vantage looks at Pod lifecycle data and the underlying nodes that pods run on. By joining the lifecycle data of each Pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying node, Vantage allocates subcategories of the node (vPCU, Memory, GPU, Storage, etc) to the Pod. The lifecycle of the EC2 instance is also automatically determined (on-demand, spot, reserved, savings plan, EDP, etc). This allows you to see costs by the following dimensions:

- By container
- By Kubernetes service
- By Kubernetes namespace
- By Kubernetes label

Vantage automatically profiles your clusters for all existing services, namespaces and labels to make available for you in the Vantage console as dimensions for filtering and reporting. 

## Enabling Kubernetes Costs

Vantage supports seeing Kubernetes costs via Opencost and Prometheus. You can get started by following these [instructions](https://docs.vantage.sh/opencost/).
