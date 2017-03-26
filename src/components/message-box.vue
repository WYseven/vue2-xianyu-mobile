<template>
	<transition name='ts-dialog'>
		<div class="dialog" v-show="value">
			<h2 v-if="title!==''">{{title}}</h2>
			<div class="contents">
				{{message}}
			</div>
			<div>
				<span @click='cancel'>{{cancelButtonText}}</span>
				<span>{{confirmButtonText}}</span>
			</div>
		</div>
	</transition>
</template>
<script>
import Popup from './popup.js'
var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';
   export default {
   		mixins:[Popup],
   		data(){
   			return {
				title: '提示',  //标题
				message: '',    //内容
				type: '',       //弹框类型 'alert'
				showCancelButton:false,  //是否返回按钮
				confirmButtonText: CONFIRM_TEXT,
				cancelButtonText: CANCEL_TEXT,
   			}
   		},
   		methods:{
   			cancel(){
   				this.value = false;
   				this.closeModal();
   			}
   		}
   }
</script>

<style>
	.dialog {
		width: 50%;
		height: 10%;
		background: #fff;
		position: absolute;
		left: 50%;
		top:50%;
		transform: translate3d(-50%,-50%,0);
		z-index:2;
	}
	.mask {
		width: 100%;
		height: 100%;
		background: #000;
		opacity: 0;
		position: absolute;
		left: 0;
		top: 0;
		transition: .5s;
	}
	.mask-transtion {
		opacity: .5;
	}

	.ts-dialog-enter {
		transform: translate3d(-50%,-50%,0) scale(0);
	}
	.ts-dialog-enter-active {
		transition: .2s;
	}
	.ts-dialog-enter-to {
		transform: translate3d(-50%,-50%,0) scale(1);
	}

	.ts-dialog-leave {
		transform: translate3d(-50%,-50%,0) scale(0);
	}

	.ts-dialog-leave-active {
		transition: .2s;
	}
	.ts-dialog-leave-to {
		transform: translate3d(-50%,-50%,0) scale(0);
	}

</style>