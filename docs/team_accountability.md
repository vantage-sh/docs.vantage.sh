---
id: team_accountability 
title: Team Accountability
description: Establish team accountability in Vantage with Cost Reports and filters.
keywords:
    - team accountability 
    - filters
    - cost report folders
---

# Team Accountability

Managing the cost of cloud services can be challenging—especially when multiple teams are involved. However, it is essential to ensure that each team is accountable for their cloud costs. By following these steps, you can hold your team accountable for cloud cost management using Vantage.

## Optional Prerequisites

- Apply [cost allocation tags](https://handbook.vantage.sh/aws/concepts/tags/) or labels to groups of resources for different owners, teams, customers, products, apps, or services. 
- Utilize account, resource group, project, or subscription hierarchy to create divisions in your resources.

## Step 1: Create a Cost Report Folder for a Specific Team

The first step in team accountability for cloud cost management is to create a [Cost Report folder](/cost_reports#folders) for a specific team. This will help you to group resources using appropriate tags and labels that can be used to identify and group those resources into the same report.

## Step 2: Create Cost Reports on Various Dimensions

Within the Cost Report folder, create Cost Reports based on various dimensions for the resources that can be attributed to the relevant team. You can use [filter sets](/cost_reports#filtering-cost-reports) that can filter on provider, tag, service, resource, account, and category/subcategory.

## Step 3: Use Cost Report Notifications

Once the report is created, use [Cost Report notifications](/report_notifications) to send daily, weekly, or monthly roll-up reports to a set email address or Slack channel for the appropriate team. You can also set up [Cost Anomaly alerts](/cost_anomaly_alerts) on the same report to go to a set email or channel for that team, which will identify unknown or unexpected increases in daily spend for a service.

## Step 4: Set a Team Budget Assigned to a Cost Report

Use [Budgets](/budgets) to set a team budget assigned to a Cost Report for that team. This will help to ensure that the team is aware of their budget and will be held accountable for their cloud costs.

## Step 5: Monitor and Optimize

As you continue to monitor and optimize your cloud costs, you can adjust your team’s budget and reports as needed. This will help to ensure that each team is accountable for their cloud costs and is actively working to reduce unnecessary expenses.

Managing cloud costs can be challenging, but by following these steps, you can hold your team accountable for their cloud cost management and ensure that your cloud spending is optimized and efficient.

## Additional User Workflows

- [Executive Reporting](/executive_reporting)
- [Find Hidden Costs](/hidden_costs)
