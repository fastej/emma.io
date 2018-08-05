$(document).ready( function() {
	
	"use strict";

	var aboutimg = $('#aboutimg');
	var workimg = $('#workimg');
	var container = $('#container');
	var abouttext = $('#abouttext');
	var worktext = $('.worktext');
	var abouttitle = $('#abouttitle');
	var worktitle = $('#worktitle');
	var projectimg = $('#work li');
	var project0 = $('#project0');
	var project1 = $('#project1');
	var title = $('.title');
	var text = $('.text');
	var width3 = aboutimg.width();
	var width4 = workimg.width();
	var width = text.width();
	var width2 = abouttitle.width();
	var height = $('#main').height();
	var fullheight = $(window).height();
	var projtitleheight = $('.ptitle').height();
	
	aboutimg.css('top', -width3);
	workimg.css('top', -width4);
	container.css('height', width4);
	text.css('top', width3);
	text.css('display', 'none');
	$('#work li').css('height', width3);
	$('.pjob').css('margin-bottom', projtitleheight);
	

$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
	var aboutimg = $('#aboutimg');
	var workimg = $('#workimg');
	var container = $('#container');
	var abouttext = $('#abouttext');
	var worktext = $('.worktext');
	var abouttitle = $('#abouttitle');
	var worktitle = $('#worktitle');
	var projectimg = $('#work li');
	var project0 = $('#project0');
	var title = $('.title');
	var text = $('.text');
	var width3 = aboutimg.width();
	var width4 = workimg.width();
	var width = text.width();
	var width2 = title.width();
	var height = $('#main').height();
	var projtitleheight = $('.ptitle').height();
	
	aboutimg.css('height', width3);
	workimg.css('height', width4);
	container.css('height', width4);
	title.css('height', width2);
	projectimg.css('height', 0.8*width3);
	$('#work li').css('height', width4);
	$('.pjob').css('margin-bottom', projtitleheight);
}




$('.button').on('click', function(){
	$('#work').css('opacity', 0);
	$('#about').css('opacity', 0);
	$('#aboutimg').css('top', -width3);
	$('#workimg').css('top', -width3);
	
	$('.title').animate({top: -50 +'%'}, 0);
	text.css('display', 'none');
	abouttitle.css('opacity', 0);
	worktitle.css('opacity', 0);
	worktext.css('opacity', 0);
	abouttext.css('opacity', 0);
	
	if ($(this).is('#aboutb')) {
		
		
		$('#aboutimg .text').css({'top': width3, display : 'block'});
		$('#work').css('z-index',-10);
		$('#about').css('z-index',"");
		$('#about').animate({opacity: 1}, 0);
		abouttitle.delay(800).animate({opacity:1},250);
	
		$('#aboutimg .text').delay(600).animate({top: 85 + '%'}, 600, 'easeOutBounce');
		$('#aboutimg .title').delay(300).animate({top:-25 + '%'}, 600, 'easeOutBounce');
		$('#aboutimg').animate({top:($(window).height() - $('#aboutimg').height())/2}, 600, 'easeOutBack');
	
		$(window).on('resize', function () {
  	  		$('#aboutimg').css('top', function () {
          	  return ($(window).height() - $(this).height())/2;
    			});
			}).resize();
			
		abouttext.delay(1200).animate({opacity:1},300, 'easeOutCubic');
		
		
		
	} else if ($(this).is('#workb')) {
	
		$('#workimg .text').css({'top': width4, display : 'block'});
		$('#about').css('z-index',-1);
		$('#work').css('z-index',0);
		$('#nav').css('z-index', 1);
	    $('#work').animate({opacity: 1}, 0);
		worktitle.delay(800).animate({opacity:1},250);
		$('#work li').css({'margin-left':"", 'opacity':"", 'background-size':""});
		$('#prev').css({'display':'block', 'opacity':0});
		$('#next').css({'display':'block', 'opacity':0});
		$('#next').delay(1000).css('display','block').animate({opacity:1},300);
		$('#prev').delay(1000).css('display','block').animate({opacity:1},300);
	
		$('#workimg .text').delay(600).animate({top: 85 + '%'}, 600, 'easeOutBounce');
		$('#workimg .title').delay(300).animate({top:-25 + '%'}, 600, 'easeOutBounce');
		$('#workimg').animate({top:($(window).height() - $('#workimg').height())/2}, 600, 'easeOutBack');
	
		$(window).on('resize', function () {
   		$('#workimg').css('top', function () {
      	  return ($(window).height() - $(this).height())/2;
    			});
			}).resize();
		
		$('#work .text p[data-id=0]').css('display', 'block');
		$('#work .text p[data-id=0]').delay(1200).animate({opacity:1},300, 'easeOutCubic');
		
	}
});

$('#next').on('click', function(){
	
	var i;
	for (i = 0; i < 10; i++) {
		if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
			$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:-60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			var iplus1 = i+1;
			$('#work li[data-id='+ iplus1 +']').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:60+'%'}, 0);
			$('#work .text p[data-id='+ i +']').css('opacity', 0);
			$('#work .text p[data-id='+ i +']').css('display', 'none');
			$('#work .text p[data-id='+ iplus1 +']').css('display', 'block');
			$('#work .text p[data-id='+ iplus1 +']').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		} else if ($('#work li[data-id=9]').css('opacity') === '1') {
			$('#work li[data-id=9]').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:-60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id=0]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id=9]').css('opacity', 0);
			$('#work .text p[data-id=9]').css('display', 'none');
			$('#work .text p[data-id=0]').css('display', 'block');
			$('#work .text p[data-id=0]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		}
	}
});


$('#prev').on('click', function(){
	
	var i;
	for (i = 0; i < 10; i++) {
		if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
			var iminus1 = i-1;
			$('#work li[data-id='+ iminus1 +']').animate({marginLeft:-60+'%'}, 0);
			$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			var iplus1 = i+1;
			$('#work li[data-id='+ iminus1 +']').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id='+ i +']').css('opacity', 0);
			$('#work .text p[data-id='+ i +']').css('display', 'none');
			$('#work .text p[data-id='+ iminus1 +']').css('display', 'block');
			$('#work .text p[data-id='+ iminus1 +']').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		} else if ($('#work li[data-id=0]').css('opacity') === '1') {
			$('#work li[data-id=0]').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id=9]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id=0]').css('opacity', 0);
			$('#work .text p[data-id=0]').css('display', 'none');
			$('#work .text p[data-id=9]').css('display', 'block');
			$('#work .text p[data-id=9]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		}
	}
});

var n = 1;

$('#project0 .pnext').on('click', function(){
	
	if (n === 7) {
		$('#project0').css('background-image', 'url("One%20For%20The%20Road/1.jpg")' );
		n=1;
	} else if (n !== 7) {
			var nplus1 = n+1;
			$('#project0').css('background-image', 'url("One%20For%20The%20Road/'+ nplus1 +'.jpg")' );
			$('#project0').css('background-image', 'One%20For%20The%20Road/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
});

$('#project0 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project0').css('background-image', 'url("One%20For%20The%20Road/7.jpg")' );
		n=7;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project0').css('background-image', 'url("One%20For%20The%20Road/'+ nminus1 +'.jpg")' );
			$('#project0').css('background-image', 'One%20For%20The%20Road/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
});

if (matchMedia) {
  var mq = window.matchMedia("(max-width: 460px)"); 
  mq.addListener(WidthChange);
  WidthChange(mq);
}

function WidthChange(mq) {
	$(window).on('resize', function () {
		if (mq.matches) {
			
			$('.button').on('click', function () {
				var holdertop = $('#workimg').offset().top;
				$('#pprojholder').css('top', holdertop);
				$('#nprojholder').css('top', holdertop);
			});
			
			
				var holdertop = $('#workimg').offset().top;
				$('#pprojholder').css('top', holdertop);
				$('#nprojholder').css('top', holdertop);
			
		} else {
			$('#pprojholder').css('top', "");
			$('#nprojholder').css('top', "");
		}
		
	}).resize();
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
		}
        list.push(img);
        img.src = array[i];
    }
} 

preloadImages(["One%20For%20The%20Road/1.jpg", "One%20For%20The%20Road/2.jpg", "One%20For%20The%20Road/3.jpg", "One%20For%20The%20Road/4.jpg", "One%20For%20The%20Road/5.jpg", "One%20For%20The%20Road/6.jpg", "One%20For%20The%20Road/7.jpg"]);

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});



});