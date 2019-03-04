const fs = require('fs');
const path = require('path');

export const pathValidate = (ruta) => {
    return path.resolve(ruta);
};

export const validateDirectory = (ruta) => {
    return fs.lstatSync(ruta).isDirectory() ? true:false;
}
