<template>
    <div id="leave">
        <p>留言：目前有6条留言</p>
      <bar v-for="(comment,index) in commentList" :key="index" :comment="comment" />
    </div>
</template>
<script>
import bar from '@/components/comment/bar'
export default {
    components:{
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
                },
                {
                    id:3,
                    username:'coffee',
                    parent:-1,
                    ctime:'2020-09-21',
                    content:'好的好的'
                },
                {
                    id:4,
                    username:'coffee',
                    parent:-1,
                    ctime:'2020-09-21',
                    content:'好的好的'
                }
            ]
        }
    },
}
</script>
<style lang="less">
@import url(~@/assets/css/leaveWord.less);
</style>