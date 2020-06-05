const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');
const { fetchISSFlyOverTimes } = require('./iss');
const { nextISSTimesForMyLocation } = require('./iss');

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  console.log(passTimes);
});

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log('Error is: ', error);
//     return;
//   }
//   console.log('It worked! Returned IP: ', ip);
// });

// const coords = { latitude: '49.27670', longitude: '-123.13000' };

// fetchISSFlyOverTimes(coords, (error, passTimes) => {
//   if (error) {
//     console.log('Error is: ', error);
//     return;
//   }

//   console.log('It worked! Flyover times: ', passTimes);
// })

// fetchCoordsByIP ('68.150.196.52', (error, coords) => {
//   if (error) {
//     console.log('It didn\'t work. ', error);
//     return
//   }
//   console.log('It worked! Returned coords: ', coords);
// });