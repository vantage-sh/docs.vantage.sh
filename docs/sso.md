---
id: sso
title: Single Sign-On (SSO)
description: This page walks through how to set up a self-service connection for SAML or another IdP with Vantage for logging in.
keywords:
  - sso
  - single sign-on
toc_min_heading_level: 2
toc_max_heading_level: 4
---

# Single Sign-On (SSO)

Vantage supports single sign-on (SSO) via self-service single sign-on as well as several other supported IdPs. You can use self-service SSO to connect your SAML (Security Assertion Markup Language) Identity Provider (IdP) to your Vantage account. With self-service SSO, you can use your existing credentials to authenticate and access your Vantage account. SSO streamlines the login process since users don't need to create a new account or remember another set of login credentials for Vantage.

Vantage uses Just-in-Time (JIT) provisioning for user provisioning. As long as a user is granted access to your IdP, the user will be provisioned an account in Vantage when they first log in.

## Self-Service SSO via SAML

:::note
Currently, Vantage supports self-service connection for SAML. If you'd like to connect one of the other supported IdPs (e.g., Google Workspace or Windows Active Directory), view the instructions below. If you do not see your IdP listed, contact [Vantage Support](mailto:support@vantage.sh).
:::

### What Is SAML SSO?

SAML is an XML-based open standard for exchanging authentication and authorization data between parties. It enables secure and standardized communication between identity providers, service providers, and users. SAML allows for seamless and secure access to web applications and services.

Before you can connect your IdP to Vantage, you will need the following:

- A valid account with a SAML IdP
- Owner role access to Vantage
- Your IdP's signing certificate and sign-on URL

### Connect Your SAML IdP {#enable-connection}

1. From the Vantage console, navigate to the [Authentication page](https://console.vantage.sh/settings/account_identity_providers).
2. Click **New Connection**.
3. Select the **SAML** connection type.
<details><summary>Expand to view example image</summary>
<div> 
<img alt="Create SSO integration in Vantage console" width="80%" src="/img/sso-configure.png"/> </div>
</details>
4. Copy the **Single Sign-On URL** and **Audience URL** that are provided on screen. You will need both of these URLs for your IdP's configuration.
<details><summary>Expand to view example image</summary>
<div> 
<img alt="Configuration for SAML SSO integration in Vantage console" width="80%" src="/img/saml-sso-configure.png"/> </div>
</details>
5. To add a logo to your connection's thumbnail, use the provided [Vantage Logo](https://s3.amazonaws.com/assets.vantage.sh/www/vantage_avatar-social.jpg).
6. Once you create the Vantage application within your IdP, copy the following information:
   - Copy the SAML Sign-On URL provided by your IdP, then paste it into the **SAML 2.0 Endpoint** field of the Vantage SAML page.
   - Copy the Signing Certificate provided by your IdP, then paste it into the **Public Certificate** field of the Vantage SAML page.
7. Ensure you've entered the correct credentials, then click **Create Connection**. You'll be redirected back to the [Authentication page](https://console.vantage.sh/settings/account_identity_providers), where you will be able to see your connection.
8. To enable the connection, switch the Active toggle to **on**. You will remain logged in to Vantage, but the next time you attempt to log in, you will be redirected to your IdP's sign-on page.
9. **Optional:** If you would like to set up SSO group mappings based on your existing Vantage teams, [see the SSO Group Mappings](/sso#set-up-sso-group-mappings) instructions below.

:::caution Important
For security reasons, Vantage does not recommend IdP-initiated sessions. For Okta, our recommended best practice is to create a tile called _Vantage_ with a link to `https://console.vantage.sh/login`. For more information, see the [Create a Bookmark App](https://support.okta.com/help/s/article/How-do-you-create-a-bookmark-app) instructions, on the Okta documentation site.

If you want to use an IdP-initiated session configuration, please contact [Vantage Support](mailto:support@vantage.sh).
:::

#### Example: Create a SAML SSO Connection with Okta

:::info
For detailed instructions, see the [Okta support documentation](https://help.okta.com/oie/en-us/content/topics/apps/apps_app_integration_wizard_saml.htm).
:::

1. Create an app integration on Okta.
2. For **Sign-in method**, select **SAML 2.0**. Click **Next**.
<details><summary>Expand to view example image</summary>
<div> 
<img alt="Create a new Okta app integration" width="80%" src="/img/saml_okta_new.png"/> </div>
</details>
3. For **App Name**, enter _Vantage_.
4. For **App Logo**, upload the [Vantage Logo](https://s3.amazonaws.com/assets.vantage.sh/www/vantage_avatar-social.jpg), then click **Next**.
<details><summary>Expand to view example image</summary>
<div> 
<img alt="Okta app settings" width="80%" src="/img/saml_okta_app_name.png"/> </div>
</details>
5. Enter the requested **Single sign on URL** (for example, `https://auth.vantage.sh/login/callback?connection=company-com`) and **Audience URI (SP Entity ID)** (for example, `urn:auth0:vantage-production:company-com`), provided on the Vantage Authentication setup page.
<details><summary>Expand to view example image</summary>
<div>
<img alt="Okta SAML settings" width="80%" src="/img/saml_okta_settings.png"/> </div>
</details>
6. Set the **Application username** to **Email**.
7. Once the app integration is set up, copy the Okta-provided **Identity Provider Single Sign On URL** and **X.509 Certificate** back into Vantage.
8. To enable the connection, switch the Active toggle to on. You will remain logged in to Vantage, but the next time you attempt to log in, you will be redirected to the Okta sign-on page.

### Test Your SSO Configuration

The recommended steps for testing your SSO configuration are as follows:

1. Once your connection is enabled, do not close or log out of your current Vantage application session.
2. Open a private browser or incognito window, and visit [https://console.vantage.sh](https://console.vantage.sh).
3. Enter your email address. If your SSO connection is configured correctly, you will be redirected to your IdP.
4. Enter your login credentials. If you can complete the login, your configuration is correct.

If you experience any issues with logging in after you've enabled your connection, [contact Vantage Support](mailto:support@vantage.sh).

### Disconnect Your IdP

If you ever need to disconnect your IdP from Vantage:

1. Navigate to the [Authentication page](https://console.vantage.sh/settings/account_identity_providers).
2. To _disable_ your connection, switch the **Active** toggle off. To _permanently remove_ your IdP, click the **Delete** button.

After disabling/removing the connection, you will be able to log in to the app with your original Vantage login credentials.

## Set Up Other IdPs

:::note
If you do not see your IdP listed, please contact [Vantage Support](mailto:support@vantage.sh).
:::

### Authenticate with Azure AD

:::info
The following instructions are based on the [Microsoft documentation](https://learn.microsoft.com/en-us/azure/active-directory/develop/quickstart-register-app).
:::

#### Step 1: Register an Application with Azure AD

<details><summary>Expand to view example image</summary>
<div> 
<img alt="Configuration for Azure app registration" width="80%" src="/img/azure-configure-1.png"/></div> <p><i>Source: Microsoft </i></p>
</details>

- From the Azure portal, navigate to **App registrations**, then click **New registration**.
- Enter a name for your app (e.g., _Vantage_).
- Set the **Supported account types** option to the appropriate setting for your organization.
- For **Redirect URI**, select **Web** and enter `https://auth.vantage.sh/login/callback`.
- Click **Register**.
- Once the app registration is complete, copy the **Application (client) ID** displayed on the app's **Overview** page to send to Vantage.

#### Step 2: Generate a Client Secret

<details><summary>Expand to view example image</summary>
<div> 
<img alt="Configuration for Azure client secret" width="80%" src="/img/azure-configure-2.png"/></div> <p><i>Source: Microsoft </i></p>
</details>

- On the left navigation, select **Certificates & secrets**.
- Under the **Client secrets** tab, click **New client secret**.
- Enter a description and select an expiration for the secret.
  :::caution
  If this secret expires, you will need to supply Vantage with a new secret _before_ the expiration date.
  :::
- Click **Add**.
- Copy the secret's **Value**.

#### Step 3: Add API Permissions

<details><summary>Expand to view example image</summary>
<div> 
<img alt="Configuration for Azure app API permissions" width="80%" src="/img/azure-configure-3.png"/></div> <p><i>Source: Microsoft </i></p>
</details>

- On the left navigation, select **API permissions**.
- Select **Add a permission**.
- Under the **Microsoft APIs** tab, find and select the appropriate permissions required by Vantage (e.g., `Directory.Read.All`, `User.Read`).
- At the bottom, click **Add permissions**.

#### Step 4: Grant Admin Consent (If Required)

<details><summary>Expand to view example image</summary>
<div> 
<img alt="Configuration for Azure app admin consent" width="80%" src="/img/azure-configure-4.png"/></div> <p><i>Source: Microsoft </i></p>
</details>

- Still under **API permissions**, you may see a section for **Grant admin consent for {your domain}**.
- Click **Grant admin consent**, and follow the prompts.

#### Step 5: Add Azure Credentials to Vantage

- Navigate to the [**Authentication screen**](https://console.vantage.sh/settings/account_identity_providers) in Vantage.
- Select **AzureAD**.
- Under **Step 2**, enter the following information:
  - **Tenant Domain:** The place you'll navigate to when you log in
  - **Client ID**
  - **Client Secret**
- Click **Configure Connection**. 

After your connection is complete, if you would like to set up SSO group mappings based on your existing Vantage teams, [see the SSO Group Mappings](/sso#set-up-sso-group-mappings) instructions below.

### Authenticate with Google Workspace

:::info
The following instructions are based on the [Google documentation](https://support.google.com/googleapi/answer/6158849).
:::

#### Step 1: Register an OAuth Application with Google

- From the [Google API Console](https://console.developers.google.com/), select an existing project or click **CREATE PROJECT**.
- From the left navigation menu, click **Credentials**.
- At the top, click **CREATE CREDENTIALS** > **OAuth client ID**.
  :::note
  If this is your first time working with this Google project, you will have to configure your consent screen. Follow the Google documentation linked above.
  :::
- For **Application type**, select **Web application**.
- Enter a **Name** for your application (e.g., _Vantage_).
- For **Authorized JavaScript origins**, click **ADD URI** and enter `https://auth.vantage.sh`.
- For **Authorized redirect URIs**, click **ADD URI** and enter `https://auth.vantage.sh/login/callback`.
- Click **CREATE**.

<details>
    <summary>Click to view example image</summary>
    <div> 
    <img alt="Google Workspace app setup" width="80%" src="/img/set-up-google-workspace.png"/> </div>
</details>

#### Step 2: Obtain Application Credentials and Contact Vantage Support

- Copy your app's **CLIENT ID** and **CLIENT SECRET**.
- Contact [Vantage Support](mailto:support@vantage.sh) for information on how to send these credentials to finish connecting with the Vantage app.

After your connection is complete, if you would like to set up SSO group mappings based on your existing Vantage teams, [see the SSO Group Mappings](/sso#set-up-sso-group-mappings) instructions below.

### Authenticate with Rippling

Vantage is available in the [Rippling App Shop](https://www.rippling.com/app-shop/app/vntg-inc-vantage), where you can find instructions for connecting your Vantage account to Rippling.

## Set Up SSO Group Mapping for Teams {#set-up-sso-group-mappings}

With the SSO Team Assignment feature, you can automatically assign users to Vantage teams that match the name of a corresponding SSO group.

### Prerequisites

To use the SSO Team Assignment feature, you will need to have teams already set up in Vantage. See the [Role-Based Access Control: Create Teams](/rbac#create-team) documentation for information on how to create teams in Vantage.

### Enable SSO Team Assignment

1.  From the top menu of the Vantage console, click **Settings**.
2.  On the left navigation menu, select **Authentication**. You will see your SSO connection listed.
3.  In the **SSO Team Assignment** section of the connection, click the toggle button to enable the feature.
  
Vantage will match SSO groups to Vantage teams based on the case-sensitive name of the SSO group. If a team name in Vantage matches an SSO group name, the user will be placed into that team in Vantage. Users will be mapped into the appropriate teams during their next login.

:::caution Important
After the SSO Team Assignment setting is enabled, users will be removed from Vantage teams that are not present in the SSO groups. If you want to modify this behavior, contact [support@vantage.sh](mailto:support@vantage.sh). The Everyone team will remain unchanged.
:::

### Create Custom Mappings

If your team names in Vantage _do not match_ your identity provider, or you want multiple groups to be added to the same team, you can create **custom mappings**.

1. To create custom mappings, click the **Show** dropdown menu next to **Custom Mappings**.
2. In the **SSO Group Name** column, enter the group names from your SSO provider. The SSO Group Name you enter should match the corresponding name in your identity provider. Note that the mapping is case-sensitive.
3. From the **Vantage Team** dropdown, select the corresponding Vantage team.
4. Click **Add** to add additional mappings.
 <div style={{display:"flex", justifyContent:"center"}}>
 <img alt="SSO team assignment toggle in the console" width="80%" src="/img/sso-team-assignment.png" />
 </div>
5. When you are finished, click **Save**.

:::note
A user’s teams are updated on every login. Vantage will also automatically remove users from teams that are no longer present in the SSO groups list.
:::

### Group Mapping in Okta — Enabling `groups` Attribute

Vantage uses the `groups` field in the SSO payload for matching SSO groups to Vantage teams. As long as your identity provider can pass a `groups` attribute in the payload, you can use SSO group mapping. For some providers, like Okta, you may need to enable group mapping.

To enable group mapping in Okta:

1. Navigate to the Vantage SAML application in Okta.
2. Edit your **SAML Settings**.
3. For **Name**, enter `groups`.
4. If you would like to pass through all groups, set the **Filter** to **Matches regex** with a value of `.*`.
<details>
    <summary>Click to view example image</summary>
    <div> 
    <img alt="Okta group attribute settings" width="80%" src="/img/okta-group-attribute.png"/> </div>
</details>

:::info
If you need help with your specific identity provider, contact [support@vantage.sh](mailto:support@vantage.sh).
:::
