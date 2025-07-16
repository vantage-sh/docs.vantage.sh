---
id: annotations
title: Annotations
description: Add annotations to Cost Reports to describe cost events or infrastructure. 
keywords:
    - annotations
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Annotations

Annotations add context to events or data points within [Cost Reports](/cost_reports) or [Segment Reports](/segments). The annotation consists of a date and a comment. Annotations are particularly useful for describing the infrastructure or cost event that occurred on a particular date.

## Add an Annotation

You can add annotations directly from the chart on a report or from the **Annotations** sidebar.

<Tabs>
  <TabItem value="add-graph" label="Add from a Cost Report Chart" default>
    <ol>
    <li>From any report chart or graph, hover over the chart's bars or line and select any date point you want to annotate.</li>
    <li>The <strong>Annotations</strong> sidebar is displayed on the right side of the screen. Your username is displayed as well as the date that corresponds with the selected date point on the chart. Enter a comment for the annotation.</li>
    <li>To save the annotation, click the arrow icon on the bottom right of the comment box.</li>
    </ol>
    <div style={{ display: "flex", justifyContent: "center", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", borderRadius: "10px", overflow: "hidden" }}>
    <img alt="Add Annotation From Graph" width="80%" src="/img/annotation-add-graph.gif" style={{ clipPath: "inset(10px 0 0 0)" }} />
    </div>
    </TabItem>
  <TabItem value="add-sidebar" label="Add from the Annotation Sidebar" default>
    <ol>
    <li>From the top-right of any report, click the <strong>Annotation</strong> icon (looks like a word bubble).</li>
    <li>The <strong>Annotations</strong> sidebar is displayed. Click <strong>New</strong>.</li>
    <li>Select the appropriate date from the date picker, and enter a comment.</li>
    <li>To save the annotation, click the arrow icon on the bottom right of the comment box.</li>
    </ol>
  </TabItem>
</Tabs>

---

:::note
When an annotation is created, [a corresponding issue](/annotations#issue) is also created. 
:::

## View and Edit Annotations

1. To view an annotation, from the top right of any Cost Report, click the **Annotation** icon (looks like a word bubble). 
2. The **Annotations** sidebar is displayed, with the most recently added annotation at the top of the list. A vertical line is also displayed on the Cost Report chart or graph for dates that have an existing annotation.
3. To edit the annotation, click the ellipses (...) on the top right of the annotation, then select **Edit**. 
4. Select a new date from the date picker and/or edit the text in the comment field. 
5. To save the annotation, click the arrow icon on the bottom right of the comment box.

## Hide Annotations

1. From the top right of any Cost Report, click the **Annotation** icon (looks like a word bubble).
2. From the top right of the Annotations pane, click the **Annotations Settings** icon (looks like a gear). 
3. You can toggle an annotation's visibility in the **Chart Display** section.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Hiding Annotations" width="80%" src="/img/hide-annotations.png" />
</div>

## Delete an Annotation

1. To delete an annotation, from the top right of any Cost Report, click the **Annotation** icon (looks like a word bubble). 
2. The **Annotations** sidebar is displayed. Click the ellipses (...) on the top right of the annotation, then select **Remove** > **OK**.
    :::tip
    Instead of deleting an annotation, consider resolving the annotation, as described below.
    :::

## Resolve an Annotation

1. To resolve an annotation, from the top right of any Cost Report, click the **Annotation** icon (looks like a word bubble). 
2. The **Annotations** sidebar is displayed. Click the ellipses (...) on the top right of the annotation, then select **Mark as Resolved**.
    :::tip
    To unresolve an annotation, repeat the previous steps, but instead, select the **Unresolve** option.
    :::

### View Resolved Annotations

By default, Cost Reports are filtered to hide resolved annotations from the annotations list and the chart/graph. 

1. To view resolved annotations, click the **Annotation** icon at the top right of the screen. 
2. From the **Annotations** sidebar, click the filter icon (next to the **New** button), then click **Show Resolved**. Resolved annotations are displayed in both views.

## Share an Annotation

1. To share an annotation with a teammate, from the top right of any Cost Report, click the **Annotation** icon. 
2. The **Annotations** sidebar is displayed. Click the ellipses (...) on the top right of the annotation, then select **Copy Link**. A link is added to your clipboard, which you can use to share with a teammate. 

## View Corresponding Issues {#issue}

When an annotation is created, a corresponding [issue](/issues) is also automatically created. 

1. To open the corresponding issue, click the ellipses (...) on the top right of the annotation. 
2. Then, select **Go to Issue**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="View of issue created by an annotation" width="80%" src="/img/annotation-issues.png" />
</div>

The issue is automatically created with the **Annotation** category label attached and a link to the annotated report. The issue's title will default to the report name and annotation's date. You can use the comment function in the issue to also comment on the annotation.

When an annotation is resolved, the corresponding issue will become a closed issue. Unresolving an issue reopens the corresponding issue.

## Budget Alert Annotations

When a budget alert is triggered, an annotation is added to the corresponding Cost Report. See the [Budget Alerts](/budgets#create-alerts) documentation for details on how to set up budget alerts.
