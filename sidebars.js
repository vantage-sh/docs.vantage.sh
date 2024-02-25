// @ts-check

module.exports = {
  someSidebar: [
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Get Started",
      items: [
        "index",
        "getting_started",
        {
          type: "category",
          label: "User Workflow Guides",
          collapsible: true,
          collapsed: true,
          items: [
            "team_accountability",
            "executive_reporting",
            "hidden_costs",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Security and Access",
      items: [
        "security",
        "vantage_account",
        "sso",
        "rbac",
        "workspaces",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "API and Terraform",
      items: [
        "api",
        "terraform",
        "vql",
        "data_dictionary",
      ],     
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "AWS",
          link: {
            type: 'doc',
            id: "connecting_aws",
          },
          items: [
            "permissions_aws", 
            "aws_supported_services"
          ],
        },
        {
          type: "category",
          label: "Azure",
          link: {
            type: 'doc',
            id: "connecting_azure",
          },
          items: [
            "azure_supported_services"
          ],
        },
        {
          type: "category",
          label: "Google Cloud",
          link: {
            type: 'doc',
            id: "connecting_gcp",
          },
          items: [
            "enabling_gcp_billing_export",
          ],
        },
        {
          type: "category",
          label: "Kubernetes",
          link: {
            type: 'doc',
            id: "connecting_kubernetes",
          },
          items: [
            "kubernetes_agent",
            "opencost",
            "kubernetes_container_insights",
            "kubernetes",
          ],
        },
        "connecting_datadog",
        "connecting_new_relic",
        "connecting_mongodb-atlas",
        {
          type: "category",
          label: "Snowflake",
          link: {
            type: 'doc',
            id: "connecting_snowflake",
          },
          items: [
            "snowflake_cost_by_query"
          ],
        },
        "connecting_databricks",
        "connecting_fastly",
        "connecting_oracle",
        "connecting_confluent",
        "connecting_planetscale",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Cost Reporting Features",
      items: [
        "overview",
        {
          type: "category",
          label: "Cost Reports",
          link: {
            type: 'doc',
            id: 'cost_reports',
          },
          items: [
            "saved_filters",
            "folders",
            "dashboards",
          ],
        },
        "annotations",
        "forecasting",
        "active_resources",
        "segments",
        "cost_anomaly_alerts",
        {
          type: "category",
          label: "Cost Report Notifications",
          link: {
            type: 'doc',
            id: "reports",
          },
          items: [
            "slack_integration",
            "microsoft_teams_integration",
          ],
        },
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Financial Planning Features",
      items: [
        "autopilot",
        "budgets",
        "per_unit_costs",
        "issues",
        "financial_commitment_reports",
        "savings_planner",
        "cost_recommendations",
        ],
        },  
        {
          type: "category",
          collapsible: false,
          collapsed: false,
          label: "Product Changelog",
          items: [
            "changelog",
            ],
            },  
  ],
};
