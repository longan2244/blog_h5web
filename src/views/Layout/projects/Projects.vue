<template>
  <div class="projects-container">projects 测试文本</div>
</template>

<script>
import { getrepositoryapi } from "@/api/project/index.js";
export default {
  components: {},
  name: "",
  props: [],
  data() {
    return {
      repositorylist: [],
    };
  },
  methods: {
    //获取存储库列表
    async getrepository() {
      let { data: res } = await getrepositoryapi();
      this.repositorylist = res;
    },
  },
  computed: {},
  watch: {},
  created() {
    this.getrepository();
  },
  mounted() {},
};
</script>

<style lang='less' scpoed>
</style>
