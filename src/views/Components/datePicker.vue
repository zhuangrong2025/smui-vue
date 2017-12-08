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
          <!-- Swiper01 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">2017年</div>
              <div class="swiper-slide">2016年</div>
              <div class="swiper-slide">2015年</div>
              <div class="swiper-slide">2014年</div>
              <div class="swiper-slide">2013年</div>
              <div class="swiper-slide">2012年</div>
              <div class="swiper-slide">2011年</div>
              <div class="swiper-slide">2010年</div>
              <div class="swiper-slide">2009年</div>
            </div>
          </div>
          <!--//Swiper01-->
          <!-- Swiper02 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">12月</div>
              <div class="swiper-slide">11月</div>
              <div class="swiper-slide">10月</div>
              <div class="swiper-slide">9月</div>
              <div class="swiper-slide">8月</div>
              <div class="swiper-slide">7月</div>
              <div class="swiper-slide">6月</div>
              <div class="swiper-slide">5月</div>
              <div class="swiper-slide">4月</div>
              <div class="swiper-slide">3月</div>
              <div class="swiper-slide">2月</div>
              <div class="swiper-slide">1月</div>
            </div>
          </div>
          <!--//Swiper02-->
          <!-- Swiper03 -->
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">30日</div>
              <div class="swiper-slide">29月</div>
              <div class="swiper-slide">28月</div>
              <div class="swiper-slide">27月</div>
              <div class="swiper-slide">26月</div>
              <div class="swiper-slide">25月</div>
              <div class="swiper-slide">24月</div>
              <div class="swiper-slide">23月</div>
              <div class="swiper-slide">22月</div>
              <div class="swiper-slide">21月</div>
              <div class="swiper-slide">20月</div>
              <div class="swiper-slide">19月</div>
            </div>
          </div>
          <!--//Swiper03-->
          
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
                  console.log(result)
              }
			});
      
     
    })
  }
}
</script>