<template>
  <div class="search" ref='search'>
    <h1>搜索页</h1>
    <input type="text" value="搜索" />
    <input type="button" value="取消" @click="cancel" />
  </div>
</template>
<script>
    export default {
      name:"Search",
      methods:{
        cancel(){

        }
      }
    }
</script>
<style>


.search {
  width: 100%;
  height: 100%;
  background: green;
  position: absolute;
  left:0px;
  top:0px;
  transform: translateX(100%);
  transition: .5s;
}



  .fade-enter {
    transform: translateX(750px);
  }
  .fade-enter-active {
      transition: 5s;
  }
  .fade-enter-to {
    transform: translateX(0px);
  }

  .fade-leave {
    opacity: 1;
  }
  .fade-leave-active {
      transition: .3s;
  }
  .fade-leave-to {
    opacity: 0;
  }




</style>
