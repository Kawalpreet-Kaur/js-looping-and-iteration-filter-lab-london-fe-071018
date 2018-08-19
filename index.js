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

function fuzzyMatch(drivers){
  let fuzzyMatchedDrivers=drivers.filter(anyValue=>);
  return fuzzyMatchedDrivers
}