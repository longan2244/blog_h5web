<template>
  <div class="send-container">
    <!-- 保存 -->
    <div class="sendbox bgc" @click="sendinfos">
      <i class="mdui-icon icon-send-outline"></i>
    </div>
    <!-- 文章分类 -->
    <select class="mdui-select" v-model="sendinfo.articclass" mdui-select disabled>
      <option v-for="item in classify" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
    <!-- 文章标题 -->
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">文章标题</label>
      <input
        class="mdui-textfield-input"
        v-model="sendinfo.artictitle"
        type="text"
        placeholder="标题"
      />
    </div>
    <!-- 上传图片 -->
    <div class="upimg">
      <label class="mdui-textfield-label">上传图片</label>
      <input
        multiple="multiple"
        type="file"
        class="file"
        @change="sendimg"
        ref="file"
        hidden
        accept="image/jpeg"
      />
      <button @click="$refs['file'].click()" class="mdui-btn mdui-btn-raised">
        上传图片
      </button>
      <div class="previewThePicture">
        <div
          class="imgboxup"
          v-for="(item, index) in imagePreviewinfo"
          :key="index"
          @click="copyUrl(item.name)"
        >
          <img :src="item.src" alt="" />
          <span :ref="item.name" class="tc imgboxuptext mdui-text-truncate">{{
            item.name
          }}</span>
        </div>
      </div>
    </div>
    <!-- 封面图片 -->
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">封面图片（填写名称）/1</label>
      <input
        v-model="sendinfo.articimgurl"
        class="mdui-textfield-input"
        type="text"
      />
    </div>
    <!-- 快捷按钮 -->
    <div class="shortcut">
      <button
        @click="articlestext += `<mycode></mycode>`"
        class="mdui-btn mdui-btn-raised"
      >
        插入代码片段
      </button>
      <button
        @click="articlestext += `<mytiles></mytiles>`"
        class="mdui-btn mdui-btn-raised"
      >
        插入磁贴片段
      </button>
      <button @click="articlestext += `</br>`" class="mdui-btn mdui-btn-raised">
        换行
      </button>
      <button
        @click="articlestext += `<mya></mya>`"
        class="mdui-btn mdui-btn-raised"
      >
        链接
      </button>
      <button
        @click="articlestext += `<mycenter></mycenter>`"
        class="mdui-btn mdui-btn-raised"
      >
        插入说明
      </button>

      <!-- <button
        @click="articlestext += `<myimg></myimg>`"
        class="mdui-btn mdui-btn-raised"
      >
        插入图片片段
      </button> -->
    </div>
    <!-- 浮动标签 -->
    <div class="mdui-textfield">
      <label class="mdui-textfield-label">代码编辑处</label>
      <textarea
        spellcheck="false"
        v-model="articlestext"
        class="mdui-textfield-input"
        placeholder="内容"
        rows="10"
      ></textarea>
    </div>
    <!-- 预览区域 -->
    <div class="mdui-typo-subheading">预览</div>
    <div class="test" v-html="sendinfo.articleshtml"></div>
    <div class="mdui-typo-subheading">代码</div>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="sendinfo.articleshtml"
    ></textarea>
  </div>
</template>
<script>
import { uploadimgapi } from "@/api/articles/index.js";
import { getarticleclassapi, addarticleitemapi } from "@/api/articles/index.js";
import baseimgurl from "@/util/baseimgurl.js";
export default {
  components: {},
  name: "send",
  props: [],
  data() {
    return {
      sendinfo: {
        artictitle: "", //文章标题
        articleshtml: "", //文章代码
        articclass: "5", //发送类别
        articimgurl: "", //封面图片
        classname: "",
      },
      classify: [], //分类
      imagePreviewinfo: [],
      articlestext: "",
    };
  },
  methods: {
    //获取分类
    async getarticleclass() {
      try {
        let { data: res } = await getarticleclassapi();
        this.classify = res.data;
        this.sendinfo.classname = res.data[0].name;
      } catch (error) {}
    },
    // 快速生成图片
    copyUrl(ref) {
      let dom = this.$refs[ref];
      this.articlestext += `<myimg>${dom[0].innerHTML}</myimg>`;
    },
    //发送图片
    async sendimg() {
      let dom = this.$refs["file"];
      let fileObjects = dom.files;
      let myFormData = new FormData();
      for (let i = 0; i < fileObjects.length; i++) {
        myFormData.append("jpg", fileObjects[i]);
        //生成预览图
        this.imagePreviewinfo.push({
          src: window.URL.createObjectURL(fileObjects[i]),
          name: fileObjects[i].name,
        });
      }
      let { data: res } = await uploadimgapi(myFormData);
      if (!res.code) return console.log("失败上传");
    },
    //添加文章
    async sendinfos() {
      let { data: res } = await addarticleitemapi(this.sendinfo);
      if (!res.code) return alert(res.msg);
      return alert(res.msg);
    },
  },
  computed: {},
  watch: {
    "sendinfo.articclass": {
      handler(val) {
        this.sendinfo.classname = this.classify[val - 1].name;
      },
      // immediate: true, // watch侦听操作内的函数会立刻被执行
    },
    articlestext(newall) {
      this.sendinfo.articleshtml = newall
        .replaceAll("<mycode>",`<div class="codebox-container"><ul class="head"><li></li><li></li><li></li></ul>`)
        .replaceAll("</mycode>", "</div>")
        .replaceAll("<mytiles>",`<div class="promptbox-container"><div class="textbox">`)
        .replaceAll("</mytiles>",`</div><div class="leftbox bgc"></div></div>`)
        .replaceAll("<myimg>",`<div class="imagebox-container bgc"><img src="${baseimgurl}/static/img/`)
        .replaceAll("</myimg>",`" alt=""></div>`)
        .replaceAll("<mya>",`<a href="" class="tc2">`)
        .replaceAll("</mya>",`</a>`)
        .replaceAll("<mycenter>",`<center class="tc2">`)
        .replaceAll("</mycenter>",`</center>`);

      // 6666666
    },
  },
  created() {
    //获取分类
    this.getarticleclass();
  },
  mounted() {},
};
</script>

<style lang='less' scpoed>
.send-container {
  padding: 0 10px;
  .sendbox {
    z-index: 666;
    position: fixed;
    bottom: 0.53333rem;
    right: 0.53333rem;
    width: 1.49333rem;
    height: 1.49333rem;
    text-align: center;
    line-height: 1.49333rem;
    border-radius: 50%;
    box-shadow: 0 0.21333rem 0.64rem 0 rgb(149 157 165 / 50%);
    i {
      text-align: center;
      color: white;
    }
    i::before {
      font-size: 18px;
      line-height: 25px;
    }
  }
  .upimg {
    padding: 10px;
    .previewThePicture {
      display: flex;
      flex-wrap: wrap;
      .imgboxup {
        width: 25%;
        text-align: center;
        img {
          width: 100%;
          vertical-align: middle;
        }
      }
      .imgboxuptext {
        font-size: 12px;
      }
    }
  }
  textarea {
    width: 100%;
    font-size: 14px;
  }
  center {
    text-decoration: underline;
  }
}
</style>
