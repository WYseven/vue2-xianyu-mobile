/**
 * Created by seven on 2017/4/20.
 */

let obj = {
  portraitImg: '/static/images/user1.png',
  showImages: [
    '/static/images/firstlist1.png',
    '/static/images/firstlist2.png',
    '/static/images/firstlist3.png'
  ],
  name: '闫佳249733833',
  comeTime: '2小时前来过',
  price: '1600',
  describe: '出租西二旗地铁站附近单间 次卧 主卧 3家合住 押一付一 包物业取暖 无杂费 随时入住'
}

export default {
  detailData: [
    {
      portraitImg: '/static/images/user1.png',
      showImages: [
        '/static/images/firstlist1.png',
        '/static/images/firstlist2.png',
        '/static/images/firstlist3.png'
      ],
      name: '闫佳249733833',
      comeTime: '2小时前来过',
      price: '1600',
      describe: '出租西二旗地铁站附近单间 次卧 主卧 3家合住 押一付一 包物业取暖 无杂费 随时入住'
    },
    {
      portraitImg: '/static/images/user1.png',
      showImages: [
        '/static/images/firstlist1.png',
        '/static/images/firstlist2.png',
        '/static/images/firstlist3.png'
      ],
      name: '闫佳249733833',
      comeTime: '2小时前来过',
      price: '1600',
      describe: '出租西二旗地铁站附近单间 次卧 主卧 3家合住 押一付一 包物业取暖 无杂费 随时入住'
    }
  ],
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
