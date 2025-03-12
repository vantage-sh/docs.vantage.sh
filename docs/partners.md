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

Vantage provides an administrative portal for Managed Service Providers, or MSPs (also sometimes referred to as Resellers), to provision and centrally manage Vantage accounts on behalf of their end customers. MSPs can access this portal from their Management Account and move between each of their customer's Managed Accounts.

:::tip Getting Started
If you are interested in this functionality, contact [partnerships@vantage.sh](mailto:partnerships@vantage.sh). Your Vantage account will be set up to include a Vantage for MSPs administrative portal.

If you already have separate accounts for your customers in Vantage and want to consolidate them to this model, contact [support@vantage.sh](mailto:support@vantage.sh).
:::

## Terms to Know

The following terms are used throughout this documentation.

| Term                   | Definition                                                                                                                                                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Managed Account**    | A customer account that is provisioned and administered by an MSP. Managed Accounts have full access to Vantage features but cannot manage their own subscription.                                                                 |
| **Management Account** | The MSP’s central administrative account used to create and oversee customers' Managed Accounts, manage billing rules, and configure integrations.                                                                                           |
| **Manager User**       | A user from the MSP’s organization who has administrative access to a customer's Managed Account. When logged in to a Managed Account, the Manager User sees visual indicators showing they are acting on behalf of the customer. |

## Partner Settings

The **Partner Settings** section in Vantage has two different sections: **Managed Accounts** and **Billing Rules**.

- The **Managed Accounts** screen is the central administrative portal that MSPs can use to perform the following actions:
  - Create new customer Managed Accounts and update their name/contact email
  - Delete existing customer Managed Accounts
  - Log in to a customer’s Managed Account
  - Add integrations on behalf of a customer’s Managed Account
  - Assign billing rules to a customer’s Managed Account
- On the **Billing Rules** screen, you can create custom billing adjustments, one-time charges, re-rating, and MSP-level discounts. See the [Billing Rules](/partners#billing-rules) section for additional information.

## Create a New Customer Managed Account

A customer Managed Account functions just like a regular Vantage account; however, customers cannot view or manage subscriptions to Vantage. All Vantage features, like reports, SSO, and Slack/MS Teams integrations, are available and scoped to each customer Managed Account.

To provision a new customer Managed Account:

1. Log in to your Vantage for MSPs Management Account.
2. From the top navigation, click **Settings**.
3. From the left navigation, under **Partner Settings**, select **Managed Accounts.**
4. The **Managed Accounts** administrative portal is displayed. All existing customer accounts are displayed along with the **Account Name**, **Contact Email**, and the date when the account was created. At the top, click **New Managed Account**.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Managed accounts screen with two existing accounts" width="80%" src="/img/partners/managed-screen.png" />
</div>
5. Enter an **Account Name** and a **Contact Email Address**. The email address is your administrator ID for this account and therefore must match your company’s email domain. The email address cannot exist for another customer's Managed Account; however, an alias is acceptable, like `admin+customer@yourdomain.com`.
<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Pop-up window for creating a new managed account" width="100%" src="/img/partners/new-account.png" />
</div>
6. Click **Create Account**.

## Access a Customer's Managed Account

From the **Managed Accounts** screen, you can move between each of your customers' Managed Accounts.

1. Next to any Managed Account’s name, click **Enter Account →**.
2. The Managed Account is displayed. When you enter a customer's account, you are considered the **Manager User** for that account.
   - A yellow bar is displayed around the border of the screen to indicate you are logged in to the Managed Account.
   - On the bottom left, a pop-up is displayed to indicate which Managed Account you are logged in to.
   <div style={{display:"flex", justifyContent:"center"}}>
       <img alt="A bar is displayed around a customer's account that the manager user is logged into" width="100%" src="/img/partners/customer-account.png" />
   </div>

Perform one of the following actions to return to your Management Account:

- On the top right, click your user icon. Then, click **Return to MSP account**.
- On the bottom left of the screen, click the **X** in the **Logged in as** pop-up.

Once you are back in the Management Account, a confirmation message is displayed at the top.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Confirmation message that indicated you returned to the MSP account" width="80%" src="/img/partners/green-bar.png" />
</div>

### Single Sign-On for Managed Accounts

After a Managed Account is created, you can enable Single Sign-On (SSO) for each Managed Account. Enter the Managed Account, then follow the instructions provided in the [SSO documentation](/sso) to enable SSO directly within the customer's Managed Account. Customers can also enable SSO directly from their own account. SSO is scoped to the Managed Account.

## Add Integrations to a Managed Account {#add-integrations-to-customer-account}

The way you add integrations to a Managed Account depends on how your MSP is set up. There are two available workflows:

- **Workflow 1 - Unconsolidated Organizations:** An example MSP structure for this workflow might be where you have completely separate AWS Organizations set up for each customer. As an MSP, you have access to the payer account, and the customer has access to a member account. In this case, follow the steps below to **_Configure Integrations in the Managed Account_**.
- **Workflow 2 - Consolidated Organizations:** In this setup, the MSP uses a single AWS Organization that includes multiple linked accounts under a centralized Management Account. In this case, follow the steps below to **_Configure Integrations in the Management Account_**

### Configure Integrations in the Managed Account (Unconsolidated Organization Workflow, Most Common)

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

This workflow requires that you first set up an integration in your MSP account. From the **Managed Accounts** screen, you can add any of your connected integrations to a Managed Account.

To get started, ensure that you have connected a provider integration to your Management Account. See the [AWS multiple accounts documentation](/connecting_aws#connecting-multiple-aws-accounts) for information on how to connect a Management Account with multiple linked accounts. Note that provider integrations passed down to customer Managed Accounts from an MSP's provider integrations will only be available in the first workspace of that customer. After you have connected an integration to your MSP account, follow the steps below to associate them with customer Managed Accounts.

1. From the **Managed Accounts** screen, select a customer’s account.
2. Select the **Integrations** tab. All connected provider integrations for that customer are displayed. The account status, such as **Stable** or **Error**, is also displayed.
3. To add a new connection, click **Connect** next to any listed provider.
4. Select any of the listed provider accounts that you want to import data from.
5. Click **Save**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="The Integrations screen for a managed account" width="100%" src="/img/partners/managed-integrations.png" />
</div>

#### Customer Managed Account Integration View {#customer-managed-account-integration-view}

When an MSP manages an integration in their MSP Management Account, a customer can view the managed integration’s status. The customer cannot remove this type of integration.

1. From a customer’s account, click **Settings** in the top navigation.
2. On the left navigation, under **MSP Settings**, click **Managed Integrations**.
3. Any connected integrations managed by the MSP are displayed.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Customer's view of the managed accounts screen" width="100%" src="/img/partners/customer-view.png" />
</div>

## Create Resources in a Managed Account

When you are logged in to a customer’s Managed Account, you can create Vantage resources, like Cost Reports, Virtual Tags, etc. For any resources, such as a Cost Report, that a Management Account user creates in a customer’s account, the **Created By** field displays the name **Manager User**.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Resource in a customer's account with the Manager User as the creator" width="100%" src="/img/partners/created-by.png" />
</div>

## Billing Rules {#billing-rules}

Custom billing rules can be created in the Management Account and optionally applied to any of your customers’ Managed Accounts. The following billing rules are available:

- **Exclusion:** Exclusion of specific line items (such as EDP discounts)
- **Credits and Charges:** Additional charges or credits (such as one-time management fees)
- **Adjustment:** Three options are available:
  - **Per Service Adjustment:** Re-rating of existing services or categories (such as Amazon CloudFront data transfer charges).
  - **Re-Rate to Public Price:** Remove discounts and private pricing for a Managed Account (further described in the [section below](/partners#rerate-public))
  - **Remove SP/RI Discounts:** Re-rate any usage for a Managed Account that is covered by Reserved Instances or Savings Plans purchased in the AWS Payer account (further described in the [section below](/partners#remove-discounts))

### Re-Rate to Public Pricing Adjustment {#rerate-public}

MSPs are often able to negotiate substantially higher Enterprise Discount Plans (EDPs) or Private Pricing Agreements (PPAs) from cloud providers based on the aggregate amount of usage across all of their customer base than what those customers would get if they were to purchase directly from a cloud provider. With the ability to re-rate to public pricing, you can revert your customers’ pricing back to list price, removing any enterprise discounts or private pricing. 

When you apply the Re-rating to Public Pricing Billing rule adjustment, Vantage will re-map costs from `lineItem/UnblendedCost` to `pricing/publicOnDemandCost` from the AWS Cost and Usage Report. As a result, the following will apply in Vantage:

- **When you view your parent Management Account**, you will still see the price billed by AWS reflected, and the billing rule will not be applied. This enables margin analysis and understanding of where these commitments are applied.
- **When you view a customer’s Managed Account**, usage of services that are included in the billing rule will be presented at list price, with no indication that any price change was made on that usage.

### Remove SP/RI Discounts Adjustment {#remove-discounts}

With discount toggling, you can decide which Reserved Instance and Savings Plan benefits your end customers receive. Use this adjustment billing rule to select whether any of your customer accounts receive discounts from commitments purchased in an AWS Payer account, or if such commitment covered usage should be reset back to list price. Any usage that is covered by a commitment purchased in an AWS Payer account will be reset to list price when you view usage in the customer’s Managed Account. This billing rule applies to any `SavingsPlanCoveredUsage` and `DiscountedUsage` usage types.

**Example Use Case**

You manage 20 customer AWS accounts and buy Savings Plans centrally. You want any of your customers to see only their own discounts. You set up and apply the **Remove SP/RI Discounts** adjustment to your customers’ Managed Accounts, ensuring any centrally purchased Savings Plans are excluded from customer billing. 

- After the rule is applied, you will still see the cost that is billed by AWS in your parent Management Account to enable margin comparisons for end customers. In the visual example below, Savings Plan Covered Spend is still visible at the parent account level.
  <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Managed accounts screen with two existing accounts" width="70%" src="/img/partners/msp-parent-discount-account.png" />
  </div>
- Vantage looks up the account that purchased the Committed Spend Discount, if that account is an AWS Payer account, Vantage removes the discount on any Cost and Usage line item from any customers’ Managed Accounts where the adjustment is enabled. The below visual example shows a customer’s Managed Account. When grouped by Charge Type, only the Usage and Tax charges are shown. The Usage amount of $388.61 reflects the total list price of the usage, calculated by adding the parent account’s original Usage ($173.14) and the Savings Plan Covered Spend ($215.47) that would have otherwise reduced the cost.
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Managed accounts screen with two existing accounts" width="70%" src="/img/partners/msp-child-discount-account.png" />
  </div>

### Create Custom Billing Rules

:::note
Billing rules are evaluated in priority order based on the order they are listed on the Billing Rules page. 
:::

To add new billing rules:

1. Log in to your Vantage for MSPs Management Account.
2. From the top navigation, click **Settings**.
3. From the left navigation, under **Partner Settings**, select **Billing Rules**.
4. All your existing billing rules are displayed. Click **New Billing Rule**, then select **Adjustment**, **Charge**, **Credit**, or **Exclusion**. Click the tabs below for instructions on each billing rule type.

<Tabs>
  <TabItem value="adjustment" label="Adjustment" default>
    <p>With adjustments, you can select between three different re-rating options.</p>
    <ol>
      <li>Enter a rule <strong>Title</strong>, such as <i>CloudFront Re-rating</i>.</li>
      <li>Select an <b>Adjustment Type</b>:
        <ul>
          <li>If you select <b>Per-Service Adjustment</b>:
            <ul>
              <li>Select a <strong>Service</strong>, such as <i>Amazon CloudFront</i>.</li>
              <li>Optionally, enter a <strong>Category</strong>, such as <i>Data Transfer</i>.</li>
            </ul>
            <blockquote>
              <p><b>Tip:</b> To see Category names, navigate to the Cost Reports screen and create a new Cost Report. Above the graph, expand the Group By menu and select <strong>Category</strong>. A list of existing category options is displayed.</p>
            </blockquote>
            <ul>
              <li>Enter a percentage value that will be shown to the customer. For example, if you enter <i>75.0</i>, then in the example above, 75% of Amazon CloudFront Data Transfer costs will be shown to the customer.</li>
              <li>Click <b>Save</b>.</li>
            </ul>
          </li>
          <li>If you select <b>Remove RI/SP Discounts</b>:
            <ul>
              <li>No other fields are displayed. Click <b>Save</b>.</li>
            </ul>
          </li>
          <li>If you select <b>Re-Rate to Public Price</b>:
            <ul>
              <li>No other fields are displayed. Click <b>Save</b>.</li>
            </ul>
          </li>
        </ul>
      </li>
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

### Assign Billing Rules to Managed Account {#assign-billing-rules}

You can select which rules you want added to Managed Accounts.

1. From the **Managed Accounts** screen, select any of your listed Managed Accounts.
2. Select the **Billings Rules** tab.
3. Click **Assign a Billing Rule**.
4. Select one or more billing rules and click **Save**. The billing rule is applied to the customer’s costs. A customer will only be able to see credits and charges. Exclusions and adjustments are not shown in the customer view.

After billing rules are applied to Managed Account, re-processing of the data begins immediately. The time required depends on the scale of the data in the account, but it typically completes within 30 minutes after applying the rule.

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

To delete a billing rule:

1. From the **Billings Rules** tab, click **Assign a Billing Rule**.
2. Click the **x** next to any listed billing rule.
3. Click **Save**.

## Role-Based Access Control

Vantage for MSPs has additional role-based access control permissions for the Management Account. See the [Role-Based Access Control documentation](/rbac) for additional information on RBAC in Vantage.

|                                                                                                                                                                       | Owner        | Integration Owner | Editor       | Viewer       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ----------------- | ------------ | ------------ |
| View Management Account                                                                                                                                               | <Checkmark/> | <Checkmark/>      | <Checkmark/> | <Checkmark/> |
| Create resources in Management Account                                                                                                                                | <Checkmark/> | <Checkmark/>      | <Checkmark/> |              |
| Add and remove Managed Accounts                                                                                                                                       | <Checkmark/> | <Checkmark/>      |              |              |
| Add and remove provider integrations                                                                                                                                  | <Checkmark/> | <Checkmark/>      |              |              |
| View Managed Accounts                                                                                                                                                 | <Checkmark/> | <Checkmark/>      |              |              |
| Create resources in Managed Accounts                                                                                                                                  | <Checkmark/> | <Checkmark/>      |              |              |
| Additional administrative capabilities: create new users, create new workspaces, manage teams, modify billing options, manage authentication, and manage Virtual Tags | <Checkmark/> |                   |              |              |

## Remove a Managed Account

You can either _unlink_ or _delete_ a customer’s account. MSP customers cannot delete accounts.

:::note
If you are a customer with a Managed Account and want your account deleted, contact your MSP.
:::

- If you want to only _unlink_ an account, but not delete the account, contact support@vantage.sh. The account will still exist in Vantage.
- When an account is completely deleted, the account is unlinked from the MSP and also completely deleted from Vantage. To delete a customer's Managed Account, click the trash can icon next to the account name on the **Managed Accounts** screen.

:::danger Warning
Deleting a customer's account is a **permanent action** and will remove any connected customer integrations.
:::

## Customers: Getting Started with Vantage

As you onboard your customers to Vantage, the following resources are available to help customers get started with Vantage features.

- [Quickstart](/getting_started): Information on how to get started with each Vantage provider integration and the cost reporting data that’s collected
- [Vantage University](/vantage_university): A suite of training videos and guides to introduce basic Vantage concepts and features
- [Cost Reports](/cost_reports): Create your first Cost Report on Vantage
