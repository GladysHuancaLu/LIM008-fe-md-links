#!/usr/bin/env node
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cli = void 0;

var _main = require("./main.js");

var _option = require("./controller/option.js");

const args = process.argv;

const cli = args => {
  return new Promise((res, rej) => {
    if (args.includes('--validate') && args.includes('--stats')) {
      (0, _main.mdLinks)(args[2], {
        validate: true,
        stats: true
      }).then(resp => res((0, _option.validateAndStats)(resp)));
    } else if (args.includes('--validate')) {
      (0, _main.mdLinks)(args[2], {
        validate: true
      }).then(resp => res(resp));
    } else if (args.includes('--stats')) {
      (0, _main.mdLinks)(args[2], {
        stats: true
      }).then(resp => res((0, _option.linkStats)(resp)));
    } else {
      (0, _main.mdLinks)(args[2], {
        validate: false,
        stats: false
      }).then(resp => res(resp));
    }
  });
}; // cli(args).then(resp => console.log(resp));


exports.cli = cli;