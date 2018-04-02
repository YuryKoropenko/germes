$('.p-indexslider').owlCarousel({
	loop:true,
	nav:true,
	items:1,
	autoplay:true,
	autoplayTimeout:10000,
	autoplayHoverPause:true
})
$(function() {
	
	var opw = $('.p-ourprod__item').width();
	$('.p-ourprod__item').height(opw);

	$('.h-nav__button').on('click', function() {
		$(this).parent().children('.h-nav').slideDown();
		$('body').addClass('no-scroll');
		return false;
	});
	$('.h-nav__close').on('click', function() {
		$(this).parent('.h-nav').slideUp();
		$('body').removeClass('no-scroll');
		return false;
	});

	$('.h-catnav__button').on('click', function() {
		$(this).parent().children('.h-catnav').slideToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.h-catnav').length) return;
				$('.h-catnav').slideUp();
				event.stopPropagation();
			});
		return false;
	});

	$('.p-mask').mask("+7(999) 999-99-99");

});