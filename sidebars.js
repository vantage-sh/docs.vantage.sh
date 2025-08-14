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
          label: "Vantage University",
          link:            
          { 
            type: 'doc',
            id: "vantage_university",
          },
        items: [
          {
            type: "category",
            label: "User-Specific Learning Tracks",
            collapsible: true,
            collapsed: false,
            items: [
              "vantage_university_finops_analyst",
              "vantage_university_developer",
              "vantage_university_finance_manager",
            ],
          },
          "vantage_university_account_management", 
          "vantage_university_integrations",
          "vantage_university_cost_reporting", 
          "vantage_university_cost_allocation",
          "vantage_university_observability",
          "vantage_university_unit_costs",
          "vantage_university_budgeting",
          "vantage_university_per_resource_costs",
          {
            type: "category",
            label: "Sample Workflow Guides",
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
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Account and Security",
      items: [
        "security",
        "vantage_account",
        "audit_logs",
        "sso",
        "rbac",
        "workspaces",
        "tagging",
        "partners",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "API and Terraform",
      items: [
        "api",
        "vantage_mcp",
        "terraform",
        {
          type: "category",
          label: "Vantage Query Language (VQL)",
          link: {
            type: 'doc',
            id: "vql",
          },
          items: [
            "vql_cost_report",
            "vql_resource_report",
            "vql_kubernetes_efficiency_report",
            "vql_financial_commitment_report",
            "vql_network_flow_report",
          ],
        },
        "data_dictionary",
      ],     
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Provider Integrations",
      items: [
        {
          type: "category",
          label: "AWS",
          link: {
            type: 'doc',
            id: "connecting_aws",
          },
          items: [
            "aws_supported_services",
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
            "connecting_azure_mca",
            "connecting_azure_ea",
            "azure_supported_services",
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
            "gcp_supported_services",
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
        "connecting_coralogix",
        "connecting_github",
        "connecting_linode",
        "connecting_open_ai",
        "connecting_grafana",
        "connecting_clickhouse",
        "connecting_temporal",
        "connecting_twilio",
        "connecting_custom_providers",
        "provider_data_refresh",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "App Integrations",
      items: [
        "jira",
        "slack",
        "microsoft_teams",
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
        {
          type: "category",
          label: "Notifications",
          collapsible: true,
          collapsed: true,
          items: [
            "report_notifications",
            "cost_alerts",
          ],
        },
        "usage_based_reporting",
        "annotations",
        "forecasting",
        "active_resources",
        "network_flow_reports",
        "segments",
        "cost_anomaly_alerts",
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
