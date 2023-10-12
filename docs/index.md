---
title: Vantage Documentation
description: Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.
hide_table_of_contents: true 
pagination_next: null
---

import IntroCardGroup from '@site/src/components/IntroCardGroup';
import IntroCard from '@site/src/components/IntroCard';

# Vantage <span class="text-gradient">Documentation</span>

Vantage is a cloud cost transparency platform that aggregates cloud infrastructure costs across providers to deliver a centralized view into total cloud spend. Vantage includes multiple tools for optimizing cloud spend and provides enterprises with advanced FinOps workflows and cost governance.

It's free to get started — navigate to the [Sign Up page](https://docs.vantage.sh/signup) and choose an authentication method.


<IntroCardGroup
  cards={[
    {
      title: 'Integrations',
      content: 'Get started creating an integration with a number of cloud providers.',
      image: '/img/docs-site-card-integrations.png',
      link: './getting_started',
      alt: 'Diagram of cloud providers integrating with Vantage'
    },
    {
      title: 'Cost Reports',
      content: 'Create your first Cost Report in the Vantage console. Create budgets, forecasts, and annotations all within your Cost Report.',
      image: '/img/docs-site-card-cost-report.png',
      link: './cost_reports',
      alt: 'Cost Reports in the Vantage console'
    },
    {
      title: 'Terraform Provider',
      content: "Use Vantage's Terraform provider to automate your Vantage cloud cost infrastructure.",
      image: '../../img/docs-site-card-terraform.png',
      link: './terraform',
      alt: 'Terraform icon'
    },
  ]}
  columns={3} 
/>


## Additional and Community Resources

Vantage maintains a variety of resources to help make the lives of cloud practitioners easier. All the resources below are free to use and open source when possible.

<IntroCardGroup
  cards={[
    {
      title: 'API Documentation',
      content: 'The Vantage API makes it easy for you to programmatically access and read your cloud pricing data. Automate the management and creation of cost reporting resources as well as programmatically create reports and filters. View the API docs to get started.',
      image: '../../img/docs-site-card-api.png',
      link: 'https://vantage.readme.io/reference/general',
      alt: 'API icon'
    },
    {
      title: 'EC2Instances.info',
      content: 'Simplifies the complex task of pricing EC2 instances on AWS. With over a million pricing permutations due to instance types, regions, and availability zones, the site streamlines the process, enabling users to quickly find and compare the best resources for their needs.',
      image: '/img/docs-site-card-ec2.png',
      link: 'http://instances.vantage.sh/',
      alt: 'Menu icon'
    },
    {
      title: 'AWS Cost Leaderboard',
      content: 'A ranked list of AWS services that customers spend the most on. Vantage provides this anonymized and aggregated data to the community to shed light on cloud infrastructure costs.',
      image: '../../img/docs-site-card-leaderboard.png',
      link: 'https://leaderboard.vantage.sh/',
      alt: 'Scoreboard icon'
    },
    {
      title: 'Cloud Cost Handbook',
      content: 'An open-source set of guides meant to help explain the complex pricing of public cloud infrastructure and service providers in easy-to-understand terms. This guide is hosted on GitHub and is open to anyone to contribute their knowledge to the community.',
      image: '../../img/docs-site-card-handbook.png',
      link: 'http://handbook.vantage.sh/',
      alt: 'Handbook icon'
    },
    {
      title: 'Slack Community',
      content: "While the documentation here is meant to help answer any questions, you're also welcome to join our Slack community to add to the discussion and ask questions.",
      image: '../../img/docs-site-card-slack.png',
      link: 'https://join.slack.com/t/vantagecommunity/shared_invite/zt-1szz6puz7-zRuJ8J4OJIiBFlcTobYZXA',
      alt: 'Slack icon'
    },
    {
      title: 'Cloud Cost Reports',
      content: 'Vantage uses anonymized data from thousands of connected accounts to snapshot industry spending patterns. View our quarterly Cloud Cost Reports to analyze trends over time.',
      image: '../../img/docs-site-card-cloud-cost-report.png',
      link: 'https://www.vantage.sh/cloud-cost-report',
      alt: 'Report icon'
    },
  ]}
  columns={3} 
/>

:::note Vantage Support
If you need help with anything, please feel free to reach out to [support@vantage.sh](mailto:support@vantage.sh).
:::
