$('.p-indexslider').owlCarousel({
	loop:true,
	nav:true,
	items:1
})
$(function() {
	
	var opw = $('.p-ourprod__item').width();
	$('.p-ourprod__item').height(opw);

});