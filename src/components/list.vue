<template>
  
    <div class="list">
      <input type="button" value="返回" @click='cancelHome' />
      <ul>
        <li>hello1</li>
      </ul>
    </div>
</template>

<script>

  export default {
    name:"List",
    beforeRouteLeave(to,from,next){
      next();
    },
    methods:{
      cancelHome(){
        this.$router.push('/');
      }
    }
  }
</script>

<style>

  .list {
    width: 100%;
    height: 100%;
    background: red;
    position: absolute;
    left: 0;
    top:0;
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
