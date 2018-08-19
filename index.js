// Code your solution in this file
// function findMatching(drivers,matchString){
//   let matchedString=drivers.filter((matchedValue,matchString)=>
//   matchedValue.toLowerCase()===matchString.toLowerCase());
//   return matchedString ;
// }

function findMatching(drivers,matchString){
  let matchedString=drivers.filter((matchedValue,matchString)=>matchedValue===matchString);
  return matchedString ;
}