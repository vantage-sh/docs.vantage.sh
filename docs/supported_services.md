# AWS Services & Regions

## Supported Services

Vantage will show 100% of your organization's accrued costs across all services. We also offer per-resource pricing on for the following services by using custom logic to query APIs for each individual AWS service. While we support per-resource pricing for the most popular services we do not offer support for all AWS services by default. That being said: if you have an AWS service you'd like to be supported we can typically add support for most AWS services in under a week. 

To request new service support on Vantage, please email support@vantage.sh with the subject line of "New AWS Service Support" and please include as much information as you can about what information you'd like to see. 

Below is a list of currently supported AWS services for Active Resources:

| Service      | Description |
| ----------- | ----------- |
| CloudWatch | Vantage supports CloudWatch Log Groups and its corresponding storage pricing.           |
| CloudFront    | Vantage supports CloudFront and showing accrued costs per CloudFront distribution.           |
| CodePipeline    | Vantage supports CodePipeline.           |
| CodeBuild    | Vantage supports CodeBuild.           |
| DynamoDB    | Vantage supports DynamoDB tables.           |
| EBS   | Vantage supports all EBS volume types and corresponding pricing.           |
| EC2      | Vantage supports all EC2 instance types, all on-demand and spot pricing and supporting CloudWatch metrics & logs. Vantage also imports all underlying EC2 images where possible.      |
| ECS  | Vantage supports ECS services and its corresponding pricing.           |
| EFS  | Vantage supports EFS and its corresponding pricing.           |
| ECR   | Vantage supports ECR and its corresponding pricing.           |
| ELB | Vantage supports ELB and its corresponding pricing.            |
| Elasticache   | Vantage supports all Elasticache clusters.           |
| EKS  | Vantage supports EKS and its corresponding pricing.           |
| Elasticsearch Service   | Vantage supports Elasticsearch and its corresponding pricing.           |
| Fargate   | Vantage supports Fargate services and its corresponding pricing.           |
| Glacier   | Vantage supports Glacier Vaults its corresponding pricing.           |
| Global Accelerator   | Vantage supports Glacier Accelator its corresponding pricing.           |
| Glue      | Vantage supports view Glue Job costs.           | 
| IAM   | Vantage supports IAM Groups, IAM Users and IAM Roles.           |
| Lambda   | Vantage supports Lambda and is currently bolstering more formal support for it.           |
| KMS | Vantage supports showing accrued costs for KMS Keys.           |
| Amazon Managed Streaming for Apache Kafka (Amazon MSK) | Vantage supports MSK and its corresponding pricing            |
| MediaLive | Vantage supports MediaLive channels, MediaConvert Jobs, MediaConnect Flow, Mediapackage channels, mediastore containers, mediatailor channels and their corresponding pricing.  |
| MQ | Vantage supports MQ Brokers and their corresponding pricing.  |
| Networking primitives   | Vantage supports networking primitives like Elastic IPs, VPCs, Subnets, Availability Zones and Security Groups.           |
| Redshift   | Vantage supports Redshift and its corresponding pricing.            |
| Route53   | Vantage supports Route 53 Hosted Zones and its corresponding pricing. We also have write access for Route 53 Record Sets.           |
| RDS   | Vantage supports RDS and corresponding pricing.           |
| S3   | Vantage supports S3 Buckets and corresponding bucket pricing. We provide daily storage and object count figures. Vantage shows total costs per S3 Bucket as well as summaries by storage classes. Vantage will also provide some calculations for you to determine savings impact of enabling S3 Intelligent Tiering. We do not have permission to read from your S3 Buckets.          |
| Secrets Manager   | Vantage supports AWS Secrets Manager and its corresponding pricing. We do not have permissions to read your secrets.           |
| SNS | Vantage supports showing accrued costs for SNS Topics.           |
| SQS | Vantage supports showing accrued costs for SQS Queue.           |
| Workspaces | Vantage supports AWS Workspaces and its corresponding pricing.           |


## Supported Regions

Vantage supports the following AWS regions. In the event your region isn't listed and you'd like it added, please contact Vantage support at support@vantage.sh and we are happy to help.

| Region | Name | 
| ----------- | ----------- |
| us-east-1 | US East, North Virginia |
| us-east-2 | US East, Ohio |
| us-west-1 | US West, Northern California |
| us-west-2 | US West, Oregon |
| ap-east-1 | Asia Pacific, Hong Kong |
| ap-south-1 | Asia Pacific, Mumbai |
| ap-northeast-1 | Asia Pacific, Tokyo |
| ap-northeast-2 | Asia Pacific, Seoul |
| ap-southeast-1 | Asia Pacific, Singapore |
| ap-southeast-2 | Asia Pacific, Sydney |
| ca-central-1 | Canada, Central |
| eu-central-1 | Europe, Frankfurt |
| eu-west-1 | Europe, Ireland |
| eu-west-2 | Europe, London |
| eu-west-3 | Europe, Paris |
| eu-south-1 | Europe, Milan |
| eu-north-1 | Europe, Stockholm |
| me-south-1 | Middle East, Bahrain |
| sa-east-1 | South America, Sao Paulo |
| af-south-1 | Africa, Cape Town |
| us-gov-west-1| GovCloud US |
