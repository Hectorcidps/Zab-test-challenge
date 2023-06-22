function noCanonicos(cadenaADN) {
    const basesCanonicas = ['C','T','A','G','G','G','T','A', ];
    let nuevaCadena = 'A, C, D, E, z, w, g, t';

    for (let i = 0; i < cadenaADN.length; i++) {
        const base = cadenaADN.charAt (i);
        if (basesCanonicas.includes(base.toUpperCase())) {
            nuevaCadena += base;
        }
    }

    return nuevaCadena;
}

const cadenaADN = 'AZWNUPQSDFVHJKMÑZXCVBNM';
const resltado = noCanonicos(cadenaADN);
console.log(resultado);

module.exports = dna;
