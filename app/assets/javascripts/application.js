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
  geocoder = new google.maps.Geocoder(); //For search_function.js
  var mapOptions = {
    center: new google.maps.LatLng(51.50, -0.02),
    zoom: 12,
    minZoom: 10,
    maxZoom: 16,
    streetViewControl: false,
    draggable: false,
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  map = new google.maps.Map(document.getElementById("map-canvas"),
  mapOptions);

  $(".navbar-form").on('submit', searchMap);

    function searchMap() {
      var search = $("#search").val();
      geocoder.geocode( { "address": search}, function(results, status) {
        if (status == google.maps.GeocoderStatus.OK) {
          map.setCenter(results[0].geometry.location);
          var marker = new google.maps.Marker({
              map: map,
              position: results[0].geometry.location
          });
        } else {
          alert("Geocode was not successful for the following reason: " + status);
        }
      });
      return false;
  }
}

!function(d,s,id){
  var js,fjs=d.getElementsByTagName(s)[0];
  if(!d.getElementById(id)){
    js=d.createElement(s);
    js.id=id;
    js.src="https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js,fjs);
  }}(document,"script","twitter-wjs");



google.maps.event.addDomListener(window, 'load', function() {
  initialize();
  google.maps.event.addDomListener(map, 'bounds_changed', function() {
    var right = map.getBounds().getNorthEast().lat().toFixed(2);
    var left = map.getBounds().getSouthWest().lat().toFixed(2);
    var top = map.getBounds().getNorthEast().lng().toFixed(2);
    var bottom = map.getBounds().getSouthWest().lng().toFixed(2);
    //Do ajax get request to get all users in the database that have chosen tiles that should sit in the currnet view
    //iterate over the JSON that is returned and use the CreateTile function on each so that all the tiles are drawn
    $.getJSON("/draw_tiles", {right: right, left:left, top:top, bottom:bottom}).done(function(data) {
      console.log(data)//Now need to pass each object to CreateTile
      $.each(data, function(i,e){
        createTile(e.lat, e.lng, 0.01, e.image_link, e.content)
      });
        // createTile(self.lat, self.lng, 0.01, self.image_link, self.content)};
    })
    google.maps.event.addListener(map, 'click', function(event){
      var lat = parseFloat(event["latLng"]["jb"].toFixed(2));
      var lng = parseFloat(event["latLng"]["kb"].toFixed(2));
      createTile(lat, lng, 0.01, "http://sd.keepcalm-o-matic.co.uk/i/keep-calm-and-make-me-yours-12.png", "http://www.jordanpoulton.com");
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
      width: 800,
      height: 800,
      modal: true
    })
    $("#user_lat").val(argLat)
    $("#user_lng").val(argLng)

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















