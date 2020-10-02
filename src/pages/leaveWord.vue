<template>
    <div id="leave">
        <p>留言：目前有6条留言</p>
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      <bar />
      
    </div>
</template>
<script>
import bar from '@/components/comment/bar'
export default {
    components:{
        bar,
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/leaveWord.less);
</style>