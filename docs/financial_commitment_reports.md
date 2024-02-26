---
id: financial_commitment_reports
title: Financial Commitment Reports
description: Create financial commitment reports to understand your savings plans and commitments.
keywords:
  - Financial commitment reports
  - Savings Plans
  - Reserved Instances
---

# Financial Commitment Reports

A _financial commitment_ is an agreement made with a cloud provider to spend a certain amount of money over a designated timeframe (e.g., one or three years) in return for a discounted rate on services. Examples of financial commitments include AWS [Reserved Instances](https://handbook.vantage.sh/aws/concepts/reserved-instances/) and [Savings Plans](https://handbook.vantage.sh/aws/concepts/savings-plans/). Other discounts include the [AWS Enterprise Discount Program (EDP)](https://aws.amazon.com/pricing/enterprise/) and [Spot Instances](https://handbook.vantage.sh/aws/services/ec2-pricing/#on-demand-vs-spot).

Vantage financial commitment reports provide a unified view of all your AWS financial commitments, with the ability to filter or create custom aggregations and groupings. Financial commitment reports track Savings Plans, Reserved Instances, Spot Instance usage, and EDP discounts for AWS costs.

:::note
This feature is currently available only for AWS, with plans to expand to Azure and GCP in the future.
:::

## Understand Discounted Coverage, Effective Savings Rate, and Utilization

Financial commitment reports in Vantage help you understand your overall _discounted coverage_, _effective savings rate_, and _utilization_. These metrics are described in detail below.

### Coverage {#coverage}

Coverage is the percentage of cloud spend covered by financial commitments, like Reserved Instances and Savings Plans. Coverage can be calculated as follows.

$$
\frac{Covered\ Use}{Covered\ Use+On–Demand\ Use}
$$

As a basic example, an app uses two Reserved Instances. The app also uses three On-Demand instances of the same size.

- The two Reserved Instances cost a total of $120 per month.
- The three On-Demand instances cost a total of $180 per month.

$$
\frac{\$120}{\$120+\$180} = 40\%\ coverage
$$

With this lower coverage percentage, the app’s developers could consider purchasing more Reserved Instances, instead of On-Demand instances, and realize greater savings.

### Effective Savings Rate {#effective-savings-rate}

Effective savings rate measures the impact of purchased financial commitments as well as discounts, refunds, and credits. If you use financial commitments with higher discounts, you’ll improve your effective savings rate. The effective savings rate can be calculated as follows.

$$
1 - \frac{Discounted\ Spend}{On–Demand\ Equivalent\ Spend}
$$

As an example, an app uses a large-sized Reserved Instance, with a one-year no upfront commitment. It costs $0.20 per hour. The app used the Reserved Instance for 90% of the month (i.e., 657 hours, when using a value of 730 hours for the month).

- The Reserved Instance costs a total of $146 for this month ($0.20 x 730 hours).
- The On-Demand equivalent of this instance costs a total of $164.25 for the month ($0.25 per hour x 657 hours).

$$
1- \frac{\$146}{\$164.25} = 11.11\%\ effective\ savings
$$

### Utilization {#utilization}

Utilization measures how efficiently your purchased Savings Plans and Reserved Instances are being used to cover your overall AWS usage. In other words, this metric measures how much of the committed spend you’re utilizing. Utilization can be calculated as follows.

$$
\frac{Covered\ Use}{Committed\ Spend}
$$

For example, you committed to spend $1000 on AWS services monthly with a Savings Plan.

- Your actual total AWS usage for the month is $900.
- $800 of that usage is covered by your Savings Plan.

$$
\frac{\$800}{\$1000} = 80\%\ utilization
$$

This means that 80% of your committed Savings Plan spend was utilized. You could commit to a smaller Savings Plan while still taking advantage of the same discount. In this scenario, you are receiving significant cost savings compared to paying all On-Demand prices.

## Create a Financial Commitment Report

:::tip
Before you create a report, you can view a list of all your active (and expired) Savings Plans and Reserved Instances on the [Commitments](https://console.vantage.sh/financial_planning/financial_commitments) screen.
:::

1. Navigate to the **[Financial Commitment Reports](https://console.vantage.sh/financial_planning/financial_commitment_reports)** screen. All existing reports are displayed. From this screen, you can edit and delete existing reports.
2. To create a new report, click **New Report**.
3. To filter costs, click the **Filters** button on the top left of the graph.
   - The **AWS costs where...** tile is displayed. Click **+ New Rule**.
   - For **Category**, select an available filter category.
     :::note
     You can filter by service (e.g., Amazon EC2), account, billing account, commitment type (e.g., On-Demand), charge type (e.g., Spot Usage), category (e.g., Compute Instance), subcategory (e.g., AP-Requests-Tier1), instance type (e.g., m5.large), region, and tag.
     :::
   - Two additional dropdown menus are displayed. Select **is**, **is not**, **contains**, or **does not contain** based on your desired filter criteria, then select one or more corresponding values from the second dropdown menu. For Tag, the Tag Key dropdown is displayed before the operator dropdown.
   - Click **Save**.
4. You can optionally edit your existing rules or add additional filter criteria.
   - To edit the rule you just created, select the rule, make your changes, and then click **Save**.
   - If you want to add a rule to filter multiple criteria, such as filter by certain services and another rule to filter by certain regions, click **+ New Rule**. Add the additional criteria and save.
   - To add a separate rule set, click **+ New Filter**. This rule set will be displayed as **Or AWS costs where...** in a new rule section.
   - To delete a rule set, click the trashcan icon on the top right of the rule set.
5. Above the rule set(s), click **Apply**. The graph will update with your existing filter criteria.
6. To save the report, click **Save as New.** Enter a report name, and click **Save**. (To edit this name, click the pencil icon in the breadcrumbs above the chart, next to the report's name.)

You can edit the filter criteria on a report at any time. Remember to click **Save** once you are done making changes.

### Apply Aggregations to Reports

You have the option to further drill down into your costs:

- Above the graph, click the **Group By** dropdown menu. Select one or more grouping options. You can group by charge type, commitment type, service, account, billing account, region, category, subcategory, instance type, and tag.

- To adjust the date binning, click the data bin menu on the top right of the graph. Select either **Daily**, **Weekly**, or **Monthly**.
- To change the date range, click the date menu on the top right of the graph and adjust the date range.
  :::note
  You can historically view back as far as your account’s retention period. By default, this period is six months.
  :::

### Commitment Eligibility Filter

You can also adjust the report to include only costs that are eligible for Reserved Instances and Savings Plan commitments. Click **On-Demand Costs:** and select one of the following options:

- **All Costs:** Display all costs regardless of commitment eligibility. All services are included in this view.
- **Commitment-Eligible Costs:** This option is the default option. Only costs that are eligible for Reserved Instances and Savings Plans are displayed. With this option, you can choose whether to include all your On-Demand AWS costs in the effective savings rate calculation or only those costs eligible for potential coverage by Savings Plans and Reserved Instances. This option includes the following services:
  - Amazon EC2
  - AWS Lambda
  - Amazon SageMaker
  - Amazon RDS
  - Amazon ElastiCache
  - Amazon OpenSearch
  - Amazon EKS
  - Amazon ECS

## Review the Report

By default, financial commitment reports are grouped by Charge Type (e.g., Savings Plan Covered Spend, Spot Usage). Groupings are represented by each colored section of the bar chart. Hover over any bar to get a breakdown of costs. The breakdown is also provided in the table below the chart.

:::note
Costs in the graph are unblended.
:::

You can sort the table by any of the date or grouping columns.

The chart contains two axes: the left axis measures costs, and the right axis measures the coverage, effective savings rate, and utilization metric percentages. The cost axis shows positive and negative values (i.e., discounts are represented as negative dollar values).

Trend lines are displayed to illustrate the change in coverage, effective savings rate, and utilization over time. Hover over any line to get a point-in-time view of each metric and associated costs.

Above the chart, the following values are displayed for the report’s lookback period:

- **On-Demand Spend:** The total amount spent for On-Demand resources. This portion of spend is narrowed down to just the cost categories that can be covered by Savings Plans or Reserved Instances.
- **Total Savings:** The total amount saved by using your financial commitments.
- **Effective Savings Rate:** The percentage discount across all usage. (See the [section above](/financial_commitment_reports#effective-savings-rate) for a more in-depth explanation of this metric.)
- **Coverage:** The percentage of total spend that is covered by financial commitments. (See the [section above](/financial_commitment_reports#coverage) for a more in-depth explanation of this metric.)
- **Utilization:** How efficiently your purchased Savings Plans and Reserved Instances are being used to cover your AWS usage. (See the [section above](/financial_commitment_reports#utilization) for a more in-depth explanation of this metric.)
  :::note
  At this time, the utilization percentage is shown as a high-level metric and on the graph; however, these reports are more geared to analyze your coverage. More visibility into utilization is planned for a future release.
  :::

## Add a Financial Commitment Report to a Dashboard

You can add financial commitment reports to a dashboard so that teams can see the coverage related to their resources. See the [Dashboards](/dashboards) documentation for more information on how to create and add reports to dashboards.
