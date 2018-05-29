$(document).ready(function() {  

$('.arrow').hide();


setTimeout(function() {
    $('.arrow').show();
}, 1500);


$('#submit').click(function(){
$.post("send_form_email.php", $("#contactform").serialize(),  function(response) {
$('#success').html(response);

});
return false;
}); 
 
$(function() {

$(".roll").css("opacity","0");
 

$(".roll").hover(function () {
 

$(this).stop().animate({
opacity: .7
}, "350");
},
 

function () {
 

$(this).stop().animate({
opacity: 0
}, "350");
});
});

$("#back-top").hide();
	

$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$('#back-top').fadeIn();
			} else {
				$('#back-top').fadeOut();
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

$('#sobre, .arrow').click(function () {
			$('body,html').animate({
				scrollTop: $('#pagina').offset().top
			}, 800);
			return false;
		});

$('#item_2').click(function () {
			$('body,html').animate({
				scrollTop: $('#pagina1').offset().top
			}, 800);
			return false;
		});

$('#item_3').click(function () {
			$('body,html').animate({
				scrollTop: $('#pagina2').offset().top
			}, 800);
			return false;
		});

$('#item_4').click(function () {
			$('body,html').animate({
				scrollTop: $('#pagina3').offset().top 
			}, 800);
			return false;
		});
	});
    

$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 600) {
				$('#navigation').css('margin-top','0px');
			} else {
				$('#navigation').css('margin-top','-60px');;
			}
		});


$('#back-top a').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});


$(document).scroll(function(){
   
    var docScroll = $(document).scrollTop(), 
        boxCntOfset = $(".skills-line").position().top + 150,
        boxCntOfset1 = $("#pagina").offset().top - 5,
        boxCntOfset2 = $("#pagina1").offset().top - 5,
        boxCntOfset3 = $("#pagina2").offset().top - 5,
        boxCntOfset4 = $("#pagina3").offset().top - 5,
        boxCntOfset5 = $("#rodape").offset().top - 5,
        boxCntOfset6 = $("#pagina").position().top + 100,
        boxCntOfset7 = $("#pagina1").position().top + 100,
        boxCntOfset8 = $("#pagina2").position().top + 100,
        boxCntOfset9 = $("#pagina3").position().top + 100;
 

    if(docScroll >= boxCntOfset ) {

      $("#line-1").css('width','65%');// EDIT % YOUR PROGRAMMING SKILL// 
      $("#line-2").css('width','82%');// EDIT % YOUR GRAPHIC DESIGN SKILL// 
      $("#line-3").css('width','72%');// EDIT % YOUR WORDPRESS SKILL// 
    } else {
      $("#line-1").css('width','0px');
      $("#line-2").css('width','0px');
      $("#line-3").css('width','0px');
    
    }
    
    if((docScroll >= boxCntOfset1) && (docScroll <= boxCntOfset2)) {
        $("#sobre").css('color','#32323c');
    } else {
        $("#sobre").css('color','#f2f2f2');
    }
    
     if((docScroll >= boxCntOfset2) && (docScroll <= boxCntOfset3)) {
        $("#item_2").css('color','#32323c');
    } else {
        $("#item_2").css('color','#f2f2f2');
    }
    
    if((docScroll >= boxCntOfset3) && (docScroll <= boxCntOfset4)) {
        $("#item_3").css('color','#32323c');
    } else {
        $("#item_3").css('color','#f2f2f2');
    }
    
    if(docScroll >= boxCntOfset4) {
        $("#item_4").css('color','#32323c');
    } else {
        $("#item_4").css('color','#f2f2f2');
    }
    
    if(docScroll >= boxCntOfset6) {
        $("#pagina").css('padding-top','100px');
        $("#pagina").css('padding-bottom','100px');
    } else {
        $("#pagina").css('padding-top','200px');
        $("#pagina").css('padding-bottom','0px');
    }
    
    if(docScroll >= boxCntOfset7) {
        $("#pagina1").css('padding-top','100px');
        $("#pagina1").css('padding-bottom','100px');
    } else {
        $("#pagina1").css('padding-top','200px');
        $("#pagina1").css('padding-bottom','0px');
    }
    
    if(docScroll >= boxCntOfset8) {
        $("#pagina2").css('padding-top','100px');
        $("#pagina2").css('padding-bottom','100px');
    } else {
        $("#pagina2").css('padding-top','200px');
        $("#pagina2").css('padding-bottom','0px');
    }
    
    if(docScroll >= boxCntOfset9) {
        $("#pagina3").css('padding-top','100px');
        $("#pagina3").css('padding-bottom','100px');
    } else {
        $("#pagina3").css('padding-top','200px');
        $("#pagina3").css('padding-bottom','0px');
    }
    
  });      
    
}); 