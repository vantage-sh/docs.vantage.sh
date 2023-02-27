# New Relic

[Create a free Vantage account](https://console.vantage.sh/signup) then follow the steps below to integrate New Relic costs.

## Prerequisites

Vantage integrates with your New Relic account through the use of [NerdGraph](https://docs.newrelic.com/docs/apis/nerdgraph/get-started/introduction-new-relic-nerdgraph/), New Relic's GraphQL API, and accesses that via an API token. You will need to [generate an API token](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/). You will also need your [Account ID](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/).

## Connecting your New Relic Account

To connect your New Relic account, open the [New Relic Settings](https://console.vantage.sh/settings/new_relic) page in the Vantage console. Follow the instructions which require performing the following operations in the [New Relic console](https://one.newrelic.com/). Begin by clicking `Add Connection` in the Vantage console.

### Get your Account ID 

You will need your [Account ID](https://docs.newrelic.com/docs/accounts/accounts-billing/account-structure/account-id/).

### Create a User API Key

You will need a [User API Key](https://docs.newrelic.com/docs/apis/intro-apis/new-relic-api-keys/).

### Negotiated Pricing

You will want to have access to the specific pricing for your account when configuring your integration. This can include the per-gigabyte ingestion rate, amount of free ingestion per month, core and full platform user pricing, and any free user seats.

## New Relic Reporting Dimensions

New Relic [Cost Reports](/cost_reports/) enable you to filter New Relic costs along several dimensions:

* Account
* Service
* Category

