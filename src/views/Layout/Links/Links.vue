<template>
  <div class="links-container" ref="links-container">
    <div class="banner">
      <img src="./../../../../public/img/$mobile_links_banner.svg" alt="" />
      <div class="description">
        <p class="banner__links-title">友情链接</p>
        <p class="banner__links-desc">
          这里放置大家的博客 &
          个人网站，拒绝广告，欢迎各类应用，如果你想跟我交换友情链接，直接戳
          &nbsp;<a href="#" class="tc2"> 这里 </a>
        </p>
      </div>
    </div>
    <Linksitem
      v-for="(item, index) in linkinfo"
      :key="index"
      :linkinfo="item"
    ></Linksitem>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/index.vue";
import Linksitem from "@/components/Links/LinksItem/index.vue";

import evtbus from '@/util/evtbus.js';
export default {
  components: { Footer, Linksitem },
  name: "",
  props: [],
  data() {
    return {
      linkinfo: [
        {
          name: "Clay 的技术博客",
          addr: "https://www.techgrow.cn",
          desc: "用进废退 | 艺不压身",
          logo: "https://www.techgrow.cn/img/head.jpg",
        },
        {
          name: "Christine的博客",
          desc: "虽然我不够优秀，但我从未放弃过努力。",
          logo: "https://christine-only.github.io/blog/logo.png",
          addr: "https://christine-only.github.io/blog/",
        },
        {
          name: "Forever丿顾北博客",
          addr: "https://forevergubei.gitee.io/myblod/",
          desc: "一个追寻大佬脚步的小白",
          logo: "https://forevergubei.gitee.io/myblod/logo.png",
        },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  updated() {},
  activated() {},
  mounted() {
    setTimeout(() => {
      evtbus.$emit('setzero')
    })
  },
};
</script>

<style lang='less' scpoed>
.links-container {
  padding: 27px 17px 0px 17px;
  .banner {
    position: relative;
    margin-bottom: 20px;
    .description {
      position: absolute;
      padding: 18px;
      left: 0;
      right: 0;
      bottom: 0;
      .banner__links-title {
        color: #fff;
        font-size: 18px;
      }
      .banner__links-desc {
        color: rgba(255, 255, 255, 0.81);
        font-size: 14px;
        margin-top: 10px;
        width: 100%;
        line-height: 20px;
      }
    }
  }
}
</style>
