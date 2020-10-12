$(document).ready(function(){
    $(".mosue").click(function(){
      $("#about").slideUp("slow");
    });

    $("#design").click(function(){
        $('#design,#p1').toggle("slow");
    })

    $("#dev").click(function(){
        $('#dev,#p2').toggle("slow");
    })

    $("#product").click(function(){
        $('#product,#p3').toggle("slow");
    })
  });
  