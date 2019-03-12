import {getLinksMd, getMdFiles } from './getAllMds.js'

const options = {
    validate: false,
    stats: false
  };

  export const mdLinks = (path, options) => {
    if(options.validate== false && options.stats== false){
        return getLinksMd(getMdFiles(path));
    }
    else if(options.validate== true && options.stats== false){
        return linksValidate(getLinksMd(getMdFiles(path)));
    }
    else if(options.validate== false && options.stats== true){
        return linkStats(getLinksMd(getMdFiles(path)));
    }
    else if(options.validate== true && options.stats== true){
        return validateAndStats(getLinksMd(getMdFiles(path)));
    }
  }