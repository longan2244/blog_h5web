module.exports = {
  plugins: {
    //生成不同浏览器前缀
    //px 转 rem 大小 设计稿375px
    'postcss-pxtorem': {
      rootValue: 37.5,
      propList: ['*'],
    },
  },
};