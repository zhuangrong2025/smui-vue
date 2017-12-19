<template>
<div>
  <div class="demo-space">
    <div href="" style="position: fixed; top:80%; left:50%; margin-left: -180px; text-align: center">
      <a href="http://www.iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=4491-" target="_blank" style="color: #3F80E3;" >图标库预览地址&gt;&gt;</a>
      <div style="font-size: 12px;color:#999;padding-top: 10px">替换icon-后的名称即可替换图标，例：homepage 改成 camera</div>
    </div>
    
    <!--tabbar-->
    <link rel="stylesheet" href="https://at.alicdn.com/t/font_378141_8cl3a5vspzo7p66r.css">
    <nav class="sm-tabbar">
      <a href="#" class="active"><i class="icon-homepage"></i><span>首页</span></a>
      <a href="#"><i class="icon-label"></i><span>发布</span></a>
      <a href="#"><i class="icon-service"></i><span>服务</span></a>
      <a href="#"><i class="icon-people"></i><span>我</span></a>
    </nav>
    <!--//tabbar-->
  </div> 
</div>
</template>
<script>
export default {
  data(){
    return {
    }  
  },
  mounted(){
    this.$nextTick( function(){
      
    })
  }
}
</script>