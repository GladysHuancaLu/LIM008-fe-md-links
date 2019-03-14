#!/usr/bin/env node
import {mdLinks } from './main.js'
import {validateAndStats, linkStats} from './controller/option.js'
const args = process.argv;
// console.log(process.argv);

if (args.includes('--validate') && args.includes('--stats')){
  mdLinks(args[2], {validate: true, stats: true}).then(resp => console.log(validateAndStats(resp)));
} else if (args.includes('--validate')) {
  mdLinks(args[2], {validate: true}).then(resp => console.log(resp));
} else if (args.includes('--stats')) {
  mdLinks(args[2], {stats: true}).then(resp => console.log(linkStats(resp)));
} else {
  mdLinks(args[2], {validate: false, stats: false}).then(resp => console.log(resp));
}
