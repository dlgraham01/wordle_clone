

const WORDS = [
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

function getRandomWord(words) {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex];
}

export { WORDS, getRandomWord };

