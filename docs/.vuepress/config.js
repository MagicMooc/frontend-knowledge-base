module.exports = {
  // base: "/frontend-knowledge-base/",
  title: "😎前端知识库@MagicMooc",
  description: "好好学习，天天向上🥳",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "首页", link: "/" },
      {
        text: "more about me",
        items: [
          {
            text: "Github",
            link: "https://github.com/MagicMooc",
          },
          {
            text: "My blog",
            link: "https://magicmooc.top/",
          },
        ],
      },
    ],
    sidebar: [
      {
        title: "Hey! This is MagicMooc",
        path: "/about/welcome",
        collapsable: false,
        children: [{ title: "欢迎来到我的前端知识库⭐️", path: "/" }],
      },
      {
        title: "前端知识库💻",
        path: "/handbook/overview",
        collapsable: false, // 不折叠
        children: [
          { title: "🌴前端基础-layout", path: "/handbook/baseLayout" },
          { title: "🍀前端基础-javascript", path: "/handbook/baseJavascript" },
          { title: "🌲计算机网络", path: "/handbook/network" },
          { title: "🪴浏览器", path: "/handbook/browser" },
          { title: "🌿React", path: "/handbook/react" },
          {
            title: "🍃手写代码问题（造轮子）",
            path: "/handbook/wheel",
          },
          { title: "🌳性能优化问题", path: "/handbook/optimization" },
          { title: "🍁面试经验汇总", path: "/handbook/interviewExperience" },
          { title: "🌵工作经验汇总", path: "/handbook/workExperience" },
        ],
      },
      {
        title: "必会的算法题,干!!!🔥",
        path: "/algorithm/overview",
        collapsable: false, // 不折叠
        children: [
          {
            title: "🍏代码随想录",
            path: "/algorithm/programmercarl/overview",
            collapsable: true,
            children: [
              { title: "🍦数组", path: "/algorithm/programmercarl/Array" },
              { title: "🍩链表", path: "/algorithm/programmercarl/LinkedList" },
              {
                title: "🥛栈和队列",
                path: "/algorithm/programmercarl/StackAndQueue",
              },
              { title: "🍰二叉树", path: "/algorithm/programmercarl/Tree" },
              {
                title: "🍥回溯算法",
                path: "/algorithm/programmercarl/Backtracking",
              },
              { title: "🍪贪心算法", path: "/algorithm/programmercarl/Greedy" },
            ],
          },
          { title: "🍊Leetcode热题100", path: "/algorithm/LeetcodeHot100" },
          { title: "🍋剑指Offer", path: "/algorithm/SwordToOffer" },
        ],
      },
      {
        title: "八股文,爆!!!🚀",
        path: "/interview/overview",
        collapsable: false, // 不折叠
        children: [{ title: "🍏每日一题", path: "/interview/everyday" }],
      },
    ],
  },
};
