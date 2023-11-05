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
        "terraform",
        "terraform_cloud_integration",
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
          items: [
            "connecting_aws", 
            "permissions_aws", 
            "supported_services"
          ],
        },
        {
          type: "category",
          label: "Azure",
          items: [
            "connecting_azure", 
            "azure_supported_services"
          ],
        },
        {
          type: "category",
          label: "Google Cloud",
          items: [
            "connecting_gcp",
            "permissions_gcp",
            "enabling_gcp_billing_export",
          ],
        },
        {
          type: "category",
          label: "Kubernetes",
          items: [
            "connecting_kubernetes",
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
          items: [
            "connecting_snowflake", 
            "snowflake_cost_by_query"
          ],
        },
        "connecting_databricks",
        "connecting_fastly",
        "connecting_open_ai",
        "connecting_oracle",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Cost Reporting Features",
      items: [
        "overview",
        "cost_reports",
        "annotations",
        "forecasting",
        "segments",
        "cost_anomaly_alerts",
        {
          type: "category",
          label: "Notifications",
          items: [
            "reports",
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
        "active_resources",
        "autopilot",
        "budgets",
        "per_unit_costs",
        "savings_planner",
        "cost_recommendations",
        ],
        },  
  ],
};
