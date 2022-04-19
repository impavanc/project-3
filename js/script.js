function initMap() {
  const castle = { lat: 41.83863002472576, lng: -87.6270380886158 }; 
  const flag = { lat: 41.83855433094542, lng: -87.6273903853663 };
  
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: castle,
  });
  const marker1 = new google.maps.Marker({
    position: castle,
    map: map,
  });
  
  const marker2 = new google.maps.Marker({
	position: flag,
	map: map,
	animation: google.maps.Animation.BOUNCE
  });
}

google.maps.event.addDomListener(window, 'load', initMap);