const { fetchMyIP } = require('./iss');
const { fetchCoordsByIP } = require('./iss');

fetchMyIP((error, ip) => {
  if (error) {
    console.log('Error is: ', error);
    return;
  }
  console.log('It worked! Returned IP: ', ip);
});

// fetchCoordsByIP ('68.150.196.52', (error, coords) => {
//   if (error) {
//     console.log('It didn\'t work. ', error);
//     return
//   }
//   console.log('It worked! Returned coords: ', coords);
// });