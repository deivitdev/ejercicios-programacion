/* 
Crear un programa que devuelva los array de números del 1 al 15, 
pero que, para los múltiplos de 4, imprima la palabra "pin" en lugar del número.

Pista 1: investiga el operador % para saber si un número es múltiplo de otro.
Pista 2: investiga el método push() para agregar un elemento a un array.

*/
function numeroPorPalabra() {
  // Escribe tu código aquí
  let arr = [];
  for (let i = 1; i <= 15; i++)
    if (i % 4 == 0) {
      arr.push('pin');
    } else {
      arr.push(i);
    }
  return arr;
}

console.log(numeroPorPalabra());
// [ 1, 2, 3, 'pin', 5, 6, 7, 'pin', 9, 10, 11, 'pin', 13, 14, 15 ]
