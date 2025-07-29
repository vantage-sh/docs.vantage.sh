---
id: enabling_gcp_billing_export
title: Configure GCP Billing Exports
description: This page walks through how to enable GCP Billing exports, which are a prerequisite to connecting GCP with your Vantage account.
keywords:
  - GCP
  - Google Cloud Platform
  - GCP Billing Exports
---

# Configure GCP Billing Exports

:::info
This below documentation is a streamlined version of [Google Cloud Platform's official documentation](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup).
:::

## Prerequisites

Before you begin, ensure you have the following permissions configured. See the [Google Cloud Platform documentation](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup#required_permissions) for information on how to configure these permissions.

- User with permission to create a project
- User with permission to create a BigQuery dataset
- User with permission to modify Billing settings

## Create a Billing Export

### Step 1: Select or Create a Project

Before you enable Cloud Billing data exports, you will need to create a project to store the data. If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing exports, individually, on each account.

:::tip Recommendation
We recommend you create a dedicated project to store all Cloud Billing data, rather than using an existing project.
:::

The project needs to be linked to the same Cloud Billing account that you plan to enable the Cloud Billing data export on. If you need help assigning a project to a Cloud Billing account, follow the  [Cloud Billing documentation](https://cloud.google.com/billing/docs/how-to/modify-project#confirm_billing_is_enabled_on_a_project).

### Step 2: Create a BigQuery Dataset

In the GCP console, navigate to [BigQuery](https://console.cloud.google.com/bigquery), and follow the steps below to create a BigQuery dataset.

1. From the **Project** dropdown list at the top of the BigQuery console, select the project you set up for your Cloud Billing data export.

2. In the **Explorer** panel, click the **three vertical dots** (next to your project ID).
3. Click **Create dataset**.
<details><summary>Expand to view example image</summary>
<div>
<img alt="Create BigQuery dataset menu" width="80%" src="https://assets.vantage.sh/docs/connect-gcp/gcp-project-create-dataset.png"/> </div>
</details>
4. Configure your dataset:

   - Enter a **Dataset ID**. We recommend an ID that spans projects, such as _all_billing_data_, rather than a project-specific ID.

   - For **Location type**, select either **US (multiple regions in United States)** or **EU (multiple regions in European Union)**. One of these two options is required to enable detailed usage cost data.

   - Leave the **Enable table expiration** checkbox unchecked to ensure that data never expires.

   - Click **Advanced options**. Set **Encryption** to **Google-managed encryption key**.
   <details><summary>Expand to view example image</summary>
   <div>
   <img alt="Create BigQuery dataset" width="80%" src="https://assets.vantage.sh/docs/connect-gcp/gcp-create-dataset.png"/> </div>
   </details>

   :::note
   Customer-managed key encryption is not supported for exporting Cloud Billing data records to BigQuery.
   :::

5. Click the **CREATE DATASET**. You should see the dataset displayed in the **Explorer** panel, under your project.

### Step 3: Enable Cloud Billing Export to the BigQuery Dataset

1. Still in BigQuery, click the hamburger menu (three horizontal lines) at the top left of the console, and select **Billing**.

2. In the left **Billing navigation menu**, select **Billing export**. (You can also search for and navigate to **Billing export** from the main search bar at the top of the GCP console.)

3. Ensure you are on the **BIGQUERY EXPORT** tab. (This tab should be selected by default). Then, under **Detailed usage cost**, click **EDIT SETTINGS**.
<details><summary>Expand to view example image</summary>
<div>
<img alt="Create GCP Billing Export" width="80%" src="https://assets.vantage.sh/docs/connect-gcp/gcp-billing-export.png"/> </div>
</details>

4. Configure the following settings:

   - From the **Projects** list, select the project you set up to contain your billing data.

   - For **Dataset**, select the dataset that you set up to contain your exported Cloud Billing data (e.g., **all_billing_data**).
<details><summary>Expand to view example image</summary>
<div>
<img alt="GCP detailed usage cost configuration" width="80%" src="https://assets.vantage.sh/docs/connect-gcp/gcp-detailed-usage-cost.png"/> </div>
</details>

5. Click the **SAVE**.

## Next Steps: Complete Your Vantage-GCP Integration

Your Cloud Billing data will start to be stored in the BigQuery dataset you created. To continue connecting your GCP account to Vantage, complete the [Create a GCP Connection](/connecting_gcp/#create-a-connection) instructions.

:::caution Important
It typically takes a few hours for data to start appearing. Cloud Billing data is added retroactively for the current and previous month when detailed usage cost data is configured. Full data for the current and previous month can take 24–48 hours to fully propagate.
:::
