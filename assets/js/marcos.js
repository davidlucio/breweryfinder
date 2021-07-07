var responseText = document.getElementById('response-text');


function getIp(){

    fetch("http://api.ipstack.com/check?access_key=891ca2fd6b3e3f2e296a2e3259012ed0",{
        cache: 'reload',
    })
    .then(function (response) {
        if (response.status === 200){
            responseText.textContent =respsonse.stauts;
        }
        else if (response.status !==200){
            responseText = "There was an error";
        }
        return response.json();
    })
    .then(function (data){
        console.log(data)
        for (let i = 0; i < data.length; i++) 
    })
}
    
function getBrewery(){
    fetch ("https://api.openbrewerydb.org/breweries?per_page=25", {
    cache: 'reload'
    })
    .then(function (response){
    if (response.status === 200){
        responseText.textContent = response.status;
    }
    else if (response.status !==200){
        responseText = "there was an error";
    }
    return response.jspon();
    })

    .then(function (data){
    console.log(data);
    for (let i = 0; i < data.length; i++) {
         
    }
    })}