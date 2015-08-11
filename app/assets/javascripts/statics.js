
$(function() {
  var geocoderControl, geojson, map, markerLayer;
  $('#photo-grids').imagesLoaded(function() {
    return $('#photo-grids').masonry({
      itemSelector: '.box',
      columnWidth: function(containerWidth) {
        return containerWidth / 3;
      }
    });
  });

  $( window ).resize( function () {
    $('#photo-grids').masonry({
      itemSelector: '.box',
      columnWidth: function(containerWidth) {
        var numberOfRows = null;
        if (containerWidth > 650) {
          numberOfRows = 3;
        } else if (containerWidth > 500) {
          numberOfRows = 2;
        } else {
          numberOfRows = 1;
        }

        $('#photo-grids .box').css(
          "width",
          (containerWidth / numberOfRows) - 1 + "px"
        );

        return containerWidth / numberOfRows;
      }
    });
  });

  L.mapbox.accessToken = 'pk.eyJ1IjoiY29ubm9yLXBhdWwtc3R1YWZmZXIiLCJhIjoidXJZTTVIRSJ9.8j0ZSCosB_2NKkpEDrVggA';
  map = L.mapbox.map('map', 'connor-paul-stuaffer.mof234gh').setView([37.37, -101.25], 3);
  geocoderControl = L.mapbox.geocoderControl('mapbox.places', {
    autocomplete: true
  });
  map.addControl(geocoderControl);
  markerLayer = L.mapbox.featureLayer().addTo(map);
  geojson = {
    'type': 'Feature',
    'geometry': {
      'type': 'Point',
      'coordinates': [-104.6, 39.67]
    },
    'properties': {
      'name': 'Denver, Colorado',
      'marker-color': '#0000CC',
      'marker-size': 'small',
      'marker-symbol': 'circle'
    }
  };
  return markerLayer.setGeoJSON(geojson);
});
