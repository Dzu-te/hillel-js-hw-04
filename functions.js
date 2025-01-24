export function generateKey(keyLength, symbols) {

  let newArr = [];

  for (let i = 0; i < keyLength; i++) {
    let arr = symbols.split('');
    const randomSymbol = Math.floor(Math.random() * arr.length);
    const randomVolume = arr[randomSymbol];
    newArr.push(randomVolume);
  }
  return newArr.join('');
}

