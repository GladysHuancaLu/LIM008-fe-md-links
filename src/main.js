import {getLinksMd, getMdFiles } from './getAllMds.js'
import {linksValidate, linkStats, validateAndStats } from './getAllMds.js'

const options = {
    validate: false,
    stats: false
  };

  export const mdLinks = (path, options) => {
      return new Promise((res,rej)=>{
        if(options.validate== false && options.stats== false){
            res (getLinksMd(getMdFiles(path)));
        }
        else if(options.validate== true && options.stats== false){
            res (linksValidate(getLinksMd(getMdFiles(path))));
        }
        else if(options.validate== false && options.stats== true){
            res (linkStats(getLinksMd(getMdFiles(path))));
        }
        else if(options.validate== true && options.stats== true){
            res (validateAndStats(getLinksMd(getMdFiles(path))));
        }
      })
  }

  console.log(mdLinks(".../test", options));