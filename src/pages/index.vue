<template>
  <div id="index">
    <!-- 每日一句 -->
    <every-day />
    <!-- 文章 -->
    <article-page />
    <article-page />
    <article-page />
    <article-page />
    <!-- 分页组件 -->
    <el-pagination background="" layout="prev, pager, next" :total="10">
    </el-pagination>
  </div>
</template>
<script>
import everyDay from "@/components/index/everyday";
import articlePage from "@/components/index/article.vue";

export default {
  components: {
    everyDay,
    articlePage,
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/index/index.less);
</style>