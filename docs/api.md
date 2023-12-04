---
id: api
title: API
description: This page provides and introduction to the Vantage API as well as associated API resources.
keywords:
    - API
    - VQL
    - Vantage Query Language
    - Terraform
---

# Vantage API

import CustomCardGroup from '@site/src/components/CustomCardGroup';
import CustomCard from '@site/src/components/CustomCard';

The Vantage API allows users to programmatically access their cost data as well as create cost resources, such as Cost Reports, Folders, Saved Filters, and Dashboards. 

You can access the [API documentation](https://vantage.readme.io/reference/general) to read more about available endpoints and associated endpoint parameters. You can also perform API calls directly from the documentation. 

:::caution Important
Keep in mind that when using the API reference tool to perform API calls, you are working with your live data.
:::

When viewing an endpoint, all available parameters will be listed on the corresponding API documentation page, along with any requirements. 

<div style={{display:"flex", justifyContent:"center"}}>
    <img alt="API documentation" width="90%" src="/img/api.png" />
</div>

The above image shows a sample `POST` call to the `/folders` endpoint. 
- To get started, enter your [API token](https://vantage.readme.io/reference/authentication) in the **Authorization** field. 
- The body parameters `title`, `parent_folder_token`, `saved_filter_token`, and `workspace_token` are displayed, along with a sample request. 
- You can choose to display the request in numerous programming languages, such as Python, Ruby, or JavaScript. 
- Click the **Try It!** button. The Response and any errors are displayed below the request. 

## API Versions

Two versions of the API are available in the documentation:

- `v1.1.0`: With v1 of the API, you can view providers (AWS only for this version), services, and products. You can also view Cost Reports. See the [v1 API documentation](https://vantage.readme.io/v1.1.0/reference/general) for more information. 
- `v2.0`: v2 of the API offers expanded functionality. You can automate the management and creation of Cost Reports, Folders, Dashboards, and Saved Filters. You can also create and manage teams and resource access grants. See the [v2 API documentation](https://vantage.readme.io/v2.0/reference/general) for more information.

## Get Started with the API

<CustomCardGroup
  cards={[
    {
      icon: '/img/logos/quickstart-icon.svg',
      iconAltText: 'Start icon',
      title: 'API Quickstart',
      content: "Get started with the Vantage API. Understand the API schema and how to call various endpoints.",
      link: "https://vantage.readme.io/reference/quickstart",
    },
    {
      icon: '/img/logos/api-icon.svg',
      iconAltText: 'API icon',
      title: 'API Authentication',
      content: "Learn how to authenticate and access the Vantage API. Create an API access token with Read and Write scopes enabled.",
      link: "https://vantage.readme.io/reference/authentication",
    },
    {
      icon: '/img/logos/vql-icon.svg',
      iconAltText: 'Query logo',
      title: 'Vantage Query Language (VQL)',
      content: "Vantage Query Language (VQL) is a SQL-like language designed to filter cloud cost data. VQL provides a normalized schema across various cloud providers.",
      link: "/vql",
    },
    {
      icon: '/img/logos/data-dictionary-icon.svg',
      iconAltText: 'Dictionary icon',
      title: 'Data Dictionary',
      content: "Consult the Data Dictionary to view the normalized field names used to create VQL statements. Each provider that Vantage integrates with makes different fields available in their billing data.",
      link: "/data_dictionary",
    },
  ]}
  columns={2}
/>
