<template>
  <div id="about">
    <about-me />
    <div class="comment">
      <p class="num">关于：目前有{{commentList.length}}条留言</p>
      <bar
        v-for="(comment, index) in commentList"
        :key="index"
        :comment="comment"
        @set-reply-parent="handleReplyParent"
      />
    </div>
    <a id="reply">
      <comment-edit
        :replyParentId="replyParentId"
        :parent_name="parent_name"
        @re-query-comment="reQueryComment"
        :blogId="blogId"
        :router_path="router_path"
        @clear-parentId="clearParentId"
      />
    </a>
  </div>
</template>
<script>
import bar from "@/components/comment/bar";
import aboutMe from "@/components/about/aboutMe";
import commentEdit from "../components/comment/comment.vue";
import Axios from 'axios';
export default {
  components: {
    aboutMe,
    bar,
    commentEdit,
  },
  data() {
    return {
      router_path:'/about',
      blogId:-1,
      replyParentId:-1,
      parent_name:'',
      commentList: [
        // {
        //   id: 1,
        //   username: "coffee",
        //   parent: -1,
        //   ctime: "2020-09-21",
        //   content: "好的好的",
        // },
        // {
        //   id: 2,
        //   username: "coffee",
        //   parent: -1,
        //   ctime: "2020-09-21",
        //   content: "好的好的",
        // },
      ],
    };
  },
  methods: {
    clearParentId(){
      this.replyParentId = -1;
    },
    reQueryComment() {
      console.log("我接收到要我更新评论的请求了");
      //重新请求评论数据
      //关于页面的blogId是-1
      this.queryCommentByBlogId();
    },
    handleReplyParent(parentId, parentName) {
      this.replyParentId = parentId;
      this.parent_name = parentName;
    },
    queryCommentByBlogId() {
      Axios.get("/queryCommentByBlogId", {
        params: {
          blog_id: -1,
        },
      }).then((res) => {
        // console.log(res)
        console.log(res.data.data);
        this.commentList = res.data.data;
      });
    },
  },
  created() {
    this.queryCommentByBlogId();
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/about/about.less);
</style>