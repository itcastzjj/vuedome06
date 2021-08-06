<template>
  <van-swipe :autoplay="3000">
    <van-swipe-item v-for="(item,index) in slidesData" :key="index">
      <van-image :src="item.img_url"/>
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  // 轮播图
  name: "slides",
  props: {
    slidesData: Array
  },
  mounted() {
    console.log(this.$props.slidesData);
  }
};
</script>
<style scoped>
img {
  width: 100%;
  height: 160px;
}
</style>

