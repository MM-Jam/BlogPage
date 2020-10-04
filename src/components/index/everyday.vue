<template>
    <div id="everyday">
        <div class="title">
            每日一句（{{everyday_data.ctime}}）
            <i class="el-icon-headset"></i>
        </div>
        <p class="content">
            {{everyday_data.content}}
        </p>
    </div>
</template>
<script>
import Axios from 'axios'
export default {
    data(){
        return {
            everyday_data:{}
        }
    },
    created(){
        //发送axios请求evetydata数据
        Axios.get('/queryEveryday').then(res=>{
            // console.log(res);
            this.everyday_data = {
                ctime:res.data.data[0].ctime,
                content:res.data.data[0].content
            }
        })
    }
}
</script>
