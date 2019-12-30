<template>
  <div class="list">
    <div class="img"><img :src="add.img" alt=""></div>
      <span class="car">{{add.star}}</span>
      <p class="tit">{{add.rt}}</p>
      <p class="name">{{add.nm}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      add:[]
    }
  },
  created() {
    this.getDetail()
  },
  methods: {
    getDetail(){
      this.$http.get('/api/detail',{
        params:{
          id:this.$route.params.id
        }
      }).then(res=>{
        this.add=res.data.list
        console.log(this.add,"this.List")
      })
    },
  }
}
</script>

<style lang='scss'>
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