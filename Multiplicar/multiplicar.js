// require
const fs = require('fs');
const colors = require('colors');

// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor ${base}, no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${ base } * ${ i } = ${ base * i }\n`);
        }

        //  vamos a escribir a fichero

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });
    });
};
// 
// 
let listarTabla = (base, limite = 10) => {

    console.log('========================'.red);
    console.log(`-- Tabla de ${ base} al ${limite} --`.green);
    console.log('========================'.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${ base } * ${ i } = ${ base * i }\n`);
    }

}

module.exports = {
    crearArchivo,
    listarTabla
}