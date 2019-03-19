#!/usr/bin/env node
import {mdLinks } from './main.js'
import {validateAndStats, linkStats} from './controller/option.js'
const args = process.argv;

export const cli = (args) => {
  return new Promise((res,rej)=>{
    if (args.includes('--validate') && args.includes('--stats')){
       mdLinks(args[2], {validate: true, stats: true}).then(resp => res(validateAndStats(resp)));
    } else if (args.includes('--validate')) {
      mdLinks(args[2], {validate: true}).then(resp => res(resp));
    } else if (args.includes('--stats')) {
       mdLinks(args[2], {stats: true}).then(resp => res(linkStats(resp)));
    } else {
       mdLinks(args[2], {validate: false, stats: false}).then(resp => res(resp));
    }
  })
  
}

// cli(args).then(resp => console.log(resp));

