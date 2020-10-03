<template>
    <div id="everyday">
        <div class="title">
            每日一句({{everyday_data.ctime}})
            <i class="el-icon-headset"></i>
        </div>
        <p class="content">
            {{everyday_data.content}}
        </p>
        <p class="author">
            ———— {{everyday_data.author}}
        </p>
    </div>
</template>
<script>
export default {
    data(){
        return {
            everyday_data:{
                ctime:'2020.10.02',
                content:'A warm smile is the universal language of kindness.',
                author:'William Arthur Ward'
            }
        }
    },
    created(){
        //发送ajax请求data数据
    }
}
</script>
