$(document).ready(function(){
  var places, userPlace, $input = $("#place");
  var autocomplete = new google.maps.places.SearchBox($input[0]);
   
  google.maps.event.addListener(autocomplete, 'places_changed', function() {
   var places = autocomplete.getPlaces();
   if (places.length == 0)
    return;
   firstPlace = places[0];
   console.log(places);
   console.log(firstPlace);
  });





});