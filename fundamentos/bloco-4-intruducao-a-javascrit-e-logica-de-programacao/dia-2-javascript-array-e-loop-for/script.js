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

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
 let maiorNumero = numbers[0];

 for (let index = 0; index < numbers.length; index += 1) {
if (numbers[index] > maiorNumero) {
    maiorNumero = numbers[index];
}
 };

 console.log(maiorNumero);
