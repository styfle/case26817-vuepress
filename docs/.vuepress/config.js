const getConfig = require("vuepress-bar");
const { config } = require("vuepress-theme-hope");

const { nav, sidebar } = getConfig({
  addReadMeToFirstGroup: false
});

const NAV_TEXT_CONFIG = {
  Joke: "玩笑",
  Chapter: "章节",
  Document: "文档"
};

nav.forEach(item => {
  const text = item.text;
  if (NAV_TEXT_CONFIG[text]) {
    item.text = NAV_TEXT_CONFIG[text];
  }
});

const newNav = [
  ...nav,
  {
    text: "Github",
    link: "https://github.com/kaokei/kaokei.github.io"
  }
];

// console.log('JSON.stringify(newNav, null, 4) :>> ', JSON.stringify(newNav, null, 4));

module.exports = config({
  lang: "zh-CN",
  title: "kaokei",
  description: "kaokei 的个人网站",

  base: "/",

  markdown: {
    lineNumbers: false // 代码块显示行号
  },

  themeConfig: {
    logo: "/logo.svg",
    nav: newNav,
    sidebar,
    hostname: "kaokei.com",
    anchorDisplay: false
  }
});
