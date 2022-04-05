function numeroAleatorio(min, max) {
    return Math.round(Math.random() * (max - min) + min);
};

const num = numeroAleatorio(1, 10);
const fil_num = numeroAleatorio(1, 10);
const col_num = numeroAleatorio(1, 10);

console.log(num, col_num, fil_num)

let matriz_uno = [];
let matriz_dos = [];
let matriz_resul = [];

for (let i = 0; i < fil_num; i++) {
    matriz_uno[i] = [];
    for (let j = 0; j < num; j++) {
        matriz_uno[i][j] = numeroAleatorio(1, 100);
    }
};

for (let i = 0; i < num; i++) {
    matriz_dos[i] = [];
    for (let j = 0; j < col_num; j++) {
        matriz_dos[i][j] = numeroAleatorio(1, 100);
    }
};

for (let i = 0; i < fil_num; i++) {
    matriz_resul[i] = new Array(col_num).fill(0);
    for (let j = 0; j < col_num; j++) {
        for (let k = 0; k < num; k++) {
            matriz_resul[i][j] += matriz_uno[i][k] * matriz_dos[k][j];
        };
    };
};

console.log('Matriz A')
for (let i = 0; i < fil_num; i++) {
    console.log(matriz_uno[i].join(' '));
};

console.log('Matriz B')
for (let i = 0; i < num; i++) {
    console.log(matriz_dos[i].join(' '));
};

console.log('Matriz resultante')
for (let i = 0; i < fil_num; i++) {
    console.log(matriz_resul[i].join(' '));
};