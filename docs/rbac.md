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

Advanced role-based access controls are available within Vantage for Enterprise tier accounts. These controls facilitate fine-grained management of resource access through two distinct levels: organization and team.

- **Organization access**: This level determines a user's access to a given [workspace](/workspaces). Organization access also determines the team-level permissions assigned to a given user to interact with Settings-related functions, such as configuring provider integrations or creating teams, as well as Financial Planning functions, such as Autopilot and Budget Alerts.
- **Team-based access**: Offering more detailed control, this level determines the specific Cost Reporting resources — such as Cost Reports, Dashboards, or Folders — that a user can view and/or edit. By default, all users are members of the "Everyone" team. Org Owners have the ability to control what workspaces/resources the Everyone team can access. You can update the access accordingly based on your organization's access control strategy. 

Both access types have three available roles – Owner, Editor, and Viewer – each with its own set of permissions. These permissions are distinct for account [Settings](/rbac#settings-permissions) functions, [Cost Reporting](/rbac#cost-reporting-resources-organization-permissions) functions, and [Financial Planning](/rbac#financial-planning-permissions) functions.

:::note
The RBAC feature is provided with Enterprise accounts. Accounts in non-Enterprise tiers have a single Owner, Member, or Viewer role that is global.
:::

## Organization Access Control

The Org Owner, Org Editor, and Org Viewer roles are described below.  

| Role       | Role Description                                                                                                                                                                                                                                                                           |
| ---------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Org Owner  | An Org Owner has full access to all resources. This role can also manage teams, integrations, and workspaces within an account. Even if the Everyone team is removed from a resource, the Owner will still be able to manage that resource.                                      |
| Org Editor | An Org Editor can view and edit only resources their team(s) have access to. This role can manage budgets, savings models, and issues. This role cannot manage teams (see *Exception* below), integrations, or workspaces. If the Everyone team is removed from a resource, they will lose permissions to it. |
| Org Viewer | An Org Viewer has read-only access. They can see a resource unless the Everyone team is removed from that resource.                                                                                                                                                                      |

:::note Exception
If a user holds the roles of Org Editor or Org Viewer and is additionally assigned the _Team Owner_ role, they gain extended privileges. With the Team Owner role, the user gains access to and manage Teams — but only the team for which they hold the Team Owner role. Org Owner is the only role that can create new teams. See [Team-Based Access Control](/rbac#team-based-access-control) for more information.
:::

### Manage Organization Access

The Org Owner role has the highest access at the organization level. Org Owner is the only role that can add/remove users as well as change another user's Organization role. 

<Tabs>
  <TabItem value="add-user" label="Add a New User" default>
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>Organization Settings</strong>, click <strong>People</strong>.</li>
      <li>On the right, click <strong>+ Invite</strong>.</li> 
      <li>Enter the new user's email, then select their <strong>Role</strong> and any <strong>Teams</strong>.</li>
      <li>Click <strong>Send Invitation</strong>.</li>
      </ol> 
  </TabItem>
  <TabItem value="change-user-org" label="Change a User's Organization Role">
    <ol>
      <li>From the top navigation, click <strong>Settings</strong>.</li>
      <li>From the left navigation, under <strong>Organization Settings</strong>, click <strong>People</strong>.</li>
      <li>Hover over the user's row in the <strong>People</strong> list, then click the ellipses (<strong>...</strong>).</li> 
      <li>Click <strong>Edit</strong>, then select the new user <strong>Role</strong>.</li>
      <li>Click <strong>Save Changes</strong>.</li>
      </ol> 
  </TabItem>
</Tabs>

---

### Settings Permissions

The following permissions are relevant to specific functions in the console, including Authentication, Billing & Plans, Integrations, People, Teams, and Workspaces. These Settings-related permissions are enforced at the Organization level.

:::note Exception
If a user holds the roles of Org Editor or Org Viewer and is additionally assigned the _Team Owner_ role, they gain extended privileges. With the Team Owner role, the user gains access to and can interact with the Teams UI — but only for the team for which they hold the Team Owner role.
:::

| Role       | Create       | Update       | Delete       | View         |
| ---------- | ------------ | ------------ | ------------ | ------------ |
| Org Owner  | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/> |
| Org Editor |              |              |              |              |
| Org Viewer |              |              |              |              |

<details>
<summary>Settings Permissions Examples</summary>

- **Scenario 1**: You want to create new provider integration, such as a new Azure connection. An Org Owner will need to create the connection. An Org Editor and Org Viewer _will not_ be able to create, view, delete, or update the integration.
- **Scenario 2**: You have the role of Org Editor. In addition, you are a Team Owner for the Engineering team. Because you are an Org Editor, you will _not_ be able to see or interact with Settings functions, such as Authentication, Billing & Plans, etc. You will, however, be able to interact with the Teams function, but only for the Engineering team where you are the Team Owner.

</details>

### Financial Planning Permissions

The following permissions are relevant to specific screens in the console, including Autopilot, Budgets, Budget Alerts, Business Metrics, Issues, Reserved Instances, Savings Models, and Savings Plans Usage. These Financial Planning-related permissions are enforced at the Organization level.

:::note Exception
If an Org Viewer is assigned to an issue, they will have update permissions for that issue. 
:::

| Role       | Create       | Update       | Delete       | View         |
| ---------- | ------------ | ------------ | ------------ | ------------ |
| Org Owner  | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/> |
| Org Editor | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/> |
| Org Viewer |              |              |              | <Checkmark/> |

<details>
<summary>Financial Planning Permissions Examples</summary>

- **Scenario 1**: You want to create new provider Budget Alert. An Org Owner or Org Editor will need to create and manage the alert. An Org Viewer will only be able to _view_ the alert.
- **Scenario 2**: You are an Org Viewer. You can view all issues; however, you cannot edit or comment on the issues. Org Owners and Org Editors can create and manage issues. 
  - You are assigned a new issue. You can now edit and comment on only this new issue.

</details>


## Team-Based Access Control

A user has access both at the organization level and within each team they are a member of; however, **organization roles take precedence over team roles**. For example, if a user is an Org Owner, but they are only a Team Viewer on the Engineering team, they can still view and manage resources within the Engineering team — as well as all other teams — because their Org Owner role takes precedence over the Team Viewer role. 

The Team Owner, Team Editor, and Team Viewer roles are described below.  

| Role        | Description                                                                                                                      |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------- |
| Team Owner  | A Team Owner has full control over resources to which that team is granted access. Team Owners also have the ability to change which teams can access their team's resources. They can also manage members of their team.   |
| Team Editor | A Team Editor has full control over resources to which that team is granted access; however, they cannot manage the members of the team. |
| Team Viewer | A Team Viewer has read-only access to all resources to which that team is granted access.                                        |

### Manage Team Access

#### Create or Delete Teams (Organization Owners Only)

:::note
By default, all Vantage users are part of the Everyone team. Users _cannot_ be removed from this team.
:::

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Team management window" width="50%" src="/img/team-management.png" />
</div>

1. From the top navigation, click **Settings**.
2. On the left navigation, under **Organization Settings**, click **Teams**. 
3. On the Teams view, Org Owners can manage, add, or delete teams. 
   - To add a team, click **+ New Team**. Add a **Name** and **Description**, then click **Create Team**.
   - To delete a team, hover over the team's name in the team list, then click **Delete**.

#### Manage a Team (Organization Owners and Team Owners)
To manage a team, select the team from the **Teams** list. Three tabs are displayed: General, Members, and Access. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Team management tabs and options" width="60%" src="/img/team-management-details.png" />
</div>

- On the **General** tab, you can edit the team name and description.
- On the **Members** tab, you can add and remove members from a team as well as change a member's team role. Only Org Owners will be able to perform these actions. Additionally, Team Owners, regardless of Organization role, can perform these actions for their respective team. 
- On the **Access** tab, Org Owners and Team Owners can manage workspace access for the team as well as view resources with granted access. 

<Tabs>
  <TabItem value="add-member" label="Add a Member" default>
    <ol>
    <li>From the <strong>Members</strong> tab, click <strong>+ Add Members</strong>.</li>
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
    <li>From the <strong>Granted Access</strong> box, select a resource for which the team was granted access. You will be brought to the resource (e.g., a Cost Report).</li>
    <li>You can then edit or remove granted access directly from the resource itself.</li>
    </ol>
  </TabItem>
</Tabs>

---
### Manage Resource Access

You can manage access for individual Cost Reporting resources, including Cost Reports, Cost Report Folders, Dashboards, Saved Filters, Resource Reports, and Segments.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Manage access to a Cost Reporting dashboard" width="75%" src="/img/resource-access.png" />
</div>

You can manage resource-level access from the Cost Reporting navigation list or from directly within a resource.

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

### Cost Reporting Resources: Organization Permissions

Organization permissions apply for resources in which Everyone team access _has not_ been revoked.

| Role       | Create       | Update       | Delete       | Manage Access | View         |
| ---------- | ------------ | ------------ | ------------ | ------------- | ------------ |
| Org Owner  | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Editor | <Checkmark/> | <Checkmark/> | <Checkmark/> |               | <Checkmark/> |
| Org Viewer |              |              |              |               | <Checkmark/> |

:::tip
If you want to grant access on a resource (for example, a Dashboard) to only a specific team (for example, the Marketing team), set the Everyone team to **Cannot Access**, and set the Marketing team to **Can Access**.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Remove Everyone team from resource" width="50%" src="/img/remove-everyone-team.png" />
</div>
:::

### Cost Reporting: Team Permissions Team-Only Resource Access

The team-only access permissions shown below apply for resources in which the Everyone team access has been revoked and the member's team has been granted access.

| Role                        | Create       | Update       | Delete       | Manage Access | View         |
| --------------------------- | ------------ | ------------ | ------------ | ------------- | ------------ |
| Org Owner (No team access)  | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Editor (No team access) |              |              |              |               |              |
| Org Viewer (No team access) |              |              |              |               |              |
| Org Owner + Team Owner      | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Owner + Team Editor     | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Owner + Team Viewer     | <Checkmark/> | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Editor + Team Owner     |              | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Editor + Team Editor    |              | <Checkmark/> | <Checkmark/> |               | <Checkmark/> |
| Org Editor + Team Viewer    |              | <Checkmark/> | <Checkmark/> |               | <Checkmark/> |
| Org Viewer + Team Owner     |              | <Checkmark/> | <Checkmark/> | <Checkmark/>  | <Checkmark/> |
| Org Viewer + Team Editor    |              | <Checkmark/> | <Checkmark/> |               | <Checkmark/> |
| Org Viewer + Team Viewer    |              |              |              |               | <Checkmark/> |

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

<details>
<summary>Multiple Roles Scenario</summary>

- A user has an **Org Viewer** and **Team Owner** role for the Management team. 
- The user can manage resources granted to the Management team.
- The user is unable to manage resources for the Marketing team, unless they are granted separate access. 

The user will be granted Owner-level permissions to that resource, in other words, they can view _and_ manage that resource.

</details>
