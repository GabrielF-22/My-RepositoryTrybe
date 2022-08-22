let palavra = 'tryber';
resultado = '';

for (let index = palavra.length -1; index >=0; index-= 1) {
    resultado += palavra[index]
}
console.log(resultado)


//OUTRA FORMA DE FAZER
// let word = 'tryber';
// let reverseWord = '';

// for (let index = 0; index < word.length; index += 1) {
//   reverseWord += word[word.length - 1 - index];
// }

// console.log(reverseWord);