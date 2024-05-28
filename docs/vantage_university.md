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
        src="https://www.youtube.com/embed/Y9fJ1IPBleQ?si=Jqd7EkuqWczRhkg?rel=0&color=white&modestbranding=1&showinfo=0&wmode=transparent&autoplay=1"
        allowFullScreen
        style={{ width: '100%', height: '350px', borderRadius: '10px', border: '8px solid #d3d3d3' }}
      ></iframe>
    </div>
  </div>

--- 
<VantageUGroup
  cards={[
    {
      content: (
        <ul><li>Create a new workspace</li>
        <li>Navigate through your workspaces</li></ul>
        ),
      image: '/img/vantage-university/account-management.jpg',
      link: './vantage_university_account_management',
      newTab: false,
      alt: 'Vantage University logo with Account Management as a title'
    },
    {
      content: (
        <ul><li>Create and view Cost Reports</li>
        <li>Create detailed Cost Report filters</li></ul>
        ),
      image: '/img/vantage-university/cost-reporting.jpg',
      link: './vantage_university_cost_reporting',
      newTab: false,
      alt: 'Vantage University logo with Cost Reporting as a title'
    },
    {
      content: (
        <ul><li>Create a segment hierarchy</li>
        <li>Explore virtual tagging</li></ul>
        ),
      image: '/img/vantage-university/cost-allocation.jpg',
      link: './vantage_university_cost_allocation',
      newTab: false,
      alt: 'Vantage University logo with Cost Allocation as a title'
    },
    {
      content: (
        <ul><li>View and create anomaly alerts</li>
        <li>Review and act on cost recommendations</li></ul>
        ),
      image: '/img/vantage-university/observability.jpg',
      link: './vantage_university_observability',
      newTab: false,
      alt: 'Vantage University logo with Observability as a title'
    },
    {
      content: (
        <ul><li>Understand unit costs</li>
        <li>View and analyze business metrics</li></ul>
        ),
      image: '/img/vantage-university/unit-costs.jpg',
      link: './vantage_university_unit_costs',
      newTab: false,
      alt: 'Vantage University logo with Unit Costs as a title'
    },
    {
      content: (
        <ul><li>Create a cost budget</li>
        <li>Configure budget alerts</li></ul>
        ),
      image: '/img/vantage-university/budgeting.jpg',
      link: './vantage_university_budgeting',
      newTab: false,
      alt: 'Vantage University logo with Budgeting as a title'
    },
  ]}
  columns={3} 
/>
