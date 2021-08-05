<template>
  <div class="shoppingCart"><topNav></topNav>
    购物车
   <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '@/components/bottomNav'
import topNav from "@/components/topNav";
export default {
  // 购物车页面
  name: 'shoppingCart',
 components: {
   bottomNav, topNav
 }
}
</script>
