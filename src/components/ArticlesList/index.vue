<template>
  <div class="articleslist-container" >
    <van-list finished-text="没有更多了">
      <Articlesitem
        v-for="item in list"
        :articlesitem="item"
        :classname="classid.name"
        :key="item.id"
      >
      </Articlesitem>
    </van-list>
  </div>
</template>

<script>
import Articlesitem from "@/components/ArticlesList/ArticlesItem/index.vue";
import { getarticlelistlistapi } from "@/api/articles/index.js";
export default {
  components: { Articlesitem },
  name: "articleslist",
  props: ["classid"],
  data() {
    return {
      list: [],
      // loading: false,
      finished: true,
    };
  },
  methods: {
   
    // onLoad() {
    //   // 异步更新数据
    //   // setTimeout 仅做示例，真实场景中一般为 ajax 请求
    //   setTimeout(() => {
    //     for (let i = 0; i < 10; i++) {
    //       this.list.push(this.list.length + 1);
    //     }
    //     // 加载状态结束
    //     this.loading = false;

    //     // 数据全部加载完成
    //     if (this.list.length >= 40) {
    //       this.finished = true;
    //     }
    //   }, 1000);
    // },
    async getarticle() {
      try {
        let { data: res } = await getarticlelistlistapi({
          classid: this.classid.id,
        });
        if (!res.code) {
          return console.log("获取失败");
        }
        this.list.push(...res.data);
      } catch (error) {}
    },
  },
  computed: {},
  watch: {
    classid: {
      immediate: true,
      handler() {
        this.list = [];
        this.getarticle();
      },
    },
  },
  created() {},
  mounted() {},
};
</script>
<style lang='less' scpoed>

</style>
