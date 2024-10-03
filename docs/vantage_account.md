---
id: vantage_account
name: Account Settings
description: This walkthrough reviews personal and organizational configuration settings for your Vantage account.
keywords:
  - Vantage account
  - Account settings
---

# Account Settings

From the Vantage account [Settings page](https://console.vantage.sh/account/profile), you can edit your personal profile, create API access tokens, and configure organizational settings.

## General Settings

:::note
Only Organization Owners can configure organization settings. See the [Role-Based Access Control (RBAC)](/rbac) documentation for details.
:::

From the top navigation bar of the Vantage console, click **Settings**. On the side navigation bar, review the options under **General Settings**.

### Currency Conversion {#currency-conversion}

:::note
At this time, presentational currency conversion is available only on Vantage reports, such as Cost Reports, Kubernetes Efficiency Reports, Financial Commitment Reports, and Provider Resource Reports. Additional scopes will be added soon.
:::

By default, Vantage displays costs in US Dollars (USD). You can set a presentational currency, on a per-workspace basis, to visualize cost reporting data in a currency of your choice. When you configure currency for a workspace, you can choose between using the previous month’s closing exchange rate or the daily exchange rate. Vantage calculates the exchange rate based on a [public API](https://exchangeratesapi.io/).

To enable currency conversion:

1. From the top navigation, click **Settings**
2. On the side navigation, click **Workspaces**. All your existing workspaces are displayed. Select the workspace where you want to enable currency conversion.
3. At the top of the **Workspaces** page, under **Preferred Currency**, click the toggle to enable this setting. (You can click this toggle again to disable the setting.)
4. Select your preferred currency from the list.
5. For **Exchange Rate Dates**, select one of the following conversion date options. For the most accurate results, use the currency method in which you are billed:
   - **Daily Rate:** Vantage maintains a daily snapshot of exchange rates to provide estimated currency conversions. With the **Daily Rate** option, the costs' corresponding daily exchange rate will be used for the conversion.
   - **End of Billing Period Rate:** Vantage matches each cost entry to the last date of the corresponding month in which the cost was incurred. 

Your settings are automatically saved and available on your reports.

:::note
If you disable currency, your presentational currency will default back to USD.
:::

### Manage Workspaces

Provider integrations are organized into workspaces. From the **Workspaces** section, you can manage each of your workspaces as well as create a new one. See the [Workspaces](/workspaces) documentation for more information.

### View Billing & Plans

From the **Billing & Plans** section, you can view your usage, current plan, and previous payments/invoices.

If you need to use a different email address for invoicing, please contact Vantage Support at [support@vantage.sh](mailto:support@vantage.sh).

### Invite Users to Your Account

From the **People** section, you can invite new users, view a user's role and team associations, and remove users. To invite a new user:

1. Under **General Settings**, select **People**.
2. Click **Invite People**.
3. Enter the user's email and select a role and associated teams.
4. Click **Send Invitation**. The new user's name will appear in the **People** list with _Invite Pending_ as well as a link to _Resend_ the invite.

Click the ellipses (**...**) next to a user's name to edit or remove a user.

### Configure Teams

See the [Role-Based Access Control (RBAC)](/rbac) documentation for details on team configuration.

### Configure Authentication

Vantage supports many Single Sign-On (SSO) options. See the [SSO](/sso) documentation for more information.

### Configure Integrations

Configure provider integrations from the General settings. See the [Integrations](/getting_started) documentation for more information.

### Create an API Token {#api-token}

You can use the [Vantage API](https://vantage.readme.io/reference/general) to programmatically access cloud pricing data.

#### Create a Vantage API Service Token {#api-service-token}

Service tokens are associated with an account, not with an individual user. For Enterprise customers who use teams and role-based access control, you have the option of selecting a team to inherit permissions from.

To generate an API service token:

1. On the left navigation of the **Settings** screen, select **API Access Tokens**.
2. Enter a new token name, choose a team (if applicable), select the **Read** and/or **Write** scope, and click **Create**.
3. Click **Show** to reveal and copy your token.

To revoke a token, click **Delete**.

#### Create a Vantage API Personal Access Token {#api-personal-token}

Personal access tokens are associated with the user who created the token.

To generate an API personal access token:

1. On the left navigation of the **Settings** screen, select **API Access Tokens**, then navigate to the **Personal Access Tokens** tab.
2. Enter a new token name, select the **Read** and/or **Write** scope, and click **Create**.
3. Click **Show** to reveal and copy your token.

To revoke a token, click **Delete**.

## Personal Settings

From the top navigation bar of the Vantage console, click **Settings**. On the side navigation bar, review the options under **Personal Settings**.

### Update Your Profile

In the **Profile** section, you can change your display name as well as your email address. Note that changing your email will log you out and require you to re-confirm. You can also select a default dashboard that's displayed when you navigate to `console.vantage.sh`. See the [Default Dashboards](/dashboards#default-dashboard) documentation for details.

### Reset Your Password

:::note
The following steps are for users who directly sign in to Vantage.
:::

If you forget your password or would like to change your password, follow the below steps.

1. From the top-right corner of the console, click the profile icon, then click **Logout**.
2. You will return to the **Login** screen. Type your email in the **Email Address** field. Then, click **Continue**.
3. On the **Sign In** page, click **Forgot your password?** and enter your email again.
4. You will receive an email with a link to reset your password. Click **confirm the password change**, then enter a new password.
5. Click the right-facing arrow, then go to [console.vantage.sh](https://console.vantage.sh) to sign in with your new password.
