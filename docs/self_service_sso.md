# Self-service SSO  

Self-service SSO allows customers to connect their SAML Identity Provider (IdP) to their Vantage account. This allows the use of existing credentials to authenticate and access your Vantage account. SSO (Single Sign-On) streamlines the login process, since users don't need to create a new account or remember another set of login credentials for Vantage.

### Prerequisites:

Before you can connect your IdP to our app, you will need the following:

- A valid account with a SAML Identity Provider (IdP)
- Owner access to Vantage
- Your IdP's signing certificate and sign-on url 

### Getting Started:

To get started, navigate to Vantage's [Authentication Page](https://console.vantage.sh/settings/account_identity_providers) and click on the "New Connection" button. You will then be prompted to select an SSO Connection type. Currently, we only support self-service connection for SAML. If you'd like to to connect one of the other supported IdP's (e.g. AzureAD, Google Workspace, or Windows Active Directory), you will need to contact support for instructions.

### Connecting Your SAML IdP:

You will be prompted to copy Vantage's Single Sign-On URL and Audience URL into your your IdP's application creation process. See an example below from a popular IdP. If you'd like to add a logo to your conection's thumbnail, you can grab it from here: [Vantage Logo](https://s3.amazonaws.com/assets.vantage.sh/www/vantage_avatar-social.jpg). Once you create the Vantage application within your IdP, you'll need to provide us your SAML Sign On URL the Signing Certificate. Before clicking the Configure Connection button make sure you update you validate your credentials. You'll be redirected back to the [Authentication Page](https://console.vantage.sh/settings/account_identity_providers), where you will be able to see your connection and enable it.

For security reasons Vantage does not support IdP-initiated sessions. You will follow the regular Vantage login flow as opposed to clicking Login to Vantage in your IdP Portal.

### Enable Connection:

From the [Authentication Page](https://console.vantage.sh/settings/account_identity_providers) you can switch the Active toggle **on** to enable the connection. Please note that you will remain logged in to Vantage, but the next time you attempt to login you will be redirected to your IdP's login page.

The recommended steps for testing your SSO configuration are as follows:

- Enable the connection for your account
- Do not close or log out of your current session
- Open a private browser and visit https://console.vantage.sh
- If your SSO connection is configured correctly you will be redirected to your IdP upon entering your email address
- If you are able to complete the login, this means your configuration is correct

If you experience any issues logging in after enabling your connection, you can contact support.

### Disconnecting Your IdP:

If you ever need to disconnect your IdP from Vantage, you can perform that operation from the [Authentication Page](https://console.vantage.sh/settings/account_identity_providers). You can disable your connection with the Active toggle, or permanently remove your IdP by clicking the Delete button. After disabling/removing the connection, you will be able to log back into the app with your original Vantage password.


### SAML Connection Example: Okta

![New Connection - Okta](/img/saml_okta_new.png)
![App Name Settings - Okta](/img/saml_okta_app_name.png)
![App Connection Settings - Okta](/img/saml_okta_settings.png)

