<template>
  <div class="app">
    <header class="header">
      <Header />
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
    <footer class="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>

import Footer from './components/Footer'
import Header from './components/Header'

export default {
  components:{
    Footer,
    Header
  }
}
</script>

<style lang="scss">
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }
  html,body{
    width: 100%;
    height: 100%;
  }
  .app{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  .header{
    width: 100%;
    background: orangered;
  }
  .main{
    width: 100%;
    flex: 1;
    overflow: auto;
  }
  .footer{
    width: 100%;
    height: 50px;
    background: orangered;
  }

</style>