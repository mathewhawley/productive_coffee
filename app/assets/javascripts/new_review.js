$(document).ready(function(){

  var power = $('#power-rating');
  var wifi = $('#wifi-rating');
  var coffee = $('#coffee-rating');
  var food = $('#food-rating');
  var service = $('#service-rating');
  var noise = $('#noise-rating');

  $('.fa-plug').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var powerRating = $('.fa-plug.chosen-rating').length;
    power.val(powerRating);
    console.log(power.val());
  });

  $('.fa-wifi').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var wifiRating = $('.fa-wifi.chosen-rating').length;
    wifi.val(wifiRating);
  });

  $('.fa-coffee').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var coffeeRating = $('.fa-coffee.chosen-rating').length;
    coffee.val(coffeeRating);
  });

  $('.fa-cutlery').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var foodRating = $('.fa-cutlery.chosen-rating').length;
    food.val(foodRating);
  });

  $('.fa-smile-o').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var serviceRating = $('.fa-smile-o.chosen-rating').length;
    service.val(serviceRating);
  });

  $('.fa-volume-up').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    var noiseRating = $('.fa-volume-up.chosen-rating').length;
    noise.val(noiseRating);
  });

});