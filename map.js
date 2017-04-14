var thin=document.getElementById("dropdown");
function drop () {
  thin.classList.toggle("show");
}
var lick=document.getElementById("button");
lick.onclick = function() {
  drop();
}

function initMap() {
    var ltLng= {lat: 40.0999709, lng: -74.1713087},
        map = new google.maps.Map(document.getElementById('map'), {
          center:ltLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.HYBRID,
          draggable: true,
          scrollwheel: false,
          disableDoubleClickZoom: true,
          zoomControl: false
          });
           var marker = new google.maps.Marker({
          position: ltLng,
          map: map,
          title: 'Torah Tape World Headquarters'
        
        });
           var contentString= 'Torah Tapes world Headquarters<br>1357 Lanes Mill Rd.<br>Lakewood NJ 08701';
            var infowindow = new google.maps.InfoWindow({
          content: contentString
        });
        marker.addListener('click', function() {
          infowindow.open(map, marker);
        });     
      }