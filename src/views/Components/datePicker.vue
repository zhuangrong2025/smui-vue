<template>
<div>
  <div class="demo-space">
    <a href="javascript:;" class="sm-btn primary" data-case="caseid007">时间选择器</a>

    <!--datePicker-->
    <div>
      <div class="sm-mask" data-case="caseid007"></div>
      <div class="sm-picker" data-case="caseid007">
        <div class="picker-header">
          <a href="javascript:;" class="cancel">取消</a>
          <a href="javascript:;">确定</a>
        </div>
        <div class="picker-body">
          <!--swiper-->
        </div>
      </div>
    </div>
    <!--//datePicker-->
  </div> 
</div>
</template>

<script>
import datePicker from '../../js/datePicker.js'   
export default {
  data(){
    return {
    }  
  },
  mounted(){
    this.$nextTick( function(){
      //datePicker
      var datePicker = new DatePicker({
                cid:"caseid007",
                onConfirm: function(result){
                  $(".sm-btn").text(result)
                }
			    });
    })
  }
}
</script>