---
id: network_flow_reports
name: Virtual Tagging
description: Network Flow Reports provide visibility by source and destination to the flows within your network that are driving costs.
toc_max_heading_level: 4
keywords:
  - Network Flow Reports
  - VPC Flow Logs
---

import ReactPlayer from 'react-player'

# Network Flow Reports

For any network-enabled resource, Network Flow Reports provide visibility by source and destination to the flows within your network that are driving costs. You can filter these reports to identify resources that are accruing network costs, generate detailed views of the sources and destinations of the network traffic, and investigate metadata on any resource in the flow. This feature makes it possible to correlate transfer charges with both external services, such as Datadog, or internal applications.

:::note
At this time, only AWS is supported. Additional support for providers with flow log functionality, such as Azure and Google Cloud, is planned for the future.
:::

## Set Up VPC Flow Log Integration {#setup}

Network Flow Reports require an existing [AWS provider integration](/connecting_aws). The Vantage AWS account-specific IAM role needs to be granted access to the S3 buckets that store your VPC Flow Logs. Vantage can automatically detect any existing S3 buckets that contain logs published by VPC Flow Logs. You need to configure this integration for each AWS account in which an S3 bucket with VPC Flow Logs is present.

:::note
There is no option to integrate with Amazon CloudWatch because of the high cost of querying CloudWatch. The Vantage integration relies on the files being available in S3.
:::

### Prerequisites {#prerequisites}

Ensure you have at least the following fields in your VPC Flow Log format to increase the discoverability of network-related costs. If you do not have these fields enabled, Vantage may be unable to properly correlate your network flows to estimated costs.

```
${action} ${bytes} ${dstaddr} ${start} ${end} ${flow-direction} ${log-status} ${region} ${srcaddr} ${account-id} ${instance-id} ${interface-id} ${subnet-id} ${vpc-id} ${az-id}
```

See the [AWS documentation](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-s3.html#flow-logs-s3-create-flow-log) for information on how to set up VPC Flow Logs that publish to S3. Vantage can ingest both Text and Parquet log file formats.

#### Cost to Enable VPC Flow Logs in AWS

Enabling VPC Flow Logs incurs both S3 storage costs and CloudWatch data ingestion costs on your AWS bill. These charges are represented in the costs for the S3 bucket where your flow logs are written to as well as an `S3-Egress` fee from CloudWatch. Unfortunately, there is no way around these costs being incurred. Vantage has contacted various AWS platform teams to attempt to remove this cost, but this is likely a limitation that AWS is unwilling to change or remove.

:::info
For more information about VPC Flow Logs pricing, see this [Cloud Cost Handbook article](https://handbook.vantage.sh/aws/services/vpc-flow-logs-pricing/).
:::

### Enable the Integration

1. From the top navigation bar, click **Active Resources.**
2. From the side navigation bar, select **Network Flow Logs**.
3. Click **Configure VPC Flow Logs**.
4. All existing S3 buckets that contain flow logs are displayed in the left panel. Select the checkbox next to any listed bucket to select all flow log files within that bucket. You can also expand any bucket to select specific flow logs.  
   :::tip
   Click **Sync All** to import all existing VPC Flow Logs in the S3 bucket. After the initial onboarding process, any new VPC Flow Logs added to that bucket will also be automatically imported each night.
   :::
   <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Network Flow Reports onboarding page for getting started" width="100%" src="/img/nfr-onboarding.png" />
    </div>
   </details>
5. The right panel contains instructions on how to get set up using either the AWS CLI or the AWS Management Console. Select the tab for your preferred option. If you have multiple connected accounts with VPC Flow Logs, instructions or code samples are provided for each account.
6. After you run the code, click **Check Permissions**. A message is displayed that indicates whether the bucket permissions were successfully set up or if they are missing. A red X is displayed next to any buckets in the left panel that do not have sufficient permissions. Some log file types may also be unsupported. See the [section below](/network_flow_reports#unsupported-logs) for details.
   <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Network Flow Report onboarding page with a bucket selected and showing a message that says Permissions are good" width="100%" src="/img/nfr-permissions.png" />
    </div>
   </details>
7. Once permissions are successfully set up, click **Connect**. A message is displayed indicating that your flow logs are importing. Click **Check Import Status** to review the status of your integration. A **Processing…** status is displayed until the import is complete.
   <details><summary>Click to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Network Flow Report processing page for imports" width="100%" src="/img/nfr-processing.png" />
    </div>
   </details>

Data is usually available within 24 hours of initially enabling the integration. You will receive an email once the data import is complete. Vantage ingests these logs nightly.

### Unsupported Logs {#unsupported-logs}

When a particular log cannot be imported, Vantage displays either an `UNSUPPORTED TRAFFIC`, `UNSUPPORTED DESTINATION`, or `UNSUPPORTED LOG FORMAT` label next to the log name in the **Manage VPC Flow Logs** onboarding workflow.

- For logs with unsupported traffic, Vantage does not import any `REJECT` flows, nor any flows that do not generate corresponding costs.
- If a log is going to any other destination than S3, the `UNSUPPORTED DESTINATION` label will be displayed next to the log.
- Unsupported log format means that your log may be missing some required columns. Hover over the `UNSUPPORTED LOG FORMAT` label to see a list of missing columns. Ensure your logs contain, at a minimum, the columns listed in the [Prerequisites](/network_flow_reports#prerequisites) section.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Mouse hovers over an unsupported log format option" width="60%" src="/img/nfr-unsupported.png" />
</div>

### Manage Existing Integrations

You can view your integration status and add additional flow logs from the [VPC Flow Logs integration](https://console.vantage.sh/settings/aws?vpc_flow_logs=true) page. At the top of the page, click **Manage**. The **Manage VPC Flow Logs** onboarding workflow is displayed. After your initial import, from this workflow, you can:

- Select additional S3 buckets to sync
- Deselect an S3 bucket to remove the bucket from syncing

:::note
If you add additional fields to your VPC Flow Log format in AWS, and you already sync these Flow Logs to Vantage, this new data will be imported to Vantage on the next nightly import.
:::

## Create a New Network Flow Report

:::tip
You are provided with three precreated reports. See the [Network Flow Report Examples section](/network_flow_reports#nfr-examples) section below for details on how to best use these reports and how to get started.
:::

Follow the steps below to create a new Network Flow Report:

1. From the top navigation, click **Active Resources**.
2. From the side navigation, select **Network Flow Reports**. All your existing Network Flow Reports are displayed, along with who created the report and the date it was created. Three reports are provided, by default, on this page: All Network Flow Logs, Cross-AZ Traffic, and Public Traffic Destinations. See the section below for tips on how to get started with these reports.
3. To create a new report, click **New Network Flow Report**.
4. A new Network Flow Report is displayed.

   - At the top of the report, a [Sankey diagram](https://en.wikipedia.org/wiki/Sankey_diagram) is provided. This diagram shows different network flows, based on your selected filters and grouping criteria. For example, in the image below, the nodes on the left side of the diagram show the sources of network traffic. Links flow from the nodes to their traffic destination (in this example, public or cross-AZ). The flow link width corresponds with the volume of traffic, and the color corresponds with the source node (e.g., yellow for _public_ in the example below).
   <div style={{display:"flex", justifyContent:"center"}}>
   <img alt="Sample Network Flow Report with cross-AZ and public traffic" width="80%" src="/img/nfr-start.png" />
   </div>
   - In the table at the bottom, the network flow information is displayed along with the volume of traffic (in bytes). The table is sorted in descending order by Estimated Cost. Each flow shows the estimated cost associated with that specific traffic route, helping you identify the most expensive data transfers. (See the [section below](/network_flow_reports#estimated-cost) for details on how the Estimated Cost field is calculated.)
   - For each listed resource, a link to the **Active Resource** screen is provided. Click this link to view additional metadata about that resource. From the **Active Resources** screen, click the **Relationships** tab to view any associated resources, such as a corresponding IGW for a VPC resource.
   <div style={{ 
       display: "flex", 
       justifyContent: "center" 
   }}>
       <div style={{ 
       boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
       borderRadius: "10px", 
       width: "80%",
       overflow: "hidden" 
       }}>
       <ReactPlayer 
           playing 
           muted 
           loop
           url='/img/nfr-provider-resource.mp4' 
           width="100%"
           height="100%"
           alt="A resource is selected in the table, the active resource view is opened, and the relationships tab is displayed."
       />
       </div>
   </div>

5. You can update the criteria that is displayed in the Sankey diagram with the following options:
   - By default, both egress and ingress traffic are displayed. Expand the **Flow Direction** menu above the diagram to change the flow to only **Egress** or **Ingress**.
   - From the top right of the diagram, update the date range that’s displayed. Click the calendar icon and select an option, such as **Last 7 Days**, **This Month**, etc.
     :::note
     By default, Vantage ingests 7 days of network flows into your account and keeps the data available for 31 days. For Enterprise customers, this retention period can be adjusted. Contact [support@vantage.sh](mailto:support@vantage.sh) if you need a longer retention period.
     :::
   - You can move the columns in the table at the bottom to visualize different flows.
   <details><summary>Click to view example image</summary>
       <div style={{ 
        display: "flex", 
        justifyContent: "center" 
    }}>
        <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
        }}>
        <ReactPlayer 
            playing 
            muted 
            loop
            url='/img/nfr-move-column.mp4' 
            width="100%"
            height="100%"
            alt="A column in the table is clicked and dragged to a new location"
        />
        </div>
    </div>
   </details>
   - You can also filter and group/add more columns to the report. See the next section for details.
6. To save the report, click **Save as New** and enter a report name. Then, click **Save**. (To edit this name, click the pencil icon in the breadcrumbs above the chart, next to the report's name.)

## Filter and Group a Network Flow Report

By default, a Network Flow Report is grouped by the following fields:

- Source Resource UUID
- Peer Resource UUID
- Traffic Category

You can filter and group by multiple criteria in Network Flow Reports. The following fields are available for filtering and grouping.

<details>
    <summary>Click to view all fields</summary>
        <table>
        <tr>
            <th>Vantage Field</th>
            <th>Description</th>
            <th>Example</th>
        </tr>
        <tr>
            <td>Account ID</td>
            <td>AWS account ID of the source network</td>
            <td>production, 123456789012</td>
        </tr>
        <tr>
            <td>Availability Zone ID</td>
            <td>ID of the source Availability Zone</td>
            <td>us-east-1a</td>
        </tr>
        <tr>
            <td>Destination Address</td>
            <td>Specific IP address that identifies the location of where the traffic is being sent</td>
            <td>An IP, like 1.23.456.90</td>
        </tr>
        <tr>
            <td>Destination Hostname</td>
            <td>Domain name that corresponds with the IP address of the destination <i>(see note below table)</i></td>
            <td>01234.broadband.com<br/><br/>OR<br/><br/>Datadog</td>
        </tr>
        <tr>
            <td>Flow Direction</td>
            <td>Movement of network traffic relative to a specific network interface</td>
            <td>Ingress or egress</td>
        </tr>
        <tr>
            <td>Interface ID</td>
            <td>Source ENI ID</td>
            <td>eni-001d78b2agh4caa05</td>
        </tr>
        <tr>
            <td>Instance ID</td>
            <td>Source instance ID</td>
            <td>i-0b22a22eec53b9321</td>
        </tr>
        <tr>
            <td>Peer Resource UUID</td>
            <td>Destination Resource ARN or tag (if available)</td>
            <td>eni-c123ab7f9c55af9a6d<br/><br/>OR<br/><br/>example-tag</td>
        </tr>
        <tr>
            <td>Peer Account ID</td>
            <td>Destination account ID</td>
            <td>production, 123456789012</td>
        </tr>
        <tr>
            <td>Peer VPC ID</td>
            <td>Destination VPC ID</td>
            <td>vpc-12a34567b8g8a03ef</td>
        </tr>
        <tr>
            <td>Peer Region ID</td>
            <td>AWS Region of destination</td>
            <td>us-west-2</td>
        </tr>
        <tr>
            <td>Peer Availability Zone ID</td>
            <td>ID of the Availability Zone for the destination</td>
            <td>us-east-1b</td>
        </tr>
        <tr>
            <td>Peer Subnet ID</td>
            <td>Destination subnet ID</td>
            <td>subnet-123ab7f9c55af9a6d</td>
        </tr>
        <tr>
            <td>Peer Interface ID</td>
            <td>Destination ENI ID</td>
            <td>eni-001d78b2agh4caa12</td>
        </tr>
        <tr>
            <td>Peer Instance ID</td>
            <td>Destination instance ID</td>
            <td>i-0b22a22eec53b9321</td>
        </tr>
        <tr>
            <td>Region</td>
            <td>AWS Region of the source</td>
            <td>us-east-1</td>
        </tr>
        <tr>
            <td>Resource UUID</td>
            <td>Source resource ARN or tag (if available)</td>
            <td>eni-c123ab7f9c55af9a6d<br/><br/>OR<br/><br/>example-tag</td>
        </tr>
        <tr>
            <td>Source Address</td>
            <td>Specific IP address from which the network traffic originates</td>
            <td>An IP, like 1.23.456.90</td>
        </tr>
        <tr>
            <td>Source Hostname</td>
            <td>Domain name that corresponds with the IP address of the source <i>(see note below table)</i></td>
            <td>100.123.456.789.bc.googleusercontent.com<br/><br/>OR<br/><br/>Datadog</td>
        </tr>
        <tr>
            <td>Subnet ID</td>
            <td>ID of the source subnet</td>
            <td>subnet-123ab7f9c55af9a6d</td>
        </tr>
        <tr>
            <td>Traffic Category</td>
            <td>The type of traffic</td>
            <td>public, cross-AZ, cross-region, unknown<br/><br/>The unknown value means Vantage is unable to categorize the type of traffic based on the available metadata.</td>
        </tr>
        <tr>
            <td>Traffic Path</td>
            <td>Path traffic takes to reach destination, such as through a virtual private gateway</td>
            <td>
                <ul>
                    <li>In VPC</li>
                    <li>Internet Gateway or Gateway VPC Endpoint</li>
                    <li>Virtual Private Gateway</li>
                    <li>Intra-Region VPC Peering</li>
                    <li>Inter-Region VPC Peering</li>
                    <li>Local Gateway</li>
                    <li>Gateway VPC Endpoint (Nitro-based instances)</li>
                    <li>Internet Gateway (Nitro-based instances)</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>VPC ID</td>
            <td>ID of the source VPC</td>
            <td>vpc-12a34567b8g8a03ef</td>
        </tr>
        </table>

:::note
To derive the hostname, Vantage checks against some hardcoded IP ranges, and falls back to reverse DNS lookup for the IPs. If you have services with known IP ranges you want added, contact support@vantage.sh.
:::

</details>

### Apply Filter Criteria

You can add additional fields via grouping and filtering criteria. To add a new filter:

1. Click the **Filters** button on the top left of the diagram.
   - The AWS **costs where...** tile is displayed. Click **+ New Rule**.
   - From the filter dropdown menu, select an option, like **Account ID**, **Instance ID**, etc.
   - Two additional dropdown menus are displayed. Select **is**, **is not**, **contains**, or **does not contain** based on your desired filter criteria, then select one or more values from the second dropdown menu. For **contains** or **does not contain,** enter any text criteria to filter by.
     :::note
     If you are unable to see any values for a filter, this means that you are not capturing it in your VPC Flow Logs format, and therefore Vantage was unable to import this data.
     :::
   - Click **Add**.
   <details><summary>Click to view example image</summary>
       <div style={{ 
        display: "flex", 
        justifyContent: "center" 
    }}>
        <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
        }}>
        <ReactPlayer 
            playing 
            muted 
            controls
            loop
            url='/img/nfr-filtering.mp4'
            alt= "A report is filtered to public traffic" 
            width="100%"
            height="100%"
        />
        </div>
    </div>
   </details>
2. You can optionally edit your existing rule or add additional filter criteria.
   - To edit the rule you just created, select the rule, make your changes, and click **Save**.
   - If you want to add a rule to filter multiple criteria, such as filter by certain Regions and another rule to filter by certain Destination Hostnames, click **+ New Rule**. Add the additional criteria and save.
   - To add a separate rule set, click **+ New Filter**. This rule set will be displayed as **Or AWS costs where...** on the new tile.
   - To delete a rule set, click the trashcan icon on the top right of the rule set.
   <details><summary>Click to view example image</summary>
       <div style={{ 
        display: "flex", 
        justifyContent: "center" 
    }}>
        <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
        }}>
        <ReactPlayer 
            playing 
            muted 
            controls
            loop
            url='/img/nfr-other-filters.mp4'
            alt= "Additional filter options and filter sets are added to the report" 
            width="100%"
            height="100%"
        />
        </div>
    </div>
   </details>
3. Above the rule set(s), click **Apply**. The diagram will update with your existing filter criteria.

### Apply Grouping Criteria

To add additional columns to the table and diagram, expand the **Group By** menu. Select or deselect grouping criteria. As you add grouping criteria, additional nodes and flows are displayed on the diagram. Additional columns are added to the table for any new grouping criteria.

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "80%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        loop
        url='/img/nfr-group.mp4'
        alt= "A report is grouped for traffic type" 
        width="100%"
        height="100%"
    />
    </div>
</div>

## View Flow Log Metadata

For certain grouping criteria, you can view additional details about resources. Vantage provides this information when it can fetch provider resource metadata. If Vantage can resolve the IP address for the Source Address and Destination Address grouping criteria, it will also provide metadata for these groupings.

1. Open the **Group By** menu and add one or more of the following options to your grouping criteria:
   - Interface ID/Peer Interface ID
   - Subnet ID/Peer Subnet ID
   - VPC ID/Peer VPC ID
   - UUID/Peer UUID
2. Click within the table row for a resource. The **Flow Log Metadata** panel is displayed on the right of the screen. Data is provided for the **Peer** and **Peer Resource**. Click the link for any listed resource to see a provider resource report displayed.

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "80%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        loop
        url='/img/nfr-metadata.mp4'
        alt="A report is grouped by VPC ID. Then, a resource is selected and the metadata panel is displayed." 
        width="100%"
        height="100%"
    />
    </div>
</div>

## Estimated Cost Calculation for Flows {#estimated-cost}

The estimated cost for each flow is calculated by applying your blended data transfer rates to the flow of traffic. For example, if a flow is moving between one subnet to another and those subnets are in different Availability Zones, Vantage applies your cross-AZ data transfer rate to those bytes.

:::note
Because data transfer rates can be tiered, and the metadata associated with the destination may change, this calculation is a best-effort calculation; however, it does help to identify cost hotspots within your network.
:::

The flow logs cost calculation can be defined by the following formula.

$$
Estimated\ Cost=\sum_{i=1}^{N} (Rate_{i} \times Volume_{i})
$$

- $N$ is the total number of data flows.
- $R_i$ is the rate (cost per unit of data) for the $i$-th flow.
- $V_i$ is the volume of data transferred for the $i$-th flow.

Vantage first identifies the different flows of data within your network. It uses information provided within the AWS Cost and Usage Reports (CUR) to determine the specific rate (cost per unit of data) that applies to each type of data flow (e.g., cross-AZ, public). Each rate for each data flow is multiplied by the amount of data transferred in that flow. The estimated cost is determined by the sum of these products.

## Network Costs on Cost Reports

On [Cost Reports](/cost_reports), for resources that generate network traffic costs (e.g., NAT Gateways), a **Network Costs** button is displayed in the Cost Report list. Click this button to view network flows filtered to that resource. 

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="Network Costs option on a Cost Report" width="80%" src="/img/nfr-cost-report.png" />
</div>

## Network Flow Report Examples {#nfr-examples}

The following examples demonstrate common scenarios for using Network Flow Reports. These examples are based on the three reports that Vantage provides by default.

### Example 1: View All Network Traffic

This default **All Network Flow Logs** report shows all your network flows. The flow’s Resource UUID and Peer Resource UUID are provided as well as the traffic category (e.g., public). Review this report to get a high-level view of all your traffic flows.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Sample Network Flow Report with cross-AZ and public traffic" width="80%" src="/img/nfr-start.png" />
</div>

### Example 2: Identify Cross-AZ Traffic

Cross-AZ data transfer within AWS incurs higher costs compared to intra-AZ data transfer. [According to AWS](https://aws.amazon.com/ec2/pricing/on-demand/#Data_Transfer), “For data transferred between a Local Zone and an Availability Zone within the same AWS Region, "in" to and "out" from Amazon EC2 in the Local Zone” data is charged at $0.01 for _both_ transfer in and out. Transferring data between AZs requires more network bandwidth compared to transferring data within the same AZ. This additional bandwidth consumption contributes to higher costs.

In the provided cross-AZ report, you can view all cross-AZ traffic along with flow size and estimated cost. The **Destination Hostname/Address** columns show exactly where the traffic is flowing.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Sample Network Flow Report with all cross-AZ traffic" width="80%" src="/img/nfr-az.png" />
</div>

Review the highest costing flows and consider the following tips:

- Consider if you can place dependent resources within the same AZ to minimize cross-AZ data transfer.
- Utilize [VPC endpoints](https://docs.aws.amazon.com/vpc/latest/privatelink/concepts.html) to route traffic internally within AWS, reducing the need for cross-AZ traffic. This can help in minimizing data transfer costs and enhance security by keeping everything in the same VPC.

### Example 3: Examine Public Traffic

When monitoring network costs, analyzing public traffic can reveal significant insights about where your traffic is going when it reaches the public internet. By analyzing destination details, you can ensure that traffic taking the correct path or is only going to trusted and necessary endpoints. In the pre-provided public traffic report, the **Destination Hostname** grouping/column provides a human-readable format of the destination, helping you quickly identify known destination services or endpoints. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Sample Network Flow Report with all public traffic" width="80%" src="/img/nfr-public.png" />
</div>

Vantage identifies hostnames using a reverse DNS lookup, or when vendors publish static IP address ranges, such as with Datadog, can associate these IPs with the name of the service. The **Destination Address** provides the exact IP address, which is useful for detailed analysis to ensure traffic is reaching the intended destinations.

Examine this report to understand which resources are generating public traffic and where that traffic is going. Consider whether you might use alternative services, like AWS [Direct Connect](https://aws.amazon.com/directconnect/), [CloudFront](https://aws.amazon.com/cloudfront/), or [PrivateLink](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/aws-privatelink.html), to optimize data transfer and reduce costs.
