<template>
  
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in slidesData" :key="index">
        <img v-lazy="image.img_url">
      </van-swipe-item>
    </van-swipe>
  
</template>

<script>
export default {
  // 轮播图
  name: "slides",
   data() {
    return {
      
    };
  },
  methods: {
      
  },
  mounted () {
    //   console.log(this.slidesData)
  },
  props:{
      slidesData:Array
  }
};
</script>
<style scoped>
img{
    width: 100%;
    height: 160px;
}
</style>

