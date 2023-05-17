// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Combway Technology",
  tagline: "IoT Connection To Industrial",
  // "为您提供最新的路由，网关，云平台，无线AP产品资讯、技术分享、客户最佳实践",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://www.combway-iot.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "combway-iot", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["zh-Hans", "en"],
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
          // editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //  "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        // title: '安捷云数-智能网络专家',
        title: "",
        logo: {
          alt: "Combway",
          src: "img/logo.png",
        },
        items: [
          { to: "/blog", label: "Blog", position: "left" },
          {
            type: "doc",
            docId: "user/index",
            label: "User Guide",
            position: "left",
          },
          {
            type: "doc",
            docId: "developer/index",
            label: "Developer Guide",
            position: "left",
          },
          {
            type: "doc",
            docId: "tutorials/index",
            label: "Tutorial",
            position: "left",
          },
          {
            href: "/firmware",
            label: "Firmware",
            position: "left",
          },
          {
            type: "doc",
            docId: "community/index",
            label: "About Us",
            position: "left",
          },
          // { type: "localeDropdown", position: "right" },
          {
            href: "https://github.com/combway-iot",
            label: "GitHub",
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
                label: "Tutorial",
                to: "/docs/tutorials",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/combway-iot/docs",
              },
            ],
          },
        ],
        copyright: `Copyright © 2016 - ${new Date().getFullYear()} Combway Technology Co.,Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
