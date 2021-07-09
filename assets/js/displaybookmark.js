/** Place atr the beginning of the file **/
$('#bookmark').click(function(){
    var currentID = $(this).siblings('.cardcontent').attr('id');
    addBookmark(currentID);
});

/** Place this inside  */
function fetchBookmarkData(bookmarkid){

    var specificBreweryURL = `https://api.openbrewerydb.org/breweries/${bookmarkid}`;

    fetch (specificBreweryURL)
    .then(function (response){
        if (response.status === 200){
            response.json().then(function (data){
                displayBrewery(data, "bookmark");
            })
        }
        else if (response.status !==200){
            console.log (`there was an error: ${response.status}`);
        }
        else {
            console.log("The bookmark could not find a brewery with that ID");
        }
    });

}