let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

let count = 0;
storyWords.forEach(word => count++);
console.log('1 - In this text there are now ' + count + ' words.');

let ohneUnnecessaryWord = storyWords.filter(word => {
  return word !== unnecessaryWord;
});
let count2 = 0;
ohneUnnecessaryWord.forEach(word => count2++);
console.log('2 - In this text there are now ' + count2 + ' words.');

storyWords = ohneUnnecessaryWord.map(word =>{
  if (word === misspelledWord) {
      return 'beautiful';
    } else {
      return word;
    }
});
let count3 = 0;
storyWords.forEach(word => count3++);
console.log('3 - In this text there are now ' + count3 + ' words.');

let badWordIndex = storyWords.findIndex(word => {
  return word === badWord;
});
console.log('Index of bad word : ' + badWordIndex);

storyWords[badWordIndex] = 'really';
console.log('To control if we already chanced the bad word ! New Word : ' + storyWords[badWordIndex]); 

let lengthCheck = storyWords.every((word) => { word < 10} );
console.log("To control if all words are shorter than 10 character : " + lengthCheck);

let longWordIndex = storyWords.findIndex(word => {
  return word.length > 10;
});
console.log('Index of long word : ' + longWordIndex);
storyWords[longWordIndex] = 'stunning';
console.log('To control if we already chanced the long word ! New Word : ' + storyWords[longWordIndex]); 

let lengthCheck2 = storyWords.every((word) => { word < 10} );
console.log("To control second time if all words are shorter than 10 character : " + lengthCheck2);

console.log (" ------ Last Control ------- ");
console.log(storyWords.join(' '));