/*
UpperBox
Version: 1.0.0
Author: Pooria Han
Website: http://pooriahan.name
Repo: https://github.com/Pooria-H/upperBox
*/

( function($) {


	$.fn.upperbox = function(inputSettings) {
		// Defaults
		var upperboxDefaults = {
			elem:	'<div class="upperbox" style="display:none">' +
							'<div class="upperbox-wrapper">' +
								'<div class="head">' +
									'<button type="button" class="close">' +
										'<i></i><i></i>' +
									'</button>' +
								'</div>' +
								'<div class="content"> </div>' +
							'</div>' +
					'</div>',
			content: "Content...",
			position: "relative",
			animate: "slide",
			class: "",
			destroyElem: true,
			templateID: null // If another template is used, this should be set to find created template
		};

		// Get options from upperboxDefaults object and override them if specified
		var settings = $.extend(upperboxDefaults, inputSettings);

		// Check if another template is not used
		if (settings.templateID == null) {
			var element = $.parseHTML( settings.elem );
		}
		// If used
		else {
			var id = settings.templateID;
			var elementTemplate = $('#' + id).html();
			var element = $.parseHTML( elementTemplate );
		}

		// Add all classes one by one
		$(element).addClass(settings.position + " " + settings.animate + " " + settings.class);

		// Add content
		$(element).find(".content").html(settings.content);

		// Show with delay
		setTimeout(function() {
			if (settings.animate == 'fade') {
				$(element).fadeIn(200);
			}
			else if (settings.animate == 'slide') {
				$(element).slideDown(200);
			}
		}, 50);

		// Append main body to plugin
		$(this).append(element);

		// Close modal on button click
		$(element).find(".close").click(function() {
			closeUpperbox();
		});
		// Close modal on Esc key press
		$(document).ready(function() {
			$(document).keyup(function(event) {
				if (event.keyCode == 27) {
					closeUpperbox();
				}
			});
		});

		// closing function
		function closeUpperbox() {
			if (settings.animate == 'fade') {
				$(element).fadeOut(200);
			}
			else if (settings.animate == 'slide') {
				$(element).slideUp(200);
			}

			// remove element if destroyElem option is true
			if (settings.destroyElem == true) {
				setTimeout(function() {
					$(element).remove();
				}, 200);
			}
		}

		return this;
	}


}(jQuery) );
