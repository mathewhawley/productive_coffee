$(document).ready(function(){
  var elements = $('.ratings')
  $.each(elements, function(index, element){
    var word = element.id;
    var value = element.value;
    var icon = $(element).attr('data');

    for (var i = 1; i <= value; i++) {
      $('<li id="'+word+'-rating"><i class="'+icon+'"></i></li>').appendTo('#'+word+'-ratings');
    }
  });
  