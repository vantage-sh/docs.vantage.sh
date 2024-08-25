---
title: Vantage University
description: Vantage University is a suite of training videos and user education to help you get started with Vantage.
hide_table_of_contents: true 
pagination_next: null
pagination_prev: null
image: /img/vantage-university/vantage-university.jpg
keywords:
  - Vantage University
---
import VantageUGroup from '@site/src/components/VantageUGroup';
import VantageUCard from '@site/src/components/VantageUCard';

import IntroCardGroup from '@site/src/components/IntroCardGroup';
import IntroCard from '@site/src/components/IntroCard';

# 🎓 Vantage University

  <div style={{ display: 'flex', flexWrap: 'wrap' }}>
    <div style={{ flex: 1, padding: '10px', minWidth: '300px' }}>
      <h2>Observability, Visibility, Optimization</h2>
      <p>
        Vantage is an observability, visibility, and optimization tool that provides you with clear insights into your cloud cost data. Create reports and dashboards, monitor your costs for anomalies, and view recommendations for how to optimize your resources. Vantage has multiple provider integrations to help you view all your cloud costs in one place.
      </p>
      <h2>
        Welcome to Vantage University!
      </h2>
      <p>
        Select a topic below to explore Vantage features. Each topic includes a set of video lessons that you can follow along with as you get set up in your own Vantage account. With each topic, you'll be provided with a list of additional resources to help you navigate the console.
      </p>
    </div>
    <div style={{ flex: 1, padding: '15px', minWidth: '300px' }}>
      <iframe
        src="https://www.youtube.com/embed/Y9fJ1IPBleQ?si=WvqYEGFJUc6nNnRQ?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent"
        allowFullScreen
        style={{ width: '100%', height: '350px', borderRadius: '10px', border: '8px solid #d3d3d3' }}
      ></iframe>
    </div>
  </div>

---

<h2>User-Specific Learning Tracks</h2> 

Follow these learning tracks to understand how to best use Vantage in your role.

<IntroCardGroup
  cards={[
    {
      title: 'FinOps Analyst',
      content: 'Learn about how to use Vantage effectively as your organization’s FinOps power user, building a culture of cloud cost optimization. ',
      image: '/img/vantage-university/finops-analyst.jpg',
      link: '/vantage_university_finops_analyst',
      newTab: false,
      alt: 'FinOps Analyst lesson track logo'
    },
    {
      title: 'Developer',
      content: 'Learn about how you can best use Vantage to manage and optimize the cloud resources you are responsible for.',
      image: '/img/vantage-university/developer.jpg',
      link: '/vantage_university_developer',
      newTab: false,
      alt: 'Developer lesson track logo'
    },
    {
      title: 'Finance Manager',
      content: "Learn about how you can use Vantage to manage and analyze the total cost of your organization. ",
      image: '/img/vantage-university/finance-manager.jpg',
      link: '#',
      newTab: false,
      alt: 'Finance Manager lesson track logo'
    },
  ]}
  columns={3} 
/>

--- 

<h2>Video Lessons</h2> 

Follow these sections to better understand how to use specific Vantage features.

<VantageUGroup
  cards={[
    {
      content: (
        <ul><li>Create a new workspace</li>
        <li>Navigate through your workspaces</li></ul>
      ),
      image: '/img/vantage-university/account-management.jpg',
      link: '/vantage_university_account_management',
      newTab: false,
      alt: 'Vantage University logo with Account Management as a title'
    },
    {
      content: (
        <ul><li>Create integrations</li>
        <li>Add Custom Providers</li></ul>
      ),
      image: '/img/vantage-university/integrations.jpg',
      link: '/vantage_university_integrations',
      newTab: false,
      alt: 'Vantage University logo with Integrations as a title'
    },
    {
      content: (
        <ul><li>Create and view Cost Reports</li>
        <li>Learn about additional Cost Reporting tools</li></ul>
      ),
      image: '/img/vantage-university/cost-reporting.jpg',
      link: '/vantage_university_cost_reporting',
      newTab: false,
      alt: 'Vantage University logo with Cost Reporting as a title'
    },
    {
      content: (
        <ul><li>Create a segment hierarchy</li>
        <li>Explore virtual tagging</li></ul>
      ),
      image: '/img/vantage-university/cost-allocation.jpg',
      link: '/vantage_university_cost_allocation',
      newTab: false,
      alt: 'Vantage University logo with Cost Allocation as a title'
    },
    {
      content: (
        <ul><li>View and create anomaly alerts</li>
        <li>Review and act on cost recommendations</li></ul>
      ),
      image: '/img/vantage-university/observability.jpg',
      link: '/vantage_university_observability',
      newTab: false,
      alt: 'Vantage University logo with Observability as a title'
    },
    {
      content: (
        <ul><li>Understand unit costs</li>
        <li>View and analyze business metrics</li></ul>
      ),
      image: '/img/vantage-university/unit-costs.jpg',
      link: '/vantage_university_unit_costs',
      newTab: false,
      alt: 'Vantage University logo with Unit Costs as a title'
    },
    {
      content: (
        <ul><li>Create a cost budget</li>
        <li>Configure budget alerts</li></ul>
      ),
      image: '/img/vantage-university/budgeting.jpg',
      link: '/vantage_university_budgeting',
      newTab: false,
      alt: 'Vantage University logo with Budgeting as a title'
    },
    {
      content: (
        <ul><li>Monitor and manage per-resource costs</li>
        <li>View network flows and associated costs</li></ul>
      ),
      image: '/img/vantage-university/per-resource-costs.jpg',
      link: '/vantage_university_per_resource_costs',
      newTab: false,
      alt: 'Vantage University logo with Per Resource Costs as a title'
    },
  ]}
/>
