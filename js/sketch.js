$(document).ready(function(){
  //create original grid
var sq = $(".square");
    for (var i = 0; i < 255; i++)
      {
        sq.clone().insertAfter(sq).append("<div class='clone'></div");
      };
  $("div").hover(function(){
    $(this).addClass("touch")
  });

  //get user input
  $('button').click(function(){
    //remove previous squares
    $('.clone').parent().remove();
    $('.square').removeClass("touch");
    var grid = window.prompt('Height of the Grid?', '16');
    var gsize = grid * grid;
    //change square shape
var sq = $(".square");
    sq.css({height: 575 / grid  + "px", width: 575 / grid + "px"});
    //add new squares
    for (var j = 0; j < gsize - 1 ; j++)
      {
        sq.clone().insertAfter(sq).append("<div class='clone'></div");
      };
    //reset properties
    $("div").hover(function(){
        $(this).addClass("touch")
      });
  });


});
