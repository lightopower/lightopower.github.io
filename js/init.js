jQuery(function( $ ){
	/**
	 * Demo binding and preparation, no need to read this part
	 */
		//easeout, borrowed from jQuery easing plugin
		//http://gsgd.co.uk/sandbox/jquery.easing.php

		jQuery.easing.easeout = function (x, t, b, c, d) {
			return -c*t*t/(d*d) + 2*c*t/d + b;
		};
		
		
		$('a.back').click(function(){
			$(this).parents('div.pane').scrollTo( 0, 1000, { queue:true }, { axis:'xy'} );
			return false;
		});
		
		
	
	// This one is important, many browsers don't reset scroll on refreshes
	// Reset all scrollable panes to (0,0)
	$('div.pane').scrollTo( 0 );
	// Reset the screen to (0,0)
	$.scrollTo( 0 );
	
	// Target examples bindings
	var $paneTarget = $('#pane-target');
	
	$('#menu a.main').click(function(){
		$paneTarget.stop().stop();
		$paneTarget.stop().scrollTo( this.title, 700, { queue: true, axis: 'xy', easing: 'easeout' });

	});
	
	
	$('#menu ul li a').click(function(){
		$paneTarget.stop().stop();
		$paneTarget.stop().scrollTo( this.title, 700, { queue: true, axis: 'xy', easing: 'easeout' });
	});
	
	
	$('#content a.scroll').click(function(){
		$paneTarget.stop().stop();
		$paneTarget.stop().scrollTo( this.title, 700, { easing: 'easeout' });
	});


	
});






$(document).ready(function(){	

	/* Initialize Slider */
	
	
	$("#slider").easySlider({
		auto: true,
		continuous: true, 
		speed: 500,
		prevText: '',
		nextText: ''
	});	
	
	/* Initialize Opacities on Photos on Portfolio */

	$('.portfolio .image-left').css({opacity:0.7}).hover(function(){
		$(this).animate({opacity: 1}, 'fast');   
	},
	function(){
		$(this).animate({opacity: 0.7},'fast');
	});

	/* Initialize Lightbox*/
	
	$(".lightbox").lightbox();	
});




