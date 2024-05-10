---
id: connecting_mongodb-atlas
title: MongoDB Atlas
description: This page walks through how to integrate Vantage with your MongoDB Atlas account.
toc_min_heading_level: 2
toc_max_heading_level: 4
keywords:
  - MongoDB Atlas
  - Connect MongoDB Atlas
---

# MongoDB Atlas

Vantage integrates with your MongoDB account using the [Invoices API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Invoices). To see [Active Resources](/active_resources) for your MongoDB Atlas account, Vantage uses the [Clusters API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Clusters) and the [Projects API](https://www.mongodb.com/docs/atlas/reference/api-resources-spec/#tag/Projects).

## Connect Your MongoDB Atlas Account

### Prerequisites

- To create an API key for Vantage to ingest costs, you must be an **Organization Owner** inside the MongoDB Atlas console.
- To add the API key to relevant projects to use Active Resource inventories inside Vantage, you must be a **Project Owner** in the MongoDB Atlas console.

  :::info
  For more information on user roles in MongoDB Atlas, see the [MongoDB Atlas documentation](https://www.mongodb.com/docs/atlas/reference/user-roles/).
  :::

[Create a free Vantage account](https://console.vantage.sh/signup), then follow the steps below to integrate MongoDB Atlas costs.

### Step 1: Review the Vantage Integration Page

Navigate to the [MongoDB Atlas Settings](https://console.vantage.sh/settings/mongo) page in the Vantage console. Then, click **Add API Key**.

You will need to add your **Organization ID**, **Public API key**, and **Private API key**. Detailed steps for obtaining each of these items are provided below. Leave this tab open so you can go back and populate these fields as you obtain each value.

<div style={{display:"flex", justifyContent:"center"}}>
  <img alt="Add MongoDB information in the Vantage console" width="80%" src="/img/connect-mongo/mongodb-vantage-console.png"/> 
</div>

### Step 2: Obtain Organization ID

1. In a new browser tab, navigate to the [MongoDB Atlas console](https://account.mongodb.com/account/login).
2. At the top of the page, next to the **Organization** dropdown menu, click the **gear icon** to go to **Organization Settings**.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Open Organization Settings in MongoDB Atlas" width="80%" src="/img/connect-mongo/mongodb-open-settings.png"/> 
    </div>
  </details>
3. Your **Organization ID** will be displayed at the top. Copy the **Organization ID**. Then, go back to your Vantage browser tab and paste your ID into the **Organization ID** field.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Obtain Organization ID in MongoDB Atlas" width="80%" src="/img/connect-mongo/mongodb-get-organization-id.png"/> 
    </div>
  </details>

### Step 3: Create an Organization API Key

Next, you'll create an API key and grant it read-only permissions to your invoices and, optionally, to cluster-level cost data.

1. From the left navigation menu, click **Access Manager**.
2. At the top, click **Create API Key**.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="View Access Manager in MongoDB Atlas" width="100%" src="/img/connect-mongo/mongodb-manage-access.png"/> 
    </div>
  </details>
3. On the **Create API Key** screen, configure the following details:

     - For **Description**, enter a name, like _Vantage Integration_.
     - For **Organization Permissions**, select **Organization Billing Viewer** and **Organization Read Only**.

    <details><summary>Expand to view example image</summary>
      <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Edit API key permissions in MongoDB Atlas" width="80%" src="/img/connect-mongo/mongodb-organization-read-only.png"/> 
      </div>
    </details>

4. Click **Next**. Your public and private keys are displayed. Copy the keys and paste them into the **Public API key** and **Private API key** fields in Vantage.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Copy API keys in MongoDB Atlas" width="80%" src="/img/connect-mongo/mongodb-copy-api-key-private.png"/> 
    </div>
  </details>

  :::note
  If your organization requires an IP Access List for access control, you will need to add each of the following IPs to the **API Access List** section. Add each IP address individually:

  ```
  54.87.66.45
  3.95.43.133
  54.162.3.72
  44.199.143.63
  3.218.103.23
  ```

  <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Copy API keys in MongoDB Atlas" width="80%" src="/img/connect-mongo/mongodb-api-access-list.png"/> 
  </div>
  :::

5. At the bottom, click **Done**.

If you want to have Vantage ingest per-cluster resource data from MongoDB Atlas, then proceed to the next section. Otherwise, back in the Vantage console, click **Add Key**.

### Step 4: Grant Project Access for Active Resources

1. On the left navigation menu, select **Projects** to see your list of Atlas projects. Select your project from the list.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Open MongoDB Atlas projects" width="80%" src="/img/connect-mongo/mongodb-projects.png"/> 
    </div>
  </details>
2. At the top, click **Access Manager**, then select the project.
3. Click **Invite to Project**.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Invite to project in MongoDB Atlas" width="100%" src="/img/connect-mongo/mongodb-project-access.png"/> 
    </div>
  </details>
4. Search for and select the Vantage Integration API key to add it to the project.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Add Vantage key to MongoDB Atlas project" width="80%" src="/img/connect-mongo/mongodb-search-integration.png"/> 
    </div>
  </details>
5. Grant the Vantage Integration API key **Project Read Only** access. Then, click **Invite to Project**. Repeat this process for any other projects where you want to see resource-level costs.
  <details><summary>Expand to view example image</summary>
    <div style={{display:"flex", justifyContent:"center"}}>
      <img alt="Grant API key read-only access to project" width="80%" src="/img/connect-mongo/mongodb-project-read-only.png"/> 
    </div>
  </details>

6. Back in the Vantage console, click **Add Key**. 

Your MongoDB Atlas integration status should automatically update from `Pending` to `Importing`. MongoDB Atlas data is refreshed once a day. If you've successfully granted project access for active resources, your Active Resources view will begin populating with cost data.

## MongoDB Atlas Reporting Dimensions

On MongoDB Atlas [Cost Reports](/cost_reports), you can filter across several dimensions:

- Service
- Region
- Category
- Resource (e.g., Realm costs)
- Tag

## Active Resources

MongoDB Atlas clusters are synced as active resources and available in [resource reports](/active_resources).

## Manage Workspace Access

See the [Workspaces](/workspaces#integration-workspace) documentation for information on how to update workspace access for an integration.
