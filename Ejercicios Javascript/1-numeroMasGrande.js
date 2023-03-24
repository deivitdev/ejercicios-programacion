/* Escribe un programa para encontrar el número mayor de una lista de números.

*/
function encuentraElNumeroMayor( listaNumeros) {
  // Escribe tu código aquí
  return Math.max.apply(null, listaNumeros);  
  
}
// estos son los tests para probar que lo que hiciste este bien
console.log(encuentraElNumeroMayor([8, 7, 10, 5, 6, 4, 3, 2, 1, 0])) // 10
console.log(encuentraElNumeroMayor([2,5,3,4,1,6,7,8])) // 8