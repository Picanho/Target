const original = 'exemplo';

let invertida = '';

for (let i = original.length - 1; i >= 0; i--) {
  invertida += original[i];
}

console.log(invertida);
