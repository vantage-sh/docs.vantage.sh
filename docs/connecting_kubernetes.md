---
id: connecting_kubernetes
title: Kubernetes
description: This page walks through the options for how to integrate Vantage with your Kubernetes clusters.
keywords:
    - Kubernetes
    - Connect Kubernetes
---

# Kubernetes

Vantage allows you to see in-cluster costs for Kubernetes clusters, including seeing costs by Container, Service, Namespace and Label. Vantage supports any type of Kubernetes deployment (e.g., EKS, GKE, self-managed). This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications. 

The [Vantage Kubernetes agent](/kubernetes_agent) is the recommended integration point for ingesting Kubernetes costs into Vantage. Note that a primary provider (e.g., AWS, Azure, or GCP) is required to connect Kubernetes costs.

## How the Integration Works

Vantage looks at pod lifecycle data and the underlying nodes that pods run on. By joining the lifecycle data of each pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying node, Vantage allocates subcategories of the node (vCPU, memory, GPU, storage, etc.) to the pod. The lifecycle of the EC2 instance is also automatically determined (On-Demand, Spot, Reserved, Savings Plans, EDP, etc.). This allows you to see costs by the following dimensions:

- By container name
- By Kubernetes service
- By Kubernetes namespace
- By Kubernetes label

Vantage automatically profiles your clusters for all existing Services, Namespaces, and Labels to be available for you in the Vantage console as dimensions for filtering and reporting. 

## Enable Kubernetes Costs

To get started, follow the instructions for setting up the [Vantage Kubernetes agent](/kubernetes_agent).

## Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## Reporting Dimensions

On Kubernetes [Cost Reports](/cost_reports), you can filter across several dimensions:

- Account (associated account name)
- Grouping (includes Kubernetes grouping names and values and [virtual tags](/tagging) created in Vantage for this provider)
- Region (e.g., Westus2)
- Charge Type (e.g., Usage)
- Cluster (cluster name)
