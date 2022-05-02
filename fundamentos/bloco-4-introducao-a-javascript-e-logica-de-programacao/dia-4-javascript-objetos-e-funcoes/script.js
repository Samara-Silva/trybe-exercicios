// 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };


// console.log('Bem vinda,' + ' ' + info.personagem);


//2

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//     recorrente: 'Sim'
// };

// let info2 = {
//     personagem: 'e Tio Patinhas',
//     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
//     nota: 'e O último MacPatinhas',
//     recorrente: 'Ambos recorrentes',
// }

// for (index in info) {
//     console.log(info[index]);
// };

// for (index in info2) {
//     console.log(info2[index]);
// }


// let leitor = {
//   nome: 'Julia',
//   sobrenome: 'Pessoa',
//   idade: 21,
//   livrosFavoritos: [
//     {
//       titulo: 'O Pior Dia de Todos',
//       autor: 'Daniela Kopsch',
//       editora: 'Tordesilhas',
      
//     },
//     {
//       titulo: 'Harry Potter e o Prisioneiro de Azkaban',
//       autor: 'JK Rowling',
//       editora: 'Rocco',
//     },
//   ],
// };


//   console.log(leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos');



// PARTE 2 - FUNÇÃO

//Exercício 1 - 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
// Exemplo de palíndromo: arara .
// verificaPalindrome('arara') ;
// Retorno esperado: true
// verificaPalindrome('desenvolvimento') ;
// Retorno esperado: false


// function verificaPalindrome(string) {
//   let reverse = string.split('').reverse().join('');
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(verificaPalindrome('arara'));
// console.log(verificaPalindrome('desenvolvimento'));

// Exercício 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
// Array de teste: [2, 3, 6, 7, 10, 1]; .
// Valor esperado no retorno da função: 4 .

// function indiceDoMaior(numeros) {
//   let indiceMaior = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMaior] < numeros[indice]) {
//       indiceMaior = indice;
//     }
//   }
//   return indiceMaior;
// }

// console.log(indiceDoMaior([2, 3, 6, 7, 10, 1]))

// Exercício 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
// Valor esperado no retorno da função: 6 .

// function indiceDoMenor(numeros) {
//   let indiceMenor = 0;
//   for (let indice in numeros) {
//     if (numeros[indiceMenor] > numeros[indice]) {
//       indiceMenor = indice;
//     }
//   }
//   return indiceMenor;
// };

// console.log(indiceDoMenor([2, 4, 6, 7, 10, 0, -3]));

// Exercício 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
// Valor esperado no retorno da função: Fernanda .

function maiorPalavra(palavras) {
  let maiorPalavra = palavras[0];
  for (let indice in palavras) {
    if (maiorPalavra.length < palavras[indice].length) {
      maiorPalavra = palavras[indice];
    }
  }
  return maiorPalavra;
};

console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));