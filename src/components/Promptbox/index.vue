<template>
  <div class="promptbox-container">
    <div class="textbox">
      WebAssembly (abbreviated Wasm) is a binary instruction format for a
      stack-based virtual machine. Wasm is designed as a portable compilation
      target for programming languages, enabling deployment on the web for
      client and server applications.
    </div>
    <div class="leftbox bgc"></div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "promptbox",
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
.promptbox-container {
  padding: 11px 11px 11px 16px;
  border-radius: 8px;
  background: rgba(224, 234, 252, 1);
  margin: 32px 0;
  position: relative;
  .textbox {
    font-size: 16px;
    font-weight: 400;
    color: rgba(166, 166, 166, 1);
  }
  .leftbox {
    position: absolute;
    height: 100%;
    width: 8px;
    left: 0;
    top: 0;
    border-top-left-radius: 8px; /* 左上角 */
    border-bottom-left-radius: 8px; /* 左下角 */
  }
}
</style>
