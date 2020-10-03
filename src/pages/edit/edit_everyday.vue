<template>
  <div id="editDay">
    <h1>每日一句编辑</h1>
    <div class="inp">
            <el-input v-model="input" placeholder="请输入作者"></el-input>
        </div>
    <div ref="editor" style="text-align: left" class="edit_text"></div>
    <button v-on:click="getContent">提交</button>
  </div>
</template>
<script>
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: "",
    };
  },
  methods: {
    getContent: function () {
      alert(this.editorContent);
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