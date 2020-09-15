//  TENEMOS ESTAS DOS MANERAS DE ACCEDER A LA FUNCION
// const mt = require('./Multiplicar/multiplicar');

// let base = 5;

// mt.crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`));
// ------------------------------




const argv = require('./config/yargs').argv;

const colors = require('colors');

const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar');



let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(err => console.log(err));
        break;
    default:
        console.log('no reconocido');

}

// console.log(argv);
// console.log(process); -----> aqui hay mucha informacion importante
let argv2 = process.argv; // aqui se guardan los parametros

// let parametro = argv[2];
// let base = parametro.split('=')[1];

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado: ${ archivo }`))
//     .catch(err => console.log(err));