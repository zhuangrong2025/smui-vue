<template>
<div>
  <div class="demo-space">
    <a href="javascript:;" class="sm-btn primary" data-case="caseid005" >单列选择器</a>
    <!--picker-->
    <div>
      <div class="sm-mask"  data-case="caseid005"></div>
      <div class="sm-picker"  data-case="caseid005">
        <div class="picker-header">
          <a href="javascript:;" class="cancel">取消</a>
          <a href="javascript:;">确定</a>
        </div>
        <div class="picker-body">
          <!-- Swiper -->
          <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide">飞机票</div>
                <div class="swiper-slide">火车票</div>
                <div class="swiper-slide">的士票</div>
                <div class="swiper-slide">公交票</div>
                <div class="swiper-slide">地铁票</div>
                <div class="swiper-slide">其他</div>
              </div>
          </div>
          <!--//swiper-->
        </div>
      </div>
    </div>
    <!--//picker-->
  </div> 
</div>
</template>

<script>
import Swiper from '../../js/swiper.min.js'   
import picker from '../../js/picker.js'   
export default {
  data(){
    return {
    }  
  },
  mounted(){
    this.$nextTick( function(){
      //picker
      var picker = new Picker({
                cid:"caseid005",
                onConfirm: function(result){
                  console.log(result)
              }
			});
      
     
    })
  }
}
</script>