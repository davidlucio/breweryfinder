/** Global Variables & Objects **/
var breweryCard = $('#brewerycard'),
    bookmarkCard = $('#bookmarkcard');

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
    breweryCard.addClass('loading');
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
        console.log (`ERROR: ${response.status}`);
        }
        else {
            console.log("ERROR: No breweries found at this location");
        }
    });
}

function pickRandom(breweryList){
    let listSize = Object.keys(breweryList).length;
    let chosenBrewery = breweryList[Math.floor(Math.random() * listSize) - 1];
    displayBrewery(chosenBrewery, "primary");
}

function displayBrewery(brewery, method){
    
    if(method === "primary"){
        breweryCard.removeClass('loading');
        var contentblock = breweryCard.find('div.cardcontent');
        contentblock.attr( "id", brewery.id );
    }
    else if(method === "bookmark"){
        var contentblock = bookmarkCard;
    }

    // Create an object to append to the HTML
    var displayHTML = `<h2 class="brewery-name">${brewery.name}</h2><p class="brewery-address">`;

    // Construct the address
    if(brewery.street != "" && brewery.street != null && brewery.street != "null"){
        displayHTML += `${brewery.street}, `;
    }
    if(brewery.city != "" && brewery.city != null && brewery.city != "null"){
        displayHTML += `${brewery.city}, `;
    }
    if(brewery.state != "" && brewery.state != null && brewery.state != "null"){
        displayHTML += `${brewery.state}, `;
    }
    if(brewery.county_province != "" && brewery.county_province != null && brewery.county_province != "null"){
        displayHTML += `${brewery.county_province}, `;
    }
    if(brewery.postal_code != "" && brewery.postal_code != null && brewery.postal_code != "null"){
        displayHTML += `${brewery.postal_code}`;
    }
    displayHTML += `</p>`;

    // Check for website info
    if(brewery.website_url != "" && brewery.website_url != null && brewery.website_url != "null"){
        displayHTML += `<p class="brewery-website"><a href="${brewery.website_url}" target="_blank">Visit the website</a></p>`;
    }

    // Append to the block
    contentblock.html(displayHTML);

    // TODO: pass Lat & Long to map maker
    if(method === "primary"){
        mapMaker( brewery.latitude, brewery.longitude );
    }

}


/** Manage Bookmark Locale Storage - Connor **/

function addBookmark(currentBreweryId){
    var existingBookmark = localStorage.getItem('breweryBookmark');

    if ( existingBookmark != currentBreweryId ) {
        localStorage.setItem('breweryBookmark', currentBreweryId);
        getBookmark();
    }
}

function getBookmark(){
    var breweryBookmark = localStorage.getItem('breweryBookmark');
    if ( breweryBookmark !== null) {
        bookmarkCard.css('display','block');
        fetchBookmarkData(breweryBookmark);
    }
    else {
        // do nothing
    }
}

// LET'S GOOOOOOOOOOOOOOOOOOOO!
// (Warning: Only turn this on when we're active, otherwise we will waste our pings)

// init();