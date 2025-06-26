


const ALL_WORDS = [
  "APPLE",
  "BANANA",
  "CHERRY",
  "DATE",
  "ELDERBERRY",
  "FIG",
  "GRAPE",
  "HONEYDEW",
  "KIWI",
  "LEMON",
  "MANGO",
  "NECTARINE",
  "ORANGE",
  "PEACH",
  "QUINCE",
  "RASPBERRY",
  "STRAWBERRY",
  "TANGERINE",
  "UGLIFRUIT",
  "VANILLA",
  "WATERMELON"
];

// Filter to only include words that are exactly 5 letters long
const WORDS = ALL_WORDS.filter(word => word.length === 5);

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export { WORDS, getRandomWord };


