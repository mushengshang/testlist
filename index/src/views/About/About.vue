<template>
  <div>
    <div class="about">
    <router-link to="/tab1">二级管理</router-link>
    <router-link to="/tab2">123级管理</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
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
