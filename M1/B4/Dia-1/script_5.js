let a1 = 60;
let a2 = 50;
let a3 = 60;
let somaDosTresAngulos = a1 + a2 + a3;
let angulosValidos = a1 > 0 && a2 > 0 && a3 > 0

if (angulosValidos) {
    if (somaDosTresAngulos == 180) {
        console.log(true)
    }
    else {
        console.log(false)
    }
} else {
    console.log('Valor dos ângulos são inválidos')
}