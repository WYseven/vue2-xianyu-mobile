
import Vue from 'vue'
import messageBox from './message-box.vue'

var CONFIRM_TEXT = '确定';
var CANCEL_TEXT = '取消';

const MessageBoxConstructor = Vue.extend(messageBox);

let instance = null;

let msgQueue = [];  //消息队列

let currentMsg = null;

//默认参数
var defaults = {
  title: '提示',  //标题
  message: '',    //内容
  type: '',       //弹框类型 'alert'
  showCancelButton:false,  //是否返回按钮
  confirmButtonText: CONFIRM_TEXT,
  cancelButtonText: CANCEL_TEXT,
}
//合并对象
var merge = function(target) {
  for (var i = 1, j = arguments.length; i < j; i++) {
    var source = arguments[i];
    for (var prop in source) {
      if (source.hasOwnProperty(prop)) {
        var value = source[prop];
        if (value !== undefined) {
          target[prop] = value;
        }
      }
    }
  }

  return target;
};


function initInstance(){
	//组件的构造函数
	instance = new MessageBoxConstructor({
		el: document.createElement('div')
	});	
}




function showNextMeg(){
	
	if(!instance){
		initInstance();
	}

	//把msgQueue中的配置给到instance
	if(msgQueue.length > 0){

		currentMsg = msgQueue.shift();

		var options = currentMsg.options;
		//把配置参数都给到instance
		for (var prop in options) {
			if (options.hasOwnProperty(prop)) {
			  instance[prop] = options[prop];
			}
		}


		document.body.append(instance.$el);

		Vue.nextTick(function (){
			instance.value = true;	
		})

	}
	
}


//接收标题和内容
function Dialog (options){

	//添加弹框的配置信息
	msgQueue.push({
		options:merge({},defaults,options)
	})

	showNextMeg()
};


export {Dialog}

