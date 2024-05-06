---
id: budgets
title: Budgets
description: Create and assign budgets to Cost Reports to see how costs are trending for a service or business unit over time.
keywords:
  - Budgets
  - Budget alerts
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Budgets

You can create and assign a _budget_ to a Cost Report. Once a budget is assigned, it's easy to see how costs are trending for a particular service, business unit, or team. You can also create _budget alerts_ to alert you based on configurable thresholds.

## Create a Budget

:::tip
The below instructions describe how to manually create a budget. You can also upload a CSV file to create a budget. See the [section below](/budgets#upload) for details.
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Budgets**. All existing budgets are displayed. You can edit or delete budgets from this screen.
<details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="The Budgets landing page with three different budgets displayed. One budget has a month-to-date performance listed." width="100%" src="/img/budget-screen.png" />
    </div>
</details>
3. From the top right of the screen, click **New Budget**.
4. Enter a budget **Name** and click **Create Budget**.
5. A budget details page is displayed. Under **Assign to Cost Report or Segment**, select the report you want the budget to be displayed on. You can create **Budget Alerts** to assign once your budget is created. Any associated alerts will also be listed here. See the [section below](/budgets#create-alerts) for more details.
6. For **Budget Periods**, click **New Budget Period**. Budgets can have multiple budget periods, one for each month, with a specific amount for each period:
   - Enter a start date in **YYYY-MM** format (e.g., 2024-03).
   - Enter an optional period end date.
   - Enter a total monthly budget amount in dollars.
   - Click **New Budget Period** to add additional budget periods.
      <details><summary>Click to view example image</summary>
       <div style={{display:"flex", justifyContent:"center"}}>
           <img alt="The Budget creation screen with three different periods added to the budget." width="100%" src="/img/create-budget.png" />
       </div>
     </details>
7. At the top right, click **Save Changes**.
8. Select the **Performance** tab to see each budget period with a month-to-date performance of how the budget performed or is forecasted to perform.
<details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Performance of a budget across six periods with actual and forecasted performance displayed for each month." width="100%" src="/img/budget-performance.png" />
    </div>
</details>

:::note
Budgets are scoped to a report within a specific [workspace](/workspaces/), and access can be controlled via [teams](/rbac).
:::

## Upload a Budget {#upload}

If you have existing budgets in spreadsheets or another tool, you can import them all at once by uploading a CSV file.

### Expected Format {#expected-format}

Budget import files must adhere to the following requirements:

- The file must be in CSV format.
- The header row of the CSV must start with a unique string or identifier (e.g., `Budget Name`).
  - The remaining values in the header row must be the budget period start date in `YYYY-MM` format (e.g., `2023-02` for February 2023).
- Each additional row in the CSV must start with the name of the budget. Corresponding values must be expressed as decimals (e.g., `25000.00`) for every month where there is an associated budget. If there is no budget for a month, the value can be blank.

The below example shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Team 3 does not have a budget for 3/2024, and therefore, no budget period is added for Team 3 during that timeframe. On the import, the period start and end date are set based on the column headers.

<Tabs>
  <TabItem value="budget" label="Budget" default>
    <table>
        <tr>
        <th>Budget Name</th>
        <th>2024-01</th>
        <th>2024-02</th>
        <th>2024-03</th>
        </tr>
        <tr>
        <td>Team 1</td>
        <td>50000.00</td>
        <td>51000.00</td>
        <td>52000.00</td>
        </tr>
        <tr>
        <td>Team 2</td>
        <td>30000.00</td>
        <td>30000.00</td>
        <td>40000.00</td>
        </tr>
        <tr>
        <td>Team 3</td>
        <td>45000.00</td>
        <td>50000.00</td>
        <td></td>
        </tr>
    </table>
    </TabItem>
  <TabItem value="csv" label="CSV File">
    <pre><code>
    Budget Name,2024-01,2024-02,2024-03<br/>
    Team 1,50000.00,51000.00,52000.00<br/>
    Team 2,30000.00,30000.00,40000.00<br/>
    Team 3,45000.00,50000.00,
    </code></pre>
  </TabItem>
  <TabItem value="upload" label="Import Screen">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="An imported budget for three teams. The first two teams have three budget periods. The last team has only two budget periods imported." width="70%" src="/img/import-budget.png" />
    </div>
  </TabItem>
    <TabItem value="imported" label="Imported Budget">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Team 1, 2, and 3 budgets listed on the main Budgets screen." width="100%" src="/img/imported-budget.png" />
    </div>
  </TabItem>
</Tabs>

---

### Import Budget

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Budgets**.
3. From the top right of the screen, click **Import**. The **Import Budget Data** modal is displayed.
4. Click **Choose File** and select a CSV file.
5. Click **Upload**. The **Review Imported Errors** screen is displayed. If no errors are present, click **Confirm** > **OK**.

### Fix Import Errors

If a formatting error is found in your imported CSV file, the import wizard indicates where the error occurred. To fix the error, correct the issue in your source CSV and re-upload the file. In the below example, an error occurred because the CSV file contained duplicate values in the header row.

<Tabs>
    <TabItem value="error" label="Error Screen">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Budget import errors" width="80%" src="/img/budget-error.png" />
    </div>
    </TabItem>
    <TabItem value="csv" label="Source CSV File">
        <pre><code>
        Budget Name,2024-01,2024-03,2024-03<br/>
        Team 1,50000.00,51000.00,52000.00,
        </code></pre>
    </TabItem>
</Tabs>

---

Use the following troubleshooting suggestions to check for errors in your CSV file:

- Ensure there are no additional blank columns in the CSV file.
- Ensure that each budget name is unique.
- Ensure the dates in the header row are in the correct format (i.e., `YYYY-MM`).
- Ensure values do not include other characters and are in decimal format (e.g., `56000.00`, not `$56,000.00`).

## View Budgets on Cost Reports

Once a budget is assigned to a [Cost Report](/cost_reports/), a budget report with month-to-date performance is displayed at the top of the Cost Report. The budget reflects amortized costs throughout the month, indicating whether the spending is above or below the budget month to date.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A budget is displayed as a trend line on the Cost Report in the console" width="100%" src="/img/cost-report-budget.png" />
</div>

Budgets are displayed as a yellow line on the graph in the cumulative, daily, weekly, and monthly views on a Cost Report. The dotted portion of the line corresponds to the forecasted future budget, generated using a time-series model, which you can track against your forecasted costs.

:::note
The following note applies to budgets on Cost Reports:

- If you select the **Weekly** view, you may see the budget line dip for the first and last week of the month. This is because budgets are metered per day

:::

## Create Budget Alerts {#create-alerts}

Budget alerts are automated alerts based on configurable budget thresholds. Create a budget alert for any of your existing budgets to notify you when a percentage of a budget is exceeded for a designated period. You can configure alerts to notify Vantage users via email, Slack, or Microsoft Teams channels. Periods can be set before or after a certain number of days into the month (e.g., “10 days from the start of the month”).

:::note
If you want to send alerts to Slack or Microsoft Teams, see the report notifications documentation for information on how to set up a [Slack](/report_notifications#slack) or [Microsoft Teams](/report_notifications#ms-teams) integration with Vantage. Once you've set up an integration, follow the steps below to set up a budget alert.
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Budget Alerts**.
3. At the top, click **Configure Alert**.
4. The **New Budget Alert** modal is displayed. Configure the following parameters:
   - For **Budget**, select the budget for which the alert applies.
   - For **If Costs Exceed**, select a percentage threshold (e.g., 85% of the budget). You'll receive an alert only if the threshold is reached.
   - Optionally, enter a period of observation within the month (e.g., “10 days from the start of the month” or “5 days before the end of the month").
   - For **Email recipients**, select recipients, who are members of your team in Vantage, you want to receive the alert.
   - Optionally, select any Slack or Microsoft Teams channels you want to receive the alert.
   <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="A budget alert configured to send to one user and a Slack team 10 days before the end of the month." width="50%" src="/img/configure-budget-alert.png" />
    </div>
    </details>
5. Click **Save**. Budget alerts will look similar to the below image.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Email budget alert" width="60%" src="/img/email-budget-alert.png" />
</div>

Recipients will be notified immediately after a Cost Report is updated with the latest data. Reports are updated with the latest data at least once per day. If your budget exceeds the threshold for multiple alerts, you'll be notified only about the most severe alert (the alert with the highest threshold).

### Budget Alert Limitations

At this time, only dynamic, percentage-based thresholds are supported. Budget alerts can be configured only to send alerts based on actual, not forecasted costs.

:::note
A single cost increase will not typically trigger a budget alert. If you are interested in this feature, see the [Cost Anomaly Alerts](/cost_anomaly_alerts) documentation.
:::

Because a budget is defined for a month, you can only be alerted based on the budget amount for the _entire_ month instead of the month to date. As a workaround, configure the **Within** option on the alert (e.g., "10 days from the start of the month") to mimic this behavior.

### Budget Alerts and Cost Reports

If you update a Cost Report that is associated with a budget alert, the following message is displayed: _This report has budget alerts and may trigger a notification. Are you sure you want to save the report?_ You must confirm before saving the report.
