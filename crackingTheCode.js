'use strict';

const cipher = {
  a: 2,
  b: 3,
  c: 4,
  d: 5, 
};

const code = 'craft block argon meter bells brown croon droop';

function decode(word) {
  if (Object.keys(cipher).includes(word.charAt(0))) {
    for (let key in cipher) {
      if (key === word.charAt(0)) {
        return word.charAt(cipher[key]-1);
      }
    }
  } else {return ' ';}
}

function decodePhrase (phrase) {
  return phrase.split(' ').map(function(word) {
    return decode(word);
  }).join('');
}

console.log(decodePhrase(code));