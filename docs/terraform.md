# Terraform

If you manage your infrastructure with Terraform it is very easy to connect to Vantage and automate cost reporting.

## Setup and Connection

:::info
The Vantage Terraform provider is currently only available for AWS IAM Role creation but is being expanded to other primitives listed below. 
:::

Use the [Vantage Integrations Module](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest) to link your AWS and Vantage accounts. Below is an example of adding a member account without a CUR integration. Additional documentation can be found on the [Terraform Registry](https://registry.terraform.io/modules/vantage-sh/vantage-integration/aws/latest).

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

## Infrastructure Automation

The Terraform provider enables further cost automation using the [Vantage API](https://vantage.readme.io/reference/general). The IAM role creation shown above is supported today and we are currently expanding our Terraform Module to the following primitives:

- [Cost Reports](/cost_reports)
- [Saved Filters](/cost_reports#saved-filters)
- [Segments](/segments)
- [Budgets](/budgets)
- [Business Metrics](/per_unit_costs#importing-business-metrics)

These capabilities help engineering teams **fully automate cost reporting** in Vantage through some of the following use cases:

- Build cost reports for hundreds of teams
- Integrate thousands of AWS accounts
- Push company metrics to Vantage
- Make infrastructure changes without manually updating every report
- Connect additional providers such as GCP and Azure
- Configure and route Kubernetes metrics from systems such as Prometheus to Vantage

To request further features, please open an issue on [Github](https://github.com/vantage-sh/terraform-aws-vantage-integration) or us at support@vantage.sh.
