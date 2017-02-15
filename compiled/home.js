webpackJsonp([1],{

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(2);
__webpack_require__(1);

module.exports = function () {

	$("#preloader").fadeOut('slow', function() { $(this).remove(); });

	$().ready(function () {
		$(".kwicks").kwicks({
		    maxSize : 200,
		    spacing : 5,
		    behavior: 'menu'
		});
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 400) {
			$(".back-to-top").fadeIn();
		} else {
			$(".back-to-top").fadeOut();
		}
	});

	$(".back-to-top").click(function () {
		$("html, body").animate({scrollTop: 0}, 800);
		return false;
	});
	
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[4]);