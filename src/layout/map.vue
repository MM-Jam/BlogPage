<template>
    <div id="map">
        <h1>MM-Jam's Blog-SiteMap</h1>
        <ul>
            <li class="title">最新文章</li>
            <li v-for="article in articleList" :key="article.id">{{article.content}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return {
            articleList:[
                {
                    content:'服务器迁移，博客已无缝切换',
                    id:1
                }
            ]
        }
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/map.less);
</style>