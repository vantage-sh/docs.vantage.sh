---
id: executive_reporting
title: Executive Reporting
description: Create reports for company leadership to understand where cloud spend is going.
keywords:
    - cloud cost reports
    - executive reports
---


# Executive Reporting

In many cases, company leadership has requirements to reduce cloud spend or develop strategic initiatives related to cost. Vantage provides a suite of tools, built for enterprises to understand where their cloud spend is going, how it is impacting their business, and how to report it for decision-making purposes.

## Review the Overview Page

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake Cost Reports" width="80%" src="/img/executive-overview.png" />
</div>

The best way to get a quick snapshot of your cloud spend is to use the [**Overview**](/overview) page. This is the default page that is loaded when you sign in to [console.vantage.sh](https://console.vantage.sh).

The Overview page will show an executive-level summary of the key facets of cloud spend. It lists every connected provider as well as the AWS accounts, GCP projects, Azure subscriptions, and other providers that are incurring charges. Furthermore, it displays information on the amount of committed spend discounts, such as Savings Plans, that are in use and how much coverage [Autopilot](/autopilot) is providing.

Any of the widgets shown on the Overview page can also be sent in Slack, Teams, or by email. See [Create Cost Report Notifications](/executive_reporting#create-cost-report-notifications) below.

## Create Cost Segments

[Segments](/segments) are the best way to map costs to business units, teams, apps, or services. They allow you to create flexible hierarchies of costs that bubble up from child to parent. This means you could take an organizational hierarchy of Engineering -> Platform -> AWS and assign costs to each of the steps in the hierarchy based on Vantage data. Then, you can share what costs are being incurred by which teams and business units. Navigate to the [Segments](https://console.vantage.sh/segments) feature in the Vantage console to get started.

## Analyze Per Unit Costs

[Per Unit Costs](/per_unit_costs) help you calculate COGS for your organization. Reporting on the unit costs of your business impacts things like margin and decision-making around which customers, services, or endpoints are making positive margin contributions for the company.

## Create Cost Report Notifications

Every [Cost Report](/cost_reports) in Vantage can be automatically sent to Slack, Teams, or by email. A common workflow is to create a monthly Cost Report, group it by Provider or Tag, and send the report to `engineering@company.com` or a DevOps-related Slack channel on a monthly basis. For more information on setting up Cost Report Notifications, see the [Cost Report Notifications](/reports) documentation.

## Export Cost Reports

Once you have integrated all your providers into Vantage and created some reports, you may have a need to export data from Vantage into another system or a spreadsheet for further reporting.

For this scenario, Vantage has Cost Report Exports. With customizable controls for exporting data from Cost Reports, you can select which columns, date ranges, and date resolutions (weekly, monthly) to export to a CSV. For more details on the controls and formats, see the [Cost Report Exports](/cost_reports#exporting-cost-reports) documentation.

## Additional User Workflows

- [Team Accountability](/team_accountability)
- [Find Hidden Costs](/hidden_costs)