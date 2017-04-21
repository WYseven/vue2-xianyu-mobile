<template>
  <div class="detail-listItem">
    <div class="detail-firstlist">
      <!--放用户名和商品价格-->
      <div class="detail-listsketch">
        <dl class="detail-username">
          <dt class="detail-usernameImg">
            <a href="javascript:;">
              <img :src="item.portraitImg" />
            </a>
          </dt>
          <dd class="detail-userdescribe">
            <h4 class="detail-name">
              {{ item.name }}
              <span class="detail-userGrade1"></span>
            </h4>
            <p class="detail-visited1">{{ item.comeTime }}</p>
          </dd>
        </dl>
        <div class="detail-price">
          {{ item.price }}/月
        </div>
      </div>
      <!--放商品图片和商品描述-->
      <dl class="detail-firstListParticular">
        <dt class="detail-firstParticularImg clearfix">
          <img src="../../assets/images/firstlist3.png" alt="">
          <img
            v-for="src,index in item.showImages"
            :src="src"
          />
        </dt>
        <dd class="detail-particularDescribe">
          {{ item.describe }}
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
</template>

<script>
  export default {
    name: 'search',
    props: ['item'],
    data () {
      return {}
    }
  }
</script>
<style>

</style>
