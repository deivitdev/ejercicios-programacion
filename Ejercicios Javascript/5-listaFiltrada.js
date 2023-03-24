/*
En este ejercicio, deberás crear una función que tome como entrada 
una lista de números enteros y cadenas de texto, y devuelva una nueva 
lista que contenga únicamente los números enteros de la lista 
original, excluyendo cualquier cadena de texto.

Por ejemplo:

listaFiltrada([1,2,'a','b']) == [1,2]
listaFiltrada([1,'a','b',0,15]) == [1,0,15]
listaFiltrada([1,2,'aasf','1','123',123]) == [1,2,123]

Pista: investiga el operador typeof para saber si un elemento es un número o no.

*/

function listaFiltrada(array) {
  // Escribe tu código aquí
  
}

// estos son los tests para probar que lo que hiciste este bien
console.log(listaFiltrada([1, 2, "a", "b"]));
console.log(listaFiltrada([1, "a", "b", 0, 15]));
console.log(listaFiltrada([1, 2, "aasf", "1", "123", 123]));