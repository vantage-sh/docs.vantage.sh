---
id: connecting_custom_providers
title: Custom Providers
description: This page walks through how to integrate Vantage with Custom Providers.
toc_max_heading_level: 4
keywords:
  - Custom Providers
  - Connect Custom Providers
---

# Custom Providers

:::note
The following documentation is provided for early access users.
:::

With the Custom Provider integration option in Vantage, you can upload costs from providers that don’t expose billing APIs, aren’t [yet supported](/getting_started) by Vantage, or originate from custom systems. You can import costs by providing any CSV that adheres to the FinOps FOCUS schema, or through the [Custom Providers API](/connecting_custom_providers#api). If Vantage eventually provides support for one of your Custom Providers, you will be able to set up the official provider integration alongside your Custom Provider. 

## FinOps FOCUS Schema

FOCUS is an [open-source schema](https://focus.finops.org/) that standardizes cost and usage billing data across different cloud providers. When you add a Custom Provider in Vantage, you use a CSV template format that is a subset of the FOCUS schema. The fields in this template provide enough detail for Vantage to correctly render costs and perform cost allocation. With just the minimum required fields, Custom Providers costs are available with other Vantage features, such as anomaly alerts, report notifications, and forecasting.

## Review CSV Format {#format}

To create a Custom Provider in Vantage, create a CSV file for your data that uses the following format. Add your provider’s cost and usage data to the file. Note that there is a maximum of 10,000 rows allowed. Each time that you upload additional cost data, you will need to create a separate CSV file for that time period.

```
ChargePeriodStart,ChargeCategory,BilledCost,ResourceId,ResourceType,RegionId,ServiceCategory,ServiceName,Tags
2021-01-01,Usage,1.23,resource-id-1,cost_sub_category-1,us-east-1,service-category-1,service-name-1,"{""tag1"":""value1"",""tag2"":""value2""}"
```

Only the following fields are required:

- `ChargeCategory`
- `ChargePeriodStart`
- `BilledCost`
- `ServiceName`

:::note
If you want to upload amortized costs, then `ChargePeriodEnd` is also required.
:::

### Data Format {#data-format}

The following table provides details for each field within the template, as well as the Vantage representation on reports.

<table>
  <thead>
    <tr>
      <th>Column Name</th>
      <th>Required</th>
      <th>Vantage Representation</th>
      <th>Data Type</th>
      <th>FOCUS Column ID & Link</th>
      <th>Examples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>ChargePeriodStart</code></td>
      <td>Yes</td>
      <td>Start date of cost period</td>
      <td>Date in <code>YYYY-MM-DD</code> or ISO 601 format</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=charge%20period#modal-column-14370">ChargePeriodStart</a></code></td>
      <td><code>2024-08-25</code></td>
    </tr>
    <tr>
      <td><code>ChargePeriodEnd</code></td>
      <td>Only for amortized costs</td>
      <td>End date of cost period</td>
      <td>Date in <code>YYYY-MM-DD</code> or ISO 601 format</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=charge%20period#modal-column-14372">ChargePeriodEnd</a></code></td>
      <td><code>2024-08-25</code></td>
    </tr>
    <tr>
      <td><code>ChargeCategory</code></td>
      <td>No</td>
      <td><strong>Charge Type</strong> filter and grouping option</td>
      <td>Valid values are case-sensitive and include:<br/>- Credit<br/>- Refund<br/>- Discount<br/>- Tax<br/>- Usage</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=charge%20category#modal-column-14378">ChargeCategory</a></code></td>
      <td><code>Usage</code></td>
    </tr>
    <tr>
      <td><code>BilledCost</code></td>
      <td>Yes</td>
      <td>Cost that’s displayed</td>
      <td>Positive or negative number values accepted; dollar signs and decimal values are also acceptable</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=billed%20cost#modal-column-14212">BilledCost</a></code></td>
      <td><code>1245</code> or <code>-456</code> or <code>$1.23</code> or <code>-$1.23</code></td>
    </tr>
    <tr>
      <td><code>ResourceId</code></td>
      <td>No</td>
      <td><strong>Resource</strong> filter and grouping option</td>
      <td>Alphanumeric</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=resource%20id#modal-column-14475">ResourceId</a></code></td>
      <td><code>task/3</code> or <code>123456</code></td>
    </tr>
    <tr>
      <td><code>ResourceType</code></td>
      <td>No</td>
      <td><strong>Subcategory</strong> filter and grouping option</td>
      <td>Alphanumeric</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=resource%20type#modal-column-14479">ResourceType</a></code></td>
      <td><code>Large</code></td>
    </tr>
    <tr>
      <td><code>RegionId</code></td>
      <td>No</td>
      <td><strong>Region</strong> filter and grouping option</td>
      <td>Alphanumeric</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=region%20id#modal-column-14471">RegionId</a></code></td>
      <td><code>us-east-1</code></td>
    </tr>
    <tr>
      <td><code>ServiceCategory</code></td>
      <td>No</td>
      <td><strong>Category</strong> filter and grouping option</td>
      <td>Alphanumeric</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=service%20category#modal-column-14481">ServiceCategory</a></code></td>
      <td><code>Task</code></td>
    </tr>
    <tr>
      <td><code>ServiceName</code></td>
      <td>Yes</td>
      <td><strong>Service</strong> filter and grouping option</td>
      <td>Alphanumeric</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=service%20name#modal-column-14268">ServiceName</a></code></td>
      <td><code>Compute</code></td>
    </tr>
    <tr>
      <td><code>Tags</code></td>
      <td>No</td>
      <td><strong>Tags</strong> filter and grouping option</td>
      <td>Valid JSON object; array of key/value pairs</td>
      <td><code><a href="https://focus.finops.org/focus-columns/?prod_focus_columns%5Bquery%5D=tags#modal-column-14387">Tags</a></code></td>
      <td><code>{"{\"env\":\"production\"}"}</code></td>
    </tr>
  </tbody>
</table>

:::note
All costs are considered to be in USD. Please reach out to [support@vantage.sh](mailto:support@vantage.sh) if you have a need for this.
:::

## Upload Custom Provider File {#upload}

Custom Provider files can be uploaded at any time in the console. The above schema adds a timestamp based on the `ChargePeriodStart` column, so Vantage can place the data in the correct relationship to other costs under a Custom Provider. 

:::note
Users must have Owner permissions to upload Custom Provider files. If you prefer to use the API rather than the Vantage console, see the [API](/connecting_custom_providers#api) section below.
:::

1. Navigate to the [Integrations page](https://console.vantage.sh/settings/integrations) in Vantage.
2. Select **Custom Provider** and select the **Connect** tab.
3. Click **Select a File** and upload your formatted CSV file. 
4. Click **Upload Costs**. 
    1. If your CSV file contains any errors, the **Review** pop-up window is displayed and indicates where the error occurred. See the **Troubleshooting** section for details on specific errors. 
    2. For error-free files, a message is displayed that indicates your file is okay. Click **Review** to see the first 25 rows of uploaded data. 
    :::tip
    You can click **Select a File** again if you accidentally uploaded the wrong file.
    :::
5. Enter a **Name** for your Custom Provider. Optionally, enter a **Description**. As shown on the right of the screen, your Custom Provider is displayed as **Provider (custom)** in reports. In the below example, the **Name** of Cloudflare is displayed as **Cloudflare (custom)**.
6. Click **Create Custom Provider Integration**. 
7. The **Manage** integration screen is displayed. On this page, you can view all your connected Custom Providers. The **Provider ID** is also displayed, which you can use when referencing this Custom Provider on API calls. Click the **Settings** cog icon to the left of the ID.
8. The settings for the specific provider are displayed:
    - In the **Workspace Access** section, select which workspaces this integration is associated with. See the [Workspaces](https://docs.vantage.sh/workspaces#integration-workspace) documentation for information.
    - In the **Imports** section, you can view existing imports along with the date the file was imported and who imported the file. Click the trashcan icon next to an import if you want to remove it. If you delete a CSV, the corresponding data will be deleted from the provider. 

Costs will be ingested and processed as soon as you add the integration. It usually takes less than 15 minutes to ingest Custom Provider costs. Once costs are processed, they will be available on your **All Resources** Cost Report. Vantage aggregates uploaded Custom Provider costs to a daily level.

### Troubleshoot Custom Provider Uploads

When you upload a file that contains errors, the **Review** window displayed and shows the rows where errors were identified. The below example shows a file that has some errors, with all identified errors displayed at the top.


The first 25 rows are displayed. If you have an error in a row that’s not one of the first 25 rows, that row will be displayed at the top, along with all other errors. Some common errors are noted below.

<table>
  <thead>
    <tr>
      <th>Issue</th>
      <th>Description</th>
      <th>Solution</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Improper CSV format</td>
      <td>The file format is not a valid CSV or exceeds the 10,000-row limit.</td>
      <td>Ensure the file is a properly formatted CSV, with no more than 10,000 rows.</td>
    </tr>
    <tr>
      <td>Missing required fields</td>
      <td>One or more required fields (<code>ChargeCategory</code>, <code>ChargePeriodStart</code>, <code>BilledCost</code>, <code>ServiceName</code>) are missing or improperly formatted.<br/><br/>An error message noting which rows are missing required field values will be displayed in the <strong>Review</strong> window.</td>
      <td>Verify that all required fields are present and correctly formatted. See the <a href = "connecting_custom_providers#format">CSV Format</a> section for details.</td>
    </tr>
    <tr>
      <td>Invalid values</td>
      <td>The file contains invalid values, such as incorrect date formats, invalid numbers, or incorrect case-sensitive values for <code>ChargeCategory</code>.<br/><br/>An error message noting which rows contain invalid values will be displayed in the Review window.</td>
      <td>Double-check the data in your CSV to ensure dates are in <code>YYYY-MM-DD</code> format, numbers are valid, and <code>ChargeCategory</code> values match the allowed case-sensitive options (e.g., <code>Usage</code>, <code>Credit</code>). See the <a href="connecting_custom_providers#data-format">Data Format</a> table for details.</td>
    </tr>
    <tr>
      <td>Improper Vantage permissions</td>
      <td>The user attempting the upload does not have the proper permissions.</td>
      <td>Ensure you have Owner permissions to upload Custom Provider files. See the <a href="/rbac">Role-Based Access Control</a> documentation for details.</td>
    </tr>
    <tr>
      <td>Duplicate file names</td>
      <td>You attempt to upload a new costs import file that has the same name as a previous costs upload file.</td>
      <td>Ensure you need each CSV file that you upload something different (e.g., <code>cloudflare_costs_8_2024</code>, <code>cloudflare_costs_9_2024</code>).</td>
    </tr>
  </tbody>
</table>

#### Steps to Resolve File Issues

1. After you’ve identified the issues, reopen your CSV file, correct the errors, and save. 
2. On the Custom Provider upload screen, close the **Review** window, click **Select a File**, and upload the corrected version of your CSV file.
3. After a successful upload, a confirmation message is displayed. You can click **Review** to verify the first 25 rows of your uploaded data to ensure accuracy.
4. Follow steps 5–8 in the [Upload Custom Provider File](/connecting_custom_providers#upload) section to complete the upload process.

## View Custom Provider Costs in Vantage

Once you have uploaded Custom Provider costs, you can query these costs in other Vantage tools, like Cost Reports. Your Custom Provider will be included in the **Providers** list of [Cost Reports](/cost_reports), [Segments Reports](/segments), and [Saved Filters](/saved_filters). The Custom Provider is available in report filters. If you did not provide any information for a particular filter, 

## Add Additional Imports

After the initial costs import, you can add additional cost imports. 

:::caution Important
If you upload a file with the same name as an existing import, your new file will overwrite the original file. Ensure you have different names for each file upload (e.g., `cloudflare_costs_8_2024`, `cloudflare_costs_9_2024`)
::: 

1. Navigate to the [**Integrations** page](https://console.vantage.sh/settings/custom_providers). 
2. Select your Custom Provider. 
3. On the **Manage** tab, you can review all existing imported filenames. Ensure your new file has a different name. 
4. Click the **Import Costs** tab. Import your new cost file. Review any errors and correct as needed. Once uploaded, your file will be displayed within the **Imports** section of the **Manage** tab.

## Use the API to Add a Custom Provider {#api}

You can also use the API to create and upload costs for a Custom Provider. 

1. Send a `POST` request to the `/integrations/custom_costs` endpoint to create the Custom Provider.

    ```bash
    curl --request POST \
     --url https://api.vantage.sh/v2/integrations/custom_costs \
     --header 'accept: application/json' \
     --header 'authorization: Bearer AUTH_TOKEN' \
     --header 'content-type: application/json' \
     --data '
    {
      "name": "My Custom Provider",
      "description": "Costs for this provider"
    }
    '
    ```
2. On a successful `200` response, a Custom Provider `token` is returned.

    ```bash
    {
    "token": "<CUSTOM_PROVIDER_TOKEN>",
    "provider": "custom_costs",
    "account_identifier": "My Custom Provider from the API",
    "status": "connected",
    "workspace_tokens": [],
    "created_at": "2024-08-26T14:04:17Z"
    }
    ```
    
3. Use the `token` to upload a CSV file via the `/integrations/{integration_token}/costs.csv` endpoint.

    ```bash
    curl --request POST \
      --url https://api.vantage.sh/v2/integrations/<CUSTOM_PROVIDER_TOKEN>/costs.csv \
      --header 'accept: application/json' \
      --header 'authorization: Bearer TOKEN' \
      --header 'content-type: multipart/form-data' \
      --form csv='@vendor_costs.csv'
    ```

4. If there are any errors, the following `422` response is returned. Fix the errors in your CSV, and upload a new file. 

  ```bash
  {
    "errors": [
      "Row 1: ChargeCategory must be one of the following: Credit, Discount, Fee, Refund, Tax, or Usage",
      "Row 22: Tags must be a valid JSON object",
      "Row 27: BilledCost must be a valid number",
      "Row 31: ChargePeriodStart must be a valid date"
    ]
  }
  ```