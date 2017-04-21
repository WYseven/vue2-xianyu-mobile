/**
 * Created by seven on 2017/4/20.
 */

function repeat (obj, n, type) {
  var arr = []

  for (var i = 0; i <= n; i++) {
    arr.push(obj)
  }

  return arr
}

let obj = {
  portraitImg: '/static/images/user1.png',
  showImages: [
    `/static/images/firstlist${Math.ceil(Math.random() *3)}.png`,
    `/static/images/firstlist${Math.ceil(Math.random()*3)}.png`,
    `/static/images/firstlist${Math.ceil(Math.random()*3)}.png`
  ],
  name: '闫佳249733833',
  comeTime: '2小时前来过',
  price: '1600',
  describe: '出租西二旗地铁站附近单间 次卧 主卧 3家合住 押一付一 包物业取暖 无杂费 随时入住'
}

let topic = {
  title: '闲鱼精选',
  dec: '这里有好东西',
  imgUrl: `/static/images/topic${Math.ceil(Math.random()*3)}.png`
}

let product = {
  title: '闲鱼精选',
  dec: '这里有好东西',
  imgUrl: `/static/images/project${Math.ceil(Math.random()*5)}.png`
}

let data = {
  d: {
    detailData: repeat(obj, 5),
    topicData: repeat(topic, 3),
    productData: repeat(product, 7)
  },
  loading () {

    return new Promise(function (resolove) {
        setTimeout(function () {
          var o = {}
          o.detailData = repeat(obj, 5, 'detailData')
          o.topicData = repeat(topic, 3, 'topicData')
          o.productData = repeat(product, 7, 'productData')
          resolove(o)
        }, 1000)
    })
  },
  getData () {
    /* eslint-disable no-new */
    return new Promise(function (resolove) {
      var data = []
      for (var i = 0; i < 5; i++) {
        data.push(obj)
      }
      setTimeout(function () {
        resolove(data)
      }, 500)
    })
  }
}

export default data
