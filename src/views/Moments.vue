<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader :menuList="menuList"></cyHeader>
    <div class="art-container">
      <Row class="articleRow archRow" type="flex">
        <i-col class="arch-card" :xs="24" :sm="24" :md="24" :lg="24">
          <Tabs value="name1" @on-click="clickTab">
              <TabPane label="HTML5" name="name1">
                <Row :gutter="20" type="flex" style="padding-top: 0;">
                  <template v-for="(momentItem, momentIndex) in momentArr">
                    <i-col :key="momentIndex" class="moment-cardList" :xs="24" :sm="24" :md="12" :lg="6">
                      <div class="moment-card">
                        <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                          <img class="moment-headImg" src="../assets/img/moment01.png"/>
                          <h4 class="moment-title">cy-Blog v1.0 个人博客模板</h4>
                        </router-link>
                        <div class="moment-text">
                          <p>最近很多网友留言说想要这套博客模板，今天它来了，别问落地价，因为分享无价。它因为分享无价。它</p>
                        </div>
                        <p class="moment-sort">
                          <Icon type="ios-list" style="font-size: 25px;font-weight: 700;vertical-align: middle;"/>
                          <span>HTML5</span>
                        </p>
                        <div class="moment-cardfoot">
                          <p class="moment-browse">
                            <Icon type="md-eye" style="font-size: 18px;"/>
                            <span>30</span>
                          </p>
                          <p class="moment-browse">
                            <Icon type="md-heart" style="font-size: 16px;"/>
                            <span>30</span>
                          </p>
                        </div>
                      </div>
                    </i-col>
                  </template>
                </Row>
              </TabPane>
              <TabPane label="工具" name="name2">
                <Row :gutter="20" type="flex" style="padding-top: 0;">
                  <template v-for="(momentItem, momentIndex) in momentArr">
                    <i-col :key="momentIndex" class="moment-cardList" :xs="24" :sm="24" :md="12" :lg="6">
                      <div class="moment-card">
                        <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                          <img class="moment-headImg" src="../assets/img/moment01.png"/>
                          <h4 class="moment-title">cy-Blog v1.0 个人博客模板</h4>
                        </router-link>
                        <div class="moment-text">
                          <p>最近很多网友留言说想要这套博客模板，今天它来了，别问落地价，因为分享无价。它因为分享无价。它</p>
                        </div>
                        <p class="moment-sort">
                          <Icon type="ios-list" style="font-size: 25px;font-weight: 700;vertical-align: middle;"/>
                          <span>HTML5</span>
                        </p>
                        <div class="moment-cardfoot">
                          <p class="moment-browse">
                            <Icon type="md-eye" style="font-size: 18px;"/>
                            <span>30</span>
                          </p>
                          <p class="moment-browse">
                            <Icon type="md-heart" style="font-size: 16px;"/>
                            <span>30</span>
                          </p>
                        </div>
                      </div>
                    </i-col>
                  </template>
                </Row>
              </TabPane>
              <TabPane label="源码" name="name3">
                <Row :gutter="20" type="flex" style="padding-top: 0;">
                  <template v-for="(momentItem, momentIndex) in momentArr">
                    <i-col :key="momentIndex" class="moment-cardList" :xs="24" :sm="24" :md="12" :lg="6">
                      <div class="moment-card">
                        <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                          <img class="moment-headImg" src="../assets/img/moment01.png"/>
                          <h4 class="moment-title">cy-Blog v1.0 个人博客模板</h4>
                        </router-link>
                        <div class="moment-text">
                          <p>最近很多网友留言说想要这套博客模板，今天它来了，别问落地价，因为分享无价。它因为分享无价。它</p>
                        </div>
                        <p class="moment-sort">
                          <Icon type="ios-list" style="font-size: 25px;font-weight: 700;vertical-align: middle;"/>
                          <span>HTML5</span>
                        </p>
                        <div class="moment-cardfoot">
                          <p class="moment-browse">
                            <Icon type="md-eye" style="font-size: 18px;"/>
                            <span>30</span>
                          </p>
                          <p class="moment-browse">
                            <Icon type="md-heart" style="font-size: 16px;"/>
                            <span>30</span>
                          </p>
                        </div>
                      </div>
                    </i-col>
                  </template>
                </Row>
              </TabPane>
          </Tabs>
          <p style="margin: 20px 0;text-align: center;font-size: 14px;color: rebeccapurple;">已经到底了~~~</p>
        </i-col>
      </Row>
    </div>
    <BackTop :bottom="Number(80)" :duration="Number(2000)"></BackTop>
    <cyRabbit></cyRabbit>
    <cyFoot></cyFoot>
  </div>
</template>
<script>
import cyHeader from '../components/Header'
import cyRabbit from '../components/rabbit'
import cyFoot from '../components/Foot'
import store from '../store'
export default {
  components: {
    cyHeader,
    cyRabbit,
    cyFoot
  },
  data () {
    return {
      menuList: [{
        name: '',
        router: ''
      }],
      momentArr: [1, 2, 3, 4, 5, 6, 7]
    }
  },
  methods: {
    clickTab (name) {
      console.log(name)
    }
  },
  created () {
    this.menuList = store.state.menusArr
  }
}
</script>
<style scoped>
@import url('../assets/css/articlestyle.css');
@import url('../assets/css/media.css');
</style>
