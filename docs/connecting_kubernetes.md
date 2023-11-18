---
id: connecting_kubernetes
title: Set Up Kubernetes
description: This page walks through the options for how to integrate Vantage with your Kubernetes clusters.
keywords:
    - Kubernetes
    - Connect Kubernetes
---

# Set Up Kubernetes

Vantage allows you to see in-cluster costs for Kubernetes clusters, including seeing costs by Container, Service, Namespace and Label. Vantage supports any type of Kubernetes deployment (e.g., EKS, GKE, self-managed). This allows teams to easily understand how their shared clusters are being utilized and how to account for cluster costs across teams and applications. 

The [Vantage Kubernetes Agent](/kubernetes_agent) is the recommended integration point for ingesting Kubernetes costs into Vantage.

## How the Integration Works

Vantage looks at Pod lifecycle data and the underlying nodes that pods run on. By joining the lifecycle data of each pod (along with the greater of either the reserved or actual CPU/memory prescribed) with the specific rate information of the underlying node, Vantage allocates subcategories of the node (vCPU, Memory, GPU, Storage, etc.) to the pod. The lifecycle of the EC2 instance is also automatically determined (On-Demand, Spot, Reserved, Savings Plans, EDP, etc.). This allows you to see costs by the following dimensions:

- By Container Name
- By Pod Name
- By Kubernetes Service
- By Kubernetes Namespace
- By Kubernetes Label

Vantage automatically profiles your clusters for all existing Services, Namespaces, and Labels to be available for you in the Vantage console as dimensions for filtering and reporting. 

## Enable Kubernetes Costs

To get started, follow the instructions for setting up the [Vantage Kubernetes Agent](/kubernetes_agent).
