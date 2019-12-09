<template>
  <div class="cy-recent">
    <h3 class="tittle-wthree">最近留言</h3>
    <div class="recentSwiper wow zoomIn 3s delay-.5s">
      <div class="swiperOption">
        <swiper :options="swiperOption">
          <template v-for="(swiperItem, swiperIndex) in swiperArr">
            <swiper-slide class="demo-carousel" :key="swiperIndex">
              <div class="messageInfo">
                <div class="messText">
                  <Icon type="ios-quote" class="symbol" />
                  描述：一个java程序员的个人博客，记录博主的学习,生活中的一些有趣的事，并分享互联网技术和源码。
                </div>
                <div class="userBox">
                  <Avatar class="headImg" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                  <span>南辞北遇</span>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
         <div class="swiper-pagination swiper-pagination-bullets" slot="pagination"></div>
      </div>
      <div class="swiperOption2">
        <swiper :options="swiperOption2" class="swiperOption2">
          <template v-for="(swiperItem, swiperIndex) in swiperArr">
            <swiper-slide class="demo-carousel" :key="swiperIndex">
              <div class="messageInfo">
                <div class="messText">
                  <Icon type="ios-quote" class="symbol" />
                  描述：一个java程序员的个人博客，记录博主的学习,生活中的一些有趣的事，并分享互联网技术和源码。
                </div>
                <div class="userBox">
                  <Avatar class="headImg" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                  <span>南辞北遇</span>
                </div>
              </div>
            </swiper-slide>
          </template>
        </swiper>
      </div>
      <div class="swiper-pagination swiper-pagination-bullets swiper-pagination2" slot="pagination"></div>
    </div>
    <div class="messageNumber">
      <div class="coverBg" style="background-color: rgba(0,0,0,0.75);padding: 80px 0 60px 0;display: flex;justify-content: center;">
      <Row :gutter="50" class="numberRow wow fadeInLeft delay-.5s" type="flex">
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-thumbs-up-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(81)" :duration="8000" separator="">81</countTo>
          <p class="dotText">网站点赞数量</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-chatbubbles-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(104)" :duration="8000" separator="">104</countTo>
          <p class="dotText">用户评论数量</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="ios-desktop-outline" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(29767)" :duration="8000" separator="">29767</countTo>
          <p class="dotText">网站访问次数</p>
        </i-col>
        <i-col class="articleCol numberCol" :xs="12" :sm="12" :md="6" :lg="6">
          <Icon class="dotIcon" type="md-calendar" />
          <countTo class="dotNumber" :startVal="startVal" :endVal="Number(213)" :duration="8000" separator="">213</countTo>
          <p class="dotText">网站运行天数</p>
        </i-col>
      </Row>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
import countTo from 'vue-count-to'
export default {
  components: {
    countTo
  },
  data () {
    return {
      screenWidth: document.body.clientWidth,
      startVal: 0,
      swiperOption: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: false
        },
        effect: 'coverflow',
        slidesPerView: 3,
        centeredSlides: true,
        coverflowEffect: {
          rotate: 30,
          stretch: 5,
          depth: 60,
          modifier: 2,
          slideShadows: false
        }
      },
      swiperOption2: {
        loop: true,
        autoplay: true,
        pagination: {
          el: '.swiper-pagination2',
          clickable: false
        }
      },
      swiperArr: ['1', '2', '3']
    }
  },
  watch: {
    swiperArr () {
      // 在dom渲染完后,再执行动画
      this.$nextTick(() => {
        var wow = new WOW({
          live: false
        })
        wow.init()
      })
    }
  }
}
</script>
<style scoped>
@import url('../../assets/css/homestyle.css');
@import url('../../assets/css/media.css');
.cy-recent /deep/ .swiper-pagination-bullet{
  margin: 0 10px;
}
.dotNumber{
  display: block;
}
</style>
