const fs = require('fs');
const colors = require('colors');

let listartabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        console.log('============='.blue);
        console.log(`tabala de ${base}`.blue);
        console.log('============='.blue);

        for (let i = 0; i <= limite; i++) {
            let x = base * i;
            resolve(console.log(`${base} * ${i} = ${x}\n`));

        }
    })
}
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`La base introducida ${base} no es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            let x = base * i;
            data += `${base} * ${i} = ${x}\n`;
        }

        fs.writeFile(`tablas/Tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`Tabla-${base}.txt`);
        });
    });
}

module.exports = {
    crearArchivo,
    listartabla
}