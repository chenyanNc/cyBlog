<template>
  <div class="cy-wrap" style="position: absolute;width: 100%;min-height: 100%;">
    <cyHeader :menuList="menuList"></cyHeader>
    <div class="art-container">
      <Row :gutter="20" class="articleRow" type="flex">
        <i-col :xs="24" :sm="24" :md="24" :lg="18">
          <ul class="single-list">
            <template v-for="(postItem, postIndex) in postArr1">
              <li :key="postIndex" class="single-post">
                <div class="inner-post">
                  <div class="post-img">
                    <img src="../assets/img/test.jpg"/>
                  </div>
                  <div class="post-info">
                    <router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}" class="post-infoTitle">C语言 【练习】二维数组矩阵转置的实现</router-link>
                    <p class="post-infoText">
                      林徽因曾在文中写道“爱上一座城是因为城中住着某个喜欢的人其实不然爱上一座城也许是为城里的一道生动的风景为一段青梅往
                      事为一座熟悉的老宅。”渐渐进入深秋，抬头仰望天空，无论何时总是那么静谧、美丽仿佛身处童话世界，每一个喜爱天空的人都
                      能成为小众艺术家。清晨的瞬间，路边的灯还亮着，素色的...
                    </p>
                    <div class="post-infoPag">
                      <ul class="blog-meta">
                        <li>
                          <img src="../assets/img/biaoqian.png"/>
                          <span class="brow" @click="browLable">c语言</span>
                        </li>
                        <li>
                          <img src="../assets/img/shijian.png" />
                          2019-10-07 15:01
                        </li>
                        <li>
                          <img src="../assets/img/liulan.png" />
                          浏览 (<router-link :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}" class="brow">2</router-link>)
                        </li>
                      </ul>
                      <router-link class="post-infoMore" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">阅读更多</router-link>
                    </div>
                  </div>
                </div>
              </li>
            </template>
          </ul>
          <div class="page-box"  style="margin-bottom: 30px;">
            <Page
              class-name="card-paging"
              :id="pageId"
              :total="100"
              :current="current"
              :page-size="pageSize"
              :show-elevator="showElevator"
              @on-change="changePages"
            />
            <Button type="success" size="small" @click="goElevatorPage(pageId)" style="margin-left: 25px;">确定</Button>
          </div>
        </i-col>
        <i-col :xs="24" :sm="24" :md="24" :lg="6">
          <div class="card-lmNav">
            <div class="card-search card">
              <Input :search="true" suffix="ios-search" placeholder="Search..." @on-search="changeFunction"/>
            </div>
            <div class="card-section card">
              <h2 class="card-column">栏目分类</h2>
              <ul class="card-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex">
                    <span class="card-route" @click="browLable">
                      <p>随笔</p>
                      <span>4</span>
                    </span>
                  </li>
                </template>
              </ul>
            </div>
            <div class="card-section card">
              <h2 class="card-column">热门文章</h2>
              <ul class="card-content hot-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex">
                    <router-link class="hot-route" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                      <span class="hotNumber">1</span>
                      <p>随笔</p>
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
            <div class="card-section card">
              <h2 class="card-column">猜你喜欢</h2>
              <ul class="card-content hot-content">
                <template v-for="(postItem, postIndex) in postArr">
                  <li :key="postIndex">
                    <router-link class="hot-like" :to="{path: '/articleDetails', query: {'menuIndex': $route.query.menuIndex}}">
                      <Badge status="success" text="随笔" />
                    </router-link>
                  </li>
                </template>
              </ul>
            </div>
          </div>
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
      postArr1: [1, 2, 3, 4, 5],
      postArr: [1, 2, 3, 4, 5],
      showElevator: true,
      current: 1,
      pageSize: 5,
      pageId: 'targetpage'
    }
  },
  methods: {
    changeFunction (event) {
      console.log(event)
    },
    changePages (val) {
      console.log(val)
    },
    // 分页快切换到某一页,增加确定按钮.模拟回车跳转事件
    goElevatorPage (pageId) {
      var evtObj
      var thisPage = document.getElementById(pageId)
      var elevatorDiv = thisPage.getElementsByClassName('ivu-page-options-elevator')
      if (elevatorDiv && elevatorDiv.length > 0) {
        var pageInput = elevatorDiv[0].getElementsByTagName('input')[0]
        if (window.KeyEvent) { // firefox 浏览器下模拟事件
          evtObj = document.createEvent('KeyEvents')
          evtObj.initKeyEvent('keyup', true, true, window, true, false, false, false, 13, 0)
        } else { // chrome 浏览器下模拟事件
          evtObj = document.createEvent('UIEvents')
          evtObj.initUIEvent('keyup', true, true, window, 1)
          delete evtObj.keyCode
          if (typeof evtObj.keyCode === 'undefined') { // 为了模拟keycode
            Object.defineProperty(evtObj, 'keyCode', { value: 13 })
          } else {
            evtObj.key = String.fromCharCode(13)
          }
        }
        pageInput.dispatchEvent(evtObj)
      }
    },
    browLable () {
      console.log('点击分类标签,刷新数据')
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
