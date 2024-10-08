---
id: vql_resource_report
title: VQL for Resource Reports
description: This page walks through the Vantage Query Language, or VQL, for use in Resource Reports.
keywords:
  - VQL
  - Vantage Query Language
  - Terraform
---

# VQL for Resource Reports

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Resource Reports VQL Schema

VQL for Resources Reports comprises two namespaces: `resources` and `tags`, which represent the available [filters](/active_resources#create-a-resource-report) on Resource Reports in the Vantage console. To reference a filter, use the following syntax: `namespace.field` (e.g., `resources.region` or `tags.name`). The following fields are available within these namespaces.

<table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>Namespace</th>
      <th>Field</th>
      <th>VQL Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="8">resources</td>
      <td><code>resources.provider</code></td>
      <td><a href="#providers">Providers example</a></td>
    </tr>
    <tr>
      <td><code>resources.region</code></td>
      <td><a href="#region">Region example</a></td>
    </tr>
    <tr>
      <td><code>resources.account_id</code></td>
      <td><a href="#account">Account example</a></td>
    </tr>
    <tr>
      <td><code>resources.provider_account_id</code></td>
      <td><a href="#billing-account">Billing Account example</a></td>
    </tr>
    <tr>
      <td><code>resources.type</code></td>
      <td><a href="#resource-type">Resource Type example</a></td>
    </tr>
    <tr>
      <td><code>resources.label</code></td>
      <td><a href="#label">Label example</a></td>
    </tr>
    <tr>
      <td><code>resources.uuid</code></td>
      <td><a href="#uuid">UUID (AWS ARN) example</a></td>
    </tr>
    <tr>
      <td><code>resources.metadata</code></td>
      <td><a href="#metadata">Category example</a></td>
    </tr>
    <tr>
      <td rowspan="2" style={{ textAlign: 'center' }}><code>tags</code></td>
      <td><code>name</code></td>
      <td rowspan="2"><ul><li><a href="#tags">Tags name/value example</a></li><li><a href="#untagged">Untagged example</a></li></ul></td>
    </tr>
    <tr>
      <td><code>value</code></td>
    </tr>
  </tbody>
</table>

:::note
Availability of the fields listed above varies among different cloud providers. See the [Resource Reports documentation](/active_resources#resource-report-filters) for a full list of filter fields available per provider. 
:::

### Keywords

VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents.

| Keyword | Description                           | VQL Sample                                                                          | Explanation                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ------- | ------------------------------------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AND`   | Logical AND operator                  | `costs.provider = 'aws' AND costs.service = 'EC2'`                                  | This example filters AWS costs for the EC2 service, where both conditions must be true.                                                                                                                                                                                                                                                                                                                                                                                          |
| `OR`    | Logical OR operator                   | `costs.provider = 'azure' OR costs.provider = 'aws'`                                | This example retrieves costs from either Azure or AWS. At least one condition must be true.                                                                                                                                                                                                                                                                                                                                                                                      |
| `IN`    | Used to compare against an array list | `costs.provider = 'azure' AND costs.account_id IN ('account-1', 'account-2')`       | This example filters based on a list of account IDs, returning data for the specified accounts<br/><br/>You can also use `IN` along with a special syntax for filtering by multiple tags. See [Filter by Multiple Tags](/vql#multiple-tags) for details.                                                                                                                                                                                                                         |
| `LIKE`  | Performs string comparisons           | `costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value LIKE '%prod%'` | This example selects data where the tag value contains `prod`, such as `production-1`. <br /> Note that at this time, `LIKE` is not compatible with `costs.account_id`, `costs.provider_account_id`, `costs.region`, and `costs.service`.                                                                                                                                                                                                                                        |
| `NOT`   | Represents negation                   | `costs.provider = 'aws' AND costs.region NOT IN ('us-east-1', 'us-east-2')`         | This example filters out data from both specified regions, providing all AWS costs _not_ in these regions. Use `NOT IN` to specify a list of single or multiple values. <br/><br/> You can also use the `!=` or `<>` operators for "is not." <br/><br/> `costs.provider = 'aws' AND costs.region != 'us-east-1'`<br/><br/>You can use `NOT LIKE` to perform string comparisons:<br/><br/>`costs.provider = 'gcp' AND tags.name = 'environment' AND tags.value NOT LIKE '%prod%'` |

With these keywords, you can construct complex filter conditions in VQL, providing flexibility and precision when querying and analyzing cloud cost data.

## VQL Examples {#examples}

The following examples cover common use cases for VQL.

### Combining Providers {#providers}

Filter for provider resources associated with either AWS or GCP.

```sql
(resources.provider = 'aws') OR (resources.provider = 'gcp')
```

### Costs from a List of Regions {#region}

Filter for Snowflake costs in two regions. Note that you will need to use the region code, such as `us-east-1`.

```sql
resources.provider = 'aws' AND (resources.region = 'us-east-1' OR resources.region = 'us-west-1')
```

### Costs by Account ID {#account}

Costs for a specific set of resource types and account ID.

```sql
resources.provider = 'gcp' AND (resources.account_id = 'user-proj-1234') AND (resources.type = 'google_compute_disk' OR resources.type = 'google_compute_instance')
```

### Costs by Billing Account {#billing-account}

Costs for a specific billing account.

```sql
resources.provider = 'aws' AND (resources.provider_account_id = '11111111111')
```

### Costs by Resource Type {#resource-type}

Filter costs to see a specific resource type. In the example below, the query is looking for any resource that is NOT an AWS CloudFront Distribution. Resource types are represented like `aws_cloudfront_distribution`. Expand the box below for a list of all available resource types and their VQL equivalents.

```sql
resources.provider = 'aws' AND (resources.type != 'aws_cloudfront_distribution')
```
<details><summary>VQL</summary>
| Provider   | VQL Representation                   | Friendly Name                           |
|------------|--------------------------------------|-----------------------------------------|
| AWS        | aws_batch_job_definition             | Batch Job Definition                    |
| AWS        | aws_mq_broker                        | MQ Broker                               |
| AWS        | aws_cloudfront_distribution          | CloudFront Distribution                 |
| AWS        | aws_cloudtrail                       | CloudTrail                              |
| AWS        | aws_codebuild_project                | CodeBuild Project                       |
| AWS        | aws_codepipeline                     | CodePipeline                            |
| AWS        | aws_config_config_rule               | Config Rule                             |
| AWS        | aws_ecr_repository                   | ECR Repository                          |
| AWS        | aws_ecs_service                      | ECS Service                             |
| AWS        | aws_docdb_cluster_instance           | DocumentDB Cluster Instance             |
| AWS        | aws_route53_zone                     | Route 53 Zone                           |
| AWS        | aws_dynamodb_table                   | DynamoDB Table                          |
| AWS        | aws_ec2_reserved_instance            | EC2 Reserved Instance                   |
| AWS        | aws_eks_cluster                      | EKS Cluster                             |
| AWS        | aws_elasticache_cluster              | ElastiCache Cluster                     |
| AWS        | aws_efs_file_system                  | EFS File System                         |
| AWS        | aws_elasticsearch_domain             | Elasticsearch Domain                    |
| AWS        | aws_lambda_function                  | Lambda Function                         |
| AWS        | aws_glacier_vault                    | Glacier Vault                           |
| AWS        | aws_globalaccelerator_accelerator    | Global Accelerator                      |
| AWS        | aws_glue_job                         | Glue Job                                |
| AWS        | aws_internet_gateway                 | Internet Gateway                        |
| AWS        | aws_eip                              | Elastic IP                              |
| AWS        | aws_msk_cluster                      | MSK Cluster                             |
| AWS        | aws_kms_key                          | KMS Key                                 |
| AWS        | aws_lb                               | Load Balancer                           |
| AWS        | aws_cloudwatch_log_group             | CloudWatch Log Group                    |
| AWS        | aws_mediaconnect_flow                | MediaConnect Flow                       |
| AWS        | aws_mediaconvert_job                 | MediaConvert Job                        |
| AWS        | aws_medialive_channel                | MediaLive Channel                       |
| AWS        | aws_media_package_channel            | MediaPackage Channel                    |
| AWS        | aws_media_package_vod_asset          | MediaPackage VOD Asset                  |
| AWS        | aws_media_store_container            | MediaStore Container                    |
| AWS        | aws_media_tailor_channel             | MediaTailor Channel                     |
| AWS        | aws_media_tailor_playback_configuration | MediaTailor Playback Configuration    |
| AWS        | aws_nat_gateway                      | NAT Gateway                             |
| AWS        | aws_network_interface                | Network Interface                       |
| AWS        | aws_outposts_outpost                 | Outposts Outpost                        |
| AWS        | aws_ec2_managed_prefix_list          | EC2 Managed Prefix List                 |
| AWS        | aws_db_instance                      | RDS Instance                            |
| AWS        | aws_rds_reserved_instance            | RDS Reserved Instance                   |
| AWS        | aws_db_snapshot                      | RDS Snapshot                            |
| AWS        | aws_redshift_cluster                 | Redshift Cluster                        |
| AWS        | aws_route53_resolver_query_log_config | Route 53 Resolver Query Log Config     |
| AWS        | aws_route_table                      | Route Table                             |
| AWS        | aws_s3_bucket                        | S3 Bucket                               |
| AWS        | aws_sagemaker_model                  | SageMaker Model                         |
| AWS        | aws_savings_plan                     | Savings Plan                            |
| AWS        | aws_secretsmanager_secret            | Secrets Manager Secret                  |
| AWS        | aws_sns_topic                        | SNS Topic                               |
| AWS        | aws_sqs_queue                        | SQS Queue                               |
| AWS        | aws_subnet                           | Subnet                                  |
| AWS        | aws_ecs_task_definition              | ECS Task Definition                     |
| AWS        | aws_transfer_server                  | Transfer Server                         |
| AWS        | aws_ec2_transit_gateway              | EC2 Transit Gateway                     |
| AWS        | aws_instance                         | EC2 Instance                            |
| AWS        | aws_instance_snapshot                | EC2 Instance Snapshot                   |
| AWS        | aws_ebs_volume                       | EBS Volume                              |
| AWS        | aws_vpc                              | VPC                                     |
| AWS        | aws_vpc_endpoint                     | VPC Endpoint                            |
| AWS        | aws_flow_log                         | Flow Log                                |
| AWS        | aws_vpc_peering_connection           | VPC Peering Connection                  |
| AWS        | aws_vpn_gateway                      | VPN Gateway                             |
| AWS        | aws_wafv2_web_acl                    | WAFv2 Web ACL                           |
| AWS        | aws_workspaces_workspace             | WorkSpaces Workspace                    |
| Azure      | azurerm_application_gateway          | Application Gateway                     |
| Azure      | azurerm_application_insights         | Application Insights                    |
| Azure      | azurerm_app_service_plan             | App Service Plan                        |
| Azure      | azurerm_firewall                     | Firewall                                |
| Azure      | azurerm_snapshot                     | Snapshot                                |
| Azure      | azurerm_container_registry           | Container Registry                      |
| Azure      | azurerm_cosmosdb_account             | CosmosDB Account                        |
| Azure      | azurerm_databricks_workspace         | Databricks Workspace                    |
| Azure      | azurerm_managed_disk                 | Managed Disk                            |
| Azure      | azurerm_dns_zone                     | DNS Zone                                |
| Azure      | azurerm_sql_elasticpool              | SQL Elastic Pool                        |
| Azure      | azurerm_express_route_circuit        | ExpressRoute Circuit                    |
| Azure      | azurerm_lb                           | Load Balancer                           |
| Azure      | azurerm_log_analytics_workspace      | Log Analytics Workspace                 |
| Azure      | azurerm_logic_app_workflow           | Logic App Workflow                      |
| Azure      | azurerm_kubernetes_cluster           | Kubernetes Cluster                      |
| Azure      | azurerm_nat_gateway                  | NAT Gateway                             |
| Azure      | azurerm_postgresql_flexible_server   | PostgreSQL Flexible Server              |
| Azure      | azurerm_postgresql_server            | PostgreSQL Server                       |
| Azure      | azurerm_powerbi_dedicated_capacity   | Power BI Dedicated Capacity             |
| Azure      | azurerm_private_endpoint             | Private Endpoint                        |
| Azure      | azurerm_public_ip                    | Public IP                               |
| Azure      | azurerm_recovery_services_vault      | Recovery Services Vault                 |
| Azure      | azurerm_redis_cache                  | Redis Cache                             |
| Azure      | azurerm_security_center_pricing      | Security Center Pricing                 |
| Azure      | azurerm_sql_database                 | SQL Database                            |
| Azure      | azurerm_sql_managed_instance         | SQL Managed Instance                    |
| Azure      | azurerm_storage_account              | Storage Account                         |
| Azure      | azurerm_synapse_workspace            | Synapse Workspace                       |
| Azure      | azurerm_virtual_machine              | Virtual Machine                         |
| Azure      | azurerm_virtual_machine_scale_set    | Virtual Machine Scale Set               |
| Azure      | azurerm_virtual_network_gateway      | Virtual Network Gateway                 |
| Google     | google_alloydb_backup                | AlloyDB Backup                          |
| Google     | google_alloydb_cluster               | AlloyDB Cluster                         |
| Google     | google_alloydb_instance              | AlloyDB Instance                        |
| Google     | google_app_engine_service            | App Engine Service                      |
| Google     | google_bigquery_dataset              | BigQuery Dataset                        |
| Google     | google_bigtable_instance             | Bigtable Instance                       |
| Google     | google_compute_disk                  | Compute Disk                            |
| Google     | google_compute_instance              | Compute Instance                        |
| Google     | google_container_cluster             | Container Cluster                       |
| Google     | google_dataflow_job                  | Dataflow Job                            |
| Google     | google_firestore_database            | Firestore Database                      |
| Google     | google_cloudfunctions_function       | Cloud Functions Function                |
| Google     | google_logging_project_bucket_config | Logging Project Bucket Config           |
| Google     | google_redis_instance                | Redis Instance                          |
| Google     | google_cloud_run_service             | Cloud Run Service                       |
| Google     | google_secret_manager_secret         | Secret Manager Secret                   |
| Google     | google_spanner_instance              | Spanner Instance                        |
| Google     | google_sql_database_instance         | SQL Database Instance                   |
| Google     | google_storage_bucket                | Storage Bucket                          |
</details>

### Costs by Label {#label}

Resource costs by specific label.

```sql
resources.provider = 'aws' AND resources.label = '123456'
```

### Costs for Specific ARN {#uuid}

The UUID is the unique identifier for the resource. In the case of AWS resources, this is the ARN. The below example shows a query for resources that contain specific text within the ARN.

```sql
resources.provider = 'aws' AND resources.uuid LIKE '%arn:aws:s3:::my-bucket%'
```

### Resource Metadata Costs {#metadata}

Resource metadata costs require both `provider` and `type` as well as `metadata`.

```sql
resources.provider = 'aws' AND (resources.type = 'aws_cloudfront_distribution' AND resources.metadata->>'domain' = 'vantage.sh')
```

### Filter by Tag {#tags}

Filter resources based on a specific tag, such as `terraform`, with the value `true`, in AWS.

```sql
resources.provider = 'aws' AND (tags.name = 'terraform' AND tags.value = 'true')
```

### Filter for Untagged Resources {#untagged}

On providers that have a **Not Tagged**/**Not Labeled** filter option in the console, you can use the below VQL to see untagged resources. This example looks for untagged resources in a multi-cloud environment.

```sql
resources.provider = 'gcp' AND tags.name = NULL) OR (resources.provider = 'aws' AND tags.name = NULL
```