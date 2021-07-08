/** Global Variables & Objects **/
var responseCard = $('#brewery-card'),
    bookmarkCard = $('#bookmark-card');

/** Page Initialize Function (AKA Push the Dominos) **/
function init(){

    getBookmark();
    locateMe();
    
}

/** Geolocator - Lucio **/

function locateMe(){
    if ( navigator.geolocation ){

        navigator.geolocation.getCurrentPosition( function(thisPosition){
            var myLat = thisPosition.coords.latitude,
                myLong = thisPosition.coords.longitude;
            
            // Sanity check for geolocation retrieval
            if(myLat !== null && myLong !== null && myLat != "" && myLong != ""){
                getBreweryByLocation(myLat,myLong);
            }
            else{
                console.log("ERROR: Could not locate you");
            }
        });
    }
    else{
        console.log("ERROR: This browser does not support the geolocation functionality.")
    }
}

/** Get Brewery by Location - Marcos **/
    
function getBreweryByLocation(lat , long){
    var searchSize = 50;
    let apiUrl = `https://api.openbrewerydb.org/breweries?by_dist=${lat},${long}&per_page=${searchSize}`;

    fetch (apiUrl)
    .then(function (response){
        if (response.status === 200){
            response.json().then(function (data){
                //todo: choose random from this list
                console.log(data); 
            })
        }
        else if (response.status !==200){
        console.log (`there was an error: ${response.status}`);
        }
        else {
            console.log("no breweries found at this location");
        }
    });
}




// variable for map and setting the default starting viewpoint with ([lat, long], <zoom level>)
const mymap = L.map('breweryMap').setView([latitude, longitude], 13);

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
let marker = L.marker([latitude, longitude]).addTo(mymap);





/** Manage Bookmark Locale Storage - Connor **/

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

// LET'S GOOOOOOOOOOOOOOOOOOOO!
// (Warning: Only turn this on when we're active, otherwise we will waste our pings)

// init();