<template>
    <div id="right">
        <random-tag :tags="tags"/>
        <recent-hot :hotList="hotList"/>
        <new-comment :commentList="commentList"/>
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
    },
    data(){
        return {
            tags:['html','css','js','jq','bootartap','vvgrwds','xuasbcdn','gycduHSD'],
            hotList:[
                '使用码云git的webhook实现生产环境代使用码云git的webhook实现生产环境代使用码云git的webhook实现生产环境代',
                '使用码云git的webhook实现生产环境代',
                '使用码云git的webhook实现生产环境代'
            ],
            commentList:[
                {
                    username:'我',
                    ctime:'2天前',
                    content:'好的，谢谢'
                },
                {
                    username:'我',
                    ctime:'2天前',
                    content:'好的，谢谢'
                }
            ]
        }
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/rightBlock/rightBlock.less);
</style>