<template>
  <div class="-container">
    <van-tabs v-model="active" @rendered="test">
      <van-tab v-for="index in classify" :key="index.id">
        <template #title> <van-icon name="more-o" />{{ index.name }} </template>
        <List :classid="index.id"></List>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import List from "@/views/test/list.vue";
import { getarticleclassapi } from "@/api/articles/index.js";
export default {
  components: { List },
  name: "",
  props: [],
  data() {
    return {
      active: 0,
      classify: [],
    };
  },
  methods: {
    test(name){
      console.log(name+1);
    },
    async getarticleclass() {
      try {
        let { data: res } = await getarticleclassapi();
        this.classify = res.data;
      } catch (error) {}
    },
  },
  computed: {},
  watch: {},
  created() {
    this.getarticleclass();
  },
  mounted() {},
};
</script>

<style lang='less' scpoed>
</style>
