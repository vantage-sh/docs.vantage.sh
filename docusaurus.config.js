// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Vantage Documentation',
  tagline: '',
  favicon: 'https://assets.vantage.sh/www/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://docs.vantage.sh/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'vantagesh', // Usually your GitHub org/user name.
  projectName: 'docs.vantage.sh', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/vantage-sh/docs.vantage.sh/blob/master/',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
    [
      require.resolve('@docusaurus/plugin-client-redirects'),
      {
        redirects: [
          {
            from: '/kubernetes',
            to: '/connecting_kubernetes',
          },
          {
            from: '/connecting_mongo',
            to: '/connecting_mongodb-atlas',
          },
        ],
      },
    ],
    [
      require.resolve('@docusaurus/plugin-google-analytics'),
      {
        trackingID: 'UA-166045679-1',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://assets.vantage.sh/blog/vntg-social-preview.png',
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,    
      },
      navbar: {
        logo: {
          alt: 'Logo',
          src: 'nav-logo.svg',
          href: 'https://vantage.sh',
          target: '_self',
        },
        items: [
          {
            type: 'doc',
            docId: 'getting_started',
            position: 'left',
            label: 'Documentation',
          },
          {
            to: "https://vantage.sh/pricing",
            label: 'Pricing',
          },
          {
            to: 'https://console.vantage.sh/signup',
            label: 'Sign Up',
            position: 'right'
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'Integrations',
                to: '/getting_started',
              },
              {
                label: 'Cost Reports',
                to: '/cost_reports',
              },
              {
                label: 'Autopilot',
                to: '/autopilot',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Slack',
                to: 'https://join.slack.com/t/vantagecommunity/shared_invite/zt-oey52myv-gq4AWRKkX25kjp1UGziPTw',
              },
              {
                label: 'Cloud Costs Handbook',
                to: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'AWS Instances Pricing',
                to: 'https://instances.vantage.sh/',
              },
              {
                label: 'Azure VM Pricing Comparison',
                to: 'https://instances.vantage.sh/azure',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Vantage Blog',
                to: 'https://vantage.sh/blog',
              },
              {
                label: 'GitHub',
                to: 'https://github.com/vantage-sh',
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