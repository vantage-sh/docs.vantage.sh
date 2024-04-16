---
id: virtual_tagging
name: Virtual Tagging
description: Create virtual tags within Vantage to provide a consistent tagging schema across cloud providers.
keywords:
    - Virtual tagging
    - Vantage tags
---

# Virtual Tagging

You can create virtual tags to consistently tag costs across providers in Vantage. This feature can help to increase tagging coverage across your cloud infrastructure. Create cost allocation tag keys with a set of corresponding values and filters directly in the Vantage without needing to involve your engineering team in making infrastructure changes. All provider integrations in Vantage are supported, including providers that don't natively support tags.

Virtual tags are available for filtering and aggregating on all [Cost Reports](/cost_reports) and [cost allocation segments](/segments). They can also be used in filter criteria on [saved filters](/saved_filters). There is no limit to the number of tag keys or values you define.

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
3. All existing virtual tags are displayed alphabetically. You can edit and delete any existing tags from this screen. To add a new virtual tag, click **Create a Virtual Tag**. 
4. Enter a title for the **Tag Key**. 
5. For **Billing Period Backfill**, select a billing period (e.g., **Apr 2024**) for which the tag should be backfilled. 
6. Enable the **Can Override** toggle if you want the virtual tag to override an existing service cost value. For example, if you create a virtual tag that conflicts with an existing provider tag, this option will override the existing provider tag key in Vantage reports.
7. In the **Values** section, click **+Add a Value**:
   - Enter a **Tag Value** title.
   :::note
   Titles can contain only letters, numbers, and the following characters: _ - & + , . : / \
   :::
   - Click **+ Add a Filter** and specify the tag value’s filter criteria. Virtual tag filters function just like filters on Cost Reports and cost allocation segments. For information on how to create detailed filters, see the [Cost Reports](/cost_reports#filtering-cost-reports) documentation. 
   :::note
   You cannot use saved filters to define a virtual tag value's filters.
   :::
8. At the top, click **Save**.
    
Processing tag changes usually takes under an hour. At the top of the **Virtual Tags** screen, the processing status is displayed. Processing times vary based on the number of tags and volume of data you have imported into Vantage.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Virtual Tag screen with a processing status displayed for Fastly and New Relic" width="80%" src="/img/virtual-tag-status.png" />
</div>

### Virtual Tag Order 

Tag values are arranged in priority order on the **Virtual Tags** screen. You can move tag values up and down in the UI to reorder them, as demonstrated in the visual example below. 

<div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
     <img alt="GIF of two tag values, staging and production, being reordered in the Tags UI" width="80%" src="/img/reorder-tags.gif"/>
</div>
<br/>

When cost data is ingested into Vantage, the first value that matches the corresponding filters will be applied to that line item. In cases where filters overlap, the order of tag values within each key determines the value that is applied.

## Filter and Group by Virtual Tags

You can filter by virtual tags in Cost Reports, cost allocation segments, and when creating saved filters. Virtual tags are visible along with your existing provider tags. Use the **Tag** (**Label** in GCP) filter and grouping option. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report filter with two filters applied: one for AWS costs for the team/data tag and one for GCP costs with the same tag" width="80%" src="/img/virtual-tag-consolidate-report.png" />
</div>

## Virtual Tagging Examples 

The following examples demonstrate how to use virtual tagging in a multi-provider organization. 

###  Virtual Tagging Example 1: Cross-Provider Tagging

You want to create a tag mapping for each of your teams that maps corresponding teams with certain services and provider accounts.

You create a tag key called `Teams`. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Tag Key field displayed in the Virtual Tags UI; the name Teams is entered" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

You add the corresponding set of virtual tag values and filters:

- The `data` team tag value corresponds with a filter for all costs for GCP BigQuery and Amazon Redshift.
- The `mobile` team tag value corresponds with a filter for its related GCP projects and AWS accounts.
- You continue this pattern and create similar values with corresponding filters for your other teams.

<div style={{display:"flex", overflow:"scroll"}}>
    <img alt="A sample Tag Value field for a value of data with filter for Service of BigQuery and Amazon Redshift" width="60%" src="/img/virtual-tag-provider-value-1.png" />
    <img alt="A sample Tag Value field for a value of data with a filter for GCP Project of mobile and AWS account of mobile" width="60%" src="/img/virtual-tag-provider-value-2.png" />
</div>

Within Cost Reports, you can easily filter and group by these tag options to easily see costs for an individual team. In the below visual example, the Cost Report is grouped by the **team** tag, and the **mobile** and **data** values are displayed along with the other team tag values you created.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Cost Report grouped by Tag showing a mobile and data tag" width="100%" src="/img/virtual-tag-provider-report.png" />
</div>

###  Virtual Tagging Example 2: Consolidate Existing Tags

You have a tagging practice established at your organization, but teams often create tags with spelling variations, tags with typos, or they create duplicate tags. For example, the `data` team has resources tagged with `data`, `Data`, and `data-prod`. This is an issue across many of your teams. You want to consolidate all these tags, across providers, into one `data` tag. 

You create a tag key called `Teams` to override existing tags.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Tag Key field displayed in the Virtual Tags UI; the name Teams is entered" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

You add the corresponding set of virtual tag values and filters. In this example, all permutations of the `data` team tag are combined into one virtual tag.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for a value of AWS team tags equaling data, data-prod, and Data. Another value for a GCP team Label equaling data" width="80%" src="/img/virtual-tag-consolidate-value.png" />
</div>

Within Cost Reports, you can easily filter by this tag to see all costs related to the `data` team. This saves you the work of needing to always filter for all permutations of this tag. Now, you need to filter by only one tag.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report with a filter for AWS and GCP team tag of data" width="80%" src="/img/virtual-tag-consolidate-report.png" />
</div>

## Delete a Virtual Tag

To delete a virtual tag, navigate to the [Virtual Tags](https://console.vantage.sh/settings/virtual_tags) page. All existing tag keys are displayed. Click the trashcan icon next to a tag key. Your data will be re-tagged, excluding the deleted virtual tag, going back to the deleted tag’s backfill bill period. Newly ingested data will no longer be tagged with the deleted tag.