$(document).ready(function() {

  var apiSearchResults = document.getElementById('api-search-results')

  var london = new google.maps.LatLng(51.5072, 0.1275);

  var request = {
      location: london,
      name: 'nude',
      radius: '50000',
      types: ['cafe']
  };

  function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        var place = results[i];
        console.log(place);
      }
    }
  }

  var service = new google.maps.places.PlacesService(apiSearchResults);

  $('#search-api').on('keypress', function(e) {
    if (e.which === 13) service.nearbySearch(request, callback)
  })

});