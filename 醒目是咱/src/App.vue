<template>
  <div id="app">
    <header class="header">
      我是头部
    </header>
    <main class="main">
      我是中间
    </main>
    <footer class="footer">
      我是脚部
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
   
  }
}
</script>

<style lang='css'>
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
#app{
  display: flex;
  flex-direction: column;
}
.header{
  width: 100%;
  height: 50px;
  background: orangered;
}
.main{
  width: 100%;
  flex: 1;
  overflow: auto
}
.footer{
  width: 100%;
  height: 50px;
  background: orangered;
}
</style>
