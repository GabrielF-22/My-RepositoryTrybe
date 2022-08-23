let maiorNumero = 0;

for (let nAtual = 2; nAtual < 50; nAtual+=1) {
  let ePrimo = true;
  for (let divisorAtual = 2; divisorAtual < nAtual; divisorAtual+=1) {
    if (nAtual % divisorAtual === 0) {
      ePrimo = false;
    }
  }
  if (ePrimo) {
    maiorNumero = nAtual;
  }
}

console.log(`O maior número PRIMO entre 1 e 50 é [${maiorNumero}]`)