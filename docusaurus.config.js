// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Vantage Documentation",
  tagline: "",
  favicon: "https://assets.vantage.sh/www/favicon-32x32.png",

  // Set the production url of your site here
  url: "https://docs.vantage.sh/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "vantagesh", // Usually your GitHub org/user name.
  projectName: "docs.vantage.sh", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/vantage-sh/docs.vantage.sh/blob/master/",
          routeBasePath: "/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
  ],

  stylesheets: [
  {
    href: '/katex/katex.min.css',
    type: 'text/css',
    },
  ],
  plugins: [
    // Un-comment to use local search in the event Algolia ever goes down
    // [
    //   require.resolve("@cmfcmf/docusaurus-search-local"),
    //   {
    //     indexBlog: false,
    //   },
    // ],
    'docusaurus-plugin-sass',
    [
      require.resolve("@docusaurus/plugin-client-redirects"),
      {
        redirects: [
          {
            from: "/connecting_mongo",
            to: "/connecting_mongodb-atlas",
          },
          {
            from: "/metrics",
            to: "/active_resources",
          },
          {
            from: "/permissions_gcp",
            to: "/connecting_gcp",
          },
          {
            from: "/terraform_cloud_integration",
            to: "/terraform",
          },
          {
            from:"/supported_services",
            to:"/aws_supported_services",
          },
          {
            from: "/reports",
            to: "/report_notifications",
          },
          {
            from: "/slack_integration",
            to: "/report_notifications",
          },
          {
            from: "/microsoft_teams_integration",
            to: "/report_notifications",
          },
        ],
      },
    ],
    [
      require.resolve("@docusaurus/plugin-google-tag-manager"),
      {
        containerId: "GTM-TSMQ34V",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "/img/index-cards/docs-social-card.jpg",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'FETJSHIQX2',
  
        // Public API key: it is safe to commit it
        apiKey: 'db0617cc49d4d8f18b6358e96617261d',
  
        indexName: 'vantage',
  
        // Optional: see doc section below
        contextualSearch: true,
  
        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: 'external\\.com|domain\\.com',
  
        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //  from: '/docs/', // or as RegExp: /\/docs\//
        //  to: '/',
        //},
  
        // Optional: Algolia search parameters
        searchParameters: {},
        
        // Enables analytics 
        insights: true,
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        // disables personalization such as favorites and recent searches
        disableUserPersonalization: true,
      },
      navbar: {
        logo: {
          alt: "Logo",
          src: "nav-logo.svg",
          href: "https://vantage.sh",
          target: "_self",
        },
        items: [
          {
            type: "doc",
            docId: "index",
            position: "left",
            label: "Docs",
          },
          {
            type: "doc",
            docId: "changelog",
            label: "Changelog",
          },
          {
            type: "doc",
            docId: "vantage_university",
            label: "Vantage University",
          },
          {
            to: "https://vantage.readme.io/reference/general",
            label: "API",
          },
          {
            to: "https://vantage.sh/pricing",
            position: "right",
            label: "Pricing",
          },
          {
            to: "https://console.vantage.sh/signup",
            label: "Sign Up",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        logo:
          {alt: 'Vantage',
          src: '/img/vantage-footer-logo.svg'},
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Integrations Quickstart",
                to: "/getting_started",
              },
              {
                label: "Cost Reports",
                to: "/cost_reports",
              },
              {
                label: "Autopilot",
                to: "/autopilot",
              },
              {
                label: "Product Changelog",
                to: "/changelog",
              },
              {
                label: "Vantage University",
                to: "/vantage_university",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                href: "https://vantage.sh/slack",
              },
              {
                label: "Cloud Costs Handbook",
                href: "https://handbook.vantage.sh/",
              },
              {
                label: "AWS Instances Pricing",
                href: "https://instances.vantage.sh/",
              },
              {
                label: "Azure VM Pricing Comparison",
                href: "https://instances.vantage.sh/azure",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "API Documentation",
                href: "https://vantage.readme.io/reference/general",
              },
              {
                label: "Vantage Blog",
                href: "https://vantage.sh/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/vantage-sh",
              },
              {
                label: "Vantage Status",
                href: "https://status.vantage.sh/",
              },
            ],
          },
          {
            title: "Company",
            items: [
              {
                label: "About",
                href: "https://www.vantage.sh/about/",
              },
              {
                label: "Privacy Policy",
                href: "https://www.vantage.sh/privacy-policy",
              },
              {
                label: "Website Terms of Use",
                href: "https://www.vantage.sh/website-terms-of-use",
              },
              {
                label: "VNTG Service Agreement",
                href: "https://www.vantage.sh/service-agreement",
              },
              {
                label: "Authorized Sub-Processors",
                href: "https://www.vantage.sh/subprocessors",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} VNTG, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
      },
    }),
};

module.exports = config;
