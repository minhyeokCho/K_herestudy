$(document).ready(function(){
	listNum();
	switchBtn();
	mainSlick();
});

function listNum(){
	$('.js_list_wrap li').each(function(){
		var cnt = $(this).index() + 1;
		if(cnt < 10){
			$(this).find('.num').text('0' + cnt);
		}else{
			$(this).find('.num').text(cnt);
		}
	})
}

function switchBtn(){
	$('.js_btn_switch').off().on('click', function(){
		$('.js_btn_switch').toggleClass('checked');

		if($('.js_btn_switch').hasClass('checked')){
			$('.js_switch_chk').prop('checked', true);
		}else{
			$('.js_switch_chk').prop('checked', false);
		}
	})
}

function mainSlick(){
	$('.js_content_wrap').slick({
		arrows: false,
		dots: false,
		autoplay: true,
		autoplaySpeed: 5000,
		speed: 1000,
		pauseOnHover: false,
		pauseOnFocus:false,
		infinite: true,
	});

	var current = $('.js_current_page'),
		total = $('.js_total_page'),
		totalCount = $('.js_content_box').length,
		slickCloned = $('.js_content_box.slick-cloned').length;
			
	total.text(totalCount - slickCloned);

	$('.js_content_wrap').on('beforeChange', function (event, slick, currentSlide) {
		$('.slick-slide').removeClass('on');
	});
	
	$('.js_content_wrap').on('afterChange', function (event, slick, currentSlide) {
		$('.slick-slide').removeClass('on');
		$('.slick-current').addClass('on');
		
		var i = (currentSlide ? currentSlide : 0) + 1;

		current.text(i);
		total.text(slick.slideCount);
	});
}