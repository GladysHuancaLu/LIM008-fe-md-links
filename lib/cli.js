#!/usr/bin/env node
"use strict";

var _main = require("./main.js");

var _option = require("./controller/option.js");

const args = process.argv; // console.log(process.argv);

if (args.includes('--validate') && args.includes('--stats')) {
  (0, _main.mdLinks)(args[2], {
    validate: true,
    stats: true
  }).then(resp => console.log((0, _option.validateAndStats)(resp)));
} else if (args.includes('--validate')) {
  (0, _main.mdLinks)(args[2], {
    validate: true
  }).then(resp => console.log(resp));
} else if (args.includes('--stats')) {
  (0, _main.mdLinks)(args[2], {
    stats: true
  }).then(resp => console.log((0, _option.linkStats)(resp)));
} else {
  (0, _main.mdLinks)(args[2], {
    validate: false,
    stats: false
  }).then(resp => console.log(resp));
}