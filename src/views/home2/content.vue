<template>
  <div id="wrapper">

      <div class="content">
        <div class="loading" v-if="loading">loading...</div>
        <div class="banner">
            <slider :pages="someList" :sliderinit="sliderinit" @slide='slide'>
            </slider>
          <p class="banner-dot">
            <a href="javascript:;"></a>
            <a href="javascript:;"></a>
            <a href="javascript:;" class="banner-dot-active"></a>
            <a href="javascript:;"></a>
          </p>
        </div>
        <!--topic专题-->
        <div class="topic clearfix">
          <dl class="topic-item" v-for="item in data.topicData">
            <dd>
              <h3 class="topic-heading">{{ item.title }}<span class="topic-hot"></span></h3>
              <p class="topic-describe">{{ item.dec }}</p>
            </dd>
            <dt class="topic-img">
              <a href="javascript:;">
                <img v-lazy="item.imgUrl" />
              </a>
            </dt>
          </dl>
        </div>
        <!--product产品专栏部分-->
        <ul class="product clearfix">
          <li class="product-list clearfix" v-for="item in data.productData">
            <dl class="product-item clearfix">
              <dd class="product-describe">
                <h3 class="product-heading">{{item.title}}</h3>
                <p class="product-description">{{item.dec}}</p>
              </dd>
              <dt class="product-img">
                <a href="javascript:;">
                  <img v-lazy="item.imgUrl" />
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
            <detail-item v-for="item in data.detailData" :item="item"></detail-item>
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

  import slider from '@/components/slider'

  let {getData, loading, d} = DetailData

  console.log(d)

  export default {
    name: 'search',
    data () {
      return {
        loading: true,
        data: d,
        reloading: false,
        someList:[
          {
            title: 'slide1',
            style:{
              'background': 'url(/static/images/banner1.png)'
            }
          },
          {
            title: 'slide2',
            style:{
              'background': 'url(/static/images/banner1.png)',
            }
          },
          {
            title: 'slide3',
            style: {
              'background': 'url(/static/images/banner1.png)',
            }
          }
        ],
        sliderinit: {
          currentPage: 0,
          thresholdTime: 500, // 滑动时间阈值判定距离
          thresholdDistance: 100, // 滑动距离阈值
          // slideSpeed:1000, // 滑动速度
          loop: true, // 无限循环
          autoplay: 3000// 自动播放:时间[ms]
        }
      }
    },
    components: {
      'detail-item': Detail,
      slider
    },
    methods: {
      slide () {

      },
      pullLodingMethod () {
        loading().then((data) => {
          this.data = data
          console.log(data)
          this.nextTick()
        })
      },
      getData () {
        getData().then((data) => {
          this.data.detailData.push(...data)
          this.nextTick()
        })
      },
      nextTick () {
        var me = this

        me.$nextTick(() => {
          var content = document.getElementsByClassName('content')[0]
          setTimeout(function () {
            if (me.myScroll) {
              me.myScroll.refresh()
              me.floading = false
              me.reloading = false
              me.pullLoading = false
              content.style.marginTop = '-5.65217391rem';
            } else {
              var wrapper = document.getElementById('wrapper')
              me.myScroll = new BScroll(wrapper, {
                startX: 0,
                startY: 0,
                click: true,
                probeType: 3
              })
              var y = 0

              content.addEventListener('touchend', function () {
                if (me.pullLoadingStart && y > 100) {
                  setTimeout(function () {
                    content.style.marginTop = 0
                  }, 30)
                  me.pullLodingMethod()
                  me.pullLoading = true
                }
              })

              me.myScroll.on('scroll', (pos) => {
                y = pos.y
                if (pos.y > 100) {
                  me.pullLoadingStart = true
                }

                if (!me.floading && pos.y < 0 && (-1 * pos.y + wrapper.offsetHeight) - content.offsetHeight > 30) {
                  me.getData()
                  me.floading = true
                  me.reloading = true
                }
              })
            }
          })
        })
      }
    },
    mounted () {
      // 给数据
      this.data = d
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
    margin-top: -5.65217391rem;
  }
  .loading {
    width: 100%;
    height: 5.65217391rem;
  }
  .floading {
    height:30px;
  }
</style>
