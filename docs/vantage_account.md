Your account on [the Vantage console](https://console.vantage.sh/) is used to control your personal settings and API tokens. With the right [permissions](https://www.vantage.sh/features/team-management) you can also control the people and workspaces in your Vantage account.

## Reset your password
To change your password, log out of the console clicking the profile icon in the top right and clicking **Logout**. You will be taken to a screen to enter your email. Type your email in and click **Sign In**. On the Sign In page, click **Forgot your password?** and enter your email again. You will receive an email with a link to reset your password. Click **confirm the password change** to go to a screen to enter a new password. Click the right facing arrow then go to [console.vantage.sh](https://console.vantage.sh) to sign in with your new password.

## Update the Vantage AWS Integration
Occasionally Vantage will modify the permission sets it uses to access billing and resource data on [AWS](/connecting_aws/). When this happens you can update your integration by going to the [Integrations page](https://console.vantage.sh/settings/integrations) within settings in the [Vantage Console](https://console.vantage.sh/). Click **Manage** for the cloud account that you wish to update. For AWS organizations with multiple accounts, this will usually be the Management account. Click **Update Vantage via AWS Console** to perform the update. Or click **More Update Options** for command line and other deployment methods.

## Get a Vantage API Token
You can use the [Vantage API](https://vantage.readme.io/reference/general) to programmatically access cloud pricing data. For example, you can access your account's billing data in a JSON string or build cross provider resource tagging solutions. There are some limitations - for example the pricing data is only for on-demand instances at the moment.

To generate an API token, go to your [profile settings in the Vantage console](https://console.vantage.sh/account/profile/tokens), give your token a name and click **Add**. Click **Show** to reveal and copy your token. The API documentation allows you to enter your token directly into it to see what kind of responses are available. Lastly, you can revoke your Vantage API Token by pressing the more options icon and clicking **Delete**.

## How can I see my Vantage Invoice?
To see invoices from your Vantage subscription, including past payment dates and amount paid, click your profile in the top right and go to Settings. Select the [Billing and Plans](https://console.vantage.sh/settings/payment) tab and then scroll down to **Invoices**.

If you need to use a different email address for invoicing, please contact Vantage Support at [support@vantage.sh](mailto:support@vantage.sh).