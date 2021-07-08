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
                pickRandom(data);
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