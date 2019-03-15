#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _main = require("./main.js");

var _option = require("./controller/option.js");

const args = process.argv; // console.log(process.argv);
// if (args.includes('--validate') && args.includes('--stats')){
//   mdLinks(args[2], {validate: true, stats: true}).then(resp => console.log(validateAndStats(resp)));
// } else if (args.includes('--validate')) {
//   mdLinks(args[2], {validate: true}).then(resp => console.log(resp));
// } else if (args.includes('--stats')) {
//   mdLinks(args[2], {stats: true}).then(resp => console.log(linkStats(resp)));
// } else {
//   mdLinks(args[2], {validate: false, stats: false}).then(resp => console.log(resp));
// }

const cli = args => {
  if (args.includes('--validate') && args.includes('--stats')) {
    return (0, _main.mdLinks)(args[2], {
      validate: true,
      stats: true
    }).then(resp => console.log((0, _option.validateAndStats)(resp)));
  } else if (args.includes('--validate')) {
    return (0, _main.mdLinks)(args[2], {
      validate: true
    }).then(resp => console.log(resp));
  } else if (args.includes('--stats')) {
    return (0, _main.mdLinks)(args[2], {
      stats: true
    }).then(resp => console.log((0, _option.linkStats)(resp)));
  } else {
    return (0, _main.mdLinks)(args[2], {
      validate: false,
      stats: false
    }).then(resp => console.log(resp));
  }
};

exports.cli = cli;
cli(args);