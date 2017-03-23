<template>
  <div class="contentPage">

    <!--顶部搜索框-->
		<div class="search clearfix">
			<a href="javascript:;" class="search-code" ></a>
			<div class="search-box" @click='tabSearch'>
				惠普幽灵
			</div>
			<a href="javascript:;" class="search-menu"></a>
		</div>
    <Index></Index>
    <!--底部菜单栏-->
		<ul class="bottomMenu">
			<li  class="bottomMenu-xianyuIndex">
				<span class="bottom_sprite"></span>
				<a href="#">闲鱼</a>
			</li>
			<li  class="bottomMenu-fishpond">
				<span class="bottom_sprite"></span>
				<a href="#">鱼塘</a>
			</li>
			<li  class="bottomMenu-publish">
				<span class="bottom_sprite"></span>
				<a href="#">发布</a>
			</li>
			<li  class="bottomMenu-message">
				<span class="bottom_sprite"></span>
				<a href="#">消息</a>
			</li>
			<li  class="bottomMenu-mine">
				<span class="bottom_sprite"></span>
				<a href="#">我的</a>
			</li>
		</ul>
    <Search :show-search='showSearch' v-show='showSearch' @hide-search='hideSearch'></Search>
  </div>
</template>
<script>


import Index from '@/components/index'
import Search from '@/components/Search'

    export default {
      name:"Main",
      data(){
        return {
          showSearch:false,
          list: [],
          busy: false
        }
      },
      components:{
        Index,
        Search
      },
      methods:{
        tabSearch(){
          //切换到搜索页
          console.log(123);
          this.showSearch = true;

          //指向另一个搜索路由

        },
        hideSearch(){
            this.showSearch = false;
        },
        loadMore: function() {
          this.busy = true;

          setTimeout(() => {
            let count = this.list;
            for (var i = 0, j = 10; i < j; i++) {
              this.list.push({ name: count++ });
            }
            this.busy = false;
          }, 1000);
        }
      }
    }
</script>
<style>


.contentPage {
  position: relative;
  width: 100%;
  height:100%;
  overflow: hidden;
}

.home {
  width: 100%;
  height: 100%;
  background: #fff;
  position: absolute;
  left:0px;
  top:0px;
}


</style>
