<template>
  <div class="home">
    <h1>欢迎来到这里啊</h1>
    <p>这里是哪里啊?</p>
    <p>
      <router-link class="tips" to="/form">点击前往表单</router-link>
    </p>
  </div>
</template>




<script>
export default {};
</script>


<style  scoped>
.home {
  color: white;
  padding-top: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: bold;
}
.home p {
  padding-top: 20px;
  font-size: 30px;
}
.tips {
  color: blue;
}
</style>