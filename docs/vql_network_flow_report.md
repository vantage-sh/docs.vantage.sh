---
id: vql_network_flow_report
title: VQL for Network Flow Reports
description: This page walks through the Vantage Query Language, or VQL, for use in Network Flow Reports.
keywords:
  - VQL
  - Vantage Query Language
  - Terraform
---

# VQL for Network Flow Reports

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to use VQL when querying Network Flow Reports in the API or using the Terraform Provider.

:::tip
If you need help constructing a VQL query, navigate to the [**Network Flow Reports**](https://console.vantage.sh/network_flow_log_reports) page and click **New Network Flow Report**. From the top left, open the **Filters** menu. Create a filter and click the **View as VQL** button at the top of the **Filters** menu to see a filter's VQL representation. You can copy this syntax to use within your API calls.
:::

## Network Flow Reports VQL Schema

VQL for Network Flow Reports comprises one namespace, `network_flow_logs`, which represents the available [filters](/network_flow_reports/#filter-and-group-a-network-flow-report) on Network Flow Reports in the Vantage console. To reference a filter, use the following syntax: `namespace.field` (e.g., `network_flow_logs.account_id`). The following fields are available within the `network_flow_logs` namespace.

<table style={{ width: '100%' }}>
  <thead>
    <tr>
      <th>Namespace</th>
      <th>Field</th>
      <th>VQL Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="26"><code>network_flow_logs</code></td>
      <td><code>account_id</code></td>
      <td><a href="#account">Account ID example</a></td>
    </tr>
    <tr>
      <td><code>az_id</code></td>
      <td><a href="#az">Availability Zone ID example</a></td>
    </tr>
    <tr>
      <td><code>dstaddr</code></td>
      <td><a href="#dstaddr">Destination Address example</a></td>
    </tr>
    <tr>
      <td><code>dsthostname</code></td>
      <td><a href="#dsthostname">Destination Hostname example</a></td>
    </tr>
    <tr>
      <td><code>interface_id</code></td>
      <td><a href="#interface-id">Interface ID example</a></td>
    </tr>
    <tr>
      <td><code>instance_id</code></td>
      <td><a href="#instance-id">Instance ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_resource_uuid</code></td>
      <td><a href="#peer-resource-uuid">Peer Resource UUID example</a></td>
    </tr>
    <tr>
      <td><code>peer_account_id</code></td>
      <td><a href="#peer-account-id">Peer Account ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_vpc_id</code></td>
      <td><a href="#peer-vpc-id">Peer VPC ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_regions</code></td>
      <td><a href="#peer-regions">Peer Regions example</a></td>
    </tr>
    <tr>
      <td><code>peer_az_id</code></td>
      <td><a href="#peer-az-id">Peer AZ ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_subnet_id</code></td>
      <td><a href="#peer-subnet-id">Peer Subnet ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_interface_id</code></td>
      <td><a href="#peer-interface-id">Peer Interface ID example</a></td>
    </tr>
    <tr>
      <td><code>peer_instance_id</code></td>
      <td><a href="#peer-instance-id">Peer Instance ID example</a></td>
    </tr>
    <tr>
      <td><code>region</code></td>
      <td><a href="#region">Region example</a></td>
    </tr>
    <tr>
      <td><code>resource_uuid</code></td>
      <td><a href="#resource-uuid">Resource UUID example</a></td>
    </tr>
    <tr>
      <td><code>srcaddr</code></td>
      <td><a href="#srcaddr">Source Address example</a></td>
    </tr>
    <tr>
      <td><code>srchostname</code></td>
      <td><a href="#srchostname">Source Hostname example</a></td>
    </tr>
    <tr>
      <td><code>subnet_id</code></td>
      <td><a href="#subnet-id">Subnet ID example</a></td>
    </tr>
    <tr>
      <td><code>traffic_category</code></td>
      <td><a href="#traffic-category">Traffic Category example</a></td>
    </tr>
    <tr>
      <td><code>traffic_path</code></td>
      <td><a href="#traffic-path">Traffic Path example</a></td>
    </tr>
    <tr>
      <td><code>vpc_id</code></td>
      <td><a href="#vpc-id">VPC ID example</a></td>
    </tr>
  </tbody>
</table>

### Keywords

VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents. Note that each expression started with `provider = 'aws'`, followed by additional filters.

| Keyword               | Description                                                            | VQL Sample                                                                                                            | Explanation                                                                                                                                                                                                                                                                                                         |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AND`                 | Logical AND operator                                                   | `(network_flow_logs.account_id = '123456789012') AND (network_flow_logs.dsthostname = 'datadoghq.com')`                                                           | This example filters for a specific account and destination hostname, where both conditions must be true.                                                                                                                                                                                                           |
| `OR`                  | Logical OR operator                                                    | `(network_flow_logs.account_id = '123456789012') AND (network_flow_logs.dsthostname = 'datadoghq.com') OR (network_flow_logs.account_id = '09876543212') AND (network_flow_logs.dsthostname = 'github.com')`                                                        | This example looks for results associated with two accounts and destination hostnames. At least one condition must be true.                                                                                                                                                                                                                       |
| `!=`                  | Is not                                                    | `(network_flow_logs.dsthostname != 'github.com')`                                                        | This example looks for results that are any destination hostname type except for `github.com`.                                                                                                                                                                                                                       |
| `IN` and `NOT IN` | Used to compare against an array/list                                            | `(network_flow_logs.peer_regions IN ('us-east-1','us-west-2'))`                                      | This example searches for results within a set of regions. <br/><br/>This same query also works for `NOT IN` where the results are anything matching everything except for these regions: `(network_flow_logs.peer_regions NOT IN ('us-east-1','us-west-2'))`. |
| `LIKE` and `NOT LIKE` | Performs string comparisons                                            | `(network_flow_logs.az_id LIKE '%use1%')`                                      | This example selects data where the Availability Zone contains `use1`, such as `use1-az1`. <br/><br/>This same query also works for `NOT LIKE` where data does not contain a particular string: `(network_flow_logs.az_id NOT LIKE '%use1%')`. |

With these operators and keywords, you can construct complex filter conditions in VQL.

## VQL Examples {#examples}

The following examples cover common use cases for VQL.

### Network Flows by Account ID {#account}

Network flows from a set of account IDs.

```sql
(network_flow_logs.account_id IN ('123456789012','098765432109'))
```

### Network Flows by Availability Zone ID {#az}

Filter for a substring based on Availability Zone.

```sql
(network_flow_logs.az_id LIKE '%use1%')
```

### Network Flows by Destination Address {#dstaddr}

All network flows that do not match a particular destination adddress.

```sql
(network_flow_logs.dstaddr != '1.123.456.7')
```

### Network Flows by Destination Hostname {#dsthostname}

Network flows from a set of destination hostnames.

```sql
(network_flow_logs.dsthostname IN ('datadoghq.com','github.com','sentry.io'))
```

### Network Flows by Interface ID {#interface-id}

Network flows for a particular interface ID.

```sql
(network_flow_logs.interface_id = 'eni-000012345a6789123')
```

### Network Flows by Instance ID {#instance-id}

Network flows for a particular instance ID.

```sql
(network_flow_logs.instance_id = 'i-0001a23b456c780c1')
```

### Network Flows by Peer Resource UUID {#peer-resource-uuid}

Network flows for peer resource UUIDs matching a substring.

```sql
(network_flow_logs.peer_resource_uuid LIKE '%arn:aws:ec2%')
```

### Network Flows by Peer Account ID {#peer-account-id}

Network flows for anything that's not a particular peer account ID.

```sql
(network_flow_logs.peer_account_id != '123456789012')
```

### Network Flows by Peer VPC ID {#peer-vpc-id}

Network flows for two different peer VPC IDs.

```sql
(network_flow_logs.peer_vpc_id IN ('vpc-12345678','vpc-0987654'))
```

### Network Flows by Peer Regions {#peer-regions}

Network flows for anything outside a set of peer regions.

```sql
(network_flow_logs.peer_regions NOT IN ('us-east-1','us-west-2'))
```

### Network Flows by Peer AZ ID {#peer-az-id}

Network flows for a specific peer AZ.

```sql
(network_flow_logs.peer_az_id = 'use1-az1')
```

### Network Flows by Peer Subnet ID {#peer-subnet-id}

Network flows for any peer subnet IDs that do not contain a substring.

```sql
(network_flow_logs.peer_subnet_id NOT LIKE '%subnet-022%')
```

### Network Flows by Peer Interface ID {#peer-interface-id}

Network flows based on a peer interface ID substring.

```sql
(network_flow_logs.peer_interface_id LIKE 'eni-0a1b2c3d%')
```

### Network Flows by Peer Instance ID {#peer-instance-id}

Network flows excluding a particular peer instance ID.

```sql
(network_flow_logs.peer_instance_id != 'i-0a1b2c3d4e5f67890')
```

### Network Flows by Region {#region}

Network flows in multiple regions.

```sql
(network_flow_logs.region IN ('us-east-1', 'us-west-2', 'eu-central-1'))
```

### Network Flows by Resource UUID {#resource-uuid}

Network flows for resources not matching a specific UUID substring.

```sql
(network_flow_logs.resource_uuid NOT LIKE '123e4567%')
```

### Network Flows by Source Address {#srcaddr}

Network flows from a set of source addresses.

```sql
(network_flow_logs.srcaddr IN ('192.168.1.1', '10.0.0.5', '172.16.0.10'))
```

### Network Flows by Source Hostname {#srchostname}

Network flows excluding specific source hostnames.

```sql
(network_flow_logs.srchostname NOT IN ('example.com', 'internal.service.local'))
```

### Network Flows by Subnet ID {#subnet-id}

Network flows for subnets with a specific prefix.

```sql
(network_flow_logs.subnet_id LIKE 'subnet-0a1b%')
```

### Network Flows by Traffic Category {#traffic-category}

Only cross-region traffic.

```sql
(network_flow_logs.traffic_category = 'cross-region')
```

### Network Flows by Traffic Path {#traffic-path}

Network flows for Inter-Region VPC Peering. Traffic paths have a specific key, as described below.

| Key | Traffic Path                                      |
|----|--------------------------------------------------|
| 1  | In VPC                                          |
| 2  | Internet Gateway or Gateway VPC Endpoint       |
| 3  | Virtual Private Gateway                        |
| 4  | Intra-Region VPC Peering                       |
| 5  | Inter-Region VPC Peering                       |
| 6  | Local Gateway                                  |
| 7  | Gateway VPC Endpoint (Nitro-based instances)  |
| 8  | Internet Gateway (Nitro-based instances)      |


```sql
(network_flow_logs.traffic_path = '5')
```

### Network Flows by VPC ID {#vpc-id}

Everything except for a specific VPC.

```sql
(network_flow_logs.vpc_id != 'vpc-12c12345a12345678')
```

### Multiple Filters

Complex filter that shows combining two different statements using `OR` with multiple criteria.

```sql
(network_flow_logs.dsthostname = 'datadoghq.com') AND (network_flow_logs.account_id = '1234354678901') OR (network_flow_logs.dsthostname = 'github.com') AND (network_flow_logs.account_id = '90876543211')
```
