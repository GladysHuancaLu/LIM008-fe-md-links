const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');


// console.log(getMdFiles('./test'));
// console.log(getLinksMd(getMdFiles('./test')));

export const linksValidate = (linksArr) => {  
    const objLinksValidate = linksArr.map((links) => {
      return new Promise((resolve, reject) => {
        fetch(links.href)
          .then(response => {
            if (response.status >= 200 && response.status < 300) {
              links.status = response.status;
              links.message = response.statusText; 
              resolve(links);            
            } else {
              links.status = response.status;
              links.message = 'Fail'; 
              resolve(links); 
            }
          }).catch(error => {
             links.status = 'no es url';
             links.message = 'fail';
             resolve(links);
            // return reject(error);
          });
      });
    });
    
    return Promise.all(objLinksValidate);
  };

  export const linkStats = arrLinks => ([{
    total: arrLinks.length,
    unique: new Set(arrLinks.map(link => link.href)).size
  }]);

  export const validateBroken = arrLinks => arrLinks.filter(link => parseInt(link.status) === 404).length;


  export const validateAndStats = arrLinks => ([{
    total: linkStats(arrLinks)[0].total,
    unique: linkStats(arrLinks)[0].unique,
    broken: validateBroken(arrLinks)
  }]);
  
//   // Resultado de solo path:
// console.log(getLinksMd(getMdFiles('./test')));
// // Resultado de validate:
//   linksValidate(getLinksMd(getMdFiles('./test'))).then(res => console.log(res)); 
// // Resultado de stats:
//   linksValidate(getLinksMd(getMdFiles('./test'))).then(res => console.log(linkStats(res))); 


// // Resultado de validate y stats:
// linksValidate(getLinksMd(getMdFiles('./test'))).then(res => console.log(validateAndStats(res))); 
