const alienShip = {
    invade: function () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};

const alienShip2 = {
    invade2 () { 
      console.log('Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.')
    }
};
alienShip.invade(); // Prints 'Hello! We have come to dominate your planet. Instead of Earth, it shall be called New Xaculon.'

let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';
// Write your code below
const alienShip3 = {
    retreat () { 
      console.log('We no longer wish to conquer your planet. It is full of dogs, which we do not care for.')
    },
    takeOff() { 
      console.log('Spim... Borp... Glix... Blastoff!')
    }
}; 
alienShip3.retreat();
alienShip3.takeOff();