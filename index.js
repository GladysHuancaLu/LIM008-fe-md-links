
const fs = require('fs');
const path = require('path');

export const pathValidate = (ruta) => {
    return path.resolve(ruta);
};

console.log(pathValidate('./texto.md'));

export const convertDirectory = (ruta) => {
    return lstat(ruta);
    .then(stat => {
        if(stat.isDirectory()){
            return
        }
        else {
            return ruta;
        }
    })
    

}