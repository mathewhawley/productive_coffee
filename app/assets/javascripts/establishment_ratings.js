$(document).ready(function(){
  var overall = $('#overall-text').val();
  console.log(overall);

  switch(overall) {
    case 1:
      $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      break;
    case 2:
      $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      $('<li id="overall-rating"><i class="fa fa-star-o fa-1x"></i>').appendTo('.overall');
      break;
  }
  
  



});