---
id: security
title: Security 
description: This page discusses Vantage app security and frequently asked security questions.
---

# Security

As an infrastructure tool that requires access to your cloud provider, we understand there may be questions, concerns, and necessary clarification around our infrastructure, processes, and procedures. We, as developers at Vantage, are also customers of Vantage, which more closely aligns our security concerns with those of our customers.

## Read-Only Billing Access

Vantage uses read-only service accounts, service roles, API keys, and other read-only means to access billing data across all the integrations we use. This means we don't store sensitive information, like account access keys and access key secrets, to use Vantage. Should you have any other questions, please feel free to email us at [security@vantage.sh](mailto:security@vantage.sh).

## Cross-Account IAM Roles on AWS

Vantage uses a Cross-Account IAM Role to sync information about your infrastructure resources. This method is [the AWS-recommended](https://aws.amazon.com/blogs/apn/securely-accessing-customer-aws-accounts-with-cross-account-iam-roles/) approach. When you grant Vantage access to your account by running the provided CloudFormation stack, the stack creates a cross-account role with in-line policies selected by Vantage. These policies are a trimmed-down version of the policies in the AWS-managed `ReadOnlyAccess` policy, but we've removed actions that would otherwise allow us to access sensitive information in databases, buckets, and certain services. Our CloudFormation template is open source and [hosted publicly](https://vantage-public.s3.amazonaws.com/vantage-integration-latest.json) for transparency.

### Customizing Cross-Account Role Permissions

Vantage requests various in-line read-only permissions when creating the cross-account role on your behalf; however, we understand this can be too broad of a permission set for certain use cases. As a result, we do allow you to create Cross-Account IAM roles with whatever permissions you're comfortable with. However, keep in mind that narrowing the scope of the role's permissions will limit certain functionality in Vantage.

If you email [support@vantage.sh](mailto:support@vantage.sh) in advance, we can facilitate provisioning your account with a custom role. Please note that we will provide you with some custom attributes to associate with your Cross-Account IAM Role to prevent [the "confused deputy" problem](https://docs.aws.amazon.com/IAM/latest/UserGuide/confused-deputy.html). As a result, you will need to contact Vantage support _before_ you create the role.

## Data Revocation

In the account **Settings** section, you can revoke the Cross-Account IAM Role at any time. Automatically and nearly instantly, Vantage will delete all data associated with that Cross-Account IAM Role. Note that the deletion doesn't remove the set of custom Vantage views you've created; however, these views will be empty, as there are no longer any resources.

In the account **Settings** section, you also can delete your account. Once you delete your account, all data is deleted as well.

## Data Sharing

We do not share any data externally. We do not sell or share any user data with any third parties.

## Frequently Asked Questions

<details><summary>Does Vantage periodically perform penetration tests?</summary>

Yes. Vantage has outsourced penetration tests to a third party that regularly performs these tests.

</details>

<details><summary>Does Vantage hold any security certifications, such as SOC 2 or ISO 27001?</summary>

Yes. Vantage is SOC 2 Type 2 certified. To request a copy of our report, visit the [Vantage Security Page](https://vantage.sh/security). We believe that we already roughly adhere to the standards outlined in ISO 27001.

</details>

<details><summary>In terms of application security, how does Vantage deal with security reports received from security researchers? In other words, does Vantage have a bug bounty program or a straightforward process to report security issues?</summary>

Vantage receives reports via [security@vantage.sh](mailto:security@vantage.sh). We review every single report that we receive. We do not have a formal bug bounty program, but we do have a process as well as a set of policies and standards we follow to process security requests.

</details>

<details><summary>Does Vantage support 2FA, SSO, or any defensive options?</summary>

Yes. We support [SAML SSO](/sso), and 2FA is on the roadmap.

</details>

<details><summary>How is customers’ data protected, and who has access to Vantage data?</summary>

All data is encrypted in transit and at rest. Only a subset of senior employees has access to data on the Vantage side. We regularly review and revise the list of individuals on the Vantage team with access to customer data.

</details>

<details><summary>Do you have a list of third parties Vantage uses that explains what each third party is allowed to access and its purpose?</summary>

We use a subset of third parties, largely for analytics, support, and payment processing. There is no PII sent to third parties, and no cost data is shared with third parties. A list of third parties is provided below:

- Mixpanel: Customer analytics
- Segment: Customer analytics
- Customer.io: Customer communications
- HubSpot: Sales management
- Intercom: Support management
- Stripe: Payment processing

</details>

<details><summary>Do you have a security contact person in case of breaches?</summary>

A team responds to messages at [security@vantage.sh](mailto:security@vantage.sh). Upon request, a security employee can be temporarily assigned to your account as well.

</details>

<details><summary>Do you log access activities of Vantage’s employees who have access to the data?</summary>

Yes.

</details>

<details><summary>Does Vantage store any information regarding cloud infrastructure in the database?</summary>

Yes. We store basic metadata on cloud infrastructure to be able to show corresponding costs for associated resources. We cannot access any of the underlying resources.

</details>
