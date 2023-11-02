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
      collapsible: false,
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
        "savings_planner",
        "workspaces",
      ],
    },
    {
      type: "category",
      collapsible: false,
      collapsed: false,
      label: "Advanced Features",
      items: [
        "terraform",
        "terraform_cloud_integration",
        "vql",
        "data_dictionary",
      ],     
    },
  ],
};
