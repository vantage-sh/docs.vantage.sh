---
id: virtual_tagging
name: Virtual Tagging
description: Create virtual tags within Vantage to provide a consistent tagging schema across cloud providers.
keywords:
  - Virtual tagging
  - Vantage tags
---

import ReactPlayer from 'react-player'
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Virtual Tagging

You can create virtual tags to consistently tag costs across providers in Vantage. This feature can help to increase tagging coverage across your cloud infrastructure. Create cost allocation tag keys with a set of corresponding values and filters directly in the Vantage without needing to involve your engineering team in making infrastructure changes. All provider integrations in Vantage are supported, including providers that don't natively support tags.

Virtual tags are available for filtering and aggregating on all [Cost Reports](/cost_reports) and [cost allocation segments](/segments). They can also be used in filter criteria on [saved filters](/saved_filters). There is no limit to the number of tag keys or values you define.

:::tip
To get started with virtual tagging, you can also view a video demo on [Vantage University](/vantage_university_cost_allocation) 🎓.
:::

## Virtual Tags vs. Saved Filters vs. Cost Allocation Segments

Virtual tags can be considered foundational to the rest of the data within Vantage. They should remain fairly static, and changes should be considered delicate. These changes will flow across all data and apply to all workspaces. The most common tag keys will be items like team, cost center, and environment.

Segments can then be used to create different hierarchical views for tagged data. This feature is useful for breaking down the data by different perspectives, such as by cost center or by OPEX/CapEX.

Saved filters can then be used in a more ad-hoc fashion to add lenses on top of base data. For instance, you could create a saved filter just for _North America_ that standardizes a set of regions across providers and can be used by teams on their reports or dashboards without having to know the set of filters needed to create the list of regions. When new regions come online, it’s easy to modify the saved filter to include this region.

:::note
If you want to transition any of your cost allocation segments to virtual tags, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

## Custom Value Tags

With custom value tags, you can create new cross-provider cost allocation tags to help better your tagging strategy. For example, you may have a series of resource tags, by product, across each of your providers. You can create custom tags in Vantage to combine those costs into one unique product tag for all resources in that product group.

See the [example section](/virtual_tagging#custom-values-example) below for details.

## Cost-Based and Business Metrics-Based Allocation Tags

The cost-based and business metrics-based allocation tag types allow for _dynamic cost allocation_, which is the process of allocating costs based on another existing cost or metric. See the below video for an introduction to dynamic cost allocation.

<div style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', height: '0', overflow: 'hidden' }}>
  <iframe 
    src="https://www.youtube.com/embed/67RbHPtfgEE?si=3J14Pjwos6ubUdSd?rel=0&color=white&modestbranding=1&wmode=transparent" 
    allowFullScreen
    style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%', borderRadius: '10px' }}
  ></iframe>
</div>

### Cost-Based Allocation Tags

With cost-based allocation tags, you can create a dynamically allocated cost structure. Select a set of input costs (e.g., all AWS costs), an existing cost tag to use for allocation (e.g., a teams cost tag), and an output cost (e.g, a static cost, like AWS Support) that you want to be allocated the same way as your input cost.

See the [example section](/virtual_tagging#cost-based-allocation-example) below for details.

### Business Metrics-Based Allocation Tags

With business metrics-based allocation tags, you select an existing [business metric](/per_unit_costs) (e.g., CPU use per product) and indicate your output cost (e.g., all GCP Compute costs) so that the allocation of the output cost mimics the percentage allocation of the existing business metric.

See the [example section](/virtual_tagging#metric-based-allocation-example) below for details.

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
7. In the **Values** section, click **+Add**. Select whether you want to create a **Custom Value**, **Business Metric**, or **Cost Based** value. Click through the tabs below for instructions on each value type.
   :::note
   You cannot use an existing Virtual Tag within the **Output Costs Filter** for any type of new Virtual Tag. You can, however, select an existing _provider tag_ (e.g., one that comes from AWS).
   :::
   <Tabs>
   <TabItem value="custom" label="Add Custom Value" default>
   <ol>
   <li>Click <strong>Assign Custom Value</strong>.</li>
   <li>Enter a <strong>Tag Value</strong> title. Titles can contain only letters, numbers, and the following characters: <code>\_ - & + , . : / \</code>. You cannot use saved filters to define a virtual tag value's filters.</li>
   <li>Specify the tag value's filter criteria (i.e., <b>Output Cost Filters</b>). These filters function just like filters on Cost Reports and cost allocation segments. For information on how to create detailed filters, see the <a href="/cost_reports">Cost Reports</a> documentation.</li>
   </ol>
   </TabItem>
   <TabItem value="business" label="Add Business Metric Value" default>
   <ol>
   <li>Click <strong>Connect a Business Metric</strong>.</li>
   <li>Select an existing <a href="/per_unit_costs">business metric</a>.</li>
   <li>Select the <strong>Output Costs Filter</strong> that will be split among your tag values based on your business metric. These filters function just like filters on Cost Reports and cost allocation segments. For information on how to create detailed filters, see the <a href="/cost_reports">Cost Reports</a> documentation.</li>
   </ol>
   </TabItem>
   <TabItem value="cost" label="Add Cost Based Value" default>
   <ol>
   <li>Select <strong>Cost Based</strong>.</li>
   <li>Select an <strong>Input Costs Filter</strong> to specify which category of input costs to include in the allocation. These filters function just like filters on Cost Reports and cost allocation segments. For information on how to create detailed filters, see the <a href="/cost_reports">Cost Reports</a> documentation. <br/><blockquote><i><b>Tip:</b> For most use cases, you should set a filter for <b>Charge Type = Usage</b> on the input filter to ensure you are matching on only usage-related costs and ignoring costs related to items like credits, taxes, fees, etc.</i></blockquote></li>
   <li>Select an existing cost <strong>Tag Key</strong>. This value can be an existing tag you have in one of your cost providers, like AWS.</li>
   <li>Select the <strong>Output Costs Filter</strong> to indicate the costs that will be split among your tag values based on your input cost filter.</li>
   </ol>
   </TabItem>
   </Tabs>

   ***

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

## Delete a Virtual Tag

To delete a virtual tag, navigate to the [Virtual Tags](https://console.vantage.sh/settings/virtual_tags) page. All existing tag keys are displayed. Click the trashcan icon next to a tag key. Your data will be re-tagged, excluding the deleted virtual tag, going back to the deleted tag’s backfill bill period. Newly ingested data will no longer be tagged with the deleted tag.

## Virtual Tagging Examples {#examples}

The following examples demonstrate how to use virtual tagging in a multi-provider organization.

### Custom Value Examples {#custom-values-example}

#### Example 1: Cross-Provider Tagging

You want to create a tag mapping for each of your teams that maps corresponding teams with certain services and provider accounts.

##### Step 1: Create a New Tag

You create a tag key called `Teams`.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Tag Key field displayed in the Virtual Tags UI; the name Teams is entered" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

##### Step 2: Add Tag Values and Filters

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

#### Example 2: Consolidate Existing Tags

You have a tagging practice established at your organization, but teams often create tags with spelling variations, tags with typos, or they create duplicate tags. For example, the `data` team has resources tagged with `data`, `Data`, and `data-prod`. This is an issue across many of your teams. You want to consolidate all these tags, across providers, into one `data` tag.

##### Step 1: Create a New Tag

You create a tag key called `Teams` to override existing tags.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Tag Key field displayed in the Virtual Tags UI; the name Teams is entered" width="80%" src="/img/virtual-provider-tag-key.png" />
</div>

##### Step 2: Add Tag Values and Filters

You add the corresponding set of virtual tag values and filters. In this example, all permutations of the `data` team tag are combined into one virtual tag.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for a value of AWS team tags equaling data, data-prod, and Data. Another value for a GCP team Label equaling data" width="80%" src="/img/virtual-tag-consolidate-value.png" />
</div>

Within Cost Reports, you can easily filter by this tag to see all costs related to the `data` team. This saves you the work of needing to always filter for all permutations of this tag. Now, you need to filter by only one tag.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A Cost Report with a filter for AWS and GCP team tag of data" width="80%" src="/img/virtual-tag-consolidate-report.png" />
</div>

### Cost-Based Allocation Example {#cost-based-allocation-example}

In your organization, teams share resources, such as RDS databases or EC2 instances, and each team consumes different percentages of these resources each month. Your organization is also charged a static support fee each month for AWS. As shown in the diagram below, you want to allocate a portion of the support fee to each team based on their proportional use of AWS resources. So in the below example, since the Infra team is responsible for 50% of all AWS costs, they should also be responsible for 50% of the support fee. You can create a cost-based allocation virtual tag for allocating portions of the support fee to each respective team.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A flowchart that has the AWS logo in a block at the top. AWS has three arrows pointing to tag icons that say Infra 50%, Mobile 20%, and Data 30%. These tags point to a box that says Dynamic Cost Allocation with the icon for AWS Support. This box has three arrows that point to three boxes. The boxes say Infra Team AWS Support Costs 50%, Mobile Team AWS Support Costs 20%, and Data Team AWS Support Costs 30%." width="60%" src="/img/cost-based-example.png" />
</div>

#### Prerequisites

You have an existing provider tag in AWS that identifies resources for your teams. This tag will be used in step 2.

#### Step 1: Create a New Cost-Based Allocation Tag

- Navigate to **Settings > Virtual Tags**.
- Create a new virtual tag.
- Select the **Cost-Based** option for the tag value.

#### Step 2: Select an Input Cost Filter

For your input cost, select **All AWS Costs**. Set an additional filter for the **Usage** charge type to filter on only usage-related costs. This filter will ignore costs related to items like credits, taxes, fees, etc.

#### Step 3: Select a Tag Key

You select your existing **teams** tag key you have in AWS that will be used for allocating costs.

#### Step 4: Select an Output Cost Filter

In this example, since your infrastructure team is responsible for 50% of all AWS costs, the mobile team for 20%, and the data team for 30%, you can mimic this allocation across another static cost, or your output cost. Select the filters for the AWS support fee.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for AWS Support Fee costs" width="70%" src="/img/virtual-tag-support-fee.png" />
</div>

Once the tag is created, create a new Cost Report and add the following criteria:

- Create a filter for AWS Support costs.
- Add grouping criteria to group by your new cost-based dynamic allocation tag.

The resulting report shows how much of the support fee each team is allocated.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for AWS Support Fee costs" width="100%" src="/img/virtual-tag-support-fee-report.png" />
</div>

### Business Metrics-Based Allocation Example {#metric-based-allocation-example}

You are working with your infrastructure team and want to ensure that the proportional cost of CPU time on a shared resource is allocated to the distinct cost centers that are consuming the CPU. In the below example, you want each team’s portion of CPU usage billed as a corresponding percentage of the overall Namespace CPU cost. So, if Team A uses 30% of the resource’s CPU, then they should be billed a proportional percentage of the total Namespace’s costs.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A flowchart that has a CPU icon in a block at the top and says Shared Resource CPU. CPU has two arrows pointing to two boxes with people icons that say Team A CPU Usage and Team B CPU Usage. These boxes point to a box that says Total Namespace Costs with the Kubernetes icon. This box has two arrows that point to two boxes that say Portion of Namespace Costs Allocated to Team Based on Portion of CPU Usage." width="60%" src="/img/metric-based-example.png" />
</div>

#### Prerequisite

To determine the cost of CPU time to allocate to each respective team, you first create a [labeled business metric](/per_unit_costs/#labels) that includes the CPU time labeled by team. Vantage then calculates the respective percentage of CPU time for each team. The labeled business metric has the following format.

```
date,amount,label
2024-01-09,825,teama
2024-01-09,600,teamb
2024-01-10,500,teama
2024-01-10,200,teamb
2024-01-11,723,teama
2024-01-11,456,teamb
```

#### Step 1: Create a New Business Metrics-Based Allocation Tag

You create a new business metrics-based tag:

- Navigate to **Settings > Virtual Tags**.
- Create a new virtual tag.
- Select the **Business Metric** option for the tag value.

#### Step 2: Select the Labeled Business Metric

Search for and select the labeled business metric you just created to use for allocation.

#### Step 3: Select an Output Cost Filter

Select the Vantage costs that will be split based on the percentages calculated in your business metric. In this case, you select a filter to show costs for the specific Namespace you want to be allocated.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for specific Kubernetes namespace costs" width="90%" src="/img/virtual-tag-metric.png" />
</div>

Once the tag is created, create a new Cost Report and add the following criteria:

- Create a filter for the specific Namespace.
- Add grouping criteria to group by your new business metrics-based dynamic allocation tag.

The resulting report shows how much of the Namespace costs each team is allocated.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="A sample Tag Value field for AWS Support Fee costs" width="100%" src="/img/virtual-tag-metric-report.png" />
</div>

### Tagging Untaggable Resources in AWS Example {#untaggable-aws}

While you can apply cost and metadata tags in AWS to many resources, there are many other resources that are untaggable in AWS. Therefore, it is hard, if not almost impossible, to achieve 100% allocation in AWS alone. One quick way to first get an inventory of all untagged resources in Vantage—regardless of if they are untaggable—is to create a [Cost Report](/cost_reports) with the following filters:

- Provider is **AWS**
- Where **Not Tagged** with **Any Key**

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Untagged cost filters" width="80%" src="/img/virtual-tag-not-tagged.png" />
</div>

Then, add grouping criteria for **Service** and **Category** to get a view of the types of resources that are currently untagged. If these resources are taggable in AWS, you can add cost allocation tags there and see those tags represented in Vantage when you filter or group by specific tag. 

:::info
See the [AWS documentation](https://docs.aws.amazon.com/ARG/latest/userguide/supported-resources.html) for more information on what you can tag directly in AWS.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Untagged cost filters" width="100%" src="/img/virtual-tag-category-tags.png" />
</div>

Many services and resource categories, however, cannot be tagged in AWS. You can use Virtual Tags to create tags in Vantage for these untaggable resources. In the table below, the _Vantage Resource Filters_ column represents the filters you can set as the **Output Cost Filters** in the Virtual Tag configuration. 

For example, if you want to tag S3 Data Transfer for specific resources, you could use the following filter criteria. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Untagged cost filters" width="80%" src="/img/virtual-tag-data-transfer.png" />
</div>

<table>
  <thead>
    <tr>
      <th>AWS Resource</th>
      <th>Description</th>
      <th>Vantage Resource Filters</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Elastic IPs</td>
      <td><a href="https://docs.aws.amazon.com/vpc/latest/userguide/vpc-eip-overview.html">According to AWS</a>, "You can tag an Elastic IP address that's allocated for use in a VPC, however, cost allocation tags are not supported."</td>
      <td>Provider: AWS<br/><br/>Subcategory: Amazon Virtual Private Cloud contains <code>inuse</code></td>
    </tr>
    <tr>
      <td>CloudWatch Metrics</td>
      <td>CloudWatch Metrics involve performance data from AWS services, which are not taggable and are used for monitoring and alerting.</td>
      <td>Provider: AWS<br/><br/>Category: AmazonCloudWatch is Metric<br/><br/>Further filter by resource ID</td>
    </tr>
    <tr>
      <td>S3 Data Transfer</td>
      <td>Data transferred in and out of S3 buckets, which is tracked but not taggable.</td>
      <td>Provider: AWS<br/><br/>Category: Amazon Simple Storage Service is Data Transfer<br/><br/>Further filter by resource ID</td>
    </tr>
    <tr>
      <td>QuickSight resources</td>
      <td>Resources within Amazon QuickSight, such as dashboards and analyses, which do not support tagging.</td>
      <td>Provider: AWS<br/><br/>Service: Amazon Quicksight<br/><br/>Optional detailed filters for Category (e.g., Business Analytics) or individual resource ID</td>
    </tr>
    <tr>
      <td>CloudSearch resources</td>
      <td>Amazon CloudSearch domains and their configurations, which are untaggable.</td>
      <td>Provider: AWS<br/><br/>Service: Amazon CloudSearch<br/><br/>Optional detailed filters for Category (e.g., Data Transfer, Search Instance) or individual resource ID</td>
    </tr>
    <tr>
      <td>EBS Snapshot Copy</td>
      <td>Amazon EBS Snapshots that are copied between regions for Disaster Recovery or restore purposes</td>
      <td>Provider: AWS<br/><br/>Service: Amazon Elastic Block Storage (EBS)<br/><br/>Category: Storage Snapshot<br/><br/>Further filter for resource ID</td>
    </tr>
  </tbody>
</table>
