<!-- 首页文章目录 -->
<template>
  <div class="home">
    <el-card class="list_main">
      <div class="catalogue">
        <img src="@/assets/bookIcon.png" alt="">
        文章目录
      </div>
      <div class="main_one">
        <img src="@/assets/touIcon.png" alt="">
        个人介绍
      </div>
      <div class="main_two">
        项目案例
      </div>
      <div class="main_three">
        文章博客
      </div>
      <div class="main_four">
        个人感悟
      </div>
      <div class="main_five">
        联系
      </div>
    </el-card>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {}
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less'>
.el-card__body {
  padding: 0px !important;
}
.list_main {
  z-index: 88;
  position: relative;
  width: 168px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-radius: 8px;
  animation: icon 4s linear infinite;
  box-shadow: 2px 2px 10px #909090;
  overflow: hidden;
  .catalogue {
    width: 168px;
    box-sizing: border-box;
    padding: 5px 0 5px 8px;
    font-size: 16px;
    color: black;
    font-weight: bolder;
    text-align: left;
    background-color: #ededed;
    opacity: 0.8;
    img {
      padding-top: 4px;
      box-sizing: border-box;
    }
  }
  .main_one,
  .main_two,
  .main_three,
  .main_four,
  .main_five {
    width: 168px;
    font-size: 12px;
    text-align: left;
    padding: 8px 0 8px 8px;
    box-sizing: border-box;
    cursor: pointer;
  }
  .main_one:hover,
  .main_two:hover,
  .main_three:hover,
  .main_four:hover,
  .main_five:hover {
    background-color: #fff5f5;
  }
  @keyframes icon {
    0% {
      transform: translate(0, 0);
    }
    50% {
      transform: translate(0px, 30px);
    }
    100% {
      transform: translate(0, 0);
    }
  }
}
</style>