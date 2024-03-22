---
id: cost_recommendations
title: Cost Recommendations
description: View cost recommendations in Vantage and find ways to save on your cloud bill.
keywords:
  - Cost recommendations
  - EC2 rightsizing recommendations
---

# Cost Recommendations

Vantage monitors your connected providers and shows cost recommendations as your infrastructure evolves and changes. You can implement these recommendations to lower your bill.

:::note
Cost recommendations are currently available for AWS, Azure, and Datadog.
:::

## Types of Recommendations

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

The recommendations that are available for AWS, Azure, and Datadog in Vantage are based on the granularity of data exposed by each provider. Notes for all three providers are below.

### AWS Recommendations

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

### Azure Recommendations

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of Azure-related recommendations in the console" width="70%" src="/img/azure-cost-recs.png" />
</div>
<br/>

| Recommendation Type                   | Description                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| Compute reserved instances            | Suggestions for instances with on-demand usage that could be converted to reserved instances for better savings |
| Compute unattached virtual hard disks | Disks that have not been attached to a VM in the last 30 days                                                   |

### Datadog Recommendations

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A list of Datadog-related recommendations in the console" width="100%" src="/img/datadog-cost-recs.png" />
</div>

For Datadog, Vantage provides recommendations about making commitments for Datadog services where [committed use discounts](https://handbook.vantage.sh/datadog/committed-use-discounts/) are offered. These recommendations are based on your actual usage of Datadog services to assist with making the right commitment.
