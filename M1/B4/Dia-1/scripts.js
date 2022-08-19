let n1 = 80;
let statusDaPessoa;
switch (n1) {
  case n1 >= 80:
    statusDaPessoa = 'Parabéns';
    break;

  case n1 < 80 && nota >= 60:
    statusDaPessoa = 'Lista';
    break;

  case n1 < 60:
    statusDaPessoa = 'Reprovado';
    break;

    default:
      statusDaPessoa = 'Não se aplica';
}
console.log(statusDaPessoa)