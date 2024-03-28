---
id: aws_supported_services
title: AWS Services & Regions
description: This page includes a list of supported services and regions for the AWS Vantage integration.
keywords:
  - AWS
  - AWS supported services
  - AWS supported regions
---

# AWS Services & Regions

## Supported Services

Vantage will show 100% of your organization's accrued costs across all services. We also offer per-resource pricing for the following services using custom logic to query APIs for each individual AWS service. While we support per-resource pricing for the most popular services, we do not offer support for all AWS services, by default. If you have an AWS service you'd like to be supported, we can typically add support for most AWS services in under a week.

:::info
To request new service support on Vantage, please email [support@vantage.sh](mailto:support@vantage.sh) with the subject line of _New AWS Service Support_. Include as much information as you can about the data you'd like to see.
:::

Below is a list of currently supported AWS services for Active Resources:

| Service                                                | Description                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CloudWatch                                             | Vantage supports CloudWatch Log Groups and its corresponding storage pricing.                                                                                                                                                                                                                                                                                                 |
| CloudFront                                             | Vantage supports CloudFront and showing accrued costs per CloudFront distribution.                                                                                                                                                                                                                                                                                            |
| CloudTrail                                             | Vantage supports CloudTrail.                                                                                                                                                                                                                                                                                                                                                  |
| CodePipeline                                           | Vantage supports CodePipeline.                                                                                                                                                                                                                                                                                                                                                |
| CodeBuild                                              | Vantage supports CodeBuild.                                                                                                                                                                                                                                                                                                                                                   |
| Config                                                 | Vantage supports Config rules.                                                                                                                                                                                                                                                                                                                                                |
| DynamoDB                                               | Vantage supports DynamoDB tables.                                                                                                                                                                                                                                                                                                                                             |
| EBS                                                    | Vantage supports all EBS volume types and corresponding pricing.                                                                                                                                                                                                                                                                                                              |
| EC2                                                    | Vantage supports all EC2 instance types, all on-demand and spot pricing as well as supporting CloudWatch metrics and logs. Vantage also imports all underlying EC2 images where possible.                                                                                                                                                                                     |
| ECS                                                    | Vantage supports ECS services and its corresponding pricing.                                                                                                                                                                                                                                                                                                                  |
| EFS                                                    | Vantage supports EFS and its corresponding pricing.                                                                                                                                                                                                                                                                                                                           |
| ECR                                                    | Vantage supports ECR and its corresponding pricing.                                                                                                                                                                                                                                                                                                                           |
| ELB                                                    | Vantage supports ELB and its corresponding pricing.                                                                                                                                                                                                                                                                                                                           |
| ElastiCache                                            | Vantage supports all ElastiCache clusters.                                                                                                                                                                                                                                                                                                                                    |
| EKS                                                    | Vantage supports EKS and its corresponding pricing.                                                                                                                                                                                                                                                                                                                           |
| Elasticsearch Service                                  | Vantage supports Elasticsearch and its corresponding pricing.                                                                                                                                                                                                                                                                                                                 |
| Fargate                                                | Vantage supports Fargate services and its corresponding pricing.                                                                                                                                                                                                                                                                                                              |
| Glacier                                                | Vantage supports Glacier vaults its corresponding pricing.                                                                                                                                                                                                                                                                                                                    |
| Global Accelerator                                     | Vantage supports Global Accelerator and its corresponding pricing.                                                                                                                                                                                                                                                                                                            |
| Glue                                                   | Vantage supports view Glue job costs.                                                                                                                                                                                                                                                                                                                                         |
| IAM                                                    | Vantage supports IAM groups, IAM users, and IAM roles.                                                                                                                                                                                                                                                                                                                        |
| Lambda                                                 | Vantage supports Lambda.                                                                                                                                                                                                                                                                                                                                                      |
| KMS                                                    | Vantage supports showing accrued costs for KMS keys.                                                                                                                                                                                                                                                                                                                          |
| Amazon Managed Streaming for Apache Kafka (Amazon MSK) | Vantage supports MSK and its corresponding pricing.                                                                                                                                                                                                                                                                                                                           |
| MediaLive                                              | Vantage supports MediaLive channels, MediaConvert jobs, MediaConnect flow, MediaPackage channels, MediaStore containers, MediaTailor channels, and their corresponding pricing.                                                                                                                                                                                               |
| MQ                                                     | Vantage supports MQ brokers and their corresponding pricing.                                                                                                                                                                                                                                                                                                                  |
| Networking primitives                                  | Vantage supports networking primitives, like elastic IPs, VPCs, subnets, Availability Zones, and security groups.                                                                                                                                                                                                                                                             |
| Redshift                                               | Vantage supports Redshift and its corresponding pricing.                                                                                                                                                                                                                                                                                                                      |
| Route53                                                | Vantage supports Route 53 Hosted Zones and its corresponding pricing. We also have write access for Route 53 Record Sets.                                                                                                                                                                                                                                                     |
| RDS                                                    | Vantage supports RDS and corresponding pricing.                                                                                                                                                                                                                                                                                                                               |
| S3                                                     | Vantage supports S3 buckets and corresponding bucket pricing. We provide daily storage and object count figures. Vantage shows total costs per S3 bucket as well as summaries by storage classes. Vantage will also provide some calculations for you to determine savings impact of enabling S3 Intelligent-Tiering. We do not have permission to read from your S3 buckets. |
| Secrets Manager                                        | Vantage supports AWS Secrets Manager and its corresponding pricing. We do not have permissions to read your secrets.                                                                                                                                                                                                                                                          |
| SNS                                                    | Vantage supports showing accrued costs for SNS Topics.                                                                                                                                                                                                                                                                                                                        |
| SQS                                                    | Vantage supports showing accrued costs for SQS queues.                                                                                                                                                                                                                                                                                                                        |
| Workspaces                                             | Vantage supports Workspaces and its corresponding pricing.                                                                                                                                                                                                                                                                                                                    |

## Supported Regions

Vantage can sync resources from all AWS regions with external connectivity.