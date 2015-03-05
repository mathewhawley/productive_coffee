$(document).ready(function(){

  function toggleSelection() {

  }

  $('.fa-plug').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Power rating: ' + $('.fa-plug.chosen-rating').length);
  });

  $('.fa-wifi').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Wifi rating: ' + $('.fa-wifi.chosen-rating').length);
  });

  $('.fa-coffee').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Coffee rating: ' + $('.fa-coffee.chosen-rating').length);
  });

  $('.fa-cutlery').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Food rating: ' + $('.fa-cutlery.chosen-rating').length);
  });

  $('.fa-smile-o').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Service rating: ' + $('.fa-smile-o.chosen-rating').length);
  });

  $('.fa-volume-up').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Noise rating: ' + $('.fa-volume-up.chosen-rating').length);
  });

});