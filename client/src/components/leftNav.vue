<template>
  <div class="leftcontainar">
    <el-row>
      <el-col>
        <el-menu
          default-active=""
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <el-menu-item index="1">
            <i class="el-icon-menu"></i>
            <span slot="title"><router-link to="/form">资金管理</router-link></span>
          </el-menu-item>
          <el-menu-item index="2">
            <i class="el-icon-menu"></i>
            <span slot="title">人员管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-setting"></i>
            <span slot="title"><router-link to="/info">个人信息</router-link></span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>



<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
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

</style>