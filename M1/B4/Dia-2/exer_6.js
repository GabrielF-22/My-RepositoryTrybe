let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numeroDenumerosImpares = 0;
for (let index = 0; index < numbers.length; index+=1) {
    if(numbers[index] % 2 === 1) {
        numeroDenumerosImpares+=1
    }
}
console.log(`Existe [${numeroDenumerosImpares}] números IMPARES, dentro dessa ARRAY`)