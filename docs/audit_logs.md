---
id: audit_logs
title: Audit Logs
description: This page describes how to view and filter audit logs for user actions.
keywords:
  - Audit Logs
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Audit Logs

Audit logs in Vantage provide a detailed record of changes to certain resources in your workspace. You can use them to trace when a change occurred, who made it, and what was modified. Currently, audit logs are available for Virtual Tags and Cost Reports. Each log entry contains the action performed, the actor, the source of the change, and any relevant object details.

Audit logs are available to users with the **Owner** role. Events are logged for all changes to supported resources, regardless of who made the change. Logs are retained for 24 months.

:::note
For longer log retention, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

## Access and Filter Audit Logs

You can access audit logs from the **Settings** UI or directly from a Cost Report or Virtual Tag.

<Tabs>
    <TabItem value="settings" label="From the Settings UI" default>
        <ol>
            <li>From the top navigation, select <b>Settings</b>.</li>
            <li> In the left navigation, under <b>General Settings</b>, select <b>Audit Logs</b>.</li>
        </ol>
    </TabItem>
    <TabItem value="cost-report" label="From a Cost Report">
    <p>At the top of a Cost Report, click the ellipses (…) and select <b>View Audit Logs</b>.</p> 
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Budget import errors" width="80%" src="https://assets.vantage.sh/docs/audit-log-cost-report.png" />
    </div>
    <p>A list of audit log events is displayed for that particular report.</p> 
    <p><i>Audit Logs are made available for events starting on July 22, 2025.</i></p>
    </TabItem>
    <TabItem value="virtual-tag" label="From a Virtual Tag">
    From the top right of any Virtual Tag, click the <b>View Audit Logs</b> icon. 
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Budget import errors" width="80%" src="https://assets.vantage.sh/docs/audit-log-virtual-tag.png" />
    </div>
    </TabItem>
</Tabs>

### Filter Audit Logs

1. On the **Audit Logs** screen, a table is displayed that contains a row for each audit log event. You can complete the following actions on this screen:
   - Filter audit logs by **Event** (create, update, destroy), **Object Type** (Cost Report or Virtual Tag), **Object** (the object’s name), **Workspace**, **User**, and **Source** (the console or API).
   - Filter audit logs based on a date range, up to 24 months.
   - View more details for an audit log.
2. Select any row in the table to view more details. On the details screen, you can view more details about each event.

## Audit Log Metadata and Details

All audit logs contain the following object metadata at the top of the log.

| **Field**   | **Description**                                                                                                                        | **Log Type** | Example Value(s)         |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------------------ |
| Object Type | What type of object was updated.                                                                                                        | All          | Cost Report; Virtual Tag |
| Workspace   | Workspace where the object belongs, or in the case of Virtual Tags, what workspace the user took the action from.                  | All          | Management               |
| User        | User’s name. Any actions taken by Vantage Support will be denoted in the User field as Vantage Support.                                                                                                                    | All          | Firstname Lastname       |
| User Role   | User’s role. | All          | Admin; Member            |
| Source      | Where the action originated. API includes the Vantage API and Terraform provider.                                                                                                             | All          | Console; API             |

### Object Details

Two sections are displayed to indicate what has been changed or not changed on the object. These tables list the values updated by the user. When a value or setting changes, both the previous and new values appear in the object details. In the example below, the date binning, date interval, and report groupings have all been updated. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Multi-dimensional Grouping" width="100%" src="https://assets.vantage.sh/docs/audit-report-changed-values.png" />
</div>

| Field Name                     | Description | Log Type       | Example |
|--------------------------------|-------------|--------------|---------|
| Account                        | The account associated with the Virtual Tag. | Virtual Tag  | Vantage |
| Backfill Until                 | The date until which historical data is populated in a Virtual Tag. | Virtual Tag  | Jul 31, 2025, 20:00:00 |
| Created At                     | When the object was originally created. | Cost Report and Virtual Tag  | Feb 24, 2025, 15:36:57 |
| Created By                     | The user who created the object. | Cost Report and Virtual Tag  | First Last |
| Created By Type                 | Type of user who created the object: User or Team (Service Token). | Cost Report and Virtual Tag | User |
| Date Interval                  | The date interval of the report. | Cost Report | last_month |
| Filter                         | The conditions used to filter the report's data. | Cost Report  | ```(costs.provider = 'azure' AND costs.allocation = 0.0 AND costs.region IN ('germany', 'eastus')``` |
| Groupings                      | What the report is grouped by. | Cost Report | ```["provider","tag:container"]``` |
| Key                            | The name of the Virtual Tag key. | Virtual Tag  | Test Tag |
| Previous Period Start Date/ Previous Period End Date | Separate fields for start and end date set for previous period on report. | Cost Report | 2025-01-26 |
| Refreshed At                   | When the object was last refreshed. | Cost Report and Virtual Tag  | Aug 13, 2025, 12:59:17 |
| Referenced Tag Keys By Provider| Mapping of tag keys referenced per provider. | Virtual Tag  | `{"aws": []}` |
| Settings                       | Define how the report is displayed or calculated. | Cost Report  | ```{"include_credits": false, "include_refunds": false, "include_discounts": true, "include_tax": true, "unallocated": false, "amortize": true, "show_previous_period": true, "aggregate_by": "cost"}``` |
| Start Date/ End Date           | Separate fields for start and end date set for report. | Cost Report | 2025-01-26 |
| Title                          | The title of the report. | Cost Report  | My Cost Report |
| Token                          | Unique identifier for the object. | Cost Report and Virtual Tag  | `rprt_12345abcde67890f`, `vtag_82741abfce690354` |

## Share Audit Logs

You can share an audit log with other Vantage users. The log detail page has a unique URL that allows you to share log events with any authenticated Vantage user who has access to audit logs (i.e., Owners). A URL looks similar to: `https://console.vantage.sh/settings/audit_logs/adt_lg_123a4f5a6c7dab94`.
