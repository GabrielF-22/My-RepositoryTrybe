let nota = 55;
let notaValida = nota > 0 && nota < 100

if (notaValida) {
    if (nota >= 90) {
        console.log('A')
    }
    else if (nota < 90 && nota >=80) {
        console.log('B')
    }
    else if (nota < 80 && nota >=70) {
        console.log('C')
    }
    else if (nota < 70 && nota >=60) {
        console.log('D')
    }
    else if (nota < 60 && nota >= 50) {
        console.log('E')
    }
    else {
        console.log('F')
    }
} else {
    console.log('ERROR! Nota inválida')
}

/* Uma outra possibilidade de fazer esse exercício
const grade = 76;

if (grade < 0 || grade > 100) {
  console.log("Erro, nota incorreta!");
} else if (grade >= 90) {
  console.log("A");
} else if (grade >= 80) {
  console.log("B");
} else if (grade >= 70) {
  console.log("C");
} else if (grade >= 60) {
  console.log("D");
} else if (grade >= 50) {
  console.log("E");
} else {
  console.log("F");
}*/