mapboxgl.accessToken = 'pk.eyJ1IjoiZ2VvY29yZSIsImEiOiJjbW9ydDFhajAwNWVnMnhwdmIzN2kxenpoIn0.twStYBsYqmLHxiiytseIYQ';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/geocore/cmnsb3ks7008701scf3amhy4i',
  center: [-72.60, 42.33],
  zoom: 10.5
});

map.on('load', () => {
  map.addSource('places', {
    type: 'geojson',
    generateId: true,
    data: './hampshire_music.geojson'
  });

  map.addLayer({
    id: 'places',
    type: 'circle',
    source: 'places',
    paint: {
      'circle-color': '#1ded15',
      'circle-radius': 8,
      'circle-stroke-width': 1,
      'circle-stroke-color': '#ffffff',
      'circle-emissive-strength': 1
    }
  });

  map.addInteraction('places-click-interaction', {
    type: 'click',
    target: { layerId: 'places' },
    handler: (e) => {
      const coordinates = e.feature.geometry.coordinates.slice();
      const { name, address } = e.feature.properties;
      new mapboxgl.Popup()
        .setLngLat(coordinates)
        .setHTML(`<h3>${name}</h3><p>${address}</p>`)
        .addTo(map);
    }
  });

  map.addInteraction('places-mouseenter-interaction', {
    type: 'mouseenter',
    target: { layerId: 'places' },
    handler: () => { map.getCanvas().style.cursor = 'pointer'; }
  });

  map.addInteraction('places-mouseleave-interaction', {
    type: 'mouseleave',
    target: { layerId: 'places' },
    handler: () => { map.getCanvas().style.cursor = ''; }
  });
});
