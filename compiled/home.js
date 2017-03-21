webpackJsonp([6],{

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

var nav = __webpack_require__(4);
var borderMenu = __webpack_require__(3);
var navTemplate = __webpack_require__(6);
var footerTemplate = __webpack_require__(5);

module.exports = function () {

	$(document).ready(function () {
		var navDiv = document.createElement("div");
		navDiv.innerHTML = navTemplate();
		$("nav").append(navDiv);

		var footerDiv = document.createElement("div");
		footerDiv.innerHTML = footerTemplate();
		$("footer").append(footerDiv);

		nav.init();
		borderMenu.init();

		$("#preloader").fadeOut('slow', function() { $(this).remove(); });
	});
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[40]);