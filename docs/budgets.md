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
import ReactPlayer from 'react-player';

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
  - Each parent budget aggregates the budget periods of its child budgets. If a child budget has no allocated budget for a specific period, that period contributes nothing to the parent’s total.
  - A Hierarchical Budget can be converted into a single-level Standard Budget. This action breaks the connection between the parent and child budgets in the hierarchy.
  - A child budget can be used only once within a given hierarchy.
    - _Example: You create a hierarchy with a parent budget for the "Marketing Organization" and child budgets for "Social Media Campaigns," "Event Marketing," and "Content Creation." The child budget for "Social Media Campaigns" cannot also appear under "Event Marketing" within the same hierarchy to avoid duplication in budget calculations._
  - A child budget can belong to multiple separate hierarchies. 
    - _Example: Suppose your organization is structured both by departments and projects. A child budget for "Mobile App Redesign" might belong to the "Product Development" department’s hierarchy, while also appearing in a completely separate hierarchy for cross-functional "Q1 Strategic Initiatives." This allows you to manage and report on budgets across different organizational contexts._

## Budgets Screen

To access the main **Budgets** screen in the console:
- From the top navigation, click **Financial Planning**.
- On the left navigation, select **Budgets**. 

All existing budgets are displayed here. You can also edit or delete budgets from this screen. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Budgets landing page with three different budgets displayed. One budget has a month-to-date performance listed." width="100%" src="/img/budget-screen.png" />
</div>

The main **Budgets** screen provides the following information:

- Each budget is displayed with a link to the budget's configuration screen.
- Any hierarchical budgets with corresponding child budgets include the hierarchy icon to the left of the budget's name. In the example above, _Infrastructure Dept_, _Engineering Org_, and _Development Dept_ are all considered hierarchical budgets with corresponding child budgets.
- The **Cost Report** column indicates the corresponding attached Cost Report. Only terminal child budgets can be associated with a Cost Report.
- **MTD Budget** represents the prorated budget allocation for the month based on the number of days elapsed.
  - For hierarchical budgets, this value is the sum of the MTD Budgets of all child budgets.
  - For example, if the monthly budget for _Cost Optimization Task_ is $40,000 and today is February 11, then 11 days have elapsed out of 28. **The MTD Budget** is calculated as:

  $$
  \frac{11}{28} \times \$40,000 = \$15,714.29
  $$

- The **MTD Performance** column shows the percentage of actual spend relative to the MTD Budget, helping indicate whether spending is over or under budget for the month to date.

## Create a Budget: UI Method

:::note
The below instructions describe how to manually create a budget in the UI. You can also upload a CSV file to create a budget. See the [section below](/budgets#upload) for details.
:::

1. Begin on the main **Budgets** screen. From the top right of the screen, click **New Budget**.
2. Enter a budget **Name** and click **Create Budget**.
3. The budget details page is displayed. For **Budget Type**, select either **Standard Budget** or **Hierarchical Budget**. The options displayed differ for either budget type.

  <Tabs>
    <TabItem value="standard-budget-steps" label="Standard Budget" default>
      <ul>
        <li>Under <b>Assign to Cost Report or Segment</b>, select the report you want the budget to be displayed on. See the <a href="/budgets#view-budgets-on-cost-reports">section below</a> for details. <br/>
        <i>Note: Budgets are scoped to a report within a specific <a href="/workspaces/">workspace</a>, and access can be controlled via <a href="/rbac">teams</a>.</i>
        </li>
        <li>For <b>Budget Alerts</b>, you can optionally assign alerts once your budget is created. Any existing alerts will also be listed here. See the <a href="/budgets#create-alerts">section below</a> for more details.</li>
        <li>For <b>Budget Periods</b>, click <b>New Budget Period</b>. Standard Budgets can have multiple budget periods, one for each month, with a specific amount for each period:
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
      <p><i>Tip: To create a budget hierarchy, it’s recommended to start by creating all your terminal child budgets as <b>Standard</b> budgets. Once the child budgets are in place, you can proceed to create the parent budgets. This ensures that the child budgets are available to select and connect when setting up the parent budget.</i></p>
      <ul>
        <li>For <b>Budget Alerts</b>, you can optionally assign alerts once your budget is created. Any existing alerts will also be listed here. See the <a href="/budgets#create-alerts">section below</a> for more details.</li>
        <li>Under <b>Child Budgets</b>, select the immediate child budgets that directly roll up to this parent budget. For example, if you have an "Org" budget with a "Department" budget as its child, and the "Department" budget has a "Team" budget as its child, you would only select the "Department" budget as the child when creating the "Org" budget.
          <details><summary>Click to view example image</summary>
            <div style={{display:"flex", justifyContent:"center"}}>
              <img alt="The Budget creation screen with three different periods added to the budget." width="100%" src="/img/create-hierarchical-budget.png" />
            </div>
          </details>
        </li>
      </ul>
      <p>The <b>Assign to Cost Report or Segment</b> section is not displayed for Hierarchical Budgets. You also cannot configure any separate budget periods and budget amounts for this budget type. You can configure these options only for terminal child budgets.</p>
    </TabItem>
  </Tabs>

  ---

1. At the top right, click **Save Changes**.

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

The below example of three Standard Budgets shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Team 3 does not have a budget for 2024-03, and therefore, no budget period is added for Team 3 during that timeframe. On the import, the period start and end date are set based on the column headers.

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
    <TabItem value="imported" label="Imported Budgets">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Team 1, 2, and 3 budgets listed on the main Budgets screen." width="100%" src="/img/imported-budget.png" />
    </div>
  </TabItem>
</Tabs>

#### Hierarchical Budget Format

The below example of a Hierarchical Budget shows a readable view, CSV file format, the budget import screen, and the final budget in Vantage. Note that the parent budgets—Engineering Org, Development Dept, and Infrastructure Dept—do not have any amounts listed since these budgets are composed of the corresponding child budgets—Frontend Redesign, Backend Refactor, New Cloud Environment, and Cost Optimization Task. The associated next-level parent is listed in the `Parent Budget` column. 

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
    <TabItem value="imported" label="Imported Budgets">
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Team 1, 2, and 3 budgets listed on the main Budgets screen." width="100%" src="/img/imported-hierarchical-budget.png" />
    </div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <p><i>Observe the Hierarchical Budget icon listed next to any parent budget (e.g., Engineering Org) in the list.</i></p>
    </div>
  </TabItem>
</Tabs>

---

### Import Budget

Once your CSV file is prepared, follow the steps below to import any type of budget.

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
- Confirm that the budget name does not already exist in Vantage. If it does, you will be prompted to overwrite the existing budget with the newly uploaded one.
  - If you want to overwrite an existing budget, select the **Overwrite budget periods** option at the top and confirm. Any budgets with the same name will be replaced with the data from your new file.
  <details><summary>Click to view example image</summary>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div style={{ 
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
          borderRadius: "10px", 
          width: "100%",
          overflow: "hidden" 
      }}>
      <ReactPlayer 
          playing 
          muted 
          playsinline
          loop
          url='/img/budget-overwrite.mp4'
          alt="Overwriting an existing budget in the import UI." 
          width="100%"
          height="100%"
      />
      </div>
    </div>
  </details>
- Ensure the dates in the header row are in the correct format (i.e., `YYYY-MM`).
- Values cannot include other characters and can be in decimal format (e.g., `56000.00` or `56000`, not `$56,000.00`).
- For Hierarchical Budgets:
  - Ensure that parent budgets do not have any amounts listed in any of the budget periods columns. Budget amounts should be provided only for terminal child budgets.
  - Any budget listed in the `Parent Budget` column should already be present in Vantage or defined within your current CSV file. 
  - A child budget can be used only once within a given hierarchy.

## View Budget Performance and Hierarchy

For any budget type, you can view both the **Performance** and **Hierarchy** tabs to get an understanding of how the budget is performing and see any corresponding child budgets (if relevant). 

### Budget Performance

Select the **Performance** tab to see each budget period with a month-to-date performance of how the budget performed or is forecasted to perform. The details on this screen will vary depending on whether you are viewing a parent budget or a terminal child budget.

#### Parent Budget Performance {#parent-performance}

Each child budget is listed in the table along with its **Budgeted Spend** (total budgeted spend for that month) for a given month and the **Actual Spend** (either the amount spent in a previous month or the current plus forecasted spend for the current month). If the **Actual Spend** exceeds the **Budgeted Spend**, the value is highlighted red. 

In the example below, _Infrastructure Dept_ is a parent budget with the following two child budgets.

| Budget Name              | 2024-12  | 2025-01  | 2025-02  |
|--------------------------|----------|----------|----------|
| New Cloud Environment   | $60,000   |          |          |
| Cost Optimization Task  |          | $30,000   | $40,000   |

<div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Performance of a budget across various periods with actual and forecasted performance displayed for each month." width="100%" src="/img/budget-performance.png" />
</div>

At the top of the tab, the following values are displayed:

- **MTD Budget:** The total budget accrued for the month up to the current date. For the _Infrastructure Department_, only $40,000 was budgeted for the month of February (the _New Cloud Environment Task_ has no February budget). For this example, it is February 18th, so then the **MTD Budget** is calculated as:

  $$
  \frac{18}{28} \times \$40,000 = \$25,714.29
  $$

- **MTD Spend:** This is the total amount spent for the month so far across all listed budgets. 
- **Total Budget:** This is the total amount that's been budgeted to date, prorated for the current month. In the example above, this is calculated as follows: 

$$
\$60,000 \, (\text{December New Cloud Environment budget}) + \$30,000 \, (\text{January Cost Optimization Task budget}) \\
+ \left( \frac{18}{28} \times \$40,000 \, (\text{Prorated February Cost Optimization Task budget}) \right) = \$115,714.29
$$

- **Actual Spend:** The total amount spent to date across both child budgets, including all expenditures—even for months when no budget was allocated. In this example, it covers all spend from December 1 to February 18 for both the _New Cloud Environment_ and _Cost Optimization Task_ budgets.

Navigate to the Cost Report that's associated with any child budget to view the actual spend. In the example presented before, on the **Performance** tab, the **Actual Spend** for February was $43,544.19 for the _Cost Optimization Task_ child budget. Since the month is not yet complete in this case, the **Actual Spend** includes the forecasted spend for the entire month, as illustrated in the image below.
<div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Forecasted spend for the month." width="100%" src="/img/forecasted-spend.png" />
</div>

#### Child Budget Performance

On a budget with no associated children budgets, the **Performance** tab displays the following information.

<div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Forecasted spend for the month." width="100%" src="/img/child-budget-performance.png" />
</div>

- The monthly budgeted amount is shown alongside the percentage by which actual spend is over or under budget. In the example above, the January budget was $30,000, while actual spend totaled $30,099.97—exceeding the budget by 0.33%. For ongoing months, the actual spend percentage is calculated using forecasted costs.
- The header provides the following information:
  - **Accrued Costs:** Total accrued costs for the current month. 
  - **Performance (MTD):** The percentage by which the accrued budget is over or under the total accrued costs for the month. In this example, the accrued costs for the month are **\$30,678.50**, while the accrued budget is **\$25,714.29** (calculated as $\frac{18}{28} \times \$40,000$, since it is February 18). The performance is **19.31%** over budget, calculated as:  

    $$
    \frac{\$30,678.50 - \$25,714.29}{\$25,714.29} \times 100 = 19.31\%
    $$
  
  - **Accrued Costs (YTD):** Total accrued costs from January 1 to the current date.
  - **Performance (YTD):** Calculated just like **Performance (MTD)** but takes into account all accrued costs from January 1 to present.

### Budget Hierarchy

On the **Hierarchy** tab, a graph is displayed that provides a time-series view of **Actual Spend** and **Total Budget**. The details provided on this screen are the same for parent and child budgets.

- On the header, the same values are displayed that are on the [**Performance** tab](/budgets#parent-performance).
- Hover over a point on the graph to see a point-in-time view of the cumulative budget, actual spend, and the difference between the two values. 
- In the table, if the budget is a parent budget in the hierarchy, any immediate child budgets are listed along with their related performance. You can click the link for any listed child budget to move to the **Hierarchy** screen for that particular child budget.
- The following information is provided in the table below the chart:
  - **MTD Budget:** The prorated budget accrued for the month.
  - **MTD Spend:** The total amount spent for the month.
  - **MTD Performance:** The percentage by which the accrued budget is over or under the total accrued costs for the month.
  - **Total Budget:** This is the total amount that's been budgeted to date, prorated for the current month.
  - **Actual Spend:** The total amount spent to date—even for months when no budget was allocated.
  - **Performance:** The percent the **Actual Spend** is over or under the **Total Budget**.
  :::tip
  Many of these values mirror what you see on the **Performance** tab. See the [Performance section](/budgets#parent-performance) for detailed calculations.
  :::

In the below visual example, the **Hierarchy** tab is displayed for the parent budget, _Engineering Org_. The user navigates to the child budget, _Infrastructure Dept_ and then to the terminal child budget, _New Cloud Environment_. Each parent budget lists all of its corresponding child budgets. On this tab, the graph provides a cumulative view, showing the total budget and actual spend for all connected child budgets. For the terminal _New Cloud Environment_ budget, note that no budget was allocated beyond October. As a result, the graph line stops at October, reflecting the lack of data for subsequent months.

  <div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='/img/budget-hierarchy.mp4'
        alt="Traversing through a budget hierarchy" 
        width="100%"
        height="100%"
    />
    </div>
  </div>

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

Budget alerts are automated alerts based on configurable budget thresholds. Create a budget alert for any of your existing budgets to notify you when a percentage of a budget is exceeded for a designated period. You can configure alerts to notify Vantage users via email, Slack, Microsoft Teams, or Jira. Periods can be set before or after a certain number of days into the month (e.g., “10 days from the start of the month”). 

You can create budget alerts for any type of budget—Standard or Hierarchical. For Hierarchical Budgets, the costs associated with the child budgets are aggregated at the parent budget level to determine if a budget alert should be set off.

:::note
If you want to send alerts to Slack, Microsoft Teams, or Jira, see the [Slack](/slack), [Microsoft Teams](/microsoft_teams), or [Jira](/jira) integration documentation. Once you've set up an integration, follow the steps below to set up a budget alert.
:::

1. From the top navigation, click **Financial Planning**.
2. On the left navigation, select **Budget Alerts**.
3. At the top, click **Configure Alert**.
4. The **New Budget Alert** modal is displayed. Configure the following parameters:
   - For **Budget**, select the budget for which the alert applies.
   - For **If Costs Exceed**, select a percentage threshold (e.g., 85% of the budget). You'll receive an alert only if the threshold is reached.
   - Optionally, enter a period of observation within the month (e.g., "10 days from the start of the month" or "5 days before the end of the month").
   - For **Email recipients**, select recipients, who are members of your team in Vantage, you want to receive the alert.
   - Optionally, select any Slack channels, Microsoft Teams channels, or Jira projects you want to receive the alert.
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

An [annotation](/annotations) is also added to the corresponding Cost Report on the date the alert was triggered.

### Budget Alert Limitations

At this time, only dynamic, percentage-based thresholds are supported. Budget alerts can be configured only to send alerts based on actual, not forecasted costs.

:::note
A single cost increase will not typically trigger a budget alert. If you are interested in this feature, see the [Cost Anomaly Alerts](/cost_anomaly_alerts) documentation.
:::

Because a budget is defined for a month, you can only be alerted based on the budget amount for the _entire_ month instead of the month to date. As a workaround, configure the **Within** option on the alert (e.g., "10 days from the start of the month") to mimic this behavior.

### Budget Alerts and Cost Reports

If you update a Cost Report that is associated with a budget alert, the following message is displayed: _This report has budget alerts and may trigger a notification. Are you sure you want to save the report?_ You must confirm before saving the report.
