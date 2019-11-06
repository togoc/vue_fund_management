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
  position: relative;
  top: 60px;
  left: 150px;
  background-image: url(../assets/sea.jpg);
  width: 100%;
  vertical-align: baseline;
  height: 100%;
  overflow: auto;
}

@media screen and (max-width: 850px) {
  .leftcontainar {
    display: none;
  }
  .rightContainer {
    left: 0px;
  }
}
.el-col {
  justify-content: center;
  align-items: center;
}
</style>