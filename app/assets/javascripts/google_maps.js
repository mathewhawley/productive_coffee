function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(51.500152, -0.126236),
    zoom: 13,
    zoomControl: true,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.SMALL,
      position: google.maps.ControlPosition.RIGHT_BOTTOM
    },
    panControl: false,
    streetViewControl: false
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // addMarker(map);
}

$(document).ready(function(){
  console.log('blah');
  $.ajax({
    type: 'GET',
    url: '/',
    dataType: 'json'
  }).done(function(response){
    console.log(response);
  });

});

google.maps.event.addDomListener(window, 'load', initialize);