'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(random(1, 10));
console.log(random(5));
console.log(random(10, 20));

const generateKey = (length, characters) => {
  let key = '';

  for (let i = 0; i < length; i++) {
    const index = random(0, characters.length - 1);
    key += characters[index];
  }

  return key;
};

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateKey(16, characters);

console.log(key);