/*
-------- 1 ----------

for (let i; i <= 15; i++) {
    let altura = Number(prompt("Digite sua altura"))

}
*/


/*
-------- 2 ----------

let pedro = 150
let lucas = 110

for (let i = 0; lucas <= pedro; i++) {
    lucas += 3
    pedro += 2

    if (lucas === pedro) {
        console.log("Lucas e Pedro tem a mesma altura em " + i + " anos")
    }
}
lucas = 110
pedro = 150
i = 0
for (let i = 0; lucas <= pedro; i++) {
    lucas += 3
    pedro += 2

    if (lucas > pedro) {
        console.log("Lucas é maior que Pedro em " + i + " anos")
    }

}
*/


/*

-------- 3 ----------

let numero = Number(prompt("Digite um numero"))
for (let i = 0; i <= 10; i++) {
    console.log(i + " x " + numero + " = " + i * numero)
}
*/

/*

-------- 4 ----------

for (let i = 0; i <= 250; i++) {
    if (i % 3 === 0) {
        console.log("Esse numero é multiplo de 3: " + i)
    }
    if (i % 5 === 0) {
        console.log("Esse numero é multiplo de 5: " + i)
    }
}
*/

/*

-------- 5 ----------

let valor = Number(prompt("Digite um valor"))
for (let i = 0; i <= valor; i++) {
    console.log(i)
}
*/

/*

-------- 6 ----------

for (let i = 30; i >= 1; i--) {
    let divisores = 0;
    for (let x = 1; x <= i; x++) {
        if (i % x === 0) {
            divisores++;
        }
    }
    if (divisores === 2) {
        console.log("[" + i + "]");
    } else {
        console.log(i);
    }
}
*/

/*
-------- 7 ----------


let soma = 0;
let Positivos = 0;
let Negativos = 0;

for (let i = 0; i < 10; i++) {
    let numero = Number(prompt(`Digite o ${i + 1}º número:`));
    soma += numero;

    if (numero > 0) {
        Positivos++;
    } else if (numero < 0) {
        Negativos++;
    }
}

let media = soma / 10;
let percentualPositivos = (Positivos / 10) * 100;
let percentualNegativos = (Negativos / 10) * 100;

console.log("Média aritmética: " + media);
console.log("Quantidade de valores positivos: " + Positivos);
console.log("Quantidade de valores negativos: " + Negativos);
console.log("Percentual de valores positivos: " + percentualPositivos + "%");
console.log("Percentual de valores negativos: " + percentualNegativos + "%");
*/
