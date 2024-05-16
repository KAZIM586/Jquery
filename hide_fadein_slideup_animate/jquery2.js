// hide()
// show()
// toggle() 
//fadeIn()
//fadeOut()
//fadeToggle() => fadein and fadeout both work
//fadeTo()
// slideUp()
// slideDown()
// slideToggle()
// animate() => $(selector).animate({params css},speed,callback)




$(document).ready(function(){
    $('.hidebtn').click(function(){
$('#para').hide()
    });
    $('.showbtn').click(function(){
$('#para').show()
    });
    $('.togglebtn').click(function(){
$('#para').toggle()
    });
    $('.fadeinbtn').click(function(){
// $('.container').fadeIn("slow")
$('.container').fadeIn(4000)
    });
    $('.fadeoutbtn').click(function(){
$('.container').fadeOut(2000)
    });
    $('.slideupbtn').click(function(){
$('.container').slideUp("slow")
    });
    $('.slidedownbtn').click(function(){
$('.container').slideDown('fast')
    });
    $('.slidetogglebtn').click(function(){
$('.container').slideToggle(3000)
    });
    $('.animatebtn').click(function(){
$('.container').animate({left: '200px',width:'200px'},4000)
$('.container').animate({fontSize:'10px'},2000)
    });
    $('.chainbtn').click(function(){
$('.container').css('color','red').slideUp(3000).slideDown(2000)
    });
 
  });



 




 