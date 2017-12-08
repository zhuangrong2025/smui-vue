 /*
  * DatePicker
  */
;(function($){
  var DatePicker = function(config){
    var _this = this
			this.config = {
			  cid:"",
        swiperParams: {
            direction: 'vertical',
            slidesPerView: 7,
            centeredSlides: true,
            paginationClickable: true,
            spaceBetween: 0,
            onSlideChangeStart: function(){
              var arr = []
               $.each(swipers, function(i, swiper){
                 arr.push(swiper.activeIndex)
               })
               return arr
            }
        },
        onConfirm: function(result){}
		  };
			//融合配置项
			$.extend(this.config,config)
      
      //swiper
      var swipers = new Swiper($(".sm-picker[data-case=" + this.config.cid + "]").find('.swiper-container'), this.config.swiperParams)
      
      //弹出
      this.pickerPop(this.config.cid)
      
      //确定
      this.confirm(this.config.cid)
      
      //取消
      this.cancel(this.config.cid)
      
	}
  
  DatePicker.prototype = {
    //弹出
		pickerPop:function(cid){
			var _this = this
      $(":not(div)[data-case=" + cid + "]").on("click", function(e){
        $(".sm-mask[data-case=" + cid + "]").fadeIn(200)
        $(".sm-picker[data-case=" + cid + "]").addClass("toggle")
			}) 
    },
    //确定
		confirm:function(cid){
			var _this = this 
      $(".sm-picker[data-case=" + cid + "]").find(".picker-header a:eq(1)").on("click", function(e){
        var swiperIndexs = _this.config.swiperParams.onSlideChangeStart()
        var result = ""
        $.each(swiperIndexs, function(i, value){
          result += $(".sm-picker[data-case=" + cid + "]").find(".swiper-container").eq(i).find(".swiper-slide").eq(value).text()
        })
        
        _this.config.onConfirm(result) //传递结果到实例变量中
        
        $(".sm-mask[data-case=" + cid + "]").fadeOut(200)
        $(".sm-picker[data-case=" + cid + "]").removeClass("toggle")
			}) 
    },
    //取消
		cancel:function(cid){
			var _this = this
      $(document).on("click", ".cancel, .sm-mask", function(e){
        e.stopPropagation()
        $(".sm-mask[data-case=" + cid + "]").fadeOut(200)
        $(".sm-picker[data-case=" + cid + "]").removeClass("toggle")
			}) 
    }
  }
  
  window.DatePicker = DatePicker
})(jQuery) 

export {
  DatePicker
}
