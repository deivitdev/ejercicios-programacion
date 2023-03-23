/*
Había un examen en tu clase y lo has aprobado. ¡Enhorabuena!
Pero eres una persona ambiciosa. Quieres saber si eres mejor que el alumno medio de tu clase.
Recibes un array con las puntuaciones de los exámenes de tus compañeros. 
Ahora calcula el promedio y compara tu puntuación.

### Devuelve True si eres mejor, si no, False. 
*/

function betterThanAverage(classPoints, yourPoints) {
  var promedio = 0;
  for (var i = 0; i < classPoints.length; i++) {
    promedio += classPoints[i];
  }
  promedio = promedio / classPoints.length;
  if (yourPoints > promedio) {
    return true;
  } else return false;
}
// estos son los tests para probar que lo que hiciste este bien
console.log(betterThanAverage([4, 2, 2, 5], 5)); // true
console.log(betterThanAverage([8, 7, 8, 5], 6)); // false
