const logSkyColor = () => {
    let color = 'blue'; 
    console.log(color); // Prints "blue"
  };
  
  logSkyColor(); // Prints "blue"
  console.log(color); // throws a ReferenceError

const logVisibleLightWaves = () => {        
    const lightWaves = 'Moonlight';     // as Variable can be also used let or var
    console.log(lightWaves); // Moonlight
};

logVisibleLightWaves(); // Moonlight
console.log(lightWaves); // ReferenceError
