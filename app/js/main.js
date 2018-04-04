$('.p-indexslider').owlCarousel({
	loop:true,
	nav:true,
	items:1,
	autoplay:true,
	autoplayTimeout:10000,
	autoplayHoverPause:true
})
$(function() {

	$('.p-select').selectmenu();
	
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

	$('.p-search__mob').on('click', function() {
		$(this).parent().children('.p-search').fadeToggle();
		$(document).click(function(event) {
			if ($(event.target).closest('.p-search').length) return;
				$('.p-search').fadeOut();
				event.stopPropagation();
			});
		return false;
	});

	$('.h-catnav__button').on('click', function() {
		$(this).parent().children('.h-catnav').slideToggle();
		$(this).toggleClass('open');
		$(document).click(function(event) {
			if ($(event.target).closest('.h-catnav').length) return;
				$('.h-catnav').slideUp();
				$('.h-catnav__button').removeClass('open');
				event.stopPropagation();
			});
		return false;
	});

	$('.p-vid__item-list a').on('click', function() {
		$('.page__p-prod-block').show();
		$('.page__p-prod-list').hide();
		$('.p-vid__item').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});
	$('.p-vid__item-block a').on('click', function() {
		$('.page__p-prod-list').show();
		$('.page__p-prod-block').hide();
		$('.p-vid__item').removeClass('active');
		$(this).parent().addClass('active');
		return false;
	});

	$('.p-mask').mask("+7(999) 999-99-99");

});