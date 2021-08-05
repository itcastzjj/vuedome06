<template>
  <van-card
    v-for="item in goodsListData"
    :key="item.id"
    :num="item.sales"
    :price="item.price"
    :desc="item.description"
    :title="item.title"
    :thumb="item.cover_url"
    @click="goxiangqing(item.id)"
  />
</template>

<script>
export default {
  // 商品列表
  name: "goodsLlis",
  data() {
    return { aa: 0 };
  },
  methods: {
    goxiangqing(id) {
      // console.log(id);
      this.aa = this.aa + 1;
      // console.log(this.aa);
      this.$router.push({path:'/xiangqing',query:{id:id}})
    }
  },
  mounted() {
    // console.log('3')
  },
  props: {
    goodsListData: Array
  }
};
</script>
<style scoped>
</style>

