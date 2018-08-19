// Code your solution in this file
// function findMatching(drivers,matchString){
//   let matchedString=drivers.filter((matchedValue,matchString)=>
//   matchedValue.toLowerCase()===matchString.toLowerCase());
//   return matchedString ;
// }

function findMatching(drivers,matchString){
  let matchedString=drivers.filter(matchedValue=>
  matchedValue.toLowerCase()===matchString.toLowerCase());
  return matchedString ;
}

function fuzzyMatch(drivers,letterProvided){
  let fuzzyMatchedDrivers=
  drivers.filter(anyValue=>anyValue.toLowerCase().indexOf(letterProvided.toLowerCase())===0);
  return fuzzyMatchedDrivers
}

function matchName(drivers,matchNameString){
  let matchNameDrivers=
  
  return matchNameDrivers;
  
}