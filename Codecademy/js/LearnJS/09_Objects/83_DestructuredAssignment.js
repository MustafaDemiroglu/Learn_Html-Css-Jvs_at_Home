const vampire = {
    name: 'Dracula',
    residence: 'Transylvania',
    preferences: {
      day: 'stay inside',
      night: 'satisfy appetite'
    }
};

const residence2 = vampire.residence; 
console.log(residence2); // Prints 'Transylvania' 

const {residence} = vampire; 
console.log(residence); // Prints 'Transylvania'

const { day } = vampire.preferences; 
console.log(day); // Prints 'stay inside'



const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  const {functionality }= robot;
  functionality.beep();
  functionality.fireLaser();
