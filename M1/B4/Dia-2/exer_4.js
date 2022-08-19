let numeros= [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let resultadoSoma = 0;
let mediaAritmetica;

for(let index = 0; index < numeros.length; index+=1) {
    resultadoSoma += numeros[index]
}
mediaAritmetica = resultadoSoma / numeros.length
console.log(`A média aritmética é de: ${mediaAritmetica}`)
if (mediaAritmetica > 20) {
    console.log('O valor é maior que 20')
} else {
    console.log('O valor é MENOR ou IGUAL 20')
}