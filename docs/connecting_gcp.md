---
id: connecting_gcp
title: Google Cloud
description: This page walks through how to connect your GCP account to Vantage.
keywords:
  - GCP
  - Google Cloud Platform
---

# Google Cloud

Vantage uses a [service account](https://cloud.google.com/iam/docs/service-accounts) to integrate with your GCP account. The service account is generated on a per-customer basis. Vantage requests extremely basic and limited permissions for GCP. During the integration process, you will grant the service account access _only_ to the specific BigQuery dataset that contains your billing data.

## Prerequisites

Before you start the integration process, you will need to complete the following prerequisites:

- Create a project to store your Cloud Billing export data.
- Create a BigQuery dataset to store your Cloud Billing export data.
- Enable Cloud Billing export.

See the [GCP Cloud Billing export](/enabling_gcp_billing_export/) instructions for details on how to complete the above steps. Then, return to this page to complete the rest of the integration process.

:::note
If your organization enforces domain restrictions, you can add the following Google Cloud organization ID to allow Vantage access: `421856710303`. If you instead need the customer ID, use `C03l99qsz`.
:::

**If you have a pre-existing Cloud Billing export** set up, ensure your configuration adheres to the requirements below before moving further.

- Your project is linked to the same Cloud Billing account that the Cloud Billing export is enabled on.
  :::tip
  We recommend you create a dedicated project to store all Cloud Billing data, rather than using an existing project.
  :::
- Detailed Billing Export is enabled, _not_ Standard Billing Export.
- The BigQuery dataset and table are deployed to either **US (multiple regions in United States)** or **EU (multiple regions in European Union)**.
- If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing exports on each account.

:::note
If your GCP billing data is typically displayed in a currency other than USD, Vantage will convert it to USD using the `currency_conversion_rate` field in the Cloud Billing export data.
:::

## Create a Connection {#create-a-connection}

Open a new browser tab, and navigate to the [Vantage GCP Settings page](https://console.vantage.sh/settings/gcp). You should see your customer-specific service account displayed at the top of the integration page. Keep this page open.

### Step 1: Grant the Vantage Service Account Permission to Access BigQuery {#service-account-permissions}

Back in GCP, navigate to the [IAM console](https://console.cloud.google.com/iam-admin/iam), and complete the steps below to grant the Vantage service account permission to access BigQuery.

1. At the top of the IAM console, select the project that hosts the BigQuery dataset with your Cloud Billing export data.
2. Configure the following permission:
   - In the center of the page, under **Permissions for project "My Project ABCD"**, click **+ GRANT ACCESS**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="GCP project permissions menu" width="80%" src="/img/connect-gcp/gcp-project-permissions-menu.png"/> </div>
   </details>
   - In the **New principals** field, under **Add principals**, paste the value for your Vantage service account. This value is the one displayed on the [Vantage GCP Integration page](https://console.vantage.sh/settings/gcp) you opened earlier.
   - In the **Role** field, under **Assign roles**, search for and select **BigQuery Job User**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Grant GCP project access" width="80%" src="/img/connect-gcp/gcp-grant-project-access.png"/> </div>
   </details>
3. Click **SAVE**.

### Step 2: Grant the Vantage Service Account Permission to Access the BigQuery Dataset {#bigquery-permissions}

Go back to [BigQuery](https://console.cloud.google.com/bigquery), and complete the steps below to grant the Vantage service account permission to access the BigQuery dataset.

1. At the top of the BigQuery console, ensure the project that you set up to contain your billing data is selected.
2. In the **Explorer** panel, select your project to expand it.
3. Select the **three vertical dots** next to the dataset name, then click **Open**. The **Dataset info** will be displayed on the right. _Keep this screen open to later obtain your project ID and dataset name._
4. Select the three vertical dots next to the dataset name again, then click **Share**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="BigQuery share dataset menu" width="80%" src="/img/connect-gcp/gcp-share-dataset.png"/> </div>
   <p>In this example, <strong>project-id-123456</strong> is the project and <strong>all_billing_data</strong> is the dataset.</p>
   </details>
5. On the **Share permissions** panel that appears on the right, click **+ ADD PRINCIPAL**.
6. In the **New principals** field, under **Add principals**, search for and select the Vantage service account.
   :::tip
   Copy the full name of your service account from the Vantage console into the search field to search for it.
   :::
7. In the **Role** field, under **Assign roles**, search for and select **BigQuery Data Viewer**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Grant BigQuery dataset access" width="80%" src="/img/connect-gcp/gcp-grant-dataset-access.png"/> </div>
   </details>
8. Click **SAVE**.

### Step 3: Add Your GCP Configuration Information to the Vantage Console {#gcp-config-info}

Keep BigQuery open in one of your browser tabs. Go back to the [Vantage GCP Integration page](https://console.vantage.sh/settings/gcp) to complete the integration process.

1. At the bottom of the Vantage GCP Integration page, click **Add Project Info**. A pop-up is displayed, which requires your Billing account ID, the project ID for the project that hosts the BigQuery dataset, and the BigQuery dataset name.
2. To obtain your **Billing Account ID**:
   - Go to [**GCP Billing**](https://console.cloud.google.com/billing).
   - Copy the value for your billing account, displayed in the **Billing account ID** column. It will look something like `1234AB-123456-7ABC12`.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="GCP Billing account ID screen" width="80%" src="/img/connect-gcp/gcp-billing-account-id.png"/> </div>
   </details>
3. To obtain your **Project ID hosting BigQuery dataset** and **BigQuery Dataset Name**:
   - In the **Dataset info** screen of BigQuery (previously opened in step 3 of the last section), observe the value on the **Dataset ID** line.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="BigQuery dataset details" width="80%" src="/img/connect-gcp/gcp-dataset-id.png"/> </div>
   </details>
   - Copy everything before the period. For example, in **project-id-123456.all_billing_data**, copy only **project-id-123456**. Paste this in the **Project ID hosting BigQuery dataset** field in Vantage.
   - Copy everything after the period and paste it in the **BigQuery Dataset Name** field in Vantage. (For example, in **project-id-123456.all_billing_data**, copy **all_billing_data**.)
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Vantage console configuration" width="80%" src="/img/connect-gcp/gcp-vantage-console.png"/> </div>
   </details>
4. Click **Connect Account**.

:::caution Important
It typically takes a few hours for data to start appearing. Cloud Billing data is added retroactively for the current and previous month when detailed usage cost data is configured. Full data for the current and previous month can take 24–48 hours to fully propagate.
:::

## Feature Availability and Resource Costs

The following GCP services are available with resource-level costs in [Cost Reports](/cost_reports):

- Compute Engine
- Cloud Functions
- Cloud Run
- Cloud SQL
- Cloud Spanner
- App Engine

Google Cloud is not currently available in the following features:

- [Autopilot](/autopilot)
- [Savings Planner](/savings_planner)
- [Resource Reports](/active_resources)

## Manage Workspace Access

See the [Workspaces](/workspaces#integration-workspace) documentation for information on how to update workspace access for an integration.