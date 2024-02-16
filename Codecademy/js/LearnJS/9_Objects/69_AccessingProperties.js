'hello'.length; // Returns 5

let spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
};
spaceship.homePlanet; // Returns 'Earth',
spaceship.color; // Returns 'silver',

spaceship.favoriteIcecream; // Returns undefined

// Write your code below
let crewCount = spaceship.numCrew;
console.log(crewCount);
let planetArray = spaceship.flightPath;
console.log(planetArray);