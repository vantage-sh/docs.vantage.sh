---
id: cost_alerts
title: Cost Alerts
description: Create Cost Alerts to receive scheduled updates of changes in your costs via Slack, Microsoft Teams, Jira, or email.
keywords:
  - Cost Alerts
---

# Cost Alerts

Cost Alerts automatically detect and notify you of cost changes—whether by percentage or fixed amount—across customizable time periods, like day-over-day, month-over-month, or quarter-over-quarter. These alerts are based on each binned group within a Cost Report.

You can receive notifications via email, Slack, Microsoft Teams, or Jira issues.

:::note
If you want to use Slack, Teams, or Jira, you will need to configure the corresponding integration with Vantage. See the [Slack](/slack), [Microsoft Teams](/microsoft_teams), or [Jira](/jira) integration documentation for details. For Slack and Microsoft Teams, you can create either a Slack integration or a Microsoft Teams integration, but not both. Once you have completed the integration steps, complete the below instructions to configure Cost Alerts.
:::

## Create a Cost Alert

Cost Alerts can be created in two ways—either directly from a **Cost Report** or via the **Notifications** page.

- **From a Cost Report:** From the top right of the report, click the ellipses button (**…**), then select **Create Cost Alert**.
- **From the Notifications page:** From the top right of the console, click the bell icon. The **Cost Alerts** dashboard is displayed. Click **Configure Cost Alert**.

On the **Cost Alerts** screen:

1. Enter a **Title** for your alert.
2. For **Cost Change Threshold**, select **%** or **$** and enter the dollar-based or percentage-based change threshold for the alert.
3. For **Comparison Interval**, select how you want Vantage to evaluate changes in cost over time. This determines the time periods that will be compared to detect changes. All timestamps of costs are in UTC.
   - **Day over Day:** Compares today's costs to yesterday's. Useful for catching sharp, immediate changes.
   - **Week over Week:** Compares the current week (Sunday to Saturday) to the previous one. Ideal for spotting trends in weekly cycles.
   - **Month over Month:** Compares the current month (1st to end of month) to the previous month. Identify longer-term shifts.
   - **Quarter over Quarter:** Compares costs across standard calendar quarters. Useful for high-level budget tracking and executive reporting.
4. Select the **Cost Report(s)** you want this alert to apply to. You can select up to 10 reports per alert.
   :::note
   If you create the alert from within a Cost Report, that report will be pre-selected here. You can still add up to 9 additional reports.
   :::
5. Select your notification preferences:
   - **Email:** Select which Vantage users should receive alert emails.
   - **Slack or Microsoft Teams:** Select the channels where alerts should be posted.
   - **Jira:** Select the appropriate projects and provide any additional details required for issue creation.
   - You can choose not to send external notifications. In this case, alerts will only appear as annotations within the selected Cost Reports. See the [View Cost Alerts](/cost_alerts#view-alerts) section for details on annotations.
6. Click **Save Alert**.

## View Cost Alerts {#view-alerts}

Alerts are delivered as soon as Vantage updates the data for the Cost Report associated with your Cost Alert. When a Cost Alert is triggered, Vantage performs two actions:

- Sends any configured alerts to configured external services (i.e., email, Slack, Teams, or Jira).
- Adds an [annotation](/annotations) directly to the relevant Cost Report, shown in the image below as a pink line on the graph. When you click the line, the **Annotations** subpanel is displayed on the right with details about the alert. If you delete a Cost Alert or remove a Cost Report from it, any annotations linked to that alert will also be removed from the affected Cost Reports.

:::note
If your cost data is retroactively updated by a cloud provider and meets one of your alert criteria, it may trigger a retroactive alert. If an alert has already been created and retroactive cost data causes it to no longer be valid, Vantage will persist the annotation in the Cost Report.
:::

Alerts are evaluated based on the groupings within a Cost Report. 

- For example, if a report is grouped by **Region**, and you’ve set an alert to trigger on day-over-day changes of 15% or more, Vantage will evaluate each region individually. 
- If your Cost Report is ungrouped, your Cost Alerts will be indexed based on provider (e.g., Azure) and service (e.g., Azure Storage).
- You will be alerted for new groupings in your Cost Report for any dollar-based Cost Alerts. You will not be alerted for new groupings for percent-based Cost Alerts.

<div>
    <img alt="Cost Report with a Cost Alert open in the Annotations sidebar" width="100%" src="/img/cost-alerts-report.png"/>
</div>

In the above visual example, the cost for **eu-west-2** increased by 15%, and the corresponding alert is triggered. An annotation is added to the report showing:

- The alert title
- The grouping that triggered the alert (eu-west-2)
- The change amount (+15%)
- The comparison interval (day over day)

### View External Alert Notifications

External alert notifications include details about the alert, such as the Cost Alert title, the grouping that triggered the alert, the comparison interval, and the amount of change. Each notification also includes a direct link to the relevant Cost Report for further investigation.

Expand the sections below to see examples of each type of external Cost Alert notification.

<details><summary>Email Alert</summary>
  <div>
    <img alt="Example email notification for Cost Alerts" width="100%" src="/img/cost-alerts-email.png"/>
  </div>
</details>
<details><summary>Slack Alert</summary>
  <div>
    <img alt="Example Slack notification for Cost Alerts" width="100%" src="/img/cost-alerts-slack.png"/>
  </div>
</details>
<details><summary>MS Teams Alert</summary>
  <div>
    <img alt="Example MS Teams notification for Cost Alerts" width="100%" src="/img/cost-alerts-teams.png"/>
  </div>
</details>
<details><summary>Jira Alert</summary>
  <div>
    <img alt="Example Jira notification for Cost Alerts" width="100%" src="/img/cost-alerts-jira.png"/>
  </div>
</details>

## Best Practices for Cost Alerts

When setting up Cost Alerts, it’s important to configure them in a way that provides meaningful insights. Below is a table outlining common configurations that may lead to a high volume of alerts and suggestions on how to optimize them.

| **Alert Configuration**                                                                           | **Potential Issue**                                                                                               | **Best-Practice Configuration**                                                                                                             |
| ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Day-over-day alerts on volatile costs (e.g., on-demand compute costs)                             | Frequent notifications due to normal fluctuations                                                                 | Use weekly or monthly evaluation periods instead to track stable trends                                                                     |
| Connecting alerts to reports that filter on a very broad scope (e.g., all accounts, all services) | Potentially generates excessive alerts for each service or dimension, depending on how often your costs fluctuate | Narrow the scope of the Cost Report to specific accounts, regions, services, or Virtual Tags. Consider using longer-term evaluation periods |
| Low percentage thresholds (e.g., 1–10%)                                                           | Small fluctuations can trigger frequent alerts                                                                    | Set thresholds at >10% to focus on meaningful changes                                                                                       |
| Static dollar thresholds that are too low                                                         | Minor cost changes may trigger alerts                                                                             | Configure alerts for significant cost shifts (e.g., >$500 instead of $50)                                                                   |

By following these best practices, you can ensure that Cost Alerts provide actionable insights without receiving unnecessary notifications.

## Cost Alerts Examples

Cost Alerts are most effective when they help you catch unexpected cost increases or drops before they become budget issues. Below are a few example use cases, along with how to configure your Cost Reports and alerts for each scenario. Consider the following guidance when deciding between a percentage-based or dollar-based alert.

| **Alert Type**          | **Use Case**                                                                                                                                                                                                             |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Percentage-Based Alerts | You're tracking lower-cost services where changes in spend may still indicate scaling, regressions, or misconfigurations. It can also be useful for automating detection of trends for your spend over longer durations. |
| Dollar-Based Alerts     | Small fluctuations in usage could regularly trigger percentage-based alerts without reflecting real concern. Dollar-based thresholds help filter for material, static changes.                                           |

### Percentage-Based Alerts

Use percentage-based alerts to spot relative changes in cost. For example, this type of alert can be useful when monitoring lower-spend resources that may not trigger a dollar-based alert, but are still scaling faster than expected. For example, you want to see any monthly percentage-based changes in data transfer, greater than 20%, for a production mobile app.

You set up the following Cost Report and corresponding alert:

- **Cost Report Filters:**
  - Provider: AWS
  - Category = EC2, Data Transfer
  - Tags (either from your provider or [virtual tags](/tagging)): Environment = Production, Application = Mobile App
- **Cost Alert Config:**
  - Change type = Percentage
  - Threshold = 20%
  - Comparison Interval = Month over Month

When the alert is triggered, a spike in data transfer costs could mean increased user traffic, but it might also indicate misconfigured services or traffic routing. Engineering can use this signal to check for inefficiencies or unintended data egress.

### Dollar-Based Alerts

Use dollar-based alerts for high-cost services where even small percentage changes represent substantial spend or where you need to be aware of material spend. For example, your team has a specific quarterly budget for storage. You want to be alerted weekly if S3 Storage increases by $2,000 compared to the previous week.

You set up the following Cost Report and corresponding alert:

- **Cost Report Filters:**
  - Provider: AWS
  - Category = S3, Storage
- **Cost Alert Config:**
  - Change type = Dollar
  - Threshold = $2,000
  - Comparison Interval = Week over Week

S3 is typically a predictable storage cost. When the alert is triggered, this could indicate a failure to archive old data or a misconfigured data pipeline that is potentially duplicating files. By using Cost Alerts to catch these changes weekly, your team can take corrective action before costs keep accruing ongoing overages.
