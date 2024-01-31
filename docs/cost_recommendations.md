---
id: cost_recommendations
title: Cost Recommendations
description: View cost recommendations in Vantage and find ways to save on your cloud bill.
keywords:
  - Cost Recommendations
  - EC2 rightsizing recommendations
---

# Cost Recommendations

Vantage monitors your environments and surfaces cost recommendations as your infrastructure evolves and changes. After you connect your infrastructure to Vantage, the system will profile your account for cost recommendations, which you can implement to lower your bill.

:::note
Cost recommendations are currently available for AWS, Azure, and Datadog.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="100%" src="/img/cost-recommendations-screen.png" />
</div>

## Types of Recommendations

The recommendations you see depend on what services and resources are running in your account. In general, there are three types of recommendations:

- **Cloud-provider recommendations:** Gathered from the connected provider and further enriched in Vantage
- **Custom-built recommendations:** Created by Vantage
- **Cross-provider recommendations:** Suggests where a service from another provider could be used

## View Cost Recommendations

1. From the console, navigate to the [Cost Recommendations page](https://console.vantage.sh/recommendations).
2. The following columns are displayed: Service, Potential Savings, and Description.
3. In cases where actions are recommended for specific resources, such as adding lifecycle policies, the **View resources** button is displayed. Click this button to see a list of the affected resources.
4. If you no longer want to view a recommendation, click the **Archive** icon (looks like an arrow pointing down). The recommendation will be moved to the **Archived** tab.

## Viewing Recommendations during a Trial

If you are currently on a trial, the specific recommendations are blurred; however, the total amount of potential savings is shown. After you subscribe to Vantage, these recommendations are fully visible. As you make changes to your infrastructure, they are automatically updated. Recommendations are refreshed once a day.

## Provider-Specific Recommendations

Which recommendations are available on which providers is generally a function of the granularity of data exposed by the provider. Notes on AWS, Azure, and Datadog follow.

### AWS

| Recommendation Type           | Description                                                                                                                                                                                              |
| ----------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Savings Plans                 | Vantage will look at your AWS infrastructure on a weekly basis and provide Savings Plans recommendations tailored to your actual usage of EC2, Fargate, and Lambda.                                      |
| Reserved Instances            | Vantage will recommend Reserved Instances for services, like RDS, Elasticache, Elasticsearch, and more with specific Reserved Instances to purchase.                                                     |
| Stranded resources            | Vantage will look for stranded resources, such as EBS volumes, IP addresses, and more to ensure you've cleaned up everything you're not using.                                                           |
| Storage optimizations         | Vantage will look at EBS volumes you're using to provide optimization recommendations as well as S3 object type usage to recommend actions like changing EBS volumes or enabling S3 Intelligent-Tiering. |
| Networking optimizations      | Recommendations especially for CloudFront and S3.                                                                                                                                                        |
| Lifecycle policies            | Services that can auto-delete data to reduce costs will be profiled and expected savings found.                                                                                                          |
| EC2 rightsizing opportunities | Recommendations that can help customers save significantly, by identifying rightsizing opportunities and providing specific reasons to rightsize, such as over-provisioned CPU.                          |

### Azure

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="70%" src="/img/azure-cost-recs.png" />
</div>

| Recommendation Type                   | Description                                                                                                   |
| ------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Compute reserved instances            | Suggestions for instances of on-demand usage that could be converted to reserved instances for better savings |
| Compute Unattached Virtual Hard Disks | Disks that have not been attached to a VM in the last 30 days                                                 |

### Datadog

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="70%" src="/img/datadog-cost-recs.png" />
</div>

For Datadog, Vantage provides recommendations about making commitments for Datadog services where [committed use discounts](https://handbook.vantage.sh/datadog/committed-use-discounts/) are offered. These recommendations are based on your actual usage of Datadog services to assist with making the right commitment.
