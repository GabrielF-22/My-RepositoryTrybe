const a = 30;
const b = 11;
const c = 10;
let resultado;

if (a > b && a > c) {
    resultado = 'O numero ' + a + ' é maior que todos [A].';
}
else if (b > a && b > c) {
    resultado = 'O numero ' + b + ' é maior que todos [B].';
}
else {
    resultado = 'O numero ' + c + ' é maior que todos [C].';
}
console.log(resultado)