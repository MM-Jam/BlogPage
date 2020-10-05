<template>
  <div id="article">
    <div class="main" @click="linkToDetail">
      <h2>{{article.title}}</h2>
      <p class="content" v-html="article.content">
        <!-- {{article.content}} -->
      </p>
    </div>
    <div class="msg">
        <span class="publish">发布于{{article.ctime}} |</span>
        <span class="view">浏览：{{article.views}} |</span>
        <span class="tag">Tags：{{article.tags}}
          <!-- <span v-for="(tag,index) in article.tags" :key="index"> -->
            <!-- {{tag}} -->
          <!-- </span> -->
        </span>
    </div>
  </div>
</template>
<script>
export default {
  props:['article'],
  computed:{
    link(){
      return this.article.link;
    }
  },
  methods:{
    linkToDetail(){
      this.$router.push({ path: `article/${this.link}` })
    }
  }
};
</script>