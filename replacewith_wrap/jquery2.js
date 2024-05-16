
// ReplaceWith()
// ReplaceAll()
// wrap()
// unwrap()
//wrapAll()
//wrapInner()
// Width()
// innerWidth()
// outerWidth()
// outerWidth(true)
// height()
// innerHeight()
// outerHeight()
// outerHeight(true)

// position()
// offset()

// scrollLeft()
// scrollTop()

// hasClass()




$(document).ready(function(){
$(".replacebtn").click(function(){
  $('#para2').replaceWith("<div>Hello this is replaced</div>")
});
$(".replaceall").click(function(){
  $("<div>Hello this is replaced all</div>").replaceAll('.container p')
});
$(".width").click(function(){
  console.log($('.container').width())
});
$(".innerheight").click(function(){
  console.log($('.container').innerHeight())
});
$(".position").click(function(){
  console.log($('#para2').position());
});

$(".offset").click(function(){
  console.log($('#para2').offset());
});


$(".hasclassbtn").click(function(){
  console.log($('#para2').hasClass('p2'));
});
 
  });

  // Wrap()
// UnWrap()

$(document).ready(function(){
  $(".wrap").click(function(){
    $('#para2').wrap("<div class='colorp2'></div>")
  });
  $(".unwrap").click(function(){
    $('#para2').unwrap()
  });
   
    });


// scrollLeft()
// scrollTop()

$(document).ready(function(){
    console.log($(window).scrollTop());
  });


 