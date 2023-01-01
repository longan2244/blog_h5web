<template>
  <div class="main-container">
    <!-- 公共部分 -->
    <Publictop></Publictop>
    <div class="routerbox" ref="routerbox">
      <keep-alive>
        <!-- 需要缓存的视图组件 -->
        <router-view v-if="$route.meta.keepAlive"> </router-view>
      </keep-alive>
      <!-- 不需要缓存的视图组件 -->
      <router-view v-if="!$route.meta.keepAlive"> </router-view>
    </div>
    <!-- 返回顶部 -->
    <div class="backToTop bgc" @click="backToTop" ref="backToTop">
      <i class="mdui-icon icon-arrow-up-outline"></i>
    </div>
  </div>
</template>

<script>
import Publictop from "@/components/Publictop/index.vue";
import evtbis from "@/util/evtbus.js";
export default {
  components: { Publictop },
  name: "mainlayout",
  props: [],
  data() {
    return {
      scrollTops: 0,
    };
  },
  methods: {
    backToTop() {
      this.$refs["routerbox"].scrollTop = 0;
    },
  },
  computed: {},
  watch: {},
  created() {},

  mounted() {
    evtbis.$on("returnpx", () => {
      this.scrollTops = this.$refs["routerbox"].scrollTop;
    });
    evtbis.$on("setreturnpx", () => {
      this.$refs["routerbox"].scrollTop = this.scrollTops;
    });
  },
};
</script>

<style lang='less' scpoed>
.main-container {
  .routerbox {
    position: fixed;
    left: 0;
    right: 0;
    top: 52px;
    bottom: 0;
    overflow-y: auto;
  }
  .backToTop {
    opacity: .95;
    position: absolute;
    bottom: 20px;
    right: 20px;
    width: 56px;
    height: 56px;
    text-align: center;
    line-height: 56px;
    border-radius: 50%;
    box-shadow: 0px 8px 24px 0px rgb(149 157 165 / 50%);
    i {
      opacity: 0.8;
    }
    i::before {
      vertical-align: bottom;
      font-size: 20px;
      color: white;
    }
  }
  .backToTop:active {
    animation: identifier 1s;
  }
  @keyframes identifier {
    50% {
      transform: scale(0.8);
    }
    100% {
      transform: scale(1);
    }
  }
}
</style>
