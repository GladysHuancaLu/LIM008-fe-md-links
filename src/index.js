const fs = require('fs');
const path = require('path');
const marked = require('marked');

import {validateDirectory} from './getAllMds.js'

const getLinksMd = (arrayFiles) => {
    const arrLinks = [];
    arrayFiles.forEach(file => {
      const fileMd = fs.readFileSync(file, 'utf8');
      const renderer = new marked.Renderer();
      renderer.link = (href, title, text) => {
        arrLinks.push({
          href: href,
          text: text,
          file: file
        });
      };
      marked(fileMd, { renderer })
    })
    return arrLinks;
};

const mdLinks = (path1) => {
    let arrFile= [];
    const leeDirectorio = fs.readdirSync(path1)
    leeDirectorio.forEach((file)=> {
        const pathSon= path.join(path1,file);
        if(validateDirectory(pathSon)){
            arrFile = arrFile.concat(mdLinks(pathSon));
        }
        else if(path.extname(pathSon)=== '.md'){
            arrFile.push(pathSon);
        }
    });
    return arrFile;
}

console.log(getLinksMd(mdLinks('./test')));




// mdLinks('./test');

