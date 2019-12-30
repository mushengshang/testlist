<template>
  <div class="home">
    <Lunbo />
    <div class="list" v-for="(item, index) in arr" :key="index">
      <div class="img" @click="btn(item)"><img :src="item.img" alt=""></div>
      <span class="car">{{item.star}}</span>
      <p class="tit">{{item.rt}}</p>
      <p class="name">{{item.nm}}</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Lunbo from '../../components/Lunbo'
export default {
  data() {
    return {
      arr:[]
    }
  },
  created() {
    this.getList()
  },
  methods: {
    getList(){
      this.$http.get('/api/list').then(res=>{
        console.log(res.data.list)
        this.arr=res.data.list
      })
    },
    btn(item){
      // console.log(item)
      this.$router.push({
        path:`/detail/${item.id}`
      })
    }
  },
  components:{
    Lunbo
  }
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
