let n = 5;
let linha2 = '';

for (let nlinha = 0; nlinha < n; nlinha+=1) {
  linha2 = '';
  for (let linha = 0; linha < n; linha+=1) {
    linha2 = linha2 + "*";
  }
  console.log(linha2)
}
