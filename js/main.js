$(document).ready(function(){

	$('#second').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:2000,
    	autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:2
	        },
	        1000:{
	            items:3
	        }
	    }
	}),
	$('.owl-carousel').owlCarousel({
	    loop:true,
	    margin:10,
	    nav:true,
	    autoplay:true,
    	autoplayTimeout:2000,
    	autoplayHoverPause:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        600:{
	            items:1
	        },
	        1000:{
	            items:1
	        }
	    }
	})

	$('#hotel').show();
	$('#ticket').hide();
	$('#place').hide();

	$('#hotel-item span').addClass('line');

	//click on ticket

	$('#ticket-item').click(function(){
		$('#hotel').hide();
		$('#ticket').show();
		$('#place').hide();

		$('#hotel-item span').removeClass('line');
		$('#ticket-item span').addClass('line');
		$('#place-item span').removeClass('line');

	});

	//click on place

	$('#place-item').click(function(){
		$('#hotel').hide();
		$('#ticket').hide();
		$('#place').show();

		$('#hotel-item span').removeClass('line');
		$('#ticket-item span').removeClass('line');
		$('#place-item span').addClass('line');

	});

	//click on place

	$('#hotel-item').click(function(){
		$('#hotel').show();
		$('#ticket').hide();
		$('#place').hide();

		$('#hotel-item span').addClass('line');
		$('#ticket-item span').removeClass('line');
		$('#place-item span').removeClass('line');

	});
});