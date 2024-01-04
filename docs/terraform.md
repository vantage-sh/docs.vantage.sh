---
id: terraform
title: Terraform Provider
description: Use the Vantage provider for Terraform as part of your FinOps as Code toolkit. Create Terraform cost reporting resources.
keywords:
  - Terraform
---

# Terraform Provider

Vantage is an official HashiCorp partner and offers a Terraform _module_ for getting up and running with Vantage using Infrastructure as Code (IaC). Vantage also offers a Terraform _provider_ with a number of _resources_.

- **Vantage Terraform Integrations module for AWS**: The Vantage [Terraform Integrations module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) is available for registered users, across all Vantage tiers, to create the primitives needed to broker a connection with AWS. With the module, you can create a Cross-Account IAM Role as well as a Cost and Usage Report (CUR).
- **Vantage Terraform provider**: The [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs) comprises a number of Vantage resources you can create, such as Cost Reports, Dashboards, etc. The Terraform provider makes it possible to fully automate and manage Vantage from within your existing Terraform codebase. Companies with IaC practices can set up, create, and sync their cost reporting structure with Vantage.


## Vantage Terraform Integrations Module for AWS {#integrations-module}

Use the Vantage Integrations module to link your AWS and Vantage accounts. Organizations can leverage the module to integrate thousands of AWS accounts with Vantage. To get set up with this module, see the additional documentation on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

:::note
For root AWS accounts, you will need to provision a CUR bucket using the `cur_bucket_name` variable. For subaccounts, you will need to link access, but you won't need to configure the CUR bucket.
:::

The below example shows how to add a member account _without_ a CUR integration. As a result, an IAM Role is created, which Vantage can assume to ingest the cost and resource metadata that's displayed within the Vantage console. See the [Terraform documentation](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) for more details.

```bash
provider "aws" {
  region = "us-east-1"
  assume_role {
    role_arn = "arn:aws:iam::123456789012:role/admin-:ew
    role"
  }
}

module "vantage-integration" {
  source  = "vantage-sh/vantage-integration/aws"
}
```

## Vantage Resources

Using the Terraform provider, you can automate Vantage resources, such as Cost Reports, via the [Vantage Write API](https://vantage.readme.io/v2.0/reference/createcostreport)—or the backbone of the provider.

With the [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs), you can create the following resources:

| Resource     | Terraform Resource Name | Documentation                                                                                                       |
| ------------ | ----------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Cost Report  | `vantage_cost_report`   | [View documentation](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report)  |
| Dashboard    | `vantage_dashboard`     | [View documentation](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/dashboard)    |
| Folder       | `vantage_folder`        | [View documentation](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/folder)       |
| Saved Filter | `vantage_saved_filter`  | [View documentation](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/saved_filter) |

:::caution Important
The ability to create, edit, and destroy resources is keyed to the permissions of the user associated with the API token. For Enterprise customers, role-based access controls also affect
these actions. Review the documentation on [RBAC for further information](/rbac).
:::


By using these Terraform resources, engineering teams automate cost reporting in Vantage. Below are some example use cases:

- Build Cost Reports for hundreds of teams stored in another source of truth (e.g., database or GitHub)
- Update filters as resource names or tags change
- Add new reports to team dashboards when new services are deployed

## Terraform Examples

### Create a Cost Report

The following example shows how to create a Cost Report for AWS using Terraform. 

1. First, declare the Vantage provider.
    ```bash
    terraform {
      required_providers {
        vantage = {
          source = "vantage-sh/vantage"
        }
      }
    }

    provider "vantage" {
      api_token = var.api_token
    }
    ```

2. Create the `vantage_folder` resource, with "AWS Costs" as the title.
    ```bash
    resource "vantage_folder" "aws" {
    title = "AWS Costs"
    }
    ```

3. Create the `vantage_cost_report` resource using the token output from the `vantage_folder` resource. The Cost Report will be stored in the newly created AWS folder. The Cost Report's title is "AWS Costs." In addition, the `vantage_saved_filter` resource includes a `filter` parameter that uses [Vantage Query Language (VQL)](/vql), a SQL-like language for querying cloud cost and usage data. Here, the filter is set to show only AWS costs.
  
    ```bash
    resource "vantage_cost_report" "aws" {
      folder_token = vantage_folder.aws.token
      filter       = "costs.provider = 'aws'"
      title        = "AWS Costs"
    }
    ```

### Using Multiple Vantage Terraform Resources

In the following example, we will create a filter, report, and folder to track database costs. This example assumes you've already declared the appropriate providers.

1. First, create an RDS instance using the `aws_db_instance` resource from the AWS provider. Then, create a saved filter using the output of the `arn` from the RDS instance as part of the filter criteria. 

  ```bash
  resource "aws_db_instance" "rds" {
    allocated_storage    = 10
    db_name              = "primary-database"
    engine               = "mysql"
    instance_class       = "db.t3.micro"
    username             = "admin"
    password             = "password"
  }
 
  resource "vantage_saved_filter" "rds" {
    title  = "rds-costs"
    filter = "costs.provider='aws' AND costs.resource_id = '${aws_db_instance.rds.arn}' AND costs.service = 'Amazon Relational Database Service'"
  }
  ```

2. Then, create a folder to keep your RDS Cost Reports organized. 
   
    ```bash
    resource "vantage_folder" "rds" {
      title = "RDS Costs"
    }
    ```

3. Finally, use the tokens that are output from the saved filter and folder as input to create a new Cost Report. 
  
  ```bash
  resource "vantage_cost_report" "rds_costs" {
    folder_token        = vantage_folder.rds.token
    saved_filter_tokens = [vantage_saved_filter.rds.token]
    title               = "RDS Costs"
  }
  ```

In this manner, initial setup, deployments, and infrastructure changes are synced to Vantage. Further examples can be found in the `terraform-provider-vantage` [GitHub repository](https://github.com/vantage-sh/terraform-provider-vantage/tree/main/examples).

## Future Primitive Support

Vantage is in process of expanding the API to support all resources within Vantage. Some future primitives the Terraform provider will support include:

- [Segments](/segments)
- [Budgets](/budgets)
- [Business Metrics](/per_unit_costs#importing-business-metrics)

These capabilities will expand the automation capabilities of Vantage through some of the following use cases:

- Push company metrics to Vantage
- Sync and update budgets

## Feature Requests

To request additional features, please open an issue on [GitHub](https://github.com/vantage-sh/terraform-aws-vantage-integration) or email us at [support@vantage.sh](mailto:support@vantage.sh).
