<template>
<div>
  <div class="sm-navbar" data-case="caseid008">
    <ul>
      <li class="active">选项一</li>
      <li>选项二</li>
      <li>选项三</li>
    </ul>
  </div>
  <div class="navbar-panel" data-case="caseid008">
    <div>1</div>
    <div style="display: none">2</div>
    <div style="display: none">3</div>
  </div>
</div>
</template>

<script>
export default {
  mounted(){
    this.$nextTick( function () {
      //navbar
      $(".sm-navbar[data-case=caseid008] li").each(function(index){
        $(this).on("click", function(){
          $(this).addClass("active").siblings("li").removeClass("active")
          $(".navbar-panel[data-case=caseid008] > div").eq(index).show().siblings().hide()
        })
      })
    })
  }
}

</script>
