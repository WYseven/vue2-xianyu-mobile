<template>
  <div class="main">
    <input type="" name="" @focus="tabSearch" />
    <div class="content">
      闲鱼主页
    </div>
  </div>
</template>
<script>
    import Search from '@/components/Search'
    export default {
      name:"Main",
      component:{
        Search
      },
      methods:{
        tabSearch(){
          //切换到搜索页
          //指向另一个搜索路由
        }
      }
    }
</script>
<style>

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
