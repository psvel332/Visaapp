
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open
    const burger = document.querySelectorAll('.navbar-burger');
    const menu = document.querySelectorAll('.navbar-menu');

    if (burger.length && menu.length) {
        for (var i = 0; i < burger.length; i++) {
            burger[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    // close
    const close = document.querySelectorAll('.navbar-close');
    const backdrop = document.querySelectorAll('.navbar-backdrop');

    if (close.length) {
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }

    if (backdrop.length) {
        for (var i = 0; i < backdrop.length; i++) {
            backdrop[i].addEventListener('click', function() {
                for (var j = 0; j < menu.length; j++) {
                    menu[j].classList.toggle('hidden');
                }
            });
        }
    }
});

(function ($) {
	"use strict";
	/*============================= seiperslider slider=================================*/
	function Swiperslide() {
	  var swiper = new Swiper(".testimonial-design-2", {
		// slidesPerView: 1,
		slidesPerView: 1,
		direction: "horizontal",
		speed: 2500,
		keyboardControl: true,
		preventClicksPropagation: true,
		autoplay: false,
		// centeredSlides:true,
		loop: true,
		breakpoints: {
		  // when window width is >= 320px
		  1240: {
			slidesPerView: 1
		  },
		  768: {
			slidesPerView: 1
		  },
		  460: {
			slidesPerView: 1
			// spaceBetween: 50,
		  }
		},
  
		navigation: {
		  nextEl: ".swiper-button-next",
		  prevEl: ".swiper-button-prev"
		},
		pagination: {
		  el: ".swiper-pagination",
		  // dynamicBullets: true,
		  clickable: true
		  // renderBullet: function (index, className) {
		  //     return '<span class="' + className + '">' + (index + 1) + '</span>';
		  //   },
		}
	  });
	}
  
	Swiperslide();
  })(jQuery);
  
  function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  