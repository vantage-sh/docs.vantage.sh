---
id: terraform
title: Terraform Provider
description: Use the Vantage provider for Terraform as part of your FinOps as Code toolkit. Create Terraform cost reporting resources.
keywords:
  - Terraform
---

# Terraform Provider

Vantage is an official HashiCorp partner and offers a Terraform _module_ for getting up and running with Vantage using Infrastructure as Code (IaC). Vantage also offers a Terraform _provider_ with several _resources_.

- **Vantage Terraform Integrations module for AWS**: The Vantage [Terraform Integrations module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) is available for registered users, across all Vantage tiers, to create the primitives needed to broker a connection with AWS. With the module, you can create a Cross-Account IAM Role as well as a Cost and Usage Report (CUR).
- **Vantage Terraform provider**: The [Terraform provider](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs) comprises several Vantage resources you can create, such as Cost Reports, dashboards, etc. Use the provider to automate and manage Vantage from within your existing Terraform codebase. Organizations with IaC practices can set up, create, and sync their cost reporting structure with Vantage.

## Vantage Terraform Integrations Module for AWS {#integrations-module}

Use the Vantage Integrations module to link your AWS and Vantage accounts. Organizations can use the module to integrate thousands of AWS accounts with Vantage. You can view the source of the module on the module's GitHub repository:

- Module file: [`main.tf`](https://github.com/vantage-sh/terraform-aws-vantage-integration/blob/main/main.tf)
- Variables for module: [`variables.tf`](https://github.com/vantage-sh/terraform-aws-vantage-integration/blob/main/variables.tf)

You can also view the module's documentation on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

:::note
For root AWS accounts, you need to provision a bucket for the Cost and Usage Report (CUR) using the `cur_bucket_name` variable. For sub-accounts, you need to link access, but you don't need to configure a CUR bucket.
:::

The below example shows how to add the management (root) AWS account integration where the CUR and an S3 bucket are provisioned:

```bash
terraform {
  required_version = "~> 1.0"
  required_providers {
    vantage = {
      source = "vantage-sh/vantage"
    }
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

provider "vantage" {
  # A Vantage API Token is needed to use this module, it is recommended to either use env var VANTAGE_API_TOKEN
  # or to use a tfvars file that's not committed to the repository. Follow the instructions here to create a new 
  # API Token: https://docs.vantage.sh/vantage_account#api-token
  api_token = YOUR_API_TOKEN
}

provider "aws" {
  region = "us-east-1"
  assume_role {
    role_arn = "arn:aws:iam::123456789012:role/admin-role"
  }
}

module "vantage-integration" {
  source  = "vantage-sh/vantage-integration/aws"

  # Bucket names must be globally unique. It is provisioned with private acl's
  # and only accessed by Vantage via the provisioned cross account role.
  cur_bucket_name = "my-company-cur-vantage"
}
```

The below example shows how to add a member account _without_ a CUR integration. Note the `cur_bucket_name` variable is not included within the module configuration. As a result, an IAM Role is created, which Vantage can assume to ingest the cost and resource metadata that are displayed within the Vantage console. See the [Terraform documentation](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) for more details.

```bash
terraform {
  required_version = "~> 1.0"
  required_providers {
    vantage = {
      source = "vantage-sh/vantage"
    }
    aws = {
      source  = "hashicorp/aws"
    }
  }
}

provider "vantage" {
  # A Vantage API Token is needed to use this module, it is recommended to either use env var VANTAGE_API_TOKEN
  # or to use a tfvars file that's not committed to the repository. Follow the instructions here to create a new 
  # API Token: https://docs.vantage.sh/vantage_account#api-token
  api_token = YOUR_API_TOKEN
}

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

## Vantage Resources and Data Sources

Using the Terraform provider, you can automate Vantage resources, such as Cost Reports, via the [Vantage Write API](https://vantage.readme.io/v2.0/reference/createcostreport)—or the backbone of the provider.

With the Terraform provider, you can create many [resources](https://developer.hashicorp.com/terraform/language/resources), like Cost Reports, report notifications, folders, dashboards, etc. The provider also includes many [data sources](https://developer.hashicorp.com/terraform/language/data-sources) you can use to pull data from the Vantage console. See the [documentation](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs) for details.

By using these Terraform resources, engineering teams automate cost reporting in Vantage. Below are some example use cases.

- Build Cost Reports for hundreds of teams stored in another source of truth (e.g., database or GitHub)
- Update filters as resource names or tags change
- Add new reports to team dashboards when new services are deployed
- Create teams and access grants based on teams within an identity provider (IdP)

:::caution Important
The ability to create, edit, and destroy resources is keyed to the permissions of the user associated with the API token. For Enterprise customers, role-based access controls also affect these actions. Review the documentation on [RBAC for further information](/rbac).
:::

## Terraform Import

`terraform import` is a command used in Terraform that allows you to bring existing infrastructure resources into Terraform management. This command helps integrate resources that were created outside of Terraform—such as those provisioned directly in the Vantage console or API—into Terraform's state file. For example, if you initially set up your cost reporting resources through the Vantage console, you can use this command to import these resources into your Terraform state, which allows you to maintain a single source of truth for your infrastructure.

To use `terraform import`, run the following command:

```bash
terraform import vantage_cost_report.demo_report rprt_1abc23456c7c8a90
```

In the above example, a Cost Report that was created within the Vantage console is brought into the Terraform state.

- `vantage_cost_report.demo_report`: The type of infrastructure component managed by Terraform (e.g., [`vantage_cost_report`](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report)); followed by a user-defined identifier assigned to a resource in your Terraform configuration.
- `rprt_1abc23456c7c8a90`: Example of a Cost Report `token`. This can be found in the URL for a report within the console or [via the API](https://vantage.readme.io/reference/getcostreports).

See the [example below](/terraform#import-example) for a walkthrough of how to use this command.

## Terraform Examples

Before you begin, ensure you have a valid [Write API token](/vantage_account#api-token).

### Create a Cost Report

The following example describes how to create a Cost Report for AWS using Terraform.

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

   :::tip
   You can optionally save your API token as an environment variable and remove the `provider "vantage"{...}` block. Export your token with: `export VANTAGE_API_TOKEN=<YOUR_API_TOKEN>`.

2. Create the `vantage_folder` resource, with "AWS Costs" as the title.

   ```bash
   resource "vantage_folder" "aws" {
   title = "AWS Costs"
   }
   ```

3. Create the `vantage_cost_report` resource using the token output from the `vantage_folder` resource. The Cost Report will be stored in the newly created AWS folder. The Cost Report's title is "AWS Costs." In addition, the `vantage_saved_filter` resource includes a `filter` parameter that uses [Vantage Query Language (VQL)](/vql), a SQL-like language for querying cloud cost and usage data. Here, the filter is set to show only AWS costs. Set the `groupings` parameter to have the report grouped by region and service.
   :::tip
   Valid groupings include: `account_id`, `billing_account_id`, `charge_type`, `cost_category`, `cost_subcategory`, `provider`, `region`, `resource_id`, `service`, `tag:<tag_value>`. Enter multiple groupings as comma-separated values: `groupings=provider,service,region`.
   :::

   ```bash
   resource "vantage_cost_report" "aws" {
     folder_token = vantage_folder.aws.token
     filter       = "costs.provider = 'aws'"
     title        = "AWS Costs"
     groupings    = "region,service"
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

### Use `terraform import` to Manage External Resources {#import-example}

In the following example, you created a Cost Report in the Vantage console. You want to update the filter on this Cost Report to pull data for different RDS instances, and you want to do this automatically using Terraform. To update data on a resource made outside Terraform, you need to use the `terraform import` command.

1. First, obtain the `token` for this Cost Report. You can access this `token` using one of the following methods:
   - If you are viewing the report in the Vantage console, copy the report's `token` from the end of the URL (e.g., in `https://console.vantage.sh/reports/rprt_123a47b5ba1234e1`, copy `rprt_123a47b5ba1234e1`).
   - You can access a list of your reports from the `/cost_reports` [Vantage API endpoint](https://vantage.readme.io/reference/getcostreports). The `token` is one of the values returned in the response.
   - Use the `vantage_cost_reports` Terraform [data source](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/data-sources/cost_reports). You can call the data source and create an [output value](https://developer.hashicorp.com/terraform/language/values/outputs) to access a list of Cost Reports.
2. Ensure the `vantage_cost_report` [Terraform resource](https://registry.terraform.io/providers/vantage-sh/vantage/latest/docs/resources/cost_report) that you want to update is defined in the configuration. Below it is defined with the current parameters.
    ```bash
    resource "vantage_cost_report" "demo_report" {
      title               = "Terraform Demo Report"
      filter              = "costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-01', 'arn:aws:rds:us-east-1:123456789:db:primary-02')"
      workspace_token     = "wrkspc_12c3254c789e0123"
    }
    ```
4. At this point, Terraform is aware of the resource, but it doesn't manage it yet because the Cost Report was created outside of Terraform, in the Vantage console. To bring the external resource under Terraform's control, you need to import it using the `terraform import` command. Replace the placeholder `<token>` with the `token` you just obtained for the Cost Report.

   ```bash
   terraform import vantage_cost_report.demo_report <token>
   ```

   For example, if your Cost Report token is `rprt_123a47b5ba1234e1`, run the following command:

   ```bash
   terraform import vantage_cost_report.demo_report rprt_123a47b5ba1234e1
   ```

5. After importing the resource, you can modify its attributes in your Terraform configuration.
   In this example, you can adjust the ARNs in the `filter` parameter to reflect two different RDS instances.

   ```bash
   resource "vantage_cost_report" "demo_report" {
    title = "Terraform Demo Report"
    filter = "costs.provider = 'aws' AND costs.service = 'Amazon Relational Database Service' AND costs.resource_id IN ('arn:aws:rds:us-east-1:123456789:db:primary-03', 'arn:aws:rds:us-east-1:123456789:db:primary-04')"
    workspace_token = "wrkspc_12c3254c789e0123"
   }
   ```

6. Finally, apply the changes to your configuration:

   ```bash
   terraform plan
   terraform apply
   ```

   Terraform will detect the new filter and update the external resource accordingly. You can see this reflected in the Vantage console.

## Feature Requests

To request additional features, please open an issue on [GitHub](https://github.com/vantage-sh/terraform-aws-vantage-integration) or email us at [support@vantage.sh](mailto:support@vantage.sh).
