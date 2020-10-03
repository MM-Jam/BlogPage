<template>
  <div id="about">
    <about-me />
    <div class="comment">
      <p class="num">关于：目前有6条留言</p>
      <bar v-for="(comment,index) in commentList" :key="index" :comment="comment" />
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
  data(){
    return {
      commentList:[
                {
                    id:1,
                    username:'coffee',
                    parent:-1,
                    ctime:'2020-09-21',
                    content:'好的好的'
                },
                {
                    id:2,
                    username:'coffee',
                    parent:-1,
                    ctime:'2020-09-21',
                    content:'好的好的'
                }
            ]
    }
  }
};
</script>
<style lang="less">
    @import url(~@/assets/css/about/about.less);
</style>