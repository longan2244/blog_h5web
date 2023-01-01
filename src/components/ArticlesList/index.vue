<template>
  <div class="articleslist-container">
    <van-list finished-text="没有更多了">
      <Articlesitem
        v-for="item in list"
        :articlesitem="item"
        :classname="classname"
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
  props: ["classid","classname"],
  data() {
    return {
      list: [],
      // loading: false,
      finished: true,
    };
  },
  methods: {
    async getarticle() {
      try {
        let { data: res } = await getarticlelistlistapi({
          classid: this.classid,
        });
        if (!res.code) {
          return console.log("获取失败");
        }
        this.list.push(...res.data);
      } catch (error) {}
    },
  },
  computed: {},
  created() {
    this.getarticle();
  },
  mounted() {},
};
</script>
<style lang='less' scpoed>
</style>
