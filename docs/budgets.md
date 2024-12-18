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

:::tip
To get started with budgets, you can also view video demos on [Vantage University](/vantage_university_budgeting) 🎓.
:::

## Budget Types

In Vantage, you can create either _Standard_ or _Hierarchical_ budgets:

### Standard Budget

This type of budget has one level that may have multiple time periods associated with it. For example, you could use this type of budget to track costs for a single department or project.

### Hierarchical Budget

This type of budget is composed of multiple child budgets that roll up to a parent budget.

- For example, an application team can create individual budgets for AWS, Azure, and Databricks usage and then create a single budget for their application that combines all three of these children budgets. If the AWS budget changes, the parent application budget is automatically updated. 
- Similarly, the organization’s FinOps team can consolidate multiple AWS budgets from various teams into a single, comprehensive parent budget to measure all AWS spend.

Hierarchical Budgets have the following characteristics:

  - You can create a budget hierarchy with a maximum of 10 levels.
  - Each parent budget will sum all budget periods of child budgets. If a child budget does not have any budget during a particular period, it will not add any budget to the parent’s budget period.
  - A Hierarchical Budget can be converted into a single-level Standard Budget. This action breaks the connection between the parent and child budgets in the hierarchy.
  - A child budget can be used only once within a given hierarchy.
    - _Example: You create a hierarchy with a parent budget for the "Marketing Organization" and child budgets for "Social Media Campaigns," "Event Marketing," and "Content Creation." The child budget for "Social Media Campaigns" cannot also appear under "Event Marketing" within the same hierarchy to avoid duplication in budget calculations._
  - A child budget can belong to multiple separate hierarchies. 
    - _Example: Suppose your organization is structured both by departments and projects. A child budget for "Mobile App Redesign" might belong to the "Product Development" department’s hierarchy while also appearing in a completely separate hierarchy for cross-functional "Q1 Strategic Initiatives." This allows you to manage and report on budgets across different organizational contexts._

## Create a Budget: UI Method

:::note
The below instructions describe how to manually create a budget in the UI. You can also upload a CSV file to create a budget. See the [section below](/budgets#upload) for details.
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
5. The budget details page is displayed. For **Budget Type**, select either **Standard Budget** or **Hierarchical Budget**. The options displayed will differ for either budget type.

<Tabs>
  <TabItem value="standard-budget-steps" label="Standard Budget" default>
    <ul>
      <li>Under <b>Assign to Cost Report or Segment</b>, select the report you want the budget to be displayed on.</li>
      <li>For <b>Budget Alerts</b>, you can optionally assign alerts once your budget is created. Any associated alerts will also be listed here. See the <a href="/budgets#create-alerts">section below</a> for more details.</li>
      <li>For <b>Budget Periods</b>, click <b>New Budget Period</b>. Budgets can have multiple budget periods, one for each month, with a specific amount for each period:
        <ul>
          <li>Enter a start date in <b>YYYY-MM</b> format (e.g., 2024-03).</li>
          <li>Enter an optional period end date.</li>
          <li>Enter a total monthly budget amount in dollars.</li>
          <li>Click <b>New Budget Period</b> to add additional budget periods.</li>
          <details><summary>Click to view example image</summary>
            <div style={{display:"flex", justifyContent:"center"}}>
            <img alt="The Budget creation screen with three different periods added to the budget." width="100%" src="/img/create-budget.png" />
            </div>
          </details>
        </ul>
      </li>
    </ul>
  </TabItem>
  <TabItem value="hierarchical-budget-steps" label="Hierarchical Budget">
    <p>The <b>Assign to Cost Report or Segment</b> is not displayed for Hierarchical Budgets. You also cannot configure any separate budget periods and budget amounts for this budget type. This is configured only for child budgets. For this budget type, from this screen, you can configure the hierarchy.</p>
    <div class="theme-admonition theme-admonition-tip alert alert--success admonition_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><div class="admonitionHeading_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><span class="admonitionIcon_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><svg viewBox="0 0 12 16"><path fill-rule="evenodd" d="M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"></path></svg></span>tip</div><div class="admonitionContent_node_modules-@docusaurus-theme-classic-lib-theme-Admonition-styles-module"><p>One suggested workflow is to create all your terminal child budgets first as <b>Standard</b> budgets and then create your parent budgets.</p></div></div>
    <ul>
      <li>For <b>Budget Alerts</b>, you can optionally assign alerts once your budget is created. Any associated alerts will also be listed here. See the <a href="/budgets#create-alerts">section below</a> for more details.</li>
      <li>Under <b>Child Budgets</b>, select the corresponding next-level children budgets that roll up to this parent budget.
        <details><summary>Click to view example image</summary>
          <div style={{display:"flex", justifyContent:"center"}}>
            <img alt="The Budget creation screen with three different periods added to the budget." width="100%" src="/img/create-hierarchical-budget.png" />
          </div>
        </details>
      </li>
    </ul>
  </TabItem>
</Tabs>

---

6. At the top right, click **Save Changes**.

:::note
Budgets are scoped to a report within a specific [workspace](/workspaces/), and access can be controlled via [teams](/rbac).
:::

## Create a Budget: CSV Import Method {#upload}

If you have existing budgets in spreadsheets or another tool, you can import them all at once by uploading a CSV file.

### Expected Format {#expected-format}

Budget import files must adhere to the following requirements:

- The file must be in CSV format.
- The header row of the CSV must start with a unique string or identifier (e.g., `Budget Name`).
  - The remaining values in the header row must be the budget period start date in `YYYY-MM` format (e.g., `2023-02` for February 2023).
- Each additional row in the CSV must start with the name of the budget. Corresponding values must be expressed as decimals (e.g., `25000.00`) for every month with an associated budget. If there is no budget for a month, the value can be blank.
- If the budget is a Hierarchical Budget, include the `Parent Budget` column.

#### Standard Budget Format

The below example of a Standard Budget shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Team 3 does not have a budget for 3/2024, and therefore, no budget period is added for Team 3 during that timeframe. On the import, the period start and end date are set based on the column headers.

<Tabs>
  <TabItem value="standard-budget" label="Standard Budget" default>
    <table>
        <tr>
        <th>Budget Name</th>
        <th>2024-01</th>
        <th>2024-02</th>
        <th>2024-03</th>
        </tr>
        <tr>
        <td>Team 1</td>
        <td>50000</td>
        <td>51000</td>
        <td>52000</td>
        </tr>
        <tr>
        <td>Team 2</td>
        <td>30000</td>
        <td>30000</td>
        <td>40000</td>
        </tr>
        <tr>
        <td>Team 3</td>
        <td>45000</td>
        <td>50000</td>
        <td></td>
        </tr>
    </table>
    </TabItem>
  <TabItem value="csv" label="CSV File">
    <pre><code>
    Budget Name,2024-01,2024-02,2024-03<br/>
    Team 1,50000,51000,52000<br/>
    Team 2,30000,30000,40000<br/>
    Team 3,45000,50000,
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

#### Hierarchical Budget Format

The below example of a Hierarchical Budget shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Note that the parent budgets—Engineering Org, Development Dep, and Infrastructure Dep—do not have any costs listed since these budgets are composed of the corresponding child budgets. The associated parent is listed in the `Parent Budget` column. 

<Tabs>
  <TabItem value="hierarchical-budget" label="Hierarchical Budget" default>
    <table>
      <thead>
        <tr>
          <th>Budget Name</th>
          <th>Parent Budget</th>
          <th>2024-10</th>
          <th>2024-11</th>
          <th>2024-12</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Engineering Org</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Development Dept</td>
          <td>Engineering Org</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Infrastructure Dept</td>
          <td>Engineering Org</td>
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Frontend Redesign</td>
          <td>Development Dept</td>
          <td>30000</td>
          <td>35000</td>
          <td></td>
        </tr>
        <tr>
          <td>Backend Refactor</td>
          <td>Development Dept</td>
          <td>40000</td>
          <td></td>
          <td>50000</td>
        </tr>
        <tr>
          <td>New Cloud Environment</td>
          <td>Infrastructure Dept</td>
          <td>60000</td>
          <td></td>
          <td></td>
        </tr>
        <tr>
          <td>Cost Optimization Task</td>
          <td>Infrastructure Dept</td>
          <td></td>
          <td>30000</td>
          <td>40000</td>
        </tr>
      </tbody>
    </table>
    </TabItem>
  <TabItem value="csv-hierarchical" label="CSV File">
    <pre><code>
    Budget Name,Parent Budget,2024-10,2024-11,2024-12<br/>
    Engineering Org,,,<br/>
    Development Dept,Engineering Org,,,<br/>
    Infrastructure Dept,Engineering Org,,,<br/>
    Frontend Redesign,Development Dept,30000,35000,<br/>
    Backend Refactor,Development Dept,40000,,50000<br/>
    New Cloud Environment,Infrastructure Dept,60000,,<br/>
    Cost Optimization Task,Infrastructure Dept,,30000,40000<br/>
    </code></pre>
  </TabItem>
  <TabItem value="upload" label="Import Screen">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="An imported budget for three teams. The first two teams have three budget periods. The last team has only two budget periods imported." width="70%" src="/img/import-hierarchical-budget.png" />
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <p><i>Sample of what's displayed on import screen.</i></p>
    </div>
  </TabItem>
    <TabItem value="imported" label="Imported Budget">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Team 1, 2, and 3 budgets listed on the main Budgets screen." width="100%" src="/img/imported-hierarchical-budget.png" />
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

- There should be no additional blank columns in the CSV file.
- Ensure that each budget name is unique.
- Check that budget name does not already exist in Vantage. Otherwise, you will be prompted to overwrite the existing budget with your new budget.
- Ensure the dates in the header row are in the correct format (i.e., `YYYY-MM`).
- Values cannot include other characters and should be in decimal format (e.g., `56000.00`, not `$56,000.00`).
- For Hierarchical Budgets:
  - Ensure that parent budgets do not have any numbers listed in any of the budget periods columns. Budget numbers should be provided only for terminal child budgets.
  -Any budget listed in the `Parent Budget` column should be already in Vantage or defined within your current CSV file. 
  - A child budget can be used only once within a given hierarchy.

## View Budget Performance and Hierarchy

For any budget type, you can view both the **Performance** and **Hierarchy** tabs to get an understanding of how the budget is performing and see any corresponding child budgets (if relevant). 

### Budget Performance

Select the **Performance** tab to see each budget period with a month-to-date performance of how the budget performed or is forecasted to perform.
<details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Performance of a budget across six periods with actual and forecasted performance displayed for each month." width="100%" src="/img/budget-performance.png" />
    </div>
</details>

### Budget Hierarchy

## View Budgets on Cost Reports

Once a budget is assigned to a [Cost Report](/cost_reports/), a budget report with month-to-date performance is displayed at the top of the Cost Report. The budget reflects amortized costs throughout the month, indicating whether the spending is above or below the budget month to date.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A budget is displayed as a trend line on the Cost Report in the console" width="100%" src="/img/cost-report-budget.png" />
</div>

Budgets are displayed as a yellow line on the graph in the cumulative, daily, weekly, and monthly views on a Cost Report. The dotted portion of the line corresponds to the future budget, which you can track against your forecasted costs.

:::note
If you select the **Weekly** view, you may see the budget line dip for the first and last week of the month. This is because budgets are metered per day.
:::

## Create Budget Alerts {#create-alerts}

Budget alerts are automated alerts based on configurable budget thresholds. Create a budget alert for any of your existing budgets to notify you when a percentage of a budget is exceeded for a designated period. You can configure alerts to notify Vantage users via email, Slack, or Microsoft Teams channels. Periods can be set before or after a certain number of days into the month (e.g., “10 days from the start of the month”). 

You can create budget alerts for any type of budget—Standard or Hierarchical. For Hierarchical Budgets, the costs associated with the child budgets are aggregated at the parent budget level to determine if a budget alert should be set off.

:::note
If you want to send alerts to Slack or Microsoft Teams, see the report notifications documentation for information on how to set up a [Slack](/report_notifications#slack) or [Microsoft Teams](/report_notifications#ms-teams) integration with Vantage. Once you've set up an integration, follow the steps below to set up a budget alert.
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Budget Alerts**.
3. At the top, click **Configure Alert**.
4. The **New Budget Alert** modal is displayed. Configure the following parameters:
   - For **Budget**, select the budget for which the alert applies.
   - For **If Costs Exceed**, select a percentage threshold (e.g., 85% of the budget). You'll receive an alert only if the threshold is reached.
   - Optionally, enter a period of observation within the month (e.g., "10 days from the start of the month" or "5 days before the end of the month").
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
