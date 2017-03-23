<template>
<div class="scroll" id="wrapper" >
	<div class="content">
		<div class="banner">
			<ul class="banner-imgList">
				<li><img src="/static/images/banner1.png"></li>
				<li><img src="/static/images/banner1.png"></li>
			</ul>
			<p class="banner-dot">
				<a href="javascript:;"></a>
				<a href="javascript:;"></a>
				<a href="javascript:;" class="banner-dot-active"></a>
				<a href="javascript:;"></a>
			</p>
		</div>
		<!--topic专题-->
		<div class="topic clearfix">
			<dl class="topic-item">
				<dd>
					<h3 class="topic-heading">闲鱼精选<span class="topic-hot"></span></h3>
					<p class="topic-describe">这里有好东西</p>
				</dd>
				<dt class="topic-img">
					<a href="javascript:;">
						<img src="/static/images/topic1.png" />
					</a>
				</dt>
			</dl>
			<dl class="topic-item">
				<dd>
					<h3 class="topic-heading">拍卖</h3>
					<p class="topic-describe">一元起拍捡漏</p>
				</dd>
				<dt class="topic-img">
					<a href="javascript:;">
						<img src="/static/images/topic2.png" />
					</a>
				</dt>
			</dl>
			<dl class="topic-item">
				<dd>
					<h3 class="topic-heading">同城</h3>
					<p class="topic-describe">选闲置更靠谱</p>
				</dd>
				<dt class="topic-img">
					<a href="javascript:;">
						<img src="/static/images/topic3.png" />
					</a>
				</dt>
			</dl>
			<dl class="topic-item">
				<dd>
					<h3 class="topic-heading">我要租房</h3>
					<p class="topic-describe">3分钟租到房</p>
				</dd>
				<dt class="topic-img">
					<a href="javascript:;">
						<img src="/static/images/topic4.png" />
					</a>
				</dt>
			</dl>
		</div>
		<!--product产品专栏部分-->
		<ul class="product clearfix">
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">键设党</h3>
						<p class="product-description">32个新宝贝入塘</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project1.png" />
						</a>
					</dt>
				</dl>
			</li>
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">法院卖货</h3>
						<p class="product-description">iphone千元起拍</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project2.png" />
						</a>
					</dt>
				</dl>
			</li>
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">国粉PY部落</h3>
						<p class="product-description">444个新宝贝入塘</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project3.png" />
						</a>
					</dt>
				</dl>
			</li>
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">闲鱼奇货</h3>
						<p class="product-description">每日上新20件，件件新奇</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project4.png" />
						<span class="product-hot"></span>
						</a>
					</dt>
				</dl>
			</li>
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">[技能]做手工</h3>
						<p class="product-description">用手艺赚钱，点赞！</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project5.png" />
						</a>
					</dt>
				</dl>
			</li>
			<li class="product-list clearfix">
				<dl class="product-item clearfix">
					<dd class="product-describe">
						<h3 class="product-heading">实拍穿搭</h3>
						<p class="product-description">今日实拍已上新</p>
					</dd>
					<dt class="product-img">
						<a href="javascript:;">
						<img src="/static/images/project6.png" />
						</a>
					</dt>
				</dl>
			</li>
		</ul>
		<!--广告部分-->
		<div class="advertise">
			<a href="javascript:;">
				<img src="/static/images/advertise1.png" />
			</a>
		</div>
		<!--加入鱼塘-->
		<div class="join clearfix">
			<div class="join-item">
				<h3 class="join-name">南一村</h3>
				<p class="join-number">
					<span class="jion-publishNum">发布数24</span>
					<span class="jion-popularityNum">昨日人气+8</span>
				</p>
				<p class="join-notice">公告</p>
				<div class="join-img clearfix">
					<img src="/static/images/join1.png" />
					<img src="/static/images/join2.png" />
					<img src="/static/images/join3.png" class="margin0"/>
				</div>
				<div class="join-attention">
					<span class="join-icon"></span>已关注
				</div>
			</div>
		</div>
		<!--商品详细信息detail-->
		<div class="detail">
			<div class="detail-nav">
				<div class="detail-navItem">
					<span class="detail-navActive">新鲜的</span>
				</div>
				<div class="detail-navItem">
					<span>附近的</span>
				</div>
			</div>
			<div class="detail-list">
				<!--有一张大图两张小图的商品列表-->
				<div 
					class="detail-listItem" 
					v-for="item of list"
				>
					<div class="detail-firstlist">
						<!--放用户名和商品价格-->
						<div class="detail-listsketch">
							<dl class="detail-username">
								<dt class="detail-usernameImg">
									<a href="javascript:;">
										<img src="/static/images/user1.png" />
									</a>
								</dt>
								<dd class="detail-userdescribe">
									<h4 class="detail-name">
										{{item}}
										<span class="detail-userGrade1"></span>
									</h4>
									<p class="detail-visited1">2小时前来过</p>
								</dd>
							</dl>
							<div class="detail-price">
								¥1600/月
							</div>
						</div>
						<!--放商品图片和商品描述-->
						<dl class="detail-firstListParticular">
							<dt class="detail-firstParticularImg clearfix">
									<img v-lazy='urlImg' class="detail-firstImg"/>
									<img v-lazy='urlImg2' />
									<img v-lazy='urlImg3' />
							</dt>
							<dd class="detail-particularDescribe">
								出租西二旗地铁站附近单间 次卧 主卧 3家合住 押一付一 包物业取暖 无杂费 随时入住
							</dd>
						</dl>
						<!--主人回复部分-->
						<div class="detail-reply">
							<p class="detail-replyContent">
								主人回复：次卧
							</p>
							<p class="detail-replyContent">
								艾菲尔不流泪：1600是次卧还是主卧
							</p>
						</div>
						<!--商品发布地点-->
						<div class="detail-lastpart">
							<div class="detail-place">
								<span>1.3km</span> |
								<span>回龙观新村小区</span>
							</div>
							<div class="detail-data">
								<span>点赞12</span>·
								<span>留言4</span>
							</div>
						</div>
					</div>
				</div>
				<p v-show="loding">loding....</p>
			</div>
		</div>
		
	</div>
</div>
</template>

<script>
	import BScroll from 'better-scroll'
	export default {
		data(){
			return {
				list:[1,2],
				buy:false,
				loding:true,
				urlImg:'/static/images/firstlist1.png',
				urlImg2:'/static/images/firstlist2.png',
				urlImg3:'/static/images/firstlist3.png',
			}
		},
		name:"Index",
		directives:{
		},
		mounted(){

			//滚动高度计算不正确

			var wrapper = document.getElementById('wrapper')
			var content = wrapper.getElementsByClassName('content')[0]
			var scroll = new BScroll(wrapper,{
				probeType:3
			});

			var s = content.offsetHeight;
			var o = wrapper.offsetHeight;
			var rh = (s-o);

			this.$nextTick(function (){
				scroll.refresh();
				
			});

			var _this = this;
			var c = 0;
			var isScroll = true;
			scroll.on("scroll",function (pos){
				if( isScroll ){
					console.log(s);
					if(rh - Math.abs(pos.y) < 50){
						isScroll = false;
						_this.loding = true;
						//模拟数据
							setTimeout(()=>{
								_this.list.push(c++);
								_this.$nextTick(function (){
									scroll.refresh();
									s = content.offsetHeight;
									rh = (s-o);
									isScroll = true;
									_this.loding = false;	
								});

							},500);
						
					}
				}
			})
		},
		methods:{
			loadMore(){
				console.log(11111);
				this.busy = true;
				var count = 0;
				setTimeout(() => {
					for (var i = 0, j = 10; i < j; i++) {
					  this.list.push(count++);
					}
					this.busy = false;
				}, 1000);
			}
		}
	}
</script>
<style>
	.scroll {
		position: fixed;
		left: 0;
		right: 0;
		top:0px;
		bottom: 6.39130435rem;
	}
	body * {
  font-size: 1.47826087rem;
  box-sizing: border-box;
}
ul {
	list-style: none;
	padding:0;
	margin: 0;
}
html {
  height: 100%;
  position: relative;
  overflow: hidden;
}
body {
  height: 100%;
  overflow: auto;
  background: #f3f5f9;
}
.content {
  overflow: hidden;
  margin-bottom: 9rem;
}
.search {
  width: 54rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 5.65217391rem;
  background-color: #ffda44;
  z-index: 3;
}
.search .search-code {
  float: left;
  width: 6.91304348rem;
  height: 5.65217391rem;
  background: url(/static/images/code.png) no-repeat 1.65217391rem 1.65217391rem;
  background-size: 2.52173913rem 2.34782609rem;
}
.search .search-box {
  float: left;
  width: 40.17391304rem;
  height: 3.91304348rem;
  margin-top: 0.86956522rem;
  position: relative;
  border-radius: 0.43478261rem;
  background: #fff;
  color: #999999;
  text-align: center;
  line-height: 3.91304348rem;
}
.search .search-box:before {
  display: inline-block;
  content: "";
  background: url(/static/images/glass.png) no-repeat;
  width: 1.69565217rem;
  height: 1.69565217rem;
  background-size: 1.69565217rem 1.69565217rem;
  vertical-align: top;
  margin-top: 1.17391304rem;
}
.search .search-menu {
  float: left;
  width: 6.91304348rem;
  height: 5.65217391rem;
  background: url(/static/images/menu.png) no-repeat 2.69565217rem 1.7826087rem;
  background-size: 2.52173913rem 2.08695652rem;
}
.banner {
  height: 20.13043478rem;
  position: relative;
  overflow: hidden;
  margin-top: 5.60869565rem;
}
.banner .banner-imgList {
  position: absolute;
  left: 0;
  top: 0;
  width: 400%;
}
.banner .banner-imgList li {
  float: left;
  width: 54rem;
}
.banner .banner-imgList img {
  display: block;
  width: 54rem;
}
.banner .banner-dot {
  position: absolute;
  left: 0;
  bottom: 0.60869565rem;
  width: 100%;
  height: 0.60869565rem;
  text-align: center;
}
.banner .banner-dot a {
  display: inline-block;
  width: 0.52173913rem;
  height: 0.52173913rem;
  background: #333333;
  vertical-align: top;
  border-radius: 6px;
  margin-right: 0.30434783rem;
}
.banner .banner-dot .banner-dot-active {
  background: #ffda44;
}
.topic {
  background: #fff;
  text-align: center;
  margin-bottom: 1.56521739rem;
}
.topic .topic-item {
  width: 25%;
  height: 16.08695652rem;
  float: left;
  line-height: 2.69565217rem;
  border-right: 1px solid #fbfbfd;
}
.topic .topic-item dd {
  height: 7.65217391rem;
}
.topic .topic-heading {
  font-size: 1.91304348rem;
  font-weight: bold;
  padding-top: 1.30434783rem;
  position: relative;
}
.topic .topic-heading .topic-hot {
  position: absolute;
  background: url(/static/images/icon_sprite.png) no-repeat left bottom;
  background-size: 3.47826087rem 26.69565217rem;
  width: 2.56521739rem;
  height: 1.73913043rem;
  margin-top: 0.39130435rem;
}
.topic .topic-describe {
  font-size: 1.73913043rem;
  color: #a4a4a4;
}
.topic .topic-img {
  height: 8.43478261rem;
}
.topic .topic-img img {
  width: 8.95652174rem;
  height: 7.56521739rem;
}
.product {
  background: #fff;
  margin-bottom: 1.56521739rem;
}
.product .product-list {
  float: left;
  height: 10.95652174rem;
  width: 50%;
  border: 1px solid #e7e7e7;
  border-width: 0 1px 1px 0;
}
.product .product-img {
  float: right;
  width: 7.30434783rem;
  padding-top: 2.60869565rem;
  position: relative;
}
.product .product-img img {
  width: 5.7826087rem;
  height: 5.7826087rem;
}
.product .product-img .product-hot {
  position: absolute;
  background: url(/static/images/icon_sprite.png) no-repeat left -7.13043478rem;
  width: 3.30434783rem;
  height: 2.82608696rem;
  top: 1.30434783rem;
  left: 3.04347826rem;
  background-size: 3.47826087rem 26.69565217rem;
}
.product .product-describe {
  float: left;
  width: 16.52173913rem;
  line-height: 2.17391304rem;
  padding-left: 42px;
}
.product .product-describe .product-heading {
  font-size: 1.73913043rem;
  font-weight: bold;
  padding-top: 2.56521739rem;
  padding-bottom: 0.73913043rem;
}
.product .product-describe .product-description {
  font-size: 1.47826087rem;
  color: #9c9c9c;
}
.advertise {
  height: 8.2173913rem;
  border-bottom: 1px solid #ebebeb;
}
.advertise img {
  width: 100%;
  height: 8.17391304rem;
}
.detail {
  background: #fff;
}
.detail .detail-nav {
  height: 6.26086957rem;
  border-bottom: 1px solid #ebebeb;
}
.detail .detail-navItem {
  float: left;
  width: 50%;
  height: 6.13043478rem;
  text-align: center;
}
.detail .detail-navItem span {
  display: inline-block;
  vertical-align: top;
  height: 6.13043478rem;
  border-bottom: 0.52173913rem solid transparent;
  font-size: 1.91304348rem;
  line-height: 1.91304348rem;
  padding-top: 2.13043478rem;
  color: #999999;
}
.detail .detail-navItem .detail-navActive {
  border-color: #ffda44;
  color: #333333;
  font-weight: bold;
}
.detail-list {
  background: #f3f5f9;
}
.detail-list .detail-listItem {
  width: 54rem;
  padding: 0 2.60869565rem;
  margin: 0 auto;
  margin-bottom: 1.47826087rem;
  background: #fff;
}
.detail-listsketch {
  height: 9.39130435rem;
}
.detail-listsketch .detail-username {
  float: left;
}
.detail-listsketch .detail-usernameImg {
  float: left;
  width: 6.26086957rem;
  height: 9.39130435rem;
  padding-top: 2.04347826rem;
}
.detail-listsketch .detail-usernameImg img {
  width: 5.2173913rem;
  height: 5.2173913rem;
}
.detail-listsketch .detail-userdescribe {
  float: left;
  width: 26.08695652rem;
  height: 9.39130435rem;
}
.detail-listsketch .detail-name {
  font-size: 2rem;
  line-height: 2rem;
  padding-top: 2.52173913rem;
  margin-bottom: 1.04347826rem;
  position: relative;
}
.detail-listsketch .detail-userGrade1,
.detail-listsketch .detail-userGrade2,
.detail-listsketch .detail-userGrade3 {
  position: absolute;
  background: url(/static/images/icon_sprite.png) no-repeat;
  background-size: 3.47826087rem 26.69565217rem;
  margin-left: 0.60869565rem;
}
.detail-listsketch .detail-userGrade1 {
  width: 2.08695652rem;
  height: 2.08695652rem;
}
.detail-listsketch .detail-userGrade2 {
  background-position: left -4.7826087rem;
  width: 1.82608696rem;
  height: 1.82608696rem;
}
.detail-listsketch .detail-userGrade3 {
  background-position: left -2.52173913rem;
  width: 1.82608696rem;
  height: 1.82608696rem;
}
.detail-listsketch .detail-visited1 {
  padding-left: 1.91304348rem;
  font-size: 1.47826087rem;
  line-height: 1.47826087rem;
  background: url(/static/images/icon_sprite.png) no-repeat left -17.60869565rem;
  background-size: 3.47826087rem 26.69565217rem;
  color: #999999;
}
.detail-listsketch .detail-visited2 {
  padding-left: 1.91304348rem;
  font-size: 1.47826087rem;
  line-height: 1.47826087rem;
  background: url(/static/images/icon_sprite.png) no-repeat left -12.86956522rem;
  background-size: 3.47826087rem 26.69565217rem;
  color: #999999;
}
.detail-listsketch .detail-price {
  float: right;
  padding-right: 0.43478261rem;
  color: #ff4848;
  font-size: 2.08695652rem;
  line-height: 2.08695652rem;
  height: 5.47826087rem;
  padding-top: 2.39130435rem;
  font-weight: bold;
}
.detail-firstParticularImg img {
  float: right;
  width: 24%;
  height: 11.60869565rem;
  margin-bottom: 0.2173913rem;
}
.detail-firstParticularImg .detail-firstImg {
  float: left;
  width: 36.86956522rem;
  height: 75%;
}
.detail-sixListParticular {
  overflow: hidden;
}
.detail-sixListParticular .detail-sixParticularImg {
  width: 200%;
  overflow: auto;
}
.detail-sixListParticular .detail-sixParticularImg img {
  float: left;
  width: 15.08695652rem;
  height: 15.08695652rem;
  margin-right: 0.52173913rem;
}
.detail-oneParticularImg img {
  display: block;
  width: 30.7826087rem;
  height: 15.17391304rem;
  margin-right: 0.52173913rem;
}
.detail-particularDescribe {
  font-size: 1.73913043rem;
  line-height: 2.7826087rem;
  padding-top: 2rem;
  padding-bottom: 0.86956522rem;
  font-weight: bold;
}
.detail-reply {
  color: #999999;
  padding-top: 0.2173913rem;
  line-height: 3.13043478rem;
  font-size: 1.73913043rem;
  height: 7.60869565rem;
  border-bottom: 2px solid #efefef;
  background: url(/static/images/detail-replybg.png) no-repeat left 0.60869565rem;
  background-size: 0.26086957rem 5.2173913rem;
  padding-left: 1.65217391rem;
}
.detail-reply .detail-replyContent {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.detail-lastpart {
  height: 5.65217391rem;
  line-height: 5.65217391rem;
}
.detail-lastpart .detail-place {
  float: left;
  color: #38adff;
}
.detail-lastpart .detail-data {
  float: right;
  color: #999999;
}
.join {
  width: 500%;
  overflow: hidden;
  margin-bottom: 1.47826087rem;
}
.join .join-item {
  float: left;
  width: 33.91304348rem;
  height: 29.7826087rem;
  background: #fff;
  padding: 2.60869565rem 2.60869565rem 0 2.69565217rem;
  font-size: 1.73913043rem;
  line-height: 1.73913043rem;
  margin-right: 1.52173913rem;
}
.join .join-name {
  font-weight: bold;
  margin-bottom: 1.69565217rem;
}
.join .join-notice {
  width: 3.69565217rem;
  height: 2.08695652rem;
  border: 0.13043478rem solid #67b2d6;
  border-radius: 0.2173913rem;
  color: #67b2d6;
  font-size: 1.13043478rem;
  line-height: 2.08695652rem;
  text-align: center;
  margin: 1.47826087rem 0 2.60869565rem;
}
.join .join-img {
  padding-bottom: 1.73913043rem;
  border-bottom: 1px solid #eaeaea;
}
.join .join-img img {
  float: left;
  margin-right: 0.43478261rem;
  width: 9.13043478rem;
  height: 9.08695652rem;
}
.join .join-img .margin0 {
  margin-right: 0;
}
.join .join-attention {
  line-height: 4.65217391rem;
  color: #333333;
  text-align: center;
}
.join .join-icon {
  background: url(/static/images/icon_sprite.png) left -21.73913043rem no-repeat;
  background-size: 3.47826087rem 26.69565217rem;
  width: 1.52173913rem;
  height: 1.47826087rem;
  display: inline-block;
  vertical-align: top;
  margin-top: 1.56521739rem;
}
.intrest {
  margin-bottom: 1.56521739rem;
  height: 24.95652174rem;
  padding: 0.52173913rem 0 0 2.60869565rem;
  width: 500%;
}
.intrest .intrest-close {
  position: absolute;
  font-size: 1.73913043rem;
  color: #eaeaea;
  right: 1.08695652rem;
  top: 1.08695652rem;
}
.intrest .intrest-title {
  line-height: 1.73913043rem;
  font-size: 1.73913043rem;
  margin-bottom: 1.52173913rem;
  color: #999999;
}
.intrest .intrest-item {
  height: 21.17391304rem;
  width: 16.52173913rem;
  text-align: center;
  background: #fff;
  padding-top: 2.08695652rem;
  position: relative;
  float: left;
  margin-right: 1.30434783rem;
}
.intrest .intrest-item dt {
  width: 8.39130435rem;
  height: 8.39130435rem;
  margin: 0 auto 1.08695652rem;
}
.intrest .intrest-item dt img {
  width: 8.39130435rem;
  height: 8.39130435rem;
  display: block;
}
.intrest .intrest-item dd {
  line-height: 3.2173913rem;
}
.intrest .intrest-item dd .intrest-name {
  font-size: 1.73913043rem;
}
.intrest .intrest-item dd .intrest-type {
  font-size: 1.47826087rem;
  color: #999999;
}
.bottomMenu {
  height: 6.39130435rem;
  background: #fff;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 54rem;
  left: 0;
}
.bottomMenu li {
  width: 11.73913043rem;
  height: 6.39130435rem;
  float: left;
  font-size: 0.95652174rem;
  line-height: 0.95652174rem;
  padding-top: 4.82608696rem;
  position: relative;
}
.bottomMenu .bottom_sprite {
  background: url(/static/images/bottom_sprite.png) no-repeat;
  background-size: 7.04347826rem 45.39130435rem;
  width: 3rem;
  height: 2.86956522rem;
  position: absolute;
  top: 1.08695652rem;
  left: 4.30434783rem;
}
.bottomMenu .bottomMenu-fishpond .bottom_sprite {
  width: 3.08695652rem;
  height: 2.91304348rem;
  background-position: left -9.34782609rem;
}
.bottomMenu .bottomMenu-publish {
  width: 7.04347826rem;
  height: 8.82608696rem;
  position: absolute;
  top: -2.60869565rem;
  left: 23.47826087rem;
  padding-top: 7.43478261rem;
}
.bottomMenu .bottomMenu-publish .bottom_sprite {
  width: 7.04347826rem;
  height: 6.86956522rem;
  top: 0;
  left: 0;
  background-position: left -18.82608696rem;
}
.bottomMenu .bottomMenu-message {
  margin-left: 7.04347826rem;
}
.bottomMenu .bottomMenu-message .bottom_sprite {
  width: 3.08695652rem;
  height: 2.91304348rem;
  background-position: left -33rem;
}
.bottomMenu .bottomMenu-mine .bottom_sprite {
  width: 2.91304348rem;
  height: 2.86956522rem;
  background-position: left bottom;
}


</style>