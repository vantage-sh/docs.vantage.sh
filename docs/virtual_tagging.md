---
id: virtual_tagging
name: Virtual Tagging
description: Create virtual tags within Vantage to provide a consistent tagging schema across cloud providers.
keywords:
    - Virtual tagging
    - Vantage tags
---

# Virtual Tagging

You can create virtual tags to consistently tag costs across providers in Vantage. You can use this feature to increase tagging coverage across your cloud infrastructure. Virtual tagging is available within your account settings. Create cost allocation tag keys with a set of corresponding values and filters directly in the Vantage without needing to involve your engineering team in making infrastructure changes. All provider integrations in Vantage are supported, including providers that do not natively support tags.

Virtual tags are available for filtering and aggregating on all [Cost Reports](/cost_reports) and [cost allocation segments](/segments). They can also be used in filter criteria on [saved filters](/saved_filters). There is no limit to the number of tag keys or values that can be defined.

## Virtual Tags vs. Saved Filters vs. Cost Allocation Segments

Virtual tags can be considered foundational to the rest of the data within Vantage. They should remain fairly static, and changes should be considered delicate. These changes will flow across all data and apply to all workspaces. The most common tag keys will be items like team, cost center, and environment. 

Segments can then be used to create different hierarchical views for tagged data. This feature is useful for breaking down the data by different perspectives, such as by cost center or by OPEX/CapEX.

Saved filters can then be used in a more ad-hoc fashion to add lenses on top of base data. For instance, you could create a saved filter just for _North America_ that standardizes a set of regions across providers and can be used by teams on their reports or dashboards without having to know the set of filters needed to create the list of regions. When new regions come online, it’s easy to modify the saved filter to include this region.

:::note
If you want to transition any of your cost allocation segments to virtual tags, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

## Create Virtual Tags

:::note
This feature requires _Owner_ permissions in Vantage. See the [Role-Based Access Control](/rbac) documentation for details. Virtual tags apply to all [workspaces](/workspaces).
:::

1. From the top navigation, click **Settings**.
2. From the side navigation, under **General Settings**, click **Virtual Tags**. 
3. All existing virtual tags are displayed alphabetically. You can edit and delete any existing tags from this screen.
4. To add a new virtual tag, click **Create a Virtual Tag**. 
5. Enter a title for the **Tag Key**. 
6. For **Billing Period Backfill**, select a billing period (e.g., **Apr 2024**) for which the tag should be backfilled. 
7. Enable the **Can Override** toggle if you want the virtual tag to override an existing service cost value. For example, if you create a virtual tag that conflicts with an existing provider tag, this option will override the existing provider tag key in Vantage reports.
8. In the **Values** section, click **+Add a Value**:
   - Enter a value title.
   - Click **+ Add a Filter** and specify the tag value’s filtering criteria. Virtual tag filters function just like filters on Cost Reports and cost allocation segments. For information on how to create detailed filters, see the [Cost Reports](/cost_reports#filtering-cost-reports) documentation. 
   :::note
   You cannot use saved filters to define a virtual tag’s filters.
   :::
9. At the top, click **Save**.
    
Processing the tag changes usually takes under an hour. At the top of the **Virtual Tags** page, the processing status is displayed. Processing times vary based on the number of tags and volume of data you have imported into Vantage.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-tag-status.png" />
</div>

### Virtual Tag Order 

Tag values are arranged in priority order on the **Virtual Tag** screen. You can move tag values up and down in the UI to reorder them. 

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
     <img alt="GIF of filtering a commitment report for AWS category costs that are not usage" width="80%" src="/img/reorder-tags.gif"/>
</div>
<br/>

When ingesting cost data into the Vantage platform, the first value that matches the corresponding filters will be applied to that line item. In cases where filters overlap, the order of tag values within each key determines the value that is applied.

###  Virtual Tagging Example 1: Cross-Provider Tagging

You want to create a tag mapping for each of your teams that maps corresponding teams with certain services and provider accounts.

You create a tag key called `Teams`. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

You add the corresponding set of virtual tag values and filters:

- The `data` team tag value corresponds with a filter for all costs for GCP BigQuery and Amazon Redshift.
- The `mobile` team tag value corresponds with a filter for its related GCP projects and AWS accounts.

<div style={{display:"flex", overflow:"scroll"}}>
    <img alt="Multi-dimensional Grouping" width="60%" src="/img/virtual-tag-provider-value-1.png" />
    <img alt="Multi-dimensional Grouping" width="60%" src="/img/virtual-tag-provider-value-2.png" />
</div>

Within Cost Reports, you can easily filter and group by these tag options to easily see costs for an individual team.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-tag-provider-report.png" />
</div>

###  Virtual Tagging Example 2: Consolidate Existing Tags

You have a tagging practice established at your organization, but teams oftentimes create tags that are spelled differently or create duplicate tags. For example, the `data` team has resources tagged with `data`, `Data`, and `data-prod`. This is an issue across many of your teams. You want to consolidate all these tags, across providers, into one `data` tag. 

You create a tag key called `Teams` to override existing tags.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

You add the corresponding set of virtual tag values and filters. In this example, all permutations of the `data` team tag are combined into one virtual tag.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-tag-consolidate-value.png" />
</div>

Within Cost Reports, you can easily filter by this tag in Cost Reports to see all costs related to the `data` team. This saves you the work of having to always filter for all permutations of this tag. Now, you can filter by just one filter criteria.

***Pic of Cost Report filtered to a team tag.***

## Filter and Group by Virtual Tags

You can filter by virtual tags in Cost Reports, cost allocation segments, and when creating saved filters. Virtual tags are visible along with your existing provider tags. Use the **Tag** (**Label** in GCP) filter and grouping option. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="80%" src="/img/virtual-tag-consolidate-report.png" />
</div>

## Delete a Virtual Tag

To delete a virtual tag, navigate to the [Virtual Tags](https://console.vantage.sh/settings/virtual_tags) page. All existing tag keys are displayed. Click the trashcan item next to a tag key. Your data will be re-tagged, excluding the deleted virtual tag, going back to that tag’s backfill bill period. Newly ingested data will no longer be tagged with this key.