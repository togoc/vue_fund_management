<template>
  <div class="leftcontainar">
    <el-row class="nav">
      <el-col>
        <el-menu
          :default-active="path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <router-link to="/index">
            <el-menu-item index="/index">
              <i class="el-icon-menu"></i>
              <span slot="title">首页</span>
            </el-menu-item>
          </router-link>
          <router-link to="/form">
            <el-menu-item index="/form">
              <i class="el-icon-menu"></i>
              <span slot="title">资金管理</span>
            </el-menu-item>
          </router-link>
          <router-link to="/info">
            <el-menu-item index="/info">
              <i class="el-icon-setting"></i>
              <span slot="title">个人信息</span>
            </el-menu-item>
          </router-link>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return { path: "" };
  },
  created() {
    this.path= this.$route.path
  }
};
</script>


<style  scoped>
.leftcontainar {
  background-color: #324057;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  box-sizing: border-box;
  padding-top: 60px;
  width: 150px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
}
.el-col,
.el-menu-item {
  width: 150px;
  min-width: 150px;
}
.el-menu {
  border: 0;
}
.nav {
  border-top: 1px solid #1f2d3d;
}
</style>