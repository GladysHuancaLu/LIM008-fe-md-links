import {getLinksMd, getMdFiles } from './controller/getAllMds.js'
import {linksValidate} from './controller/option.js'



  export const mdLinks = (path, options) => {
      return new Promise((res,rej)=>{
        if(options.validate){
            res (linksValidate(getLinksMd(getMdFiles(path))));
        }
        else{
            res (getLinksMd(getMdFiles(path)));
        }
      })
  }

  