<template>
  <div id="nav">
    <div class="left">
      <router-link to="/index"><h3>Jam个人博客</h3></router-link>
      <ul>
        <li>
          <router-link to="/index">首页</router-link>
        </li>
        <li><router-link to="/map">地图</router-link></li>
        <li><router-link to="/about">关于</router-link></li>
        <li><router-link to="/leaveWord">留言</router-link></li>
      </ul>
    </div>
    <div class="right">
      <el-input v-model="input" placeholder="请输入关键词查找"></el-input>
      <el-button round>搜索</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
    };
  },
};
</script>
<style lang="less">
@import url(~@/assets/css/nav/nav.less);
</style>