$(document).ready(function(){

  console.log()

  $('.fa-plug').on('click', function(){
    $('.fa-plug').removeClass('chosen-rating');
    $(this).toggleClass('chosen-rating');
    $(this).prevAll().toggleClass('chosen-rating');
    console.log($('.chosen-rating').length);
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