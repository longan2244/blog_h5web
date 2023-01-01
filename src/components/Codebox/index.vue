<template>
  <div class="codebox-container">
    <ul class="head">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  <slot></slot>
  </div>
</template>

<script>
export default {
  components: {},
  name: "codebox",
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
.codebox-container {
  min-height: 100px;
  width: 100%;
  padding: 8px;
  background-color: rgba(40, 44, 52, 1);
  border-radius: 8px;
  color: rgba(255, 255, 255, 1);
  margin: 32px 0;
  .head {
    width: 52px;
    height: 12px;
    display: flex;
    margin-bottom: 12px;
    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
    }
    li:nth-child(1) {
      background: rgba(255, 95, 87, 1);
    }
    li:nth-child(2) {
      background: rgba(254, 188, 46, 1);
      margin: 0 8px;
    }
    li:nth-child(3) {
      background: rgba(40, 200, 64, 1);
    }
  }
}
</style>
