let array = ['java', 'javascript', 'python', 'html', 'css'];
let maiorPalavra = '';

for (let index = 0; index < array.length; index +=1) {
    if(array[index].length > maiorPalavra.length) {
        maiorPalavra = array[index]
    }
}
console.log(`A maior palavra é: ${maiorPalavra}`)

//Menor Palavra

let menorPalavra = array[0];

for (let index2 = 0; index2 < array.length; index2 +=1) {
    if(array[index2].length < menorPalavra.length) {
        menorPalavra = array[index2]
    }
}
console.log(`A menor palavra é: ${menorPalavra}`)