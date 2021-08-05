<template>
  <div class="me"><topNav></topNav>
    我的页面
   <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '@/components/bottomNav'
import topNav from "@/components/topNav";
export default {
  // 我的页面
  name: 'Me',
 components: {
   bottomNav, topNav
 }
}
</script>
