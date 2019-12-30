<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item style="background:red"><img src="img/1.jpg" alt=""></van-swipe-item>
      <van-swipe-item style="background:green"><img src="img/5.jpg" alt=""></van-swipe-item>
      <van-swipe-item style="background:blue"><img src="img/3.jpg" alt=""></van-swipe-item>
      <van-swipe-item style="background:skyblue"><img src="img/4.jpg" alt=""></van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
  .van-swipe{
    margin-top: 10px;
    width: 100%;
    height: 200px;
    img{
      width: 100%;
      height: 100%;
    }
  }
</style>