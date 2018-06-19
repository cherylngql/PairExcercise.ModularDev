const mapboxgl = require("mapbox-gl");

function marker(type, coord) {
  const marker = document.createElement("div");
  marker.style.width = "32px";
  marker.style.height = "39px";
  if (type === 'restaurant') {
    marker.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
  } else if (type === 'hotel') {
    marker.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  } else if (type === 'activity') {
    marker.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  return new mapboxgl.Marker(marker).setLngLat(coord);
}




module.exports = marker;