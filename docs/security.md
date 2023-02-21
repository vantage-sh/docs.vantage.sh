# Security

As an infrastructure tool that requires access to your cloud provider we understand there may be questions, concerns and necessary clarification around our own infrastructure, processes and procedures. We as developers on Vantage are also customers of Vantage to more closely align our security concerns with those of our customers. Lastly, our team has worked at public cloud infrastructure providers including Amazon Web Services and DigitalOcean and are applying best practices learned at these providers to ensure security is handled as best it can.

## Cross Account IAM Roles
Vantage leverages something called Cross Account IAM Roles to sync information about your infrastructure resources. This means we don't store sensitive information like account access keys and access key secrets to use Vantage. This method is the AWS recommended approach and is detailed in depth by AWS here for you to learn more. When you grant access to your AWS account to Vantage by running the provided CloudFormation stack, it creates a cross account role with in-line policies selected by Vantage. These policies are a trimmed down version of the policies in the AWS-managed "ReadOnlyAccess" policy but we've removed actions that would otherwise allow us to access sensitive information in databases, buckets and certain services. Our CloudFormation template is open source and hosted publicly here for transparency. Should you have any other questions please feel free to email us at security@vantage.sh.

## Customizing Cross Account Role Permissions
Vantage requests various in-line read-only permissions when creating the cross account role on your behalf. However, we understand this can be too broad of a permission set for certain use-cases. As a result, we do allow for creating Cross Account IAM roles with whatever permissions you're comfortable with. It is important to understand that as a result of narrowing the scope of the permissions Vantage has certain functionality that will be limited.

If you email support@vantage.sh in advance of that we are happy to facilite provisioning your account with a custom role prior to then. Please note that we will provide you with some custom attributes to associate with your Cross Account Role to prevent against the Confused Deputy problem so please contact Vantage support prior to creating your role.

## Data Caching
Data about your cloud infrastructure is cached on Vantage's production infrastructure. We do this in order to provide a fast and user-friendly experience. We do not cache all information about your cloud infrastructure. In the event you remove your account with Vantage, we delete all corresponding data from our databases. All data is encrypted at rest and in transit wherever possible.

## Data Revocation
In your account settings page you have the ability to revoke the Cross Account IAM Role at any time. Automatically and nearly instantly, Vantage will delete all data associated with that Cross Account IAM Role. It doesn't remove your set of custom Vantage Views created - however all of those views will be empty as there are no resources.

In your account settings page you also have the ability to delete your account. Upon deleting your account all data is deleted.

## Team Security
Everyone on our team has spent time working at a major cloud infrastructure provider and is well versed in cloud security. We ensure the bare minimum of team members have access to our own AWS cloud infrastructure. Currently the number of team members with access is only two people.

## Data Sharing
We do not share any data externally. We do not sell or share any user data with any third parties.

## Frequently Asked Questions

**Does Vantage perform penetration tests periodically?**

Yes. Vantage has outsourced pentetration tests to a third party that regularly performs these tests. 

**Does Vantage hold any security certifications such as SOC2, ISO27001?**

No. Though we are pursuing SOC2 certification in 2022 and believe that we already roughly adhere to the standards set forth in these certifications. 

**In terms of application security, How does Vantage deal with security reports received from security researchers? In other words, does Vantage have a bug bounty program or a straightforward process to report security issues to them?**

Vantage receives reports through an email address of security [at] vantage.sh. We review every single report that we receive. We do not have a formal bug bounty program but we do have a process and set of policies and standards we adhere to to process security requests. 

**Does Vantage support 2FA, SSO, or any defensive options?**

Yes. We support SAML SSO and 2FA is on the roadmap. 

**How is customers’ data protected and who has access to Vantage data?**

All data is encrypted in transit and at rest. Only a subset of senior employees have access to data on the Vantage side. Who on the Vantage team has access to customer data is regularly reviewed and revised by the team. 

**Do you have a list of third parties that Vantage uses and explains what each third party is allowed to access and its purpose?**

We use a subset of third parties largely for analytics, support and payment processing. There is no PII sent to third parties and no cost data is shared with third parties. A list of third parties is listed below:

* Mixpanel - Customer analytics
* Segment - Customer analytics
* Google Analytics - Customer analytics 
* Customer.io - Customer communications
* Hubspot - Sales management
* Intercom - Support management
* Stripe - Payment processing

**Do you have a security contact person in case of breaches?**

A team responds to messages at security [at] vantage.sh. Upon request a security employee can be temporarily assigned to your account as well.

**In terms of logging, Do you log access activities of Vantage’s employees who access to the data?**

Yes. 

**Does Vantage store any information regarding cloud infrastructure in the database?**

Yes. We store basic metadata on cloud infrastructure in order to be able to show corresponding costs for associated resources. We do not have the ability to access any of the underlying resources.