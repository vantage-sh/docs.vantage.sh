Autopilot is a managed service for AWS customers that automatically applies Reserved Instances on your behalf. It workes by regularly evaluating your compute workloads and procuring **no upfront** Reserved Instances on your behalf to ensure that you're always maximizing your savings from a commitment perspective. Autopilot charges a fee of 5% of the savings found to align interests with you to maximize savings. In the event that your compute workloads decrease, Autopilot will automatically list to sell out of Reserved Instances on the EC2 Reserved Instance Marketplace to ensure that you're not overcommitted. 

Depending on your mix of EC2 instances used, Autopilot can reduce your compute costs by over 60%.

## Autopilot Pricing

Autopilot only charges 5% of the _savings found_. This means that in the event that Autopilot doesn't find you any savings, then its free to you to use. 

As example in the event that your EC2 bill is $10,000 per month and Autopilot buys you enough reserved instances to save you $3,000 per month, the corresponding Autopilot fee will be $150 so your net savings is $2,850 per month. 


!!! contribute "Don't worry: You won't be charged for existing Reserved Instances or Savings Plans."
     Autopilot will respect your existing Savings Plans and Reserved Instances and you won't pay any Autopilot fees for existing commitments. 


## What Permissions does Autopilot need?

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
                "servicequotas:List*"
            ],
            "Resource": "*",
            "Effect": "Allow"
        }
    ]
}
```


## How Does Autopilot work?

Autopilot works by ingesting and analyzing Cost and Usage Report data. Vantage will structure your compute workloads by instance hour of each respective compute class. A compute class is defined as EC2 instance usage structured by instance type (i.e. t3.xlarge, r5.large, etc), region (us-east-1, us-west-2, etc) and platform (Linux, Windows, etc) tracked hourly.

After structuring compute data for each compute class, Autopilot will look at existing coverage of existing AWS Savings Plans and Reserved Instances and determine what remaining on-demand compute usage is available to optimize on a per compute class basis. Where Autopilot believes it can find you savings, it will begin purchasing corresponding reserved instances. Where Autopilot sees that you're overcommitted on a particular compute class, it will look to sell out of corresponding reserved instances. Autopilot will only ever sell out of reserved instances Autopilot has purcahsed and will not attempt to sell out of reserved instances that you've already purchased in your account.  

For each compute category, Autopilot is also looking at "peaks and valleys" of usage to ensure it avoids overcommitment. In some cases where there are very spikey workloads, a target coverage rates for reserved instances may be very low to achieve cost savings without the concern of overcommitment. For more normalized workloads, a target coverage rate will be on the higher side as there less concern over overcommitment. 

## I have existing AWS Savings Plans and Reserved Instances - will Autopilot account for these?

Yes. Autopilot will account for your existing AWS Savings Plans and Reserved Instances. You will not be charged for existing AWS Savings Plans or Reserved Instances. Even if you feel that you have good coverage with existing AWS Savings Plans and Reserved Instances, you should consider enabling Autopilot as an insurance policy in the event that they expire. Autopilot will automatically detect that your coverage is slipping if anything were to expire and purchase additional Reserved Instances to account for things accordingly. 