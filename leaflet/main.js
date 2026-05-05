var map = L.map('map', { scrollWheelZoom: false }).setView([42.38664, -72.53141], 16);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

// Morrill
L.circle([42.38959, -72.52439], { radius: 300, color: 'blue', opacity: 1,    fillColor: 'yellow', fillOpacity: .05 }).addTo(map);
L.circle([42.38959, -72.52439], { radius: 200, color: 'blue', opacity: .75,  fillColor: 'yellow', fillOpacity: .05 }).addTo(map);
L.circle([42.38959, -72.52439], { radius: 100, color: 'blue', opacity: .5,   fillColor: 'yellow', fillOpacity: .05 }).addTo(map);
L.circle([42.38959, -72.52439], { radius: 50,  color: 'blue', opacity: .25,  fillColor: 'yellow', fillOpacity: .05 }).addTo(map);
// Lot 12
L.circle([42.3918, -72.5362], { radius: 50,  color: 'blue', opacity: .25,  fillColor: 'yellow', fillOpacity: .05 }).addTo(map);


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

var lot12 = L.circle([42.3918, -72.5362], {
  radius: 50,
  color: 'blue',
  fillColor: 'yellow',
  fillOpacity: 0.05
}).addTo(map);

var morrill = L.circle([42.38959, -72.52439], {
  radius: 50,
  color: 'blue',
  fillColor: 'yellow',
  fillOpacity: .05
}).addTo(map);

morrill.bindPopup("Morrill Science Center. Here be confusing.").openPopup();
lot12.bindPopup("Lot 12. Here be dragons!").openPopup();

map.on('click', onMapClick);
