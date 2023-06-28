// @ts-check

module.exports = {
  someSidebar: [
    {
      "Get Started": [
        "index",
        "getting_started",
        "terraform",
        {
          type: "category",
          label: "Onboarding",
          collapsible: true,
          collapsed: true,
          items: [
            "sso",
            "team_accountability",
            "executive_reporting",
            "hidden_costs",
            "vantage_account",
            "security",
          ],
        },
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
        "connecting_azure",
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
          ],
        },
        {
          type: "category",
          label: "Service Providers",
          items: [
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
          ],
        },
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
            "cost_reports",
            "budgets",
            "forecasting",
            "per_unit_costs",
            "active_resources",
            "overview",
            "segments",
          ],
        },
        "kubernetes",
        {
          type: "category",
          label: "Notifications",
          items: [
            "reports",
            "slack_integration",
            "microsoft_teams_integration",
            "terraform_cloud_integration",
          ],
        },
        "savings_planner",
        "workspaces",
      ],
    },
  ],
};
