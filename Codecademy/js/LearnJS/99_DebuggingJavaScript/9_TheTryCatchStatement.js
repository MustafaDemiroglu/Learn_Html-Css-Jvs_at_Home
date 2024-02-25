try {
    throw Error('This error will get caught');
  } catch (e) {
    console.log(e);
  }
  // Prints: This error will get caught
  
  console.log('The thrown error that was caught in the try...catch statement!');
  // Prints: 'The thrown error that was caught in the try...catch statement!'

  try {
    throw Error('This error is sucks');
  } catch (e) {
    console.log(e);
  }
  // Prints: This error is sucks
  
  console.log('This is the thrown error');
  // Prints: 'This is the thrown error!'