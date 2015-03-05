$(document).ready(function(){

  var elements = $('.ratings')

  $.each(elements, function(index, element){
    
    var id = element.id;
    var value = element.value;
    console.log(value);

    // function showRatings(id, value, icon) {
    //   for (var i = 1; i <= value; i++) {

    //     console.log(id);
    //     console.log(value);
    //     console.log(icon);

    //     $('<li id="'+element.id+'-rating"><i class="'+ starIcon +'"></i>').appendTo(id);
    //   }
    // }
  });
  // var starIcon = 'fa fa-star fa-1x'
  // // var power = $('#power-text')
  
  // <i class="fa fa-power-off"></i>
  
  // showRatings(element, element.val(), starIcon);


  // switch(overall) {
  //   case 1:
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     break;
  //   case 2:
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     break;
  //   case 3:
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     break;
  //   case 4:
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     break;
  //   case 5:
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
  //     break;
  // }
  
  



});