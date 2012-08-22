$(function() {
	$('.b-viewControls').click(function(e) {
		$(this).children('div').toggleClass('b-viewControls__view_state_current');
		$('.b-page').toggleClass('b-page_view_print');
	});
})