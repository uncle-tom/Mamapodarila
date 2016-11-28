$(function(){
  init();
});

function init() {
	// Fixed admin-sidebar_left
	var height_admin_sidebar_left = 85;
	var width = document.body.clientWidth;
	
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_left && width > 600 ) {
			$('.admin-sidebar_left').css('position', 'fixed');
			$('.admin-sidebar_left').css('top', '0px');
		} else {
			$('.admin-sidebar_left').css('position', 'relative');
			$('.admin-sidebar_left').css('top', '0px');
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 150;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.addproduct_cirlce_button').fadeIn()
		} else {
			$('.addproduct_cirlce_button').fadeOut()
		}
	});

	//Fixed admin-sidebar_right_position
	var height_admin_sidebar_right_position = 350;
	$(window).on('scroll', function() {
		var scroll = getCurrentScroll();
		if ( scroll >= height_admin_sidebar_right_position && width > 600 ) {
			$('.header-buy').fadeIn()
		} else {
			$('.header-buy').fadeOut()
		}
	});

	
	function getCurrentScroll() {
		return window.pageYOffset || document.documentElement.scrollTop;
	}

	// МОБИЛЬНЫЙ ХЕАДЕР

	

	// МОБИЛЬНЫЙ ХЕАДЕР ЗАКАНЧИВАЕТСЯ

	

		// ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ



		// END ОТКРЫВАЕМ ШАПКУ ОДЕЖДЫ И АКСЕССУАРОВ

		// Скролл шапки

		var didScroll;
		var lastScrollTop = 0;
		var delta = 5;
		var navbarHeight = $('header').outerHeight();

		$(window).scroll(function(event){
		  didScroll = true;
		});

		setInterval(function() {
	    if (didScroll) {
	        hasScrolled();
	        didScroll = false;
	    }
		}, 250);

		function hasScrolled() {
		    var st = $(this).scrollTop();
		    
		    // Make sure they scroll more than delta
		    if(Math.abs(lastScrollTop - st) <= delta)
		      return;
		    
		    // If they scrolled down and are past the navbar, add class .nav-up.
		    // This is necessary so you never see what is "behind" the navbar.
		    if (st > lastScrollTop && st > navbarHeight){
		      // Scroll Down
		      $('header').removeClass('nav-down').addClass('nav-up');
		    } else {
	        // Scroll Up
	        if(st + $(window).height() < $(document).height()) {
	            $('header').removeClass('nav-up').addClass('nav-down');
	        }
		    }
		    
		    lastScrollTop = st;
		}



		$(window).scroll( function(){
      /* Check the location of each desired element */
      $('.promo1').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
          
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
          $(this).animate({'margin-right':'80'},500);
        }
      });
    });

}