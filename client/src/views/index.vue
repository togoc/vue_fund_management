<template>
  <div class="index">
    <HeadNav></HeadNav>
    <LeftMean></LeftMean>
    <div class="rightContainer">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeadNav from "../components/header";
import LeftMean from "../components/leftNav";

export default {
  name: "home",
  components: {
    HeadNav,
    LeftMean
  }
};
</script>

<style scoped>
.index {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  overflow: hidden;
}
.rightContainer {
  position: fixed;
  top: 0;
  left: 150px;
  background-color: rgba(0, 0, 0, .2);
  width: 100%;
  height: 100%;
  overflow: auto;
}
.el-col{
 justify-content: center;
 align-items: center;
}
</style>