const custoProdutoUnit = 500;
const valorVendaUnit = 650;
const aliquotaImposto = 0.2;
const quantidadeUnit = 1000;
let valorImpostoUnit;
let lucroUnit;
let lucroTotal;

const valoresValidos = custoProdutoUnit > 0 && valorVendaUnit > 0 && quantidadeUnit > 0;

if (valoresValidos) {
    valorImpostoUnit = custoProdutoUnit * aliquotaImposto
    lucroUnit = valorVendaUnit - (custoProdutoUnit + valorImpostoUnit)
    lucroTotal = quantidadeUnit * lucroUnit
} else {
    console.log('Tem algum valor zerado ou negativo')
}
console.log(`O lucro unitário é de ${lucroUnit} e do lucro TOTAL é de ${lucroTotal}`)