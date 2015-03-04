$(document).ready(function(){

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(51.520921, -0.10643),
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
    addMarker(map); 
  }

  function addMarker(map) {
    $.ajax({
      type: 'GET',
      url: '/',
      dataType: 'json'
    }).done(function(response){
      $.each(response, function(index, establishment){

        var position = new google.maps.LatLng(establishment.lat, establishment.long);

        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: establishment.name
        });

        var infoWindowContent = '<div id="info-window-content">' + '<p>' + establishment.name + '</p>' + '</div>';

        var infowindow = new google.maps.InfoWindow({
            content: infoWindowContent
        });

        google.maps.event.addListener(marker, 'click', function() {
          infowindow.open(map, marker);
        });
      });
    });
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});