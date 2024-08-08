---
id: overview
title: Overview
description: View the Vantage Overview page for high-level summaries of your cost data.
keywords:
    - Overview
    - cost data summaries
---

# Overview 

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Once you create some provider integrations, Vantage will automatically begin ingesting billing information for your account. The default landing page in the Vantage console is the **Overview** page. This page serves as an executive-level summary, providing a comprehensive snapshot of the cost metrics that matter most to you. Review widgets on the Overview page for high-level cost summaries.

:::note
When a user navigates to `console.vantage.sh`, the **Overview** page is displayed. An individual user or owner of a team can configure a default dashboard to be displayed instead of the **Overview** page. See the [Default Dashboards](/dashboards#default-dashboard) documentation for details.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Overview page" width="80%" src="/img/executive-overview.png" />
</div>
<br/>
Depending on your provider connections, you will see some of the following widgets:

<Tabs>
  <TabItem value="demand-commit" label="Savings Plan Coverage" default>
    A widget that provides a clear comparison between your total on-demand vs. committed spend. This view helps you understand your expenses for on-demand resources in contrast to cost-saving strategies, like Savings Plans, Reserved Instances, Enterprise Discount Programs, and Committed Use Discounts.
  </TabItem>
  <TabItem value="cost-breakdown" label="Provider Summaries">
    Widgets that offer comprehensive cost breakdowns for providers. These widgets provide you with spending insights, displaying the current accrued costs and cost trends compared to the previous month.
  </TabItem>
  <TabItem value="cost-report" label="Cost Reports">
    A widget for each one of the <a href="/cost_reports">Cost Reports</a> you create. One default Cost Report will be present in your account that is referred to as <strong>All Resources</strong>. As you create more Cost Reports in your account, a summary of each Cost Report will automatically show up on the Overview page.
  </TabItem>
</Tabs>

---
