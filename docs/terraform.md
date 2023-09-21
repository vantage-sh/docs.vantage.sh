# Terraform

Vantage offers a Terraform provider for making it easy to get up and running with Vantage. The Vantage Terraform provider allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report.

Using the Terraform provider it is also possible to fully automate and manage Vantage from within your existing Terraform codebase. This allows companies with Infrastructure as Code practices to setup, create, and sync their cloud with Vantage so that reports are automatically provisioned.

## Setup and Connection

Use the [Vantage Integrations Module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

This results in the creation of an IAM Role which Vantage can "assume" to ingest cost and resource metadata to display within the Vantage console.

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

The Terraform provider allows the automation of Vantage resources such as cost reports via the [Vantage Write API](https://vantage.readme.io/reference/general) which the Terraform provider ultimately is running through. Filters can be created and automated through the [Vantage Query Language (VQL)](/vql), a SQL-like language for querying cloud cost and usage data.

- [Cost Reports](/cost_reports)
- Folders
- [Saved Filters](/cost_reports#saved-filters)
- Dashboards

These capabilities help engineering teams automate cost reporting in Vantage through some of the following use cases:

- Build cost reports for hundreds of teams stored in another source of truth (database, Github, etc.)
- Integrate thousands of AWS accounts
- Update filters as resource names or tags change
- Add new reports to team dashboards when new services are deployed

## Example Usage

Here we will create a filter, report, and folder for tracking database costs. First, we will establish a saved filter with the output from an aws_db_instance resource which would be present in the Terraform.

```bash
resource "aws_db_instance" "rds" {
  name = "primary-database"
}
resource "vantage_saved_filter" "rds" {
  title  = "${var.environment}-rds-costs"
  filter = "(costs.provider='aws' AND costs.resource_id = '${aws_db_instance.core-rds[0].arn}')"
}
```

Then, we can use the saved filter in a cost report. We’ll also create a folder to keep the report organized.

```bash
resource "vantage_folder" "rds" {
  title = "RDS Costs"
}

resource "vantage_cost_report" "rds_costs" {
  folder_token        = vantage_folder.rds.token
  saved_filter_tokens = [vantage_saved_filter.rds.token]
  title               = "RDS Costs"
}
```

In this manner, initial setup, deployments, and infrastructure changes are synced to Vantage. Further examples can be found in the [terraform-provider-vantage Github repository](https://github.com/vantage-sh/terraform-provider-vantage/tree/main/examples).

## Future Primitive Support

Vantage is in process of expanding the API to support all resources within vantage. The list of primitives that the provider will ultimately support is as follows:

- [Segments](/segments)
- [Budgets](/budgets)
- [Business Metrics](/per_unit_costs#importing-business-metrics)

These capabilities will expand the automation capabilities of Vantage through some of the following use cases:

- Push company metrics to Vantage
- Sync and update budgets

To request further features, please open an issue on [Github](https://github.com/vantage-sh/terraform-aws-vantage-integration) or email us at support@vantage.sh.
