// keyboard event are

// keypress()
// keydown()
// keyup()



$(document).ready(function(){
  $("body").keypress(function(){
    $(".container").css("background-color", "red")
  });
  $("body").keyup(function(){
    $(".container").css("background-color", "green")
  });
  $("body").keydown(function(){
    $(".container").css("background-color", "aqua")
  });
});


// form event

// focus()
// blur()
// change()
// Select()
// Submit()

$(document).ready(function(){
$("input ,#country").focus(function(){
  $(this).css("background-color", "gray")
});
$("input ,#country").blur(function(){
  $(this).css("background-color", "white")
});
$("#country").change(function(){
  $(this).css("background-color", "aqua")
  var a =$(this).val();
  $("#selectvalue").html(a);
});
$("#name").select(function(){
  $(this).css("background-color", "pink")
});
$("#btn").select(function(){
  $().css("background-color", "pink")
});
$("#sform").submit(function(){
  $(".form-container").css("background-color", "gray")
  $("#btn").css("background-color", "red")
});
});


// window event

$(document).ready(function(){
 $(window).scroll(function(){
  $("body").css("background-color", "lime")
 });
 $(window).resize(function(){
  $("body").css("background-color", "blue")
 });
  });