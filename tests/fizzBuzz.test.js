const fizzBuzz = require('../fizzBuzz.js');

test('Muestra fizzBuzz si se el número es divisible en 3 y 5', () =>{
    expect(fizzBuzz(15 / 3, 15 / 5)).toBe(fizzBuzz);
});

test ('Muestra fizz si el número es divisible en 3', () => {
    expect(fizzBuzz(9 / 3)).toBe(fizz);
});

test ('Muestra Buzz si el número es divisible en 5', () => {
    expect(fizzBuzz(25 / 5)).toBe(Buzz);
});

test ('Muestra un número si la condición no se cumple', () => {
    expect(fizzBuzz(7)).toBe(7);
})