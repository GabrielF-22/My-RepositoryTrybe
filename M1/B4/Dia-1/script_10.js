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

/*
const costOfProduct = 1;
const saleValue = 3;

if (costOfProduct >= 0 && saleValue >= 0) {
  const totalCostOfProduct = costOfProduct * 1.2;
  const totalProfit = (saleValue - totalCostOfProduct) * 1000;
  console.log(totalProfit);
} else {
  console.log("Error, os valores não podem ser negativos");
}; 
*/