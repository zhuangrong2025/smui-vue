<template>
<div>
  <div class="swiper-container sm-swiper bullet-left">
    <div class="swiper-wrapper">
      <div class="swiper-slide">
      	<img src="https://images.uiiiuiii.com/wp-content/uploads/2018/01/uiii-bbanner-1172.jpg">
      	<span>扁平化渐变质感插画</span>
      </div>
      <div class="swiper-slide">
      	<img src="https://images.uiiiuiii.com/wp-content/uploads/2018/02/uiii-bbaner-203.jpg">
      	<span>热门流行的Imagin8立体字效</span>
      </div>
      <div class="swiper-slide">
      	<img src="https://images.uiiiuiii.com/wp-content/uploads/2018/01/uiii-bbanner-125.jpg">
      	<span>简易版油画星空</span>
      </div>
    </div>
    <!-- Add Pagination -->
    <div class="swiper-pagination"></div>
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
      //swiper
      var swiper = new Swiper('.sm-swiper', {
					pagination: '.swiper-pagination',
					paginationClickable: true,
          autoplay:2000
			})
    })
  }
}
</script>