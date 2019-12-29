<template>
  <div class="app-footer">
    <router-link to="/home">首页</router-link>
    <router-link to="/about">即将上映</router-link>
    <router-link to="/move">我的</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .app-footer{
    width: 100%;
    height: 50px;
    display: flex;
    a {
      flex:1;
      display: flex;
      justify-content: center;
      align-items: center;
      &.router-link-exact-active {
        color: #ecfd00;
      }
    }
  }
</style>