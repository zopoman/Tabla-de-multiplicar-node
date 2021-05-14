const { number } = require('yargs');
const argv = require('./config/yargs')
const yargs = require('yargs');
const{crearArchivo}= require('./helpers/multiplicar');

console.clear();

// console.log(process.argv);
console.log(argv);
//const base = 1;

console.log('base: yargs', argv.b);
console.log('listar: yargs', argv.l);
console.log('hasta: yargs', argv.h);

crearArchivo(argv.b, argv.l, argv.h)
    .then(salida => console.log(salida))
    .catch(err => console.log(err))
    // const [,,arg3 = 'base=3'] = process.argv;
    // const [,base = 5] = arg3.split('=');