function initMap() {
  var Bergen = {lat: 60.39299, lng: 5.32415};
  var Landmark = {lat: 60.389704, lng: 5.326552};
  var Hulen = {lat: 60.384759, lng: 5.325364};
  var Kvarteret = {lat: 60.389701, lng: 5.322013};
  var Garage = {lat: 60.389432, lng: 5.323846};
  var Østre = {lat: 60.393748, lng: 5.328094};
  var Koengen = {lat: 60.400002, lng: 5.318541};
  var Verftet = {lat: 60.394722, lng: 5.310569};


  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 14,
    center: Bergen,
    styles: [
{
"elementType": "geometry",
"stylers": [
  {
    "color": "#f5f5f5"
  }
]
},
{
"elementType": "labels.icon",
"stylers": [
  {
    "visibility": "off"
  }
]
},
{
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"elementType": "labels.text.stroke",
"stylers": [
  {
    "color": "#f5f5f5"
  }
]
},
{
"featureType": "administrative.land_parcel",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#bdbdbd"
  }
]
},
{
"featureType": "poi",
"elementType": "geometry",
"stylers": [
  {
    "color": "#eeeeee"
  }
]
},
{
"featureType": "poi",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "poi.park",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e5e5e5"
  }
]
},
{
"featureType": "poi.park",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
},
{
"featureType": "road",
"elementType": "geometry",
"stylers": [
  {
    "color": "#ffffff"
  }
]
},
{
"featureType": "road.arterial",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#757575"
  }
]
},
{
"featureType": "road.highway",
"elementType": "geometry",
"stylers": [
  {
    "color": "#dadada"
  }
]
},
{
"featureType": "road.highway",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#616161"
  }
]
},
{
"featureType": "road.local",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
},
{
"featureType": "transit.line",
"elementType": "geometry",
"stylers": [
  {
    "color": "#e5e5e5"
  }
]
},
{
"featureType": "transit.station",
"elementType": "geometry",
"stylers": [
  {
    "color": "#eeeeee"
  }
]
},
{
"featureType": "water",
"elementType": "geometry",
"stylers": [
  {
    "color": "#c9c9c9"
  }
]
},
{
"featureType": "water",
"elementType": "labels.text.fill",
"stylers": [
  {
    "color": "#9e9e9e"
  }
]
}
]
  });

  var marker = new google.maps.Marker({
    position: Landmark,
    map: map,
    title: 'Landmark'
  });

  var marker = new google.maps.Marker({
    position: Hulen,
    map: map,
    title: 'Hulen'
  });

  var marker = new google.maps.Marker({
    position: Kvarteret,
    map: map,
    title: 'Kvarteret'
  });

  var marker = new google.maps.Marker({
    position: Garage,
    map: map,
    title: 'Garage'
  });

  var marker = new google.maps.Marker({
    position: Koengen,
    map: map,
    title: 'Koengen'
  });

  var marker = new google.maps.Marker({
    position: Verftet,
    map: map,
    title: 'Verftet'
  });

  var marker = new google.maps.Marker({
    position: Østre,
    map: map,
    title: 'Østre'
  });

async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCBuVLxQGcWI91xujnPjh1NsfEDLK6X-jU&callback=initMap"
}