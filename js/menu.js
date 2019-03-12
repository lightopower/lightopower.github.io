/* 
   Simple JQuery Accordion menu with Current state.
   HTML structure to use:

   <ul id="menu">
     <li><a href="#" class="main">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     <li><a href="#"  class="main">Sub menu heading</a>
     <ul>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       <li><a href="http://site.com/">Link</a></li>
       ...
       ...
     </ul>
     ...
     ...
   </ul>

Copyright 2009 by Arthur Jan Y. Gapusan

homepage: http://www.amazingpixels.com
email: gapusan@gmail.com

This is script adapted from Marco Van Hylckama Vlieg's simple jQuery accordion menu.
*/


function initializeMenu() {
	
	$('#menu ul').hide();
	$('#menu li:first').addClass('current');
	$('#menu li a').click(
	
	function() {
		
		/* get next element */
		var content = $(this).next();
		$('.active').removeClass('active');
		
		if((content.is('ul')) && (content.is(':visible'))) {
			
			/* remove all "current" class and add a "current" class to to the parent element */
			$('.current').removeClass('current');
			$(this).parent().addClass('current');
			
			return false;
		}
		
		if((content.is('ul')) && (!content.is(':visible'))) {
			
			/* remove all "current" class and add a "current" class to to the parent element */
			$('.current').removeClass('current');
			$(this).parent().addClass('current');
			
			/* slide up visible accordion content */
			$('#menu ul:visible').slideUp(400);
			
			/* slide down */
			content.slideDown(400);
			
			return false;
		}

		else {
		
			
			if ($(this).is('.main')) {
				/* remove all "current" class and add a "current" class to to the parent element */
				$('.current').removeClass('current');
				$(this).parent().addClass('current');
				
				/* slide up visible accordion content */
				$('#menu ul:visible').slideUp(400);
			}
			else {
				$(this).addClass('active');
			}
		}

	}
	 

	 
    );
	
}


$(document).ready(function() {
	initializeMenu();
});
