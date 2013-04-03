// var map;
// var marker1;

// $(function() {

//   function initialize() {
//     geocoder = new google.maps.Geocoder(); //For search_functionunction.js
//     var mapOptions = {
//       center: new google.maps.LatLng(51.50, -0.02),
//       zoom: 12,
//       minZoom: 2,
//       maxZoom: 14,
//       streetViewControl: false,
//       mapTypeId: google.maps.MapTypeId.SATELLITE
//     };
//     map = new google.maps.Map(document.getElementById("map-canvas"),
//     mapOptions);
//     marker1 = new google.maps.Marker({
//       position: new google.maps.LatLng(51.32, -0.5),
//       title: "HelloWorld!"
//     });
//     marker1.setMap(map);


//     var drawSquare = function(color, lat, lng, step) {
//       var squareCoords = [
//       new google.maps.LatLng(lat, lng), //Bottom Left
//       new google.maps.LatLng(lat, lng + step), //Bottom Right
//       new google.maps.LatLng(lat + step, lng + step), //Top Right
//       new google.maps.LatLng(lat + step, lng), //Top Left
//       new google.maps.LatLng(lat, lng) //Return
//       ];
//       var opacity = 0.5 - step / 2.5; // ligher for bigger squares
//       var square = new google.maps.Polygon({
//         clickable: true,
//         paths: squareCoords,
//         strokeColor: color,
//         strokeOpacity: 0.6,
//         strokeWeight: 2,
//         fillColor: color,
//         fillOpacity: opacity
//       });

//       square.setMap(map);
//       google.maps.event.addListener(square, 'click', function() {
//         infoWindow.open(map, this)
//       });
//     };


//     //Info Window Overlay, bound to marker1
//     var infoWindow = new google.maps.InfoWindow({
//       content: "Some info"
//     });

//     google.maps.event.addDomListener(window, 'load', function() {
//       infoWindow.open(map, marker1)
//     });



//     // for (var j=-100; j<100; j++){
//     //   for (var i=5050; i<5250; i++){
//     drawSquare("#ff6600", 51.5, 0.0, 0.1);
//     //   }
//     // }

//   }//End of initialize

//   google.maps.event.addDomListener(window, 'load', initialize);

// //Overlay an image
//   var imageBounds = new google.maps.LatLngBounds(
//   new google.maps.LatLng(51.50, -0.02), //Bottom Left
//   new google.maps.LatLng(51.60, 0.10)); // Top Right

//   var jordanInLondon = new google.maps.GroundOverlay(
//     "http://placehold.it/300x500",
//   imageBounds);


  // google.maps.event.addDomListener(window, 'load', function() {
  //   jordanInLondon.setMap(map);
  // });


//   //Info Window Overlay
//   var infoWindow = new google.maps.InfoWindow({
//     content: "Some info"
//   });

//   google.maps.event.addDomListener(window, 'load', function() {
//     infoWindow.open(map, marker1)
//   });

// });
