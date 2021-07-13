var contador = 1;
var limite = 3;
console.log('### while');
while(contador <= limite) {
    console.log('contador');
    //contador = contador + 1;
    contador += 1;
    //contador++
}
limite = 3
contador = 1
console.log('### DO WHILE');
do {
    console.log(contador);
    contador++

} while(contador <=limite);

console.log('### FOR');
for (var i = 1; i <= limite; i++)
{
    console.log(i);
  
}


