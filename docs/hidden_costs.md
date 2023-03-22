# Find Hidden Costs

With team accountability and executive reporting in place, there are usually opportunities to turn off or optimize resources which are unexpectedly driving costs. Vantage has numerous "cost debugging" features to help you drill into where your spend is going.

## Active Resources

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake Cost Reports" width="60%" src="/img/active-resource-drill-down.png" />
</div>

[Active Resources](/active_resources) provide a list of all resources currently driving costs in your account. Active resources currently support AWS, Snowflake, and MongoDB Atlas. By clicking into each resource you can see the full details about where it is 

## Subcategory Costs

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Snowflake Cost Reports" width="80%" src="/img/subcategory.gif" />
</div>

To drill down to specific resources like EC2 Instances, Azure VMs, or Google Cloud VMs you can use [Cost Reports](/cost_reports). Click through the Service into the Resource into the Category into the Subcategory to reach the most granular object that the provider has billing data for.

## Cost Anomaly Alerts

[Cost Anomaly Alerts](/cost_anomaly_alerts) automatically detect anomalies but alerts must be configured. Once you have created reports you can go to the "Anomalies" tab on each report to view costs that our algorithm has detected as being outside the normal expected range. You can drill into these costs using the toggles above and also configure alerts to be sent to Slack, Teams, or email for future anomalies.