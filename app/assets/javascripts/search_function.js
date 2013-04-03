//NB - see lines 33/34 in application.html.erb for the view info

function searchMap() {
    var search = document.getElementById("search").value;
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
  }

