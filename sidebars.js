// @ts-check

module.exports = {
  someSidebar: [
    "index",
    {
      type: "category",
      collapsible: true,
      collapsed: true,
      label: "Get Started",
      items: [
        "getting_started",
        {
          type: "category",
          label: "User Workflows",
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
    "security",
    {
      type: "category",
      collapsible: true,
      collapsed: true,
      label: "Account Administration",
      items: [
        "vantage_account",
        "sso",
      ],
    },
    {
      type: "category",
      collapsible: true,
      collapsed: true,
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
      collapsible: true,
      collapsed: false,
      label: "Integrations",
      items: [
        {
          type: "category",
          label: "AWS",
          items: ["connecting_aws", "permissions_aws", "supported_services"],
        },
        {
          type: "category",
          label: "Azure",
          items: ["connecting_azure", "azure_supported_services"],
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
          items: ["connecting_snowflake", "snowflake_cost_by_query"],
        },
        "connecting_databricks",
        "connecting_fastly",
        "connecting_open_ai",
        "connecting_oracle",
      ],
    },
    {
      type: "category",
      collapsible: true,
      collapsed: false,
      label: "Features",
      items: [
        "cost_anomaly_alerts",
        "autopilot",
        {
          type: "category",
          label: "Cost Reporting",
          items: [
            "annotations",
            "cost_reports",
            "budgets",
            "forecasting",
            "per_unit_costs",
            "active_resources",
            "overview",
            "segments",
          ],
        },
        "cost_recommendations",
        {
          type: "category",
          label: "Notifications",
          items: [
            "reports",
            "slack_integration",
            "microsoft_teams_integration",
          ],
        },
        "rbac",
        "savings_planner",
        "workspaces",
      ],
    },
  ],
};
