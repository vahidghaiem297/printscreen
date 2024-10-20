var rtime = new Date(1, 1, 2000, 12,00,00);
var timeout = false;
var delta = 200;

$(window).on("resize",function() {
    rtime = new Date();
    if (timeout === false) {
        timeout = true;
        setTimeout(resizeend, delta);
    }
});

function resizeend() {
    if (new Date() - rtime < delta) {
        setTimeout(resizeend, delta);
    } else {
        timeout = false; 
        all_process();
    }
}


$( window ).on( "orientationchange", function(e) {
    if(is_touch_device())
    { 
      if (window.RT) clearTimeout(window.RT);
      window.RT = setTimeout(function()
      {
        all_process();
      }, 100);
    }
});

$(window).bind("load", function() {
    all_process();
   
    setTimeout(
      function() 
      {   
		
      }, 50);
   
});

function all_process(){
	$(document).ready(function() {
	    var width_photo=$('.ham3d_main .customer_photo').width();
	    var height_photo= width_photo/2;
	    $('.ham3d_main .customer_photo').css('height',height_photo + 'px');
	    
	    $('.ham3d_main .page a').mouseenter(function(){
	    	var x= $(this).children('.customer_photo').height();
	    	var y=$(this).children('.customer_photo').children('img').height();
	     	var z=-(y-x);
	     	 $(this).children('.customer_photo').children('img').stop(true,false).animate({'top': z + 'px'},6000);
	    	// $(this).children('.customer_photo').children('img').css('top',z + 'px');
		}).mouseleave(function(){
			$(this).children('.customer_photo').children('img').stop(true,false).animate({'top': 0},4000);
		});
	});
}