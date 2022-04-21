// Exercício 1

const a = 10;
const b = 5;

console.log ('Soma: ' + (a + b));
console.log ('Subtração: ' + (a - b));
console.log('Multipĺicação: ' + (a * b));
console.log('Divisão: ' + (a / b));
console.log('Módulo: ' + (a % b));

// Exercício 2

if (a > b) {
    console.log("'a' é maior que 'b'");
} else {
    console.log("'b' é maior que 'a'");
};

// Exercício 3

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
