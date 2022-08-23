let n = 5;
let linha = '';

for (let index = 1; index <= n; index +=1) {
  let linha = '';
  for (let index2 = 0; index2 < n; index2 +=1) {
    if (index2 < n- index) {
      linha = linha + ' ';
    } else {
      linha = linha + '*'
    }
  }
  console.log(linha)
}