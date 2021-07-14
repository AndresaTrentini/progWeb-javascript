const valorInicial = 13;
const razao = 5;
const quantidade = 5;
let soma = 0
let elemento;

elemento = valorInicial;
for (var contador = 0; contador < quantidade; cotador++)
{
    console.log(elemento);
    elemento += razao;
    soma += elemento;
}
console.log(`soma = ${soma}` );