let sentenceLength = 0;
let wordCount = 0;
let vowelCount = 0;

const sentence = prompt("Enter a sentence that ends with a point:");

for (let i = 0; i < sentence.length; i++) {
  const character = sentence.charAt(i);
  
  sentenceLength++;

  if (character.match(/[aeiou]/gi)) {
    vowelCount++;
  }

  if ((i > 0 && sentence.charAt(i-1) === ' ' && character !== ' ') || (i === 0 && character !== ' ')) {
    wordCount++;
  }

  if (character === '.') {
    wordCount++;
  }
}

console.log(`Sentence length: ${sentenceLength}`);
console.log(`Word count: ${wordCount}`);
console.log(`Vowel count: ${vowelCount}`);
