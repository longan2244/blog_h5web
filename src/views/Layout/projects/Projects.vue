<template>
  <div class="projects-container">
    <div class="banner">
      <img src="./../../../../public/img/$light_projects_banner.svg" alt="" />
    </div>
    <!--提示 -->
    <div class="tips">
      <div class="codebox-container">
        <ul class="head">
          
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div class="tc mytips"> 
          <p>
           <pre class="go" style="font-family:monospace;"><ol><li style="font-weight: normal; vertical-align:top;"><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;"><span style="color: #b1b100; font-weight: bold;">import</span> <span style="color: #339933;">{</span> ishappy <span style="color: #339933;">}</span> from <span style="color: #cc66cc;">&quot;life&quot;</span><span style="color: #339933;">;</span></div></li><li style="font-weight: normal; vertical-align:top;"><br><div style="font: normal normal 1em/1.2em monospace; margin:0; padding:0; background:none; vertical-align:top;">console<span style="color: #339933;">.</span>log<span style="color: #339933;">(</span>ishappy<span style="color: #339933;">(</span><span style="color: #cc66cc;">2022</span><span style="color: #339933;">));</span><span style="color: #3f7f5f; font-style: italic; font-size: 700;"></span></div></li></ol></pre>
            </p>
           <div class="consoles">
             <img class="mdui-img-fluid" src="./../../../../public/img/terminal.svg" alt="">
           </div>
          <p>
            我会用业余时间维护一些开源项目，包括不限于奇思妙想的产品，提升开发者体验的工具，库，框架。我目前在思考于
            UI Design 和想要用 ❤️ 做好一个产品。
          </p>
          <p>
            如果你有任何相关的建议或者有趣问题的讨论，欢迎直接通过
            <a class="tc2" href="">邮件</a> 联系我。
          </p>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <ul class="cards">
      <li v-for="item in repositorylist" :key="item.id">
        <a :href="item.html_url">
          <div class="titie">{{ item.name }}</div>
          <div class="description tc">
            {{ item.description }}
          </div>
          <div class="tcs tc">
            {{ item.pushed_at }} |
            <span class="bgc" style="color: white">{{
              item.language == null ? " 😵 " : item.language
            }}</span>
          </div>
        </a>
      </li>
    </ul>
    <!-- 页脚 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer/index.vue";
import { getrepositoryapi } from "@/api/project/index.js";
import evtbus from '@/util/evtbus.js';
export default {
  components: { Footer },
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
      this.repositorylist = res
    },
  },
  computed: {},
  watch: {},
  created() {
    this.getrepository();
  },
  mounted() {
    setTimeout(() => {
      evtbus.$emit('setzero')
    })
  },
};
</script>

<style lang='less' scpoed>
.projects-container {
  padding: 27px 17px 0px 17px;
  overflow: hidden;
  .banner {
    height: 128.5px;
    width: 345px;
    opacity: 1;
    border-radius: 8px;
    overflow: hidden;
    img {
      width: 100%;
      vertical-align: middle;
    }
  }
  .tips {
    .mytips {
      font-size: 14px;
    }
    p {
      padding: 12px 0;
    }
    p:nth-child(2) {
      padding: 0 0 12px 0;
    }
  }
          .consoles{
      width: 100%!important;
      img{
        display: block;
        width: 100%!important;
      }
    }
  .cards {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      padding: 15px 20px;
      border-radius: 8px;
      background-color: #fff;
      margin-bottom: 26px;
      box-shadow: rgba(149, 157, 165, 0.2);

      a:visited {
        color: #00a0c6;
      }
      .titie {
        font-size: 20px;
        line-height: 1.8;
      }
      .description {
        font-size: 14px;
      }
      .tcs {
        font-size: 13px;
        font-weight: 400;
        letter-spacing: 0px;
        padding-top: 24px;
        span {
          padding: 2px 5px;
          border-radius: 4px;
          margin-left: 4px;
        }
      }

    }

  }
}
</style>
