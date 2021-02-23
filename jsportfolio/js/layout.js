
/*  web  */
function lypopweb(wd, ht) {
	$('#lypopweb').show();
	$('.lypopweb_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});	
	
	

} 

$(function() { 
	$('#lypopweb .close').on("click", function() { 
		$('#lypopweb').hide();
	});
})

function lypopweb2(wd, ht) {
	$('#lypopweb2').show();
	$('.lypopweb2_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
	

} 

$(function() { 
	$('#lypopweb2 .close').on("click", function() { 
		$('#lypopweb2').hide();
	});
})



/* branding*/

function lypopb01(wd, ht) {
	$('#lypopb01').show();
	$('.lypopb01_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypopb01 .close').on("click", function() { 
		$('#lypopb01').hide();
	});
})

function lypopb02(wd, ht) {
	$('#lypopb02').show();
	$('.lypopb02_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypopb02 .close').on("click", function() { 
		$('#lypopb02').hide();
	});
})


function lypopb03(wd, ht) {
	$('#lypopb03').show();
	$('.lypopb03_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypopb03 .close').on("click", function() { 
		$('#lypopb03').hide();
	});
})




/* artwork */


function lypop01(wd, ht) {
	$('#lypop01').show();
	$('.lypop01_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop01 .close').on("click", function() { 
		$('#lypop01').hide();
	});
})



function lypop02(wd, ht) {
	$('#lypop02').show();
	$('.lypop02_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop02 .close').on("click", function() { 
		$('#lypop02').hide();
	});
})



function lypop03(wd, ht) {
	$('#lypop03').show();
	$('.lypop03_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop03 .close').on("click", function() { 
		$('#lypop03').hide();
	});
})



function lypop04(wd, ht) {
	$('#lypop04').show();
	$('.lypop04_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop04 .close').on("click", function() { 
		$('#lypop04').hide();
	});
})


function lypop05(wd, ht) {
	$('#lypop05').show();
	$('.lypop05_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop05 .close').on("click", function() { 
		$('#lypop05').hide();
	});
})


function lypop06(wd, ht) {
	$('#lypop06').show();
	$('.lypop06_containor').css({"width" : wd, "margin-left" : -(wd/2), "height" : ht});
} 

$(function() { 
	$('#lypop06 .close').on("click", function() { 
		$('#lypop06').hide();
	});
})






$(function() { 

var pshparell = { }
pshparell.winHT = $(window).height();
pshparell.distance = pshparell.winHT;
pshparell.count = 0;
pshparell.mnoving = false;	
pshparell.length = $(document).find(".page").length;
	
	$(".page").each(function (index, element) { 
		
		$(element).on("mousewheel DOMMouseScroll", function (e) {
			//console.log($(this).html());
			
			console.log("e ====", e);
			console.log("originalEvent ====", e.originalEvent);
			
			e.preventDefault();

			var El = e.originalEvent;			

			var delta = 0;

			if (El.wheelDelta) {
				delta = event.wheelDelta / 120;
				//if (window.opera) delta = -delta;
			} else if (El.detail) delta = -El.detail / 3;		

			//console.log("dd?????? ==", El.detail);
			//console.log("event.wheelDelta ==", event.wheelDelta);

			
			//console.log("next", $(window).scrollTop());
			//console.log("moveTop", moveTop);
			
			
			if(pshparell.mnoving == false) { 				
				pshparell.mnoving = true;
				
				// 마우스휠을 위에서 아래로			
				if (delta  < 0 ) {
					if($(window).scrollTop() == pshparell.distance * (pshparell.length-1)) {
						moveTop = $(this).offset().top;				   
					} else { 
						moveTop = $(this).next().offset().top;					  
					}
				// 마우스휠을 아래에서 위로
				} else {
					if($(window).scrollTop() < pshparell.distance) { 
					   moveTop = $(this).offset().top;
					} else { 
						moveTop = $(this).prev().offset().top;
					}	
				}

				
				
				$("html,body").stop().animate({
					scrollTop: moveTop + 'px'
				}, {
					duration: 800, complete: function () {
						pshparell.mnoving = false;	
					}
				});	
			}
			
		});
	});
	
	
	
	//var itemleng = $('.box').length;
	var scfunc = function(event) { 
		event.preventDefault();
		var _this = $(this);
		var _thispt = $(this).parent();
		var _target = $(event).target;
		var _index = _thispt.index(_target);
		
		if(_index == 3) { 
			pshparell.count = _index + 1;		   
		} else { 
			pshparell.count = _index;
		}

		
		var scrollHT = 	pshparell.distance * pshparell.count;
		console.log("scrollHT", scrollHT);
		
		$("html,body").stop().animate({scrollTop : scrollHT + 'px'}, 500);	
	};
	
})	


$(document).ready(function(){

  $("a").on('click', function(event) {

    if (this.hash !== "") {

      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({

        scrollTop: $(hash).offset().top

      }, 800, function(){

        window.location.hash = hash;

      });

    } 

  });

});



