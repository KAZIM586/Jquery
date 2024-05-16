// Mouse event are
// click()
// dblclick()
// contextmenu()   right click
// mouseenter()
// mouseleave()



$(document).ready(function(){
    $("#btn").click(function(){
      $(".container").css("color", "red")
    });
    $("#btn").click(function(){
      $(".container").css("color", "red")
    });
    $("#btn").dblclick(function(){
      $(".container").css("background", "aqua")
    });
    $("#btn").contextmenu(function(){
      $(".container").css("color", "green")
    });
    $("#btn").mouseenter(function(){
      $(".container").css("background", "gray")
    });
    $("#btn").mouseleave(function(){
      $(".container").css("background", "white")
    });
  })