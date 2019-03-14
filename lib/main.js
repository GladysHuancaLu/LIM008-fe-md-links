"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _getAllMds = require("./getAllMds.js");

const options = {
  validate: false,
  stats: false
};

const mdLinks = (path, options) => {
  return new Promise((res, rej) => {
    if (options.validate == false && options.stats == false) {
      res((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path)));
    } else if (options.validate == true && options.stats == false) {
      res((0, _getAllMds.linksValidate)((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path))));
    } else if (options.validate == false && options.stats == true) {
      res((0, _getAllMds.linkStats)((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path))));
    } else if (options.validate == true && options.stats == true) {
      res((0, _getAllMds.validateAndStats)((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path))));
    }
  });
};

exports.mdLinks = mdLinks;
console.log(mdLinks(".../test", options));