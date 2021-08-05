<template>
  <div class="Category"><topNav></topNav>
   分类页
   <bottom-nav></bottom-nav>
  </div>
</template>

<script>
import bottomNav from '@/components/bottomNav'
import topNav from "@/components/topNav";
export default {
    // 分类页
  name: 'Category',
 components: {
   bottomNav, topNav
 }
}
</script>
