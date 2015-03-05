$(document).ready(function() {

  var apiSearchResults = document.getElementById('api-search-results');
  var searchInput = document.getElementById('place');
  var london = new google.maps.LatLng(51.5072, 0.1275);
  var response;

  function callback(results, status) {
    response = results;

    var databaseEstablishments = [];

    $.ajax({
      type: 'GET',
      url: '/establishments',
      dataType: 'json'
    }).done(function(response) {
      $.each(response, function(index, establishment) {
        databaseEstablishments.push(establishment.address);
      })
    }).done(function(){
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
        var place = results[i];
          if ($.inArray(place.vicinity, databaseEstablishments) === -1) {
            $('<div>' + '<h2>' + place.name + '</h2>' + '<p>' + place.vicinity + '</p>' + '<button data-id="' + i + '"' + 'id="add-cafe">Add Cafe</button>' + '</div>' ).appendTo('#api-search-results');
          } else {
          }
        } 
      }
    }); // closing done
  }

  var service = new google.maps.places.PlacesService(apiSearchResults);

  $('.search-input').on('keypress', function(e) {
    if (e.which === 13) {
      var request = {
        location: london,
        name: searchInput.value,
        radius: 50000,
        types: ['cafe']
      };
      service.nearbySearch(request, callback);
      $('.database-search').hide();
    }
  });

  $('#api-search-results').on('click', '#add-cafe', function() {
    var establishmentId = $(this).data('id');
    var object = response[establishmentId];
    $.ajax({
      url: '/establishments',
      type: 'POST',
      dataType: 'json',
      data: { 
        establishment: { 
          name: object.name, address: object.vicinity, place_id: object.place_id, lat: object.geometry.location.k, long: object.geometry.location.D 
        }
      }
    }).always(function(response) {
      window.location.pathname = response.responseText;
    })
  });

});