# Setup Fastly

!!! note "Fastly support is in closed early access."
     Vantage support for displaying Fastly costs is in closed early access. Please contact support@vantage.sh to opt in. 


## Connecting Your Fastly Account

Vantage integrates with your Fastly account through a read-only API token. Fastly API Tokens are free for you to create and added them to the Vantage console only takes a few minutes. Step by step instructions for generating a Fastly API Token are below:

* Ensure you've logged into the [Fastly.com console](https://www.fastly.com)
* Click the "+ Create Token" button from your personal [API Token Page](https://manage.fastly.com/account/personal/tokens/new).
* When creating an API Token:
     * Please name the token something relevant like "VantageReadOnlyToken"
     * For "Service Access" select "All Services from YOUR_ORGANIZATION_NAME"
     * For "Scope" select "Read-only access (global:read) — Read account information, configuration and stats" and ensure everything else is unchecked. Vantage will never attempt to make changes to your Fastly infrastructure. 
     * For "Expiration", select "Never expire"

Your token creation form should look like the following:

![Example Fastly Token Creation Form](/img/VantageFastlyInstructions_1.png)

After hitting the "Create Token" button, Fastly will generate your API Token. Copy this and head to your [Vantage Integrations Page](https://console.vantage.sh/settings/integrations) and add a new Fastly integration. You'll be prompted to copy the API Token you just generated. Upon submitting this token, Vantage will automatically begin ingesting and visualizing your costs within the Vantage console. 