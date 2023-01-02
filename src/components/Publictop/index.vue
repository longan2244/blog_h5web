<template>
  <div class="publictop-container">
    <!-- <button @click="$router.push('/projects')">切换项目</button>
    <button @click="$router.push('/about')">切换关于</button>
    <button @click="$router.push('/links')">切换友链</button>
    <button @click="$router.push('/')">返回首页</button> -->
    <div class="head">
      <div class="logo">longan</div>
      <div class="function">
        <!-- 设置 -->
        <i class="mdui-icon icon-settings-outline"></i>
        <!-- github -->
       
          <a href="https://github.com/longan2244/blog_h5web">
           <i  class="mdui-icon icon-logo-github">  </i></a>
       
        <i
          class="mdui-icon icon-menu-outline"
          mdui-menu="{target: '#example-2'}"
        ></i>
        <!-- 菜单 -->
        <ul class="mdui-menu" id="example-2">
          <li
            class="mdui-menu-item"
            v-for="(item, index) in menuoption"
            :key="index"
            @click="$router.push(item.push)"
          >
            <a href="javascript:;" class="mdui-ripple tc">{{ item.name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  name: "publictop",
  props: [],
  data() {
    return {
      menuoption: [ //菜单配置
        { name: "首页", push: "/" },
        { name: "项目", push: "/projects" },
        { name: "关于", push: "/about" },
        { name: "友链", push: "/links" },
      ],
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>

<style lang='less' scpoed>
.publictop-container {
  height: 53px;
  line-height: 53px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25);
  padding: 0 13px;

  .head {
    display: flex;
    justify-content: space-between;
    .logo {
      font-size: 24px;
      font-weight: 900;
      color: rgba(0, 0, 0, 1);
    }
    .function {
      width: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
