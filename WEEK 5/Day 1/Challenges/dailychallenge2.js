const readline = require('readline');

const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

function toJs() {
  return new Promise((resolve, reject) => {
    try {
      const morseObj = JSON.parse(morse);
      if (Object.keys(morseObj).length === 0) {
        reject("Morse object is empty");
      } else {
        resolve(morseObj);
      }
    } catch (error) {
      reject("Invalid JSON");
    }
  });
}

function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question("Enter a word or a sentence: ", (input) => {
      rl.close();
      if (!input) {
        reject("No input provided");
        return;
      }
      const lowerInput = input.toLowerCase();
      const morseTranslation = [];

      for (const char of lowerInput) {
        if (char === " ") continue;
        if (!(char in morseJS)) {
          reject(`Character '${char}' is not in Morse code dictionary`);
          return;
        }
        morseTranslation.push(morseJS[char]);
      }

      resolve(morseTranslation);
    });
  });
}

function joinWords(morseTranslation) {
  console.log(morseTranslation.join("\n"));
}

toJs()
  .then(morseJS => toMorse(morseJS))
  .then(morseTranslation => joinWords(morseTranslation))
  .catch(error => console.log("Error:", error));
