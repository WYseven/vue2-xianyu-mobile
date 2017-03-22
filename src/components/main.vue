<template>
  <div class="content">
    <div class="home">
        <h1>这是首页</h1>
        <input type="button" value="搜索" @click='tabSearch' />
    </div>
    <Search ref='search'></Search>
  </div>
</template>
<script>


  import Search from '@/components/Search'

    export default {
      name:"Main",
      data(){
        return {
          showSearch:true
        }
      },
      components:{
        Search
      },
      methods:{
        tabSearch(){
          //切换到搜索页

          this.showSearch = true;

          //指向另一个搜索路由
          //this.$router.push('/search');
          /*this.$refs['search'].$el.style.transform = 'translateX(0px)'
          this.$refs['search'].$el.style.opacity = '1'*/

        },
        changeShow(){
            this.showSearch = false;
        }
      }
    }
</script>
<style>

.content {
  position: relative;
  width: 100%;
  height: 1000px;
  overflow: hidden;
  background: red;
}

.home {
  width: 100%;
  height: 100%;
  background: blue;
  position: absolute;
  left:0px;
  top:0px;
}

.search {
  width: 100%;
  height: 100%;
  background: green;
  position: absolute;
  left:0px;
  top:0px;
  transform: translateX(100%);
  transition: 1s;
}



</style>
