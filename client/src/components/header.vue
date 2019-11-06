<template>
  <div class="header">
    <header class="head">
      <router-link to="/index">
        <div class="logo">
          <!-- <img src="../assets/logo.png" alt /> -->
          Logo
        </div>
      </router-link>
      <div class="islogin">
        <img :src="user.avatar" alt />
        <el-dropdown>
          <el-button size="mini" type>
            欢迎
            <span class="name">{{user.name}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </el-button>
          <el-dropdown-menu slot="dropdown" size="small">
            <el-dropdown-item>
              <router-link to="/info">个人信息</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link to="/login">注销登录</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>


<script>
export default {
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  components: {},
  data() {
    return {
      name: "12"
    };
  },

  created: function() {
   this.name = this.$store.state.user.name
  }
};
</script>



<style scoped >
.head {
  z-index:11;
  box-sizing: border-box;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 60px;
  background-color:#324057;
  display: flex;
  padding-left: 1%;
  justify-content: space-between;
}
.el-dropdown-menu a{
color: #000000;
}
.head > div {
  height: 100%;
}
.islogin,
.head {
  margin-right: 2%;
  display: flex;
  flex-direction: row;
  align-items: center;
}
.logo img,
.islogin img {
  display: inline-block;
  width: 45px;
  height: 45px;
  margin: 5px;
}
.logo {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: bold;
}
.name {
  color: blue;
  font-weight: bold;
}
.el-dropdown {
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  white-space: nowrap;
}
.el-button {
  border: 0;
  background-color: rgba(231, 23, 23, 0);
}
</style>