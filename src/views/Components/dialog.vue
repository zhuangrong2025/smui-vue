<template>
<div>
  <div class="demo-space">
    <a href="javascript:;" class="sm-btn primary"  data-case="caseid003">对话框</a>
    <!--dialog-->
    <div>
      <div class="sm-mask" data-case="caseid003"></div>
      <div class="sm-dialog" data-case="caseid003">
        <div class="dialog-header">标题</div>
        <div class="dialog-body">对话框内容区域对话框内容区域对话框内容区域对话框内容区域</div>
        <div class="dialog-footer">
          <a href="javascript:;">取消</a>
          <a href="javascript:;" class="primary">确定</a>
        </div>
      </div>
    </div>
    <!--//dialog-->
  </div> 
</div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick( function () {
      console.log("dialog history=" + window.history.length)
      //dialog
      $("div[data-case=caseid003]").on("click",".dialog-footer a", function(){
        $(".sm-mask[data-case=caseid003]").fadeOut(200)
        $(".sm-dialog[data-case=caseid003]").fadeOut(200)
      })

      $(':not(div)[data-case=caseid003]').on('click', function(){
        $(".sm-mask[data-case=caseid003]").fadeIn(200)
        $(".sm-dialog[data-case=caseid003]").fadeIn(200)
      });
    })
  }
}
</script>