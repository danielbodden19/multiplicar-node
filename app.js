const argv = require('./config/yargs').argv;
const colors = require('colors');
const { crearArchivo, listartabla } = require('./multiplicar/multiplicar');

let comado = argv._[0];
switch (comado) {
    case 'listar':
        listartabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('comando no reconocido');
}
// console.log(argv);
// console.log(process.argv);
// let parametro = argv[2];
// let base = parametro.split('=')[1];