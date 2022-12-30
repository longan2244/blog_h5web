<template>
  <div class="articlesitem-container" @click="goav">
    <div class="articlesitem-head">
      <!-- 作者信息 -->
      <div class="authorInfo">
        <div class="avatar">
          <img
            class="mdui-img-fluid mdui-img-circle"
            src="https://avatars.githubusercontent.com/u/107904131?v=4"
            alt=""
          />
        </div>
        <span class="name">Longan</span>
      </div>
      <!-- 文章所属于分类 -->
      <li class="bgc classifys">
        <i class="mdui-icon icon-pricetags-outline"></i>
        <span>{{ classname }}</span>
      </li>
    </div>
    <div class="articlesitem-body">
      <!-- 缩略图 -->
      <div class="articlesitem-banner">
        <img class="mdui-img-fluid" :src="articlesitem.newimgurl[0]" alt="" />
      </div>
      <div class="articlesitem-content">
        <div class="title">{{ articlesitem.title }}</div>
        <div class="detail van-multi-ellipsis--l3">
          {{ articlesitem.content }}
        </div>
        <div class="articlesitem-sendTime tc">
          {{ articlesitem.sendtime }} | {{ articlesitem.click }} 次观看
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import evtbus from "@/util/evtbus.js";
export default {
  components: {},
  name: "",
  props: ["articlesitem", "classname"],
  data() {
    return {};
  },
  methods: {
    goav() {
      evtbus.$emit("returnpx");
      this.$router.push(`/article/${this.articlesitem.id}`);
    },
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  activated() {
       evtbus.$emit("setreturnpx");
  },
};
</script>

<style lang='less' scpoed>
.articlesitem-container {
  padding: 11px 14px 12px 14px;
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0px 7px 43px 0px rgba(0, 157, 165, 0.2);
  .articlesitem-head {
    display: flex;
    height: 38px;
    justify-content: space-between;
    .authorInfo {
      display: flex;
      align-items: center;
      .avatar {
        width: 38px;
        height: 38px;
        margin-right: 10px;
      }
      .name {
        font-size: 18px;
        font-weight: 500;
        color: rgba(0, 0, 0, 1);
        text-align: center;
        vertical-align: top;
      }
    }
    .classifys {
      width: 62px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      color: white;
      border-radius: 4px;
      i {
        padding-top: 8px;
      }
      i::before {
        font-size: 16px;
      }
    }
  }
  .articlesitem-body {
    .articlesitem-banner {
      margin: 12px 0px;
      width: 311.5px;
      height: 160px;
      opacity: 1;
      border-radius: 4px;
      overflow: hidden;
      img {
        height: 160px;
      }
    }
    .articlesitem-content {
      .title {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 0px;
        color: rgba(0, 0, 0, 1);
        margin-bottom: 16px;
      }
      .detail {
        font-size: 16px;
        font-weight: 400;
        letter-spacing: 0px;
        color: rgba(128, 128, 128, 1);
      }
      .articlesitem-sendTime {
        font-size: 12px;
        font-weight: 400;
        letter-spacing: 0px;
        padding-top: 24px;
        color: rgba(166, 166, 166, 1);
      }
    }
  }
}
</style>
