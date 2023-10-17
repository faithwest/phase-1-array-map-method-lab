const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

// Define an arrow function 
const titleCased = () => {
  // the map method iterates over the tutorials array
  return tutorials.map(tutorial => {
    // Split each tutorial sentence
    return tutorial.split(' ')
      .map(word => {
        // Capitalize the first letter of each word and concatenate the rest of the word
        return word[0].toUpperCase() + word.slice(1);
      })
      // Join the words back into a sentence and return it
      .join(' ');
  });
};
