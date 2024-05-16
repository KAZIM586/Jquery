// jquery get  method are
// text()
// html()
// attr()
// val() it work on form select value and others




$(document).ready(function(){
    let a= $(".container").html()
     console.log(a)
    let b = $(".container").text()
     console.log(b)
    let c = $(".container").attr("class")
     console.log(c)
 
  });


  // jquery set  method are
// text()
// html()
// attr()
// val() it work on form select value and others




$(document).ready(function(){
 $('#btn').click(function(){
  $('#heading').text('Heading changed on button click')
  $('#heading').attr('class', 'blue')
 });
 $('#btn').click(function(){
  $('#para').html('paragraph <b>changed</b> on button click')
 });

});