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
import Axios from 'axios'
export default {
    components:{
        randomTag,
        recentHot,
        newComment,
    },
    data(){
        return {
            tags:[],
            hotList:[],
            commentList:[]
        }
    },
    created(){
        Axios.get('/queryAllTags').then(res=>{
            // console.log(res)
            res.data.data.forEach(obj => {
                // console.log(obj.tag)
                this.tags.push(...obj.tag.split(','))
            });
        }).catch(err=>{
            console.log(err)
        })

        Axios.get('/queryBlogByViews').then(res=>{
            this.hotList = res.data.data
        }).catch(err=>{
            console.log(err)
        })

        Axios.get('/queryCommentByTime').then(res=>{
            this.commentList = res.data.data
        }).catch(err=>{
            console.log(err)
        })
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/rightBlock/rightBlock.less);
</style>