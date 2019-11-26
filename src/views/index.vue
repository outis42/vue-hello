<template>
  <el-container style="height:100%">
    <el-container>
      <el-aside width="202px" style="box-shadow:0 5px 20px rgba(0, 0, 0, 0.50)">
        <leftnav></leftnav>
      </el-aside>
      <el-container>
        <el-header style="padding:0">
          <navcon></navcon>
        </el-header>
        <el-main style="height:100%">
          <transition name="fade-transform" mode="out-in">
            <router-view/>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
// 导入组件
import navcon from "@/components/navcon.vue";
import leftnav from "@/components/leftnav.vue";
export default {
  // 注册组件
  components: {
    navcon,
    leftnav
  },
};
</script>
