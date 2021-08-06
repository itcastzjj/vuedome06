<template>
  <div class="home">
    <topNav></topNav>
    <div class="xuanxiangka" v-show="positionY==1">
      <xuanxiangka @getxxcId="getxxcData"></xuanxiangka>
    </div>

    <div class="wrapper" ref="personWrap">
      <div class="content" ref="personCon">
        <div class="shuaxin">
          <span v-show="spanShow">下拉刷新</span>
          <van-loading size="24px" v-show="loadingShow">加载中...</van-loading>
        </div>
        <div class="slide">
          <slides :slidesData="homeData.slides"></slides>
        </div>
        <crossNav :crossNavData="crossNavData"></crossNav>
        <xuanxiangka @getxxcId="getxxcid"></xuanxiangka>

        <goodsList :goodsListData="goodsListData"></goodsList>
      </div>
    </div>

    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from "@/components/bottomNav";
import topNav from "@/components/topNav";
import slides from "@/components/slides";
import crossNav from "@/components/crossNav";
import xuanxiangka from "@/components/xuanxiangka";
import { getHomeData, getxuanxiangData } from "@/api/api.js";
import BScroll from "@better-scroll/core";
import Pulldown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
import goodsList from "@/components/goodsList.vue";

export default {
  // 首页
  name: "Home",
  data() {
    return {
      homeData: {},
      crossNavData: [],
      timer: "",
      positionY: 0,
      xuanxiang: { new: 0, sales: 0, recommend: 1, page: 1 },
      goodsListData: [],
      loadingShow: 0,
      spanShow: 1
    };
  },
  components: {
    bottomNav,
    topNav,
    slides,
    crossNav,
    xuanxiangka,
    goodsList
  },
  created() {
    this.getHomeDataFun();
  },
  watch: {},
  mounted() {},
  updated() {
    this.aa();
  },
  methods: {
    // 获取首页数据
    getHomeDataFun() {
      getHomeData().then(res => {
        this.homeData = res.data;
        this.crossNavData = res.data.goods.data;
        this.spanShow = 1;
        this.loadingShow = 0;
      });
    },
    // 初始化滚动插件
    aa() {
      this.$nextTick(() => {
        BScroll.use(Pullup);
        BScroll.use(Pulldown);
        this.scroll = new BScroll(this.$refs.personWrap, {
          // startY: 0,
          click: true,
          scrollY: true,
          // 忽略竖直方向的滚动
          scrollX: false,
          resizePolling: 60,
          pullUpLoad: true,
          probeType: 2,
          pullDownRefresh: true
        });
        // 下拉更新
        this.scroll.on("pullingDown", () => {
          console.log("gengxin");
          // await fetchData()
          // 显示加载动画
          this.loadingShow = 1;
          // 隐藏刷新文案
          this.spanShow = 0;
          this.getHomeDataFun();
          this.getxxcData();
          this.scroll.finishPullDown();
        });
        // 上拉加载
        this.scroll.on("pullingUp", () => {
          // await fetchData()
          this.xuanxiang.page = this.xuanxiang.page + 1;

          this.getxxcData();
          this.scroll.finishPullUp();
          console.log("jiazai");
          this.scroll.refresh();
          // console.log(this.xuanxiang.page);
        });
        // this.scroll.on("scroll", position => {

        //     if (position.y <= -300) {
        //       this.positionY = 1;
        //     }
        //     if(position.y > -300){
        //       this.positionY = 0;
        //     }
        // });
      });
    },
    // 获取选项卡数据
    getxxcid(id) {
      // console.log(id);
      if (id == 0) {
        this.xuanxiang.recommend = 1;
        this.xuanxiang.sales = 0;
        this.xuanxiang.new = 0;
      } else if (id == 1) {
        this.xuanxiang.recommend = 0;
        this.xuanxiang.sales = 1;
        this.xuanxiang.new = 0;
      } else if (id == 2) {
        this.xuanxiang.recommend = 0;
        this.xuanxiang.sales = 0;
        this.xuanxiang.new = 1;
      } else {
        this.xuanxiang.recommend = 1;
        this.xuanxiang.sales = 0;
        this.xuanxiang.new = 0;
      }
      this.xuanxiang.page=1
      this.goodsListData=[]
      this.getxxcData()
    },
    getxxcData(){
          getxuanxiangData(this.xuanxiang).then(res => {
        // console.log(this.goodsListData.push(...res.data.goods.data));
        this.goodsListData.push(...res.data.goods.data);
        // console.log(this.goodsListData)
      });
    }
  }
};
</script>
<style scoped>
.home{
  background-color: #fff;
}
.slide {
  width: 100%;
  height: 160px;
  /* margin: 46px 0px 0px 0px; */
}
.xuanxiangka {
  width: 100%;
  /* height: 44px; */
  /* background-color: #222; */
  position: fixed;
  top: 46px;
  z-index: 20;
  /* background-color: rgb(255, 15, 15); */
}
.wrapper {
  position: absolute;
  top: 21px;
  left: 0;
  right: 0;
  width: 100%;
  height: 571px;
  /* overflow: hidden; */
}
.content {
  /* display: inline; */
}
.shuaxin {
  /* height: 25px; */
  width: 100%;
  text-align: center;
  /* background-color: rgb(255, 15, 15); */
}
.shuaxin span {
  line-height: 24px;
}
</style>

