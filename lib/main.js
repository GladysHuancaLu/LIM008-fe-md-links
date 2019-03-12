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
  if (options.validate == false && options.stats == false) {
    return (0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path));
  } else if (options.validate == true && options.stats == false) {
    return linksValidate((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path)));
  } else if (options.validate == false && options.stats == true) {
    return linkStats((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path)));
  } else if (options.validate == true && options.stats == true) {
    return validateAndStats((0, _getAllMds.getLinksMd)((0, _getAllMds.getMdFiles)(path)));
  }
};

exports.mdLinks = mdLinks;