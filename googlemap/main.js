async function initMap() {
  const [{ Map }, { AdvancedMarkerElement, PinElement }] = await Promise.all([
    google.maps.importLibrary('maps'),
    google.maps.importLibrary('marker'),
  ]);

  const mapElement = document.querySelector('gmp-map');
  const innerMap = mapElement.innerMap;

  innerMap.setOptions({
    mapTypeControl: false,
  });

  const markerData = [
    { position: mapElement.center,                                      title: 'My Apartment',                  glyphText: '🏠', color: '#3498db' },
    { position: { lat: 42.26927721716322,  lng: -72.6713628847962  },  title: 'Vera Cruzana',                  glyphText: '🌮', color: '#e74c3c' },
    { position: { lat: 42.26876719452087,  lng: -72.67107929244717 },  title: 'Shelburne Falls Coffee',        glyphText: '☕', color: '#795548' },
    { position: { lat: 42.26899738740894,  lng: -72.67157098833695 },  title: 'Small Oven Bakery',             glyphText: '🥐', color: '#ff9800' },
    { position: { lat: 42.26869798714739,  lng: -72.66821029379568 },  title: 'Easthampton Feed',              glyphText: '🌱', color: '#85c087' },
    { position: { lat: 42.27016623681622,  lng: -72.67176512696521 },  title: "Big E's",                       glyphText: '🛒', color: '#9c27b0' },
    { position: { lat: 42.272269321335976, lng: -72.67055540208598 },  title: 'The Heavy Culture Cooperative', glyphText: '🍺', color: '#607d8b' },
    { position: { lat: 42.26675563492684,  lng: -72.67101294701779 },  title: 'Tandem Bagel',                  glyphText: '🥯', color: '#a7ab77' },
  ];

  const legend = document.getElementById('legend');
  markerData.forEach((data) => {
    const item = document.createElement('div');
    item.className = 'legend-item';
    item.innerHTML = `
      <span class="legend-dot" style="background: ${data.color};">${data.glyphText}</span>
      <span class="legend-label">${data.title}</span>
    `;
    legend.appendChild(item);
  });

  markerData.forEach((data, index) => {
    const pin = new PinElement({
      background: data.color,
      borderColor: '#030303',
      glyphColor: '#ffffff',
      glyphText: data.glyphText,
    });

    pin.classList.add('marker-drop');
    pin.style.animationDelay = `${index * 0.15}s`;

    new AdvancedMarkerElement({
      map: innerMap,
      position: data.position,
      title: data.title,
      content: pin,
    });
  });

  google.maps.event.addListenerOnce(innerMap, 'idle', () => {
    console.log("The map is now ready!");
  });
}

initMap();
