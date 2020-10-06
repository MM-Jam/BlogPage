<template>
  <div id="comment">
    <p class="title">发表评论</p>
    <el-input class="name" v-model="name" placeholder="昵称"></el-input>
    <el-input
      class="email"
      v-model="email"
      placeholder="邮箱(评论被回复时你能收到通知)"
    ></el-input>
    <el-input
      class="textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4 }"
      placeholder="无意义内容我可能不会回复你"
      v-model="content"
    >
    </el-input>
    <div class="yanzheng">
      <el-input
        class="verification"
        v-model="verifyCode"
        placeholder="验证码"
      ></el-input>
      <div class="captcha" v-html="captcha"></div>
    </div>
    <div class="btns">
      <el-button round @click="submitComment">提交</el-button>
      <el-button round @click="clearAll">重写</el-button>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  props: ["replyParentId","parent_name","blogId","router_path"],
  data() {
    return {
      name: "",
      email: "",
      content: "",
      verifyCode: "",
      captcha: "",
    };
  },
  created() {
    this.queryCode();
  },
  methods: {
    queryCode() {
      //请求验证码
      Axios.get("/queryCaptcha").then((res) => {
        console.log("res", res);
        console.log(res.data);
        if (res.status == 200) {
          this.captcha = res.data;
        }
      });
    },
    clearAll() {
      this.name = "";
      this.email = "";
      this.content = "";
      this.verifyCode = "";
    },
    submitComment() {
      //发送axios请求
      Axios.post("/editComment", {
        data: {
          username: this.name,
          blog_id: this.blogId,
          parent: this.replyParentId,
          comment: this.content,
          email: this.email,
          verifyCode: this.verifyCode,
          parent_name:this.parent_name,
        },
      })
        .then((res) => {
          if (res.status == 200) {
            alert("评论成功");
            //告诉父组件我评论成功了，要把replyParentId变成-1;
            this.$emit("clear-parentId");
            this.clearAll();
            this.queryCode();
            this.replyParentId = -1;
            this.parent_name = '';
            this.$emit('re-query-comment');
            this.$router.push({ path: this.router_path });
          }
        })
        .catch((err) => {
          alert('验证码不正确，请重新输入')
        });
    },
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/comment/comment.less);
</style>