//event()
// which()





$(document).ready(function(){
    $('.container2').on("click dblclick mouseover mouseout",function(event){
      $('.event_occur').html("Event : " +event.type)
    } )
    $('.container2').on("mousedown mouseover mouseout",function(event){
      $('.event_occur2').html(event.type + ": " + event.which);
    } )
    // which
   $('#inputbox').on("keydown",function(){
    $('h3').html(event.type + ": " + event.which);
// target
$('.container2').on("click",function(){
  $('h4').html("Target element : " + event.target.nodeName); 
});

   });
    });
 
  



 