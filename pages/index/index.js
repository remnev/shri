/* ../../blocks/b-items/b-items.js: begin */ /**/
$(function() {
	$('.b-items').click(function(e) {
		var $item = $(e.target),
			$arrLeft = $('.b-slides__arrow-left'),
			$arrRight = $('.b-slides__arrow-right');
		$item.addClass('b-items__item_state_current').siblings().removeClass('b-items__item_state_current');
		$('.b-slides').css('margin-left', ($item.text()-1)*-980);
		$item.text() == 1 ? $arrLeft.hide() : $arrLeft.show()
		$item.text() == 6 ? $arrRight.hide() : $arrRight.show()
	})
})
/* ../../blocks/b-items/b-items.js: end */ /**/

/* ../../blocks/b-slides/__answer/b-slides__answer.js: begin */ /**/
$(function() {
	$('.b-slides__answer .text').jScrollPane();
})
/* ../../blocks/b-slides/__answer/b-slides__answer.js: end */ /**/

/* ../../blocks/b-slides/__arrow-left/b-slides__arrow-left.js: begin */ /**/
$(function() {
	$('.b-slides__arrow-left').click(function(e) {
		$('.b-slides').css('margin-left', function(i, val) {
			var valNum = val.slice(0, -2);
			if (valNum >= -980) $('.b-slides__arrow-left').hide();
			if (valNum >= 0) return false;
			$('.b-items__item_state_current').removeClass('b-items__item_state_current').siblings().filter(function() {
				if ($(this).text() == -valNum/980) $(this).addClass('b-items__item_state_current');
			});
			return +valNum+980;
		});
		$('.b-slides__arrow-right').show();
	}).hover(function(e) {
		$(this).toggleClass('b-slides__arrow-left_state_hovered');
	})
})
/* ../../blocks/b-slides/__arrow-left/b-slides__arrow-left.js: end */ /**/

/* ../../blocks/b-slides/__arrow-right/b-slides__arrow-right.js: begin */ /**/
$(function() {
	$('.b-slides__arrow-right').click(function(e) {
		$('.b-slides').css('margin-left', function(i, val) {
			var valNum = val.slice(0, -2);
			if (valNum <= -4*980) $('.b-slides__arrow-right').hide();
			if (valNum <= -5*980) return false;
			$('.b-items__item_state_current').removeClass('b-items__item_state_current').siblings().filter(function() {
				if ($(this).text() == -valNum/980+2) $(this).addClass('b-items__item_state_current');
			});
			return +valNum-980;
		});
		$('.b-slides__arrow-left').show();
	}).hover(function(e) {
		$(this).toggleClass('b-slides__arrow-right_state_hovered');
	})
})
/* ../../blocks/b-slides/__arrow-right/b-slides__arrow-right.js: end */ /**/

/* ../../blocks/b-viewControls/b-viewControls.js: begin */ /**/
$(function() {
	$('.b-viewControls').click(function(e) {
		$(this).children('div').toggleClass('b-viewControls__view_state_current');
		$('.b-page').toggleClass('b-page_view_print');
		$('.b-menu').toggleClass('b-menu_view_print');
		$('.b-viewControls__view').toggleClass('b-viewControls__view_view_print');
		$('.b-items').toggle();
		$('.b-slider').toggle();
		$('.b-print').empty().toggle();
		
		$('.b-slides__slide:hidden').each(function(i, val) {
			var $this = $(this);
			$('<h2></h2>').text($this.children('.b-slides__question').text()).appendTo('.b-print');
			$('<div></div>').html($this.find('.jspPane').html()).appendTo('.b-print');
		});
	});
})
/* ../../blocks/b-viewControls/b-viewControls.js: end */ /**/

