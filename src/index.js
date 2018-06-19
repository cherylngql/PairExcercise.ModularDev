const mapboxgl = require("mapbox-gl");
const createMarker = require("./marker.js");

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hlcnlsbmdxbCIsImEiOiJjamltNTFnOWswMGZvM3FuMHlscnp4ZzFyIn0.pdXa7CK4LpSNziHVx5cNJg';

const map = new mapboxgl.Map({
  container: "map",
  center: [-74.009, 40.705], // FullStack NY coordinates; alternatively, use [-87.6354, 41.8885] for Chicago
  zoom: 12, // starting zoom
  style: "mapbox://styles/mapbox/streets-v10" // mapbox has lots of different map styles available.
});
console.log(createMarker('activity', [-74.009, 40.705]));
createMarker('activity', [-74.009, 40.705]).addTo(map);
createMarker('hotel', [-74.012, 40.703]).addTo(map);
createMarker('restaurant', [-74.010, 40.701]).addTo(map);
