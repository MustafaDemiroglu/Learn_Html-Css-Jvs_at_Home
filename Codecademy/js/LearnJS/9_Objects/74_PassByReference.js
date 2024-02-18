const spaceship = {
    homePlanet : 'Earth',
    color : 'silver'
}; 
let paintIt = obj => {
    obj.color = 'glorious gold'
};
paintIt(spaceship);   
spaceship.color // Returns 'glorious gold'

let spaceship2 = {
    homePlanet : 'Earth',
    color : 'red'
};
let tryReassignment = obj => {
    obj = {
      identified : false, 
      'transport type' : 'flying'
    }
console.log(obj) // Prints {'identified': false, 'transport type': 'flying'}
};
  
tryReassignment(spaceship2) // The attempt at reassignment does not work.
spaceship2 // Still returns {homePlanet : 'Earth', color : 'red'};   
spaceship2 = {
    identified : false, 
    'transport type': 'flying'
}; // Regular reassignment still works.


let spaceship3 = {
    'Fuel Type' : 'Turbo Fuel',
    homePlanet : 'Earth'
  };
  // Write your code below
  let greenEnergy = obj => {
      obj['Fuel Type'] = 'avocado oil'
  };
  let remotelyDisable = obj => {
      obj.disabled = true
  };
  greenEnergy(spaceship3);
  remotelyDisable(spaceship3);
  console.log(spaceship3);
  