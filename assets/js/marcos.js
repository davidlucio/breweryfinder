fetch("http://api.ipstack.com/check?access_key=891ca2fd6b3e3f2e296a2e3259012ed0",{
  cache: 'reload',
})
.then(function (response) {
  return response.json();
})
.then(function (data){
  console.log(data)
})
