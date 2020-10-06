<template>
  <div id="article">
    <div class="blog">
      <h1>{{ blogDetails.title }}</h1>
      <p>
        <span>作者：Jam</span>
        <span>分类：{{ blogDetails.tags }}</span>
        <span>发布于：{{ blogDetails.ctime }}</span>
        <span>浏览：{{ blogDetails.views }}</span>
      </p>
      <p class="content" v-html="blogDetails.content">
        <!-- {{  }} -->
      </p>
    </div>
    <bar
      v-for="comment in commentList"
      :key="comment.id"
      :comment="comment"
      @set-reply-parent="handleReplyParent"
    />
    <a id="reply">
      <comment-edit
        :replyParentId="replyParentId"
        :parent_name="parent_name"
        :blogId="blogId"
        :router_path="router_path"
        @clear-parentId="clearParentId"
        @re-query-comment="reQueryComment"
      />
    </a>
  </div>
</template>
<script>
import commentEdit from "../components/comment/comment.vue";
import bar from "../components/comment/bar.vue";
import Axios from "axios";
export default {
  components: {
    commentEdit,
    bar,
  },
  computed: {
    router_path() {
      return `/article/${this.$route.params.id}`;
    },
  },
  data() {
    return {
      blogId: this.$route.params.id,
      replyParentId: -1,
      parent_name: "",
      blogDetails: {},
      commentList: [],
      replyParentId: -1,
      parent_name: "",
    };
  },
  methods: {
    clearParentId() {
      this.replyParentId = -1;
    },
    reQueryComment() {
      console.log("我接收到要我更新评论的请求了");
      //重新请求评论数据
      this.queryCommentByBlogId(this.$route.params.id);
    },
    handleReplyParent(parentId, parentName) {
      this.replyParentId = parentId;
      this.parent_name = parentName;
    },
    queryCommentByBlogId(id) {
      Axios.get("/queryCommentByBlogId", {
        params: {
          blog_id: id,
        },
      }).then((res) => {
        // console.log(res)
        console.log(res.data.data);
        this.commentList = res.data.data;
      });
    },
    addBlogViews() {
      Axios.post("/addBlogViews", {
        data: {
          newViews: this.blogDetails.views + 1,
          id: this.blogDetails.id,
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
  created() {
    const id = this.$route.params.id;
    console.log(id);

    this.queryCommentByBlogId(id);

    //发送axios请求
    Axios.get("/queryBlogById", {
      params: {
        id,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          console.log(res.data.data[0]);
          this.blogDetails = res.data.data[0];
          //这时候我要增加blog的views+1
          this.addBlogViews();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/article.less);
</style>