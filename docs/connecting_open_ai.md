# OpenAI

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate OpenAI costs.

## Prerequisites

Vantage integrates with your OpenAI account through the use of the Usage API. This endpoint is not documented by OpenAI at the time of publishing this article.

## Select the default organization

Select the organization that will be used by default when connecting to OpenAI. This can be changed later in the [OpenAI API Keys](https://platform.openai.com/account/api-keys) page.

![OpenAI Organization Step](/img/open-ai-organization.png)

## Connecting your OpenAI organization

To connect your OpenAI organization, open the [OpenAI Settings](https://console.vantage.sh/settings/open_ai) page in the Vantage console. Follow the instructions which require performing the following operations in the [OpenAI API Keys page](https://platform.openai.com/account/api-keys). Begin by clicking  `Add API key` in the Vantage console.

### Create an API Key

Next, select the "+ Create new secret key" button.

![OpenAI Secret Key Step](/img/open-ai-secret-key.png)

Give it a name like "Vantage Integration." By default, all OpenAI API keys have both read and write access, but we will never write to any endpoints using your API key. We will only read from the Usage endpoint.

![OpenAI Secret Key Name Step](/img/open-ai-secret-key-name.png)

Copy the key into the "API Key" field in Vantage and give it a description that helps identify yourself, such as your name.

![OpenAI Add Key Step](/img/open-ai-add-key.png)

Click `Connect Account` to grant Vantage access to the Usage API.