<template>

<el-menu :default-active="activeIndex" class="el-menu-demo topbar" mode="horizontal" @select="handleSelect" router>
  <el-menu-item index="/">处理中心</el-menu-item>
  <el-menu-item index="/postvideo">投稿页面</el-menu-item>
  <el-menu-item index="/about" >消息中心</el-menu-item>
</el-menu>
</template>

<script>
  export default {
    name:"TopBar",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="css">
    .topbar{
        margin-bottom: 20px;
    }
</style>