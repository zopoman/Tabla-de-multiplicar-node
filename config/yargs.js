const argv = require ('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe:'Se ingresa un numero para multiplicar'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe:'Decide si muestra o no la multiplicacion'
                })
                .option('h',{
                    alias: 'hasta',
                    type: 'number',
                    demandOption: true,
                    describe:'Se ingresa un numero limitar el for de la multiplicacion'
                })
                .check( (argv, options) => {
                    if(isNaN( argv.b )){                      
                        throw 'Ingresa un numero';
                    }else if(isNaN( argv.h )){
                        throw 'Ingresa un numero';
                    }else{
                        return true;
                    }
                })
                .argv;
module.exports = argv;