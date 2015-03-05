function showEstablishments() {
  $.ajax({
    type: 'GET',
    url: '/establishments',
    dataType: 'json'
  }).done(function(response) {
    $.each(response, function(index, establishment) {
      $('<h3>' + establishment.name + '</h3>' + '<ul>' + '<li>Description: ' + establishment.description + '</li>' + '<li>Address: ' + establishment.address + '</li>' + '</ul>').fadeIn(300).prependTo('#all-establishments')
    })
  });
}

function showOverallRating(){
  var elements = $('.index-rating')
  $.each(elements, function(index, element){
    // var word = element.id;
    // var value = element.value;
    var num = $(element).attr('id');
    var value = $(element).attr('value');
  
    for (var i = 1; i <= value; i++) {
      $('<i class="fa fa-star fa-1x"></i>').appendTo('#'+num);
    }
  });
};

$(document).ready(function() {
  showEstablishments();
  showOverallRating();
});