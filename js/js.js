$(document).ready(function(){

	$(document).click(function(e){
		if($(e.target).parents().filter('.block_language .fl_right:visible').length != 1){
			$('.block_language_select_dropdown').css('display', 'none');
		}
	});

	$('.block_language_select').click(function(){
		if($('.block_language_select_dropdown').css('display') == 'block'){
			$('.block_language_select_dropdown').css('display', 'none');
		}else{
			$('.block_language_select_dropdown').css('display', 'block');
		}
	});

	$('.block_slider_menu li').hover(
		function(){
			$('.block_slider_menu').find('.cur').removeClass('cur');
			$(this).addClass('cur');
		},
		function(){
		}
	);

	if($(window).width() > 710){
		var menu_cur = 0;
		$('.menu').hover(
			function(){
				menu_cur = $('.menu > ul > li.cur').index();
				$('.menu > ul > li.cur').removeClass('cur');
			},
			function(){
				$('.menu > ul > li:nth-child('+ (menu_cur+1) +')').addClass('cur');
				menu_cur = 0;
			}
		);
	}

	$('.mycarousel').jcarousel({
		vertical: true,
		wrap: 'circular'
	});
	$('.carousel_arrow_top').click(function(){
		$('.mycarousel').jcarousel('scroll', '-=1');
	});
	$('.carousel_arrow_bottom').click(function(){
		$('.mycarousel').jcarousel('scroll', '+=1');
	});

	setTimeout(function(){
		$('.button_bnr').addClass('open');
		$('.bnr_center .img').slideUp(600);
	}, 30000);

	$('.button_bnr').click(function(){
		if($(this).hasClass('open')){
			$(this).removeClass('open');
			$('.bnr_center .img').slideDown(600);
		}else{
			$(this).addClass('open');
			$('.bnr_center .img').slideUp(600);
		}
	});

	$('.block_faq .title a').click(function(){
		$(this).parent().toggleClass('cur');
		$(this).parent().parent().find('p').slideToggle(600);
	});

	$('.block_russian_centers_catalog .title a').click(function(){
		$(this).parent().toggleClass('cur');
		$(this).parent().parent().find('.inner').slideToggle(600);
	});

	$('.a_show_hide_more').click(function(){
		$(this).toggleClass('close');
		$(this).parent().toggleClass('mb0');
		$('.block_show_hide_more').slideToggle(600);
	});

	if($('.block_slider').length > 0){
		var cur = 0;
		var intervalID;

		intervalID = setInterval(function(){
			$('.block_slider .cur').removeClass('cur');
			$('.block_slider li').eq(cur).addClass('cur');
			if(($('.block_slider li').length-1) > cur){
				cur = cur+1;
			}else{
				cur = 0;
			}
		}, 5000);
		$('.block_slider li').hover(
			function(){
				var error = clearInterval(intervalID);
			},
			function(){
				cur = $('.block_slider .cur').index();
				intervalID = setInterval(function(){
					$('.block_slider .cur').removeClass('cur');
					$('.block_slider li').eq(cur).addClass('cur');
					if(($('.block_slider li').length-1) > cur){
						cur = cur+1;
					}else{
						cur = 0;
					}
				}, 20000);
			}
		);
	}

	$('.scrollbar-outer').scrollbar();

	$('.menu_show').click(function(){
		if($('.menu_show_holder').css('left') == '-160px'){
			$(this).addClass('active');
			$('.all').animate({left: "160px"}, 500);
			$('.menu_show_holder').animate({left: "0"}, 500);
		}else{
			$(this).removeClass('active');
			$('.all').animate({left: "0"}, 500);
			$('.menu_show_holder').animate({left: "-160px"}, 500);
		}
	});

	$('.menu_show_holder > ul > li > a').click(function(){
		$(this).toggleClass('cur');
		$(this).parent().find('.menu_show_holder_sub').slideToggle(600);
	});

	$('.header_bottom_small .button_search').click(function(){
		$('.block_search_top').slideToggle(600);
	});

	setTimeout(function(){
		var tmp_3 = $('.block_slider_view img').height();
		$('.block_slider_menu').css('height', tmp_3);
	}, 60);

	$('.block_advertisements_all.close h3 span').click(function(){
		$('.block_advertisements').stop(true, true).slideToggle(600);
	});
});

$(window).scroll(function(){
	var tmp = $('.header').height();
	var tmp_2 = $('.bnr_center').height();
	if($('.bnr_center').find('.img').css('display') == 'inline-block'){
		if($(window).scrollTop() >= tmp+tmp_2+16){
			$('.menu').addClass('menu_fixed');
		}
		else{
			$('.menu').removeClass('menu_fixed');
		}
	}else{
		if($(window).scrollTop() >= tmp+16){
			$('.menu').addClass('menu_fixed');
		}
		else{
			$('.menu').removeClass('menu_fixed');
		}
	}
});

$(window).resize(function(){
	var tmp_3 = $('.block_slider_view img').height();
	$('.block_slider_menu').css('height', tmp_3);
	if($(window).width() < 710){
		$('.menu > ul').css('display', 'none');
	}
	if($(window).width() > 710){
		$('.menu > ul').css('display', 'block');
		var menu_cur = 0;
		$('.menu').hover(
			function(){
				menu_cur = $('.menu > ul > li.cur').index();
				$('.menu > ul > li.cur').removeClass('cur');
			},
			function(){
				$('.menu > ul > li:nth-child('+ (menu_cur+1) +')').addClass('cur');
				menu_cur = 0;
			}
		);
		if($('.menu_show').hasClass('active')){
			$('.menu_show').removeClass('active');
			$('.all').animate({left: "0"}, 500);
			$('.menu_show_holder').animate({left: "-160px"}, 500);
		}
	}
	if($(window).width() < 592){
		$('.block_advertisements_all').addClass('close');
		$('.block_advertisements').css('display', 'none');
	}
	if($(window).width() > 592){
		$('.block_advertisements_all').removeClass('close');
		$('.block_advertisements').css('display', 'block');
		$('.block_search_top').css('display', 'none');
	}
});