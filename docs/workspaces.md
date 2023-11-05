# Workspaces

Vantage allows you to connect multiple cloud infrastructure provider accounts to the same Vantage account. This allows you to see all of your costs within a single cloud provider, like AWS, or across multiple cloud providers (e.g. GCP + Azure).

A Workspace is a way to segregate costs from individual account(s) within a provider, or across providers, into their own discrete dashboard. This allows teams to create more focused views of costs and even restrict access to costs by utilizing [role-based access controls (RBAC)](https://www.vantage.sh/features/team-management) if they are subscribers of the Vantage [Enterprise plan](https://www.vantage.sh/pricing).

When your Vantage account is created you are assigned a "Default" workspace. You have the ability to create multiple workspaces. Each workspace is a logical grouping of cloud provider account(s) and has its own respective set of views. 

## Use-Cases

* **Grouping resources together multiple cloud provider accounts:** An organization sometimes has multiple accounts within the same cloud provider. Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. 

* **Grouping costs together across multiple cloud providers:** An organization sometimes has multiple cloud providers (e.g. AWS + GCP). Vantage users can use a single workspace to group multiple cloud provider accounts together to view all resources in the same view. 

* **Separate costs per environment:** Organizations separate costs based on the environment that the resources in the account relate to. A workspace per environment; grouping all production, staging and development resources into separate workspaces.

* **Separate costs per team:** Organizations separate costs based on the team that utilizes the resources in an account. Separate workspaces per team, e.g., infrastructure, product, security, etc.

* **Separate costs per product/service:** Organizations separate costs based on the product or service that utilizes the resources in an account. Separate workspaces per product/service, e.g., payment, console, admin

* **Separate costs per customer:** Organizations separate costs based on customers. Separate workspaces per customer, e.g., Customer A, Customer B, Customer C, etc.


When you have more than one workspace in your Vantage account a workspace menu will appear in your navigation menu for you to switch between workspaces.