const noCanonicos = require('../dna.js');

test('Muestra la nueva cadena que se formó', () =>{
    expect(noCanonicos()).toBe('cadena');
});

test('Muestra la nueva cadena', () =>{
    expect(noCanonicos(10, 10)).toBe('nueva cadena');
});
