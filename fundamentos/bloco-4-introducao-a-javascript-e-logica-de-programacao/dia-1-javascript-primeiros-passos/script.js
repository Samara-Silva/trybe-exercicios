// Exercício 1: Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:

const a = 10;
const b = 5;

console.log ('Soma: ' + (a + b));
console.log ('Subtração: ' + (a - b));
console.log('Multipĺicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Exercício 2 : Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

// Exercício 3 : Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.

const a = 6;
const b = 4;
const c = 2;

if (a > b && a > c) {
    console.log('O maior número é: ' + a + ' (a)'); 
} else if (b > a && b > c) {
    console.log ('o maior número é ' + b + ' (b)');
} else {
    console.log('O maior número é: ' + c + ' (c)');
};

// Exercício 4: Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.

const number = 10;

if (number > 0) {
    console.log('positive');
} else if (number < 0) {
    console.log('negative');
} else {
    console.log('zero');
}

