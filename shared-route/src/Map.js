import getCenter from './utils/getCenter';

const MARKER = 'Marker';
const CURRENT_MARKER = 'CurrentMarker';

class Map {
  constructor() {
    this.map;
    this.route;
    this.extent = { minx: 0, miny: 0, maxx: 0, maxy: 0 };
  }

  initMap(route) {
    this.route = route;
    const center = getCenter(route).reverse();

    this.map = new ol.Map({
      target: 'map',
      layers: [
        new ol.layer.Tile({
          source: new ol.source.OSM({
            url: 'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
          }),
        }),
      ],
      view: new ol.View({
        center: ol.proj.fromLonLat(center),
        zoom: 2
      }),
    });
  }

  renderSvgMarker(number, currentIndex) {
    const svg = new Image();
    const colors = currentIndex === number ? ['#5683ae', '#4a6e94'] : ['#f96b79', '#c45663'];
    const flag = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <path fill="${colors[0]}" d="M31.6 14.8H8.8V.1h22.8l-6.3 7.3z"/>
        <path fill="#5e5d5d" d="M9.4 39.9c.4 0 .7-.3.7-.7V.7c0-.4-.3-.7-.7-.7-.4.1-.6.3-.6.7v38.6c0 .4.4.6.6.6z"/>
        <path fill="${colors[1]}" d="M8.8.1h1.3v14.8H8.8z"/>
        <text x="36%" y="29%" font-size="12px" fill="white">${number + 1}</text>
      </svg>
    `;

    svg.src = 'data:image/svg+xml,' + encodeURIComponent(flag);

    return svg;
  }

  getMarker(lat, lng, number, currentIndex) {
    return new ol.layer.Vector({
      source: new ol.source.Vector({
        features: [new ol.Feature({
          geometry: new ol.geom.Point(ol.proj.transform([parseFloat(lng), parseFloat(lat)], 'EPSG:4326', 'EPSG:3857')),
        })]
      }),
      style: new ol.style.Style({
        image: new ol.style.Icon({
          anchor: [0.5, 1],
          img: this.renderSvgMarker(number, currentIndex),
          imgSize:[32, 34],
        })
      }),
      name: number === currentIndex ? CURRENT_MARKER : MARKER,
    });
  }

  removeMarkersLayers() {
    this.map.getLayers().forEach((layer) => {
      if (layer && layer.get('name') === CURRENT_MARKER) {
        this.map.removeLayer(layer);
      }
    });
  }

  renderMarkers(currentIndex) {
    this.removeMarkersLayers();

    this.route.points.forEach((point, index) => {
      const marker = this.getMarker(point.latitude, point.longitude, index, currentIndex);
      const [minx, miny, maxx, maxy] = marker.getSource().getExtent();

      if (this.extent.minx === 0 || this.extent.minx > minx) {
        this.extent.minx = minx;
      }
      if (this.extent.miny === 0 || this.extent.miny > miny) {
        this.extent.miny = miny;
      }
      if (this.extent.maxx === 0 || this.extent.maxx < maxx) {
        this.extent.maxx = maxx;
      }
      if (this.extent.maxy === 0 || this.extent.maxy < maxy) {
        this.extent.maxy = maxy;
      }

      this.map.addLayer(marker);

      if (index === currentIndex) {
        marker.setZIndex(1);
      }
    });
  }

  renderMap(route) {
    this.initMap(route);
    this.renderMarkers();

    this.map
      .getView()
      .fit(
        [this.extent.minx, this.extent.miny, this.extent.maxx, this.extent.maxy],
        { padding: [20, 20, 20, 20] },
      );
  }
}

export default Map;
