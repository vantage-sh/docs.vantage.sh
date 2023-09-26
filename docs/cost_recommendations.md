# Cost Recommendations

After connecting your infrastructure to Vantage, the system will profile your account for [cost recommendations](https://console.vantage.sh/recommendations) which you can implement to lower your bill. These recommendations are currently available for AWS, Azure, and Datadog.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="100%" src="/img/cost-recommendations-screen.png" />
</div>

## Types of Recommendations

Which recommendations you see depends on what services and resources are running in your account. In general, there are three types of recommendations:

- Custom built recommendations implemented by Vantage engineers
- Cross provider recommendations where a service from another provider could be used
- Cloud provider recommendations which are gathered from the connected provider and further enriched

## Viewing Recommendations during a Trial

The specific recommendations are blurred out during your trial, although the total amount of potential savings and percentage impact to your bill is shown. After subscribing to Vantage, these recommendations are shown in full. As you make changes to your infrastructure they are automatically updated. Recommendations are refreshed once a day.

At any point you may archive a recommendation and it will be shown in the archive tab.

## Provider Specific Recommendations

Which recommendations are available on which providers is generally a function of the granularity of data exposed by the provider. Notes on AWS, Azure, and Datadog follow.

### AWS

- Savings Plans: Vantage will look at your AWS infrastructure on a weekly basis and provide Savings Plans recommendations tailored to your actual usage of EC2, Fargate and Lambda.
- Reserved Instances: Vantage will recommend reserved instances for services like RDS, Elasticache, ElasticSearch and more with specific reserved instances to purchase.
- Stranded Resources: Vantage will look for stranded resources such as EBS Volumes, IP addresses and more to ensure you've cleaned up everything you're not using.
- Storage Optimizations: Vantage will look at EBS Volumes you're using to provide optimization recommendations as well as S3 object type usage to recommend things like changing EBS volumes or enabling S3 Intelligent Tiering.
- Networking Optimizations: Especially for CloudFront and S3.
- Lifecycle Policies: Services which can auto-delete data to reduce costs will be profiled and expected savings found.

### Azure

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="70%" src="/img/azure-cost-recs.png" />
</div>

- Compute Reserved Instances
- Compute Unattached Virtual Hard Disks (Disks which have not been attached to a VM in the last 30 days)

### Datadog

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Filtering Cost Reports" width="70%" src="/img/datadog-cost-recs.png" />
</div>

For Datadog we provide recommendations for making commitments for Datadog services where [committed use discounts](https://handbook.vantage.sh/datadog/committed-use-discounts/) are offered. These recommendations are based on your actual usage of Datadog services to assist with making the right commitment.
