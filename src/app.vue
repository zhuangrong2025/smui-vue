<template>
  <transition :name="transitionName">
    <router-view class="child-view"></router-view>
  </transition>
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
      if (isBack) {
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

  transition: all .3s linear;
  }
  .slide-left-enter, .slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
  }
  .slide-left-leave-active, .slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
  }
  /*page*/
  body{
     background-color: #f8f8f8;
  }
  .page-padd{
    padding: 15px;
  }
  .title2{
    margin-top: 20px;
    padding: 10px 0 5px;
    font-size: 14px;
    color: #888;
  }
</style>