const calculadora = require('../calculadora');

//console.log(calculadora.division);

//prueba unitaria
test('Debe sumar numero a + b', () => {
    expect(calculadora.suma(10, 10)).toBe(20);
})

//prueba unitaria
test('Debe restar numero a - b', () => {
    expect(calculadora.resta(20, 10)).toBe(10);
})

//prueba unitaria
test('Debe sumar numero a * b', () => {
    expect(calculadora.multiplicacion(5, 5)).toBe(25);
})

//prueba unitaria
test('Debe sumar numero a / b', () => {
    expect(calculadora.division(10, 2)).toBe(5);
})

//prueba unitaria
test('Debe sumar numero a + b', () => {
    expect(calculadora.suma(10, 10)).toBe(20);
    expect(calculadora.resta(20, 10)).toBe(10);
    expect(calculadora.multiplicacion(5, 5)).toBe(25);
    expect(calculadora.division(10, 2)).toBe(5);
})

