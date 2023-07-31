ons# MongoDB Atlas

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate MongoDB Atlas costs.

## Prerequisites

Vantage integrates with your MongoDB account through the use of the [Invoices API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Invoices). To see [Active Resources](/active_resources) for your MongoDB Atlas account, Vantage uses the [Clusters API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Clusters) and the [Projects API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Projects).

To create an API key for Vantage to ingest costs, you must be an **Organization Owner** inside the [MongoDB Atlas console](https://account.mongodb.com/account/login). To add the API key to relevant projects to use Active Resource Inventories inside Vantage, you must be a **Project Owner** in the MongoDB Atlas console.

## Connecting your MongoDB Atlas Account

To connect your MongoDB Atlas account, open the [MongoDB Atlas Settings](https://console.vantage.sh/settings/mongo) page in the Vantage console. Follow the instructions which require performing the following operations in the [MongoDB Atlas console](https://account.mongodb.com/account/login). Begin by clicking  `Add API Key` in the Vantage console.

### Get your Organization ID 

In the MongoDB Atlas console, click the Gear icon to go to Organization Settings.

![MongoDB Atlas Connection Step](/img/mongodb-open-setttings.png)

Copy the Organization ID and supply this to Vantage under "Organization ID".

![MongoDB Atlas Connection Step](/img/mongodb-get-organization-id.png)

This is the first required piece of information to supply to Vantage. Below you will create an API key and give it read-only permissions to your invoices and optionally to cluster-level cost data.

![Vantage console](/img/mongodb-vantage-console.png)

### Create an Organization API Key

Next, choose "Access Manager" in the pane on the left.

![MongoDB Atlas Connection Step](/img/mongodb-manage-access.png)

Click "Create an API Key", give it a name like "Vantage Integration" and grant it **Organization Read Only** and **Organization Billing Viewer** permissions.

![MongoDB Atlas Connection Step](/img/mongodb-organization-read-only.png)

Copy the Public Key and the Private Key into the "Public API key" and "Private API key" fields in Vantage.

![MongoDB Atlas Connection Step](/img/mongodb-copy-api-key-private.png)

Click `Add Key` to grant Vantage read-only access to the Invoices API or proceed with the next steps to have Vantage ingest per-cluster resource data from MongoDB Atlas.

### Grant Project Access for Active Resources

Under "Organization" select "Projects" to see your list of Atlas projects.

![MongoDB Atlas Connection Step](/img/mongodb-projects.png)

Click on the Project and click on the Gear icon to go to Project Settings.

![MongoDB Atlas Connection Step](/img/mongodb-project-access.png)

Invite the Vantage Integration API key to this and any other projects for which you want to see resource level costs. You can search for the API Key in the box.

![MongoDB Atlas Connection Step](/img/mongodb-search-integration.png)

Select the Vantage Integration API key and grant it **Project Read Only** access.

![MongoDB Atlas Connection Step](/img/mongodb-project-read-only.png)

If successful, you will see the Vantage API key added to the project and your Active Resources will begin populating with cost data.

![MongoDB Atlas Connection Step](/img/mongodb-project-successful.png)

Back in the Vantage console, click `Add Key` and your MongoDB Atlas integration status should move from `Pending` to `Importing` automatically. MongoDB Atlas data is refreshed once a day. 

## MongoDB Atlas Reporting Dimensions

MongoDB Atlas [Cost Reports](/cost_reports/) enable you to filter MongoDB costs along several dimensions:

* Service
* Region
* Cost Category
* Resource level costs such as Realm costs
