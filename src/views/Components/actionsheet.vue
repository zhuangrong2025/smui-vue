<template>
<div>
  <div class="demo-space">
    <div class="sm-btn primary" id="btn1">ActionSheet（一）</div>
    <div class="sm-btn primary" id="btn2">ActionSheet（二）</div>
    <!--底部弹出菜单-->
    <div class="sm-mask" id="mask1"></div>
    <div class="sm-actionSheet" id="actionSheet1">
      <h3>这是一个标题一，可以为一行或者两行。</h3>
      <ul>
        <li>示例菜单一</li>
        <li>示例菜单一</li>
        <li>示例菜单一</li>
      </ul>
      <a href="javascript:;" class="action-cancel">取消</a>
    </div>
    <!--//底部弹出菜单-->
    <!--底部弹出菜单-->
    <div class="sm-mask" id="mask2"></div>
    <div class="sm-actionSheet" id="actionSheet2">
      <h3>这是一个标题二，可以为一行或者两行。</h3>
      <ul>
        <li>示例菜单二</li>
        <li>示例菜单二</li>
        <li>示例菜单二</li>
      </ul>
      <a href="javascript:;" class="action-cancel">取消</a>
    </div>
    <!--//底部弹出菜单-->
  </div> 
</div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick( function () {
      //actionSheet1
      $("#btn1").on("click",function(){		 
         $("#mask1").fadeIn(200)
         $("#actionSheet1").addClass('toggle')		 
      })
      //actionSheet2
      $("#btn2").on("click",function(){		 
         $("#mask2").fadeIn(200)
         $("#actionSheet2").addClass('toggle')		 
      })
      
      $(".sm-mask, .action-cancel").on("click",function(e){
         e.stopPropagation()
         $(".sm-mask").fadeOut(300)
         $(".sm-actionSheet").removeClass('toggle')			
      })
    })
  }
}
</script>