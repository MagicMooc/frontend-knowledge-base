module.exports = {
  // base: "/frontend-knowledge-base/",
  title: "ðåç«¯ç¥è¯åº@MagicMooc",
  description: "å¥½å¥½å­¦ä¹ ï¼å¤©å¤©åä¸ð¥³",
  theme: "reco",
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  themeConfig: {
    subSidebar: "auto",
    nav: [
      { text: "é¦é¡µ", link: "/" },
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
        children: [{ title: "æ¬¢è¿æ¥å°æçåç«¯ç¥è¯åºâ­ï¸", path: "/" }],
      },
      {
        title: "åç«¯ç¥è¯åºð»",
        path: "/handbook/overview",
        collapsable: false, // ä¸æå 
        children: [
          { title: "ð´åç«¯åºç¡-layout", path: "/handbook/baseLayout" },
          { title: "ðåç«¯åºç¡-javascript", path: "/handbook/baseJavascript" },
          { title: "ð²è®¡ç®æºç½ç»", path: "/handbook/network" },
          { title: "ðª´æµè§å¨", path: "/handbook/browser" },
          { title: "ð¿React", path: "/handbook/react" },
          {
            title: "ðæåä»£ç é®é¢ï¼é è½®å­ï¼",
            path: "/handbook/wheel",
          },
          { title: "ð³æ§è½ä¼åé®é¢", path: "/handbook/optimization" },
          { title: "ðé¢è¯ç»éªæ±æ»", path: "/handbook/interviewExperience" },
          { title: "ðµå·¥ä½ç»éªæ±æ»", path: "/handbook/workExperience" },
        ],
      },
      {
        title: "å¿ä¼çç®æ³é¢,å¹²!!!ð¥",
        path: "/algorithm/overview",
        collapsable: false, // ä¸æå 
        children: [
          {
            title: "ðä»£ç éæ³å½",
            path: "/algorithm/programmercarl/overview",
            collapsable: true,
            children: [
              { title: "ð¦æ°ç»", path: "/algorithm/programmercarl/Array" },
              { title: "ð©é¾è¡¨", path: "/algorithm/programmercarl/LinkedList" },
              {
                title: "ð¥æ åéå",
                path: "/algorithm/programmercarl/StackAndQueue",
              },
              { title: "ð°äºåæ ", path: "/algorithm/programmercarl/Tree" },
              {
                title: "ð¥åæº¯ç®æ³",
                path: "/algorithm/programmercarl/Backtracking",
              },
              { title: "ðªè´ªå¿ç®æ³", path: "/algorithm/programmercarl/Greedy" },
            ],
          },
          { title: "ðLeetcodeç­é¢100", path: "/algorithm/LeetcodeHot100" },
          { title: "ðåæOffer", path: "/algorithm/SwordToOffer" },
        ],
      },
      {
        title: "å«è¡æ,ç!!!ð",
        path: "/interview/overview",
        collapsable: false, // ä¸æå 
        children: [{ title: "ðæ¯æ¥ä¸é¢", path: "/interview/everyday" }],
      },
    ],
  },
};
