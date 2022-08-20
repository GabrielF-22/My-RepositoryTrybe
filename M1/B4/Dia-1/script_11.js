const SalarioBruto = 3000;
let valorInss = 0;
let valorParaIrpf = 0;
let valorIRPF = 0;
let salarioLiquido = 0;

console.log(`SALÁRIO BRUTO ${SalarioBruto}`)
if (SalarioBruto <= 1556.94) {
  valorInss = SalarioBruto * 0.08
} else if (SalarioBruto >= 1556.95 && SalarioBruto <= 2594.92) {
  valorInss = SalarioBruto * 0.09
} else if (SalarioBruto >= 2594.93 && SalarioBruto <= 5189.82) {
  valorInss = SalarioBruto * 0.11
} else {
  valorInss = 570.88
}
console.log(`Valor para o INSS é de ${valorInss}`)

valorParaIrpf = SalarioBruto - valorInss
console.log(`O valor do salário base, que vai para a Tabela do IRPF: ${valorParaIrpf}`)

if (valorParaIrpf <= 1903.98) {
  valorIRPF = 0
} else if (valorParaIrpf >= 1903.99 && valorParaIrpf <= 2826.65) {
  valorIRPF = (valorParaIrpf * 0.075) - 142.80
} else if (valorParaIrpf >= 2826.66 && valorParaIrpf <= 3751.05) {
  valorIRPF = (valorParaIrpf * 0.15) - 354.80 
} else if (valorParaIrpf >= 3751.06 && valorParaIrpf <= 4664.68) {
  valorIRPF = (valorParaIrpf * 0.225) - 636.13
} else if (valorParaIrpf > 4664.68) {
  valorIRPF = (valorParaIrpf * 0.275) - 869.36
}

salarioLiquido = valorParaIrpf - valorIRPF

console.log(`Paguei de IRPF o valor de: ${valorIRPF}`)
console.log(`O valor do seu SALÁRIO LÍQUIDO é ${salarioLiquido}`)