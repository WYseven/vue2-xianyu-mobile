
function getDOM(el){
	
	return el;
}

export default {
	props:{
		value:{
			type:Boolean,
			defalt:false
		}
	},
	beforeDestroy(){
		console.log("写在");
	},
	methods:{
		open(){
			//创建modal

			this.modalDom = document.createElement('div');
			this.modalDom .className = 'mask'; 
			this.modalDom .className += ' mask-transtion';
		    this.modalDom .addEventListener('touchmove', function(event) {
		      event.preventDefault();
		      event.stopPropagation();
		    });

		    this.modalDom .addEventListener('click', () => {
		      	this.doOnModalClick && this.doOnModalClick();
		    });

		     document.body.appendChild(this.modalDom );

		},
		doOnModalClick(){
			console.log(111);
			this.cancel();
		},
		closeModal(){
			document.body.removeChild(this.modalDom)
		}
	},
	watch:{
		value(val){
			if(val){
				this.open();
			}
		}
	}
}