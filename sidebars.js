/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: 'guides'}],
  userSidebar: [
    "user/index",
    {
      type: "category",
      label: "D1",
      items: [
        "user/D1/index",
        "user/D1/industrial",
        "user/D1/system",
      ],
    },
  ],

  developerSidebar: [
    "developer/index",
    {
      type: "category",
      label: "Development",
      items: ["developer/sdk_setup", "developer/application_develop"],
    },
  ],

  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

module.exports = sidebars;