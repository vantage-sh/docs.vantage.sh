!!! note "Autopilot is in closed early access."
     Autopilot is in closed early access and currently supporting EC2 only. Please contact support@vantage.sh to opt in. 

Autopilot is a managed service for AWS customers that automatically applies Reserved Instances and Savings Plans on your behalf. It workes by regularly evaluating your compute workloads and procuring **no upfront** Reserved Instances and **no upfront Savings Plans** on your behalf to ensure that you're always maximizing your savings from a commitment perspective. Autopilot charges a fee of 5% of the savings found to align interests with you to maximize savings. In the event that your compute workloads decrease, Autopilot will automatically sell out of Reserved Instances to ensure that you're not overcommitted. 

Depending on your workload, Autopilot can reduce your compute costs by up to 68%. 


## What Permissions does Autopilot need?

The full set of IAM permissions for Autopilot will be listed soon. At a high level, Autopilot requires permissions which grant:

* The ability to list and describe existing reserved instances
* The ability to register you as a reserved instance marketplace seller. 
* The ability to contact support to increase certain AWS limits (the number of reserved instances)
* The ability to buy and sell Reserved Instances.

## How Does Autopilot work?

Autopilot works by ingesting and analyzing Cost and Usage Report data. Vantage will structure your compute workloads by instance hour of each respective compute class. A compute class is defined as EC2 instance usage structured by instance type (i.e. t3.xlarge, r5.large, etc), region (us-east-1, us-west-2, etc) and platform (Linux, Windows, etc) tracked hourly.

After structure compute data for each compute class, Autopilot will look at existing coverage of existing AWS Savings Plans and Reserved Instances and determine what remaining on-demand compute usage is available to optimize on a per compute class basis. Where Autopilot believes it can find you savings, it will begin purchasing corresponding reserved instances. Where Autopilot sees that you're overcommitted on a particular compute class, it will look to sell out of corresponding reserved instances. 

## I have existing AWS Savings Plans and Reserved Instances - will Autopilot account for these?

Yes. Autopilot will account for your existing AWS Savings Plans and Reserved Instances. You will not be charged for existing AWS Savings Plans or Reserved Instances. Even if you feel that you have good coverage with existing AWS Savings Plans and Reserved Instances, you should consider enabling Autopilot as an insurance policy in the event that they expire. Autopilot will automatically detect that your coverage is slipping if anything were to expire and purchase additional Reserved Instances to account for things accordingly. 