let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
};

console.log ("O livro favorito de " + leitor.nome + leitor.sobrenome + " é " + leitor.livrosFavoritos[0].titulo)

leitor.livrosFavoritos.push(
  {
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
  },
)

console.log(leitor.livrosFavoritos[1])

console.log(leitor.nome + " " + leitor.sobrenome + " tem " + leitor.livrosFavoritos.length + " livros FAVORITOS")