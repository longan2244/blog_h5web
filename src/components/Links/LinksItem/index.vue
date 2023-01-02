<template>
  <div class="linksitem-container">
    <a :href="linkinfo.addr">
      <div class="avatar">
        <img
          class="mdui-img-fluid"
          :src="linkinfo.logo"
          alt=""
        />
      </div>
      <div class="link-info">
        <div class="link-name">{{linkinfo.name}}</div>
        <div class="link-desc tc van-multi-ellipsis--l2">
          {{linkinfo.desc}}
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  components: {},
  name: "",
  props: ["linkinfo"],
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
.linksitem-container {
  margin-bottom: 20px;
  a {
    display: inline-block;
    width: 100%;
    padding: 10px 25px;
    min-height: 98px;
    background-color: white;
    box-shadow: 0px 8px 50px 0px rgba(149, 157, 165, 0.2);
    border-radius: 20px;
    display: flex;
    align-items: center;
    .avatar {
      width: 55px;
      height: 55px;
      border-radius: 10px;
      overflow: hidden;
      margin-right: 10px;
    }
    .link-info {
      flex: 1;
      .link-name {
        white-space: pre;
        line-height: 1.8;
        font-size: 16px;
        color: #3f3d55;
      }
      .link-desc {
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
.linksitem-container:hover {
  opacity: 0.7;
}
</style>
