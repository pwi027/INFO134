// Oppgave 7)​ Definer en JavaScript-funksjon som tar to koordinater som parametre og regner ut avstanden
// mellom dem. Der er helt i orden å anta at verden (i hvert fall Bergen) er flat i denne oppgaven.

function degreesToRadians(degrees) {
  return degrees * Math.PI / 180;
}

/**
 * Måler og returnerer avstanden mellom to koordinater.
 *
 * @param {object} coord1 det første koordinatet
 * @param {object} coord2 det andre koordinatet
 * @returns {number} avstanden mellom koordinatene i kilometer
 */
function measureDistance(coord1, coord2) {

  // Jordklodens ca. radius
  var r = 6371;
  var x1 = coord1.lat - coord2.lat;
  var x2 = coord1.lng - coord2.lng;
  var latDistance = degreesToRadians(x1);
  var lngDistance = degreesToRadians(x2);

  // Haversine-formel konvertert til JavaScript
  var a = Math.pow(Math.sin(latDistance / 2), 2) +
          Math.cos(degreesToRadians(coord1.lat)) * Math.cos(degreesToRadians(coord2.lat)) *
          Math.pow(Math.sin(lngDistance / 2), 2);

  var b = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var c = r * b;

  return c;
}

// Skriver avstanden mellom to koordinater (i km) til terminal
console.log(measureDistance({
  lat: 55,
  lng: 24
}, {
  lat: 60,
  lng: 30
}));
