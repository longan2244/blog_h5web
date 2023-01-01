<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
      browseId: [],
    };
  },
  created() {
    if (!localStorage.getItem("browseId")) {
      localStorage.setItem("browseId", JSON.stringify(this.browseId));
    }
  },
};
</script>
<style lang="less" scoped>
</style>










