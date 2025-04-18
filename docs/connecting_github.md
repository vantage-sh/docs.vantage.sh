---
id: connecting_github
title: GitHub
description: This page walks through how to integrate Vantage with your GitHub account.
toc_max_heading_level: 4
keywords:
  - GitHub
  - Connect GitHub
---

# GitHub

Vantage ingests GitHub costs through the [GitHub Enhanced Billing API](https://docs.github.com/en/rest/billing/enhanced-billing). With this integration, you can programmatically grant Vantage access to GitHub billing data for multiple organizations.

## Supported Services {#supported-services}

Vantage supports the following GitHub services: 

- Actions
- Large File Storage
- Copilot
- Codespaces
- Shared Storage
- Packages
- In addition to these services, you can also use existing Vantage tagging capabilities to track the underlying compute costs for self-hosted runners that run on a virtual machine, such as an EC2 instance, or in Kubernetes.

## Migrate to the New GitHub Billing Integration {#migrating}

Previously, Vantage ingested GitHub costs using a Vantage-owned billing manager account that customers added to their GitHub Organization or Enterprise (released in September 2024). This approach required users to manually invite a billing email address, which had limitations, such as incompatibility for organizations who use SSO authentication.

The second version of this integration (released in March 2025) uses the GitHub Enhanced Billing API. Any Vantage customer that is using GitHub services today and has been migrated to the Enhanced Billing API can use the new integration. GitHub started migrating customers to their new billing platform in [September 2024](https://docs.github.com/en/enterprise-cloud@latest/billing/using-the-new-billing-platform/automating-usage-reporting), with all accounts being migrated by the [end of March 2025](https://github.blog/changelog/2024-09-24-enhanced-billing-platform-for-enterprises/). See the [Prerequisites](/connecting_github#prerequisites) section below for instructions on how to validate if you’ve been migrated.

:::note
For customers on the first version of the Vantage integration, Vantage does not have a way of migrating to the new integration on your behalf. You will need to install the [Billing - vantage-sh](https://github.com/apps/billing-vantage-sh) application in your organization to use the new GitHub integration. See the [Create the Connection](/connecting_github#create-connection) section below for instructions on how to complete this new integration.
:::

## How Vantage Integrates with GitHub

The Vantage–GitHub integration requires the [Billing - vantage-sh](https://github.com/apps/billing-vantage-sh) GitHub application added to your GitHub organization. Once installed, Vantage can access cost and usage data through the [Enhanced Billing /usage API](https://docs.github.com/en/enterprise-cloud@latest/billing/using-the-new-billing-platform/automating-usage-reporting), which provides structured cost data for GitHub Actions, such as build minutes by user, repo, and workflow, as well as the associated infrastructure used to perform the build.

You can see cost and usage, such as per-repository billing for Actions, Copilot UserMonths, and GigabyteHours of Shared Storage. To allocate the infrastructure costs for your self-hosted runners, you can create a Cost Report that includes both GitHub costs and the related EC2 or EKS costs, based on tags or labels.

:::note
As noted in the [GitHub documentation](https://docs.github.com/en/rest/billing?apiVersion=2022-11-28), access to the GitHub Enhanced Billing APIs requires `"Administration" organization permissions (read)`.
:::

## Connect Your GitHub Account

Follow the steps in this section to install the Billing - vantage-sh GitHub application and ingest GitHub costs into Vantage.

### Prerequisites {#prerequisites}

You must be a GitHub **Organization Owner** to install the Billing - vantage-sh GitHub application. You must also have been migrated to the GitHub Enhanced Billing API. The new GitHub Enhanced Billing platform is available to:

- All enterprise accounts, and their organizations, created after June 2, 2024
- Enterprises that participated in the public preview program
- Enterprises that have received a notice 30 days before their migration (see the [GitHub blog](https://github.blog/changelog/2024-09-24-enhanced-billing-platform-for-enterprises/))

To validate that you have been moved to the Enhanced Billing Platform:

- Navigate to `https://github.com/enterprises/{name}/billing` (for Enterprise accounts) or `https://github.com/organizations/{name}/billing` (for Organization accounts), and you should see the new billing platform.
- You can also navigate to `https://github.com/enterprises/{name}/settings/billing` (for Enterprise accounts) or `https://github.com/organizations/{name}/settings/billing` (for Organization accounts). You should see a warning at the top of the page, indicating that the page has been deprecated.
  <details>
    <summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Deprecated billing screen in GitHub" width="100%" src="/img/gh-deprecated-screen.png" />
    </div>
  </details>

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to connect to GitHub.

### Create the Connection {#create-connection}

To complete the integration, you will add the application to your organization and set up the Vantage integration in the console.

1. From the top navigation in Vantage, click **Settings**.
2. On the left navigation, select **Integrations** and select **GitHub**.
3. The GitHub integrations page is displayed. Ensure you are on the **Connect** tab.
4. At the bottom of the page, click **Connect GitHub Account**.
5. You will be asked to authorize the app for your organization.
<details>
<summary>Click to view example image</summary>
<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="GitHub application authorization screen" width="100%" src="/img/gh-authorize.png" />
</div>
</details>
1. Click **Authorize Billing - vantage-sh**. You will be brought to a screen where you can select your organization for the integration. Select your organization to complete the integration. 

  :::note
  If you are part of an Enterprise, you will have to select multiple organizations.
  :::

  <details>
  <summary>Click to view example image</summary>
  <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="GitHub application organization selection screen" width="100%" src="/img/gh-org.png" />
  </div>
  </details>

GitHub costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest GitHub costs. As soon as they are processed, they will be available on your **All Resources** Cost Report. 

When following the integration setup, Vantage will request 180 days of historical usage data from GitHub. The cost and usage data ingested from the [GitHub Enhanced Billing APIs](https://docs.github.com/en/rest/billing) starts the day that GitHub migrates you to this new standard. Any historical data prior to this is accessible only via the [previous form](/connecting_github#previous-integration) of the GitHub integration.

If you decide to remove your GitHub integration from Vantage, all costs associated with your connected GitHub Organizations will be removed from the Vantage console.

### Next Steps: Manage Workspace Access

Once your costs are imported, select which workspaces this integration is associated with. See the [Workspaces](/workspaces#integration-workspace) documentation for information.

### Previous Integration (Pre-March 2025) {#previous-integration}

Any historical data you previously ingested into Vantage (prior to March 2025) is accessible only via the previous form of the GitHub integration. Once GitHub migrates you to the Enhanced Billing API, the previous Vantage GitHub integration will stop receiving updated data, as Vantage is no longer able to retrieve the CSV that was being used for cost and usage data.

You can leave your previous integration connected to Vantage for historical billing data if you want to retain this information. On the integration settings page in Vantage, any new integrations have the `API` label displayed next to their name in the list.

<details>
  <summary>Click to view example image</summary>
  <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="GitHub Vantage integration screen with old and new integrations" width="80%" src="/img/gh-vantage.png" />
  </div>
  </details>

## Data Refresh

See the [provider data refresh documentation](/provider_data_refresh) for information on when data for each provider refreshes in Vantage.

## GitHub Reporting Dimensions

On GitHub [Cost Reports](https://docs.vantage.sh/cost_reports/), you can filter costs across several dimensions:

- Organization (e.g., Organization Name)
- Service (e.g., Actions, Copilot, Packages)
- Category (e.g., Actions)
- Subcategory (e.g., Actions Linux)
- Resource (e.g., {Repository Name})
- Charge Type (e.g., Usage)
- Tags:
  - Owner
  - Repo
  - [Virtual Tags](https://docs.vantage.sh/virtual_tagging) created in Vantage
