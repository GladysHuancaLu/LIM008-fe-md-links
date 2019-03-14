"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMdFiles = exports.getLinksMd = exports.validateDirectory = exports.pathValidate = void 0;

const fs = require('fs');

const path = require('path');

const marked = require('marked');

const pathValidate = ruta => {
  return path.resolve(ruta);
};

exports.pathValidate = pathValidate;

const validateDirectory = ruta => {
  return fs.lstatSync(ruta).isDirectory() ? true : false;
};

exports.validateDirectory = validateDirectory;

const getLinksMd = arrayFiles => {
  const arrLinks = [];
  arrayFiles.forEach(file => {
    file = pathValidate(file);
    const fileMd = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      arrLinks.push({
        text: text,
        href: href,
        file: file
      });
    };

    marked(fileMd, {
      renderer
    });
  });
  return arrLinks;
};

exports.getLinksMd = getLinksMd;

const getMdFiles = path1 => {
  path1 = pathValidate(path1);
  let arrFile = [];
  const leeDirectorio = fs.readdirSync(path1);
  leeDirectorio.forEach(file => {
    const pathSon = path.join(path1, file);

    if (validateDirectory(pathSon)) {
      arrFile = arrFile.concat(getMdFiles(pathSon));
    } else if (path.extname(pathSon) === '.md') {
      arrFile.push(pathSon);
    }
  });
  return arrFile;
};

exports.getMdFiles = getMdFiles;