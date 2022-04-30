// // Exercício 1: O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:

// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24

// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorialDe10 =  1;

// for (let index = 10; index > 0; index -= 1) {
//     fatorialDe10 *= index;
// }

// console.log(fatorialDe10);

// Exercicio 2: 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'tryber';

let palavraInvertida = '';

for (let index = 0; index < word.length; index += 1) {
    palavraInvertida += word[word.length - 1 - index];
}

console.log(palavraInvertida);