---
id: connecting_github
title: GitHub
description: This page walks through how to integrate Vantage with your GitHub account.
toc_max_heading_level: 4
keywords:
  - GitHub
  - Connect GitHub
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# GitHub

Vantage ingests GitHub costs via a Vantage-owned billing manager account that users add to their GitHub Organization or Enterprise. The billing manager account _has no access_ to any source code. 

With the Vantage–GitHub integration, you can track costs from the following GitHub services: GitHub Actions, Shared Storage, and Copilot. In addition to these services, Vantage can also pull the underlying compute costs for self-hosted runners that run on a virtual machine, such as an EC2 instance, or in Kubernetes.

## How Vantage Integrates with GitHub

The GitHub integration is completed in the following steps. **Detailed integration steps are provided in the next section.**

1. Grant Vantage `manage billing:enterprise` or `read:org` access to the GitHub API, allowing Vantage to query the API for billing data returned from the [`Get usage billing report for an enterprise`](https://docs.github.com/en/enterprise-cloud@latest/rest/enterprise-admin/billing?apiVersion=2022-11-28#get-billing-usage-report-for-an-enterprise) API endpoint.
2. Invite an account-specific Vantage email address as a billing manager to either you GitHub Enterprise or Organization. 
3. After the Vantage user is invited, Vantage will confirm the addition of the user to your account within 24 hours. 
4. Add the integration in the Vantage console. 

With this approach, Vantage can automatically pull a detailed usage report (CSV) from GitHub. With the information in the detailed usage report CSV, you can see granular usage breakdowns for GitHub Actions, such as build minutes by user, repository, and workflow, as well as the associated infrastructure used to perform the build. This is the most detailed method to provide the information that’s needed for this integration. 

The Usage Report CSV contains metadata about every GitHub Actions build for the billing period, such as the user that initiated the build, the organization the user belongs to, the associated source code repository, the workflow name, the runner type, size, and operating system. With this additional metadata, Vantage can help you understand the users or repositories that are using the most minutes. This can help identify anomalies, build/test issues, and over-provisioned runners. Vantage customers can create filters for any of the metadata provided in the CSV.

## Connect Your GitHub Account

Follow the steps in this section to add a Vantage-owned GitHub billing manager account to your Organization or Enterprise. This user can pull cost and usage information from your GitHub account and send it to Vantage.

:::note
The GitHub billing manager is customer-specific and not shared across other accounts. Per [GitHub's documentation](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization): "Billing managers do not use paid licenses in your organization's subscription."
:::

### Prerequisites

The following steps provide information for both Enterprise and Organization [accounts](https://docs.github.com/en/get-started/learning-about-github/types-of-github-accounts).

- Ensure you have the correct role for adding a member to your account:
  - For [Organization accounts](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization), members of the organization's Owners team can add billing manager permissions.
  - For [Enterprise accounts](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise?learn=get_started_with_your_enterprise_account&learnProduct=admin), Enterprise owners can invite other people to their enterprise account as billing managers.
- [Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to connect to GitHub.

### Create the Connection

Follow the steps below to add your Enterprise or Organization information, set up the Vantage integration, and invite the Vantage billing manager to your account.

:::note
Note that at this time, you are unable to complete a GitHub integration if your organization or enterprise uses GitHub SSO. 
:::

#### Step 1: Obtain Your Organization or Enterprise Name

Navigate to GitHub and obtain your Enterprise or Organization name.
<Tabs groupId="instructions">
<TabItem value="enterprise" label="Enterprise" default>

   <p>For Enterprises, navigate to the <a href="https://github.com/settings/enterprises">Enterprises page</a> on GitHub. Select your Enterprise. Copy the name that's displayed in the URL to use in step 3 (e.g., in <code>https://github.com/enterprises/mycompany</code>, copy <b>only</b> <code>mycompany</code>—all lowercase, no spaces—<b>do not copy the full URL, just the <code>mycompany</code> part</b>).</p>
   </TabItem>
   <TabItem value="organization" label="Organization" default>
   <p>For Organizations, navigate to the <a href="https://github.com/settings/organizations">Organizations page</a> on GitHub. Select your Organization. Copy the name that's displayed in the URL to use in step 3 (e.g., in <code>https://github.com/mycompany</code>, copy <b>only</b> <code>mycompany</code>—all lowercase, no spaces—<b>do not copy the full URL, just the <code>mycompany</code> part</b>).</p>
   </TabItem>
   </Tabs>

---

#### Step 2: Create a Fine-Grained Access Token

Create a personal access token for your Enterprise or Organization. These steps are also provided in the [GitHub documentation](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token-classic).

1. Navigate to the [Personal Access Tokens](https://github.com/settings/tokens) screen on GitHub.
2. Click **Generate new token**, then click **Generate new token (classic)**.
3. For **Note**, enter a description for the token.
4. Select a token expiration.
5. For **Scopes**, select the following scopes based on whether you are an Organization or Enterprise:
   - For **Organizations**, select the `read:org` scope.
   - For **Enterprises**, select the `manage_billing:enterprise` scope.
6. Click **Generate token** and copy the provided token to use in step 3.

---

#### Step 3: Add Your Account Information to Vantage

Navigate to Vantage and follow the steps below to add the information you obtained in the previous steps.

1. From the top navigation in Vantage click **Settings**.
2. On the left navigation, select **Integrations**. The GitHub integrations page is displayed. Ensure you are on the **Connect** tab.
3. Click **Add GitHub Account**.
4. Add your Enterprise or Organization name and select your account type. For **API key**, add your previously generated personal access token.
5. Click **Connect Account**.

---

#### Step 4: Invite the Vantage Billing Manager to Your GitHub Account {#invite-user}

After you add your initial account information, add the billing manager to your account.

1. On the integration page, copy provided Vantage billing manager email address. This email address will be associated with the user who's the billing manager on your GitHub Organization or Enterprise.
2. Navigate to GitHub and follow the steps below for either your Organization or Enterprise.
   <Tabs groupId="instructions">
   <TabItem value="enterprise" label="Enterprise" default>

   :::note
   These steps are also documented in [GitHub's documentation](https://docs.github.com/en/enterprise-cloud@latest/admin/managing-accounts-and-repositories/managing-users-in-your-enterprise/inviting-people-to-manage-your-enterprise?learn=get_started_with_your_enterprise_account&learnProduct=admin#inviting-an-enterprise-administrator-to-your-enterprise-account).
   :::

   <ol>
   <li>Navigate to the Enterprise Admin screen, which will be the following URL, but with your Enterprise's name <code>https://github.com/enterprises/YOUR_ENTERPRISE_NAME/admins</code>.</li>
   <li>At the top, click <strong>Invite admin</strong>.</li>
   <li>Paste the Vantage billing manager email you copied earlier.</li>
   <li>Select <strong>Billing Manager</strong> for the role.</li>
   <li>Click <strong>Send Invitation</strong>.</li>
   </ol>
   </TabItem>
   <TabItem value="organization" label="Organization" default>

   :::note
   These steps are also documented in [GitHub's documentation](https://docs.github.com/en/organizations/managing-peoples-access-to-your-organization-with-roles/adding-a-billing-manager-to-your-organization).
   :::

   <ol>
   <li>From your GitHub account, click your profile picture in the top right.</li>
   <li>Select <strong>Settings</strong>.</li>
   <li>On the sidebar under <strong>Access</strong>, select <strong>Organizations</strong>.</li>
   <li>Next to your organization, click <strong>Settings</strong>.</li>
   <li>From the sidebar, under <strong>Access</strong>, click <strong>Billing and plans</strong>.</li>
   <li>Under <strong>Billing management</strong>, for <strong>Billing managers</strong>, click <strong>Add</strong>.</li>
   <li>Paste the Vantage billing manager email you copied earlier.</li>
   <li>Click <strong>Send Invitation</strong>.</li>
   </ol>
   </TabItem>
   </Tabs>

   ***


An email will be sent to the Vantage-owned billing manager email address for Vantage to accept your Organization's or Enterprise's invitation. Note that it will take about 24 hours for your invitation to be accepted by Vantage. Once costs are imported, you'll receive an email, and they'll be available on your **All Resources** Cost Report.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## GitHub Reporting Dimensions

On GitHub [Cost Reports](/cost_reports/), you can filter costs across several dimensions:

- Category (e.g., Actions - Hosted Runner)
- Tag (Includes the below items and [virtual tags](/virtual_tagging) created in Vantage for this provider)
  - owner
  - repo
  - username
  - workflow
- Subcategory (e.g., Actions - Compute - UBUNTU_16_Core)
- Resource (e.g., Actions - specific Actions workflow)
- Charge Type (e.g., Usage)
- Organization (organization name)
- Service (Actions, Storage, and Copilot)

You can also view GitHub credits in Cost Reports.

1. At the top of any GitHub Cost Report, click **Settings**.
2. Then, toggle on/off **Credits**.

## GitHub Costs Demonstration

The below video talks about how to get started with GitHub costs and how to use [Virtual Tags](/virtual_tagging) along with this integration.

<div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
    <iframe src="https://www.youtube.com/embed/npyZQRlTuGY?si=AtCe7H23BvYFsZsB?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent" frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', borderRadius: '10px' }}></iframe>
</div><br/>
