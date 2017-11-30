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
    watch: {
      // to表示的是你要去的那个组件，from 表示的是你从哪个组件过来的，判断时间戳的顺序，开始设置页面切换顺序
      $route(to,from){
        var inTime = to.query.timestamp|| 0
        var outTime = from.query.timestamp || 0
        this.transitionName = Number(inTime) < Number(outTime) ? 'slide-right' : 'slide-left'
      }
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