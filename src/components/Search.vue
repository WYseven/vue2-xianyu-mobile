<template>
  <transition name='fade'>
    <div class="search2">
      <input type="file" />
      <input type="datetime-local" />
      <h1>搜索页</h1>
      <input type="text" value="搜索" ref='searchInput' />
      <input type="button" value="取消" @click="cancel" />
      <ul>
        <li>
          <router-link to='/list'>手机</router-link>
        </li>
      </ul>

    </div>

  </transition>
</template>
<script>
    export default {
      name:"Search",
      props:['showSearch'],
      watch:{
          showSearch(value){
            if( value ){
              setTimeout(()=>{
                this.$refs['searchInput'].focus();
              },200)
            }

          }
      },
      mounted(){
        this.$refs['searchInput'].focus();
      },
      methods:{
        cancel(){
          this.$emit("hide-search");
        }
      }
    }
</script>
<style>


  .search2 {
    width: 100%;
    height: 100%;
    background: #fff;
    position: absolute;
    left:0px;
    top:0px;
    z-index: 5;
  }

  .fade-enter {
    transform: translateX(100%);
  }
  .fade-enter-active,.fade-leave-active {
      transition: .5s;
  }
  .fade-enter-to {
    transform: translateX(0px);
  }

  .fade-leave {
      opacity: 1;
  }
  .fade-leave-to {
      opacity: 0;
      transform: scale(.5);
  }




</style>
