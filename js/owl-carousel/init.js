/*
	*	Initiate the owl carousel.
*/

$(document).ready(function(){

	console.log('[INITIALIZED]\t<Owl Carousel Package>');

	let owlActive = true;

	if(owlActive){
		$(".owl-carousel").owlCarousel({
			margin: 64,
			autoWidth: true
		});
	}

});