// // Exercício 1:Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log();

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index]);
// };

// // Exercício 2: Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//     resultado += numbers[index];
// }

// console.log(resultado);

//Exercício 3: Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// let soma = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     soma += numbers[index];
// }

// let media = soma / numbers.length;

// console.log(media);

// Exercício 4: Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;

// for (let index = 0; index < numbers.length; index += 1){
//     resultado += numbers[index];
// }
// resultado = resultado / numbers.length;

// if (resultado > 20) {
//     console.log('valor maior que 20');
// } else {
//     console.log('valor menor ou igual a 20');
// }

//Exercicio 5: Utilizando for , descubra qual o maior valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//  let maiorNumero = numbers[0];

//  for (let index = 0; index < numbers.length; index += 1) {
// if (numbers[index] > maiorNumero) {
//     maiorNumero = numbers[index];
// }
//  };

//  console.log(maiorNumero);

//Exercício 6: Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let resultado = 0;


// for (let index = 0; index < numbers.length; index += 1) {
//     if (numbers[index] % 2 !== 0) {
//         resultado += 1;
//     }
// }

// if (resultado === 0) {
//     console.log('nenhum valor impar encontrado');
// } else {
//     console.log(resultado);
// }

//Exercício 7: Utilizando for , descubra qual o menor valor contido no array e imprima-o;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let menorNumero = numbers[0];

// for (let index = 1; index < numbers.length; index += 1){
//     if (numbers[index] < menorNumero) {
//         menorNumero = numbers[index];
//     }
// }

// console.log(menorNumero);

//Exercício 8: Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;

// let arrayDeNumeros = [];

// for (let index = 0; index <= 25; index += 1) {
//     arrayDeNumeros.push(index);
// };

// console.log(arrayDeNumeros);

// Exercício 9: Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2.

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 0; index < numbers.length; index += 1) {
//     console.log(numbers[index] / 2);
// };


// BONUS : Exercício 1 : Ordene o array numbers em ordem crescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1){
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] < numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }

// console.log(numbers);

// BONUS : Exercício 2: Ordene o array numbers em ordem decrescente e imprima seus valores;

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1){
//     for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//         if (numbers[index] > numbers[secondIndex]) {
//             let position = numbers[index];
//             numbers[index] = numbers[secondIndex];
//             numbers[secondIndex] = position;
//         }
//     }
// }

// console.log(numbers);

// BONUS : Exercício 3:Agora crie um novo array a partir do array numbers , sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let novoArray = [];

for (let index = 0; index < numbers.length; index += 1) {
    if (index + 1 < numbers.length) {
        novoArray.push(numbers[index] * numbers[index + 1]);
    } else { 
        novoArray.push(numbers[index] * 2);
    }
}

console.log(novoArray);
