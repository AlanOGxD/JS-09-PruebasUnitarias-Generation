/*

Las pruebas unitarias son una parte fundamental de la ingenieria de software, tiene como objetivo verificar la funcionalidad de una unidad de codigo. Vamos a entender por unidad de codigo a la parte mas pequenia que se puede "testear" o probar en una aplicacion, por ejemplo:

    - Ciclos
    - Funciones
    - Metodos
    - Etc.


Realizar pruebas unitarias tiene demasiadas ventajas, ya que nos va a permitir asegurarnos que el codigo funciona segun lo esperado, ademas nos va a ayudar a encontrar errores de forma mucho mas sencilla, para realizar las modificaciones necesarias sin comprometer el codigo.

Tambien nos ayuda a garantizar que el codigo sigue evolucionando o escalando, permitiendo que las caracteristicas anteriores sigan funcionando y no se "rompan" con los nuevos cambios

*/

//Escenario ficticio
function promedio(cal1, cal2, cal3) {
    let promedio = (cal1 + cal2 + cal3) / 3;

    //ciclo calcular aprobado o reprobado

    if (promedio >= 6) {
        console.log("Felicidades, Aprobaste");
    } else {
        console.log("Necesitas estudiar mas, estas reprobado");
    }
}

promedio(6, 7, "8");//promedio 7
//que pasa si no ingreso las tres calificaciones?
//Que sucede si una de estas calificaciones es un valor no numerico?
//que pasa si una de mis calificaciones es un valor negativo



//Creamos una calculadora basica que trabaja con las 4 operaciones fundamentales (suma, resta, multiplicacion, divisio)

//Suma
function suma(num1, num2) {
    return num1 + num2;
}

//resta
function resta(num1, num2) {
    return num1 - num2;
}

//multiplicacion
function multiplicacion(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

/*

Para manejar nuestras pruebas unitarias, utilizamos JEST

    - JUnit (JAVA)
    - NUnit (.NET)
    - pytest (Python)
    - JEST (JS)

JEST es un marco de pruebas de JS mantenido por FB, enfocado a hacer pruebas unitarias de la forma mas simple posible. 

Para poder trabajar con JEST, necesitamos algunas consideraciones:
*/

module.exports = { division, suma, resta, multiplicacion };