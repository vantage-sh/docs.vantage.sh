---
title: Vantage Documentation
description: Vantage documentation. Explore our integrations for cloud cost management as well as cost reporting and optimization features.
hide_table_of_contents: true 
pagination_next: null
sidebar_label: Introduction
---

import IntroCardGroup from '@site/src/components/IntroCardGroup';
import IntroCard from '@site/src/components/IntroCard';

# Vantage Documentation

Vantage is a cloud observability and optimization platform that aggregates cloud infrastructure costs across providers to deliver a centralized view into total cloud spend. Vantage has multiple tools for optimizing cloud spend and provides organizations with advanced FinOps workflows and cost governance.

<IntroCardGroup
  cards={[
    {
      title: 'Quickstart',
      content: 'Get started creating an integration with a number of cloud  and cloud service providers.',
      image: '/img/index-cards/docs-site-card-integrations.jpg',
      link: './getting_started',
      newTab: false,
      alt: 'Diagram of cloud providers integrating with Vantage'
    },
    {
      title: 'Cost Reports',
      content: 'Create your first Cost Report in the Vantage console. Create budgets, forecasts, and annotations all within your Cost Report.',
      image: '/img/index-cards/docs-site-card-cost-report.jpg',
      link: './cost_reports',
      newTab: false,
      alt: 'Cost Reports in the Vantage console'
    },
    {
      title: 'Terraform Provider',
      content: "Use the Vantage Terraform provider and modules to automate your cloud cost monitoring infrastructure.",
      image: '/img/index-cards/docs-site-card-terraform.jpg',
      link: './terraform',
      newTab: false,
      alt: 'Terraform icon'
    },
  ]}
  columns={3} 
/>

## Additional and Community Resources

Vantage maintains a variety of resources to help make the lives of cloud practitioners easier. All resources below are free to use and open source, when possible.

<IntroCardGroup
  cards={[
    {
      title: 'API Documentation',
      content: 'The Vantage API makes it easy for you to programmatically access and read your cloud pricing data. Automate the management and creation of cost reporting resources, as well as programmatically create reports and filters. View the API docs to get started.',
      image: '/img/index-cards/docs-site-card-api.jpg',
      link: 'https://vantage.readme.io/reference/general',
      newTab: true,
      alt: 'API icon'
    },
    {
      title: 'EC2Instances.info',
      content: 'Simplifies the complex task of pricing EC2 instances on AWS. With over a million pricing permutations due to instance types, regions, and availability zones, the site streamlines the process, enabling users to quickly find and compare the best resources for their needs.',
      image: '/img/index-cards/docs-site-card-ec2.jpg',
      link: 'http://instances.vantage.sh/',
      newTab: true,
      alt: 'Menu icon'
    },
    {
      title: 'AWS Cost Leaderboard',
      content: 'A ranked list of AWS services that customers spend the most on. Vantage provides this anonymized and aggregated data to the community to shed light on cloud infrastructure costs.',
      image: '/img/index-cards/docs-site-card-leaderboard.jpg',
      link: 'https://leaderboard.vantage.sh/',
      newTab: true,
      alt: 'Scoreboard icon'
    },
    {
      title: 'Cloud Cost Handbook',
      content: 'An open-source set of guides meant to help explain the complex pricing of public cloud infrastructure and service providers in easy-to-understand terms. This guide is hosted on GitHub and is open to anyone to contribute their knowledge to the community.',
      image: '/img/index-cards/docs-site-card-handbook.jpg',
      link: 'http://handbook.vantage.sh/',
      newTab: true,
      alt: 'Handbook icon'
    },
    {
      title: 'Slack Community',
      content: "While the documentation here is meant to help answer any questions, you're also welcome to join our Slack community to add to the discussion and ask questions.",
      image: '/img/index-cards/docs-site-card-slack.jpg',
      link: 'https://vantage.sh/slack',
      newTab: true,
      alt: 'Slack icon'
    },
    {
      title: 'Cloud Cost Reports',
      content: 'Vantage uses anonymized data from thousands of connected accounts to snapshot industry spending patterns. View our quarterly Cloud Cost Reports to analyze trends over time.',
      image: '/img/index-cards/docs-site-card-cloud-cost-report.jpg',
      link: 'https://www.vantage.sh/cloud-cost-report',
      newTab: true,
      alt: 'Report icon'
    },
    {
      title: 'cur.vantage.sh',
      content: 'This tool helps you decode AWS Cost and Usage Report (CUR) billing codes for any AWS service. Search for specific services or billing codes to find detailed information about usage types and more.',
      image: '/img/index-cards/docs-site-card-cur.jpg',
      link: 'https://cur.vantage.sh/',
      newTab: true,
      alt: 'CUR icon'
    },
    {
      title: 'Vantage Blog',
      content: 'Read insightful articles related to cloud industry trends and news. Stay up to date on Vantage press releases and product news.',
      image: '/img/index-cards/docs-site-card-blog.jpg',
      link: 'https://www.vantage.sh/blog/',
      newTab: true,
      alt: 'Blog icon'
    },
    {
      title: 'FinOps as Code',
      content: 'This repository contains tutorials and demos for implementing FinOps as Code in your organization. Practice using the Vantage API and Terraform provider with step-by-step walkthrough tutorials.',
      image: '/img/index-cards/docs-site-card-finops-as-code.jpg',
      link: 'https://github.com/vantage-sh/finops-as-code',
      newTab: true,
      alt: 'FinOps as Code icon'
    },
  ]}
  columns={3} 
/>

:::note Vantage Support
If you need help with anything, please feel free to reach out to [support@vantage.sh](mailto:support@vantage.sh).
:::
