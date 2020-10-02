<template>
  <div id="about">
    <about-me />
    <div class="comment">
      <p class="num">关于：目前有6条留言</p>
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
    </div>
  </div>
</template>
<script>
import bar from "@/components/comment/bar";
import aboutMe from "@/components/about/aboutMe";
export default {
  components: {
    aboutMe,
    bar,
  },
};
</script>
<style lang="less">
    @import url(~@/assets/css/about/about.less);
</style>