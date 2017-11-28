<template>
<div>
  <div class="demo-space">
    <div class="sm-btn outline-primary" id="btn1">success</div>
    <div class="sm-btn outline-secondary" id="btn2">loading</div>
    <!--toast success-->
    <div class="sm-toast" id="toast1">
      <div>
        <i class="sm-icon-success-no-circle"></i>
        <p>已完成</p>
      </div>
    </div>
    <!--//toast success-->
    <!--toast loading-->
    <div class="sm-toast" id="toast2">
      <div>
        <i class="sm-icon-loading"></i>
        <p>加载中...</p>
      </div>
    </div>
    <!--//toast loading-->
  </div> 
</div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick( function () {
      //成功提示
      $("#btn1").on("click",function(){		
         var  $toast = $("#toast1")
         if ($toast.css('display') != 'none') return;		
         $toast.fadeIn(100)
         setTimeout(function(){
           $toast.fadeOut(100)
         },2000)
      })
      
      //加载中提示
      $("#btn2").on("click",function(){		
         var  $toast = $("#toast2")
         if ($toast.css('display') != 'none') return;		
         $toast.fadeIn(100)
         setTimeout(function(){
           $toast.fadeOut(100)
         },2000)
      })
    })
  }
}
</script>