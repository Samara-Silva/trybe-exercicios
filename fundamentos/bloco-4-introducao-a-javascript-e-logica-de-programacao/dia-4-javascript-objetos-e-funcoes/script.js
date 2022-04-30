// 1

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };


// console.log('Bem vinda,' + ' ' + info.personagem);


//2

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
};

let info2 = {
    personagem: 'e Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'e O último MacPatinhas',
    recorrente: 'Ambos recorrentes',
}

for (index in info) {
    console.log(info[index]);
};

for (index in info2) {
    console.log(info2[index]);
}

