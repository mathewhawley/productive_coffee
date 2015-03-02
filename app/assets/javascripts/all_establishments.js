function showEstablishments() {
  $.ajax({
    type: 'GET',
    url: '/establishments',
    dataType: 'json'
  }).done(function(response) {
    $.each(response, function(index, establishment) {
      $('<h3>' + establishment.name + '</h3>').prependTo('#all-establishments')
    })
  });
}

$(document).ready(function() {
  showEstablishments();
});