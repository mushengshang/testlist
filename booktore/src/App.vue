<template>
  <div id="app">
    <header class="header">
      <Header />
    </header>
    <main class="main">
      <router-view/>
    </main>
    <footer class="footer">
      <Footer />
    </footer>    
  </div>
</template>
<script>
import Footer from './components/footerBar'
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
#app {
  width: 100%;
  height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
.header,.footer{
  width: 100%;
  height: 45px;
  background: orangered;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto;
}
</style>
