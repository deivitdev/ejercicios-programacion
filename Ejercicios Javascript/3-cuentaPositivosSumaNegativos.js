/*
Dada una matriz de números enteros, se desea obtener una nueva matriz
donde el primer elemento corresponda al número de valores positivos 
presentes en la matriz original, y el segundo elemento sea igual a la 
suma de los valores negativos. Se debe tener en cuenta que el número 0 
no se considera ni positivo ni negativo.
En caso de que la matriz de entrada sea vacía o nula, se debe devolver 
una matriz vacía como resultado.

A modo de ejemplo, si se recibe la siguiente matriz como entrada: 
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], entonces la matriz
 resultante debería ser [10, -65].
*/

function cuentaPositivosSumaNegativos(array) {
  // Escribe tu código aquí
  
}

// estos son los tests para probar que lo que hiciste este bien
console.log(
  cuentaPositivosSumaNegativos([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(cuentaPositivosSumaNegativos([]));
