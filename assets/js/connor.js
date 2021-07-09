function addBookmark(currentBreweryId){
    localStorage.setItem('breweryBookmark', currentBreweryId);
    console.log(`breweryBookmark set to ${currentBreweryId}`);
    // TODO: Populate bookmark area
}

function getBookmark(){
    var breweryBookmark = localStorage.getItem('breweryBookmark');
    if ( breweryBookmark !== null) {
        // TODO: populate bookmark area
        console.log(breweryBookmark);
    }
    else {
        // do nothing
    }
}

// variable for map and setting the default starting viewpoint with ([lat, long], <zoom level>)
let mymap = L.map('breweryMap').setView([51.505, -0.09], 13);

// tiles
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoiY29ubm9yb2xzb24iLCJhIjoiY2txdWU0MXh1MDNvdjJwczhrcG52ZGczOCJ9.ZEcgEWRYjQf5ouKmt98pBg'
}).addTo(mymap);

// function for setting marker to lat/long of brewery
function getBreweryLatLong() {
    marker.setLatLng([latitude, longitude])
}

// variable for marker and adding marker to map with [lat, long]
let marker = L.marker([51.5, -0.09]).addTo(mymap); 