<template>
  <div id="editBlog">
    <h1>文章编辑</h1>
    <div class="inp">
      <el-input v-model="inputTitle" placeholder="请输入文章标题"></el-input>
      <el-input v-model="inputTag" placeholder="请输入文章标签"></el-input>
    </div>
    <div
      ref="editor"
      style="text-align: left"
      class="edit_text"
      id="edit_blog"
    ></div>
    <button v-on:click="getContent">提交</button>
  </div>
</template>
<script>
import Axios from "axios";
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
      inputTitle: "",
      inputTag: "",
    };
  },
  methods: {
    getContent: function () {
      // alert(this.editorContent)
      // const content = this.editorContent;
      Axios.post("/editBlog", {
        data: {
          title: this.inputTitle,
          tags: this.inputTag,
          content: this.editorContent,
        },
      })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  mounted() {
    var editor = new E(this.$refs.editor);
    editor.customConfig.uploadImgShowBase64 = true
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