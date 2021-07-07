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