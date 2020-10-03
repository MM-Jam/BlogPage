<template>
  <div id="index">
    <!-- 每日一句 -->
    <every-day />
    <!-- 文章 -->
    <article-page
      v-for="article in articleList"
      :key="article.id"
      :article="article"
    />
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
  data() {
    return {
      articleList: [
        {
          title: "Laravel5.4安装passport时遇到的一些问题",
          content: `安装时可能不支持高版本，我使用了composer require laravel/passport
          ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider，
          在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php
          artisan passport:install时提示“There are no commands defined in the
          “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。`,
          ctime:'2019-12-06',
          views:6687,
          tags:['laravel','111','aaa']
        }
      ],
    };
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/index/index.less);
</style>