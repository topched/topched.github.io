webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {/**
 * borderMenu.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 *
 *	Modified from Codrops borderMenu
 */
module.exports = function() {

 	// http://stackoverflow.com/a/11381730/989439
	function mobilecheck() {
		var check = false;
		(function(a){if(/(android|ipad|playbook|silk|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	}

	function init() {

		var menu = $('#bt-menu'),
			trigger = menu.find('div.bt-menu-trigger'),
			eventtype = mobilecheck() ? 'touchstart' : 'click',
			resetMenu = function () {
				menu.removeClass('bt-menu-open');
				menu.addClass('bt-menu-close');
				trigger.removeClass('open');
			},
			closeClickFn = function (ev) {
				resetMenu();
				overlay.removeEventListener(eventtype, closeClickFn);
			}

		var overlay = document.createElement('div');
		overlay.className = 'bt-overlay';
		menu.append( overlay );

		trigger.on( eventtype, function( ev ) {
			ev.stopPropagation();
			ev.preventDefault();

			if (menu.hasClass('bt-menu-open')) {
				resetMenu();
			} else {
				menu.removeClass('bt-menu-close');
				menu.addClass('bt-menu-open');
				trigger.addClass('open');
				overlay.addEventListener(eventtype, closeClickFn);
			}
		});
	}

	init();
}();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*!
 *  Kwicks: Sexy Sliding Panels for jQuery - v2.2.1
 *  http://devsmash.com/projects/kwicks
 *
 *  Copyright 2013 Jeremy Martin (jmar777)
 *  Contributors: Duke Speer (Duke3D), Guillermo Guerrero (gguerrero)
 *  Released under the MIT license
 *  http://www.opensource.org/licenses/mit-license.php
 */

 var $ = __webpack_require__(0);

//  var kwicks = { };

// var kwicks = {

// 	/**
// 	 *  API methods for the plugin
// 	 */
// 	 methods = {
// 		init: function(opts) {
// 			var defaults = {
// 				// general options:
// 				maxSize: -1,
// 				minSize: -1,
// 				spacing: 5,
// 				duration: 500,
// 				isVertical: false,
// 				easing: undefined,
// 				autoResize: true,
// 				behavior: null,
// 				// menu behavior options:
// 				delayMouseIn: 0,
// 				delayMouseOut: 0,
// 				selectOnClick: true,
// 				deselectOnClick: false,
// 				// slideshow behavior options:
// 				interval: 2500,
// 				interactive: true
// 			};
// 			var o = $.extend(defaults, opts);

// 			// validate and normalize options
// 			if (o.minSize !== -1 && o.maxSize !== -1)
// 				throw new Error('Kwicks options minSize and maxSize may not both be set');
// 			if (o.behavior && o.behavior !== 'menu' && o.behavior !== 'slideshow')
// 				throw new Error('Unrecognized Kwicks behavior specified: ' + o.behavior);
// 			$.each(['minSize', 'maxSize', 'spacing'], function(i, prop) {
// 				var val = o[prop];
// 				switch (typeof val) {
// 					case 'number':
// 						o[prop + 'Units'] = 'px';
// 						break;
// 					case 'string':
// 						if (val.slice(-1) === '%') {
// 							o[prop + 'Units'] = '%';
// 							o[prop] = +val.slice(0, -1) / 100;
// 						} else if (val.slice(-2) === 'px') {
// 							o[prop + 'Units'] = 'px';
// 							o[prop] = +val.slice(0, -2);
// 						} else {
// 							throw new Error('Invalid value for Kwicks option ' + prop + ': ' + val);
// 						}
// 						break;
// 					default:
// 						throw new Error('Invalid value for Kwicks option ' + prop + ': ' + val);
// 				}
// 			});
						
// 			return this.each(function() {
// 				$(this).data('kwicks', new Kwick(this, o));
// 			});
// 		},
// 		expand: function(index, opts) {
// 			if (typeof index === 'object') {
// 				opts = index;
// 				index = undefined;
// 			}

// 			var delay = opts && opts.delay || 0;
			
// 			return this.each(function() {
// 				var $this = $(this),
// 					kwick = $this.data('kwicks');

// 				// assume this is the container
// 				if (kwick) {
// 					index = typeof index === 'number' ? index : -1;
// 				}
// 				// otherwise, assume we have a panel
// 				else if (kwick = $this.parent().data('kwicks')) {
// 					index = $this.index();
// 				} else {
// 					return;
// 				}

// 				var expand = function() {
// 					// bail out if the panel is already expanded
// 					if (index === kwick.expandedIndex) return;

// 					var $panels = kwick.$panels,
// 						expanded = $panels[index] || null;

// 					kwick.$container.trigger('expand.kwicks', {
// 						index: index,
// 						expanded: expanded,
// 						collapsed: $panels.not(expanded).get(),
// 						oldIndex: kwick.expandedIndex,
// 						oldExpanded: kwick.getExpandedPanel(),
// 						isAnimated: kwick.isAnimated
// 					});
// 				};

// 				var timeoutId = kwick.$container.data('kwicks-timeout-id');
// 				if (timeoutId) {
// 					kwick.$container.removeData('kwicks-timeout-id');
// 					clearTimeout(timeoutId);
// 				}
// 				if (delay > 0) {
// 					kwick.$container.data('kwicks-timeout-id', setTimeout(expand, delay));
// 				} else {
// 					expand();
// 				}
// 			});
// 		},
// 		expanded: function() {
// 			var kwick = this.first().data('kwicks');
// 			if (!kwick) return;
// 			return kwick.expandedIndex;
// 		},
// 		select: function(index) {
// 			return this.each(function() {
// 				var $this = $(this),
// 					kwick = $this.data('kwicks');
				
// 				// assume this is the container
// 				if (kwick) {
// 					index = typeof index === 'number' ? index : -1;
// 				}
// 				// otherwise, assume we have a panel
// 				else if (kwick = $this.parent().data('kwicks')) {
// 					index = $this.index();
// 				} else {
// 					return;
// 				}

// 				// don't trigger event if its already selected
// 				if (index !== kwick.selectedIndex) {
// 					var $panels = kwick.$panels,
// 						selected = $panels[index] || null;

// 					kwick.$container.trigger('select.kwicks', {
// 						index: index,
// 						selected: selected,
// 						unselected: $panels.not(selected).get(),
// 						oldIndex: kwick.selectedIndex,
// 						oldSelected: kwick.getSelectedPanel()
// 					});
// 				}

// 				// call expand
// 				kwick.$container.kwicks('expand', index);
// 			});
// 		},
// 		selected: function() {
// 			var kwick = this.first().data('kwicks');
// 			if (!kwick) return;
// 			return kwick.selectedIndex;
// 		},
// 		resize: function() {
// 			return this.each(function() {
// 				var $this = $(this),
// 					kwick = $this.data('kwicks');

// 				if (!kwick) return;

// 				kwick.resize();
// 			});
// 		},
// 		destroy: function() {
// 			return this.each(function() {
// 				var $this = $(this),
// 					kwick = $this.data('kwicks');

// 				if (!kwick) return;

// 				kwick.destroy();
// 			});
// 		}
// 	},

// 	/**
// 	 *  Expose the actual plugin
// 	 */
// 	kwicks = function(opts) {
// 		if (methods[opts]) {
// 			return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
// 		} else if (typeof opts === 'object' || !opts) {
// 			return methods.init.apply(this, arguments);
// 		} else {
// 			throw new Error('Unrecognized kwicks method: ' + opts);
// 		}
// 	},

// 	// /**
// 	//  *  Special event for triggering default behavior on 'expand.kwicks' events
// 	//  */
// 	// $.event.special.expand = {
// 	// 	_default: function(e, data) {
// 	// 		if (e.namespace !== 'kwicks') return;
// 	// 		var kwick = $(e.target).data('kwicks');
// 	// 		if (kwick) kwick.expand(data.index);
// 	// 	}
// 	// },

// 	// /**
// 	//  *  Special event for triggering default behavior on 'select.kwicks' events
// 	//  */
// 	// $.event.special.select = {
// 	// 	_default: function(e, data) {
// 	// 		if (e.namespace !== 'kwicks') return;
// 	// 		var kwick = $(e.target).data('kwicks');
// 	// 		if (kwick) kwick.select(data.index);
// 	// 	}
// 	// },

// 	/**
// 	 *  Instantiates a new Kwick instance using the provided container and options.
// 	 */
// 	Kwick = function Kwick(container, opts) {
// 		var self = this;

// 		this.opts = opts;

// 		// an array of callbacks to invoke if 'destroy' is invoked
// 		this.onDestroyHandlers = [];

// 		// references to our DOM elements
// 		var orientation = opts.isVertical ? 'vertical' : 'horizontal';
// 		this.$container = $(container);
// 		this.$panels = this.$container.children();

// 		// semi-smart add/remove around container classes so that we don't bork
// 		// the styling if/when destroy is called
// 		var containerClasses = ['kwicks', 'kwicks-' + orientation];
// 		$.each(containerClasses, function(className) {
// 			if (self.$container.hasClass(className)) return;
// 			self.$container.addClass(className);
// 			self.onDestroy(function() {
// 				self.$container.removeClass(className);
// 			});
// 		});

// 		// zero-based, -1 for "none"
// 		this.selectedIndex = this.$panels.filter('.kwicks-selected').index();
// 		this.expandedIndex = this.selectedIndex;

// 		// each instance has a primary and a secondary dimension (primary is the animated dimension)
// 		this.primaryDimension = opts.isVertical ? 'height' : 'width';
// 		this.secondaryDimension = opts.isVertical ? 'width' : 'height';

// 		// initialize panel sizes
// 		this.calculatePanelSizes();

// 		// likewise, we have primary and secondary alignments (all panels but the last use primary,
// 		// which uses the secondary alignment). this is to allow the first and last panels to have
// 		// fixed offsets. this reduces jittering, which is much more noticeable on the last item.
// 		this.primaryAlignment = opts.isVertical ? 'top' : 'left';
// 		this.secondaryAlignment = opts.isVertical ? 'bottom' : 'right';

// 		// object for creating a "master" animation loop for all panel animations
// 		this.$timer = $({ progress: 0 });

// 		// keeps track of whether or not an animation is in progress
// 		this.isAnimated = false;

// 		// the current offsets for each panel
// 		this.offsets = this.getOffsetsForExpanded();

// 		this.updatePanelStyles();
// 		this.initBehavior();
// 		this.initWindowResizeHandler();

// 		// somewhat of a blind stab at handling rare/sporadic failures to initialize styles.
// 		// https://github.com/jmar777/kwicks/issues/31
// 		setTimeout(function() {
// 			self.updatePanelStyles();
// 		}, 100);
// 	},

// 	/**
// 	 * Calculates size, minSize, maxSize, and spacing based on the current size of the container and
// 	 * the user-provided options.  The results will be stored on this.panelSize, this.panelMinSize,
// 	 * this.panelMaxSize, and this.panelSpacing.  This should be run on initialization and whenever
// 	 * the container's primary dimension may have changed in size.
// 	 */
// 	Kwick.prototype.calculatePanelSizes = function() {
// 		var opts = this.opts,
// 			containerSize = this.getContainerSize(true);

// 		// calculate spacing first
// 		if (opts.spacingUnits === '%') {
// 			this.panelSpacing = containerSize * opts.spacing;
// 		} else {
// 			this.panelSpacing = opts.spacing;
// 		}

// 		var numPanels = this.$panels.length,
// 			sumSpacing = this.panelSpacing * (numPanels - 1),
// 			sumPanelSize = containerSize - sumSpacing;

// 		this.panelSize = sumPanelSize / numPanels;

// 		if (opts.minSize === -1) {
// 			if (opts.maxSize === -1) {
// 				// if neither minSize or maxSize or set, then we try to pick a sensible default
// 				if (numPanels < 5) {
// 					this.panelMaxSize = containerSize / 3 * 2;
// 				} else {
// 					this.panelMaxSize = containerSize / 3;
// 				}
// 			} else if (opts.maxSizeUnits === '%') {
// 				this.panelMaxSize = sumPanelSize * opts.maxSize;
// 			} else {
// 				this.panelMaxSize = opts.maxSize;
// 			}

// 			// at this point we know that this.panelMaxSize is set
// 			this.panelMinSize = (sumPanelSize - this.panelMaxSize) / (numPanels - 1);
// 		} else if (opts.maxSize === -1) {
// 			// at this point we know that opts.minSize is set
// 			if (opts.minSizeUnits === '%') {
// 				this.panelMinSize = sumPanelSize * opts.minSize;
// 			} else {
// 				this.panelMinSize = opts.minSize;
// 			}

// 			// at this point we know that this.panelMinSize is set
// 			this.panelMaxSize = sumPanelSize - (this.panelMinSize * (numPanels - 1));
// 		}
// 	},

// 	/**
// 	 *  Returns the calculated panel offsets based on the currently expanded panel.
// 	 */
// 	Kwick.prototype.getOffsetsForExpanded = function() {
// 		// todo: cache the offset values
// 		var expandedIndex = this.expandedIndex,
// 			numPanels = this.$panels.length,
// 			spacing = this.panelSpacing,
// 			size = this.panelSize,
// 			minSize = this.panelMinSize,
// 			maxSize = this.panelMaxSize;

// 		//first panel is always offset by 0
// 		var offsets = [0];

// 		for (var i = 1; i < numPanels; i++) {
// 			// no panel is expanded
// 			if (expandedIndex === -1) {
// 				offsets[i] = i * (size + spacing);
// 			}
// 			// this panel is before or is the expanded panel
// 			else if (i <= expandedIndex) {
// 				offsets[i] = i * (minSize + spacing);
// 			}
// 			// this panel is after the expanded panel
// 			else {
// 				offsets[i] = maxSize + (minSize * (i - 1)) + (i * spacing);
// 			}
// 		}

// 		return offsets;
// 	};

// 	*
// 	 *  Sets the style attribute on the specified element using the provided value.  This probably
// 	 *  doesn't belong on Kwick.prototype, but here it is...
	 
// 	Kwick.prototype.setStyle = (function() {
// 		if ($.support.style) {
// 			return function(el, style) { el.setAttribute('style', style); };
// 		} else {
// 			return function (el, style) { el.style.cssText = style; };
// 		}
// 	})();

// 	/**
// 	 *  Updates the offset and size styling of each panel based on the current values in
// 	 *  `this.offsets`.  Also does some special handling to convert panels to absolute positioning
// 	 *  the first time this is invoked.
// 	 */
// 	Kwick.prototype.updatePanelStyles = function() {
// 		var offsets = this.offsets,
// 			$panels = this.$panels,
// 			pDim = this.primaryDimension,
// 			pAlign = this.primaryAlignment,
// 			sAlign = this.secondaryAlignment,
// 			spacing = this.panelSpacing,
// 			containerSize = this.getContainerSize();

// 		// the kwicks-processed class ensures that panels are absolutely positioned, but on our
// 		// first pass we need to set offsets, width|length, and positioning atomically to prevent
// 		// mid-update repaints
// 		var stylePrefix = !!this._stylesInited ? '' : 'position:absolute;',
// 			offset, size, prevOffset, style;

// 		// loop through remaining panels
// 		for (var i = $panels.length; i--;) {
// 			prevOffset = offset;
// 			// todo: maybe we do one last pass at the end and round offsets, rather than on every
// 			// update
// 			offset = Math.round(offsets[i]);
// 			if (i === $panels.length - 1) {
// 				size = containerSize - offset;
// 				style = sAlign + ':0;' + pDim + ':' + size + 'px;';
// 			} else {
// 				size = prevOffset - offset - spacing;
// 				style = pAlign + ':' + offset + 'px;' + pDim + ':' + size + 'px;';
// 			}
// 			this.setStyle($panels[i], stylePrefix + style);
// 		}

// 		if (!this._stylesInited) {
// 			this.$container.addClass('kwicks-processed');
// 			this._stylesInited = true;
// 		}
// 	};

// 	/**
// 	 *  Assuming for a moment that out-of-the-box behaviors aren't a horrible idea, this method
// 	 *  encapsulates the initialization logic thereof.
// 	 */
// 	Kwick.prototype.initBehavior = function() {
// 		if (!this.opts.behavior) return;

// 		switch (this.opts.behavior) {
// 			case 'menu':
// 				this.initMenuBehavior();
// 				break;
// 			case 'slideshow':
// 				this.initSlideshowBehavior();
// 				break;
// 			default:
// 				throw new Error('Unrecognized behavior option: ' + this.opts.behavior);
// 		}
// 	};

// 	/**
// 	 * Initializes the menu behavior.
// 	 */
// 	Kwick.prototype.initMenuBehavior = function() {
// 		var self = this,
// 			opts = self.opts;

// 		this.addEventHandler(this.$container, 'mouseleave', function() {
// 			self.$container.kwicks('expand', -1, { delay: opts.delayMouseOut });
// 		});

// 		this.addEventHandler(this.$panels, 'mouseenter', function() {
// 			$(this).kwicks('expand', { delay: opts.delayMouseIn });
// 		});

// 		if (!opts.selectOnClick && !opts.deselectOnClick) return;

// 		this.addEventHandler(this.$panels, 'click', function() {
// 			var $this = $(this),
// 				isSelected = $this.hasClass('kwicks-selected');

// 			if (isSelected && opts.deselectOnClick) {
// 				$this.parent().kwicks('select', -1);
// 			} else if (!isSelected && opts.selectOnClick) {
// 				$this.kwicks('select');
// 			}
// 		});
// 	};

// 	/**
// 	 * Initializes the slideshow behavior.
// 	 */
// 	Kwick.prototype.initSlideshowBehavior = function() {
// 		var self = this,
// 			numSlides = this.$panels.length,
// 			curSlide = 0,
// 			// flag to handle weird corner cases
// 			running = false,
// 			intervalId;

// 		var start = function() {
// 			if (running) return;
// 			intervalId = setInterval(function() {
// 				self.$container.kwicks('expand', ++curSlide % numSlides);
// 			}, self.opts.interval);
// 			running = true;
// 		};
// 		var pause = function() {
// 			clearInterval(intervalId);
// 			running = false;
// 		};

// 		start();
// 		this.onDestroy(pause);

// 		if (!this.opts.interactive) return;

// 		this.addEventHandler(this.$container, 'mouseenter', pause);
// 		this.addEventHandler(this.$container, 'mouseleave', start);
// 		this.addEventHandler(this.$panels, 'mouseenter', function() {
// 			curSlide = $(this).kwicks('expand').index();
// 		});
// 	};

// 	/**
// 	 * Sets up a throttled window resize handler that triggers resize logic for the panels
// 	 * todo: hideous code, needs refactor for the eye bleeds
// 	 */
// 	Kwick.prototype.initWindowResizeHandler = function() {
// 		if (!this.opts.autoResize) return;

// 		var self = this,
// 			prevTime = 0,
// 			execScheduled = false,
// 			$window = $(window);

// 		var onResize = function(e) {
// 			// if there's no event, then this is a scheduled from our setTimeout
// 			if (!e) { execScheduled = false; }

// 			// if we've already run in the last 20ms, then delay execution
// 			var now = +new Date();
// 			if (now - prevTime < 20) {
// 				// if we already scheduled a run, don't do it again
// 				if (execScheduled) return;
// 				setTimeout(onResize, 20 - (now - prevTime));
// 				execScheduled = true;
// 				return;
// 			}

// 			// throttle rate is satisfied, go ahead and run
// 			prevTime = now;
// 			self.resize();
// 		};

// 		this.addEventHandler($window, 'resize', onResize);
// 	};

// 	/**
// 	 * Returns the size in pixels of the container's primary dimension. This value is cached as it
// 	 * is used repeatedly during animation loops, but the cache can be cleared by passing `true`.
// 	 * todo: benchmark to see if this caching business is even at all necessary.
// 	 */
// 	Kwick.prototype.getContainerSize = function(clearCache) {
// 		var containerSize = this._containerSize;
// 		if (clearCache || !containerSize) {
// 			containerSize = this._containerSize = this.$container[this.primaryDimension]();
// 		}
// 		return containerSize;
// 	};

// 	/**
// 	 *  Gets a reference to the currently expanded panel (if there is one)
// 	 */
// 	Kwick.prototype.getExpandedPanel = function() {
// 		return this.$panels[this.expandedIndex] || null;
// 	};

// 	/**
// 	 *  Gets a reference to the currently collapsed panels
// 	 */
// 	Kwick.prototype.getCollapsedPanels = function() {
// 		if (this.expandedIndex === -1) return [];
// 		return this.$panels.not(this.getExpandedPanel()).get();
// 	};

// 	/**
// 	 *  Gets a reference to the currently selected panel (if there is one)
// 	 */
// 	Kwick.prototype.getSelectedPanel = function() {
// 		return this.$panels[this.selectedIndex] || null;
// 	};

// 	/**
// 	 * Gets a reference to the currently unselected panels
// 	 */
// 	Kwick.prototype.getUnselectedPanels = function() {
// 		return this.$panels.not(this.getSelectedPanel()).get();
// 	};

// 	/**
// 	 * Registers a handler to be invoked if/when 'destroy' is invoked
// 	 */
// 	Kwick.prototype.onDestroy = function(handler) {
// 		this.onDestroyHandlers.push(handler);
// 	};

// 	/**
// 	 * Adds an event handler and automatically registers it to be removed if/when
// 	 * the plugin is destroyed.
// 	 */
// 	Kwick.prototype.addEventHandler = function($el, eventName, handler) {
// 		$el.on(eventName, handler);
// 		this.onDestroy(function() {
// 			$el.off(eventName, handler);
// 		});
// 	};

// 	/**
// 	 * "Destroys" this Kwicks instance plugin by performing the following:
// 	 * 1) Stops any currently running animations
// 	 * 2) Invokes all destroy handlers
// 	 * 3) Clears out all style attributes on panels
// 	 * 4) Removes all kwicks class names from panels and container
// 	 * 5) Removes the 'kwicks' data value from the container
// 	 */
// 	Kwick.prototype.destroy = function() {
// 		this.$timer.stop();
// 		for (var i = 0, len = this.onDestroyHandlers.length; i < len; i++) {
// 			this.onDestroyHandlers[i]();
// 		}
// 		this.$panels
// 			.attr('style', '')
// 			.removeClass('kwicks-expanded kwicks-selected kwicks-collapsed');
// 		this.$container
// 			// note: kwicks and kwicks-<orientation> classes have extra smarts around them
// 			// back in the constructor
// 			.removeClass('kwicks-processed')
// 			.removeData('kwicks');
// 	};

// 	/**
// 	 *  Forces the panels to be updated in response to the container being resized.
// 	 */
// 	Kwick.prototype.resize = function() {
// 		// bail out if container size hasn't changed
// 		if (this.getContainerSize() === this.getContainerSize(true)) return;

// 		this.calculatePanelSizes();
// 		this.offsets = this.getOffsetsForExpanded();

// 		// if the panels are currently being animated, we'll just set a flag that can be detected
// 		// during the next animation step
// 		if (this.isAnimated) {
// 			this._dirtyOffsets = true;
// 		} else {
// 			// otherwise update the styles immediately
// 			this.updatePanelStyles();
// 		}
// 	};

// 	/**
// 	 *  Selects the panel with the specified index (use -1 to select none)
// 	 */
// 	Kwick.prototype.select = function(index) {
// 		// make sure the panel isn't already selected
// 		if (index === this.selectedIndex) return;

// 		$(this.getSelectedPanel()).removeClass('kwicks-selected');
// 		this.selectedIndex = index;
// 		$(this.getSelectedPanel()).addClass('kwicks-selected');
// 	};

// 	/**
// 	 *  Expands the panel with the specified index (use -1 to expand none)
// 	 */
// 	Kwick.prototype.expand = function(index) {
// 		var self = this,
// 			// used for expand-complete event later on
// 			oldIndex = this.expandedIndex,
// 			oldExpanded = this.getExpandedPanel();

// 		// if the index is -1, then default it to the currently selected index (which will also be
// 		// -1 if no panels are currently selected)
// 		if (index === -1) index = this.selectedIndex;

// 		// make sure the panel isn't already expanded
// 		if (index === this.expandedIndex) return;

// 		$(this.getExpandedPanel()).removeClass('kwicks-expanded');
// 		$(this.getCollapsedPanels()).removeClass('kwicks-collapsed');
// 		this.expandedIndex = index;
// 		$(this.getExpandedPanel()).addClass('kwicks-expanded');
// 		$(this.getCollapsedPanels()).addClass('kwicks-collapsed');

// 		// handle panel animation
// 		var $timer = this.$timer,
// 			numPanels = this.$panels.length,
// 			startOffsets = this.offsets.slice(),
// 			offsets = this.offsets,
// 			targetOffsets = this.getOffsetsForExpanded();

// 		$timer.stop()[0].progress = 0;
// 		this.isAnimated = true;
// 		$timer.animate({ progress: 1 }, {
// 			duration: this.opts.duration,
// 			easing: this.opts.easing,
// 			step: function(progress) {
// 				// check if we've resized mid-animation (yes, we're thorough)
// 				if (self._dirtyOffsets) {
// 					offsets = self.offsets;
// 					targetOffsets = self.getOffsetsForExpanded();
// 					self._dirtyOffsets = false;
// 				}
// 				offsets.length = 0;
// 				for (var i = 0; i < numPanels; i++) {
// 					var targetOffset = targetOffsets[i],
// 						newOffset = targetOffset - ((targetOffset - startOffsets[i]) * (1 - progress));
// 					offsets[i] = newOffset;
// 				}
// 				self.updatePanelStyles();
// 			},
// 			complete:  function() {
// 				self.isAnimated = false;
// 				self.$container.trigger('expand-complete.kwicks', {
// 					index: index,
// 					expanded: self.getExpandedPanel(),
// 					collapsed: self.getCollapsedPanels(),
// 					oldIndex: oldIndex,
// 					oldExpanded: oldExpanded,
// 					// note: this will always be false but is included to match expand event
// 					isAnimated: false
// 				});
// 			}
// 		});
// };

// module.exports = kwicks;

(function($) {

	/**
	 *  API methods for the plugin
	 */
	var methods = {
		init: function(opts) {
			var defaults = {
				// general options:
				maxSize: -1,
				minSize: -1,
				spacing: 5,
				duration: 500,
				isVertical: false,
				easing: undefined,
				autoResize: true,
				behavior: null,
				// menu behavior options:
				delayMouseIn: 0,
				delayMouseOut: 0,
				selectOnClick: true,
				deselectOnClick: false,
				// slideshow behavior options:
				interval: 2500,
				interactive: true
			};
			var o = $.extend(defaults, opts);

			// validate and normalize options
			if (o.minSize !== -1 && o.maxSize !== -1)
				throw new Error('Kwicks options minSize and maxSize may not both be set');
			if (o.behavior && o.behavior !== 'menu' && o.behavior !== 'slideshow')
				throw new Error('Unrecognized Kwicks behavior specified: ' + o.behavior);
			$.each(['minSize', 'maxSize', 'spacing'], function(i, prop) {
				var val = o[prop];
				switch (typeof val) {
					case 'number':
						o[prop + 'Units'] = 'px';
						break;
					case 'string':
						if (val.slice(-1) === '%') {
							o[prop + 'Units'] = '%';
							o[prop] = +val.slice(0, -1) / 100;
						} else if (val.slice(-2) === 'px') {
							o[prop + 'Units'] = 'px';
							o[prop] = +val.slice(0, -2);
						} else {
							throw new Error('Invalid value for Kwicks option ' + prop + ': ' + val);
						}
						break;
					default:
						throw new Error('Invalid value for Kwicks option ' + prop + ': ' + val);
				}
			});
						
			return this.each(function() {
				$(this).data('kwicks', new Kwick(this, o));
			});
		},
		expand: function(index, opts) {
			if (typeof index === 'object') {
				opts = index;
				index = undefined;
			}

			var delay = opts && opts.delay || 0;
			
			return this.each(function() {
				var $this = $(this),
					kwick = $this.data('kwicks');

				// assume this is the container
				if (kwick) {
					index = typeof index === 'number' ? index : -1;
				}
				// otherwise, assume we have a panel
				else if (kwick = $this.parent().data('kwicks')) {
					index = $this.index();
				} else {
					return;
				}

				var expand = function() {
					// bail out if the panel is already expanded
					if (index === kwick.expandedIndex) return;

					var $panels = kwick.$panels,
						expanded = $panels[index] || null;

					kwick.$container.trigger('expand.kwicks', {
						index: index,
						expanded: expanded,
						collapsed: $panels.not(expanded).get(),
						oldIndex: kwick.expandedIndex,
						oldExpanded: kwick.getExpandedPanel(),
						isAnimated: kwick.isAnimated
					});
				};

				var timeoutId = kwick.$container.data('kwicks-timeout-id');
				if (timeoutId) {
					kwick.$container.removeData('kwicks-timeout-id');
					clearTimeout(timeoutId);
				}
				if (delay > 0) {
					kwick.$container.data('kwicks-timeout-id', setTimeout(expand, delay));
				} else {
					expand();
				}
			});
		},
		expanded: function() {
			var kwick = this.first().data('kwicks');
			if (!kwick) return;
			return kwick.expandedIndex;
		},
		select: function(index) {
			return this.each(function() {
				var $this = $(this),
					kwick = $this.data('kwicks');
				
				// assume this is the container
				if (kwick) {
					index = typeof index === 'number' ? index : -1;
				}
				// otherwise, assume we have a panel
				else if (kwick = $this.parent().data('kwicks')) {
					index = $this.index();
				} else {
					return;
				}

				// don't trigger event if its already selected
				if (index !== kwick.selectedIndex) {
					var $panels = kwick.$panels,
						selected = $panels[index] || null;

					kwick.$container.trigger('select.kwicks', {
						index: index,
						selected: selected,
						unselected: $panels.not(selected).get(),
						oldIndex: kwick.selectedIndex,
						oldSelected: kwick.getSelectedPanel()
					});
				}

				// call expand
				kwick.$container.kwicks('expand', index);
			});
		},
		selected: function() {
			var kwick = this.first().data('kwicks');
			if (!kwick) return;
			return kwick.selectedIndex;
		},
		resize: function() {
			return this.each(function() {
				var $this = $(this),
					kwick = $this.data('kwicks');

				if (!kwick) return;

				kwick.resize();
			});
		},
		destroy: function() {
			return this.each(function() {
				var $this = $(this),
					kwick = $this.data('kwicks');

				if (!kwick) return;

				kwick.destroy();
			});
		}
	};

	/**
	 *  Expose the actual plugin
	 */
	$.fn.kwicks = function(opts) {
		if (methods[opts]) {
			return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
		} else if (typeof opts === 'object' || !opts) {
			return methods.init.apply(this, arguments);
		} else {
			throw new Error('Unrecognized kwicks method: ' + opts);
		}
	};

	/**
	 *  Special event for triggering default behavior on 'expand.kwicks' events
	 */
	$.event.special.expand = {
		_default: function(e, data) {
			if (e.namespace !== 'kwicks') return;
			var kwick = $(e.target).data('kwicks');
			if (kwick) kwick.expand(data.index);
		}
	};

	/**
	 *  Special event for triggering default behavior on 'select.kwicks' events
	 */
	$.event.special.select = {
		_default: function(e, data) {
			if (e.namespace !== 'kwicks') return;
			var kwick = $(e.target).data('kwicks');
			if (kwick) kwick.select(data.index);
		}
	};

	/**
	 *  Instantiates a new Kwick instance using the provided container and options.
	 */
	var Kwick = function Kwick(container, opts) {
		var self = this;

		this.opts = opts;

		// an array of callbacks to invoke if 'destroy' is invoked
		this.onDestroyHandlers = [];

		// references to our DOM elements
		var orientation = opts.isVertical ? 'vertical' : 'horizontal';
		this.$container = $(container);
		this.$panels = this.$container.children();

		// semi-smart add/remove around container classes so that we don't bork
		// the styling if/when destroy is called
		var containerClasses = ['kwicks', 'kwicks-' + orientation];
		$.each(containerClasses, function(className) {
			if (self.$container.hasClass(className)) return;
			self.$container.addClass(className);
			self.onDestroy(function() {
				self.$container.removeClass(className);
			});
		});

		// zero-based, -1 for "none"
		this.selectedIndex = this.$panels.filter('.kwicks-selected').index();
		this.expandedIndex = this.selectedIndex;

		// each instance has a primary and a secondary dimension (primary is the animated dimension)
		this.primaryDimension = opts.isVertical ? 'height' : 'width';
		this.secondaryDimension = opts.isVertical ? 'width' : 'height';

		// initialize panel sizes
		this.calculatePanelSizes();

		// likewise, we have primary and secondary alignments (all panels but the last use primary,
		// which uses the secondary alignment). this is to allow the first and last panels to have
		// fixed offsets. this reduces jittering, which is much more noticeable on the last item.
		this.primaryAlignment = opts.isVertical ? 'top' : 'left';
		this.secondaryAlignment = opts.isVertical ? 'bottom' : 'right';

		// object for creating a "master" animation loop for all panel animations
		this.$timer = $({ progress: 0 });

		// keeps track of whether or not an animation is in progress
		this.isAnimated = false;

		// the current offsets for each panel
		this.offsets = this.getOffsetsForExpanded();

		this.updatePanelStyles();
		this.initBehavior();
		this.initWindowResizeHandler();

		// somewhat of a blind stab at handling rare/sporadic failures to initialize styles.
		// https://github.com/jmar777/kwicks/issues/31
		setTimeout(function() {
			self.updatePanelStyles();
		}, 100);
	};

	/**
	 * Calculates size, minSize, maxSize, and spacing based on the current size of the container and
	 * the user-provided options.  The results will be stored on this.panelSize, this.panelMinSize,
	 * this.panelMaxSize, and this.panelSpacing.  This should be run on initialization and whenever
	 * the container's primary dimension may have changed in size.
	 */
	Kwick.prototype.calculatePanelSizes = function() {
		var opts = this.opts,
			containerSize = this.getContainerSize(true);

		// calculate spacing first
		if (opts.spacingUnits === '%') {
			this.panelSpacing = containerSize * opts.spacing;
		} else {
			this.panelSpacing = opts.spacing;
		}

		var numPanels = this.$panels.length,
			sumSpacing = this.panelSpacing * (numPanels - 1),
			sumPanelSize = containerSize - sumSpacing;

		this.panelSize = sumPanelSize / numPanels;

		if (opts.minSize === -1) {
			if (opts.maxSize === -1) {
				// if neither minSize or maxSize or set, then we try to pick a sensible default
				if (numPanels < 5) {
					this.panelMaxSize = containerSize / 3 * 2;
				} else {
					this.panelMaxSize = containerSize / 3;
				}
			} else if (opts.maxSizeUnits === '%') {
				this.panelMaxSize = sumPanelSize * opts.maxSize;
			} else {
				this.panelMaxSize = opts.maxSize;
			}

			// at this point we know that this.panelMaxSize is set
			this.panelMinSize = (sumPanelSize - this.panelMaxSize) / (numPanels - 1);
		} else if (opts.maxSize === -1) {
			// at this point we know that opts.minSize is set
			if (opts.minSizeUnits === '%') {
				this.panelMinSize = sumPanelSize * opts.minSize;
			} else {
				this.panelMinSize = opts.minSize;
			}

			// at this point we know that this.panelMinSize is set
			this.panelMaxSize = sumPanelSize - (this.panelMinSize * (numPanels - 1));
		}
	};

	/**
	 *  Returns the calculated panel offsets based on the currently expanded panel.
	 */
	Kwick.prototype.getOffsetsForExpanded = function() {
		// todo: cache the offset values
		var expandedIndex = this.expandedIndex,
			numPanels = this.$panels.length,
			spacing = this.panelSpacing,
			size = this.panelSize,
			minSize = this.panelMinSize,
			maxSize = this.panelMaxSize;

		//first panel is always offset by 0
		var offsets = [0];

		for (var i = 1; i < numPanels; i++) {
			// no panel is expanded
			if (expandedIndex === -1) {
				offsets[i] = i * (size + spacing);
			}
			// this panel is before or is the expanded panel
			else if (i <= expandedIndex) {
				offsets[i] = i * (minSize + spacing);
			}
			// this panel is after the expanded panel
			else {
				offsets[i] = maxSize + (minSize * (i - 1)) + (i * spacing);
			}
		}

		return offsets;
	};

	/**
	 *  Sets the style attribute on the specified element using the provided value.  This probably
	 *  doesn't belong on Kwick.prototype, but here it is...
	 */
	Kwick.prototype.setStyle = (function() {
		if ($.support.style) {
			return function(el, style) { el.setAttribute('style', style); };
		} else {
			return function (el, style) { el.style.cssText = style; };
		}
	})();

	/**
	 *  Updates the offset and size styling of each panel based on the current values in
	 *  `this.offsets`.  Also does some special handling to convert panels to absolute positioning
	 *  the first time this is invoked.
	 */
	Kwick.prototype.updatePanelStyles = function() {
		var offsets = this.offsets,
			$panels = this.$panels,
			pDim = this.primaryDimension,
			pAlign = this.primaryAlignment,
			sAlign = this.secondaryAlignment,
			spacing = this.panelSpacing,
			containerSize = this.getContainerSize();

		// the kwicks-processed class ensures that panels are absolutely positioned, but on our
		// first pass we need to set offsets, width|length, and positioning atomically to prevent
		// mid-update repaints
		var stylePrefix = !!this._stylesInited ? '' : 'position:absolute;',
			offset, size, prevOffset, style;

		// loop through remaining panels
		for (var i = $panels.length; i--;) {
			prevOffset = offset;
			// todo: maybe we do one last pass at the end and round offsets, rather than on every
			// update
			offset = Math.round(offsets[i]);
			if (i === $panels.length - 1) {
				size = containerSize - offset;
				style = sAlign + ':0;' + pDim + ':' + size + 'px;';
			} else {
				size = prevOffset - offset - spacing;
				style = pAlign + ':' + offset + 'px;' + pDim + ':' + size + 'px;';
			}
			this.setStyle($panels[i], stylePrefix + style);
		}

		if (!this._stylesInited) {
			this.$container.addClass('kwicks-processed');
			this._stylesInited = true;
		}
	};

	/**
	 *  Assuming for a moment that out-of-the-box behaviors aren't a horrible idea, this method
	 *  encapsulates the initialization logic thereof.
	 */
	Kwick.prototype.initBehavior = function() {
		if (!this.opts.behavior) return;

		switch (this.opts.behavior) {
			case 'menu':
				this.initMenuBehavior();
				break;
			case 'slideshow':
				this.initSlideshowBehavior();
				break;
			default:
				throw new Error('Unrecognized behavior option: ' + this.opts.behavior);
		}
	};

	/**
	 * Initializes the menu behavior.
	 */
	Kwick.prototype.initMenuBehavior = function() {
		var self = this,
			opts = self.opts;

		this.addEventHandler(this.$container, 'mouseleave', function() {
			self.$container.kwicks('expand', -1, { delay: opts.delayMouseOut });
		});

		this.addEventHandler(this.$panels, 'mouseenter', function() {
			$(this).kwicks('expand', { delay: opts.delayMouseIn });
		});

		if (!opts.selectOnClick && !opts.deselectOnClick) return;

		this.addEventHandler(this.$panels, 'click', function() {
			var $this = $(this),
				isSelected = $this.hasClass('kwicks-selected');

			if (isSelected && opts.deselectOnClick) {
				$this.parent().kwicks('select', -1);
			} else if (!isSelected && opts.selectOnClick) {
				$this.kwicks('select');
			}
		});
	};

	/**
	 * Initializes the slideshow behavior.
	 */
	Kwick.prototype.initSlideshowBehavior = function() {
		var self = this,
			numSlides = this.$panels.length,
			curSlide = 0,
			// flag to handle weird corner cases
			running = false,
			intervalId;

		var start = function() {
			if (running) return;
			intervalId = setInterval(function() {
				self.$container.kwicks('expand', ++curSlide % numSlides);
			}, self.opts.interval);
			running = true;
		};
		var pause = function() {
			clearInterval(intervalId);
			running = false;
		};

		start();
		this.onDestroy(pause);

		if (!this.opts.interactive) return;

		this.addEventHandler(this.$container, 'mouseenter', pause);
		this.addEventHandler(this.$container, 'mouseleave', start);
		this.addEventHandler(this.$panels, 'mouseenter', function() {
			curSlide = $(this).kwicks('expand').index();
		});
	};

	/**
	 * Sets up a throttled window resize handler that triggers resize logic for the panels
	 * todo: hideous code, needs refactor for the eye bleeds
	 */
	Kwick.prototype.initWindowResizeHandler = function() {
		if (!this.opts.autoResize) return;

		var self = this,
			prevTime = 0,
			execScheduled = false,
			$window = $(window);

		var onResize = function(e) {
			// if there's no event, then this is a scheduled from our setTimeout
			if (!e) { execScheduled = false; }

			// if we've already run in the last 20ms, then delay execution
			var now = +new Date();
			if (now - prevTime < 20) {
				// if we already scheduled a run, don't do it again
				if (execScheduled) return;
				setTimeout(onResize, 20 - (now - prevTime));
				execScheduled = true;
				return;
			}

			// throttle rate is satisfied, go ahead and run
			prevTime = now;
			self.resize();
		};

		this.addEventHandler($window, 'resize', onResize);
	};

	/**
	 * Returns the size in pixels of the container's primary dimension. This value is cached as it
	 * is used repeatedly during animation loops, but the cache can be cleared by passing `true`.
	 * todo: benchmark to see if this caching business is even at all necessary.
	 */
	Kwick.prototype.getContainerSize = function(clearCache) {
		var containerSize = this._containerSize;
		if (clearCache || !containerSize) {
			containerSize = this._containerSize = this.$container[this.primaryDimension]();
		}
		return containerSize;
	};

	/**
	 *  Gets a reference to the currently expanded panel (if there is one)
	 */
	Kwick.prototype.getExpandedPanel = function() {
		return this.$panels[this.expandedIndex] || null;
	};

	/**
	 *  Gets a reference to the currently collapsed panels
	 */
	Kwick.prototype.getCollapsedPanels = function() {
		if (this.expandedIndex === -1) return [];
		return this.$panels.not(this.getExpandedPanel()).get();
	};

	/**
	 *  Gets a reference to the currently selected panel (if there is one)
	 */
	Kwick.prototype.getSelectedPanel = function() {
		return this.$panels[this.selectedIndex] || null;
	};

	/**
	 * Gets a reference to the currently unselected panels
	 */
	Kwick.prototype.getUnselectedPanels = function() {
		return this.$panels.not(this.getSelectedPanel()).get();
	};

	/**
	 * Registers a handler to be invoked if/when 'destroy' is invoked
	 */
	Kwick.prototype.onDestroy = function(handler) {
		this.onDestroyHandlers.push(handler);
	};

	/**
	 * Adds an event handler and automatically registers it to be removed if/when
	 * the plugin is destroyed.
	 */
	Kwick.prototype.addEventHandler = function($el, eventName, handler) {
		$el.on(eventName, handler);
		this.onDestroy(function() {
			$el.off(eventName, handler);
		});
	};

	/**
	 * "Destroys" this Kwicks instance plugin by performing the following:
	 * 1) Stops any currently running animations
	 * 2) Invokes all destroy handlers
	 * 3) Clears out all style attributes on panels
	 * 4) Removes all kwicks class names from panels and container
	 * 5) Removes the 'kwicks' data value from the container
	 */
	Kwick.prototype.destroy = function() {
		this.$timer.stop();
		for (var i = 0, len = this.onDestroyHandlers.length; i < len; i++) {
			this.onDestroyHandlers[i]();
		}
		this.$panels
			.attr('style', '')
			.removeClass('kwicks-expanded kwicks-selected kwicks-collapsed');
		this.$container
			// note: kwicks and kwicks-<orientation> classes have extra smarts around them
			// back in the constructor
			.removeClass('kwicks-processed')
			.removeData('kwicks');
	};

	/**
	 *  Forces the panels to be updated in response to the container being resized.
	 */
	Kwick.prototype.resize = function() {
		// bail out if container size hasn't changed
		if (this.getContainerSize() === this.getContainerSize(true)) return;

		this.calculatePanelSizes();
		this.offsets = this.getOffsetsForExpanded();

		// if the panels are currently being animated, we'll just set a flag that can be detected
		// during the next animation step
		if (this.isAnimated) {
			this._dirtyOffsets = true;
		} else {
			// otherwise update the styles immediately
			this.updatePanelStyles();
		}
	};

	/**
	 *  Selects the panel with the specified index (use -1 to select none)
	 */
	Kwick.prototype.select = function(index) {
		// make sure the panel isn't already selected
		if (index === this.selectedIndex) return;

		$(this.getSelectedPanel()).removeClass('kwicks-selected');
		this.selectedIndex = index;
		$(this.getSelectedPanel()).addClass('kwicks-selected');
	};

	/**
	 *  Expands the panel with the specified index (use -1 to expand none)
	 */
	Kwick.prototype.expand = function(index) {
		var self = this,
			// used for expand-complete event later on
			oldIndex = this.expandedIndex,
			oldExpanded = this.getExpandedPanel();

		// if the index is -1, then default it to the currently selected index (which will also be
		// -1 if no panels are currently selected)
		if (index === -1) index = this.selectedIndex;

		// make sure the panel isn't already expanded
		if (index === this.expandedIndex) return;

		$(this.getExpandedPanel()).removeClass('kwicks-expanded');
		$(this.getCollapsedPanels()).removeClass('kwicks-collapsed');
		this.expandedIndex = index;
		$(this.getExpandedPanel()).addClass('kwicks-expanded');
		$(this.getCollapsedPanels()).addClass('kwicks-collapsed');

		// handle panel animation
		var $timer = this.$timer,
			numPanels = this.$panels.length,
			startOffsets = this.offsets.slice(),
			offsets = this.offsets,
			targetOffsets = this.getOffsetsForExpanded();

		$timer.stop()[0].progress = 0;
		this.isAnimated = true;
		$timer.animate({ progress: 1 }, {
			duration: this.opts.duration,
			easing: this.opts.easing,
			step: function(progress) {
				// check if we've resized mid-animation (yes, we're thorough)
				if (self._dirtyOffsets) {
					offsets = self.offsets;
					targetOffsets = self.getOffsetsForExpanded();
					self._dirtyOffsets = false;
				}
				offsets.length = 0;
				for (var i = 0; i < numPanels; i++) {
					var targetOffset = targetOffsets[i],
						newOffset = targetOffset - ((targetOffset - startOffsets[i]) * (1 - progress));
					offsets[i] = newOffset;
				}
				self.updatePanelStyles();
			},
			complete:  function() {
				self.isAnimated = false;
				self.$container.trigger('expand-complete.kwicks', {
					index: index,
					expanded: self.getExpandedPanel(),
					collapsed: self.getCollapsedPanels(),
					oldIndex: oldIndex,
					oldExpanded: oldExpanded,
					// note: this will always be false but is included to match expand event
					isAnimated: false
				});
			}
		});
	};

})(jQuery);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
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
],[3]);