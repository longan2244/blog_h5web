<template>
  <div class="home-container">
    <div class="banner">
      <img src="./../../../../public/img/$light_banner.svg" alt="" />
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <i class="mdui-icon icon-search-outline"></i>
      <input type="text" class="tc" />
    </div>
    <!-- van-tabs -->
    <van-tabs v-model="active" lazy-render class="van-tabs">
      <van-tab v-for="index in classify" :key="index.id" :title="index.name">
        <Articleslist
          :classid="index.id"
          :classname="index.name"
          ref="avlist"
        ></Articleslist>
      </van-tab>
    </van-tabs>
    <!-- 文章列表 -->
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Articleslist from "@/components/ArticlesList";
import { getarticleclassapi } from "@/api/articles/index.js";
import Footer from "@/components/Footer/index.vue";
export default {
  components: { Articleslist, Footer },
  name: "home",
  props: [],
  data() {
    return {
      active: 4,
      classify: [],
    };
  },
  methods: {
    async getarticleclass() {
      try {
        let { data: res } = await getarticleclassapi();
        this.classify = res.data;
      } catch (error) {}
    },
  },
  computed: {},
  watch: {},
  created() {
    //获取文章分类
    this.getarticleclass();
  },
  mounted() {},
};
</script>

<style lang='less' scpoed>
.home-container {
  padding: 27px 17px 0px 17px;
  overflow: hidden;
  .banner {
    opacity: 1;
    border-radius: 8px;
    overflow: hidden;
    padding-bottom: 24px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .van-tabs__wrap {
    margin-bottom: 24px;
    border-radius: 8px;
  }

  // .classify {
  //   height: 79px;
  //   padding: 21px 0;
  //   ul {
  //     display: flex;
  //     height: 100%;
  //     li {
  //       flex: 1;
  //       margin-right: 16px;
  //       border-radius: 8px;
  //       display: flex;
  //       justify-content: center;
  //       align-items: center;
  //       font-size: 16px;
  //       color: white;
  //       i {
  //         padding-top: 8px;
  //       }
  //       i::before {
  //         font-size: 16px;
  //       }
  //     }
  //     li:last-child {
  //       margin-right: 0px !important;
  //     }
  //   }
  // }
  .search {
    height: 47px;
    margin-bottom: 27px;
    opacity: 1;
    overflow: hidden;
    border-radius: 8px;
    background: rgba(255, 255, 255, 1);
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    i {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      padding-left: 15px;
      opacity: 0.8;
      padding-top: 10px;
    }
    i::before {
      font-size: 16px;
    }
  }
}
</style>
