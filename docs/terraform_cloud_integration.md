Vantage is an official HashiCorp partner. Vantage integrates with Terraform Cloud through the [Run Tasks API](https://www.terraform.io/cloud-docs/workspaces/settings/run-tasks). This allows your team to get visiblity on cloud costs as part of their existing workflows in two different ways:

* **Cost Saving Recommendations**: Vantage will post a current snapshot of cost savings that can be applied to help you save money. 
* **Accrued Costs and Forecasts**: Vantage will post a current snapshot of your current accrued costs and your expected forecast for the current month. 

This integration is provided at no additional cost to all Vantage users, including users in the free tier. Getting setup only takes a few minutes and you can follow steps to opt-in below. 

## Run Tasks Integration Instructions

Run Tasks is a Terraform Cloud feature natively provided by HashiCorp that allows users to tie costs from Vantage Workspaces directly to Terraform Cloud. Getting up and running only takes a few minutes. 

Pre-requisites:

* Register a free account at [Terraform Cloud](https://cloud.hashicorp.com/products/terraform) 
* Register a free account at [Vantage](https://www.vantage.sh)

To integrate costs from a specific Vantage workspace to Terraform Cloud, follow the instructions here:

* From your Terraform Cloud workspace, create a new Run Task by clicking "Settings" then "Run Tasks" from your target Terraform Cloud Workspace. 
* For the Run Task Name, choose either "Vantage-Costs" or "Vantage-Cost-Recommendations"
* For the Run Task Endpoint URL, please choose one of the following formats:
	* For seeing accrued costs and cost forecasts: https://api.vantage.sh/v1/integrations/terraform/workspaces/**YOUR_WORKSPACE_ID**/costs
	* For seeing cost recommendations: https://api.vantage.sh/v1/integrations/terraform/workspaces/**YOUR_WORKSPACE_ID**/recommendations
* Head to your [Workspaces page](https://console.vantage.sh/settings/workspaces) from within the Vantage console and click your desired Workspace to connect to Terraform Cloud. Take a look at the "Configuration Details" section. For the "HMAC key", please copy the "Workspace API Token". In the Endpoint URL please replace "YOUR_WORKSPACE_ID" with the "ID" listed of your Vantage Workspace. 
* Head back your Terraform Cloud workspace settings, select "Run Tasks" and you'll see the Run Task that you just created in the list of "Available Run Tasks". Click the "+" button to add this Available Run Task to your Workspace. Vantage recommends that you choose the "Advisory" Enforcement level. 
* You're all done. Vantage will now post cost forecasts and/or cost recommendations on every run. 


## Screenshots

An example of what both Vantage Cost Recommendations and Vantage Costs look like in the Run Tasks flow:

![https://assets.vantage.sh/www/vantage_run_task.png](https://assets.vantage.sh/www/vantage_run_task.png)


## Support

Need support? Join us in the #support channel in the [Vantage Slack Community](https://join.slack.com/t/vantagecommunity/shared_invite/zt-oey52myv-gq4AWRKkX25kjp1UGziPTw) and we're happy to help. 