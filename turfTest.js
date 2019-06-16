const turf = require('@turf/turf');

const p1 = turf.polygon([
  [
    [34.23948392047578, -118.1217555],
    [34.20401637710247, -118.08628999701973],
    [34.1909422717827, -118.01175917722527],
    [34.07916699919336, -117.88774290646326],
    [34.06479102232647, -118.05606786175888],
    [34.06966029825175, -118.1217555],
    [34.06294513625732, -118.18878425297221],
    [34.09785961207294, -118.29823814661052],
    [34.204195435465905, -118.27254086645802],
    [34.215405213570776, -118.16549547701901],
    [34.23948392047578, -118.1217555],
    [34.23948392047578, -118.1217555]
  ]
]);

const p2 = turf.polygon([
  [
    [34.089074973428175, -118.4735095],
    [34.064490589733744, -118.44163695860632],
    [34.04664547271243, -118.39341687091614],
    [33.99645266755085, -118.39912455895343],
    [33.964150148216426, -118.43248044335253],
    [33.95404896915473, -118.4735095],
    [33.93170321163743, -118.53811263597562],
    [33.9426986436395, -118.71333231549545],
    [34.058279251365256, -118.58940721811882],
    [34.07644246101698, -118.51406558417021],
    [34.089074973428175, -118.4735095],
    [34.089074973428175, -118.4735095]
  ]
]);

// console.log(turf.intersect(p1, p2));

var poly1 = turf.polygon([
  [
    [-122.801742, 45.48565],
    [-122.801742, 45.60491],
    [-122.584762, 45.60491],
    [-122.584762, 45.48565],
    [-122.801742, 45.48565]
  ]
]);

var poly2 = turf.polygon([
  [
    [-122.520217, 45.535693],
    [-122.64038, 45.553967],
    [-122.720031, 45.526554],
    [-122.669906, 45.507309],
    [-122.723464, 45.446643],
    [-122.532577, 45.408574],
    [-122.487258, 45.477466],
    [-122.520217, 45.535693]
  ]
]);
// console.log(poly1.geometry.coordinates, 'uttt', poly2.geometry.coordinates);
var intersection = turf.intersect(p1, p2);

console.log(intersection);
