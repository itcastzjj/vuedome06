<template>
  <div class="xiangqing">
    <topNav></topNav>
    <van-image :src="goods.cover_url"/>
    <p class="title">{{goods.title}}</p>
    <p class="description">{{goods.description}}</p>
    <p class="price">
      <span class="_price">￥</span>
      <span class="_price_">{{goods.price}}</span>
    </p>
    <van-tabs v-model="active">
      <van-tab title="概述" class="gaishu">
        <div class="content" ref="content" ><img :src="img_data"  alt=""></div>
      </van-tab>
      <van-tab title="评论">
        <div v-show="goods.comments" class="zanwu">暂无评论</div>
        <div class="pinglun" v-for="(item,index) in goods.comments" :key="index">
          <p class="pinglun_neirong">{{item.content}}</p>
          <p class="pinglun_use">
            <van-image round width="18px" height="18px" :src="item.user.avatar"/>
            <span class="pinglun_usename">{{item.user.name}}</span>
            <span class="pinglun_time">{{item.created_at}}</span>
          </p>
        </div>
      </van-tab>
      <van-tab title="相似">
        <div class="xiangsi" v-for="(item,index) in like_goods" :key="index">
          <van-image :src="item.cover_url"/>
          <p class="xiangsi_title">{{item.title}}</p>

          <p class="xiangsi_button">
            <span class="xiangsi_button_price">￥</span>
            <span class="xiangsi_button_price_">{{item.price}}</span>
            <span class="xiangsi_button_shoucang">{{item.collects_count}}</span>
            <i class="iconfont icon-shoucang1"></i>
          </p>
        </div>
      </van-tab>
    </van-tabs>
    <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from "@/components/bottomNav";
import topNav from "@/components/topNav";
import { getxiangqingData } from "@/api/api.js";
export default {
  // 详情页
  name: "xiangqing",
  components: {
    bottomNav,
    topNav
  },
  data() {
    return {
      active: 2,
      xiangqingshuju: {},
      goods: {},
      like_goods: [],
      img_data: "",
      html:
        '"<img src="https://oss.shop.eduwork.cn/article/2020-0820-5f3e156693783.jpg" alt="qq2.jpg" width="750" height="6028" />"'
    };
  },
  created() {
    this.getxiangqingyeData();
  },
  mounted() {},
  methods: {
    getxiangqingyeData() {
      // console.log();
      // console.log(this.$route.query.id);
      getxiangqingData({ good: this.$route.query.id }).then(res => {
        console.log(res);

        if (res.status == 200) {
          // console.log(res.data);
          var data = res.data;

          this.xiangqingshuju = res.data;
          this.goods = this.xiangqingshuju.goods;
          this.like_goods = this.xiangqingshuju.like_goods;
          // this.filder()

          var data1 = (data.goods.details);
          var b=data1.search("src"),e=data1.search(".jpg")
          data1=data1.slice(b+5,e+4)

          console.log(data1);
          this.img_data=data1;
        }
        // alert(1) youxianji
      });
    },
    filder() {
      this.$nextTick(() => {
        console.log(this.$refs.content);
        let img = this.$refs.content.querySelectorAll(".content img");
        for (let i = 0; i < img.length; i++) {
          img[i].style.width = "100%";
          img[i].style.height = "auto";
        }
      });
    }
  }
};
</script>
<style scoped>
.content img {
  max-width: 100%;
  height: auto;
  /* display: block; */
}
p,
img {
  margin: 0;
  padding: 0;
}
.xiangqing {
  background-color: rgb(245, 245, 245);
}
.my-swipe .van-swipe-item {
  /* color: #fff; */
  /* font-size: 20px; */
  /* line-height: 150px; */
  /* text-align: center; */
  /* background-color: #39a9ed; */
  /* width: 640px;height: 480px; */
  /* width: 375px; */
}
.gaishu .van-image {
  vertical-align: top;
}

.description {
  font-size: 14px;
  color: rgb(59, 59, 59);
}
.price {
  color: red;
}
.price ._price {
  font-size: 14px;
}
.price ._price_ {
  font-size: 24px;
}
.pinglun {
  width: 100%;
  margin: 5px 0;
  background-color: #fff;
  /* height: 200px; */
  /* background-color: red; */
}
.pinglun .pinglun_neirong {
  /* width: 100%; */
  padding: 15px 10px;
  word-wrap: break-word;
  /* height: 180px; */
  /* background-color: rgb(255, 97, 97); */
}
.pinglun .pinglun_use {
  width: 100%;
  height: 20px;
  /* background-color: rgb(253, 165, 165); */
  line-height: 20px;
}
.pinglun .pinglun_use .van-image {
  width: 18px;
  height: 18px;
  float: left;
  margin: 0 5px;
}
.pinglun .pinglun_use .pinglun_usename {
  float: left;
  font-size: 14px;
  margin: 0 5px;
}
.pinglun .pinglun_use .pinglun_time {
  float: right;
  font-size: 12px;
  margin: 0 5px;
}
.clearfix:after {
  /*伪元素是行内元素 正常浏览器清除浮动方法*/
  content: "";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix {
  *zoom: 1; /*ie6清除浮动的方式 *号只有IE6-IE7执行，其他浏览器不执行*/
}
.van-tab {
  /* background-color: rgb(243, 32, 32); */
}
.xiangsi {
  width: 177px;
  display: inline-block;
  padding: 5px;
  margin: 5px;
  box-sizing: border-box;
  background-color: rgb(255, 255, 255);
}
.xiangsi .van-image {
  width: 100%;
}
.xiangsi .xiangsi_title {
  font-size: 20px;
  color: rgb(0, 0, 0);
  line-height: 30px;
  word-wrap: break-word;
}
.xiangsi .xiangsi_miaoshu {
  font-size: 14px;
  color: rgb(131, 131, 131);
  line-height: 20px;
  word-wrap: break-word;
}
.xiangsi_button {
  overflow: hidden;
}
.xiangsi_button .xiangsi_button_price {
  color: rgb(255, 0, 0);
}
.xiangsi_button .xiangsi_button_price_ {
  color: rgb(255, 0, 0);
  font-size: 24px;
}
.xiangsi_button .xiangsi_button_shoucang {
  color: rgb(255, 0, 0);
  font-size: 18px;
  float: right;
  line-height: 34px;
}
.xiangsi_button i {
  color: rgb(255, 0, 0);
  font-size: 18px;
  float: right;
  line-height: 30px;
}
.zanwu {
  width: 100%;
  height: 100px;
  background-color: #fff;
  text-align: center;
  line-height: 100px;
  color: rgb(194, 194, 194);
}
</style>