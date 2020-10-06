<template>
    <div class="detail">
            <div class="msg">
                <span class="name">{{username_replayname}}</span>
                <span class="publish">发表于 {{comment.ctime}}</span>
                <a class="reply" href="#reply" @click="$emit('set-reply-parent',comment.id,comment.username)">[回复]</a>
            </div>
            <p class="content">
                {{comment.comment}}
            </p>
    </div>
</template>
<script>
export default {
    props:['comment'],
    computed:{
        username_replayname(){
            if(!this.comment.parent_name){
                return this.comment.username;
            }else{
                return `${this.comment.username}：回复@${this.comment.parent_name}`
            }
        }
    }
}
</script>
<style lang="less">
    @import url(~@/assets/css/comment/bar.less);
</style>