(function($) {
	$.fn.calcHeight = function(options) {
		var opt = $.extend({
			wrapContain	:$(window),
			calcElems	:[ ".mob-header", ".mob-footer"],
			elem_in		:".mob-page-scroll-contain"
		},options);
		var _self = $(this);
		var _elem_in = _self.find(opt.elem_in);
		var outHeight;	// opt.wrapContain.height();			//获取窗体高度
		var height_1	= $(opt.calcElems[0]).outerHeight();	//获取对比元素1的整体高度
		var height_2	= $(opt.calcElems[1]).outerHeight();	//获取对比元素2的整体高度
		function starInsertHeight() {
			outHeight = opt.wrapContain.height();
			_self.css("height", outHeight - height_1 );
			//_elem_in.css("min-height", outHeight - height_1 - height_2 );
		}
		starInsertHeight();
		$(window).on("resize", function(){starInsertHeight();});
	};
})(jQuery);

// 判断是不是苹果设备 true of false
function isAppleMobileDevice(){
    return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
};

window.onload = function () {

	//首页主菜单
	$(".menu-index-wrap").tap(function() {
		$(".menu-index-btn", this).toggleClass("cur");
		$(".menu-index-show", this).toggleClass("show");
	});
	//
	$( window ).on( "orientationchange", function( event ) {
		//$( ".mob-banner" ).text( "This device is in " + event.orientation + " mode!" );
	});
};
$(function() {
	//构建页面高度结构
	$(".mob-contain").calcHeight();
	var mySwiper = new Swiper('.mob-banner-container',{
		pagination: '.mob-banner-pagination',
		mode:'horizontal', // or vertical
		loop:true,
		autoResize:true,
		grabCursor: true,
		paginationClickable: true
	});
	
	
	
	
	
	
	
	var paginations = $(".pagination",  "ul.menu-index-show");
	$(".menu-index-show").on("tap", ".pagination", function(event) {
		event.stopPropagation();
		var _this = $(this);
		paginations.filter(".cur").removeClass("cur");
		_this.addClass("cur");
		mySwiper3.swipeTo( _this.index() );
	});
	var win = $(window);
	var hei_1 = $(".mob-header").outerHeight();
	var hei_2 = $(".mob-footer").height();
	
	
	
	
	
	
	$(".mob-page-scroll-contain").calcHeight();
	var mySwiper3 = new Swiper('.mob-page-scroll-contain',{
		wrapperClass:"mob-page-scroll-wrap",
		slideClass:"mob-contain-layers",
		mode:'horizontal',
		calculateHeight:true,
		loop:false,
		autoResize:true,
		calculateHeight: true,
		onSwiperCreated:function() {
			//$(".mob-page-scroll-contain").css("min-height", win.height() - hei_1 -hei_2 );
			//$(".mob-page-scroll-wrap,.mob-contain-layers").css({height:"auto", minHeight: win.height() - hei_1 -hei_2 });
		},
		onSlideChangeStart:function() {
			$(".menu-index-wrap").trigger("tap");
			window.sliderTime = null;
		},
		onSlideChangeEnd:function(swiper) {
			paginations.filter(".cur").removeClass("cur");
			paginations.eq(swiper.activeIndex).addClass("cur");
			clearTimeout(sliderTime);
			if ( mySwiperScroll != null ) {
				mySwiperScroll.resizeFix();
			}
			sliderTime = setTimeout(function() {
				$(".menu-index-wrap").trigger("tap");
			},300)
		}
	});
	//mySwiper3.resizeFix()
	
	$(".scroll-container").swiper({
		slideClass:'scroll-slide',
		mode:'vertical',
		scrollContainer: true,
		mousewheelControl: true,
		scrollbar: {
			container:$(this).find('.swiper-scrollbar')[0]
		}
	});

	if (isAppleMobileDevice() === true ) {
	
		var mySwiperScroll = new Swiper('.mob-contain', {
			wrapperClass:"mob-contain-scroll-wrap",
			slideClass:"mob-scroll-contain",
			autoResize:true,
			scrollContainer:true,
			mousewheelControl : true,
			mode:'vertical',
			slidesPerView: 'auto',
			calculateHeight: true,
			onSwiperCreated:function() {
				//$(".mob-contain").calcHeight();
			},
			//Enable Scrollbar
			scrollbar: {
				container :'.swiper-scrollbar',
				hide: true,
				draggable: false,
				snapOnRelease: true 
			}
		});
	//
	} else {
		var mySwiperScroll = null;
		$(".mob-contain").css("overflow","hidden");
	}
//	
});