<template>
<div>
  <div class="demo-space">
    <router-link :to="{path: '/toMessage/message', query: {timestamp: new Date()}}">
      <a href="javascript:;" class="sm-btn primary">成功提示页</a>
    </router-link>
  </div> 
</div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick( function () {
    })
  },
  methods: {
    go:function(){
    }
  }
}
</script>