const fs = require('fs');
const path = require('path');
const marked = require('marked');
const fetch = require('node-fetch');

import {getLinksMd, getMdFiles } from './getAllMds.js'



console.log(getLinksMd(getMdFiles('./test')));

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
             links.state = 'no es url';
             links.message = 'fail';
             resolve(links);
            // return reject(error);
          });
      });
    });
    
    return Promise.all(objLinksValidate);
  };

  const linkStats = arrLinks => ([{
    total: arrLinks.length,
    unique: new Set(arrLinks.map(link => link.href)).size
  }]);

  const validateBroken = arrLinks => arrLinks.filter(link => link.status === 404).length;


  const validateAndStats = arrLinks => ([{
    total: linkStats(arrLinks)[0].total,
    unique: linkStats(arrLinks)[0].unique,
    broken: validateBroken(arrLinks)
  }]);
  

  linksValidate(getLinksMd(getMdFiles('./test')))
  .then(res => console.log(res)); 

// console.log(linksValidate((getLinksMd(getMdFiles('./test')))));
// console.log(process.argv);
console.log(validateAndStats(getLinksMd(getMdFiles('./test'))));