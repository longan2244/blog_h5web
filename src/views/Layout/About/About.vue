<template>
  <div class="about-container">
    <div class="page">
      <div class="caihong">关于longan的诞生</div>
      <div class="contentss tc">
        <p>
          ___所有的素材及灵感来均自于<a class="tc2">@Mist</a
          >他是一名优秀的前端工程师 <br /><br /><br /><br />
          嗨！欢迎来到我的应用 😎，这是一个兴趣使然的项目，zzhack
          被设计为一个注重信息展示的应用，它是序列化和沉淀我思想的地方。
        </p>
        <br />
        <p>
          如你所见的 已是第五个大版本，它已经经过了两次大规模的重构以及 5
          次重新设计，最后回归纯真，专注信息展示。
        </p>
        <div class="banner">
          <img class="mdui-img-fluid" src="./../../../../public/img/$light_banner.svg" alt="" />
        </div>
        <p>
          zzhack
          是一个纯静态的应用，并且开源内容到代码的所有，如果你对它的技术实现感兴趣可以在
          <a class="tc2" href="#"> 这里 </a>找到他
        </p>
      </div>
    </div>
    <div class="page">
      <div class="caihong">关于我</div>
      <div class="tc">
        前端开发者,技术栈Java ,前端三件套， Vue , javascript , nodejs暂时...
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/index.vue";
import evtbus from '@/util/evtbus.js';
export default {
  components: { Footer },
  name: "",
  props: [],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {
     setTimeout(() => {
      evtbus.$emit('setzero')
    })
  },
};
</script>

<style lang='less' scpoed>
.about-container {
  padding: 27px 17px 0px 17px;
  .page {
    padding-bottom:24px;
    .contentss {
      font-size: 16px;
      line-height: 1.5;
      .banner {
        margin: 16px 0;
      }
    }
    .tc {
      font-size: 16px;
      line-height: 1.5;
    }
  }
}
</style>
