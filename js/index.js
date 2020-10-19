<<<<<<< HEAD
=======

>>>>>>> 886d32b04f4806f5154e1151fe93cedb352648e9
$(document).ready(function(){
  $(".design").click(function() {
    $("#design, .design").toggle("slow");
  });
  $("#design").click(function() {
    $(".design, #design").toggle("slow");
  });
  $(".development").click(function() {
    $("#development, .development").toggle("slow");
  });
  $("#development").click(function() {
    $(".development, #development").toggle("slow");
  });
  $(".product").click(function() {
    $("#product, .product").toggle("slow");
  });
  $("#product").click(function() {
    $(".product, #product").toggle("slow");
  });
})
$('.img').hover(function(){
  $('.porttext',this).slideToggle('slow');
}, function(){
  $('.porttext',this).slideToggle('slow');
});


$(document).ready(function(){
  $(".section5").submit(function(){
<<<<<<< HEAD
    alert("your request is being worked on");
=======
    alert("Thank For Contacting Us!");
>>>>>>> 886d32b04f4806f5154e1151fe93cedb352648e9
  });
});
