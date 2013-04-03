// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require map
//= require_tree .

var map, infowindow;

function initialize() {
  // geocoder = new google.maps.Geocoder(); //For search_function.js
  var mapOptions = {
    center: new google.maps.LatLng(51.50, -0.02),
    zoom: 14,
    minZoom: 10,
    maxZoom: 14,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);
}

google.maps.event.addDomListener(window, 'load', function() {
  initialize();
  google.maps.event.addDomListener(map, 'bounds_changed', function() {
    // var right = map.getBounds().getNorthEast().lat().toFixed(2);
    // var left = map.getBounds().getSouthWest().lat().toFixed(2);
    // var top = map.getBounds().getNorthEast().lng().toFixed(2);
    // var bottom = map.getBounds().getSouthWest().lng().toFixed(2);
    // console.log(left, right)
    // for (var i=left; i<right; i+=0.01){
    //   for(var j=bottom; j<top; j+=0.01){
        // createTile(51.51, -0.02, 0.01, "http://placehold.it/300x500", "Jordan rocks");
    //   }
    // }
    google.maps.event.addListener(map, 'click', function(event){
      var lat = parseFloat(event["latLng"]["jb"].toFixed(2));
      var lng = parseFloat(event["latLng"]["kb"].toFixed(2));
      createTile(lat, lng, 0.01, "http://www.jordanpoulton.com/wp-content/uploads/2013/04/Im-youts.jpg", "jordan");
    })
  });
});



//Set image Long/Lat
var createTile = function(argLat, argLng, step, imageLink, content) {
  console.log(argLat, argLng, step, typeof(imageLink), content);
  var imageBounds = new google.maps.LatLngBounds(
  new google.maps.LatLng(argLat, argLng), //Bottom Left
  new google.maps.LatLng(argLat + step, argLng + step)); //Top Right


  //create the actual image
  var setImage = new google.maps.GroundOverlay(
    imageLink,
  imageBounds);

  setImage.setMap(map) //Set the image to the map

  //Create a dialog popup to claim a spot
  google.maps.event.addListener(setImage, 'click', function() {
    $("#claim-a-spot").dialog({
      width:800,
      height: 600,
      modal: true
    })
  });


  //Create a listener that will display an infoWindow when the image is clicked.
  //Doesn't seem to work right now
  // google.maps.event.addListener(setImage, 'click', function() {
  //   if (infowindow !== undefined)
  //   {
  //     infowindow.close();
  //   }

  //   infowindow = new google.maps.InfoWindow;
  //   infowindow.setContent('To claim this spot, use the ID LATITUDE: '+argLat+' - LONGTITUDE: '+argLng);
  //   var position = new google.maps.LatLng(argLat, argLng)
  //   infowindow.setPosition(position);
  //   infowindow.open(map);
  // });

  // //Create a listener that will destroy a window if it's double clicked
  // google.maps.event.addListener(setImage, 'dblclick', function() {
  //   infowindow.setMap(null)
  // });
}

//get long/lat coords:
// map.getBounds().getNorthEast().lat()
// map.getBounds().getNorthEast().lng()
// map.getBounds().getSouthWest().lat()
// map.getBounds().getSouthWest().lng()















