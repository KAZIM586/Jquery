
// Ancesters method
//parent()
//parents()
//parentsUntil()
//offsetParents()   // it target only position property use in parents.
// closet


$(document).ready(function(){
$('.childtoparentbtn').click(function(){
    $('#para').parent().css('background','green');
    $('#para').parents().css('background', 'green');
}) ;
  });


  // Decendants methods

//children()
// find()

$(document).ready(function(){
    $('.childtoparentbtn').click(function(){
        $('.container').children().css('color','red');
    }) ;
      });

// Siblings methods

// siblings()
// next()
// nextAll()
// nextUntil()
// prev()
// prevAll()
// prevUnit()


$(document).ready(function(){
  
        $('#para').siblings().css('color','green');
        $('#para').nextAll().css({color:'blue', fontSize:'25px'});
    });



// filterings methods

// first()
// last()
// eq()
// filter()
// not
// Slice

$(document).ready(function(){
  
    $('p').first().css('color','yellow');
    $('ol li').eq(2).css('color','gold');
    
});

// has()
// is()

$(document).ready(function(){
  
    $('p').has('b').css('color','aqua');
    $('ol li').eq(2).css('color','gold');
    
});

// if 

if($('p').parent().is('div')){
    console.log($('p').parent().is('div'))
}

// each method
$(document).ready(function(){
  
    $('li').each(function(){
        console.log($(this).text());
    })
    
});

// pageX()
// pageY()

$(document).ready(function(){
  $(document).mousemove(function(event){
    $('.container').text("X :" + event.pageX +  " Y: "
        + event.pageY
    )

    var x = event.pageX;
    var y = event.pageY;
    $('.box').offset({top:y,left:x});
  });
    
});




   

 




 