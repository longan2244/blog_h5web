<template>
  <div id="app">
    <router-view></router-view>
    <!-- pop弹出层 -->
  <div class="popbox">
        <van-popup class="popup" v-model="show" position="bottom" round get-container="body">
      <p>本站正在建设中...</p>
      <span class="tc">灵感来均自于😆👉&nbsp;<a href="#" class="tc2">@Mist</a>&nbsp;&nbsp;他是一名优秀的前端工程师</span>
      <div class="banner">
        <img src="./../public/img/$light_banner.svg" alt="" />
      </div>
    </van-popup>
  </div>
    <!-- pop弹出层 -->
  </div>
</template>
<script>

export default {
  data() {
    return {
      browseId: [],
      show: true,
    };
  },

  methods: {
    showPopup() {
      this.show = false;
    },
  },

  created() {
    if (!localStorage.getItem("browseId")) {
      localStorage.setItem("browseId", JSON.stringify(this.browseId));
    }
  },
};
</script>
<style lang="less" scoped>
.popup {
  padding: 22px 16px;
  p{
    font-size: 16px;
    padding: 10px 0;
    font-weight: 700;
  }
  .tc {
    font-size: 14px;
  }
  .banner {
    margin-top: 24px;
  }
}
</style>










