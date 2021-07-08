# Setup


## Connecting Your AWS Account

Vantage understands security concerns and aims to provide as secure of a connection as possible with your AWS accounts. Vantage uses a mechanism called a "Cross Account IAM Role" to interact with services in your AWS account. AWS has [publicly documented](https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/) this method and officially recommends it as the preferred method of doing any cross account interactions on AWS. Numerous internal AWS services and systems also leverage this method. 

This means that Vantage **never** needs access credentials, account logins or passwords. 

Note that everyone who works at Vantage has previously worked in public cloud infrastructure including companies like AWS, DigitalOcean, Github, Akamai and Cloudflare and we are taking best practices learned at those companies into consideration when building Vantage. 


### Read Only by Default

When you create a Cross Account IAM Role using the provided CloudFormation template you are giving Vantage various [permissions](https://docs.vantage.sh/permissions/). All of the permissions by default are ReadOnly. The list of permissions was created by using the official AWS ReadOnly policy and removing some of the permissions AWS includes in that list in order to prevent Vantage from seeing information like reading from S3 Buckets and reading from databases.

Vantage only collects metadata about your infrastructure and never even attempts to read sensitive information from the underlying services. Our CloudFormation template is public and you may audit the list of permissions [here](https://vantage-public.s3.amazonaws.com/x-account-role-create-1624992638.json). 


### Opting into Write Actions

Vantage currently supports a limited subset of write, update and delete actions. When you attempt to perform these actions with Vantage, Vantage will determine what IAM permissions it needs to complete those actions and request them accordingly. It will always be at your discretion to opt into these actions. You may also choose to never use Vantage for write actions. 

### Connecting Multiple AWS Accounts

Vantage allows you to connect multiple AWS accounts. We advise that you connect your master AWS account first. By default, we require you to start with one AWS account and ensure it properly connected. Upon connecting a master AWS account, Vantage will profile for all member accounts present in the organization. Vantage will be able to show you accrued costs from all member accounts in the organization as well as active resources that are present in that _master AWS account_.

In the event that you have multiple member accounts and want to view Active Resources present in those accounts, Vantage will offer you the ability to run something called a CloudFormation StackSet that will create one role per AWS member account. You're also welcome to skip this step and add/remove AWS accounts from your [account settings](https://console.vantage.sh/settings/organization/workspaces) whenever you see fit. 







