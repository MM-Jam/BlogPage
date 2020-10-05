<template>
  <div id="comment">
    <p>发表评论</p>
    <el-input class="name" v-model="name" placeholder="昵称"></el-input>
    <el-input class="email"
      v-model="email"
      placeholder="邮箱(评论被回复时你能收到通知)"
    ></el-input>
    <el-input class="textarea"
      type="textarea"
      :autosize="{ minRows: 2, maxRows: 4}"
      placeholder="无意义内容我可能不会回复你"
      v-model="content"
    >
    </el-input>
        <el-input class="verification"
      v-model="verifyCode"
      placeholder="验证码"
    ></el-input>
    <div class="btns">
        <el-button round @click="submitComment">提交</el-button>
        <el-button round @click="clearAll">重写</el-button>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
    data(){
        return{
            name:'',
            email:'',
            content:'',
            verifyCode:'',
        }
    },
    methods:{
        clearAll(){
            this.name = '';
            this.email = '';
            this.content = '';
            this.verifyCode = '';
        },
        submitComment(){
            //发送axios请求
            Axios.post('/editComment',{
                data:{
                    username:this.name,
                    blog_id:this.$route.params.id,
                    parent:-1,
                    comment:this.content,
                    email:this.email,
                }
            }).then(res=>{
                if(res.status==200){
                    alert('评论成功');
                    this.clearAll();
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
};
</script>
<style lang="less">
@import url(~@/assets/css/comment/comment.less);
</style>