<template>
  <div class="home-container">
    <div class="banner">
      <img src="./../../../../public/img/$light_banner.svg" alt="" />
    </div>
    <!-- 分类 -->
    <div class="classify">
      <ul>
        <li
          class="bgc"
          v-for="(item, index) in classify"
          :key="index"
          @click="defaultclassid = item"
        >
          <i class="mdui-icon icon-pricetags-outline"></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
    <!-- 搜索框 -->
    <div class="search">
      <i class="mdui-icon icon-search-outline"></i>
      <input type="text" class="tc" />
    </div>
    <!-- 文章列表 -->
    <Articleslist :classid="defaultclassid" ref="avlist"></Articleslist>
  </div>
</template>

<script>
import Articleslist from "@/components/ArticlesList";
import { getarticleclassapi } from "@/api/articles/index.js";

export default {
  components: { Articleslist },
  name: "home",
  props: [],
  data() {
    return {
      classify: [],
      defaultclassid: {
        id: 1,
        name: "vue",
      }, //默认分类
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
    height: 128.5px;
    width: 345px;
    opacity: 1;
    border-radius: 8px;
    overflow: hidden;
    padding-right: 16px;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .classify {
    height: 79px;
    padding: 21px 0;
    ul {
      display: flex;
      height: 100%;
      li {
        flex: 1;
        margin-right: 16px;
        border-radius: 8px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: white;
        i {
          padding-top: 8px;
        }
        i::before {
          font-size: 16px;
        }
      }
      li:last-child {
        margin-right: 0px !important;
      }
    }
  }
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
