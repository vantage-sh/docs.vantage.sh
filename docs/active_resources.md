# Active Resources

Whenever you connect a Cross Account IAM Role for AWS integrations, Vantage will begin profiling via List/Describe service APIs for active resources within your AWS account. This will provide you with an "active resource" inventory that allows you to see all running resources within your AWS account, their run-rates and accrued costs. Below is a list of what a full inventory page looks like for Active Resources:

![Example Active Resource Inventory](/img/active_resources_inventory.png)

You may click into any service above to see a full list of resources for that specific service. For example, this is what a list of Cloudfront Distributions looks like in the Active Resource Inventory:

![Example Service Active Resource Inventory](/img/active_resources_cf.png)

## Resources across multiple AWS Accounts

Vantage is only able to show you active resources for which there is an IAM Role created. Typically one point of confusion is that an organization with a root/management account will have an IAM Role but you may think that Vantage is missing resources from various member accounts. In order to see active resources from within each member account, you'll simply need to create an IAM role for each member account. As you create IAM Roles for each member account, the resources will automatically be populated from those member accounts in the active resource inventory.
