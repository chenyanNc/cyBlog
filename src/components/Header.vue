<template>
  <div class="cyHeader">
    <img class="cyLogo" src="../assets/img/logoko.png" />
    <Menu mode="horizontal" :theme="theme" :active-name="activemenu">
      <template v-for="(menuItem, menuIndex) in menuList">
        <router-link :key="menuIndex" :to="{path: menuItem.route, query: {'menuIndex': menuIndex}}">
          <Menu-item :name="menuIndex">{{menuItem.name}}</Menu-item>
        </router-link>
      </template>
    </Menu>
  </div>
</template>
<script>
export default {
  props: {
    menuList: Array
  },
  data () {
    return {
      theme: 'light',
      activemenu: 0
    }
  },
  methods: {
  },
  created () {
    // console.log(this.$route.query.menuIndex)
    if (this.$route.query.menuIndex !== undefined) {
      this.activemenu = Number(this.$route.query.menuIndex)
    }
  }
}
</script>
<style scoped>
@import url('../assets/css/homestyle.css');
@import url('../assets/css/media.css');
</style>
