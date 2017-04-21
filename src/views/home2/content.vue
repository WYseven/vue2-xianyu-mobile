<template>
  <div id="wrapper">

      <div class="content">
        <div class="loading" v-if="loading">loading...</div>
        <div class="banner">
          <ul class="banner-imgList">
            <li><img src="../../assets/images/banner1.png"></li>
            <li><img src="../../assets/images/banner1.png"></li>
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
                <img src="../../assets/images/topic1.png" />
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
                <img src="../../assets/images/topic2.png" />
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
                <img src="../../assets/images/topic3.png" />
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
                <img src="../../assets/images/topic4.png" />
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
                  <img src="../../assets/images/project1.png" />
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
                  <img src="../../assets/images/project2.png" />
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
                  <img src="../../assets/images/project3.png" />
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
                  <img src="../../assets/images/project4.png" />
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
                  <img src="../../assets/images/project5.png" />
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
                  <img src="../../assets/images/project6.png" />
                </a>
              </dt>
            </dl>
          </li>
        </ul>
        <!--广告部分-->
        <div class="advertise">
          <a href="javascript:;">
            <img src="../../assets/images/advertise1.png" />
          </a>
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
            <!--没有回复内容的模块-->
            <detail-item v-for="item in detailData" :item="item"></detail-item>
          </div>
        </div>
        <div class="floading" v-if="reloading">loading...</div>
        <!--加入鱼塘-->
        <!--<div class="join clearfix">
          <div class="join-item">
            <h3 class="join-name">巩华家园南一村</h3>
            <p class="join-number">
              <span class="jion-publishNum">发布数24</span>
              <span class="jion-popularityNum">昨日人气+8</span>
            </p>
            <p class="join-notice">公告</p>
            <div class="join-img clearfix">
              <img src="../../assets/images/join1.png" />
              <img src="../../assets/images/join2.png" />
              <img src="../../assets/images/join3.png" class="margin0"/>
            </div>
            <div class="join-attention">
              <span class="join-icon"></span>已关注
          </div>
          </div>
          <div class="join-item">
            <h3 class="join-name">巩华家园南一村</h3>
            <p class="join-number">
              <span class="jion-publishNum">发布数24</span>
              <span class="jion-popularityNum">昨日人气+8</span>
            </p>
            <p class="join-notice">公告</p>
            <div class="join-img clearfix">
              <img src="../../assets/images/join1.png" />
              <img src="../../assets/images/join2.png" />
              <img src="../../assets/images/join3.png" class="margin0"/>
            </div>
            <div class="join-attention">
              <span class="join-icon"></span>已关注
          </div>
          </div>
          <div class="join-item">
            <h3 class="join-name">巩华家园南一村</h3>
            <p class="join-number">
              <span class="jion-publishNum">发布数24</span>
              <span class="jion-popularityNum">昨日人气+8</span>
            </p>
            <p class="join-notice">公告</p>
            <div class="join-img clearfix">
              <img src="../../assets/images/join1.png" />
              <img src="../../assets/images/join2.png" />
              <img src="../../assets/images/join3.png" class="margin0"/>
            </div>
            <div class="join-attention">
              <span class="join-icon"></span>已关注
          </div>
          </div>
        </div>
        <div class="intrest clearfix">
          <h3 class="intrest-title">你可能感兴趣的人</h3>
          <dl class="intrest-item">
            <dt>
              <img src="../../assets/images/intrest1.png" />
              <a href="javascript:;" class="intrest-close">×</a>
            </dt>
            <dd>
              <p class="intrest-name">xtyygy289501</p>
              <p class="intrest-type">热门用户</p>
            </dd>
          </dl>
          <dl class="intrest-item">
            <dt>
              <img src="../../assets/images/intrest1.png" />
              <a href="javascript:;" class="intrest-close">×</a>
            </dt>
            <dd>
              <p class="intrest-name">xtyygy289501</p>
              <p class="intrest-type">热门用户</p>
            </dd>
          </dl>
          <dl class="intrest-item">
            <dt>
              <img src="../../assets/images/intrest1.png" />
              <a href="javascript:;" class="intrest-close">×</a>
            </dt>
            <dd>
              <p class="intrest-name">xtyygy289501</p>
              <p class="intrest-type">热门用户</p>
            </dd>
          </dl>
          <dl class="intrest-item">
            <dt>
              <img src="../../assets/images/intrest1.png" />
              <a href="javascript:;" class="intrest-close">×</a>
            </dt>
            <dd>
              <p class="intrest-name">xtyygy289501</p>
              <p class="intrest-type">热门用户</p>
            </dd>
          </dl>
        </div>
        <div class="detail-list">-->
          <!--没有回复内容的模块-->
          <!--<detail-item></detail-item>
          <detail-item></detail-item>
          <detail-item></detail-item>
          <detail-item></detail-item>
          <detail-item></detail-item>
        </div>-->
      </div>

  </div>

</template>

<script>
  import Detail from './detailItem'
  import BScroll from 'better-scroll'
  import DetailData from 'lib/detailData'

  let {detailData, getData} = DetailData

  export default {
    name: 'search',
    data () {
      return {
        loading: false,
        detailData: [],
        reloading: false
      }
    },
    components: {
      'detail-item': Detail
    },
    methods: {
      getData () {
        getData().then((data) => {
          this.detailData.push(...data)
          this.nextTick()
        })

      },
      nextTick () {
        var me = this

        me.$nextTick(() => {
          setTimeout(function () {
            if(me.myScroll){
              me.myScroll.refresh();
              me.floading = false
              me.reloading  = false;
            }else{

              var wrapper = document.getElementById('wrapper')
              me.myScroll = new BScroll(wrapper, {
                startX: 0,
                startY: 0,
                click: true,
                probeType: 2
              })
              var content = document.getElementsByClassName('content')[0]

              me.myScroll.on('scroll', (pos) => {
                if (pos.y > 50) {
                  //
                }

                if (!me.floading && pos.y < 0 && (-1 * pos.y + wrapper.offsetHeight) - content.offsetHeight > 30) {
                  me.getData()
                  me.floading = true
                  me.reloading  = true;
                  me.myScroll.scrollTo(0,pos.y + -30);
                }
              })
            }

          })

        })
      }
    },
    mounted () {
      // 给数据
      this.detailData = detailData
      this.nextTick()
    }
  }
</script>
<style>
  #wrapper {
    position: fixed;
    left: 0;
    top: 5.65217391rem;/* 5.65217391rem; */
    right: 0;
    bottom: 6.39130435rem;
  }
  .content {

  }
  .loading {
    width: 100%;
    height: 5.65217391rem;
  }
  .floading {
    height:30px;
  }
</style>
