(function ($, window, document, undefined) {

	'use strict';

	// Use Enquire.js to swap Consumers Header & Consumers content sections on mobile
	enquire.register('screen and (max-width:768px)', {
	    match : function() { 
	            $('.consumers .content').insertAfter('.consumers-header');
	    },
	    unmatch : function() {
	            $('.consumers .content').insertBefore('.consumers-header');
	    }
	});

	// Velocity.js animations

	// Items to animate
	var title = $('.header .title');
	// var explainer = $('.intro .explainer');
	var device = $('.header .device img');

  	// Fade in title section in header on pageload
	title.velocity('transition.slideDownIn', {
		duration: 2000
	});

	// Slide up device in header section on pageload
	device.velocity('transition.slideUpBigIn', {
		duration: 1200
	});

  	// Fade in explainer elements on scroll with Waypoints.js

	// var inview = new Waypoint.Inview({
	// 	element: $('.intro h1'),
	// 	entered: function(direction) {
	// 		if (direction === 'down') {
	// 			explainer.velocity('transition.slideLeftIn', {
	// 				stagger: 300,
	// 				duration: 1000,
	// 				visibility: 'visible'
	// 			});	
	// 		} else {
	// 			inview.disable();
	// 		}
	// 	},
	// });

	// Initialise jQuery Nice Select: http://hernansartorio.com/jquery-nice-select/
	$('select').niceSelect();

})(jQuery, window, document);
