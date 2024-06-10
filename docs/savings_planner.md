---
id: savings_planner
title: Savings Planner
description: Use Savings Planner to forecast and model.
keywords:
  - Savings Models
  - Savings Planner
---

# Savings Planner

Savings Planner is a planning and forecasting tool you can use to view and model [AWS Savings Plans](https://www.vantage.sh/blog/what-is-an-aws-savings-plan) and maximize cost savings. Savings Planner provides a view into your on-demand vs. committed spend. You can create models and see the future impact of committing to additional Savings Plans. Vantage automatically detects all existing AWS Saving Plans within your account. Historical cost data and forecasted on-demand usage values for the next 12 months are displayed.

:::note
At this time, Savings Planner is available only for AWS.
:::

## Savings Planner Calculations

Vantage has ingested over two million different savings rate permutations that are possible across EC2, Lambda, and Fargate. As Vantage processes your Cost and Usage Reports (CUR), it will use your usage data to infer what compute you're running and what your specific savings rates would be for each potential savings plan you buy.

This methodology for forecasting savings is as accurate as possible and is more accurate with each additional CUR that's processed. Vantage uses the most recent previous month for forecasting the potential savings rate. As your infrastructure changes each month, Vantage will automatically infer new savings rates.

Savings model predictions are based on _raw compute spend_ and provide a _projected savings rate_. Descriptions and calculations are provided below.

### Raw Compute Spend

Raw compute spend is defined as any spend on AWS services that is coverable by a Savings Plan. This includes spending on services such as EC2, Lambda, ECS for Kubernetes, SageMaker, and Fargate ECS. 

To calculate the raw compute spend, Vantage sums the costs of all coverable services before applying any discounts from Savings Plans. For a given period, this can be expressed as:

$$
{raw\_compute\_spend}=
∑coverable\_services
$$

### Projected Savings Rate

When calculating financial commitment discounts, Vantage uses the last full month of AWS Cost and Usage Reports to categorize the compute spend based on each AWS SKU. This allows Vantage to calculate the total cost (`cost_for_period`) for a given period per SKU. Vantage then uses the AWS API to obtain the hourly rate of the instance type (`sku_hourly_rate`) and the discounted hourly rate (`discounted_rate`), dimensioned by type, term, and payment for the possible discounts.

The following values are calculated for each EC2, Fargate, and Lambda SKU and all discount dimensions (type, term, payment) based on data available from the AWS API. Total hours and instances per hour are calculated as follows:

$$
total\_hours = \frac{cost\_for\_period}{sku\_hourly\_rate}
$$

$$
instances\_per\_hour = \frac{total\_hours}{hours\_in\_period}
$$

Vantage then calculates the cost and discounted cost for the instances per hour:

$$
{cost} = {sku\_hourly\_rate} \times{instances\_per\_hour}
$$

$$
{discounted\_cost} = {discounted\_rate} \times {instances\_per\_hour}
$$

These individual SKU costs are summed by type, term, and payment to get the total costs:

$$
{total\_cost} = \sum {cost}
$$

$$
{total\_discounted\_cost} = \sum {discounted\_cost}
$$

Finally, the projected savings rate is calculated using the total cost and total discounted cost:

$$
{projected\_savings\_rate} = \frac{total\_cost - total\_discounted\_cost}{total\_cost}
$$

## Create a Savings Model

1. From the top navigation, select **Financial Planning**.
2. On the left navigation, select **Savings Models**. Any savings models you already created will be displayed on this screen.
3. At the top, click **New Model**. Two sections are displayed: one that contains a set of values related to the last six months of committed vs. on-demand spend, with future predicted spend. Plans you've already purchased are displayed in the bottom table, with the option to model new plans.
4. To save a savings model, click **Save As New Model**.
5. Enter a name for the model, then click **Save**.

### View Current and Predicted Commitments and Spend

The table at the top contains a projected growth rate for the next 12 months based on the last 6 months of spend. A visualization above the table provides a view of covered/uncovered spend for each month.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A full view of the Savings Planner table with on-demand and committed spend" width="100%" src="/img/spend-table.png" />
</div>

The following data is included in the table:

| Metric                   | Description                                                                                                                                                               |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Raw Compute Spend        | The raw compute cost your account uses before any Savings Plans or Reserved Instances are applied. Raw compute comprises spend for EC2, Lambda, ECS for Kubernetes, SageMaker, and Fargate ECS services. |
| On-demand Spend          | The amount of on-demand costs that your account has incurred.                                                                                                             |
| Savings Plan Commitments | The amount of Savings Plan costs that your account has incurred.                                                                                                          |
| Savings Plan Savings     | The amount saved by using the Savings Plan.                                                                                                                               |
| Savings Plan Coverage    | A percentage coverage rate of AWS Savings Plans for your compute cost spend.                                                                                              |
| Reserved Instances       | The amount of Reserved Instance costs that your account has incurred.                                                                                                     |
| Net Compute Spend        | The total compute cost that your account has incurred after on-demand, Savings Plans, and Reserved Instance costs.                                                        |

To adjust the predictions for future compute spend, click any future date cell within the **Raw Compute Spend** row and manually edit the prediction value. Consider updating these values based on predicted events over the next few months. The **Savings Plan Coverage** and **Net Compute Spend** rows are automatically updated based on changes to predicted Raw Compute Spend.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="GIF that shows a future cell in the Raw Compute Spend row. All other values within the column automatically update." width="100%" src="/img/adjust-spend.gif"/>
</div>
<br/>

In the **Savings Plan Coverage** row, cells are color-coded to provide a visual indication of coverage percentage levels:

- If the Savings Plan Coverage is greater than 100% or less than 20%, the cell will be red. When coverage is over 100%, this means you are overcommitted.
- If the Savings Plan Coverage is greater than or equal to 80%, the cell will be green, signaling good coverage.
- Cells that are greater than or equal to 20% but less than 80% will be gray.

### Model Future Savings Plan Purchases

In the **Savings Plans** table, you can add potential future Savings Plans. All your existing Savings Plans are listed, along with type, term, payment (e.g., No Upfront), purchase date, and expiration date. Upfront payment, recurring hourly payment, and a projected saving rate are also provided for each plan.

The latest savings rate for the plan is calculated by looking at the last full month of usage. You can click the top of any column to sort the table by that column.

:::info
For more information about Savings Plans and factors such as term, prepayment, and EC2 vs. Compute plans, see this [Vantage blog article](https://www.vantage.sh/blog/what-is-an-aws-savings-plan).
:::

1. To add a new Savings Plan, click **Add potential savings plan**.
2. Enter an **Hourly Commitment** in dollars.
3. For **Type**, select **Compute** or **EC2**.
4. For **Term**, select **1 Year** or **3 Year**.
5. For **Payment**, select **No Upfront**, **Partial Upfront (50%)**, or **All Upfront**.
6. Select a **Purchase Date**.

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="A savings model option is added to the Savings Planner and an hourly commit is entered. The table at the top is updated automatically to show new predicted spend and savings." width="100%" src="/img/savings-plan.gif"/>
</div>
<br/>

Observe any change in the metrics within the table at the top. You can continue to change the hourly commitment and see how that affects your Savings Plan Coverage over time. Adjust other options, like the term or start date, to see how these changes affect coverage. You can also add additional potential Savings Plans. 

To remove a Savings Plan, click the **X** in the last column of the Savings Plans table.

:::note
Vantage won't purchase the plans you model within the tool. The Savings Planner is available only for modeling purposes.
:::
