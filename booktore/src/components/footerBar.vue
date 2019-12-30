<template>
  <div class="app-footer">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">分类</router-link>
    <router-link to="/paihang">排行</router-link>
    <router-link to="/bookjia">书架</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .app-footer{
    width: 100%;
    height: 100%;
    display: flex;
    a {
      width: 25%;
      text-align: center;
      line-height: 40px;
      &.router-link-exact-active {
        color: skyblue;
      }
    }
  }
</style>