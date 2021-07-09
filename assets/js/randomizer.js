function pickRandom(breweryList){
  let listSize = Object.keys(breweryList).length;
  let chosenBrewery = breweryList[Math.floor(Math.random() * listSize) - 1];
  //todo: display this chosenBrewery
}
