<template>
    <div id="map">
        <h1>MM-Jam's Blog-SiteMap</h1>
        <ul>
            <li class="title">最新文章</li>
            <li v-for="article in articleList" :key="article.id" 
            v-text="article.content"
            @click="pushToDetail(article.id)"
            ></li>
        </ul>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            articleList:[]
        }
    },
    methods:{
        pushToDetail(id){
            this.$router.push({path:`/article/${id}`})
        }
    },
    created(){
        Axios.get('/queryBlog').then(res=>{
            //请求
            this.articleList = res.data.data;
        }).catch(err=>{
            console.log(err);
        })
    }
}
</script>
<style lang="less">
@import url(~@/assets/css/map.less);
</style>