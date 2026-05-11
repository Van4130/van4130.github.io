var map = L.map('map', { scrollWheelZoom: true }).setView([42.38664, -72.53141], 16);

// Set base map: CartoDB_PositronNoLabels (https://leaflet-extras.github.io/leaflet-providers/preview/)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
	subdomains: 'abcd',
	maxZoom: 20
}).addTo(map);

// Ref https://leafletjs.com/examples/quick-start/
// Pop-ups
var lot12pop = L.popup()
  .setLatLng([42.3918, -72.5362])
  .setContent("Lot 12. Here be dragons!")
  .openOn(map);

var morrillpop = L.popup()
  .setLatLng([42.38959, -72.52439])
  .setContent("Morrill Science Center. Here be confusing.")
  .openOn(map);

// Circles
var lot12 = L.circle([42.3918, -72.5362], {
  radius: 50,
  color: 'blue',
  fillColor: 'yellow',
  fillOpacity: 0.05
}).addTo(map);

var morrill = L.circle([42.39057982848214, -72.52440000259595], {
  radius: 50,
  color: 'blue',
  fillColor: 'yellow',
  fillOpacity: .05
}).addTo(map);

morrill.bindPopup("Morrill Science Center").openPopup();
lot12.bindPopup("Lot 12. Here be dragons!").openPopup();

// Polyline
var waypoints = [
  [42.3918, -72.5362],  // Lot 12
  [42.39160979964624, -72.53476233862631],
  [42.391336809041306, -72.53344313385553],
  [42.39139639872155, -72.53319032421584],
  [42.39007753943015, -72.53260946012917],
  [42.38984316309533, -72.53136162844451],
  [42.38987097050178, -72.53033431885156],
  [42.38985905304339, -72.5303181830988],
  [42.389632620903846, -72.53021598999793],
  [42.389664604937124, -72.53002727686317],
  [42.3898825165276, -72.52910996107482],
  [42.39022324947322, -72.52860034142165],
  [42.39059171441421, -72.52643848120869],
  [42.390809622770085, -72.52492571550134],
  [42.39057982848214, -72.52482379157078],
  [42.39057982848214, -72.52440000259595],  // <My office, Morrill Science Center
];

var route = L.polyline(waypoints, {
  color: '#f13716',
  weight: 4,
  opacity: 1,
  lineJoin: 'round',
  snakingSpeed: 100
}).addTo(map).snakeIn();

var group = L.featureGroup([route, lot12, morrill]);
map.fitBounds(group.getBounds(), { padding: [60, 60] });
