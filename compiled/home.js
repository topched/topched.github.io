webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(2);
__webpack_require__(1);

module.exports = function () {

	$(document).ready(function () {
		$(".kwicks").kwicks({
		    maxSize : 200,
		    spacing : 5,
		    behavior: 'menu'
		});

		var backToTop = $(".back-to-top"),
			topMenuWrapper = $(".top-menu-wrapper"),
			welcomeTitle = $("#welcome-title-container"),
			collapsed = false;

		$(window).scroll(function () {
			var scrollTop = $(this).scrollTop();

			if (scrollTop > 400) {
				backToTop.fadeIn();
			} else {
				backToTop.fadeOut();
			}

			if (!collapsed && scrollTop > 60) {
				topMenuWrapper.addClass("collapsed");
				collapsed = true;
			}

			if (collapsed && scrollTop < 60) {
				topMenuWrapper.removeClass("collapsed");
				collapsed = false;
			}
		});

		backToTop.click(function () {
			$("html, body").animate({scrollTop: 0}, 800);
			return false;
		});

		$(".kwicks li").click(function (e) {
			var id = e.currentTarget.id;

			if (id === "garage-chip-panel") {
				window.location.href = "garage-polyaspartic-chip-coating.html";
			} else if ( id === "grind-panel") {
				window.location.href = "grind-polished-concrete.html";
			} else if ( id === "epoxy-panel") {
				window.location.href = "decorative-epoxy.html";
			} else if ( id === "driveway-stairs-panel") {
				window.location.href = "driveway-stair-coating.html";
			} else {
				window.location.href = "commercial-flooring.html";
			}
		});

		$("#preloader").fadeOut('slow', function() { $(this).remove(); });
	});
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[4]);