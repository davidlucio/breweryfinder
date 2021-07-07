var responseCard = $('#response-text');

    
function getBreweryByLocation(lat , long){
    let apiUrl = `https://api.openbrewerydb.org/breweries?by_dist=${lat},${long}&per_page=50`; 
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


