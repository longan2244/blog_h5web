<template>
  <div class="article-container">
    <!-- 头部 -->
    <div class="articlehead">
      <div class="articleinfo">
        <div class="avatar bgc">
          <img
            class="mdui-img-fluid"
            src="https://avatars.githubusercontent.com/u/107904131?v=4"
            alt=""
          />
        </div>
        <span class="name">Longan</span>
        <span class="label bgc">{{
          articdata.classname == "" ? "默认" : articdata.classname
        }}</span>
      </div>
    </div>
    <div class="sendtime tc">{{ articdata.sendtime }}</div>
    <!-- 内容区域 -->
    <div class="article-body">
      <!-- 封面图 -->
      <div
        class="banner"
        v-for="(item, index) in articdata.newimgurl"
        :key="index"
      >
        <img class="mdui-img-fluid" :src="item" alt="" />
      </div>
      <!-- 标题 -->
      <span class="title">{{ articdata.title }}</span>
      <!-- 内容 -->
      <div class="content tc" v-html="articdata.content"></div>
      <!-- navbar -->
      <!-- <Promptbox></Promptbox> -->
      <!-- 代码框 -->
      <!-- <Codebox></Codebox> -->
      <!-- 内容 -->
    </div>
  </div>
</template>
<script>
import { getarticbyidapi, addarticleviewsapi } from "@/api/articles/index.js";
// import Codebox from "@/components/Codebox/index.vue";
// import Promptbox from "@/components/Promptbox/index.vue";
export default {
  components: {},
  name: "articles",
  props: ["id"],
  data() {
    return {
      articdata: {},
    };
  },
  methods: {
    async getarticbyid() {
      try {
        let { data: res } = await getarticbyidapi(this.id);
        if (!res.code) return console.log("查询失败");
        this.articdata = res.data[0];
      } catch (error) {}
    },
    async addarticleviews() {
      try {
        await addarticleviewsapi({ id: this.id });
      } catch (error) {}
    },
  },
  computed: {},
  watch: {},
  created() {
    this.getarticbyid();
  },
  mounted() {
    let getitem = JSON.parse(localStorage.getItem("browseId"));
    let flag = getitem.some((item) => {
      return item.id === this.id;
    });
    //如果看过直接reten
    if (flag) {
      return;
    }
    getitem.push({
      id: this.id,
    });
    localStorage.setItem("browseId", JSON.stringify(getitem));
    this.addarticleviews();
  },
};
</script>
<style lang='less' scpoed>
.article-container {
  padding: 22px 16px;
  // 头部
  .articlehead {
    height: 48px;
    .articleinfo {
      display: flex;
      align-items: center;
      .avatar {
        display: inline-block;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        overflow: hidden;
      }
      .name {
        font-size: 16px;
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        margin: 0 18px;
      }
      .label {
        padding: 8px 16px;
        opacity: 1;
        border-radius: 8px;
        font-size: 16px;
        font-weight: 400;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
  //发送时间
  .sendtime {
    font-size: 16px;
    font-weight: 400;
    padding-top: 16px;
  }
  // 文章body
  .article-body {
    .banner {
      height: 160px;
      opacity: 1;
      border-radius: 8px;
      background: transparent;
      margin: 18px 0;
      img {
        height: 100%;
        width: 100%;
      }
    }
    .title {
      font-size: 20px;
      font-weight: 700;
      position: relative;
    }
    .title::after {
      content: "";
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 12px;
      border-radius: 8px;
      background: rgba(126, 204, 181, 0.7);
    }
    .content {
      padding-top: 24px;
      font-size: 16px;
      letter-spacing: 2px;
      font-weight: 400;
      text-shadow: 0px 0px 1px rgba(225, 225, 225, 0.25) !important;
    }
  }
}
</style>
