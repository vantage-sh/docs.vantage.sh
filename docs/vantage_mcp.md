---
id: vantage_mcp
title: Vantage MCP
description: With the Vantage MCP, you can use natural language to explore your organization’s cloud costs via MCP clients, like Claude, Cursor, Goose, and others.
image: /img/mcp/vantage-mcp.png
keywords:
  - Model Context Protocol 
  - MCP
  - Vantage MCP
  - Hosted MCP
  - Self-Hosted MCP
  - Remote MCP
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Vantage MCP

With the Vantage MCP ([Model Context Protocol](https://modelcontextprotocol.io/introduction)), you can use natural language to explore your organization’s cloud costs via MCP clients, like Claude, Cursor, Goose, and others. Ask questions about your organization's previous and current cloud cost spend, cost tagging, provider integrations, and more. The MCP lets you interact with your cloud cost data through AI assistants and MCP clients. By acting as a bridge to Vantage's existing APIs, the Vantage MCP Server lets you query cloud spend data using natural language and makes cost analysis more intuitive. 

Vantage has a remote and self-hosted version of the MCP.

- **Self-Hosted MCP**: With the Self-Hosted MCP, customers are responsible for deploying and managing their own instance of the MCP server, which includes managing API keys, handling authentication, and performing regular updates to keep up with new releases.
- **Remote MCP:** With the Remote Vantage MCP, Vantage manages all the above items. Customers do not need to deploy a new instance of the MCP when updates are released.

## MCP Clients

:::tip MCP Client vs. MCP Server
An MCP client (e.g., Claude, Cursor, Goose) is any AI agent or interface that can communicate using the Model Context Protocol to query backend services (i.e., servers), such as the Vantage MCP Server. The Vantage MCP Server acts as a backend service that translates natural language queries from clients into API calls to systems like Vantage. 
:::

The Vantage MCP Server is compatible with any AI agent that provide MCP client functionality. Examples of supported clients include: 

- Anthropic’s [Claude](https://claude.ai) Desktop application
- [Cursor](https://www.cursor.com/) IDE
- Block’s local AI agent, [Goose](https://github.com/block/goose)

You can find a complete list of example clients in the [MCP documentation](https://modelcontextprotocol.io/clients).

## Configure the Self-Hosted Vantage MCP

Follow the steps provided in the Self-Hosted MCP’s [GitHub repository](https://github.com/vantage-sh/vantage-mcp-server). These instructions will provide you with all necessary prerequisites needed to set up and deploy the self-hosted, local MCP.

## Configure the Remote Vantage MCP

Before getting started, make sure you have an active Vantage account. Authentication with the remote MCP uses OAuth. Once you’ve configured your client, a browser window is displayed, which prompts you to log in to Vantage, just like you would at [console.vantage.sh](https://console.vantage.sh/).

:::note
You can't use a remote MCP instance without linking it to a Vantage user, since authentication is handled through existing Vantage accounts. If you need to support users who don't have Vantage accounts, use the [self-hosted MCP](https://github.com/vantage-sh/vantage-mcp-server), which supports API key-based authentication.
:::

Guidance is provided below for how to install with some popular clients, like Claude and Goose. Instructions for your specific client may vary. 

:::note ChatGPT Users
At this time, the official ChatGPT client supports MCP clients only for deep research. General-use MCPs, like Vantage, are not supported. You can use the Goose client to connect to the ChatGPT-powered LLMs, and also connect to the Vantage MCP server. 
:::

### Step 1: Download and Install an MCP Client

<Tabs groupId="mcp">
    <TabItem value="claude" label="Claude" default>
    Download <a href="https://claude.ai/download">Claude for Desktop</a> for your operating system.
    </TabItem>
    <TabItem value="goose" label="Goose" default>
    Download <a href="https://block.github.io/goose/docs/getting-started/installation/">Goose</a> for your operating system and configure an LLM provider.
    </TabItem>
</Tabs>

### Step 2: Configure the Vantage MCP Server

<Tabs groupId="mcp">
<TabItem value="claude" label="Claude">

1. From the top of Claude for Desktop, click Claude > Settings (keyboard shortcut `Command + ,`).
2. From the left menu of the **Settings** pane, select **Developer**.
3. Click **Edit Config**. A configuration file is created at:
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
4. Open the `claude_desktop_config.json` file and update its contents. Then, save the file and restart Claude.

    ```bash
    {
        "mcpServers": {
            "Vantage MCP Server": {
            "command": "npx",
            "args": ["-y", "mcp-remote", "https://mcp.vantage.sh/sse"],
            "env": {}
            }
        }
    }
    ```

</TabItem>
<TabItem value="goose" label="Goose">

1. From the left navigation pane in Goose, click **Extensions.** 
2. On the **Extensions** screen, click **+** A**dd custom extension**.
3. Enter the following extension details:
    - For **Extension Name**, enter *Vantage*.
    - For **Type**, select **STDIO**. 
    - For **Command**, enter `npx -y mcp-remote https://mcp.vantage.sh/sse`.
    <div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Create an extension in Goose" width="60%" src="/img/mcp/goose-extension.png" />
    </div>
4. Click **Add Extension**. 

</TabItem>
</Tabs>


### Step 3: Authorize the Vantage MCP Server    

:::note
You may need to close and reopen your client for the authorization screen to display.
:::

After you configure the MCP server, an authorization screen is displayed in your browser. 

1. Read the authorization information. Then, click **Allow Access** to proceed.
    <div style={{display:"flex", justifyContent:"center"}}>
        <img alt="Authorize the MCP in Vantage" width="60%" src="/img/mcp/vantage-auth.png" />
    </div>
2. You will then be prompted to log in to Vantage with your username and password or authenticate via SSO. After you log in to Vantage, you will have access to the Vantage MCP server.

### Step 4: Prompt the Vantage MCP Server

<Tabs groupId="mcp">
<TabItem value="claude" label="Claude">

Start a new chat to begin prompting Claude. For example, you can ask, _“In Vantage, which workspaces do I have access to?”_ Claude uses the appropriate [MCP tool](/vantage_mcp#mcp-tools) and replies with workspace access details.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Chatting with Claude and Vantage MCP" width="80%" src="/img/mcp/claude-chat.png" />
</div>

Each time Claude uses a new tool, you'll be asked to approve it. Click **Allow Always** to grant ongoing access, or **Allow Once** to approve it just this time.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Authorizing a tool in Claude" width="50%" src="/img/mcp/claude-tools.png" />
</div>

:::note
You may encounter conversation limits when prompting Claude. If you encounter a limit, create a new chat. As a best practice, keep separate topics in separate chats for better organization.
:::

</TabItem>

<TabItem value="goose" label="Goose">

Start a new chat to begin prompting Goose. For example, you can ask, _“In Vantage, which workspaces do I have access to?”_ Goose uses the appropriate MCP tool and replies with workspace access details.

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="Chatting with Goose and Vantage MCP" width="80%" src="/img/mcp/goose-chat.png" />
</div>

</TabItem>

</Tabs>

## Vantage MCP Tools {#mcp-tools}

MCP tools “are a powerful primitive in the Model Context Protocol (MCP) that enable servers to expose executable functionality to clients. Through tools, LLMs can interact with external systems, perform computations, and take actions in the real world” ([Source](https://modelcontextprotocol.io/docs/concepts/tools)). The Vantage MCP exposes the following tools:

| Tool | Description |
| --- | --- |
| `get-cost-report-forecast` | List all spending forecasts related to a Cost Report. |
| `get-myself` | A utility to list available workspaces and check the access level of your authentication token. |
| `list-anomalies` | List of anomalies that were detected on Cost Reports. |
| `list-budgets` | List all budgets available to compare against a Cost Report and track spending. |
| `list-cost-integrations` | List all cost provider integrations (e.g., AWS, Azure, GCP) available to provide costs data from and their associated accounts. |
| `list-cost-providers` | List of the providers that the given workspace has shared with it, for filtering in [Vantage Query Language (VQL)](/vql) queries. |
| `list-cost-reports` | List all available Cost Reports. |
| `list-cost-services` | Lists all the services and their associated provider that is shared with the given workspace. |
| `list-costs` | Display all the costs in an associated Cost Report. |
| `list-dashboards` | List of all dashboards created in the Vantage account. |
| `list-tag-values` | List of tag values that can be used to filter Cost Reports. |
| `list-tags` | List of tags that can be used to filter Cost Reports. |
| `list-unit-costs` | Retrieve the unit costs for a given Cost Report. |
| `query-costs` | A general-purpose way to fetch cost data using VQL. |
| `submit-user-feedback` | Send feedback about the MCP or overall Vantage experience to the Vantage team. |

## Examples: Prompt the Vantage MCP

When you use the Vantage MCP, consider constructing clear and well-structured prompts to get the exact response you are looking for. This method helps your AI client understand your intent and provides you with the best response. You can provide relevant context, such as specific workspaces, timeframes, or services. See the [Prompting Best Practices](/vantage_mcp#best-practices) section for some additional tips.

Consider the below example. In this example, the user has chosen to use Claude to interact with the Vantage MCP. This user is part of an organization that has multiple workspaces on Vantage.

The user asks:

> *How much did we spend on S3 in us-east-1 over the last 30 days?*

Claude responds:

> *I'll help you find your S3 spending in us-east-1 over the last 30 days. First, let me check your workspace information and available cost providers.*

The MCP’s `get-myself` tool is then used to retrieve:

- User identity
- Accessible workspaces
- Cost provider connections (e.g., AWS)

Claude identifies that the user has access to multiple workspaces and selects the default one to proceed:

> *I can see you have access to multiple workspaces. To get your S3 spending data, I'll need to know which workspace you'd like me to query. I'll start with the first workspace ('Marketing Workspace') and check for AWS S3 costs.*

Now that Claude has the necessary context, it calls the MCP’s `query-costs` tool with scoped filters:

```json
{
  `filter`: `(costs.provider = 'aws' AND costs.service = 'Amazon Simple Storage Service' AND costs.region = 'us-east-1')`,
  `date_bin`: `day`,
  `end_date`: `2025-07-22`,
  `start_date`: `2025-06-22`,
  `workspace_token`: `wrkspc_1234567`
}
```

Claude responds:

> *It looks like there are no S3 costs in us-east-1 for Marketing Workspace. Let me try a few other workspaces to see if your S3 costs might be in a different workspace. Let me check the "Management" workspace which seems like it might be a primary workspace.*

It then uses the `query-costs` tool again to look in other workspaces until it finds spend in a workspace. 

> _Based on your query for S3 costs in us-east-1 over the last 30 days (June 22 - July 22, 2025), here's what I found:_
>
> _**S3 Spending Summary (us-east-1, Last 30 Days)**_
>
> _Total S3 Spend: $55,089.92_
>
> _The costs are distributed across multiple AWS accounts:_
>
> _**Top Spending Accounts:**_
>
> _- Account 123456789: ~$25,850+ (dominant portion of spend)_
> 
> _ ..._

In addition, daily spending patterns and other insights are provided.

:::tip
For quicker, more relevant results, if the user had specified the workspace in the initial question, for example:

> _How much did we spend on S3 in us-east-1 over the last 30 days in the Management Workspace?_
> 

Claude would immediately have the necessary context and could skip the workspace confirmation step, which would result in a quicker, more relevant response.
:::

### Prompting Best Practices {#best-practices}

Consider using the following best practices when working with the Vantage MCP:

- Add context to your prompts. Mention primitives like provider, time frame, workspace, specific service, or tags, when applicable.
    - _Example: What was our GCP BigQuery spend for September and October 2024?_
- Ask one thing at a time and avoid stacking various unrelated questions. Instead of, _“What were our EC2 costs last month, and also which accounts are over budget, and can you tell me if any tags are missing?”_ consider asking these as separate prompts to keep responses organized and information relevant.
- Be specific. Don’t assume the client knows what terms like “important” mean. Instead of _"What are my most important costs to monitor?"_, try something more specific, like, _"Which services have the highest costs without tags?"_ or _"Which accounts had the biggest increase in spend over the past two months?"_

### Additional Prompt Examples

Additional examples are provided below for how you can interact with the Vantage MCP.

<details>
<summary>Cost Analysis</summary>

- How much did we spend on S3 in us-east-1 over the last 30 days in the Management workspace?  
- What are the top 5 most expensive GCP services this month across all workspaces?  
- Compare GCP and Azure spend for the last quarter.  
- Show me my EC2 costs that are tagged with the environment tag.

</details>

<details>
<summary>Forecasting and Planning</summary>

- What is our forecasted cloud spend for next month across all providers?  
- If we deprecate the ap-northeast-2 AWS region, how much could we save?

</details>

<details>
<summary>Tagging and Filtering</summary>

- List all tags available in our default workspace.  
- Get last month’s Datadog spend filtered by the infra team tag.  
- Break down Azure costs by the owner tag for the past 90 days.

</details>

<details>
<summary>Anomaly Detection</summary>

- Are there any recent major anomalies in our GitHub spend?  
- Which AWS services spiked in cost over the last 7 days?

</details>

## Feedback

You can join the free [Vantage Community Slack](https://vantage.sh/slack) to connect with other users and the Vantage team. In the `#mcp` channel, share feedback, ask questions, and see how others are using the Vantage MCP server. 

You can also use the `submit-user-feedback` tool within the MCP to submit feedback. Send a prompt, like:

> _Can you provide Vantage the following feedback: I love using the MCP!_