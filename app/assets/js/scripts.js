/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.3
 * Copyright 2015. MIT licensed.
 */
(function ($, window, document, undefined) {

	'use strict';

	// Use Enquire.js to swap Consumers Header & Consumers content sections on mobile
	enquire.register('screen and (max-width:568px)', {
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
	var explainer = $('.intro .explainer');
	var device = $('.header .device img');

  	// Fade in title section in header on pageload
	title.velocity('transition.slideDownIn', {
		duration: 2000
	});

	// Slide up device in header section on pageload
	device.velocity({
		bottom: 0
		}, 1200, 'easeOutBack' );

  	// Fade in explainer elements on scroll with Waypoints.js
	var inview = new Waypoint.Inview({
		element: $('.intro h1'),
		entered: function(direction) {
			if (direction === 'down') {
				explainer.velocity('transition.slideLeftIn', {
					stagger: 300,
					duration: 1000,
					visibility: 'visible'
				});	
			} else {
				inview.disable();
			}
		},
	});

})(jQuery, window, document);
