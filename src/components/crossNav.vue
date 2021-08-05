<template>
  <div class="person-wrap" ref="personWrap">
    <ul class="person-list" ref="personTab">
      <!-- <li class="person-item" v-for="(item,index) in crossNavData.data" :key="index">
          <img :src="item.cover_url" alt="">
          
      </li>-->
      <li v-for="(item,index) in crossNavData" :key="index">
        <img :src="item.cover_url" alt>
        <span>{{item.title}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";

export default {
  // 横向导航
  name: "crssNav",
  data() {
    return {
      width: 0
    };
  },
  props: {
    crossNavData: Array
  },
  watch: {
    crossNavData: "personScroll"
  },
  //   created() {
  //     this.$nextTick(() => {

  //       this.personScroll();
  //     });
  //   },
  methods: {
    personScroll() {
      // 默认有六个li子元素，每个子元素的宽度为120px
      //   console.log(this.$props.crossNavData.length);
      //   console.log(this.$props);
      let changdu = this.$props.crossNavData.length;
      let width = changdu * 120;
      this.$refs.personTab.style.width = width + "px";
      console.log(width);

      // this.$nextTick 是一个异步函数，为了确保 DOM 已经渲染
      this.$nextTick(() => {
        if (!this.scroll) {
          this.scroll = new BScroll(this.$refs.personWrap, {
            startX: 0,
            click: true,
            scrollX: true,
            // 忽略竖直方向的滚动
            scrollY: false,
            eventPassthrough: "vertical"
          });
        } else {
          this.scroll.refresh();
        }
      });
    }
  }
};
</script>
<style scoped>
.person-wrap {
  height: 140px;
  background-color: rgb(250, 250, 250);
  /* display: inline; */
  /* white-space: nowrap; */
  overflow: hidden;
}
.person-list {
  height: 100px;
  /* width: 450px; */
  /* overflow: scroll; */
}
.person-list li {
  width: 110px;
  height: 135px;        
  background-color: rgb(255, 255, 255);
  /* display: inline-block; */
  float: left;
  text-align: center;
}
.person-list li img {
  width: 100%;
}
.person-list li span{
    font-size: 12px;
}
</style>

