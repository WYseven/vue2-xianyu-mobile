<template>
  <div id="app">
    <!-- <img src="./assets/logo.png">
    <transition name='fade'>
      <router-view></router-view>
    </transition> -->
    <input type="button" value='测试弹框'  @click='openDialog'/>
    <input type="button" value='测试弹框1'  @click='messageBoxHandle'/>
    <input type="button" value='测试弹框2'  @click='messageBoxHandle2'/>
    <input type="button" value='自己封装测试测试弹框1'  @click='custom'/>
    <input type="button" value='自己封装测试测试弹框2'  @click='custom2'/>
    <mt-popup
      v-model="popupVisible">
      hello
  </mt-popup>
  </div>
</template>

<script>
import {Dialog} from '@/components/dialog.js'
import messageBox from '@/components/message-box.vue'
import Vue from 'vue';
import { Popup } from 'mint-ui';
Vue.component(Popup.name, Popup);

import { MessageBox } from 'mint-ui';

  export default {
    name:"Main",
    components:{
      messageBox
    },
    data(){
      return {
        show:false,
        popupVisible:false
      }
    },
    methods:{
      openDialog(){
        //this.show = true;
        //Dialog()
        this.popupVisible = true;
      },
      messageBoxHandle(){
        /*MessageBox('提示', '操作成功',function(){
          alert("运动完成")
        });*/
        MessageBox({
          title: '提示',
           message: '确定执行此操作?',
           showCancelButton: true
        });
      },
      messageBoxHandle2(){
        /*MessageBox('提示', '操作成功',function(){
          alert("运动完成")
        });*/
        MessageBox({
          title: '提示22222',
           message: '确定执行此操作?',
           showCancelButton: true
        });
      },
      custom(){
        Dialog({
          title:"自定义标题",
          message:"自定义提示消息"
        });
      },
      custom2(){
        Dialog({
          title:"自定义标题123",
          message:"自定义提示消息123"
        });
      }
    },
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
