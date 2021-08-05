<template>
  <div class="bottomNav">
    <van-tabbar v-model="active">
      <van-tabbar-item>
        <router-link class="aa" to="/home">
          <i class="iconfont icon-shouye"></i>
          <span>首页</span>
        </router-link>
      </van-tabbar-item>

      <van-tabbar-item>
        <router-link class="aa" to="/category">
          <i class="iconfont icon-leimupinleifenleileibie"></i>
          <span>分类</span>
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link class="aa" to="/shoppingCart">
          <i class="iconfont icon-3"></i>
          <span>购物车</span>
        </router-link>
      </van-tabbar-item>
      <van-tabbar-item>
        <router-link class="aa" to="/me">
          <i class="iconfont icon-wode"></i>
          <span>我的</span>
        </router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "bottomNav",
  data() {
    return {
      active: 0
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "../css/icon/iconfont.css";
.van-tabbar-item__text {
  display: flex;
}
.aa {
  /* display: flex; */
  display: block;
  text-align: center;
}
.aa i {
  /* flex: 1; */
  /* display: inherit; */
  /* margin: 5px auto; */
  font-size: 20px;
  line-height: 28px;
}
.aa span {
  /* flex: 1; */
  display: inherit;
}
</style>
