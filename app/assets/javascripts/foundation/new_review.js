$(document).ready(function(){

  var powerRating;
  var wifiRating;
  var coffeeRating;
  var foodRating;
  var serviceRating;
  var noiseRating;

  $('.fa-plug').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    powerRating = $('.fa-plug.chosen-rating').length;
  });

  $('.fa-wifi').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    wifiRating = $('.fa-wifi.chosen-rating').length;
  });

  $('.fa-coffee').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    coffeeRating = $('.fa-coffee.chosen-rating').length;
  });

  $('.fa-cutlery').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    foodRating = $('.fa-cutlery.chosen-rating').length;
  });

  $('.fa-smile-o').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    serviceRating = $('.fa-smile-o.chosen-rating').length;
  });

  $('.fa-volume-up').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    noiseRating = $('.fa-volume-up.chosen-rating').length;
  });

  $('.submit').on('click', function(e){
    console.log($('#establishment-id').val());
    console.log($('#current-user-id').val());
  });

});