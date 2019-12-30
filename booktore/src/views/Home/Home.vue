<template>
  <div>
    <div id="app">
      <Lunbo />
      <div class="center">
        <span>免费精选</span>
        <span>女频专区</span>
      </div>
    </div>
    <div class="list" v-for="(item, index) in arr" :key="index">
      <div class="img"><img :src="imgUrl + item.coverUrl" alt=""></div>
      <span class="car">书名：{{item.bookName}}</span>
      <p class="tit">类型：{{item.subCateName}}</p>
      <p class="name">作者：{{item.authorName}}</p>
    </div>
  </div>
</template>

<script>
import Lunbo from '../../components/Lunbo'
export default {
  data() {
    return {
      arr:[],imgUrl: 'https://static.zongheng.com/upload/s_image'
    }
  },
  created() {
    this.getData()
  },
  methods: {
    getData(){
      this.$http.get('/api/list').then(res=>{
        this.arr=res.data.list.ranklist0
      })
    }
  },
  components:{
    Lunbo
  }
}
</script>

<style lang='scss'>
  .center{
    width: 99.5%;
    height: 40px;
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    span{
      display: inline-block;
      width: 40%;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background: palevioletred;
    }
  }
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