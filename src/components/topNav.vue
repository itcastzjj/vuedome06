<template>
  <div class="topNav">
    <van-nav-bar
      title="标题"
      left-text=" "
      right-text=" "
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
  </div>
</template>

<script>
export default {
  // 顶部导航栏
  name: "TopNav",
  methods: {
    onClickLeft() {
      this.$router.go(-1); //返回上一层
    },
    onClickRight() {}
  }
};
</script>
<style scoped>
.topNav {
  position: fixed;
top: 0px;
left: 0px;
right: 0px;
z-index: 10;
}
</style>

