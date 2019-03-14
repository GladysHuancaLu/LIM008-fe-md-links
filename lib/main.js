"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mdLinks = void 0;

var _getAllMds = require("./controller/getAllMds.js");

var _option = require("./controller/option.js");

const mdLinks = (path, options) => {
  return new Promise((res, rej) => {
    if (options.validate) {
      res((0, _option.linksValidate)((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path))));
    } else {
      res((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path)));
    }
  });
};

exports.mdLinks = mdLinks;