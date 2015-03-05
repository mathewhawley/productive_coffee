$(document).ready(function(){

  console.log()

  $('.fa-plug').on('click', function(){
    $(this).prevAll().andSelf().addClass('chosen-rating');
    $(this).nextAll().removeClass('chosen-rating');
    console.log('Power rating: ' + $('.fa-plug.chosen-rating').length);
  });

  $('.fa-wifi').on('click', function(){
    $('.fa-wifi').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
  });

  $('.fa-coffee').on('click', function(){
    $('.fa-coffee').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
  });

  $('.fa-cutlery').on('click', function(){
    $('.fa-cutlery').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
  });

  $('.fa-smile-o').on('click', function(){
    $('.fa-smile-o').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
  });

  $('.fa-volume-up').on('click', function(){
    $('.fa-volume-up').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
  });

});