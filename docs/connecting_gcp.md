# Setup Google Cloud

## Connecting Your GCP Billing Account

Vantage integrates with your GCP account through the use of a [service account](https://cloud.google.com/iam/docs/service-accounts). A service account is generated on a per customer basis and is only granted permissions to read from the specific Big Query table in your account.

## Read-Only by Default

The service account is read-only by default. It does not have permissions nor will ever attempt to make any changes to your infrastructure.

## Prerequisites

Before you begin, you will need to:

1. Enable Billing Export
2. Create a project to store your Billing Export data
3. Create a BigQuery dataset to store your Billing Export data

If you have a pre-existing Billing Export, double-check the requirements below then skip to the [next section](/connecting_gcp/#creating-a-gcp-data-integration). If you need help setting up Billing Export, you can follow the instruction [here](/enabling_gcp_billing_export/).

**Billing Export Requirements:**

- Project is linked to the same Cloud Billing account that Billing Export is enabled on
- Detailed Billing Export is enabled, not Standard Billing Export
- The BigQuery dataset and table is deployed to either `us (multiple regions in United States)` or `eu (multiple regions in European Union)`
- _Note: If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing Export on each one individually._

**Recommendation:** We recommend that you create a dedicated project to store all Cloud Billing data rather than using an existing project.

**Note on Currency:** If your GCP billing data is normally displayed in a currency other than USD, we will convert it to USD using the `currency_conversion_rate` field in the Billing Export data.

## Creating a GCP Data Integration

Now that you have:

1. The Billing account ID
2. The name of the project
3. The name of the Big Query dataset

Create a GCP data integration by logging into your Vantage account and going [here](https://console.vantage.sh/settings/gcp). You will be asked to add these inputs into the onboarding flow.

## Connecting Manually

### Assign Vantage Service Account Permission to Access BigQuery

1. Open the [IAM Console](https://console.cloud.google.com/iam-admin/iam)
2. Select the project hosting the BigQuery dataset containing your Billing Export data from the project drop-down in the main navigation bar at top. If you don’t see the project name right away, try the "ALL" tab or search for it
3. Add a new permission to the project
   1. Click the **Add** button
   2. Under **New principals**, add your Vantage service account (found in the GCP onboarding workflow in the Vantage console)
   3. Attach the role `BigQuery Job User`
   4. Click the **Save** button

### Assign Vantage Service Account Permission to Access BigQuery Dataset

1. In the hamburger menu, navigate to **BigQuery** under **ANALYTICS** and select **SQL Workspace**
2. Grant Vantage service account access to the BigQuery dataset:
   1. Select the project name
   2. Select the dataset by clicking the **three vertical dots** button and selecting **Open**
   3. Click the **Share** button and select **Permissions**
   4. Under New principals, add your Vantage service account
   5. Attach the role, `BigQuery Data Viewer`
   6. Click the **Save** button
3. Return to the Vantage GCP onboarding workflow and click the **Next** button
