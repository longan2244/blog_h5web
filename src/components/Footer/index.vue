<template>
  <div class="footer-container">
    <span class="tc">领取站点源码前往 <a class="tc2"> Github</a></span>
    <div class="contactmelist">
      <i class="mdui-icon icon-logo-github" style="color: #1a1414"></i>
      <i class="mdui-icon icon-logo-twitter" style="color: #03a9f4"></i>
      <i class="mdui-icon icon-logo-facebook" style="color: #2f4d93"></i>
      <i class="mdui-icon icon-bug-outline" style="color: red"></i>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "footers",
  props: [],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style lang='less' scpoed>
.footer-container {
  box-shadow: 0px 7px 43px 0px rgba(0, 157, 165, 0.2);
  opacity: 0.8;
  padding: 16px;
  border-radius: 8px;
  margin-bottom: 24px;
  .tc {
    font-size: 16px;
  }
  .contactmelist i {
    padding: 20px 14px 0px 14px;
  }
  .contactmelist i::before {
    font-size: 26px;
  }
  .contactmelist i:nth-child(1)::before {
    font-size: 30px;
    margin-bottom: 8px;
  }
}
</style>
