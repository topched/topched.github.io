webpackJsonp([0],{1:function(e,t,i){(function(e){/*! Swipebox v1.4.1 | Constantin Saguin csag.co | MIT License | github.com/brutaldesign/swipebox */
!function(e,t,i,o){i.swipebox=function(s,n){var a,r,l={useCSS:!0,useSVG:!0,initialIndexOnArray:0,removeBarsOnMobile:!0,hideCloseButtonOnMobile:!1,hideBarsDelay:0,videoMaxWidth:1140,vimeoColor:"cccccc",beforeOpen:null,afterOpen:null,afterClose:null,nextSlide:null,prevSlide:null,loopAtEnd:!1,autoplayVideos:!1,queryStringData:{},toggleClassOnLoad:""},c=this,d=[],p=".swipebox",u=i(p),f=navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i),h=null!==f||t.createTouch!==o||"ontouchstart"in e||"onmsgesturechange"in e||navigator.msMaxTouchPoints,m=(!!t.createElementNS&&!!t.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,e.innerWidth?e.innerWidth:i(e).width()),b=e.innerHeight?e.innerHeight:i(e).height(),g=0,v='<div id="swipebox-overlay">\t\t\t\t\t<div id="swipebox-container">\t\t\t\t\t\t<div id="swipebox-slider"></div>\t\t\t\t\t\t<div id="swipebox-top-bar">\t\t\t\t\t\t\t<div id="swipebox-title"></div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<div id="swipebox-bottom-bar">\t\t\t\t\t\t\t<div id="swipebox-arrows">\t\t\t\t\t\t\t\t<a id="swipebox-prev"></a>\t\t\t\t\t\t\t\t<a id="swipebox-next"></a>\t\t\t\t\t\t\t</div>\t\t\t\t\t\t</div>\t\t\t\t\t\t<a id="swipebox-close"></a>\t\t\t\t\t</div>\t\t\t</div>';c.settings={},i.swipebox.close=function(){a.closeSlide()},i.swipebox.extend=function(){return a},c.init=function(){c.settings=i.extend({},l,n),i.isArray(s)?(d=s,a.target=i(e),a.init(c.settings.initialIndexOnArray)):i(t).on("click",p,function(e){if("slide current"===e.target.parentNode.className)return!1;i.isArray(s)||(a.destroy(),r=i(p),a.actions()),d=[];var t,o,n;n||(o="data-rel",n=i(this).attr(o)),n||(o="rel",n=i(this).attr(o)),r=n&&""!==n&&"nofollow"!==n?u.filter("["+o+'="'+n+'"]'):i(p),r.each(function(){var e=null,t=null;i(this).attr("title")&&(e=i(this).attr("title")),i(this).attr("href")&&(t=i(this).attr("href")),d.push({href:t,title:e})}),t=r.index(i(this)),e.preventDefault(),e.stopPropagation(),a.target=i(e.target),a.init(t)})},a={init:function(e){c.settings.beforeOpen&&c.settings.beforeOpen(),this.target.trigger("swipebox-start"),i.swipebox.isOpen=!0,this.build(),this.openSlide(e),this.openMedia(e),this.preloadMedia(e+1),this.preloadMedia(e-1),c.settings.afterOpen&&c.settings.afterOpen()},build:function(){var e=this;i("body").append(v),f&&c.settings.removeBarsOnMobile&&i("#swipebox-bottom-bar, #swipebox-top-bar").remove(),i.each(d,function(){i("#swipebox-slider").append('<div class="slide"></div>')}),e.setDim(),e.actions(),h&&e.gesture(),e.keyboard(),e.animBars(),e.resize()},setDim:function(){var t,o,s={};"onorientationchange"in e?e.addEventListener("orientationchange",function(){0===e.orientation?(t=m,o=b):90!==e.orientation&&e.orientation!==-90||(t=b,o=m)},!1):(t=e.innerWidth?e.innerWidth:i(e).width(),o=e.innerHeight?e.innerHeight:i(e).height()),s={width:t,height:o},i("#swipebox-overlay").css(s)},resize:function(){var t=this;i(e).resize(function(){t.setDim()}).resize()},supportTransition:function(){var e,i="transition WebkitTransition MozTransition OTransition msTransition KhtmlTransition".split(" ");for(e=0;e<i.length;e++)if(t.createElement("div").style[i[e]]!==o)return i[e];return!1},doCssTrans:function(){if(c.settings.useCSS&&this.supportTransition())return!0},gesture:function(){var e,t,o,s,n,a,r=this,l=!1,c=!1,p=10,u=50,f={},h={},b=i("#swipebox-top-bar, #swipebox-bottom-bar"),v=i("#swipebox-slider");b.addClass("visible-bars"),r.setTimeout(),i("body").bind("touchstart",function(r){return i(this).addClass("touching"),e=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current")),h=r.originalEvent.targetTouches[0],f.pageX=r.originalEvent.targetTouches[0].pageX,f.pageY=r.originalEvent.targetTouches[0].pageY,i("#swipebox-slider").css({"-webkit-transform":"translate3d("+g+"%, 0, 0)",transform:"translate3d("+g+"%, 0, 0)"}),i(".touching").bind("touchmove",function(r){if(r.preventDefault(),r.stopPropagation(),h=r.originalEvent.targetTouches[0],!c&&(n=o,o=h.pageY-f.pageY,Math.abs(o)>=u||l)){var b=.75-Math.abs(o)/v.height();v.css({top:o+"px"}),v.css({opacity:b}),l=!0}s=t,t=h.pageX-f.pageX,a=100*t/m,!c&&!l&&Math.abs(t)>=p&&(i("#swipebox-slider").css({"-webkit-transition":"",transition:""}),c=!0),c&&(0<t?0===e?i("#swipebox-overlay").addClass("leftSpringTouch"):(i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i("#swipebox-slider").css({"-webkit-transform":"translate3d("+(g+a)+"%, 0, 0)",transform:"translate3d("+(g+a)+"%, 0, 0)"})):0>t&&(d.length===e+1?i("#swipebox-overlay").addClass("rightSpringTouch"):(i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i("#swipebox-slider").css({"-webkit-transform":"translate3d("+(g+a)+"%, 0, 0)",transform:"translate3d("+(g+a)+"%, 0, 0)"}))))}),!1}).bind("touchend",function(e){if(e.preventDefault(),e.stopPropagation(),i("#swipebox-slider").css({"-webkit-transition":"-webkit-transform 0.4s ease",transition:"transform 0.4s ease"}),o=h.pageY-f.pageY,t=h.pageX-f.pageX,a=100*t/m,l)if(l=!1,Math.abs(o)>=2*u&&Math.abs(o)>Math.abs(n)){var d=o>0?v.height():-v.height();v.animate({top:d+"px",opacity:0},300,function(){r.closeSlide()})}else v.animate({top:0,opacity:1},300);else c?(c=!1,t>=p&&t>=s?r.getPrev():t<=-p&&t<=s&&r.getNext()):b.hasClass("visible-bars")?(r.clearTimeout(),r.hideBars()):(r.showBars(),r.setTimeout());i("#swipebox-slider").css({"-webkit-transform":"translate3d("+g+"%, 0, 0)",transform:"translate3d("+g+"%, 0, 0)"}),i("#swipebox-overlay").removeClass("leftSpringTouch").removeClass("rightSpringTouch"),i(".touching").off("touchmove").removeClass("touching")})},setTimeout:function(){if(c.settings.hideBarsDelay>0){var t=this;t.clearTimeout(),t.timeout=e.setTimeout(function(){t.hideBars()},c.settings.hideBarsDelay)}},clearTimeout:function(){e.clearTimeout(this.timeout),this.timeout=null},showBars:function(){var e=i("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.addClass("visible-bars"):(i("#swipebox-top-bar").animate({top:0},500),i("#swipebox-bottom-bar").animate({bottom:0},500),setTimeout(function(){e.addClass("visible-bars")},1e3))},hideBars:function(){var e=i("#swipebox-top-bar, #swipebox-bottom-bar");this.doCssTrans()?e.removeClass("visible-bars"):(i("#swipebox-top-bar").animate({top:"-50px"},500),i("#swipebox-bottom-bar").animate({bottom:"-50px"},500),setTimeout(function(){e.removeClass("visible-bars")},1e3))},animBars:function(){var e=this,t=i("#swipebox-top-bar, #swipebox-bottom-bar");t.addClass("visible-bars"),e.setTimeout(),i("#swipebox-slider").click(function(){t.hasClass("visible-bars")||(e.showBars(),e.setTimeout())}),i("#swipebox-bottom-bar").hover(function(){e.showBars(),t.addClass("visible-bars"),e.clearTimeout()},function(){c.settings.hideBarsDelay>0&&(t.removeClass("visible-bars"),e.setTimeout())})},keyboard:function(){var t=this;i(e).bind("keyup",function(e){e.preventDefault(),e.stopPropagation(),37===e.keyCode?t.getPrev():39===e.keyCode?t.getNext():27===e.keyCode&&t.closeSlide()})},actions:function(){var e=this,t="touchend click";d.length<2?(i("#swipebox-bottom-bar").hide(),o===d[1]&&i("#swipebox-top-bar").hide()):(i("#swipebox-prev").bind(t,function(t){t.preventDefault(),t.stopPropagation(),e.getPrev(),e.setTimeout()}),i("#swipebox-next").bind(t,function(t){t.preventDefault(),t.stopPropagation(),e.getNext(),e.setTimeout()})),i("#swipebox-close").bind(t,function(){e.closeSlide()})},setSlide:function(e,t){t=t||!1;var o=i("#swipebox-slider");g=100*-e,this.doCssTrans()?o.css({"-webkit-transform":"translate3d("+100*-e+"%, 0, 0)",transform:"translate3d("+100*-e+"%, 0, 0)"}):o.animate({left:100*-e+"%"}),i("#swipebox-slider .slide").removeClass("current"),i("#swipebox-slider .slide").eq(e).addClass("current"),this.setTitle(e),t&&o.fadeIn(),i("#swipebox-prev, #swipebox-next").removeClass("disabled"),0===e?i("#swipebox-prev").addClass("disabled"):e===d.length-1&&c.settings.loopAtEnd!==!0&&i("#swipebox-next").addClass("disabled")},openSlide:function(t){i("html").addClass("swipebox-html"),h?(i("html").addClass("swipebox-touch"),c.settings.hideCloseButtonOnMobile&&i("html").addClass("swipebox-no-close-button")):i("html").addClass("swipebox-no-touch"),i(e).trigger("resize"),this.setSlide(t,!0)},preloadMedia:function(e){var t=this,i=null;d[e]!==o&&(i=d[e].href),t.isVideo(i)?t.openMedia(e):setTimeout(function(){t.openMedia(e)},1e3)},openMedia:function(e){var t,s,n=this;return d[e]!==o&&(t=d[e].href),!(e<0||e>=d.length)&&(s=i("#swipebox-slider .slide").eq(e),void(n.isVideo(t)?s.html(n.getVideo(t)):(s.addClass("slide-loading"),n.loadMedia(t,function(){s.removeClass("slide-loading"),s.html(this)}))))},setTitle:function(e){var t=null;i("#swipebox-title").empty(),d[e]!==o&&(t=d[e].title),t?(i("#swipebox-top-bar").show(),i("#swipebox-title").append(t)):i("#swipebox-top-bar").hide()},isVideo:function(e){if(e){if(e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/)||e.match(/vimeo\.com\/([0-9]*)/)||e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/))return!0;if(e.toLowerCase().indexOf("swipeboxvideo=1")>=0)return!0}},parseUri:function(e,o){var s=t.createElement("a"),n={};return s.href=decodeURIComponent(e),s.search&&(n=JSON.parse('{"'+s.search.toLowerCase().replace("?","").replace(/&/g,'","').replace(/=/g,'":"')+'"}')),i.isPlainObject(o)&&(n=i.extend(n,o,c.settings.queryStringData)),i.map(n,function(e,t){if(e&&e>"")return encodeURIComponent(t)+"="+encodeURIComponent(e)}).join("&")},getVideo:function(e){var t="",i=e.match(/((?:www\.)?youtube\.com|(?:www\.)?youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/),o=e.match(/(?:www\.)?youtu\.be\/([a-zA-Z0-9\-_]+)/),s=e.match(/(?:www\.)?vimeo\.com\/([0-9]*)/),n="";return i||o?(o&&(i=o),n=a.parseUri(e,{autoplay:c.settings.autoplayVideos?"1":"0",v:""}),t='<iframe width="560" height="315" src="//'+i[1]+"/embed/"+i[2]+"?"+n+'" frameborder="0" allowfullscreen></iframe>'):s?(n=a.parseUri(e,{autoplay:c.settings.autoplayVideos?"1":"0",byline:"0",portrait:"0",color:c.settings.vimeoColor}),t='<iframe width="560" height="315"  src="//player.vimeo.com/video/'+s[1]+"?"+n+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>'):t='<iframe width="560" height="315" src="'+e+'" frameborder="0" allowfullscreen></iframe>','<div class="swipebox-video-container" style="max-width:'+c.settings.videoMaxWidth+'px"><div class="swipebox-video">'+t+"</div></div>"},loadMedia:function(e,t){if(0===e.trim().indexOf("#"))t.call(i("<div>",{class:"swipebox-inline-container"}).append(i(e).clone().toggleClass(c.settings.toggleClassOnLoad)));else if(!this.isVideo(e)){var o=i("<img>").on("load",function(){t.call(o)});o.attr("src",e)}},getNext:function(){var e,t=this,o=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));o+1<d.length?(e=i("#swipebox-slider .slide").eq(o).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(o).contents().find("iframe").attr("src",e),o++,t.setSlide(o),t.preloadMedia(o+1),c.settings.nextSlide&&c.settings.nextSlide()):c.settings.loopAtEnd===!0?(e=i("#swipebox-slider .slide").eq(o).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(o).contents().find("iframe").attr("src",e),o=0,t.preloadMedia(o),t.setSlide(o),t.preloadMedia(o+1),c.settings.nextSlide&&c.settings.nextSlide()):(i("#swipebox-overlay").addClass("rightSpring"),setTimeout(function(){i("#swipebox-overlay").removeClass("rightSpring")},500))},getPrev:function(){var e,t=i("#swipebox-slider .slide").index(i("#swipebox-slider .slide.current"));t>0?(e=i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src"),i("#swipebox-slider .slide").eq(t).contents().find("iframe").attr("src",e),t--,this.setSlide(t),this.preloadMedia(t-1),c.settings.prevSlide&&c.settings.prevSlide()):(i("#swipebox-overlay").addClass("leftSpring"),setTimeout(function(){i("#swipebox-overlay").removeClass("leftSpring")},500))},nextSlide:function(){},prevSlide:function(){},closeSlide:function(){i("html").removeClass("swipebox-html"),i("html").removeClass("swipebox-touch"),i(e).trigger("resize"),this.destroy()},destroy:function(){i(e).unbind("keyup"),i("body").unbind("touchstart"),i("body").unbind("touchmove"),i("body").unbind("touchend"),i("#swipebox-slider").unbind(),i("#swipebox-overlay").remove(),i.isArray(s)||s.removeData("_swipebox"),this.target&&this.target.trigger("swipebox-destroy"),i.swipebox.isOpen=!1,c.settings.afterClose&&c.settings.afterClose()}},c.init()},i.fn.swipebox=function(e){if(!i.data(this,"_swipebox")){var t=new i.swipebox(this,e);this.data("_swipebox",t)}return this.data("_swipebox")}}(window,document,e)}).call(t,i(0))},17:function(e,t){e.exports={title:"Custom Logos",benefits:[{benefit:"Brand recognition",description:"Businesses spend money on signage all the time why not put any logo directly in one of our many flooring options."},{benefit:"Easy to clean, seamless surface",description:"Our logos combined with our floor coatings or polished concrete offer durable surfaces that can easily be wiped clean with no maintenance."},{benefit:"Engraved into concrete",description:"We have specialized tools that engrave logos or designs into concrete creating a permanent unique look."}],applications:["Commercial Spaces, Condo Buildings, Offices, Manufacturing Plants, Show Rooms, Warehouses & Distribution Facilities, Schools, Hospitals, Retail Space, Stairs, Sidewalks, Ramps, Parkades Interior or Exterior, High Traffic Areas."],info:["Floor Coat Inc. is the only company in Edmonton that has the capability to provide any design or logo in any type of concrete surface. We offer many types of flooring options for interior or exterior concrete and we have perfected the art of placing logos into the finished product."],process:["We offer all types of logos including, vinyl logos in a polyaspartic or epoxy coated floor. We can produce logos into a polished concrete floor with stencils and dye. We also have the equipment to artistically engrave logos directly into concrete. Some of our recent engraving projects include an exterior concrete engraving at the LRT entrance for the new downtown arena and also logos for the city of Edmonton and St. Albert on some of their sidewalks."],picturePath:"services/custom-logo/",pictures:[{file:"commercial-flooring-logo-1.JPG",title:"Grind & polished concrete - Boilmakers logo"},{file:"commercial-flooring-logo-2.JPG",title:"Engraved stained coated polyaspartic - City of St. Albert logo"},{file:"commercial-flooring-logo-3.JPG",title:"Polyaspartic shop floor - Custom Bison logo"},{file:"commercial-flooring-logo-4.JPG",title:"Custom engraved logo - LRT Edmonton"},{file:"commercial-flooring-logo-5.JPG",title:"Custom epoxy - Oilers rink bedroom"},{file:"commercial-flooring-logo-6.JPG",title:"Polyaspartic coating - Custom Fordson logo"},{file:"commercial-flooring-logo-7.JPG",title:"Empire building front logo"},{file:"commercial-flooring-logo-8.JPG",title:"Ployaspartic logo shop floor - Favron Enterprises"},{file:"commercial-flooring-logo-9.JPG",title:"Polyaspartic coating - Grasslands fire hall"},{file:"commercial-flooring-logo-10.JPG",title:"Grind & polished concrete - Cabelas Edmonton"},{file:"commercial-flooring-logo-11.JPG",title:"Polyaspartic coating shop floor with custom logo"},{file:"commercial-flooring-logo-12.JPG",title:"Sample epoxy colors - Unicon shop floor"},{file:"commercial-flooring-logo-13.JPG",title:"Polaspartic coation shop floor - VIP logo"}]}},2:function(e,t,i){"use strict";(function(t){e.exports={init:function(){var e=!1,i=t(".learn-more-content"),o=t(".toggle-learn-more span");t(".toggle-learn-more span").click(function(){e?i.slideUp(350,function(){e=!1,o.text("Learn more..."),o.blur()}):i.slideDown(350,function(){e=!0,o.text("Learn less.."),o.blur()})})}}}).call(t,i(0))},3:function(e,t,i){var o=i(9);e.exports=(o.default||o).template({1:function(e,t,i,o,s){var n,a=null!=t?t:{},r=i.helperMissing,l="function",c=e.escapeExpression;return'\t\t\t<li class="service-list-item benefit">\n\t\t\t\t<span>'+c((n=null!=(n=i.benefit||(null!=t?t.benefit:t))?n:r,typeof n===l?n.call(a,{name:"benefit",hash:{},data:s}):n))+":</span> "+c((n=null!=(n=i.description||(null!=t?t.description:t))?n:r,typeof n===l?n.call(a,{name:"description",hash:{},data:s}):n))+"\n\t\t\t</li>\n"},3:function(e,t,i,o,s,n,a){var r,l=e.lambda,c=e.escapeExpression,d=null!=t?t:{},p=i.helperMissing,u="function";return'\t\t\t<a href="'+c(l(null!=a[1]?a[1].picturePath:a[1],t))+"large/"+c((r=null!=(r=i.file||(null!=t?t.file:t))?r:p,typeof r===u?r.call(d,{name:"file",hash:{},data:s}):r))+'" class="swipebox" title="'+c((r=null!=(r=i.title||(null!=t?t.title:t))?r:p,typeof r===u?r.call(d,{name:"title",hash:{},data:s}):r))+'"><img src="'+c(l(null!=a[1]?a[1].picturePath:a[1],t))+"small/"+c((r=null!=(r=i.file||(null!=t?t.file:t))?r:p,typeof r===u?r.call(d,{name:"file",hash:{},data:s}):r))+'" /></a>\n'},compiler:[7,">= 4.0.0"],main:function(e,t,i,o,s,n,a){var r,l,c=null!=t?t:{},d=i.helperMissing,p="function",u=e.escapeExpression;return'<div class="col-xs-12 services-title" id="welcome-title-container">\n\t<span>'+u((l=null!=(l=i.title||(null!=t?t.title:t))?l:d,typeof l===p?l.call(c,{name:"title",hash:{},data:s}):l))+'</span>\n</div>\n\n<div class="col-lg-6 col-md-10 col-md-offset-1">\n\n\t<ul class="service-list">\n\t\t<li class="service-list-header"><span>Benefits</span>\n'+(null!=(r=i.each.call(c,null!=t?t.benefits:t,{name:"each",hash:{},fn:e.program(1,s,0,n,a),inverse:e.noop,data:s}))?r:"")+'\t</ul>\n\n\t<ul class="service-list">\n\t\t<li class="service-list-header"><span>Typical Applications</span>\n\t\t<li class="service-list-item">\n\t\t\t'+u((l=null!=(l=i.applications||(null!=t?t.applications:t))?l:d,typeof l===p?l.call(c,{name:"applications",hash:{},data:s}):l))+'\n\t\t</li>\n\t</ul>\n\n\t<ul class="service-list learn-more-content">\n\t\t<li class="service-list-header"><span>Product Info</span></li>\n\t\t<li class="service-list-item">'+u((l=null!=(l=i.info||(null!=t?t.info:t))?l:d,typeof l===p?l.call(c,{name:"info",hash:{},data:s}):l))+'</li>\n\n\t\t<li class="service-list-header"><span>What We Do</span></li>\n\t\t<li class="service-list-item">'+u((l=null!=(l=i.process||(null!=t?t.process:t))?l:d,typeof l===p?l.call(c,{name:"process",hash:{},data:s}):l))+'</li>\n\t</ul>\n\n\t<div class="toggle-learn-more">\n\t\t<span>Learn more...</span>\n\t</div>\n\n</div>\n\n<div class="col-lg-6 col-md-10 col-md-offset-1 portfolio-container">\n\t<div class="portfolio-title">\n\t\t<span>Recent Work</span>\n\t</div>\n\n\t<br />\n\n\t<div class="click-hint">\n\t\t<span>Hint: Click on a picture for a full screen view</span>\n\t</div>\n\n\t<div class="portfolio-items">\n\n'+(null!=(r=i.each.call(c,null!=t?t.pictures:t,{name:"each",hash:{},fn:e.program(3,s,0,n,a),inverse:e.noop,data:s}))?r:"")+'\t</div>\n\n\t<br />\n\n\t<div class="contact-us-row">\n\t\t<a class="contact-us-button" href="contact-us.html">Contact us to book your appointment</a>\n\t</div>\n</div>\n'},useData:!0,useDepths:!0})},41:function(e,t,i){"use strict";(function(e){i(1);var t=i(2),o=i(5),s=i(4),n=i(7),a=i(6),r=i(3),l=i(17);!function(e){var i=document.createElement("div");i.innerHTML=r(l),e(".content").append(i);var c=document.createElement("div");c.innerHTML=n(),e("nav").append(c);var d=document.createElement("div");d.innerHTML=a(),e("footer").append(d),o.init(),s.init(),t.init(),e(".swipebox").swipebox(),e(window).on("load",function(){e("#preloader").fadeOut("slow",function(){e(this).remove()})})}(e)}).call(t,i(0))}},[41]);