// add class and remove
// addclass()
// removeclass()
// toggleclass() it work on both add and remove (ifalready class present then remove not present then add)





$(document).ready(function(){
    $('.addbtn').click(function(){
$('#heading').addClass('hed1')
    });
    $('.revbtn').click(function(){
$('#heading').removeClass('hed1')
    });
    $('.togbtn').click(function(){
$('#heading').toggleClass('hed1')
    });
 
  });



  // on and of method

  
$(document).ready(function(){
$('.addbtn2').on({
  click:function(){
    $('.container2').css('background','gray')
  },
  mouseleave:function(){
    $('.container2').css('background','red')
  },
})
  });

// off method
  $(document).ready(function(){
    $('.addbtn2').off("mouseleave") 
    });


    // append

    $(document).ready(function(){
      $('.addbtn2').click(function(){
        $('.container2').append("<h2>Append method</h2>")
        $('.container2').prepend("<h2>Prepend method</h2>")
      })
    });


 