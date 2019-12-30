<template>
  <div>
    <div class="about">
      <router-link to="/tab1">热门</router-link>
      <router-link to="/tab2">新书</router-link>
      <router-link to="/tab3">免费</router-link>
      <router-link to="/tab4">完本</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='scss'>
  .about{
    width: 99.5%;
    height: 40px;
    border: 1px solid pink;
    display: flex;
    justify-content: space-around;
    line-height: 40px;
    a {
    font-weight: bold;
    color: #2c3e50;   
    &.router-link-exact-active {
      color: red;
    }
  }
}
</style>