import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  let aveTemperature = data.planets
  .map(planet => planet.avgTemp)
  .reduce ((accum, currVal, index, array) =>{
    return {sum:accum.sum + currVal, arr: array};
  },{sum:0, arr:[]});
  return aveTemperature.sum / aveTemperature.arr.length;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
