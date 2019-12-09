<template>
  <div class="abou-article" id="abuotUs">
    <div class="cy-about">
      <div class="infoBox">
        <h1>About Us</h1>
        <p>{{textArr[2]}}</p>
        <router-link class="readMore wow rotateIn 2s delay-.5s" :to="{path: '/aboutblog', query: {'menuIndex': $route.query.menuIndex}}">Read More</router-link>
      </div>
    </div>
    <div class="cy-article">
      <div class="sectionTitle">
        <h2>热门文章</h2>
        <p>每个人都有一个习惯，我的习惯是在这里等你来临。</p>
      </div>
      <div class="articleList wow fadeInUp fast delay-.5s">
        <Row :gutter="50" class="articleRow" type="flex">
          <template v-for="(articleItem, artIndex) in articleArr">
            <i-col class="articleCol" :xs="24" :sm="12" :md="12" :lg="8" :key="artIndex">
              <div class="articleInfo">
                <router-link class="card-Img" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                  <img class="articleImg" src="../../assets/img/test.jpg"/>
                </router-link>
                <div class="card-body">
                  <p class="card-author">{{articleArr[artIndex]['author']}}</p>
                  <p class="card-title">{{articleArr[artIndex]['arttitle']}}</p>
                  <p class="card-text">{{articleArr[artIndex]['content']}}</p>
                  <router-link class="card-more" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                    阅读更多
                    <Icon type="md-arrow-forward" />
                  </router-link>
                </div>
              </div>
            </i-col>
          </template>
        </Row>
      </div>
    </div>
  </div>
</template>
<script>
import {WOW} from 'wowjs'
export default {
  props: {
    textArr: Array,
    articleArr: Array
    // cases: Object
  },
  data () {
    return {
      scroll: ''
    }
  },
  methods: {
  },
  watch: {
    articleArr () {
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
/* @import url('https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.2/animate.min.css'); */
</style>
