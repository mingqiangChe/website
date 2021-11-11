<!-- 登录界面 定时遮罩层 -->
<template>
  <div class='login' ref="loginDom">
    <div class="login-main">
      <div class="canvas">
        <div class="txt">
          用代码表达自我
        </div>
        <div class="canvasx">
          <canvas id="myCanvas" width="100" height="100">
          </canvas>
        </div>
        <div class="button" @click="openMark">
          开启
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
let canvas
let ctx
export default {
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // imgSrc: 'https://thomasche-1306205594.cos.ap-shanghai.myqcloud.com/website/012A6601.jpg'
    }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    initCanvas() {
      console.log('初始化canvas')
      canvas = document.getElementById('myCanvas')
      var ctx = document.getElementById('myCanvas')
      var ctx = canvas.getContext('2d')

      var image = new Image(120, 90)
      image.onload = drawImageActualSize
      // image.src = this.imgSrc
      // image.src = 'https://thomasche-1306205594.cos.ap-shanghai.myqcloud.com/website/012A6601.jpg'
      image.src = '@/assets/logo.png'

      function drawImageActualSize() {
        canvas.width = this.naturalWidth
        canvas.height = this.naturalHeight
        ctx.drawImage(this, 0, 0, this.naturalWidth, this.naturalHeight)
      }
    },
    openMark() {
      this.$refs.loginDom.style.top = '-1000px'
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.initCanvas()
    // 当调整窗口大小时重绘canvas
    window.onresize = () => {
      this.initCanvas()
    }
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
// 画布
.canvasx {
  width: 50px;
  margin: 0 auto;
}
#mycanvas {
  border: 1px solid rgb(199, 198, 198);
}
.login {
  width: 100%;
  height: 100%;
  background-color: #87e3e6;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
  .login-main {
    width: 100%;
    min-width: 780px;
    padding-top: 110px;
    box-sizing: border-box;
    animation: icon 6s linear infinite;
    .txt {
      width: 200px;
      height: 40px;
      // background-color: #fff;
      margin: 0 auto;
      color: #fff;
      text-align: center;
      line-height: 20px;
    }
    .button {
      font-size: 12px;
      font-weight: 400;
      color: white;
      padding: 4px 6px;
      box-sizing: border-box;
      text-align: center;
      border-radius: 20px;
      width: 50px;
      margin: 0 auto;
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
    }
  }
}
@keyframes icon {
  0% {
    // opacity: 1;
    transform: translate(0, 0);
  }
  50% {
    // opacity: 1;
    transform: translate(0px, 30px);
  }
  100% {
    // opacity: 1;
    transform: translate(0, 0);
  }
}
</style>