<template>
  <div class="page-padd">
    <h3 class="title2">按钮</h3>
    <!--按钮-->
    <a href="#" class="sm-btn primary">primary</a>
    <a href="#" class="sm-btn warning">warning</a>

    <h3 class="title2">边框按钮</h3>
    <a href="#" class="sm-btn outline-primary">primary</a>
    <a href="#" class="sm-btn outline-secondary">secondary</a>

    <h3 class="title2">禁用</h3>
    <a href="#" class="sm-btn default disabled">默认 禁用</a>

    <h3 class="title2">小按钮</h3>
    <!--小按钮-->
    <a href="#" class="sm-btn mini primary">小按钮</a>
    <a href="#" class="sm-btn mini outline-primary">小按钮</a>
    <a href="#" class="sm-btn mini warning">小按钮</a>

    <h3 class="title2">链接按钮</h3>
    <!--链接按钮-->
    <a href="#" class="sm-btn link">链接</a>
    <a href="#" class="sm-btn link mini">链接</a>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        name: 'button12'
      }
    },
    methods:{
      dclick(){
         this.name = "b3"
      }
    }
  }
</script>