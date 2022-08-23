let player = {
name: 'Marta',
lastName: 'Silva',
age: 34,
medals: { golden: 2, silver: 3 }
}; 

console.log("A jogadora " + player.name +" "+ player.lastName + " tem " + player.age + " anos de idade")
console.log("A jogadora " + player.name + " " + player.lastName + " foi eleita a melhor do mundo por " + player.bestInTheWorld.length + " vezes" )


console.log("A Jogadora " + player.name + " possui " + player.medals.golden + " medalhas de OURO" + " e " + player.medals.silver + " medalhas de PRATA.")

player.bestInTheWorld = [2006, 2007, 2008, 2009, 2010, 2018];
console.table(player)