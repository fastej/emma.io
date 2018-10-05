$(document).ready( function() {
	
	"use strict";

	var aboutimg = $('#aboutimg');
	var landing = $('#landing');
	var workimg = $('#workimg');
	var landingimg = $('#landingimg');
	var containerwork = $('#containerwork');
	var container = $('#container');
	var abouttext = $('#abouttext');
	var worktext = $('.worktext');
	var landingtext = $('.landingtext');
	var abouttitle = $('#abouttitle');
	var worktitle = $('#worktitle');
	var landingtitle = $('#landingtitle');
	var projectimg = $('#work li');
	var landingprojimg = $('#landing li');
	var project0 = $('#project0');
	var project1 = $('#project1');
	var title = $('.title');
	var text = $('.text');
	var width3 = aboutimg.width();
	var width4 = workimg.width();
	var width5 = landingimg.width();
	var width = text.width();
	var width2 = abouttitle.width();
	var height = $('#main').height();
	var fullheight = $(window).height();
	var projtitleheight = $('.ptitle').height();
	
	landingimg.css('top', (fullheight - landingimg.height())/2);
	$('#justdoneop').css('margin-top', $('#nholder').height()/2 - 1.5*$('#justdoneop').height());
	$('#roadop').css('margin-top', $('#nprojholder').height()/2 - 4.5*$('#normalop').height());
	aboutimg.css('top', -width3);
	workimg.css('top', -width4);
	containerwork.css('height', width4);
	$('#work .text').css('top', width3); 
	$('#work .text').css('display', 'none');
	$('#about .text').css('top', width3);
	$('#about .text').css('display', 'none');
	projectimg.css('height', width3);
	landingprojimg.css('height', width5);
	$('#work li').css('height', width3);
	$('#landingprojimg').css('height', width5);
	$('#now .pjob').css('margin-bottom', $('#now .ptitle').height());
	$('#landing').delay(200).animate({opacity:1},150);
	
	

$(window).ready(updateHeight);
$(window).resize(updateHeight);

function updateHeight()
{
	var aboutimg = $('#aboutimg');
	var landing = $('#landing');
	var workimg = $('#workimg');
	var landingimg = $('#landingimg');
	var containerwork = $('#containerwork');
	var container = $('#container');
	var abouttext = $('#abouttext');
	var worktext = $('.worktext');
	var landingtext = $('.landingtext');
	var abouttitle = $('#abouttitle');
	var worktitle = $('#worktitle');
	var landingtitle = $('#landingtitle');
	var projectimg = $('#work li');
	var landingprojimg = $('#landing li');
	var project0 = $('#project0');
	var title = $('.title');
	var text = $('.text');
	var width3 = aboutimg.width();
	var width4 = workimg.width();
	var width5 = landingimg.width();
	var width = text.width();
	var width2 = title.width();
	var height = $('#main').height();
	var projtitleheight = $('.ptitle').height();
	
		if (($(window).height() - $('#aboutimg').height()) > 0) {
				landingimg.css('top', (($(window).height() - $('#aboutimg').height())/2) +30);
				$('#justdoneop').css('margin-top', $('#nholder').height()/2 - 1.5*$('#justdoneop').height());
			} else {
				landingimg.css('top', 30);
				$('#justdoneop').css('top', "");
			}

	aboutimg.css('top', -width3);
	workimg.css('top', -width4);
	aboutimg.css('height', width3);
	workimg.css('height', width4);
	landingimg.css('height', width5);
	containerwork.css('height', width4);
	container.css('height', width5);
	title.css('height', width2);
	projectimg.css('height', width3);
	landingprojimg.css('height', width5);
	$('#work li').css('height', width4);
	$('#landingprojimg').css('height', width5);
	
	if ($('#about').css('opacity') === '1') {
		$('#aboutimg .text').css('top', 85 + '%');
	} else { 
		$('#aboutimg .text').css('top', width3);
	}
		
	if ($('#work').css('opacity') === '1') {
		var i;
		for (i = 0; i < 9; i++) {
			if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
				$('#work li[data-id='+ i +'] .pjob').css('margin-bottom', $('#work li[data-id='+ i +'] .ptitle').height());
			}
		}
		$('#workimg .text').css('top', 85 + '%');
	} else { 
		$('#workimg .text').css('top', width3);
	}
	
	if ($('#landing').css('opacity') === '1') {
		var j;
		for (j = 0; j < 3; j++) {
			if ($('#landing li[data-id='+ j +']').css('opacity') === '1') {
				$('#landing li[data-id='+ j +'] .pjob').css('margin-bottom', $('#landing li[data-id='+ j +'] .ptitle').height());
			}
		}
	}
	
}

$('.arrow').bind('fade-cycle', function() {
    $(this).fadeTo(800, 0.1, 'easeOutCubic', function() {
        $(this).fadeTo(2000, 1, 'easeOutCubic', function() {
            $(this).trigger('fade-cycle');
        });
    });
});

$('.arrow').each(function(index, elem) {
    setTimeout(function() {
        $(elem).trigger('fade-cycle');
    }, index * 250);
});

$('.button').on('click', function(){
	$('#work').css('opacity', 0);
	$('#about').css('opacity', 0);
	$('#landing').css('opacity', 0);
	$('#aboutimg').css('top', -width3);
	$('#workimg').css('top', -width3);
	$('#landingimg').css('top', -width3);
	$('.text').css('top', width3);
	
	$('.title').animate({top: -50 +'%'}, 0);
	text.css('display', 'none');
	abouttitle.css('opacity', 0);
	worktitle.css('opacity', 0);
	landingtitle.css('opacity', 0);
	worktext.css('opacity', 0);
	abouttext.css('opacity', 0);
	landingtext.css('opacity', 0);
	
	if ($(this).is('#aboutb')) {
		
		$('#aboutimg .text').css({'top': width3, display : 'block'});
		$('#work').css('z-index',-10);
		$('#landing').css('z-index',-10);
		$('#about').css('z-index',"");
		$('#about').animate({opacity: 1}, 0);
		abouttitle.delay(800).animate({opacity:1},250);
	
		$('#aboutimg .text').delay(600).animate({top: 85 + '%'}, 600, 'easeOutBounce');
		$('#aboutimg .title').delay(300).animate({top:-25 + '%'}, 600, 'easeOutBounce');
		$('#aboutimg').animate({top:($(window).height() - $('#aboutimg').height())/2 + 30}, 600, 'easeOutBack');
	
		$(window).on('resize', function () {
			if (($(window).height() - $('#aboutimg').height()) > 0) {
				$('#aboutimg').css('top', (($(window).height() - $('#aboutimg').height())/2) +30);
			} else {
				$('#aboutimg').css('top', 30);
			}
			}).resize();
			
		abouttext.delay(1200).animate({opacity:1},300, 'easeOutCubic');
		
	} else if ($(this).is('#workb')) {
	
		$('#workimg .text').css({'top': width4, display : 'block'});
		$('#about').css('z-index',-1);
		$('#landing').css('z-index',-1);
		$('#work').css('z-index',0);
		$('#nav').css('z-index', 1);
	    $('#work').animate({opacity: 1}, 0);
		worktitle.delay(800).animate({opacity:1},250);
		$('#work li').css({'margin-left':"", 'opacity':"", 'background-size':""});
		$('#prevwork').css({'display':'block', 'opacity':0});
		$('#nextwork').css({'display':'block', 'opacity':0});
		$('#nextwork').delay(1000).css('display','block').animate({opacity:1},300);
		$('#prevwork').delay(1000).css('display','block').animate({opacity:1},300);
		$('.workop').css({'display':'block', 'opacity':0});
		$('.workop').delay(1000).css('display','inline-block').animate({opacity:1},300);
	
		$('#workimg .text').delay(600).animate({top: 85 + '%'}, 600, 'easeOutBounce');
		$('#workimg .title').delay(300).animate({top:-25 + '%'}, 600, 'easeOutBounce');
		$('#workimg').animate({top:($(window).height() - $('#workimg').height())/2 + 30}, 600, 'easeOutBack');
	
		$(window).on('resize', function () {
			if (($(window).height() - $('#workimg').height()) > 0) {
				$('#workimg').css('top', (($(window).height() - $('#workimg').height())/2) +30);
				$('#roadop').css('margin-top', $('#nprojholder').height()/2 - 4.5*$('#normalop').height());
			} else {
				$('#workimg').css('top', 30);
				$('#normalop').css('top', "");
			}
			}).resize();
		
		$('#work .text p[data-id=0]').css('display', 'block');
		$('#work .text p[data-id=0]').delay(1200).animate({opacity:1},300, 'easeOutCubic');
		
	} else if ($(this).is('#landingb')) {
	
		$('#landingimg .text').css({'top': width5, 'display' : 'block'});
		$('#about').css('z-index',-1);
		$('#work').css('z-index',-1);
		$('#landing').css('z-index',0);
		$('#nav').css('z-index', 1);
	    $('#landing').animate({opacity: 1}, 0);
		landingtitle.delay(800).animate({opacity:1},250);
		$('#landing li').css({'margin-left':"", 'opacity':"", 'background-size':""});
		$('#prev').css({'display':'block', 'opacity':0});
		$('#next').css({'display':'block', 'opacity':0});
		$('#next').delay(1000).css('display','block').animate({opacity:1},300);
		$('#prev').delay(1000).css('display','block').animate({opacity:1},300);
		$('.landingop').css({'display':'block', 'opacity':0});
		$('.landingop').delay(1000).css('display','inline-block').animate({opacity:1},300);
	
		$('#landingimg .text').delay(600).animate({top: 85 + '%'}, 600, 'easeOutBounce');
		$('#landingimg .title').delay(300).animate({top:-25 + '%'}, 600, 'easeOutBounce');
		$('#landingimg').animate({top:($(window).height() - $('#workimg').height())/2 + 30}, 600, 'easeOutBack');
	
		$(window).on('resize', function () {
			if (($(window).height() - $('#workimg').height()) > 0) {
				$('#workimg').css('top', (($(window).height() - $('#workimg').height())/2) +30);
			} else {
				$('#workimg').css('top', 30);
			}
			}).resize();
		
		$('#landingimg .text p[data-id=1]').css('display', 'block');
		$('#landingimg .text p[data-id=1]').delay(1200).animate({opacity:1},300, 'easeOutCubic');
	}

});

$('#nav li').on('click', function() {
	
	if ($(this).is('#aboutb')) {
		$('#nav li').css({'color':"", 'font-weight':200});
		document.getElementById('landingb').innerHTML = "what i'm up to";
		document.getElementById('workb').innerHTML = "previous work";
		document.getElementById('aboutb').innerHTML = "about <";
		
		$('#aboutb').css({'color' : '#bc2a8d', 'font-weight':300});
	} else if ($(this).is('#workb')) {
		$('#nav li').css({'color':"", 'font-weight':200});
		document.getElementById('landingb').innerHTML = "what i'm up to";
		document.getElementById('workb').innerHTML = "previous work <";
		document.getElementById('aboutb').innerHTML = "about";
		
		$('#workb').css({'color' : 'rgba(127,216,5,1.00)', 'font-weight':300});
	} else if ($(this).is('#landingb')) {
		$('#nav li').css({'color':"", 'font-weight':200});
		document.getElementById('landingb').innerHTML = "what i'm up to <";
		document.getElementById('workb').innerHTML = "previous work";
		document.getElementById('aboutb').innerHTML = "about";
		
		$('#landingb').css({'color' : 'rgba(70,140,231,1.00)', 'font-weight':300});
	} else {
	}
});

$('.landingop').on('click', function() {
	$('.landingop').css({'color':"", 'font-weight':200});
	$(this).css({'color' : 'rgba(70,140,231,1.00)', 'font-weight':300});
	
	if ($(this).is('#justdoneop')) {
		document.getElementById('justdoneop').innerHTML = "> just done";
		document.getElementById('currentlyop').innerHTML = "currently";
		document.getElementById('doingnextop').innerHTML = "doing next";
	} else if ($(this).is('#currentlyop')) {
		document.getElementById('justdoneop').innerHTML = "just done";
		document.getElementById('currentlyop').innerHTML = "> currently";
		document.getElementById('doingnextop').innerHTML = "doing next";
	} else {
		document.getElementById('justdoneop').innerHTML = "just done";
		document.getElementById('currentlyop').innerHTML = "currently";
		document.getElementById('doingnextop').innerHTML = "> doing next";
	}
});

$('#justdoneop').on('click', function(){
	
	document.getElementById('landingtitle').innerHTML = "just done";
	
	var i;
	for (i=0 ; i<3 ; i++) {
	if (i === 0) {
		continue;
		} else if ($('#landing li[data-id='+ i +']').css('opacity') === '1') {
		$('#landing li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#landing li[data-id=0]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#landing li[data-id=0] .ptitle').height();
		$('#landing li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#landing .text p[data-id='+ i +']').css('opacity', 0);
		$('#landing .text p[data-id='+ i +']').css('display', 'none');
		$('#landing .text p[data-id=0]').css('display', 'block');
		$('#landing .text p[data-id=0]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#currentlyop').on('click', function(){
	
	document.getElementById('landingtitle').innerHTML = "currently";
	
	var i;
	for (i=0 ; i<3 ; i++) {
	if (i === 1) {
		continue;
		} else if ($('#landing li[data-id='+ i +']').css('opacity') === '1') {
		$('#landing li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#landing li[data-id=1]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#landing li[data-id=1] .ptitle').height();
		$('#landing li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#landing .text p[data-id='+ i +']').css('opacity', 0);
		$('#landing .text p[data-id='+ i +']').css('display', 'none');
		$('#landing .text p[data-id=1]').css('display', 'block');
		$('#landing .text p[data-id=1]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#doingnextop').on('click', function(){
	
	document.getElementById('landingtitle').innerHTML = "doing next";
	
	var i;
	for (i=0 ; i<3 ; i++) {
	if (i === 2) {
		continue;
		} else if ($('#landing li[data-id='+ i +']').css('opacity') === '1') {
		$('#landing li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#landing li[data-id=2]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#landing li[data-id=2] .ptitle').height();
		$('#landing li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#landing .text p[data-id='+ i +']').css('opacity', 0);
		$('#landing .text p[data-id='+ i +']').css('display', 'none');
		$('#landing .text p[data-id=2]').css('display', 'block');
		$('#landing .text p[data-id=2]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('.workop').on('click', function() {
	n = 1;
	$('.workop').css({'color':"", 'font-weight':200});
	$(this).css({'color' : 'rgba(127,216,5,1.00)', 'font-weight':300});
	
	if ($(this).is('#normalop')) {
		document.getElementById('normalop').innerHTML = "> normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#pruop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "> the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#scanartistsop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "> scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#thehwordop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "> the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#thishouseop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "> this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#mcqueenop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "> mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#yellowop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "> the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#thevillageop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "> the village";
		document.getElementById('roadop').innerHTML = "one for the road";
	} else if ($(this).is('#roadop')) {
		document.getElementById('normalop').innerHTML = "normal";
		document.getElementById('pruop').innerHTML = "the pru project";
		document.getElementById('scanartistsop').innerHTML = "scan artists";
		document.getElementById('thehwordop').innerHTML = "the h word";
		document.getElementById('thishouseop').innerHTML = "this house";
		document.getElementById('mcqueenop').innerHTML = "mcqueen";
		document.getElementById('yellowop').innerHTML = "the sound of yellow";
		document.getElementById('thevillageop').innerHTML = "the village";
		document.getElementById('roadop').innerHTML = "> one for the road";
	} 
});

$('#roadop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 0) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=0]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=0] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=0]').css('display', 'block');
		$('#work .text p[data-id=0]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#pruop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 1) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=1]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=1] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=1]').css('display', 'block');
		$('#work .text p[data-id=1]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#thevillageop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 2) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=2]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=2] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=2]').css('display', 'block');
		$('#work .text p[data-id=2]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#thishouseop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 3) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=3]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=3] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=3]').css('display', 'block');
		$('#work .text p[data-id=3]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#mcqueenop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 4) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=4]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=4] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=4]').css('display', 'block');
		$('#work .text p[data-id=4]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#yellowop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 5) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=5]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=5] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=5]').css('display', 'block');
		$('#work .text p[data-id=5]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#scanartistsop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 6) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=6]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=6] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=6]').css('display', 'block');
		$('#work .text p[data-id=6]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#thehwordop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 7) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=7]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=7] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=7]').css('display', 'block');
		$('#work .text p[data-id=7]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#normalop').on('click', function(){
	
	var i;
	for (i=0 ; i<10 ; i++) {
	if (i === 8) {
		continue;
		} else if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
		$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
		$('#work li[data-id=8]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
		var newprojtitleheight = $('#work li[data-id=8] .ptitle').height();
		$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:-60+'%'}, 0);
		$('#work .text p[data-id='+ i +']').css('opacity', 0);
		$('#work .text p[data-id='+ i +']').css('display', 'none');
		$('#work .text p[data-id=8]').css('display', 'block');
		$('#work .text p[data-id=8]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
		$('.pjob').css('margin-bottom', newprojtitleheight);
		}
	}
});

$('#prev').on('click', function(){
	
	if ($('#landing li[data-id=1]').css('opacity') === '1') {
		document.getElementById('landingtitle').innerHTML = "just done";
		document.getElementById('prev').innerHTML = "";
		document.getElementById('next').innerHTML = "currently";
	} else if ($('#landing li[data-id=2]').css('opacity') === '1') {
	document.getElementById('landingtitle').innerHTML = "currently";
	document.getElementById('prev').innerHTML = "just<br>done";
	document.getElementById('next').innerHTML = "doing<br>next";
	}
	
	var i;
	for (i = 0; i < 3; i++) {
		if ($('#landing li[data-id='+ i +']').css('opacity') === '1') {
			var iminus1 = i-1;
			var oldprojtitleheight = $('#landing li[data-id='+ iminus1 +'] .ptitle').height();
			$('#landing li[data-id='+ iminus1 +']').animate({marginLeft:-60+'%'}, 0);
			$('#landing li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			var iplus1 = i+1;
			$('#landing li[data-id='+ iminus1 +']').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#landing .text p[data-id='+ i +']').css('opacity', 0);
			$('#landing .text p[data-id='+ i +']').css('display', 'none');
			$('#landing .text p[data-id='+ iminus1 +']').css('display', 'block');
			$('#landing .text p[data-id='+ iminus1 +']').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', oldprojtitleheight);
		} else if ($('#landing li[data-id=0]').css('opacity') === '1') {
			$('#landing li[data-id=0]').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#landing li[data-id=2]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#landing .text p[data-id=0]').css('opacity', 0);
			$('#landing .text p[data-id=0]').css('display', 'none');
			$('#landing .text p[data-id=2]').css('display', 'block');
			$('#landing .text p[data-id=2]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', $('#landing li[data-id=2] .ptitle').height());
		}
	}
});



var k = 1;

$('#now .pnext').on('click', function(){
	
	if (k === 7) {
		$('#now').css('background-image', 'url("One%20For%20The%20Road/1.jpg")' );
		k=1;
	} else if (k !== 7) {
			var kplus1 = k+1;
			$('#now').css('background-image', 'url("One%20For%20The%20Road/'+ kplus1 +'.jpg")' );
			$('#now').css('background-image', 'One%20For%20The%20Road/'+ kplus1 +'.jpg' );
			k = kplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
	
});

$('#now .pprev').on('click', function(){
	
	if (k === 1) {
		$('#now').css('background-image', 'url("One%20For%20The%20Road/7.jpg")' );
		k=7;
	} else if (k !== 1) {
			var kminus1 = k-1;
			$('#now').css('background-image', 'url("One%20For%20The%20Road/'+ kminus1 +'.jpg")' );
			$('#now').css('background-image', 'One%20For%20The%20Road/'+ kminus1 +'.jpg' );
			k = kminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#nextwork').on('click', function(){
	
	var i;
	for (i = 0; i < 10; i++) {
		if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
			$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:-60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			var iplus1 = i+1;
			var newprojtitleheight = $('#work li[data-id='+ iplus1 +'] .ptitle').height();
			$('#work li[data-id='+ iplus1 +']').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id='+ i +']').delay(500).animate({marginLeft:60+'%'}, 0);
			$('#work .text p[data-id='+ i +']').css('opacity', 0);
			$('#work .text p[data-id='+ i +']').css('display', 'none');
			$('#work .text p[data-id='+ iplus1 +']').css('display', 'block');
			$('#work .text p[data-id='+ iplus1 +']').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', newprojtitleheight);
		} else if ($('#work li[data-id=9]').css('opacity') === '1') {
			$('#work li[data-id=9]').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:-60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id=0]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id=9]').css('opacity', 0);
			$('#work .text p[data-id=9]').css('display', 'none');
			$('#work .text p[data-id=0]').css('display', 'block');
			$('#work .text p[data-id=0]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', $('#work li[data-id=0] .ptitle').height());
		}
	}
});


$('#prevwork').on('click', function(){
	
	var i;
	for (i = 0; i < 10; i++) {
		if ($('#work li[data-id='+ i +']').css('opacity') === '1') {
			var iminus1 = i-1;
			var oldprojtitleheight = $('#work li[data-id='+ iminus1 +'] .ptitle').height();
			$('#work li[data-id='+ iminus1 +']').animate({marginLeft:-60+'%'}, 0);
			$('#work li[data-id='+ i +']').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			var iplus1 = i+1;
			$('#work li[data-id='+ iminus1 +']').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id='+ i +']').css('opacity', 0);
			$('#work .text p[data-id='+ i +']').css('display', 'none');
			$('#work .text p[data-id='+ iminus1 +']').css('display', 'block');
			$('#work .text p[data-id='+ iminus1 +']').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', oldprojtitleheight);
		} else if ($('#work li[data-id=0]').css('opacity') === '1') {
			$('#work li[data-id=0]').animate({backgroundSize:40+'%'},{queue: false, duration:100}, 'easeOutCubic').animate({opacity:0}, {queue: false, duration:200}).animate({marginLeft:60+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work li[data-id=9]').animate({marginLeft:0+'%'},{queue:false, duration:100}, 'easeOutCubic').animate({opacity:1},{queue:false, duration:200}, 'easeOutCubic').animate({backgroundSize:100+'%'},{queue: false, duration:400}, 'easeOutCubic');
			$('#work .text p[data-id=0]').css('opacity', 0);
			$('#work .text p[data-id=0]').css('display', 'none');
			$('#work .text p[data-id=9]').css('display', 'block');
			$('#work .text p[data-id=9]').animate({opacity:1},{queue:false, duration:350}, 'easeOutCubic');
			$('.pjob').css('margin-bottom', $('#work li[data-id=9] .ptitle').height());
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
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
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
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project3 .pnext').on('click', function(){
	
	if (n === 7) {
		$('#project3').css('background-image', 'url("This%20House/1.jpg")' );
		n=1;
	} else if (n !== 7) {
			var nplus1 = n+1;
			$('#project3').css('background-image', 'url("This%20House/'+ nplus1 +'.jpg")' );
			$('#project3').css('background-image', 'This%20House/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project3 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project3').css('background-image', 'url("This%20House/7.jpg")' );
		n=7;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project3').css('background-image', 'url("This%20House/'+ nminus1 +'.jpg")' );
			$('#project3').css('background-image', 'This%20House/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project4 .pnext').on('click', function(){
	
	if (n === 5) {
		$('#project4').css('background-image', 'url("Mcqueen/1.jpg")' );
		n=1;
	} else if (n !== 5) {
			var nplus1 = n+1;
			$('#project4').css('background-image', 'url("Mcqueen/'+ nplus1 +'.jpg")' );
			$('#project4').css('background-image', 'Mcqueen/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project4 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project4').css('background-image', 'url("Mcqueen/5.jpg")' );
		n=5;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project4').css('background-image', 'url("Mcqueen/'+ nminus1 +'.jpg")' );
			$('#project4').css('background-image', 'Mcqueen/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project5 .pnext').on('click', function(){
	
	if (n === 8) {
		$('#project5').css('background-image', 'url("The%20Sound%20Of%20Yellow/1.jpg")' );
		n=1;
	} else if (n !== 8) {
			var nplus1 = n+1;
			$('#project5').css('background-image', 'url("The%20Sound%20Of%20Yellow/'+ nplus1 +'.jpg")' );
			$('#project5').css('background-image', 'The%20Sound%20Of%20Yellow/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project5 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project5').css('background-image', 'url("The%20Sound%20Of%20Yellow/8.jpg")' );
		n=8;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project5').css('background-image', 'url("The%20Sound%20Of%20Yellow/'+ nminus1 +'.jpg")' );
			$('#project5').css('background-image', 'The%20Sound%20Of%20Yellow/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project7 .pnext').on('click', function(){
	
	if (n === 4) {
		$('#project7').css('background-image', 'url("The%20H%20Word/1.jpg")' );
		n=1;
	} else if (n !== 4) {
			var nplus1 = n+1;
			$('#project7').css('background-image', 'url("The%20H%20Word/'+ nplus1 +'.jpg")' );
			$('#project7').css('background-image', 'The%20H%20Word/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project7 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project7').css('background-image', 'url("The%20H%20Word/4.jpg")' );
		n=4;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project7').css('background-image', 'url("The%20H%20Word/'+ nminus1 +'.jpg")' );
			$('#project7').css('background-image', 'The%20H%20Word/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project8 .pnext').on('click', function(){
	
	if (n === 2) {
		$('#project8').css('background-image', 'url("Normal/1.jpg")' );
		n=1;
	} else if (n !== 2) {
			var nplus1 = n+1;
			$('#project8').css('background-image', 'url("Normal/'+ nplus1 +'.jpg")' );
			$('#project8').css('background-image', 'Normal/'+ nplus1 +'.jpg' );
			n = nplus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
});

$('#project8 .pprev').on('click', function(){
	
	if (n === 1) {
		$('#project8').css('background-image', 'url("Normal/2.jpg")' );
		n=2;
	} else if (n !== 1) {
			var nminus1 = n-1;
			$('#project8').css('background-image', 'url("Normal/'+ nminus1 +'.jpg")' );
			$('#project8').css('background-image', 'Normal/'+ nminus1 +'.jpg' );
			n = nminus1;
	}
	
	$('.arrow').css('opacity',1);
	$('.arrow').stop();
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