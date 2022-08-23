//Exercício de Fixação 1
let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let index in names) {
  console.log("OLÁ " + names[index])
}

// Exercício de fixação 2

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let indice in car) {
  console.log(indice + ": " + car[indice])
}