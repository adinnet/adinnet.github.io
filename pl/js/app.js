

$(function(){
	//Init Navigation
//	var nav = $('.swiper-nav').swiper({
//		slidesPerView: 'auto',
//		freeMode:true,
//		freeModeFluid:true,
//		onSlideClick: function(nav){
//			pages.swipeTo( nav.clickedSlideIndex )
//		}
//	})
	//首页主菜单
	$(".menu-index-wrap").tap(function() {
		$(".menu-index-btn", this).toggleClass("cur");
		$(".menu-index-show", this).toggleClass("show");
	});
	var paginations = $(".pagination",  "ul.menu-index-show");
	$(".menu-index-show").on("tap", ".pagination", function(event) {
		event.stopPropagation();
		var _this = $(this);
		paginations.filter(".cur").removeClass("cur");
		_this.addClass("cur");
		pages.swipeTo( _this.index() );
	});
	
	var mySwiper = new Swiper('.mob-banner-container',{
		pagination: '.mob-banner-pagination',
		mode:'horizontal', // or vertical
		loop:true,
		autoResize:true,
		grabCursor: true,
		paginationClickable: true
	});


	var nav = $('.swiper-nav')

	//Function to Fix Pages Height
	function fixPagesHeight() {
		$('.swiper-pages').css({
			height: $(window).height()-nav.height()
		})
	}
	$(window).on('resize',function(){
		fixPagesHeight()
	})
	fixPagesHeight()

	//Init Pages
	var pages = $('.swiper-pages').swiper({
		onSlideChangeStart:function() {
			$(".menu-index-wrap").trigger("tap");
			window.sliderTime = null;
		},
		onSlideChangeEnd:function(swiper) {
			paginations.filter(".cur").removeClass("cur");
			paginations.eq(swiper.activeIndex).addClass("cur");
			clearTimeout(sliderTime);
			sliderTime = setTimeout(function() {
				$(".menu-index-wrap").trigger("tap");
			},300)
		}
	});

	
	// 判断是不是苹果设备 true of false
	function isAppleMobileDevice(){
		return (/iphone|ipod|ipad|Macintosh/i.test(navigator.userAgent.toLowerCase()));
	};
	
	
	if (isAppleMobileDevice() === true ) {
		//Scroll Containers
		$('.scroll-container').each(function(){
			$(this).swiper({
				mode:'vertical',
				scrollContainer: true,
				mousewheelControl: true,
				scrollbar: {
					container:$(this).find('.swiper-scrollbar')[0]
				}
			})
		})
	} else {
		$(".swiper-scrollbar").hide(0);
		$(".scroll-container").css("overflow","auto");
	}

	

})