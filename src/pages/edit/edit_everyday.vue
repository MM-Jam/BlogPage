<template>
  <div id="editDay">
    <h1>每日一句编辑</h1>
    <div ref="editor" style="text-align: left" class="edit_text"></div>
    <button v-on:click="getContent">提交</button>
  </div>
</template>
<script>
import E from "wangeditor";
import axios from "axios";
import $ from 'jquery';
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
    };
  },
  methods: {
    getContent: function () {
      alert('提交');
      const content = this.getSimpleText(this.editorContent);
      console.log(content)
      axios
        .post("/editEveryday", {
          data: content,
        })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getSimpleText: function (html) {
      //html剔除富文本标签，留下纯文本
      const re1 = new RegExp("<.+?>", "g"); //匹配html标签的正则表达式，"g"是搜索匹配多个符合的内容
      const msg = html.replace(re1, "").trim(); //执行替换成空字符
      return msg;
    },
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.onchange = (html) => {
      this.editorContent = html;
    };
    editor.create();
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/edit_text.less);
</style>