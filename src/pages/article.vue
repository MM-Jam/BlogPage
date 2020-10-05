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
    <comment-edit />
  </div>
</template>
<script>
import commentEdit from "../components/comment/comment.vue";
import Axios from "axios";
export default {
  components: {
    commentEdit,
  },
  data() {
    return {
      blogDetails: {},
    };
  },
  methods: {
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