---
id: partners
title: Vantage for MSPs
description: Vantage provides an administrative portal for Managed Service Providers, or MSPs (also sometimes referred to as Resellers), to provision and centrally manage Vantage accounts on behalf of their end customers.
keywords:
  - Vantage for MSPs
  - Resellers
  - Partners
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ReactPlayer from 'react-player';
import Checkmark from '@site/src/components/icons/Checkmark';

# Vantage for MSPs

Vantage provides an administrative portal for Managed Service Providers, or MSPs (also sometimes referred to as Resellers), to provision and centrally manage Vantage accounts on behalf of their end customers. MSPs can access this portal from their management account and move between each of their customer accounts.

:::tip Getting Started
If you are interested in this functionality, contact [partnerships@vantage.sh](mailto:partnerships@vantage.sh). Your Vantage account will be set up to include a Vantage for MSPs administrative portal.

If you already have separate accounts for your customers in Vantage and want to consolidate them to this model, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

## Partner Settings

The **Partner Settings** section in Vantage has two different sections: **Managed Accounts** and **Billing Rules**.

- The **Managed Accounts** screen is the central administrative portal that MSPs can use to perform the following actions:
  - Create new customer accounts and update their name/contact email
  - Delete existing customer accounts
  - Log in to a customer’s account
  - Add integrations on behalf of a customer’s account
  - Assign billing rules to a customer’s account
- On the **Billing Rules** screen, you can create custom billing adjustments, one-time charges, re-rating, and MSP-level discounts. See the [Billing Rules](/partners#billing-rules) section for additional information.

## Create a New Customer Account

A customer account functions just like a regular Vantage account; however, customers cannot view or manage subscriptions to Vantage. All Vantage features, like reports, SSO, and Slack/MS Teams integrations, are available and scoped to each customer account.

To provision a new customer account:

1. Log in to your Vantage for MSPs management account.
2. From the top navigation, click **Settings**.
3. From the left navigation, under **Partner Settings**, select **Managed Accounts.**
4. The **Managed Accounts** administrative portal is displayed. All existing customer accounts are displayed along with the **Account Name**, **Contact Email**, and the date when the account was created. At the top, click **New Managed Account**.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Managed accounts screen with two existing accounts" width="80%" src="/img/partners/managed-screen.png" />
</div>
5. Enter an **Account Name** and a **Contact Email Address**. The email address is your administrator ID for this account and therefore must match your company’s email domain. The email address cannot exist for another customer account; however, an alias is acceptable, like `admin+customer@yourdomain.com`.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Pop-up window for creating a new managed account" width="100%" src="/img/partners/new-account.png" />
</div>
6. Click **Create Account**.

## Access a Customer Account

From the **Managed Accounts** screen, you can move between each of your customer accounts.

1. Next to any customer account’s name, click **Enter Account →**.
2. The customer account is displayed. When you enter a customer's account, you are considered the **Manager User** for that account.
   - A yellow bar is displayed around the border of the screen to indicate you are logged in to the customer's account.
   - On the bottom left, a pop-up is displayed to indicate which customer account you are logged in to.
   <div style={{display:"flex", justifyContent:"center"}}>
       <img alt="A bar is displayed around a customer's account that the manager user is logged into" width="100%" src="/img/partners/customer-account.png" />
   </div>

Perform one of the following actions to return to your management account:

- On the top right, click your user icon. Then, click **Return to MSP account**.
- On the bottom left of the screen, click the **X** in the **Logged in as** pop-up.

Once you are back in the management account, a confirmation message is displayed at the top.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Confirmation message that indicated you returned to the MSP account" width="80%" src="/img/partners/green-bar.png" />
</div>

### Single Sign-On for Customer Accounts

After a customer account is created, you can enable Single Sign-On (SSO) for each customer account. Enter the customer account and then follow the instructions provided in the [SSO documentation](/sso) to enable SSO directly within the customer's account. Customers can also enable SSO directly from their customer account. SSO is scoped to the customer’s account.

## Add Integrations to Customer Account {#add-integrations-to-customer-account}

The way you add integrations to a customer account depends on how your MSP is set up. There are two available workflows:

- **Workflow 1 - Unconsolidated Organizations:** An example MSP structure for this workflow might be where you have completely separate AWS Organizations set up for each customer. As an MSP, you have access to the payer account, and the customer has access to a member account. In this case, follow the steps below to **_Configure Integrations in the Customer Account_**.
- **Workflow 2 - Consolidated Organizations:** In this setup, the MSP uses a single AWS Organization that includes multiple linked accounts under a centralized management account. In this case, follow the steps below to **_Configure Integrations in the Management Account_**

### Configure Integrations in the Customer Account (Unconsolidated Organization Workflow, Most Common)

If this is the first time you are adding an integration:

1. From the **Managed Accounts** screen, enter a customer’s account. If this is the first time you are connecting integrations for a customer, the **Connect Accounts** screen is displayed.
2. Select an integration and follow the steps provided in the console.

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='/img/partners/set-up-integration.mp4'
        alt="Log in to customer's account and click to add a new AWS integration." 
        width="100%"
        height="100%"
    />
    </div>
</div>

If you are adding another integration:

1. From the top navigation, select **Settings**.
2. On the right navigation, click **Integrations**. All available integrations are displayed. Select an integration to get started.

:::tip
See the [Quickstart](/getting_started) for a list of all other existing Vantage provider integrations, with links to each provider integration walkthrough.
:::

### Configure Integrations in the Management Account (Consolidated Organization Workflow, Less Common)

This workflow requires that you first set up an integration in your MSP account. From the **Managed Accounts** screen, you can add any of your connected integrations to a customer account.

To get started, ensure that you have connected a provider integration to your management account. See the [AWS multiple accounts documentation](/connecting_aws#connecting-multiple-aws-accounts) for information on how to connect a management account with multiple linked accounts. Note that provider integrations passed down to customer accounts from an MSP's provider integrations will only be available in the first workspace of that customer. After you have connected an integration to your MSP account, follow the steps below to associate them with customer accounts.

1. From the **Managed Accounts** screen, select a customer’s account.
2. Select the **Integrations** tab. All connected provider integrations for that customer are displayed. The account status, such as **Stable** or **Error**, is also displayed.
3. To add a new connection, click **Connect** next to any listed provider.
4. Select any of the listed provider accounts that you want to import data from.
5. Click **Save**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Integrations screen for a managed account" width="100%" src="/img/partners/managed-integrations.png" />
</div>

#### Customer Managed Account Integration View {#customer-managed-account-integration-view}

When an MSP manages an integration in their MSP management account, a customer can view the managed integration’s status. The customer cannot remove this type of integration.

1. From a customer’s account, click **Settings** in the top navigation.
2. On the left navigation, under **MSP Settings**, click **Managed Integrations**.
3. Any connected integrations managed by the MSP are displayed.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Customer's view of the managed accounts screen" width="100%" src="/img/partners/customer-view.png" />
</div>

## Create Resources in a Customer Account

When you are logged in to a customer’s account, you can create Vantage resources, like Cost Reports, Virtual Tags, etc. For any resources, such as a Cost Report, that a management account user creates in a customer’s account, the **Created By** field displays the name **Manager User**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource in a customer's account with the Manager User as the creator" width="100%" src="/img/partners/created-by.png" />
</div>

## Billing Rules {#billing-rules}

Custom billing rules can be created in the management account and optionally applied to any of your customer accounts. The following billing rules are available:

- **Exclusion:** Exclusion of specific line items (such as EDP discounts)
- **Credits and Charges:** Additional charges or credits (such as one-time management fees)
- **Adjustment:** Re-rating of existing services (such as Amazon CloudFront data transfer charges)

### Create Custom Billing Rules

To add new billing rules:

1. Log in to your Vantage for MSPs management account.
2. From the top navigation, click **Settings**.
3. From the left navigation, under **Partner Settings**, select **Billing Rules**.
4. All your existing billing rules are displayed. Click **New Billing Rule**, then select **Adjustment**, **Charge**, **Credit**, or **Exclusion**. Click the tabs below for instructions on each billing rule type.

<Tabs>
  <TabItem value="adjustment" label="Adjustment" default>
    <p>With adjustments, you can set adjusted rates per service (e.g., Amazon CloudFront) or category (e.g., Data Transfer).</p>
    <ol>
      <li>Enter a rule <strong>Title</strong>, such as <i>CloudFront Re-rating</i>.</li>
      <li>Select a <strong>Service</strong>, such as <i>Amazon CloudFront</i>.</li>
      <li>Optionally, enter a <strong>Category</strong>, such as <i>Data Transfer</i>.</li>
      <ul>
        <li><i>Tip: To see Category names, navigate to the Cost Reports screen and create a new Cost Report. Above the graph, expand the Group By menu and select <strong>Category</strong>. A list of existing category options is displayed.</i></li>
        </ul>
      <li>Enter a percentage value that will be shown to the customer. For example, if you enter <i>75.0</i>, then in the example above, 75% of Amazon CloudFront Data Transfer costs will be shown to the customer.</li>
    </ol>
  </TabItem>

  <TabItem value="charge-credit" label="Charge/Credit">
    <ol>
      <li>Enter a rule <strong>Title</strong>, such as <i>CloudFront Re-rating</i>.</li>
      <li>Select a <strong>Service</strong>, such as <i>Amazon CloudFront</i>.</li>
      <li>Optionally, enter a <strong>Category</strong> or <strong>Sub category</strong>, such as <i>MSP Fee</i>.</li>
      <li>Enter a positive number for the credit or charge.</li>
    </ol>
  </TabItem>

  <TabItem value="exclusion" label="Exclusion">
    <ol>
      <li>Enter a rule <strong>Title</strong>, such as <i>Exclude RI Fees</i>.</li>
      <li>Enter a <strong>Charge Type</strong>, such as <i>RIFee</i> or <i>DistributorDiscount</i>.</li>
        <ul>
        <li><i>Tip: To see Charge Type names, navigate to the Cost Reports screen and create a new Cost Report. Above the graph, expand the Group By menu and select <strong>Charge Type</strong>. A list of existing charge type options is displayed.</i></li>
        </ul>
    </ol>
  </TabItem>
</Tabs>

---

### Assign Billing Rules to Customer Account {#assign-billing-rules}

You can select which rules you want added to customer accounts.

1. From the **Managed Accounts** screen, select any of your listed customer accounts.
2. Select the **Billings Rules** tab.
3. Click **Assign a Billing Rule**.
4. Select one or more billing rules and click **Save**. The billing rule is applied to the customer’s costs. A customer will only be able to see credits and charges. Exclusions and adjustments are not shown in the customer view.

<div style={{ display: "flex", justifyContent: "center" }}>
    <div style={{ 
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", 
        borderRadius: "10px", 
        width: "100%",
        overflow: "hidden" 
    }}>
    <ReactPlayer 
        playing 
        muted 
        playsinline
        loop
        url='/img/partners/billing-rules.mp4'
        alt="A new billing rule is created for a customer account." 
        width="100%"
        height="100%"
    />
    </div>
</div>

## Role-Based Access Control

Vantage for MSPs has additional role-based access control permissions for the management account. See the [Role-Based Access Control documentation](/rbac) for additional information on RBAC in Vantage.

|                                        | Owner        | Integration Owner | Editor       | Viewer       |
| -------------------------------------- | ------------ | ----------------- | ------------ | ------------ |
| View Management Account                | <Checkmark/> | <Checkmark/>      | <Checkmark/> | <Checkmark/> |
| Create resources in Management Account | <Checkmark/> | <Checkmark/>      | <Checkmark/> |              |
| Add and remove Managed Accounts        | <Checkmark/> | <Checkmark/>      |              |              |
| Add and remove provider integrations   | <Checkmark/> | <Checkmark/>      |              |              |
| View Managed Accounts                  | <Checkmark/> | <Checkmark/>      |              |              |
| Create resources in Managed Accounts   | <Checkmark/> | <Checkmark/>      |              |              |
| Create new users Management Account    | <Checkmark/> |                   |              |              |

## Remove a Customer’s Account

You can either _unlink_ or _delete_ a customer’s account. MSP customers cannot delete accounts.

:::note
If you are a customer and want your account deleted, contact your MSP.
:::

- If you want to only _unlink_ an account, but not delete the account, contact support@vantage.sh. The account will still exist in Vantage.
- When an account is completely deleted, the account is unlinked from the MSP and also completely deleted from Vantage. To delete a customer account, click the trash can icon next to the account name on the **Managed Accounts** screen.

:::danger Warning
Deleting a customer's account is a **permanent action** and will remove any connected customer integrations.
:::

## Customers: Getting Started with Vantage

As you onboard your customers to Vantage, the following resources are available to help customers get started with Vantage features.

- [Quickstart](/getting_started): Information on how to get started with each Vantage provider integration and the cost reporting data that’s collected
- [Vantage University](/vantage_university): A suite of training videos and guides to introduce basic Vantage concepts and features
- [Cost Reports](/cost_reports): Create your first Cost Report on Vantage
