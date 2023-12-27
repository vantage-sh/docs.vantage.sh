---
id: issues
title: Issues
description: Create and assign issues to teammates in Vantage.
keywords:
    - Issues
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Issues

Teams can use issues to coordinate and collaborate in Vantage. For example, an organization notices a sudden spike or increase in costs related to a certain service. This service has an attached tag related to a particular team. The manager creates an issue on Vantage for the team to investigate the cost anomaly. The manager can quickly see comments and progress from their team and monitor associated costs on the attached Cost Report.

You can create issues, assign them to members in a workspace, and associate issues with a Cost Report. Team members can comment on issues, adjust an issue's category and status, and estimate the potential cost-savings impact associated with the issue.

## Create Issue

1. From the top navigation, select **Financial Planning**. Then, on the left navigation, select **Issues**.
2. All existing issues are displayed. The Issues page has two tabs: Open and Closed. 
3. From the top right of the Issues screen, click **New Issue**. 
4. Add the following items:
   - Enter an issue **Title**. 
   - Add an issue description in the comment box. You can use Markdown or the formatting options to format your text. Click **Preview** above the comment box to see the text rendered with associated formats.
   - On the right panel, click the gear icon in the **Assignee** box (optional) to add one or more Vantage users.
   - For **Categories** (optional), select an option from the list. To add a new category, click **Manage Categories**. The Manage Categories screen is displayed in a new tab. You can add an delete categories from this screen. 
   - For **Linked Cost Reports** (optional), select an associated [Cost Report](/cost_reports) or [Segment Report](/segments) where the issue was identified. 
   - For **Estimated Savings Value** (optional), enter a monthly or annual estimated savings based on what you identified as the issue. 
5. Click **Create issue**. Reopen the issue. The **Status** will now be **Open**. 

Users can comment on issues as well as close completed issues.

## Close and Reopen Issues

<Tabs>
  <TabItem value="close-issue" label="Close Issue" default>
    <ol>
    <li>From the <strong>Issues</strong> list, select any issue.</li>
    <li>At the bottom of the issue, click <strong>Mark as Resolved</strong>. The issue's <strong>Status</strong> is displayed as <strong>Closed</strong>.</li>
    </ol>
    </TabItem>
  <TabItem value="reopen-issue" label="Reopen Issue" default>
    <ol>
    <li>From the Issues list, click the <strong>Closed</strong> tab option.</li>
    <li>Select a closed issue from the list.</li>
    <li>Click <strong>Reopen Issue</strong>. Issue subscribers, including assignees, will receive a notification the issue was reopened.</li>
    </ol>
  </TabItem>
</Tabs>

---

## Receive Issue Notifications

You will receive email notifications in the following situations:
- When an issue is created and you're assigned.
- When another user comments on an issue you've created, been assigned to, or also commented on.
- When an issue you are assigned to or subscribed to is closed by another user.
- When an issue you are assigned to or subscribed to is re-opened by another user.

To manually subscribe to an issue and receive notifications, open an existing issue. In the **Notifications** box, click **Subscribe**.

## Create Issues for Annotations

Issues are automatically created when an annotation is added to a Cost or Segment Report. See the [Annotations documentation](/annotations#issue) for more information.