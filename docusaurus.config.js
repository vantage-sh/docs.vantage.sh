// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

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
  onBrokenMarkdownLinks: "warn",

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
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      }),
    ],
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
      image: "https://assets.vantage.sh/blog/vntg-social-preview.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
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
  
        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',
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
            to: "https://vantage.readme.io/reference/general",
            label: "API",
          },
          {
            to: "https://vantage.sh/pricing",
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
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Introduction",
                to: "/",
              },
              {
                label: "Integrations",
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
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Slack",
                to: "https://vantage.sh/slack",
              },
              {
                label: "Cloud Costs Handbook",
                to: "https://handbook.vantage.sh/",
              },
              {
                label: "AWS Instances Pricing",
                to: "https://instances.vantage.sh/",
              },
              {
                label: "Azure VM Pricing Comparison",
                to: "https://instances.vantage.sh/azure",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "API Documentation",
                to: "https://vantage.readme.io/reference/general",
              },
              {
                label: "Vantage Blog",
                to: "https://vantage.sh/blog",
              },
              {
                label: "GitHub",
                to: "https://github.com/vantage-sh",
              },
              {
                label: "Vantage Status",
                to: "https://status.vantage.sh/",
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
