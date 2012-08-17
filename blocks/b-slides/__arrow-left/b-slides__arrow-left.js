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