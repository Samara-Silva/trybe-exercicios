const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const turnoNoite = (obj, key, value) => {
    obj[key] = value;
};

turnoNoite(lesson2, 'turno', 'noite');

const listaDeKeys = (obj) => Object.keys(obj);
console.log(listaDeKeys(lesson1));


const tamanhoObjeto = (obj) => Object.keys(obj).length;
console.log(tamanhoObjeto(lesson1));

const listaDeValores = (obj) => Object.values(obj);
console.log(listaDeValores(lesson1));

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

console.log(allLessons);

const numeroTotalDeEstudantes = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (index in array) {
        total += obj[array[index]].numeroEstudantes;
    }
    return total;
};

console.log(numeroTotalDeEstudantes(allLessons));

const valorPosObj = (obj, number) => Object.values(obj)[number];
console.log(valorPosObj);

const verificaPar = (obj, key, value) => {
    const numero = Object.entries(obj);
    let impar = false;
    for (let index in numero) {
        if (numero[index][0] === key && numero[index][1] === value) impar = true;
    }
    return impar;
};

console.log(verificaPar(lesson2, 'professor', 'Carlos'));