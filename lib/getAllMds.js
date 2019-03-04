"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validateDirectory = exports.pathValidate = void 0;

const fs = require('fs');

const path = require('path');

const pathValidate = ruta => {
  return path.resolve(ruta);
};

exports.pathValidate = pathValidate;

const validateDirectory = ruta => {
  return fs.lstatSync(ruta).isDirectory() ? true : false;
};

exports.validateDirectory = validateDirectory;