---
id: cost_recommendations
title: Cost Recommendations
description: View cost recommendations in Vantage and find ways to save on your cloud bill.
keywords:
  - Cost recommendations
  - EC2 rightsizing recommendations
toc_max_heading_level: 4
---

# Cost Recommendations

Vantage monitors your connected providers and shows cost recommendations as your infrastructure evolves and changes. You can implement these recommendations to lower your bill.

:::note
Cost recommendations are currently available for AWS, Azure, and Datadog.
:::

## Types of Recommendations

:::tip
To get started with cost recommendations, you can also view a video demo on [Vantage University](/vantage_university_observability) 🎓.
:::

Your available recommendations depend on what services and resources are running in your account. In general, there are three types of recommendations:

- **Cloud-provider recommendations:** Gathered from your connected provider and further enriched in Vantage
- **Custom-built recommendations:** Created by Vantage
- **Cross-provider recommendations:** Suggests where a service from another provider could be used

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of cost recommendations in the console" width="100%" src="/img/cost-recommendations-screen.png" />
</div>

## View Cost Recommendations

1. From the top navigation, click **Recommendations**.
2. The following columns are displayed: **Service**, **Potential Savings**, and **Description**.
   :::tip
   To filter recommendations by provider, open the **Show All** menu at the top right of the table and select a provider.
   :::
3. In cases where actions are recommended for specific resources, such as adding lifecycle policies, the **View resources** button is displayed. Click this button to see a list of the affected resources.
4. If you no longer want to view a recommendation, click the **Archive** icon (looks like an arrow pointing down). The recommendation will be moved to the **Archived** tab.

### View Recommendations during a Trial

If you are currently on a trial, the specific recommendations are blurred; however, the total amount of potential savings is displayed. After you activate a Vantage subscription, these recommendations are fully visible. As you make changes to your infrastructure, the recommendations are automatically updated. Recommendations are refreshed once a day.

## Provider-Specific Recommendations

The recommendations that are available for [AWS](/cost_recommendations#aws), [Azure](/cost_recommendations#azure), [Datadog](/cost_recommendations#datadog), and [Kubernetes](/cost_recommendations#kubernetes-rightsizing) in Vantage are based on the granularity of data exposed by each provider. Notes for these providers are provided below.

### AWS Recommendations {#aws}

| Recommendation Type           | Description                                                                                                                                                                                               |
| ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Savings Plans                 | Vantage will look at your AWS infrastructure on a weekly basis and provide Savings Plan recommendations tailored to your actual usage of EC2, Fargate, and Lambda.                                        |
| Reserved Instances            | Vantage will recommend Reserved Instances for services, like RDS, ElastiCache, Elasticsearch, and more with specific Reserved Instances to purchase.                                                      |
| Stranded resources            | Vantage will look for stranded resources, such as EBS volumes, IP addresses, and more, to ensure you've cleaned up everything you're not using.                                                           |
| Storage optimizations         | Vantage will look at EBS volumes you're using to provide optimization recommendations as well as S3 object type usage to recommend actions, like changing EBS volumes or enabling S3 Intelligent-Tiering. |
| Networking optimizations      | Vantage will look for networking optimizations especially for CloudFront and S3.                                                                                                                          |
| Lifecycle policies            | Vantage will profile for services that can auto-delete data to reduce costs and expected savings noted.                                                                                     |
| EC2 rightsizing opportunities | Vantage will identify rightsizing opportunities and provide specific reasons to rightsize EC2 instances, such as over-provisioned CPU. See more information below.                                             |

#### EC2 Rightsizing Recommendations

If you have EC2 instances that are over-allocated in terms of vCPU and GB of RAM, you may be paying more than needed per instance. Rightsizing recommendations can help you save significantly, by identifying rightsizing opportunities and providing specific reasons to rightsize, such as over-provisioned CPU.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="An EC2 rightsizing recommendation with a button to compare instance sizes in the console" width="90%" src="https://assets.vantage.sh/blog/vantage-launches-ec2-rightsizing-recommendations/rightsizing-recommendation.png" />
</div>

Each recommendation includes potential savings as well as the number of instances identified for rightsizing. 

1. Click **View resources** to view each identified EC2 instance that is recommended for rightsizing. 
2. The **Rightsizing** tab on the [Active Resources](/active_resources) screen is displayed. The tab includes a recommended size for migration (e.g., “Migrate to m5.large”), a list of associated reasons (e.g., “CPU over-provisioned”), if available, and the potential monthly savings. 
3. Click **Compare Pricing** to explore an instance pricing comparison via [ec2instances.info](https://instances.vantage.sh). This pricing comparison evaluates the current instance type used against the proposed instance type from the recommendation.

### Azure Recommendations {#azure}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of Azure-related recommendations in the console" width="70%" src="/img/azure-cost-recs.png" />
</div>
<br/>

| Recommendation Type                   | Description                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Compute reserved instances            | Suggestions for instances with on-demand usage that could be converted to reserved instances for better savings |
| Compute unattached virtual hard disks | Disks that have not been attached to a VM in the last 30 days                                                   |

### Datadog Recommendations {#datadog}

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of Datadog-related recommendations in the console" width="100%" src="/img/datadog-cost-recs.png" />
</div>

For Datadog, Vantage provides recommendations about making commitments for Datadog services where [committed use discounts](https://handbook.vantage.sh/datadog/committed-use-discounts/) are offered. These recommendations are based on your actual usage of Datadog services to assist with making the right commitment.

### Kubernetes Rightsizing Recommendations {#kubernetes-rightsizing}

Without proper resource allocation, Kubernetes clusters can become overprovisioned, leading to wasted resources and idle costs. Vantage provides Kubernetes rightsizing recommendations to help you identify affected resources. 

These recommendations are focused on [managed workloads](https://kubernetes.io/docs/concepts/workloads/controllers/) within Kubernetes clusters and do not provide rightsizing recommendations for the Kubernetes nodes themselves.

:::tip
For a full guide on understanding rightsizing and how to rightsize Kubernetes resources, see the following article in the [Cloud Cost Handbook](https://handbook.vantage.sh/kubernetes/kubernetes-rightsizing/).
:::

#### View Kubernetes Rightsizing Recommendations

:::note
Rightsizing recommendations require version 1.0.24 or later of the Vantage Kubernetes agent. See the [Kubernetes agent documentation](/kubernetes_agent#upgrade-agent) for information on how to upgrade the agent. Once the upgrade is complete, the agent will begin uploading the data needed to generate rightsizing recommendations. After the agent is upgraded or installed, recommendations will become available within 48 hours. This step is required to ensure there is enough data to make a valid recommendation. Historical data is not available before the agent upgrade, so it is recommended that you recognize cyclical resource usage patterns, such as a weekly spike when you first review recommendations. 
:::

1. From the **Cost Recommendations** screen, click **View resources** to view each identified Kubernetes workload that is recommended for rightsizing.
2. Select a workload from the list. The workload is displayed within the [Active Resources](/active_resources) screen.
3. Select the **Rightsizing** tab. A section for each container that’s identified for rightsizing is included. 
   - Each recommendation includes a high-fidelity graph of CPU and RAM used within the container in the past month, the average and maximum usage for mCPU and memory, and recommendations for how to rightsize your configuration. The chart includes a per-day average usage. The table provides a 30-day average and 30-day average max usage.
   :::note
   mCPU refers to milliCPU, which is a fractional representation of CPU, where 1 CPU is equal to 1000 milliCPU. **Current Configuration** comes from the currently configured requests for the pod template within the controller spec. This is collected by the Kubernetes agent hourly and updated when the cost data is imported, roughly once per 24 hours.
   :::
   - The **Potential Monthly Savings** are also provided to indicate your estimated savings once these recommendations are implemented on your Kubernetes resources.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Kubernetes Rightsizing UI with a sample recommendation displayed" width="80%" src="/img/k8s-rightsize.png" />
</div>

#### How Vantage Calculates Kubernetes Rightsizing Recommendations

Vantage takes the following steps to calculate Kubernetes rightsizing recommendations.

1. _Identify controllers with low efficiency._
    - Controllers running below an efficiency level of 80% over the last 30 days are identified.
    - Efficiency is calculated as the percentage of the average CPU or memory utilization divided by the amount allocated for that resource.
2. _Determine the target amount for rightsizing._
    - The target amount is calculated by dividing the average usage by the efficiency target of 80%. For example, if your average usage is 100, and the efficiency target is 80%, then Vantage determines the right size to be (100/.8), or 125.
    - This target amount might exceed the maximum observed usage, which is acceptable to provide room for potential spikes in resource usage. This also prevents containers from being terminated due to resource exhaustion.
3. _Calculate the potential savings._
    - Savings is the difference between current configuration and target configuration multiplied by a standard hourly base rate.
    - For Deployments and StatefulSets, these savings are further multiplied by the number of replicas configured for each controller.
    - The calculated amount of savings must be at least $5 to be considered for rightsizing recommendations.

If you make a configuration change to a pod, the Vantage Kubernetes agent will upload the new configuration for the pod within the hour that it is available. Vantage reruns recommendations once the next Kubernetes ingestion is processed, which is every 24 hours.