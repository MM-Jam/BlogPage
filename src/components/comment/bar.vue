<template>
    <div class="detail">
            <div class="msg">
                <span class="name">{{comment.username}}</span>
                <span class="publish">发表于 {{comment.ctime}}</span>
                <span class="reply">[回复]</span>
            </div>
            <p class="content">
                {{comment.content}}
            </p>
    </div>
</template>
<script>
export default {
    props:['comment'],
}
</script>
<style lang="less">
    @import url(~@/assets/css/comment/bar.less);
</style>