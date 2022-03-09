# GCP Billing Exports

__This is streamlined version of [Google's official documentation](https://cloud.google.com/billing/docs/how-to/export-data-bigquery-setup)__


## Requirements
- User with permissions to create a project
- User with permissions to create a BigQuery dataset
- User with permissions to modify Billing settings

### Select or Create a project

Before you enable Cloud Billing data export, you will need a project to store the data. 

The project needs to be linked to the same Cloud Billing account that you plan to enable Cloud Billing data export on. If you need help assigning a project to a Cloud Billing account, you can follow the instructions here.

Recommendation: We recommend that you create a dedicated project to store all Cloud Billing data rather than using an existing project.

Note: If you have multiple Cloud Billing accounts, you will need to enable Cloud Billing Export on each one individually.

### Create a BigQuery dataset

Sign in to the Google Cloud Console and go to the BigQuery page.

In the Project drop-down list at the top of the console, select the project you set up to contain your Cloud Billing data.

In the Explorer panel, click the three vertical dot button next to your project ID.

Click the Create dataset button.

Enter a Dataset ID. We recommend an ID that spans projects, such as "all_billing_data", rather than a project-specific ID.

Select a Data location. Choose either `us (multiple regions in United States)` or `eu (multiple regions in European Union)`. One of these two options is required for enabling detailed usage cost data.

Leave the Enable table expiration checkbox unchecked to ensure that data never expires. 

Set the Encryption option to Google-managed key. Note: Customer-managed key encryption is not supported for exporting Cloud Billing data records to BigQuery.

To save, click the Create dataset button.

### Enable Cloud Billing export to the BigQuery dataset

Open the console Navigation menu, and then select Billing.

In the Billing navigation menu, select Billing export.

Select the BigQuery export tab (this tab is selected by default).

Under Detailed usage cost, click the Edit settings button.

From the Projects list, select the project you set up to contain your billing data.

From the Dataset ID field, select the dataset that you set up to contain your exported Cloud Billing data.

Click the Save button.

Congrats! Your Cloud Billing data will now begin stored in the BigQuery dataset you created. 

Note: It typically takes a few hours for data to start appearing. Cloud Billing data is added retroactively for the current and previous month when detailed usage cost data is configured.
