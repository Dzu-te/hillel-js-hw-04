export function generateKey(keyLength, symbols) {

  let generatedKey = [];

  for (let i = 0; i < keyLength; i++) {
    const randomSymbol = Math.floor(Math.random() * symbols.length);
    const randomVolume = symbols[randomSymbol];
    generatedKey.push(randomVolume);
  }
  return generatedKey.join('');
}