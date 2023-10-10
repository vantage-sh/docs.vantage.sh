# RBAC (Role-Based Access Control)

Advanced Access Controls enable enterprise-tiered accounts to manage access to specific resources via roles within Vantage. This system features three distinct roles – Owner, Editor, and Viewer – each with varying permissions. Permissions vary for Settings, Cost Reports, and Financial Planning categories. Access control is implemented at both the Organization and Team levels.

## Teams

Fill in section

Define teams

Make it clear restricting access to a cost report / folder / dashboard / etc requires revoking access to the “everyone” team. If they want to make sure only team X can access that thing, granting access to that team specifically. This will be the report visible only to users of team X and/or org owners. 

## Setting Permissions

*Applicable for: Authentication, Billing and Plans, Integrations, People, Teams, and Workspaces.*

Team permissions for Settings are applied at the Organization level.

| Role       | Create | Update | Delete | View |
| ---------- | ------ | ------ | ------ | ---- |
| Org Owner  | x      | x      | x      | x    |
| Org Editor |        |        |        |      |
| Org Viewer |        |        |        |      |

### Manage User Permissions

Organization Owners can add/remove users or change their Organization role by navigating to Settings → Organization Settings → People. To change a user's Organization role hover over the user row and click the ellipses button. Next, select Edit. Then, select the Organization role you would like them to have and Save Changes.

### Manage Teams

Organization Owners can view or manage teams by navigating to Settings → Organization Settings → Teams. From the teams page Owners can view, add, or delete teams. 

To manage a team click into it. From there you will be able to see additional information such as team members and team access. Some common actions within this section are:

- **Add Members:** Add members by clicking the Add Members button in the Members section. Select emails from the dropdown and submit them by clicking the Add People button.
- **Remove A Member:** To remove a member hover over a user's name in the Members section then click the Remove on the right.
- **Change Member Role:** Change a member's role by clicking their role within their table row on the Members section. Then select the new role.
- **Manage Workspace Access:** Use the toggles in the Workspace Access section of the Access tab to manage Workspace Access.
- **Remove Granted Access:** Remove any resources the team was granted access to in the Granted Access section of the Access tab. Click remove on the right of the resource you wish to remove.

## Cost Reporting Permissions

*Applicable for: Cost Reports, Cost Report Folders, Dashboards, Saved Filters, Resource Reports, and Segments.*

### Cost Reporting  - Organization Permissions

Organization permissions apply for resources in which “everyone” team access has not been revoked.

| Role | Create | Update | Delete | Manage Access | View |
| --- | --- | --- | --- | --- | --- |
| Org Owner | x | x | x | x | x |
| Org Editor | x | x | x | x | x |
| Org Viewer |  |  |  |  | x |

### Cost Reporting - Team Permissions Team-Only Access

Team-only access permissions apply for resources in which “everyone” team access has been revoked and the members team has been granted access.

| Role | Create | Update | Delete | Manage Access | View |
| --- | --- | --- | --- | --- | --- |
| Org Owner (No team access) | x | x | x | x | x |
| Org Editor (No team access) | x |  |  |  |  |
| Org Viewer (No team access) |  |  |  |  |  |
| Org Owner + Team Owner | x | x | x | x | x |
| Org Owner + Team Editor | x | x | x | x | x |
| Org Owner + Team Viewer | x | x | x | x | x |
| Org Editor + Team Owner | x | x | x | x | x |
| Org Editor + Team Editor | x | x | x | x | x |
| Org Editor + Team Viewer |  |  |  |  | x |
| Org Viewer + Team Owner | x | x | x | x | x |
| Org Viewer + Team Editor | x | x | x | x | x |
| Org Viewer + Team Viewer |  |  |  |  | x |

Note - For users on multiple teams that have conflicting permissions the higher permissions will be granted.

### Manage Cost Report Resource Access

To manage access of a Cost Report resource from the Cost Reporting tab hover over the resource until the ellipses button appears on the right. Click the button then select Manage Access.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="RBAC Manage Access" width="90%" src="/img/rbac-manage-access.png" />
</div>

From there you will be able to add/remove teams. You can also manage access from inside the resource. 

## Financial Planning Permissions

*Applicable for: Autopilot, Budgets, Budget Alerts, Business Metrics, Issues, Reserved Instances, Savings Models, Savings Plans Usage.*

Team permissions for Financial Planning are applied at the Organization level.

| Role | Create | Update | Delete | View |
| --- | --- | --- | --- | --- |
| Org Owner | x | x | x | x |
| Org Editor | x | x | x | x |
| Org Viewer |  |  |  | x |

Note - If an Org Viewer is assigned to an issue they will have update permissions. 