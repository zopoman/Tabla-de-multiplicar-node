const fs = require('fs');
const crearArchivo = async (base = 5, listar = false, hasta = 10) =>{
        try {
            if(listar){
                let salida = '';
                for(let i = 1 ; i <= hasta; i++){
                    salida +=`${base} X ${i} = ${base * i}\n`;
                }
                console.log(salida);
            
                fs.writeFileSync(`./tablas/tablaDel${base}.txt`, salida);
            
                return('Tabla exportada de manera exitosa');
            }else{
                return false;
            }

        } catch (error) {
            throw error
        }

}

module.exports = {
    crearArchivo
}