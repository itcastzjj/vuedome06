<template>
  <van-tabs  v-model="active" @click="qiehuan">
    
    <van-tab v-for="index in xuangxiangkaData" :title="index.title" :key="index.id">
      
    </van-tab>
  </van-tabs>
  
</template>

<script>
// import { getxuanxiangData } from "@/api/api.js";

export default {
  // 选项卡
  name: "xuangxiangka",
  data() {
    return {
      xuangxiangkaData: [
        { id: 0, title: "精选" },
        { id: 1, title: "畅销" },
        { id: 2, title: "新书" }
      ],
      xuanxiang: { page: 1, recommend: 1 },
      goodsListData: [],
      active: 2,
      dfaf: 1
      // activeName:2
    };
  },
  components: {
    // goodsList
  },
  created() {
    this.qiehuan(0);
  },
  methods: {
    qiehuan(id) {
      
      this.$emit("getxxcId", id);
      // console.log(id)
    }
  }
};
</script>
