let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumero;

let numeroReferencia = numbers[0]
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] < numeroReferencia) {
        menorNumero = numbers[index]
    }
}
console.log(`O menor número da ARRAY é ${menorNumero}.`)