<template>
<div>
  <div class="demo-space">
    <a href="javascript:;" class="sm-btn primary" data-case="caseid005" >单列选择器</a>
    <!--picker-->
    <div>
      <div class="sm-mask"  data-case="caseid005"></div>
      <div class="sm-picker"  data-case="caseid005">
        <div class="picker-header">
          <a href="javascript:;">取消</a>
          <a href="javascript:;">确定</a>
        </div>
        <div class="picker-body">
          <!-- Swiper -->
          <div class="swiper-container">
              <div class="picker-mask"></div>
              <div class="picker-indicator"></div>
              <div class="swiper-wrapper" id="years">
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
export default {
  data(){
    return {
    }  
  },
  mounted(){
    this.$nextTick( function(){
      //swiper
      var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            slidesPerView: 7,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 0
          });
        
      //单列选择器
      var $trigger = $(":not(div)[data-case=caseid005]")
      var $mask = $(".sm-mask[data-case=caseid005]")
      var $picker = $(".sm-picker[data-case=caseid005]")
      $trigger.on("click", function(){
        $mask.fadeIn(200)
        $picker.addClass("toggle")
      })
      
      //确定
     $picker.find(".picker-header a:eq(1)").on("click", function(){
        var $activeSlide = $picker.find(".swiper-slide").eq(swiper.activeIndex)
        $mask.fadeOut(200)
        $picker.removeClass("toggle")
        $trigger.text($activeSlide.text())
      })
    })
  },
  methods:{
    picker(){
      
    }
  }
}
</script>