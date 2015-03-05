$(document).ready(function(){

  function initialize() {

    var mapOptions = {
      center: new google.maps.LatLng(51.511841, -0.106258),
      zoom: 13,
      scrollwheel: false,
      styles: [
        {"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#e0efef"}]},
        {"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"hue":"#1900ff"},{"color":"#c0e8e8"}]},
        {"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},
        {"featureType":"road","elementType":"labels","stylers":[{"visibility":"off"}]},
        {"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},
        {"featureType":"water","elementType":"all","stylers":[{"color":"#7dcdcd"}]}
      ]
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

        var infoWindowContent = '<div id="info-window-content">' + '<a href="' + window.location.origin + '/establishments/' + establishment.id + '"><h5>' + establishment.name + '</h5></a>' + '<p>' + establishment.address + '</p>' + '</div>';

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