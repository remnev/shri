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