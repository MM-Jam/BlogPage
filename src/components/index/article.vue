<template>
  <div id="article">
    <div class="main">
      <h2>{{article.title}}</h2>
      <p class="content">
        {{article.content}}
      </p>
    </div>
    <div class="msg">
        <span class="publish">发布于{{article.ctime}} |</span>
        <span class="view">浏览：{{article.views}} |</span>
        <span class="tag">Tags：
          <span v-for="(tag,index) in article.tags" :key="index">
            {{tag}}
          </span>
        </span>
    </div>
  </div>
</template>
<script>
export default {
  props:['article']
};
</script>