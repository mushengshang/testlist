<template>
  <div class="home">
    <div class="list" v-for="(item, index) in arr" :key="index">
      <div class="img"><img :src="imgUrl + item.coverUrl" alt=""></div>
      <span class="car">书名：{{item.bookName}}</span>
      <p class="tit">类型：{{item.subCateName}}</p>
      <p class="name">作者：{{item.authorName}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
 data() {
   return {
     arr:[],imgUrl: 'https://static.zongheng.com/upload/s_image'
   }
 },
 created() {
   this.getList()
 },
 methods: {
   getList(){
     this.$http.get('/api/list').then(res=>{
        console.log(res.data.list)
        this.arr=res.data.list.ranklist3
      })
    }
  },
}
</script>

<style lang="scss">
  .list{
    width: 99.5%;
    height: 100px;
    border: 1px solid pink;
    margin-top: 5px;
    position: relative;
    .img{
      width: 70px;
      height: 70px;
      position: absolute;
      left: 20px;
      top: 15px;
      img{
        width: 100%;
        height: 100%;
      }
    }
    .car{
      color: red;
      position: absolute;
      left: 110px;
      top: 10px;
    }
    .tit{
      position: absolute;
      left: 110px;
      top: 70px;
    }
    .name{
      position: absolute;
      left: 110px;
      top: 40px;
    }
  }  
</style>
