$(document).ready(function() {

  // var input = $("#search-api").val();
  // var searchBox = new google.maps.places.SearchBox(input);

  // var service = new google.maps.places.PlacesService((searchInput).val());
  // console.log(service);
  

  // $('#search-api').on('keypress', function(e) {
  //   if (e.which === 13) {
  //     $.ajax({
  //       type: 'GET',
  //       dataType: 'jsonp',
  //       url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=AIzaSyAM4oDKRxYIRC_Oi3lbX9xb5n6GG_j3WQw&location=51.1,-0.06&radius=50000&types=cafe&name=nude'
  //     }).done(function(response) {
  //       console.log(response);
  //     }).fail(function(error) {
  //       console.log(error);
  //     })
  //   }
  // });

// ---

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