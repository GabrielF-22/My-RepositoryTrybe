const arrayTeste = [20, 3, 6000, 70, 10, 1000];


function numeroM (arrayTeste){
  let indiceMaiorNumero = arrayTeste[0];
  for (let index = 0; index < arrayTeste.length; index+=1) {
    if(indiceMaiorNumero < arrayTeste[index]) {
      indiceMaiorNumero = arrayTeste[index]
    }
  }
  return console.log(indiceMaiorNumero)
}

numeroM()