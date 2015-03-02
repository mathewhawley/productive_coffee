function showEstablishments() {
  $.ajax({
    type: 'GET',
    url: '/establishments',
    dataType: 'json'
  }).done(function(response) {
    console.log(response);
  });
}

$(document).ready(function() {
  showEstablishments();
});