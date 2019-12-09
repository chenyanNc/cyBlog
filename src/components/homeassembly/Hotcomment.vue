<template>
  <div>
    <div class="cy-hotBox">
      <div class="cy-comment">
        <h1>热评用户</h1>
        <Divider class="divider" style="border-color: #888;" dashed />
        <Row :gutter="50" class="commentRow wow fadeInRight delay-.5s" type="flex">
          <template v-for="(commentItem, commentIndex) in commentUser">
            <i-col :key="commentIndex" class="articleCol commentCol" :xs="24" :sm="24" :md="8" :lg="8">
              <div class="commentImg">
                <img src="../../assets/img/gold.png"/>
              </div>
              <div class="commentHead">
                <Avatar class="comment-headImg" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
              </div>
              <p class="commentName">不知名丶大魔王</p>
              <p class="commentNum">本站评论数：<span>12</span></p>
            </i-col>
          </template>
        </Row>
      </div>
    </div>
    <div>
      <div class="cy-comment">
        <h1>近期访客</h1>
        <div class="swiperOption wow flipInX">
          <swiper :options="swiperOption3" style="margin-bottom: 15px;">
            <template v-for="(swiperItem, swiperIndex) in recentSwiperArr">
              <swiper-slide class="recent-carousel" :key="swiperIndex">
                <div class="recentMessage">
                  <div class="recentUser">
                    <Avatar class="recentHead" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <span class="recentName">南辞北遇北语辞北遇北语</span>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets swiper-pagination3"  slot="pagination"></div>
        </div>
        <div class="swiperOption2 wow flipInX">
          <swiper :options="swiperOption4" style="margin-bottom: 15px;">
            <template v-for="(swiperItem, swiperIndex) in recentSwiperArr">
              <swiper-slide class="recent-carousel" :key="swiperIndex">
                <div class="recentMessage">
                  <div class="recentUser">
                    <Avatar class="recentHead" src="https://i.loli.net/2017/08/21/599a521472424.jpg" />
                    <span class="recentName">南辞北遇北语辞北遇北语</span>
                  </div>
                </div>
              </swiper-slide>
            </template>
          </swiper>
          <div class="swiper-pagination swiper-pagination-bullets swiper-pagination4"  slot="pagination"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
export default {
  data () {
    return {
      recentSwiperArr: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
      commentUser: [1, 2, 3],
      swiperOption3: {
        loop: true,
        autoplay: true,
        slidesPerView: 10,
        pagination: {
          el: '.swiper-pagination3',
          clickable: false,
          dynamicBullets: true
        }
      },
      swiperOption4: {
        loop: true,
        autoplay: true,
        slidesPerView: 5,
        pagination: {
          el: '.swiper-pagination4',
          clickable: false,
          dynamicBullets: true
        }
      }
    }
  },
  watch: {
    commentUser () {
      console.log('进来了')
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
</style>
