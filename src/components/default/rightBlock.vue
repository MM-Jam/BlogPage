<template>
    <div id="right">
        <random-tag />
        <recent-hot />
        <new-comment />
    </div>
</template>
<script>
import randomTag from '@/components/rightBlock/randomTag.vue'
import recentHot from '@/components/rightBlock/recentHot.vue'
import newComment from '@/components/rightBlock/newComment.vue'
export default {
    components:{
        randomTag,
        recentHot,
        newComment,
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/rightBlock/rightBlock.less);
</style>