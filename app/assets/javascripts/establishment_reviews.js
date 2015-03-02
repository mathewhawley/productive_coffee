$(document).ready(function(){
  $.ajax({
    url: '/establishments/' + $('.establishment').val(),
    type: 'GET',
    dataType: 'json'
  })
  .done(function(response) {
      console.log(response);
  });
});
