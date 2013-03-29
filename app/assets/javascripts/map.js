var map;
var marker1;


function initialize() {
  var mapOptions = {
    center: new google.maps.LatLng(51.50, -0.02),
    zoom: 8,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.HYBRID
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
      mapOptions);
  marker1 = new google.maps.Marker({
    position: new google.maps.LatLng(51.32, -0.5),
    title:"HelloWorld!"
  });
  marker1.setMap(map);


  var drawSquare = function(color, lat, lng, step) {
    var squareCoords = [
    new google.maps.LatLng(lat,         lng       ),//Bottom Left
    new google.maps.LatLng(lat,         lng + step),//Bottom Right
    new google.maps.LatLng(lat + step,  lng + step),//Top Right
    new google.maps.LatLng(lat + step,  lng       ),//Top Left
    new google.maps.LatLng(lat,         lng       )//Return
    ];
    var opacity = 0.9 - step/2.5; // ligher for bigger squares
    new google.maps.Polygon({
      paths: squareCoords,
      strokeColor: color,
      strokeOpacity: 0.6,
      strokeWeight: 2,
      fillColor: color,
      fillOpacity: opacity
    }).setMap(map);
  }

  drawSquare("#ff6600", 51.50, 0, 0.01);
  drawSquare("#FFCC00", 51.50, 0, 0.1);
  drawSquare("#efefef", 51.50, 0, 1);
}

google.maps.event.addDomListener(window, 'load', initialize);


// Playing with popup windows
var infoWindow = new google.maps.InfoWindow({
  content: "Some info"
});

google.maps.event.addDomListener(window, 'load', function() {
  infoWindow.open(map, marker1)
});

//Trying to overlay an image on the map

var imageBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(51.40, 1.10),
  new google.maps.LatLng(52.50, 2.10)
  );

var jordanInLondon = new google.maps.GroundOverlay(
  "http://www.jordanpoulton.com/wp-content/uploads/2013/03/JordanPoulton_site2.jpg",
  imageBounds);

google.maps.event.addDomListener(window, 'load', function() {jordanInLondon.setMap(map)});

// https://developers.google.com/maps/documentation/javascript/overlays
