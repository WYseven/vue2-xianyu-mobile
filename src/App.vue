<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view></router-view> -->

    <div class="main">
      <input type="" name="" />
      <div class="content">
        闲鱼主页
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.main {
  border: 1px solid #000;
  height: 1000px;
}

input{
  width: 80%;
  height: 30px;
  margin-top:10px;
}

.content {
  font-size: 50px;
}

</style>
