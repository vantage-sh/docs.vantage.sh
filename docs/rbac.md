---
id: rbac
title: Role-Based Access Control (RBAC)
description: This page provides an overview of advanced access controls and RBAC in the Vantage console.
keywords:
  - RBAC
  - Role-based access control
---

# Role-Based Access Control (RBAC)

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Checkmark from '@site/src/components/icons/Checkmark';

Advanced role-based access controls are available within Vantage for Enterprise tier accounts. These controls facilitate fine-grained management of resource access. Team-based access determines the specific Cost Reporting resources — such as Cost Reports, Dashboards, or Folders — that a user can view and/or edit.

By default, all users are members of the **Everyone** team. Owners can control which workspaces/resources the Everyone team can access.

The Owner, Team Owner, Team Editor, and Team Viewer roles are described below.

| Role        | Description                                                                                                                                                                                                                                    |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Owner       | A global account owner who has full access to all items. This role can also manage teams, integrations, and workspaces within an account. Even if the Everyone team is removed from an item, the Owner will still be able to manage that item. |
| Team Owner  | A Team Owner has full control over resources to which that team is granted access. Team Owners also have the ability to change which teams can access their team's resources. They can also manage members of their team.                      |
| Team Editor | A Team Editor has full control over resources to which that team is granted access; however, they cannot manage the members of the team.                                                                                                       |
| Team Viewer | A Team Viewer has read-only access to all resources to which that team is granted access.                                                                                                                                                      |

## Manage Account Access

Owner is the only role that can invite users to and remove users from Vantage as well as change another user's role.

<Tabs>
  <TabItem value="add-user" label="Add a New User" default>
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>General Settings</strong>, click <strong>People</strong>.</li>
      <li>On the right, click <strong>Invite People</strong>.</li> 
      <li>Enter the new user's email, then select their <strong>Role</strong> and any <strong>Teams</strong>.</li>
      <li>Click <strong>Send Invitation</strong>.</li>
      </ol> 
  </TabItem>
  <TabItem value="change-user-role" label="Change a User's Role">
    <p>A user's role in the <strong>General Settings</strong> is their role on the Everyone team.</p>
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>General Settings</strong>, click <strong>People</strong>.</li>
      <li>Hover over the user's row in the <strong>People</strong> list, then click the ellipses (<strong>...</strong>).</li> 
      <li>Click <strong>Edit</strong>, then select the new user <strong>Role</strong>.</li>
      <li>Click <strong>Save Changes</strong>.</li>
      </ol> 
  </TabItem>
</Tabs>

---

## Manage Team Access

### Create or Delete Teams (Owners Only) {#create-team}

:::note
By default, all Vantage users are part of the Everyone team. Users _cannot_ be removed from this team.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Team management window" width="50%" src="/img/team-management.png" />
</div>

1. From the top navigation, click **Settings**.
2. On the left navigation, under **General Settings**, click **Teams**.
3. On the Teams view, Owners can manage, add, or delete teams.
   - To add a team, click **Create a Team**. Add a **Name** and **Description**, then click **Create Team**.
   - To delete a team, hover over the team's name in the team list, then click the trashcan icon.

### Map Team to SSO Group (Owners Only)

Account Owners can map SSO groups to teams within Vantage. The matching teams first need to be created following the steps above. Then, follow the [Set Up SSO Group Mapping for Teams](/sso#set-up-sso-group-mappings) instructions for information on how to map teams.

### Manage a Team (Team Owners)

To manage a team, select the team from the **Teams** list. Four tabs are displayed: General, Members, Access, and API Access Tokens.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Team management tabs and options" width="60%" src="/img/team-management-details.png" />
</div>

- On the **General** tab, you can edit the team name and description.
- On the **Members** tab, you can add and remove members from a team as well as change a member's team role. Only Owners will be able to perform these actions. Additionally, Team Owners can perform these actions for their respective teams.
- On the **Access** tab, Owners and Team Owners can manage workspace access for the team as well as view resources with granted access.
- On the **API Access Tokens** tab, Owners and Team Owners can create [API service tokens](/vantage_account#api-service-token) at the account level that inherit permissions from the team.

<Tabs>
  <TabItem value="add-member" label="Add a Member" default>
    <ol>
    <li>From the <strong>Members</strong> tab, click <strong>Add Members</strong>.</li>
    <li>Select member(s) from the list.</li>
    <li>Click <strong>Add People</strong>.</li>
    </ol> 
  </TabItem>
  <TabItem value="remove-member" label="Remove a Member">
    <ol>
    <li>From the <strong>Members</strong> tab, hover over a user's name in the Members list.</li>
    <li>On the right, click <strong>Remove</strong>.</li>
    </ol>
  </TabItem>
  <TabItem value="change-role" label="Change Member's Role">
    <ol>
    <li>From the <strong>Role</strong> column of the <strong>Members</strong> tab, select the role dropdown.</li>
    <li>Select a new role from the list.</li>
    </ol>
  </TabItem>
  <TabItem value="manage-workspace" label="Manage Workspace Access">
    <ol>
    <li>On the <strong>Access</strong> tab, in the <strong>Workspace Access</strong> box, click the dropdown next to the workspace name.</li>
    <li>Select the appropriate level of workspace access for the team: <strong>Can Edit</strong>, <strong>Can View</strong>, or <strong>No Access</strong>.</li>
    </ol>
  </TabItem>
  <TabItem value="remove-granted" label="View Granted Access">
    <ol>
    <li>On the <strong>Access</strong> tab, in the <strong>Granted Access</strong> box, select a resource for which the team was granted access. You will be brought to the resource (for example, a Cost Report).</li>
    <li>You can then edit or remove granted access directly from the resource itself.</li>
    </ol>
  </TabItem>
</Tabs>

---

## Manage Resource Access

You can manage access for individual Cost Reporting resources, including Cost Reports, Cost Report Folders, Dashboards, Saved Filters, Resource Reports, and Segments.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Manage access to a Cost Reporting dashboard" width="75%" src="/img/resource-access.png" />
</div>

You can manage resource-level access from the Cost Reporting navigation list or from directly within a resource.

:::tip
If you want to grant access to a resource (for example, a Dashboard) to only a specific team (for example, the Marketing team), set the Everyone team to **Cannot Access**, and set the Marketing team to **Can Access**. See the [Team-Only Resource Access](/rbac#team-only-resource-access) permissions table below.
:::

<Tabs>
  <TabItem value="from-list" label="Manage Access from Cost Reporting List" default>
    <ol>
    <li>From the top navigation, click <strong>Cost Reporting</strong>. (For Resource Reports, click <strong>Active Resources</strong> > <strong>Resource Reports</strong>.)</li>
    <li>Select the resource category from the left navigation (e.g., Cost Reports or Segments).</li>
    <li>Hover over any resource in the list, then click the ellipses (<strong>...</strong>) on the right.</li>
    <li>Select <strong>Manage Access</strong>.</li>
    <li>Select a team from the list, and indicate the team's access level to the resource:
      <ul>
        <li><strong>Can Access</strong>: The team will have access to the resource.</li>
        <li><strong>Cannot Access</strong>: The team will not have access to the resource.</li>
        <li><strong>Reset Access</strong>: The team will not have access to the resource unless the team is assigned to the workspace the resource is associated with. For instance, if a specific resource from the Marketing workspace, such as a Saved Filter, was shared with the Management team, which has access only to the Management workspace, resetting the access will result in the Management team no longer having access to the Saved Filter.</li>
      </ul>
    </li>
    </ol> 
  </TabItem>
  <TabItem value="from-resource" label="Manage Access from Inside Resource">
    <ol>
    <li>From the top navigation, click <strong>Cost Reporting</strong>. (For Resource Reports, click <strong>Active Resources</strong> > <strong>Resource Reports</strong>.)</li>
    <li>Select the resource category from the left navigation (e.g., Cost Reports or Segments).</li>
    <li>Hover over any resource in the list, and click the ellipses (<strong>...</strong>) on the right.</li>
    <li>From the top of any resource, such as a Cost Report, click the ellipses (<strong>...</strong>).</li>
    <li>Select <strong>Manage Access</strong>.</li>
    <li>Select the desired access, then click <strong>Save</strong>.</li>
    </ol>
  </TabItem>
</Tabs>

---

### Team-Only Resource Access

In the following table, the Everyone team's access to a resource (for example, a Cost Report) has been revoked. The member's team has been granted access to that specific resource.

| Team Access | Team Role | Create?      | Update?      | Delete?      | View?        | Manage Access? |
| ----------- | --------- | ------------ | ------------ | ------------ | ------------ | -------------- |
| No Access   | Owner     |              | <Checkmark/> | <Checkmark/> | <Checkmark/> |                |
| No Access   | Editor    |              | <Checkmark/> | <Checkmark/> | <Checkmark/> |                |
| No Access   | Viewer    |              |              |              | <Checkmark/> |                |
| View Access | Owner     |              | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>   |
| View Access | Editor    |              | <Checkmark/> | <Checkmark/> | <Checkmark/> |                |
| View Access | Viewer    |              |              |              | <Checkmark/> |                |
| Edit Access | Owner     | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>   |
| Edit Access | Editor    | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/> |                |
| Edit Access | Viewer    |              |              |              | <Checkmark/> |                |

:::note
If a user is on multiple teams that have conflicting permissions, the higher level of permissions will be granted.
:::

<details>
<summary>Multiple Teams Resource Scenario</summary>

- A user is on the Marketing team with **Team Owner** permissions.
- They are also on the Engineering team with **Team Viewer** permissions.
- Both teams are granted access to a Saved Filter.

The user will be granted Owner-level permissions to that resource, in other words, they can view _and_ manage that resource.

</details>

<details>
<summary>Multiple Workspace Access Scenario</summary>

- A user is on the Data Analyst team and the Data Engineering team.
  - The Data Engineering team has **Can Edit** access to the Engineering workspace.
  - The Data Analyst team has **Can View** access to the Engineering workspace.
- The user has edit privileges to resources in the Engineering workspace because of their **Can Edit** abilities from the Data Engineering team.

</details>

## Settings Permissions

Settings permissions are relevant to specific functions in the console, including Authentication, Billing & Plans, Integrations, People, Teams, and Workspaces. Only Owners can manage Settings-related functions.

:::note
Team Owners can manage their team within the Teams UI — but only the team for which they hold the Team Owner role.
:::

<details>
<summary>Settings Permissions Examples</summary>

- **Scenario 1**: You want to create a new provider integration, such as a new Azure connection. An Owner will need to create the connection.
- **Scenario 2**: You are a Team Owner for the Engineering team. You can manage the Engineering team in the Teams UI. You will not be able to manage other teams.

</details>

## Financial Planning Permissions

Financial planning permissions are relevant to specific screens in the console, including Autopilot, Budgets, Budget Alerts, Business Metrics, Issues, Reserved Instances, Savings Models, and Savings Plans Usage.

Users with the Editor or above role will be able to create resources and manage the above functions.

:::note
Any user who is assigned to an [issue](/issues) will have update permissions for that issue.
:::

<details>
<summary>Financial Planning Permissions Examples</summary>

- **Scenario 1**: You want to create a new Budget Alert. A user with an Editor or above role will need to create and manage the alert. All other users will only be able to _view_ the alert.
- **Scenario 2**: Editors and above can create and manage issues. You have a Viewer role and are assigned a new issue. You can now edit and comment on _only this new issue_.

</details>
