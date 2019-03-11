const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

import {validateDirectory} from './getAllMds.js'

const getLinksMd = (arrayFiles) => {
    const arrLinks = [];
    arrayFiles.forEach(file => {
      const fileMd = fs.readFileSync(file, 'utf8');
      const renderer = new marked.Renderer();
      renderer.link = (href, title, text) => {
        arrLinks.push({
          text: text,
          href: href,
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

// const validateEachLink = ({ text, href, file }) => fetch(href)
//   .catch(() => ({
//     status: 404,
//     // statusText: 'Fail'
//   }))
//   .then(response => ({text, href, file,
//     status: response.status,
//     // statusText: response.statusText
//   }));

// const validateLinks = arrLinks => Promise.all(arrLinks.map(objLink => validateEachLink(objLink)) );

export const linksValidate = (arrObjLinks) => {  
    const objLinksValidate = arrObjLinks.map((linkObj) => {
      return new Promise((resolve, reject) => {
        fetch(linkObj.href)
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              linkObj.status = response.status;
              linkObj.message = response.statusText; 
              resolve(linkObj);            
            } else {
              linkObj.status = response.status;
              linkObj.message = 'Fail'; 
              resolve(linkObj); 
            }
          }).catch(error => {
            return reject(error);
          });
      });
    });
    
    return Promise.all(objLinksValidate);
  };

  const linkStats = arrLinks => ([{
    total: arrLinks.length,
    unique: new Set(arrLinks.map(link => link.href)).size
  }]);

  const validateLinksBroken = arrLinks => arrLinks.filter(link => link.status === 404).length;


  const validateBothOptions = links => ([{
    total: linkStats(links)[0].total,
    unique: linkStats(links)[0].unique,
    broken: validateLinksBroken(links)
  }]);
  

  linksValidate(getLinksMd(mdLinks('./test')))
  .then(res => console.log(res)); 

// console.log(linksValidate((getLinksMd(mdLinks('./test')))));
// console.log(process.argv);
console.log(validateBothOptions(getLinksMd(mdLinks('./test'))));