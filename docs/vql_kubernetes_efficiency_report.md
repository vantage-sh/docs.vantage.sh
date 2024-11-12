---
id: vql_kubernetes_efficiency_report
title: VQL for Kubernetes Efficiency Reports
description: This page walks through the Vantage Query Language, or VQL, for use in Kubernetes Efficiency Reports.
keywords:
  - VQL
  - Vantage Query Language
  - Terraform
---

# VQL for Kubernetes Efficiency Reports

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

This page describes how to use VQL when querying Kubernetes Efficiency Reports in the API or using the Terraform Provider.

:::tip
If you need help constructing a VQL query, navigate to the [**Kubernetes Efficiency Reports**](https://console.vantage.sh/kubernetes/efficiency_reports) page and click **New Report**. From the top left, open the **Filters** menu. Create a filter and click the **View as VQL** button at the top of the **Filters** menu to see a filter's VQL representation. You can copy this syntax to use within your API calls.
:::

## Kubernetes Efficiency Reports VQL Schema

VQL for Kubernetes Efficiency Reports comprises one namespace, `kubernetes`, which represents the available [filters](/kubernetes#efficiency-reports) on Kubernetes Efficiency Reports in the Vantage console. To reference a filter, use the following syntax: `namespace.field` (e.g., `kubernetes.category`). The following fields are available within the `kubernetes` namespace.

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
      <td rowspan="8"><code>kubernetes</code></td>
      <td><code>namespace</code></td>
      <td><a href="#namespace">Namespace example</a></td>
    </tr>
    <tr>
      <td><code>cluster_id</code></td>
      <td><a href="#cluster-id">Cluster ID example</a></td>
    </tr>
    <tr>
      <td><code>category</code></td>
      <td><a href="#category">Category example</a></td>
    </tr>
    <tr>
      <td><code>labels</code></td>
      <td><a href="#labels">Labels example</a></td>
    </tr>
  </tbody>
</table>

### Keywords

VQL includes a set of keywords to create complex filter conditions. These keywords function similar to their SQL equivalents.

| Keyword               | Description                                                            | VQL Sample                                                                                                            | Explanation                                                                                                                                                                                                                                                                                                         |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AND`                 | Logical AND operator                                                   | `(kubernetes.namespace = 'kube-system') AND (kubernetes.labels->>'app' = 'vantage-agent')`                                                           | This example filters for a specific namespace and label, where both conditions must be true.                                                                                                                                                                                                           |
| `OR`                  | Logical OR operator                                                    | `(kubernetes.namespace = 'gpu-operator') OR (kubernetes.namespace = 'vantage-dev')`                                                        | This example looks for results in two different namespaces. At least one condition must be true.                                                                                                                                                                                                                       |
| `!=`                  | Is not                                                    | `(kubernetes.cluster_id != 'dev-eks-gpu-0')`                                                        | This example looks for results that are in any cluster except for `dev-eks-gpu-0`.                                                                                                                                                                                                                       |
| `IN` and `NOT IN` | Used to compare against an array/list                                            | `(kubernetes.labels->>'app.kubernetes.io/component' IN ('csi-driver','gpu-operator','metrics'))`                                      | This example searches for results with the `app.kubernetes.io/component` key and multiple values. <br/><br/>This same query also works for `NOT IN` where the results are anything matching the label key except for those particular values: `(kubernetes.labels->>'app.kubernetes.io/component' NOT IN ('csi-driver','gpu-operator','metrics'))`. |
| `LIKE` and `NOT LIKE` | Performs string comparisons                                            | `(kubernetes.labels->>'app' LIKE '%test%')`                                      | This example selects data where the `app` label value contains `test`, such as `test-app`. <br/><br/>This same query also works for `NOT LIKE` where data does not contain a particular string: `(kubernetes.labels->>'app' NOT LIKE '%test%')`. |
| `->>`                 | This operator is used only when constructing queries related to labels | `(kubernetes.labels->>'container' = 'kube-prometheus-stack-48.4.0')` | This example looks results with the label name of `container` and value of `kube-prometheus-stack-48.4.0`.                                                                                                                                                                                                                                            |

With these operators and keywords, you can construct complex filter conditions in VQL.

## VQL Examples {#examples}

The following examples cover common use cases for VQL.

### Multiple Namespaces {#namespace}

Filter for one or the other namespace.

```sql
(kubernetes.namespace = 'kube-system') OR (kubernetes.namespace = 'default')
```

### Results from a List of Clusters {#cluster-id}

Filter for a list of different clusters.

```sql
(kubernetes.cluster_id IN ('dev-eks-gpu-0','dev-eks-UVmPe9YN'))
```

### Costs by Category {#category}

Costs for a specific category, like `cpu`.

```sql
(kubernetes.category = 'cpu')
```

### Filter by Label {#labels}

Filter based on a specific Kubernetes label, such as `app`, with the value `rollouts-demo`.

```sql
(kubernetes.labels->>'app' = 'rollouts-demo')
```

### Multiple Filters

Complex filter that shows combining two different statements using `OR` with multiple criteria.

```sql
(kubernetes.cluster_id IN ('dev-eks-gpu-0','dev-eks-UVmPe9YN')) AND (kubernetes.category = 'cpu') OR (kubernetes.cluster_id IN ('dev-eks-gpu-0','dev-eks-UVmPe9YN')) AND (kubernetes.category = 'gpu')
```
