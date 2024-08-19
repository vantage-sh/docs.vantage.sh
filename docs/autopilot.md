---
id: autopilot
title: Autopilot for AWS Savings Plans
description: This page provides details on Autopilot for AWS Savings Plans and how to get started.
keywords:
  - AWS
  - Autopilot
  - Autopilot for AWS Savings Plans
---

import ReactPlayer from 'react-player'

# Autopilot for AWS Savings Plans

Autopilot for AWS Savings Plans allows Vantage to purchase Compute Savings Plans commitments on your behalf, with manual and automated options. Autopilot continuously evaluates your compute workloads, and when enabled, can automatically purchase the most suitable Compute Savings Plans to maximize your savings. Compute Savings Plans provide broad coverage, applying to all instance types across any region, without the need to manage specific instance sizes or worry about region-specific commitments. Autopilot also provides savings recommendations for RDS, ElastiCache, Redshift, and OpenSearch Reserved Instances.

:::note
At the time, Autopilot supports only AWS; however, there are plans to expand this functionality to GCP and Azure.
:::

## How Autopilot Works

Autopilot works along with the AWS APIs by ingesting and analyzing Cost and Usage Report data. Vantage will group your compute workloads on the dashboard by instance hour of each respective compute class. A compute class is defined as EC2 instance usage structured by instance type (e.g., t3.xlarge, r5.large), Region (e.g., us-east-1, us-west-2) and platform (e.g., Linux, Windows) tracked hourly.

### Coverage Determination

Autopilot looks at historical compute usage (up to 3 months) to understand your average compute usage. This method is intended to help find a relatively steady-state compute footprint to base the coverage percentage on, avoiding accidentally purchasing too much coverage because of a temporary spike in compute usage. Compute Savings Plans provide flexibility by applying to EC2 as well as other services, including AWS Fargate and AWS Lambda

When Autopilot has reached an hourly commitment that maximizes the effective discount, Autopilot will immediately stop making purchases in this category. The category will be shown as overcommitted in on the Autopilot dashboard, and all overcommitted categories will be able to be viewed using the overcommitted filter at the top of the page. Owners of the Vantage account will receive an email when a category falls into the over commitment designation.

### Configurable Lookback Period and Savings Plan Type

Autopilot allows customers to set a lookback period of either 7, 30, or 60 days, which will generate different effective discounts based on actual usage during that period. You can configure the lookback period that most accurately captures your compute usage to ensure the correct coverage level is purchased. Consider the following general suggestion for lookback periods:

- Consider 7 days as a good selection for linearly increasing, steady-state workloads
- Consider 60 days for workloads with higher peak to average variation.

You can configure your Savings Plans settings for Autopilot to use 1- or 3-year term lengths and All upfront, Partial upfront, or No upfront payment plans.

### Existing Savings Plans

Autopilot will account for your existing AWS Savings Plans and Reserved Instances. You will not be charged for existing AWS Savings Plans or Reserved Instances. Even if you feel that you have good coverage with existing AWS Savings Plans and Reserved Instances, you can consider enabling Autopilot as an insurance policy in the event that they expire or your usage footprint changes. Autopilot will automatically detect that your coverage level is reducing if anything were to expire and purchase additional Reserved Instances to account for things accordingly.

## Legacy Autopilot (EC2 Reserved Instances)

Because of changes to the underlying Reserved Instance (RI) market, the way Vantage Autopilot initially worked changed from supporting Reserved Instances to instead supporting Savings Plans. See the _Migrate from Autopilot (EC2 RIs) to Autopilot for AWS Savings Plans_ section below for details on how to get started. Consult the following resources for additional information:

- For more details on the AWS changes to RIs, see [this Vantage blog post](https://www.vantage.sh/blog/aws-reserved-instances-updates).
- For information about the updates in Vantage, see the following Vantage blog.
- For a primer on AWS Savings Plans, see the [following Vantage blog](https://www.vantage.sh/blog/what-is-an-aws-savings-plan).

## Autopilot Permissions {#permissions}

Review the `VantageAutoPilot` policy on the public AWS CloudFormation template, where you can audit the template's [list of required permissions](https://vantage-public.s3.amazonaws.com/vantage-integration-combined-latest.json). This template is the same one that’s used when you configure your Vantage and AWS connection.

:::note
Autopilot cannot and will never change your underlying infrastructure
:::

## Enable Autopilot (New Users)

To use Autopilot, ensure that you’ve [connected AWS](https://docs.vantage.sh/connecting_aws) as a provider. Then, from the top navigation, select **Financial Planning** > **Autopilot**. If this is your first time using Autopilot, you will need to complete the onboarding workflow for Autopilot.

1. From the top right of the Autopilot dashboard, click the **Autopilot Enabled** toggle access the onboarding workflow.
<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="The enable toggle on the Autopilot dashboard" width="100%" src="/img/autopilot/autopilot-enabled.png" />
</div>
2. Click **Get Started**. Vantage performs a permissions check to ensure you have the right permissions configured for Autopilot. These permissions are used to view billing data, generate Savings Plans recommendations, and purchase them on your behalf. See the _Autopilot Permissions_ section above for details. If you fail the permissions check, click **Upgrade Integration** to configure the correct permissions.
3. Click **Continue**.
4. Review the provided Autopilot **Master Services Agreement** and click the checkbox to acknowledge that you accept the terms. Click **Accept and Continue.**
5. Click **Go to Autopilot Dashboard** to begin reviewing your savings.

Autopilot will automatically begin to analyze your compute trends and can apply savings within days. Typically, you can expect to wait about one week before you start to see material Autopilot savings on the Autopilot dashboard.

You can also disable Autopilot at any time. To disable Autopilot, click the **Autopilot Enabled** toggle on the top right of the Autopilot dashboard.

### Migrate from Autopilot (EC2 RIs) to Autopilot for AWS Savings Plans {#migrate}

Autopilot no longer supports purchasing and selling Reserved Instances. If you are a customer that uses Autopilot to manage Reserved Instances, you have three options:

- **Continue to use your Reserved Instances until they expire**: Vantage will continue to charge you for 5% of savings realized from the original purchase of these RIs.
- **Opt in to Autopilot for AWS Savings Plans:** When you opt in, Vantage will list your Reserved Instances for sale on the Reserved Instance marketplace; however, there is no guarantee that these Reserved Instances will sell. In the event that they do sell, Autopilot will automatically backfill your Reserved Instances with new Savings Plans coverage.
- **Contact your AWS account team to discuss a migration from Reserved Instances to Savings Plans**: It’s been noted that some customers could negotiate with AWS to replace Reserved Instances with Savings Plans, depending on the specifics of the request. Vantage does not have any details about what makes this more likely to succeed with AWS, and it does not seem to be a guarantee that AWS will perform a swap.

If you have any questions, contact support@vantage.sh. If you are a current Autopilot customer, at the top of the Autopilot console, a message is displayed to migrate to Autopilot for AWS Savings Plans. Click **Get Started**, and the onboarding workflow described before will be displayed.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Migration banner on the Autopilot dashboard" width="100%" src="/img/autopilot/autopilot-migrate.png" />
</div>

## Review Autopilot for AWS Savings Plans Dashboards

From the Autopilot dashboard, you can toggle between the Compute (EC2), RDS, ElastiCache, Redshift, and OpenSearch tabs. This section describes the actions you can take on the **Compute** tab.

### Configuration Screen {#configuration}

After you onboard to Autopilot the Savings Plans **Compute Configuration** page is displayed. By default, Autopilot is configured to a 60-day lookback with 3-year No Upfront payment types. You can also access this page by selecting **Configuration** from the left menu of the **Compute** tab. On this page, you can configure the following options.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Configuration screen on the Autopilot dashboard providing options for lookback, payment type, and term" width="100%" src="/img/autopilot/autopilot-configure.png" />
</div>

#### Toggle Automatic Purchases {#toggle-automatic}

Autopilot Savings Plans purchases are initially disabled. If you want to have Autopilot make Savings Plans purchases on your behalf, click the toggle and acknowledge the displayed confirmation message. You can leave this toggle disabled if you would rather manually approve or decline recommendations.

#### Lookback Period {#lookback}

Autopilot allows customers to set a lookback period of either 7, 30, or 60 days, which will generate different effective discounts based on actual usage during that period. You can configure the lookback period that most accurately captures your EC2 usage to ensure the correct coverage level is purchased.

#### Savings Plan Purchase Configuration {#sp-config}

Configure the length of time and payment option for your purchases. For **Term Length**, select either 1- or 3-year term lengths. For **Payment**, select either All upfront, Partial upfront, or No upfront payment plans.

:::tip
For more information about term lengths and payment options, see [this Vantage blog](https://www.vantage.sh/blog/what-is-an-aws-savings-plan) on Savings Plans.
:::

### Coverage Overview and Recommended Coverage

Based on your configured inputs, Autopilot provides a recommended Compute Savings Plan for purchase to cover the remaining spend. You can view your commitments and recommended coverage to get a better idea of how you are currently committed along with Autopilot’s recommendations.

:::note
Autopilot also purchases Savings Plans in increments that are eligible for AWS’s 7-day return policy threshold, so if there's a mistake or a change in your plans, Vantage can request a return of the unneeded Savings Plans. To request a return, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

#### Coverage Overview

As Autopilot adjusts the commitment level, this tab includes a graph that displays your On-Demand, Savings Plans, and (if applicable) Reserved Instance usage. The graph shows daily usage, and you can use the date option above the graph to change the month that’s shown.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Coverage Overview screen on the Autopilot dashboard" width="100%" src="/img/autopilot/autopilot-coverage-overview.png" />
</div>

Above the graph, your savings is displayed, along with the percentage decrease or increase between this and last month. Your **Coverage** is also displayed, which shows your coverage across all commitment types. Finally, your **All Time Savings** found by Autopilot are displayed. You can update the date that’s displayed.

:::note
This page includes all commitments, regardless of if they are covered by Autopilot.
:::

#### Recommended Coverage

On the **Recommended Coverage** screen, a graph with On-Demand vs. Recommended Commitments is displayed. Above the chart, the **Projected On-Demand Cost** is displayed. This is remaining On-Demand cost that’s estimated to not be covered by the recommended Savings Plans, over the lookback period. On the graph, you can filter by the following options:

- Service: Amazon EC2, ECS, Fargate (ECS or EKS), or Lambda
- Category: A compute category that is a representation of your normalized compute workloads (e.g., _USE1-Fargate-GB-Hours_)
- Region: AWS Region (e.g., us-east-1)

The table displays the On-Demand Cost for each combination of service and category. Recommended coverage is displayed as a trendline you can toggle on and off, as shown in the visual example below. You can also change the date range displayed above the chart.

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
        url='/img/autopilot/autopilot-recommended.mp4'
        alt="The Autopilot Recommended Coverage page is displayed along with the ability to toggle settings above the chart." 
        width="100%"
        height="100%"
    />
    </div>
</div>

#### Review Coverage Recommendations

The per hour **Recommended Coverage** is also displayed in the section above the graph, along with projected savings. Click **Review the recommendation** to review currently active recommendations. The **Review Recommendation** panel is displayed on the right. From this panel, you can view the recommendation based on your term length, lookback, and payment configuration. Click **Approve Purchase** and Autopilot will make the purchase.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="Coverage Overview screen on the Autopilot dashboard" width="60%" src="/img/autopilot/autopilot-recommendation.png" />
</div>

Note that Vantage generates recommendations daily. When Autopilot makes a purchase, there is a short window where Autopilot does not generate additional proposed recommendations in order for the recently accepted recommendation to take effect. Ensure that you have not already made a purchase made that would cover this recommendation.

## RDS, ElastiCache, Redshift, and OpenSearch Autopilot Graphs {#autopilot-graphs}

Autopilot also provides recommendations and the option to purchase Reserved Instances for RDS, ElastiCache, Redshift, and OpenSearch. A tab for each of these services is displayed on top of the Autopilot dashboard. 

:::note
The EC2 tab was previously displayed for legacy Autopilot for EC2 Reserved Instances customers. On this tab, you could control buying and selling of each compute category displayed. These controls are no longer available with Autopilot for AWS Savings Plans. Instead, you can use [Financial Commitment Reports](/financial_commitment_reports) to see a unified view of all your AWS financial commitments, with the ability to filter or create custom aggregations and groupings. Financial Commitment Reports track Savings Plans, Reserved Instances, Spot Instance usage, and EDP discounts for AWS costs.
:::

Recommendations are displayed for individual compute categories, which are a representation of your normalized workloads that consists of the following elements:

- An instance type family, such as *m5a*
- A region
- A platform (Redis, PostgreSQL Community Edition, etc.)

Each compute category has usage tracked hourly and grouped by the following compute types. 

- Existing customer usage covered by existing Reserved Instances
- Existing customer usage covered by credits
- On-demand usage

You can also view associated [active resources](/active_resources). Click the **Active Resources** link at the bottom of the graph.

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
        url='/img/autopilot/autopilot-rds.mp4'
        alt="The Autopilot RDS recommendation screen and selecting the displayed active resource option." 
        width="100%"
        height="100%"
    />
    </div>
</div>

### RDS

For RDS, the Y-axis unit is expressed in normalized instance units per hour for each compute category. The rationale for this is that RDS has the benefit of flexible instance families, where a Reserved Instance in the smallest possible unit can add up to have multiple cover a single larger unit in that family.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="RDS recommendations on the Autopilot dashboard" width="100%" src="/img/autopilot/autopilot-rds.png" />
</div>

### Redshift, OpenSearch, and ElastiCache

For **Redshift**, **OpenSearch**, and **ElastiCache**, the Y-axis is expressed in number of instances. Unlike the above example, there isn't flexibility for these classes so this is a more straightforward scenario where the units represented are the exact number of instances you should purchase.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="ElastiCache recommendations on the Autopilot dashboard" width="100%" src="/img/autopilot/autopilot-elasticache.png" />
</div>

### Purchase a Recommendation

For each service, you are provided with the option to view and make purchases for provided savings recommendations. 

1. Above any of the graphs, click **View Savings Recommendations**. 
2. The **Savings Recommendations** panel is displayed on the right. At the top of the panel, select the number of instances you want to purchase. A table of potential options is provided along with potential savings to help you decide on the best option.
3. Click **Purchase via AWS Console** to make these purchases on AWS.

<div style={{display:"flex", justifyContent:"center"}}>
<img alt="ElastiCache recommendations on the Autopilot dashboard" width="60%" src="/img/autopilot/autopilot-rds-rec.png" />
</div>

Note that recommendations are generated weekly and indicate the date range for which Reserved Instance purchases are not included in the recommendation. Ensure you have not already made a purchase that would cover this recommendation.