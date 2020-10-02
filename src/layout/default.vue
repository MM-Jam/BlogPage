<template>
  <div id="defalut">
    <nav-page />
    <right-block />
    <router-view></router-view>
    <footer-page />
  </div>
</template>
<script>
import navPage from "@/components/default/nav.vue";
import rightBlock from "@/components/default/rightBlock.vue";
import footerPage from "@/components/default/footer.vue";
export default {
  components: {
    navPage,
    rightBlock,
    footerPage,
  },
};
</script>
<style lang="less">
#defalut{
  overflow: hidden;
  position: relative;
}
</style>