---
id: hidden_costs
title: Find Hidden Costs
description: Use the cost debugging features in Vantage to find hidden resource costs.
keywords:
    - hidden resource costs
    - cost anomalies
---

# Find Hidden Costs

With team accountability and executive reporting in place, there are usually opportunities to turn off or optimize resources that are unexpectedly driving costs. Vantage has numerous "cost debugging" features to help you drill down into where your spend is going.

## Review Active Resources

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake Cost Reports" width="60%" src="/img/active-resource-drill-down.png" />
</div>

The [Active Resources](/active_resources) feature provides a list of all resources currently driving costs in your account. Active resources currently support AWS, Azure, Snowflake, and MongoDB Atlas. Click into each resource to see full details about where it is incurring costs.

## Analyze Subcategory Costs

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="Snowflake Cost Reports" width="80%" src="/img/subcategory.gif" style={{ clipPath: "inset(10px 0 0 0)" }} />
</div>
<br/>

To drill down into specific resources, like EC2 instances, Azure VMs, or Google Cloud VMs, you can use [Cost Reports](/cost_reports). Click through Service -> Resource -> Category -> Subcategory to reach the most granular object that the provider has billing data for.

## View Cost Anomaly Alerts

[Cost Anomaly Alerts](/cost_anomaly_alerts) automatically detect anomalies, but these alerts must be configured. 

Once you have created Cost Reports, navigate to the **Anomalies** tab on each report to view costs that the Vantage algorithm has detected as being outside the normal or expected range. You can drill into these costs by clicking through the categories displayed on the report and also configure alerts to be sent to Slack, Teams, or email for future anomalies.

## Additional User Workflows

- [Team Accountability](/team_accountability)
- [Executive Reporting](/executive_reporting)