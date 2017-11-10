<template>
<div>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
</div>
</template>
<script>
  export default {
    data () {
      return {
        transitionName: 'slide-left'
      }
    },
    beforeRouteUpdate (to, from, next) {
      let isBack = this.$router.isBack
      //this.$route.path != '/' 判断浏览器是后退或前进
      if (isBack || this.$route.path != '/') {
        this.transitionName = 'slide-right'
      } else {
        this.transitionName = 'slide-left'
      }
      this.$router.isBack = false
      next()
    }
  }
</script>

<style>  
  /*vue*/
  .child-view {
    position: absolute;
    width:100%;
    height: 100%;
    transition: all .25s linear;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
    transition: all .15s linear;
    overflow: hidden; /*必须加，防止有滚动条并在页面转场时出现位置跳动*/
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translateX(-100%);
    transform: translateX(-100%);
    overflow: hidden;
  }
  /*page*/
  body{
     background-color: #f8f8f8;
  }
  .page-padd{
    padding: 0 15px;
  }
  .title2{
    margin-top: 20px;
    padding: 10px 0 5px;
    font-size: 14px;
    color: #888;
  }
</style>