<template>
<div class="cy-wrap">
  <header>
    <Affix>
      <cyHeader :menuList="menuList"></cyHeader>
    </Affix>
  </header>
  <div class="container" style="padding-bottom: 35px;">
    <sectionOne :textArr="textArr"></sectionOne>
    <aboutUs :textArr="textArr" :articleArr="articleArr"></aboutUs>
    <cyRecebt></cyRecebt>
    <hotComment></hotComment>
    <cyFoot></cyFoot>
  </div>
  <BackTop :bottom="Number(80)" :duration="Number(2000)"></BackTop>
  <cyRabbit></cyRabbit>
  <footer></footer>
</div>
</template>
<script>
import cyHeader from './Header'
import sectionOne from './homeassembly/Sectionone'
import aboutUs from './homeassembly/aboutUs'
import cyRecebt from './homeassembly/Recentmessage'
import hotComment from './homeassembly/Hotcomment'
import cyRabbit from './rabbit'
import cyFoot from './Foot'
import store from '../store'
// import '../assets/css/homestyle.css'
export default {
  components: {
    cyHeader,
    sectionOne,
    aboutUs,
    cyRecebt,
    hotComment,
    cyFoot,
    cyRabbit
  },
  data () {
    return {
      menuList: [{
        name: '',
        router: ''
      }],
      textArr: [],
      articleArr: []
    }
  },
  methods: {
    getMenu () {
      this.$api.get('../../static/jsondata/home.json', {}, res => {
        console.log(res)
        this.menuList = res.data1
        store.dispatch('addMenus', this.menuList)
        this.textArr = res.data2[0]
        this.articleArr = res.data3
        console.log(this.textArr)
        console.log(this.articleArr)
      }, res => {
        window.alert('error: ' + res.msg)
      })
    }
  },
  created () {
    this.getMenu()
  }
}
</script>
<style scoped>
@import url('../assets/css/homestyle.css');
@import url('../assets/css/media.css');
</style>
