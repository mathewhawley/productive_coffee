$(document).ready(function() {

  var searchForm = $('#search');
  var searchBox = $('#search-keyword');
  var establishments = $('#list-establishments');

  searchForm.on('submit', search);

  function search(e) {
    e.preventDefault();
    $.ajax({
      type: 'GET',
      url: '/establishments',
      dataType: 'json',
      data: searchBox.val()
    }).done(function(response) {
      location.href = '/establishments/search'
      $('#list-establishments').html('');
      $.each(response, function(index, establishment) {
        if (establishment.name == searchBox.val()) {
          $('<h3>' + establishment.name + '</h3>' + '<ul>' + '<li>Description: ' + establishment.description + '</li>' + '<li>Address: ' + establishment.address + '</li>' + '</ul>').prependTo('#search-results')
        } else {
          
        };
      })
    })
  }

});