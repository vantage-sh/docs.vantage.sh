# Terraform

Vantage offers a Terraform provider for making it easy to get up and running with Vantage. The Vantage Terraform provider _currently_ allows registered users across all Vantage tiers to create the primitives needed to broker a connection with AWS -- which is essentially creating a Cross Account IAM Role and the creation of a Cost and Usage Report. That being said, we've been getting requests for expanding the suite of primitives the provider supports so that all aspects of Vantage (Cost Report creation, Budget creation, etc.) can be automated and managed via Terraform.

## Setup and Connection

:::info
The Vantage Terraform provider is currently only available for AWS IAM Role creation but is being expanded to other primitives listed below.
:::

Use the [Vantage Integrations Module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

This results in the creation of an IAM Role which Vantage can "assume" to ingest cost and resource metadata to display within the Vantage console.

```hcl
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

## Future Primitive Support

Vantage is in process of expanding the [Vantage API](https://vantage.readme.io/reference/general) which the Terraform provider ultimately is running through. Brokering an AWS IAM role creation is supported today and the list of primitives that the provider will ultimately support is as follows:

- [Cost Reports](/cost_reports)
- [Saved Filters](/cost_reports#saved-filters)
- [Segments](/segments)
- [Budgets](/budgets)
- [Business Metrics](/per_unit_costs#importing-business-metrics)

These capabilities help engineering teams **fully automate cost reporting** in Vantage through some of the following use cases:

- Build cost reports for hundreds of teams stored in another source of truth (database, Github, etc.)
- Integrate thousands of AWS accounts
- Push company metrics to Vantage
- Sync and update budgets

To request further features, please open an issue on [Github](https://github.com/vantage-sh/terraform-aws-vantage-integration) or email us at support@vantage.sh.
