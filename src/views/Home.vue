<template>
  <div class="home">
    <login></login>
    <homeList></homeList>
  </div>
  </div>
</template>

<script>
// import Login from '../components/Login.vue'
const login = () => import('@/components/home/Login.vue')
const homeList = () => import('@/components/home/HomeList.vue')
export default {
  name: 'Home',
  components: { login, homeList },
  data() {
    return {}
  }
}
</script>
<style lang="less" scoped>
// .el-card__body {
//   padding: 0px !important;
// }
.home {
  margin: 0 auto;
  padding-top: 46px;
}
</style>