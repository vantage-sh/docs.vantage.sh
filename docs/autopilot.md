---
id: autopilot
title: Autopilot for AWS Savings Plans
description: This page provides details on Autopilot for AWS Savings Plans and how to get started.
keywords:
  - AWS
  - Autopilot
  - Autopilot for AWS Savings Plans
---

# Autopilot for AWS Savings Plans

Autopilot is a managed service for AWS customers that automatically applies Reserved Instances on your behalf. It works by regularly evaluating your compute workloads and procuring **no upfront** Reserved Instances on your behalf to ensure that you're always maximizing your savings from a commitment perspective. Autopilot charges a fee of 5% of the savings found to align interests with you to maximize savings. There is no fee for Autopilot recommendations on RDS, ElastiCache, Redshift and OpenSearch.

In the event that your compute workloads decrease, Autopilot will automatically list to sell out of Reserved Instances on the EC2 Reserved Instance Marketplace to ensure that you're not overcommitted. Please note that there is a minimum 30 day hold time imposed by AWS for all reserved instances so you should only enable Autopilot if you don't expect material downward changes in your infrastructure within 30 days. You can further control what actions Autopilot takes with [Autopilot Controls](#autopilot-controls).

Depending on your mix of EC2 instances used, Autopilot can reduce your compute costs by over 60% and make recommendations on RDS, ElastiCache, Redshift, and OpenSearch which reduce your costs by up to 72%.

:::note AISPL Exclusion
If your account is registered with Amazon Internet Services Private Limited (AISPL), you will be unable to use Autopilot due to AWS Marketplace limitations. [Per AWS](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html), "Amazon Internet Services Private Limited (AISPL) customers can't sell Reserved Instances in the Reserved Instance Marketplace even if they have a US bank account."
:::

## Autopilot Pricing

Autopilot only charges 5% of the _savings found_. This means that in the event that Autopilot doesn't find you any savings, then its free to you to use.

As example in the event that your EC2 bill is $10,000 per month and Autopilot buys you enough reserved instances to save you $3,000 per month, the corresponding Autopilot fee will be $150 so your net savings is $2,850 per month.

:::info
You won't be charged for existing Reserved Instances or Savings Plans.

Autopilot will respect your existing Savings Plans and Reserved Instances and you will not pay any Autopilot fees for existing commitments.
:::

For RDS, ElastiCache, Redshift and OpenSearch Autopilot uses an approval-based workflow which calculates how many reserved instances to buy and links you to the AWS console to make the purchase. There is **no fee** for Autopilot recommendations on RDS, ElastiCache, Redshift and OpenSearch.

## Autopilot Permissions

The full set of IAM permissions for Autopilot are listed below. To summarize the scope of the permissions needed for Autopilot to run, we require the ability to purchase reserved instances for EC2, ElasticSearch, Redshift and RDS. We also require permission to view service quotas to understand what commitment levels we can make based off of the limits in your account.

Autopilot can not and will never attempt to augment production workloads, read from databases or access network data. Autopilot purely is making financial commitments on your behalf to help save you money.

```
{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Action": [
                "ec2:AcceptReservedInstancesExchangeQuote",
                "ec2:CancelReservedInstancesListing",
                "ec2:CreateReservedInstancesListing",
                "ec2:DeleteQueuedReservedInstances",
                "ec2:ModifyReservedInstances",
                "ec2:PurchaseReservedInstancesOffering",
                "rds:PurchaseReservedDBInstancesOffering",
                "elasticache:PurchaseReservedCacheNodesOffering",
                "es:PurchaseReservedInstanceOffering",
                "redshift:PurchaseReservedNodeOffering",
                "redshift:AcceptReservedNodeExchange",
                "redshift:GetReservedNodeExchangeConfigurationOptions",
                "redshift:GetReservedNodeExchangeOfferings",
                "servicequotas:Get*",
                "servicequotas:List*",
                "servicequotas:RequestServiceQuotaIncrease",
                "support:*"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}
```

## How Autopilot Works

Autopilot works by ingesting and analyzing Cost and Usage Report data. Vantage will structure your compute workloads by instance hour of each respective compute class. A compute class is defined as EC2 instance usage structured by instance type (i.e. t3.xlarge, r5.large, etc), region (us-east-1, us-west-2, etc) and platform (Linux, Windows, etc) tracked hourly.

After structuring compute data for each compute class, Autopilot will look at existing coverage of existing AWS Savings Plans and Reserved Instances and determine what remaining on-demand compute usage is available to optimize on a per compute class basis. Where Autopilot believes it can find you savings, it will begin purchasing corresponding reserved instances. Where Autopilot sees that you're overcommitted on a particular compute class, it will look to sell out of corresponding reserved instances. Autopilot will only ever sell out of reserved instances Autopilot has purchased and will not attempt to sell out of reserved instances that you've already purchased in your account.

For each compute category, Autopilot is also looking at "peaks and valleys" of usage to ensure it avoids overcommitment. In some cases where there are very spikey workloads, a target coverage rates for reserved instances may be very low to achieve cost savings without the concern of overcommitment. For more normalized workloads, a target coverage rate will be on the higher side as there less concern over overcommitment.

### I have existing AWS Savings Plans and Reserved Instances - will Autopilot account for these?

Yes. Autopilot will account for your existing AWS Savings Plans and Reserved Instances. You will not be charged for existing AWS Savings Plans or Reserved Instances. Even if you feel that you have good coverage with existing AWS Savings Plans and Reserved Instances, you should consider enabling Autopilot as an insurance policy in the event that they expire. Autopilot will automatically detect that your coverage is slipping if anything were to expire and purchase additional Reserved Instances to account for things accordingly.

### How will Autopilot affect my AWS bill?

Because Autopilot purchases _only_ **no-upfront** commitments, there will not be any purchase or transaction that is reflected on your bill when the RIs are purchased. Additionally, no funds will be exchanged when Autopilot sells the commitments. This means that despite the AWS requirement to add a bank account for selling in the RI marketplace, no money is moving in and out of the account. The only net impact on your bill is a reduction in compute hourly rates, assuming Autopilot has found savings and purchased RIs.

### How do I register as a seller in the AWS Reserved Instance Marketplace?

Autopilot requires that you register as a seller in the AWS reserved instance marketplace before any actions are taken. This is what enables Autopilot to sell reserved instances you are no longer using. You can follow these <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html#ri-market-seller-profile">instructions</a> to complete the seller registration process. As part of this process filling out tax information is optional, however Autopilot requires you complete this step in order to ensure your reserved instances can be sold in the marketplace.

### Are there any timelines I need to be aware of?

AWS imposes a minimum 30-day hold time for all Reserved Instances before you can list them for sale on the AWS EC2 Reserved Instance marketplace. As a result, you shouldn't enable Autopilot if you expect significant _downward_ changes in your infrastructure within the first 30 days of enabling Autopilot as they can't technically be listed for sale. If you expect _growth_, there are no concerns around this limitation.

### Why did Autopilot purchase instance sizes that are different from what I am using?

Autopilot purchases RIs in denormalized units that are applicable to any size of instance in the same family, which you can see if you reference the [AWS documentation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/apply_ri.html). In other words, if you change sizes within the same instance family, the reservations still apply!

## Autopilot Controls {#autopilot-controls}


You can see what actions Autopilot may take or is taking under [Settings](https://console.vantage.sh/financial_planning/autopilot/settings) in the Autopilot page in the console. Here, you can control Autopilot on a per-compute category basis, disabling it and enabling it as needed.

A compute category is a Vantage primitive that is a representation of your normalized EC2 workloads that consists of the following:

- An instance type family such as "m5a".
- A region.
- A platform (Windows, Linux, RHEL, Windows SQL Server, etc..)

Each compute category has usage tracked hourly and grouped by the following compute types. Note that Windows, SUSE and RedHat Reserved Instances are targeted at a specific instance type, e.g. m5.2xlarge, instead of the entire family.

- Existing customer usage covered by existing Reserved Instances
- Existing customer usage covered by existing Savings Plans
- Existing customer usage covered by credits
- On-demand usage

Each compute category will have a target commitment level shown with the ability to disable the category completely. If you disable a compute category after Autopilot has already made purchases for it, Autopilot will immediately begin listing the reserved instances for sale.

Compute categories can be saved prior to enabling Autopilot and adjusted after enabling Autopilot as well. For example, you may decide initially that you do not want Autopilot to manage purchasing and selling RIs for a new service. After the service sees increasing usage, you may then decide to turn on Autopilot for it.

Autopilot Controls can be changed as often as you’d like. That being said, we generally recommend to do one round of adjusting settings prior to enabling Autopilot and then adjusting things as you see fit.

Once a setting is changed, the changes take effect between 24 and 48 hours. Autopilot purposefully will impose a minimum 24 hour delay before making any changes from Autopilot controls. Please note that because of a 30 day minimum holding period made by AWS with reserved instances, there may be certain cases where even adjusting controls could take some time to be applied.

### Autopilot Controls Graphs {#autopilot-controls-graphs}

The Y-axis for Autopilot controls graphs can represent different things depending on the service you're looking at. There are two classes of units represented on the Y-axis that are listed below with their corresponding explanations:

- For **EC2** and **RDS**, the Y-axis unit is expressed in normalized instance units per hour for each compute category. The rationale for this is that EC2 and RDS have the benefit of flexible instance families where a reserved instance in the smallest possible unit can add up to have multiple cover a single larger unit in that family. As an example, if you have a single m5.large and an m5.2xlarge EC2 instance, a single reserved instance unit can cover one m5.large or two units can cover a m5.2large. In general, we recommend covering the category with the smallest unit possible so you as an organization have coverage from an RI perspective if you scale down in instance family size. Whereas if you bought a m5.2xlarge reserved instance unit, that wouldn't cover any corresponding smaller m5.large EC2 instances. So you have the benefit to scale down in your instance type sizes per family without the risk of losing coverage.

- For **Redshift**, **OpenSearch**, and **ElastiCache**, the Y-axis is expressed in number of instances. Unlike the above example, there isn't flexibility on these classes so this is a more straight-forward scenario where the units represented are the exact number of instances you should procure.
