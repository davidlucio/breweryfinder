// // variable for map and setting the default starting viewpoint with ([lat, long], <zoom level>)
// let mymap = L.map('brewerymap').setView([brewery.latitude, brewery.longitude], 13);

// // tiles
// L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'pk.eyJ1IjoiY29ubm9yb2xzb24iLCJhIjoiY2txdWU0MXh1MDNvdjJwczhrcG52ZGczOCJ9.ZEcgEWRYjQf5ouKmt98pBg'
// }).addTo(mymap);

// function for setting marker to lat/long of brewery
function getBreweryLatLong() {
    marker.setLatLng([brewery.latitude, brewery.longitude])
}

// // variable for marker and adding marker to map with [lat, long]
// let marker = L.marker([brewery.latitude, brewery.longitude]).addTo(mymap);

function mapMaker(latitude, longitude) {
    console.log('debug')
    var container = L.DomUtil.get('brewerymap');
      if(container != null){
        container._leaflet_id = null;
      }
    // variable for map and setting the default starting viewpoint with ([lat, long], <zoom level>)
    let mymap = L.map('brewerymap').setView([latitude, longitude], 13);

    // tiles
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY29ubm9yb2xzb24iLCJhIjoiY2txdWU0MXh1MDNvdjJwczhrcG52ZGczOCJ9.ZEcgEWRYjQf5ouKmt98pBg'
    }).addTo(mymap);
    
    // variable for marker and adding marker to map with [lat, long]
    let marker = L.marker([latitude, longitude]).addTo(mymap);
}

