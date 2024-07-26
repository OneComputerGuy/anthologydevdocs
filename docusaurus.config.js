// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Anthology Developer Docs',
  tagline: 'APIs are cool!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // url: 'https://blackboard.github.io',
  // url: 'https://anthologydevdocs.github.io',
  url: 'https://docs.anthology.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // baseUrl: '/',
  baseUrl: '/',
  projectName: 'anthologydevdocs',
  organizationName: 'Anthology',
  trailingSlash: false,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  // organizationName: 'blackboard', // Usually your GitHub org/user name.
  //projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',

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
          //sidebar: {
          sidebarCollapsed: true,
          sidebarCollapsible: true,
          // autoCollapseCategories: true,
          //},

          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        logo: {
          alt: 'Anthology Logo',
          src: '/img/anthology-logo-black.svg',
          srcDark: '/img/anthology-logo-white.svg',
        },
        items: [
          {
            to: '/docs/site-intro',
            // type: 'docSidebar',
            // sidebarId: 'documentationSidebar',
            position: 'right',
            label: 'Documentation',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            type: 'html',
            position: 'right',
            value:
              '<a class="navbar-gh-link" href="https://github.com/blackboard/anthologydevdocs" target="_blank"><img class="navbar-gh-img-link" src="/img/gh.png"/></a>',
          },
          {
            type: 'search',
            position: 'left',
          },
        ],
      },
      sidebar: {
        sidebarCollapsed: true,
        sidebarCollapsible: true,
        hideable: true,
        autoCollapseCategories: true,
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Anthology Solutions',
            items: [
              {
                label: 'Blackboard',
                href: 'https://www.anthology.com/products/teaching-and-learning/learning-effectiveness/blackboard',
              },
              {
                label: 'Student',
                href: 'https://www.anthology.com/products/enterprise-operations/student-information-and-enterprise-resources/anthology-student',
              },
              {
                label: 'Reach',
                href: 'https://www.anthology.com/products/lifecycle-engagement/enrollment-and-retention/anthology-reach',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Blackboard Techies - Slack',
                href: 'https://join.slack.com/t/blackboardtechies/shared_invite/zt-nheykjth-wLgONrE58MS53H~oySYk1g',
              },
              {
                label: 'Community Portal',
                href: 'https://community.anthology.com',
              },
            ],
          },
          {
            title: 'Contact Us',
            items: [
              {
                label: 'Developer Distro List',
                to: 'mailto:developers@anthology.com',
              },
              {
                label: 'Behind the Blackboard',
                to: 'https://behind.blackboard.com',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Anthology, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
        disableVersioning: true,
      },
    ],
  ],
};

module.exports = config;
