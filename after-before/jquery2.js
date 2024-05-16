// after()
// before()
// remove()
// empty()
//appendTo()
//prependTo()




$(document).ready(function(){
    $('.after').click(function(){
$('.container').after('<h3>This heading comes by after method</h3>')
    });
    $('.before').click(function(){
$('.container').before('<h4>This heading comes by before method</h4>')
    });
    $('.empty').click(function(){
$('h3').empty()
    });
    $('.remove').click(function(){
$('h4').remove()
    });

 
  });



  // clone method

  

$(document).ready(function(){
  $('.clone').click(function(){
$('.container h1').clone().prependTo('.container2')
$('.container p').clone().appendTo('.container2')
  });
})
  



 