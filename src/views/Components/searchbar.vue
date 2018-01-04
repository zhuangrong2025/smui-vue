<template>
<div>
  <div class="demo-space">
    <!--searchbar-->
    <div class="sm-searchbar">
      <label></label>
      <div>
        <i class="sm-icon-search"></i>
        <input type="text" placeholder="搜索">
        <button>取消</button>
      </div>
    </div>
    <!--//searchbar-->
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
      //搜索
      $(".sm-searchbar label").on("click",function(){
         $(this).hide()
         $(".sm-searchbar").find("input").focus()
      })
      $(".sm-searchbar input").blur(function(){
        $(".sm-searchbar label").show()
        $(this).val("")
      })
    })
  }
}
</script>