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