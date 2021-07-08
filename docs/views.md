Vantage will look for active resources in your AWS account and provide you with a view for each AWS Service as often as you sync your AWS account. Active Resources are meant to give you a simple way for seeing what active resources are present in your AWS account. Note that we can only show active resources for accounts for which there is a connected IAM Role -- but you can connect as many member accounts as you'd like to see resources present from them. 

## Active Resource Pricing

Vantage maintains an ever-growing and always-updating AWS pricing database. As Vantage finds active resources, it will find the corresponding rate for the resource to show you an approximate run-rate cost. For things like EC2 Instances, we will profile for the instance type being used, what region its in and apply the proper rate for its lifecycle (on-demand, spot, etc). We also show an approximate monthly run-rate which extrapolates this hourly rate out for the given month. 

Actively being worked on in our roadmap is also showing actual accrued costs per AWS Resource so not only will you see a rough run-rate but you'll be able to see actual accrued costs per AWS resource soon as well. 

## Active Resources and Syncing

Vantage periodically [syncs](/syncing) your account and you may also manually issue a sync from the top navigation bar. Whenever a sync occurs, Vantage will automatically determine what Active Resources are present globally across all [supported services](/supported_services) and represent them accordingly in the Vantage console. If you make an immediate change to your infrastructure and want to see its impact in Vantage simply issue a sync manually and the changes will be picked up accordingly. 


## Multiple AWS Account Support

As you add multiple roles for supporting active resources from multiple AWS accounts, Vantage will display them accordingly in Active Resource views. As resources are imported across multiple AWS accounts, Vantage will also show which AWS account the resources are in.

