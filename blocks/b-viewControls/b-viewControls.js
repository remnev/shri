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