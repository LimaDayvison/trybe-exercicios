const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  const nomeAutor = () => {
    return books.find( (book) => book.author.birthYear === 1947).author.name;
  }

  const menorTitulo = () => {
    let tituloLivro;
    books.forEach( (book) => {
        if (!tituloLivro || book.name.length < tituloLivro.length){
            tituloLivro = book.name;
        }

    });
    return tituloLivro;
  }

  console.log(menorTitulo())

  const pegaTituloLivro = () => {
    return books.find((book) => book.name.length === 26);
  }

  console.log(pegaTituloLivro())



  const todosSeculoXX = () => {
    return books.every((book) => {
        book.author.birthYear >= 1901 && book.author.birthYear <= 2000;
    })
  };

  console.log(todosSeculoXX())


  const anoLancamentoLivros = () => {
    return books.some((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
  }

  console.log(anoLancamentoLivros())