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

// function maiorPalavra(palavras) {
//   let maiorPalavra = palavras[0];
//   for (let indice in palavras) {
//     if (maiorPalavra.length < palavras[indice].length) {
//       maiorPalavra = palavras[indice];
//     }
//   }
//   return maiorPalavra;
// };

// console.log(maiorPalavra(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']));


// Exercício 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
// Valor esperado no retorno da função: 2 .

// function maisRepetido(numeros) {
//   let contRepetido = 0;
//   let contNumero = 0;
//   let indexNumeroRepetido = 0;
//   for (let index in numeros) {
//     let verificaNumero = numeros[index];
//     for (let index2 in numeros) {
//       if(verificaNumero === numeros[index2]) {
//         contNumero += 1;
//       }
//     }
//     if (contNumero > contRepetido) {
//       contRepetido = contNumero;
//       indexNumeroRepetido = index;
//     }
//     contNumero = 0;
//   }
//   return numeros[indexNumeroRepetido];
// };

// console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

// Exercício 6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.
// Valor de teste: N = 5 .
// Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

// function somaTodasNumeros(numeros) {
//   let total = 0;
//   for (let index = 1; index <= numeros; index += 1) {
//     total = total + index;
//   }
//   return total;
// }

// console.log(somaTodasNumeros(5));

// Exercício 7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
// Valor de teste: 'trybe' e 'be'
// Valor esperado no retorno da função: true
// verificaFimPalavra('trybe', 'be') ;
// Retorno esperado: true
// verificaFimPalavra('joaofernando', 'fernan') ;
// Retorno esperado: false

function verificaFimPalavra(palavra, fimPalavra) {
  palavra = palavra.split('');
  fimPalavra = fimPalavra.split('');
  controle = true;
  for(let index = 0; index < fimPalavra.length; index +=1) {
    if (palavra[palavra.length - fimPalavra.length + index] != fimPalavra[index]) {
      controle = false;
    }
  }
  return controle;
};

console.log(verificaFimPalavra('trybe', 'be')); 
console.log(verificaFimPalavra('joaofernando', 'fernan')); 