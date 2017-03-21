webpackJsonp([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {/*! Swipebox v1.4.1 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */

(function ( window, document, $, undefined ) {

	$.swipebox = function( elem, options ) {

		// Default options
		var ui,
			defaults = {
				useCSS : true,
				useSVG : true,
				initialIndexOnArray : 0,
				removeBarsOnMobile : true,
				hideCloseButtonOnMobile : false,
				hideBarsDelay : 0,
				videoMaxWidth : 1140,
				vimeoColor : 'cccccc',
				beforeOpen: null,
				afterOpen: null,
				afterClose: null,
				nextSlide: null,
				prevSlide: null,
				loopAtEnd: false,
				autoplayVideos: false,
				queryStringData: {},
				toggleClassOnLoad: ''
			},

			plugin = this,
			elements = [], // slides array [ { href:'...', title:'...' }, ...],
			$elem,
			selector = ".swipebox",
			$selector = $( selector ),
			isMobile = navigator.userAgent.match( /(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i ),
			isTouch = isMobile !== null || document.createTouch !== undefined || ( 'ontouchstart' in window ) || ( 'onmsgesturechange' in window ) || navigator.msMaxTouchPoints,
			supportSVG = !! document.createElementNS && !! document.createElementNS( 'http://www.w3.org/2000/svg', 'svg').createSVGRect,
			winWidth = window.innerWidth ? window.innerWidth : $( window ).width(),
			winHeight = window.innerHeight ? window.innerHeight : $( window ).height(),
			currentX = 0,
			/* jshint multistr: true */
			html = '<div id="swipebox-overlay">\
					<div id="swipebox-container">\
						<div id="swipebox-slider"></div>\
						<div id="swipebox-top-bar">\
							<div id="swipebox-title"></div>\
						</div>\
						<div id="swipebox-bottom-bar">\
							<div id="swipebox-arrows">\
								<a id="swipebox-prev"></a>\
								<a id="swipebox-next"></a>\
							</div>\
						</div>\
						<a id="swipebox-close"></a>\
					</div>\
			</div>';

		plugin.settings = {};

		$.swipebox.close = function () {
			ui.closeSlide();
		};

		$.swipebox.extend = function () {
			return ui;
		};

		plugin.init = function() {

			plugin.settings = $.extend( {}, defaults, options );

			if ( $.isArray( elem ) ) {

				elements = elem;
				ui.target = $( window );
				ui.init( plugin.settings.initialIndexOnArray );

			} else {

				$( document ).on( 'click', selector, function( event ) {

					// console.log( isTouch );

					if ( event.target.parentNode.className === 'slide current' ) {

						return false;
					}

					// if ( event.target.parentNode.className !== "swipebox") {
					// 	return false;
					// }

					if ( ! $.isArray( elem ) ) {
						ui.destroy();
						$elem = $( selector );
						ui.actions();
					}

					elements = [];
					var index , relType, relVal;

					// Allow for HTML5 compliant attribute before legacy use of rel
					if ( ! relVal ) {
						relType = 'data-rel';
						relVal  = $( this ).attr( relType );
					}

					if ( ! relVal ) {
						relType = 'rel';
						relVal = $( this ).attr( relType );
					}

					if ( relVal && relVal !== '' && relVal !== 'nofollow' ) {
						$elem = $selector.filter( '[' + relType + '="' + relVal + '"]' );
					} else {
						$elem = $( selector );
					}

					$elem.each( function() {

						var title = null,
							href = null;

						if ( $( this ).attr( 'title' ) ) {
							title = $( this ).attr( 'title' );
						}


						if ( $( this ).attr( 'href' ) ) {
							href = $( this ).attr( 'href' );
						}

						elements.push( {
							href: href,
							title: title
						} );
					} );

					index = $elem.index( $( this ) );
					event.preventDefault();
					event.stopPropagation();
					ui.target = $( event.target );
					ui.init( index );
				} );
			}
		};

		ui = {

			/**
			 * Initiate Swipebox
			 */
			init : function( index ) {
				if ( plugin.settings.beforeOpen ) {
					plugin.settings.beforeOpen();
				}
				this.target.trigger( 'swipebox-start' );
				$.swipebox.isOpen = true;
				this.build();
				this.openSlide( index );
				this.openMedia( index );
				this.preloadMedia( index+1 );
				this.preloadMedia( index-1 );
				if ( plugin.settings.afterOpen ) {
					plugin.settings.afterOpen();
				}
			},

			/**
			 * Built HTML containers and fire main functions
			 */
			build : function () {
				var $this = this, bg;

				$( 'body' ).append( html );

				if ( isMobile && plugin.settings.removeBarsOnMobile ) {
					$( '#swipebox-bottom-bar, #swipebox-top-bar' ).remove();
				}

				$.each( elements,  function() {
					$( '#swipebox-slider' ).append( '<div class="slide"></div>' );
				} );

				$this.setDim();
				$this.actions();

				if ( isTouch ) {
					$this.gesture();
				}

				// Devices can have both touch and keyboard input so always allow key events
				$this.keyboard();

				$this.animBars();
				$this.resize();

			},

			/**
			 * Set dimensions depending on windows width and height
			 */
			setDim : function () {

				var width, height, sliderCss = {};

				// Reset dimensions on mobile orientation change
				if ( 'onorientationchange' in window ) {

					window.addEventListener( 'orientationchange', function() {
						if ( window.orientation === 0 ) {
							width = winWidth;
							height = winHeight;
						} else if ( window.orientation === 90 || window.orientation === -90 ) {
							width = winHeight;
							height = winWidth;
						}
					}, false );


				} else {

					width = window.innerWidth ? window.innerWidth : $( window ).width();
					height = window.innerHeight ? window.innerHeight : $( window ).height();
				}

				sliderCss = {
					width : width,
					height : height
				};

				$( '#swipebox-overlay' ).css( sliderCss );

			},

			/**
			 * Reset dimensions on window resize envent
			 */
			resize : function () {
				var $this = this;

				$( window ).resize( function() {
					$this.setDim();
				} ).resize();
			},

			/**
			 * Check if device supports CSS transitions
			 */
			supportTransition : function () {

				var prefixes = 'transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition'.split( ' ' ),
					i;

				for ( i = 0; i < prefixes.length; i++ ) {
					if ( document.createElement( 'div' ).style[ prefixes[i] ] !== undefined ) {
						return prefixes[i];
					}
				}
				return false;
			},

			/**
			 * Check if CSS transitions are allowed (options + devicesupport)
			 */
			doCssTrans : function () {
				if ( plugin.settings.useCSS && this.supportTransition() ) {
					return true;
				}
			},

			/**
			 * Touch navigation
			 */
			gesture : function () {

				var $this = this,
					index,
					hDistance,
					vDistance,
					hDistanceLast,
					vDistanceLast,
					hDistancePercent,
					vSwipe = false,
					hSwipe = false,
					hSwipMinDistance = 10,
					vSwipMinDistance = 50,
					startCoords = {},
					endCoords = {},
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' ),
					slider = $( '#swipebox-slider' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( 'body' ).bind( 'touchstart', function( event ) {

					$( this ).addClass( 'touching' );
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
					endCoords = event.originalEvent.targetTouches[0];
					startCoords.pageX = event.originalEvent.targetTouches[0].pageX;
					startCoords.pageY = event.originalEvent.targetTouches[0].pageY;

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX +'%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '.touching' ).bind( 'touchmove',function( event ) {
						event.preventDefault();
						event.stopPropagation();
						endCoords = event.originalEvent.targetTouches[0];

						if ( ! hSwipe ) {
							vDistanceLast = vDistance;
							vDistance = endCoords.pageY - startCoords.pageY;
							if ( Math.abs( vDistance ) >= vSwipMinDistance || vSwipe ) {
								var opacity = 0.75 - Math.abs(vDistance) / slider.height();

								slider.css( { 'top': vDistance + 'px' } );
								slider.css( { 'opacity': opacity } );

								vSwipe = true;
							}
						}

						hDistanceLast = hDistance;
						hDistance = endCoords.pageX - startCoords.pageX;
						hDistancePercent = hDistance * 100 / winWidth;

						if ( ! hSwipe && ! vSwipe && Math.abs( hDistance ) >= hSwipMinDistance ) {
							$( '#swipebox-slider' ).css( {
								'-webkit-transition' : '',
								'transition' : ''
							} );
							hSwipe = true;
						}

						if ( hSwipe ) {

							// swipe left
							if ( 0 < hDistance ) {

								// first slide
								if ( 0 === index ) {
									// console.log( 'first' );
									$( '#swipebox-overlay' ).addClass( 'leftSpringTouch' );
								} else {
									// Follow gesture
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							// swipe rught
							} else if ( 0 > hDistance ) {

								// last Slide
								if ( elements.length === index +1 ) {
									// console.log( 'last' );
									$( '#swipebox-overlay' ).addClass( 'rightSpringTouch' );
								} else {
									$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
									$( '#swipebox-slider' ).css( {
										'-webkit-transform' : 'translate3d(' + ( currentX + hDistancePercent ) +'%, 0, 0)',
										'transform' : 'translate3d(' + ( currentX + hDistancePercent ) + '%, 0, 0)'
									} );
								}

							}
						}
					} );

					return false;

				} ).bind( 'touchend',function( event ) {
					event.preventDefault();
					event.stopPropagation();

					$( '#swipebox-slider' ).css( {
						'-webkit-transition' : '-webkit-transform 0.4s ease',
						'transition' : 'transform 0.4s ease'
					} );

					vDistance = endCoords.pageY - startCoords.pageY;
					hDistance = endCoords.pageX - startCoords.pageX;
					hDistancePercent = hDistance*100/winWidth;

					// Swipe to bottom to close
					if ( vSwipe ) {
						vSwipe = false;
						if ( Math.abs( vDistance ) >= 2 * vSwipMinDistance && Math.abs( vDistance ) > Math.abs( vDistanceLast ) ) {
							var vOffset = vDistance > 0 ? slider.height() : - slider.height();
							slider.animate( { top: vOffset + 'px', 'opacity': 0 },
								300,
								function () {
									$this.closeSlide();
								} );
						} else {
							slider.animate( { top: 0, 'opacity': 1 }, 300 );
						}

					} else if ( hSwipe ) {

						hSwipe = false;

						// swipeLeft
						if( hDistance >= hSwipMinDistance && hDistance >= hDistanceLast) {

							$this.getPrev();

						// swipeRight
						} else if ( hDistance <= -hSwipMinDistance && hDistance <= hDistanceLast) {

							$this.getNext();
						}

					} else { // Top and bottom bars have been removed on touchable devices
						// tap
						if ( ! bars.hasClass( 'visible-bars' ) ) {
							$this.showBars();
							$this.setTimeout();
						} else {
							$this.clearTimeout();
							$this.hideBars();
						}
					}

					$( '#swipebox-slider' ).css( {
						'-webkit-transform' : 'translate3d(' + currentX + '%, 0, 0)',
						'transform' : 'translate3d(' + currentX + '%, 0, 0)'
					} );

					$( '#swipebox-overlay' ).removeClass( 'leftSpringTouch' ).removeClass( 'rightSpringTouch' );
					$( '.touching' ).off( 'touchmove' ).removeClass( 'touching' );

				} );
			},

			/**
			 * Set timer to hide the action bars
			 */
			setTimeout: function () {
				if ( plugin.settings.hideBarsDelay > 0 ) {
					var $this = this;
					$this.clearTimeout();
					$this.timeout = window.setTimeout( function() {
							$this.hideBars();
						},

						plugin.settings.hideBarsDelay
					);
				}
			},

			/**
			 * Clear timer
			 */
			clearTimeout: function () {
				window.clearTimeout( this.timeout );
				this.timeout = null;
			},

			/**
			 * Show navigation and title bars
			 */
			showBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.addClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : 0 }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : 0 }, 500 );
					setTimeout( function() {
						bars.addClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Hide navigation and title bars
			 */
			hideBars : function () {
				var bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );
				if ( this.doCssTrans() ) {
					bars.removeClass( 'visible-bars' );
				} else {
					$( '#swipebox-top-bar' ).animate( { top : '-50px' }, 500 );
					$( '#swipebox-bottom-bar' ).animate( { bottom : '-50px' }, 500 );
					setTimeout( function() {
						bars.removeClass( 'visible-bars' );
					}, 1000 );
				}
			},

			/**
			 * Animate navigation and top bars
			 */
			animBars : function () {
				var $this = this,
					bars = $( '#swipebox-top-bar, #swipebox-bottom-bar' );

				bars.addClass( 'visible-bars' );
				$this.setTimeout();

				$( '#swipebox-slider' ).click( function() {
					if ( ! bars.hasClass( 'visible-bars' ) ) {
						$this.showBars();
						$this.setTimeout();
					}
				} );

				$( '#swipebox-bottom-bar' ).hover( function() {
					$this.showBars();
					bars.addClass( 'visible-bars' );
					$this.clearTimeout();

				}, function() {
					if ( plugin.settings.hideBarsDelay > 0 ) {
						bars.removeClass( 'visible-bars' );
						$this.setTimeout();
					}

				} );
			},

			/**
			 * Keyboard navigation
			 */
			keyboard : function () {
				var $this = this;
				$( window ).bind( 'keyup', function( event ) {
					event.preventDefault();
					event.stopPropagation();

					if ( event.keyCode === 37 ) {

						$this.getPrev();

					} else if ( event.keyCode === 39 ) {

						$this.getNext();

					} else if ( event.keyCode === 27 ) {

						$this.closeSlide();
					}
				} );
			},

			/**
			 * Navigation events : go to next slide, go to prevous slide and close
			 */
			actions : function () {
				var $this = this,
					action = 'touchend click'; // Just detect for both event types to allow for multi-input

				if ( elements.length < 2 ) {

					$( '#swipebox-bottom-bar' ).hide();

					if ( undefined === elements[ 1 ] ) {
						$( '#swipebox-top-bar' ).hide();
					}

				} else {
					$( '#swipebox-prev' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getPrev();
						$this.setTimeout();
					} );

					$( '#swipebox-next' ).bind( action, function( event ) {
						event.preventDefault();
						event.stopPropagation();
						$this.getNext();
						$this.setTimeout();
					} );
				}

				$( '#swipebox-close' ).bind( action, function() {
					$this.closeSlide();
				} );
			},

			/**
			 * Set current slide
			 */
			setSlide : function ( index, isFirst ) {

				isFirst = isFirst || false;

				var slider = $( '#swipebox-slider' );

				currentX = -index*100;

				if ( this.doCssTrans() ) {
					slider.css( {
						'-webkit-transform' : 'translate3d(' + (-index*100)+'%, 0, 0)',
						'transform' : 'translate3d(' + (-index*100)+'%, 0, 0)'
					} );
				} else {
					slider.animate( { left : ( -index*100 )+'%' } );
				}

				$( '#swipebox-slider .slide' ).removeClass( 'current' );
				$( '#swipebox-slider .slide' ).eq( index ).addClass( 'current' );
				this.setTitle( index );

				if ( isFirst ) {
					slider.fadeIn();
				}

				$( '#swipebox-prev, #swipebox-next' ).removeClass( 'disabled' );

				if ( index === 0 ) {
					$( '#swipebox-prev' ).addClass( 'disabled' );
				} else if ( index === elements.length - 1 && plugin.settings.loopAtEnd !== true ) {
					$( '#swipebox-next' ).addClass( 'disabled' );
				}
			},

			/**
			 * Open slide
			 */
			openSlide : function ( index ) {
				$( 'html' ).addClass( 'swipebox-html' );
				if ( isTouch ) {
					$( 'html' ).addClass( 'swipebox-touch' );

					if ( plugin.settings.hideCloseButtonOnMobile ) {
						$( 'html' ).addClass( 'swipebox-no-close-button' );
					}
				} else {
					$( 'html' ).addClass( 'swipebox-no-touch' );
				}
				$( window ).trigger( 'resize' ); // fix scroll bar visibility on desktop
				this.setSlide( index, true );
			},

			/**
			 * Set a time out if the media is a video
			 */
			preloadMedia : function ( index ) {
				var $this = this,
					src = null;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( ! $this.isVideo( src ) ) {
					setTimeout( function() {
						$this.openMedia( index );
					}, 1000);
				} else {
					$this.openMedia( index );
				}
			},

			/**
			 * Open
			 */
			openMedia : function ( index ) {
				var $this = this,
					src,
					slide;

				if ( elements[ index ] !== undefined ) {
					src = elements[ index ].href;
				}

				if ( index < 0 || index >= elements.length ) {
					return false;
				}

				slide = $( '#swipebox-slider .slide' ).eq( index );

				if ( ! $this.isVideo( src ) ) {
					slide.addClass( 'slide-loading' );
					$this.loadMedia( src, function() {
						slide.removeClass( 'slide-loading' );
						slide.html( this );
					} );
				} else {
					slide.html( $this.getVideo( src ) );
				}

			},

			/**
			 * Set link title attribute as caption
			 */
			setTitle : function ( index ) {
				var title = null;

				$( '#swipebox-title' ).empty();

				if ( elements[ index ] !== undefined ) {
					title = elements[ index ].title;
				}

				if ( title ) {
					$( '#swipebox-top-bar' ).show();
					$( '#swipebox-title' ).append( title );
				} else {
					$( '#swipebox-top-bar' ).hide();
				}
			},

			/**
			 * Check if the URL is a video
			 */
			isVideo : function ( src ) {

				if ( src ) {
					if ( src.match( /(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || src.match( /vimeo\.com\/([0-9]*)/ ) || src.match( /youtu\.be\/([a-zA-Z0-9\-_]+)/ ) ) {
						return true;
					}

					if ( src.toLowerCase().indexOf( 'swipeboxvideo=1' ) >= 0 ) {

						return true;
					}
				}

			},

			/**
			 * Parse URI querystring and:
			 * - overrides value provided via dictionary
			 * - rebuild it again returning a string
			 */
			parseUri : function (uri, customData) {
				var a = document.createElement('a'),
					qs = {};

				// Decode the URI
				a.href = decodeURIComponent( uri );

				// QueryString to Object
				if ( a.search ) {
					qs = JSON.parse( '{"' + a.search.toLowerCase().replace('?','').replace(/&/g,'","').replace(/=/g,'":"') + '"}' );
				}
				
				// Extend with custom data
				if ( $.isPlainObject( customData ) ) {
					qs = $.extend( qs, customData, plugin.settings.queryStringData ); // The dev has always the final word
				}

				// Return querystring as a string
				return $
					.map( qs, function (val, key) {
						if ( val && val > '' ) {
							return encodeURIComponent( key ) + '=' + encodeURIComponent( val );
						}
					})
					.join('&');
			},

			/**
			 * Get video iframe code from URL
			 */
			getVideo : function( url ) {
				var iframe = '',
					youtubeUrl = url.match( /((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/ ),
					youtubeShortUrl = url.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),
					vimeoUrl = url.match( /(?:www\.)?vimeo\.com\/([0-9]*)/ ),
					qs = '';
				if ( youtubeUrl || youtubeShortUrl) {
					if ( youtubeShortUrl ) {
						youtubeUrl = youtubeShortUrl;
					}
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'v' : ''
					});
					iframe = '<iframe width="560" height="315" src="//' + youtubeUrl[1] + '/embed/' + youtubeUrl[2] + '?' + qs + '" frameborder="0" allowfullscreen></iframe>';

				} else if ( vimeoUrl ) {
					qs = ui.parseUri( url, {
						'autoplay' : ( plugin.settings.autoplayVideos ? '1' : '0' ),
						'byline' : '0',
						'portrait' : '0',
						'color': plugin.settings.vimeoColor
					});
					iframe = '<iframe width="560" height="315"  src="//player.vimeo.com/video/' + vimeoUrl[1] + '?' + qs + '" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>';

				} else {
					iframe = '<iframe width="560" height="315" src="' + url + '" frameborder="0" allowfullscreen></iframe>';
				}

				return '<div class="swipebox-video-container" style="max-width:' + plugin.settings.videoMaxWidth + 'px"><div class="swipebox-video">' + iframe + '</div></div>';
			},

			/**
			 * Load image
			 */
			loadMedia : function ( src, callback ) {
                // Inline content
                if ( src.trim().indexOf('#') === 0 ) {
                    callback.call(
                    	$('<div>', {
                    		'class' : 'swipebox-inline-container'
                    	})
                    	.append(
                    		$(src)
	                    	.clone()
	                    	.toggleClass( plugin.settings.toggleClassOnLoad )
	                    )
                    );
                }
                // Everything else
                else {
    				if ( ! this.isVideo( src ) ) {
    					var img = $( '<img>' ).on( 'load', function() {
    						callback.call( img );
    					} );

    					img.attr( 'src', src );
    				}
                }
			},

			/**
			 * Get next slide
			 */
			getNext : function () {
				var $this = this,
					src,
					index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) );
				if ( index + 1 < elements.length ) {

					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index++;
					$this.setSlide( index );
					$this.preloadMedia( index+1 );
					if ( plugin.settings.nextSlide ) {
						plugin.settings.nextSlide();
					}
				} else {

					if ( plugin.settings.loopAtEnd === true ) {
						src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src' );
						$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
						index = 0;
						$this.preloadMedia( index );
						$this.setSlide( index );
						$this.preloadMedia( index + 1 );
						if ( plugin.settings.nextSlide ) {
							plugin.settings.nextSlide();
						}
					} else {
						$( '#swipebox-overlay' ).addClass( 'rightSpring' );
						setTimeout( function() {
							$( '#swipebox-overlay' ).removeClass( 'rightSpring' );
						}, 500 );
					}
				}
			},

			/**
			 * Get previous slide
			 */
			getPrev : function () {
				var index = $( '#swipebox-slider .slide' ).index( $( '#swipebox-slider .slide.current' ) ),
					src;
				if ( index > 0 ) {
					src = $( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe').attr( 'src' );
					$( '#swipebox-slider .slide' ).eq( index ).contents().find( 'iframe' ).attr( 'src', src );
					index--;
					this.setSlide( index );
					this.preloadMedia( index-1 );
					if ( plugin.settings.prevSlide ) {
						plugin.settings.prevSlide();
					}
				} else {
					$( '#swipebox-overlay' ).addClass( 'leftSpring' );
					setTimeout( function() {
						$( '#swipebox-overlay' ).removeClass( 'leftSpring' );
					}, 500 );
				}
			},

			nextSlide : function () {
				// Callback for next slide
			},

			prevSlide : function () {
				// Callback for prev slide
			},

			/**
			 * Close
			 */
			closeSlide : function () {
				$( 'html' ).removeClass( 'swipebox-html' );
				$( 'html' ).removeClass( 'swipebox-touch' );
				$( window ).trigger( 'resize' );
				this.destroy();
			},

			/**
			 * Destroy the whole thing
			 */
			destroy : function () {
				$( window ).unbind( 'keyup' );
				$( 'body' ).unbind( 'touchstart' );
				$( 'body' ).unbind( 'touchmove' );
				$( 'body' ).unbind( 'touchend' );
				$( '#swipebox-slider' ).unbind();
				$( '#swipebox-overlay' ).remove();

				if ( ! $.isArray( elem ) ) {
					elem.removeData( '_swipebox' );
				}

				if ( this.target ) {
					this.target.trigger( 'swipebox-destroy' );
				}

				$.swipebox.isOpen = false;

				if ( plugin.settings.afterClose ) {
					plugin.settings.afterClose();
				}
			}
		};

		plugin.init();
	};

	$.fn.swipebox = function( options ) {

		if ( ! $.data( this, '_swipebox' ) ) {
			var swipebox = new $.swipebox( this, options );
			this.data( '_swipebox', swipebox );
		}
		return this.data( '_swipebox' );

	};

}( window, document, jQuery ) );
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 14:
/***/ (function(module, exports) {

module.exports = {
	"title": "Garage Polyaspartic Chip Coating",
	"benefits": [
		{
			"benefit": "Easy to clean, seamless surface",
			"description": "Our polyaspartic floor coatings offers durable, seamless surfaces that can easily be wiped clean with very little upkeep."
		},
		{
			"benefit": "Chemically Resistant",
			"description": "Our floor coatings are chemically resistant for all commercial flooring purposes."
		},
		{
			"benefit": "Cost savings",
			"description": "Rejuvenating an old slab or finishing a brand new slab, we provide you with a durable and hard wearing surface which means your floor will last for years to come with easy maintenance."
		},
		{
			"benefit": "Fast cure time",
			"description": "The fast cure time of polyaspartic coatings allows us to return the floor to you faster ready to use."
		}
	],
	"applications": [
		"Garage Floors, Shop Floors, Service Areas, Arenas, Hospitals, Bathrooms, Offices, Show Rooms, Lunch Rooms, Locker Rooms, Wooden Stairs, Decks, High Traffic Areas, Interior or Exterior, Residential or Commercial."
	],
	"info": [
		"Polyaspartic resins offer many benefits over traditional epoxy resins, making it the best coating for garage or shop floors. Polyaspartic coatings offer higher abrasion resistance, chemical resistance, faster installation, faster cure time, and higher overall performance. Polyaspartic can be tinted in any colour and installed with broadcasting multi-coloured vinyl paint chips or crushed quartz. We offer a coating with confidence; we bring design, knowledge and guaranteed our products."
	],
	"process": [
		"Our attention to detail for concrete preparation is extremely important in helping you get the full value of the coating. Preparation involves a diamond machine grind on the floor for the best product adhesion. We identify and fill cracks with special flexible caulking and thanks to our years of concrete experience we can easily repair damaged concrete by patching or leveling. The tinted polyaspartic coating is then applied with broadcasting vinyl paint chips or quartz, followed by top clear coat of polyaspartic. One advantage of polyaspartic over other coatings is the fast curing times this helps return the floor for use in a couple of days."
	],
	"picturePath": "services/garage-poly/",
	"pictures": [
		{
			"file": "garage-polyaspartic-coating-1.JPG",
			"title": "Polyaspartic chip custom shop"
		},
		{
			"file": "garage-polyaspartic-coating-2.JPG",
			"title": "Polyaspartic chip garage floor- Saddle Tan"
		},
		{
			"file": "garage-polyaspartic-coating-3.JPG",
			"title": "Polyaspartic chip garage floor with custom border"
		},
		{
			"file": "garage-polyaspartic-coating-4.JPG",
			"title": "Polyaspartic chip garage floor with custom chip blend"
		},
		{
			"file": "garage-polyaspartic-coating-5.JPG",
			"title": "Custom Design polyaspartic garage floor"
		},
		{
			"file": "garage-polyaspartic-coating-6.JPG",
			"title": "Custom polyaspartic chip garage floor with metallic borders"
		},
		{
			"file": "garage-polyaspartic-coating-7.JPG",
			"title": "Polyaspartic chip garage floor - Mocha"
		},
		{
			"file": "garage-polyaspartic-coating-8.JPG",
			"title": "Polyaspartic chip garage floor"
		},
		{
			"file": "garage-polyaspartic-coating-9.JPG",
			"title": "Polyaspartic chip outdoor deck"
		},
		{
			"file": "garage-polyaspartic-coating-10.JPG",
			"title": "Polyaspartic chip shop floor"
		},
		{
			"file": "garage-polyaspartic-coating-11.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-12.JPG",
			"title": "Polyaspartic chip garage floor with Harley Davidson logo"
		},
		{
			"file": "garage-polyaspartic-coating-13.JPG",
			"title": "Polyaspartic chip garage floor - Mocha"
		},
		{
			"file": "garage-polyaspartic-coating-14.JPG",
			"title": "Polyaspartic chip garage floor"
		},
		{
			"file": "garage-polyaspartic-coating-15.JPG",
			"title": "Polyaspartic chip garage floor"
		},
		{
			"file": "garage-polyaspartic-coating-16.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-17.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-18.JPG",
			"title": "Polyaspartic chip coating with custom logo"
		},
		{
			"file": "garage-polyaspartic-coating-19.JPG",
			"title": "Polyaspartic chip coating with custom logos"
		},
		{
			"file": "garage-polyaspartic-coating-20.JPG",
			"title": "Polyaspartic chip garage floor - Up grade beams"
		},
		{
			"file": "garage-polyaspartic-coating-21.JPG",
			"title": "Polyaspartic chip garage floor"
		},
		{
			"file": "garage-polyaspartic-coating-22.JPG",
			"title": "Polyaspartic chip garage floor and stairs"
		},
		{
			"file": "garage-polyaspartic-coating-23.JPG",
			"title": "Polyaspartic chip garage floor and baseboards"
		},
		{
			"file": "garage-polyaspartic-coating-24.JPG",
			"title": "Polyaspartic chip garage floor and stairs with border"
		},
		{
			"file": "garage-polyaspartic-coating-25.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-26.JPG",
			"title": "Polyaspartic chip stairs with checkerboard floor"
		},
		{
			"file": "garage-polyaspartic-coating-27.JPG",
			"title": "Polyaspartic chip fire hall floor"
		},
		{
			"file": "garage-polyaspartic-coating-28.JPG",
			"title": "Polyaspartic coating shop floor"
		},
		{
			"file": "garage-polyaspartic-coating-29.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-30.JPG",
			"title": "Polyaspartic chip garage floor - Desert Tan"
		},
		{
			"file": "garage-polyaspartic-coating-31.JPG",
			"title": "Polyaspartic chip garage floor - Custom chip blend"
		},
		{
			"file": "garage-polyaspartic-coating-32.JPG",
			"title": "Polyaspartic chip garage floor and stairs"
		},
		{
			"file": "garage-polyaspartic-coating-33.JPG",
			"title": "Polyaspartic chip shop floor"
		},
		{
			"file": "garage-polyaspartic-coating-34.JPG",
			"title": "Polyaspartic chip garage floor and stairs"
		},
		{
			"file": "garage-polyaspartic-coating-35.JPG",
			"title": "Polyaspartic coating shop floor"
		},
		{
			"file": "garage-polyaspartic-coating-36.JPG",
			"title": "Polyaspartic chip garage floor - Tuxedo"
		},
		{
			"file": "garage-polyaspartic-coating-37.JPG",
			"title": "Polyaspartic chip garage floor with grit"
		}
	]
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

module.exports = {
	init: function () {
		var expanded = false,
			learnMoreContent = $(".learn-more-content"),
			toggleText = $(".toggle-learn-more span");

		$(".toggle-learn-more span").click(function () {
			if (expanded) {
				learnMoreContent.slideUp(350, function () {
					expanded = false;
					toggleText.text("Learn more...");
				});
			} else {
				learnMoreContent.slideDown(350, function () {
					expanded = true;
					toggleText.text("Learn less..");
				});
			}
		});
	}
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

var Handlebars = __webpack_require__(8);
function __default(obj) { return obj && (obj.__esModule ? obj["default"] : obj); }
module.exports = (Handlebars["default"] || Handlebars).template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "			<li class=\"service-list-item benefit\">\n				<span>"
    + alias4(((helper = (helper = helpers.benefit || (depth0 != null ? depth0.benefit : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"benefit","hash":{},"data":data}) : helper)))
    + ":</span> "
    + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "\n			</li>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=depth0 != null ? depth0 : {}, alias4=helpers.helperMissing, alias5="function";

  return "			<a href=\""
    + alias2(alias1((depths[1] != null ? depths[1].picturePath : depths[1]), depth0))
    + "large/"
    + alias2(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"file","hash":{},"data":data}) : helper)))
    + "\" class=\"swipebox\" title=\""
    + alias2(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"title","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias2(alias1((depths[1] != null ? depths[1].picturePath : depths[1]), depth0))
    + "small/"
    + alias2(((helper = (helper = helpers.file || (depth0 != null ? depth0.file : depth0)) != null ? helper : alias4),(typeof helper === alias5 ? helper.call(alias3,{"name":"file","hash":{},"data":data}) : helper)))
    + "\" /></a>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"col-xs-12 services-title\" id=\"welcome-title-container\">\n	<span>"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + "</span>\n</div>\n\n<div class=\"col-xs-6\">\n\n	<ul class=\"service-list\">\n		<li class=\"service-list-header\"><span>Benefits</span>\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.benefits : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</ul>\n\n	<ul class=\"service-list\">\n		<li class=\"service-list-header\"><span>Typical Applications</span>\n		<li class=\"service-list-item\">\n			"
    + alias4(((helper = (helper = helpers.applications || (depth0 != null ? depth0.applications : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"applications","hash":{},"data":data}) : helper)))
    + "\n		</li>\n	</ul>\n\n	<ul class=\"service-list learn-more-content\">\n		<li class=\"service-list-header\"><span>Product Info</span></li>\n		<li class=\"service-list-item\">"
    + alias4(((helper = (helper = helpers.info || (depth0 != null ? depth0.info : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"info","hash":{},"data":data}) : helper)))
    + "</li>\n\n		<li class=\"service-list-header\"><span>What We Do</span></li>\n		<li class=\"service-list-item\">"
    + alias4(((helper = (helper = helpers.process || (depth0 != null ? depth0.process : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"process","hash":{},"data":data}) : helper)))
    + "</li>\n	</ul>\n\n	<div class=\"toggle-learn-more\">\n		<span>Learn more...</span>\n	</div>\n\n</div>\n\n<div class=\"col-xs-6\">\n	<div class=\"portfolio-title\">\n		<span>Recent "
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
    + " Jobs</span>\n	</div>\n\n	<br />\n\n	<div class=\"click-hint\">\n		<span>Hint: Click on a picture for a full screen view</span>\n	</div>\n\n	<div class=\"portfolio-items\">\n\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.pictures : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "	</div>\n\n	<br />\n\n	<div class=\"contact-us-row\">\n		<a class=\"contact-us-button\" href=\"contact-us.html\">Contact us to book your appointment</a>\n	</div>\n</div>\n";
},"useData":true,"useDepths":true});

/***/ }),

/***/ 38:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {

__webpack_require__(1);
var services = __webpack_require__(17);
var nav = __webpack_require__(4);
var borderMenu = __webpack_require__(3);
var template = __webpack_require__(2);
var serviceData = __webpack_require__(14);
var navTemplate = __webpack_require__(6);
var footerTemplate = __webpack_require__(5);

$(document).ready(function () {
	var navDiv = document.createElement("div");
	navDiv.innerHTML = navTemplate({
		garage: true
	});
	$("nav").append(navDiv);

	var footerDiv = document.createElement("div");
	footerDiv.innerHTML = footerTemplate();
	$("footer").append(footerDiv);

	var div = document.createElement("div");
	div.innerHTML = template(serviceData);
	$(".content").append(div);

	nav.init();
	borderMenu.init();
	services.init();

	$(".swipebox").swipebox();
	$("#preloader").fadeOut('slow', function() { $(this).remove(); });
});


/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ })

},[38]);