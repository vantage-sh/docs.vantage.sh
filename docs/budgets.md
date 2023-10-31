# Budgets

Vantage users can create and assign a Budget to a Cost Report. Once a budget is assigned, it is easy to see how costs are trending for a particular service, business unit or team compared to their prescribed budget.

![Example Budget](/img/budgets.png)

To create a budget, head to the [Budgets](https://console.vantage.sh/financial_planning/budgets) tool in the console. Budgets are scoped to a specific [workspace](/workspaces/), and access can be controlled via Teams.

## Budget Alerts

Budget Alerts are automated alerts based on configurable budget thresholds. From the [Budget Alerts page](https://console.vantage.sh/financial_planning/budgets/budget_alerts), you can add thresholds to one or more Budgets by clicking “Configure Alert”. Alerts can be configured to send to [Slack](/slack_integration) channels, Email, or [Teams](/microsoft_teams_integration) channels given a percentage of budget exceeded for a specific time period. Time periods can be set before or after a number of days into the month (e.g. “10 days from the start of the month”).

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Email budget alert" width="60%" src="/img/email-budget-alert.png" />
</div>

Recipients will be notified immediately after a [Cost Report](/cost_reports) is updated with the latest data. Reports are updated with the latest data at least once per day. If your Budget exceeds the threshold for multiple alerts, we will only notify you of the most severe alert (the alert with the highest threshold).

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Configure budget alert" width="60%" src="/img/configure-budget-alert.png" />
</div>

Configuring a budget alert consists of setting the following:

- An assignment to one or more Budgets
- A percentage threshold. e.g. 85% or 110%
- Optionally, a period of observation within the month. For example, e.g. “10 days from the start of the month” or “5 days before the end of the month.”
- A list of recipients which can include emails and/or Slack or Microsoft Teams channels

### Limitations of Alerts

At this time only dynamic, percentage based, thresholds are supported. Budget Alerts can only be configured to alert off of actual, not forecasted costs. A single cost increase will not necessarily trigger a budget alert. For this functionality, refer to [Anomaly Detection](/cost_anomaly_alerts).

Since a Budget is defined for a month, you can only be alerted based off of the budget amount for the entire month instead of month-to-date. You can use the time periods ("10 days from the start of the month") during Budget Alert configuration to mimic similar behavior by combining different percentage thresholds with time periods.

### Budget Alerts and Cost Reports

If the Cost Report you’re saving has budget alerts attached to it, we will ask you to confirm before saving the report. When changing the Budget Alert form you will be notified which budgets will be triggered by the pending changes.

## Importing Budgets

If you have existing budgets in spreadsheets or another tool you can import them all at once by uploading a CSV file. Click the upload icon next to "New Budget" to get started.

### Expected Format

An imported budget should be a CSV that contains a header row in which the first value is a unique string or identifier and all subsequent values are a month in the format of “YYYY-MM” (e.g. 2023-02 for February 2023). Every subsequent row in the CSV is the name of the budget and values expressed as decimals for every month there is a budget present for. An example format is shown below.

| Budget Name | 2023-02  | 2023-03  | 2023-04  | 2024-05  | 2024-06  |
| ----------- | -------- | -------- | -------- | -------- | -------- |
| team1       | 20000.00 | 25000.00 | 30000.00 | 35000.00 | 40000.00 |
| team2       | 10000.00 | 10000.00 | 10000.00 | 10000.00 | 10000.00 |
| team3       | 10000.00 | 9000.00  | 8000.00  | 7000.00  | 6000.00  |

### Fixing Import Errors

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Budget import errors" width="80%" src="/img/budget-error.png" />
</div>

If there is a formatting error in your CSV, the import wizard will display where the error occurred. To fix it, you must fix the data in your source CSV and re-upload it.

## Linking Budgets to Cost Reports

Budget data lives right alongside spend and forecasts in [Cost Reports](/cost_reports/). When you create a Budget, you can assign it to a Cost Report. Once assigned, the budget will report on month-to-date performance from within the cost report view.

Budgets show as a yellow line in the cumulative and daily, weekly, and monthly views. The budget does not show if Group By is selected. To return to the Budgets tool, click on the name of the budget in the right-hand side. If you select the Weekly view, you may see the budget line dip for the first and last week of the month. This is because the budget is metered per day.

![Example Budget](/img/multiple_budgets.png)

On the Budgets page you can click the 3 dots to edit the Budget, assign it to a different cost report, rename it, and so on.

### Budget Periods

Budgets can have multiple budget periods, one for each month, with a specific amount for each period. If you create a budget for a past date, it cannot be edited.
