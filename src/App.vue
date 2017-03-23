<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <transition name='fade'>
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

  export default {
    name:"Main",
    watch:{
      '$route'(to,from){
        const toDepth = to.path.split('/')[1]
        const fromDepth = from.path.split('/')[1]

      }
    }
  }
</script>

<style>

html{
  width:100%;
  height: 100%;
}
body {
  width: 100%;
  height: 100%;
  margin:0px;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  -overflow: hidden;
}

  .fades-enter {
    transform: translateX(100%);
  }
  .fades-enter-active,.fade-leave-active {
      transition: .3s;
  }
  .fades-enter-to {
    transform: translateX(0px);
  }

  .fades-leave {
      opacity: 1;
  }
  .fades-leave-to {
      opacity: 0;
  }


</style>
