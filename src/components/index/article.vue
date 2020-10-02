<template>
  <div id="article">
    <div class="main">
      <h2>Laravel5.4安装passport时遇到的一些问题</h2>
      <p class="content">
        安装时可能不支持高版本，我使用了composer require laravel/passport
        ~4.0安装后执行迁移时nothing to migrate，需要手动注册Provider，
        在config/app.php中providers中添加Laravel\Passport\PassportServiceProvider::class。执行php
        artisan passport:install时提示“There are no commands defined in the
        “passport” namespace.” 需要执行cache:clear和config:cache 更新缓存。
      </p>
    </div>
    <div class="msg">
        <span class="publish">发布于2019-12-06 |</span>
        <span class="view">浏览：6,687 |</span>
        <span class="tag">Tags：laravel</span>
    </div>
  </div>
</template>
<script>
export default {};
</script>