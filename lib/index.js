"use strict";

var _getAllMds = require("./getAllMds.js");

const fs = require('fs');

const path = require('path');

const marked = require('marked');

const getLinksMd = arrayFiles => {
  const arrLinks = [];
  arrayFiles.forEach(file => {
    const fileMd = fs.readFileSync(file, 'utf8');
    const renderer = new marked.Renderer();

    renderer.link = (href, title, text) => {
      arrLinks.push({
        href: href,
        text: text,
        file: file
      });
    };

    marked(fileMd, {
      renderer
    });
  });
  return arrLinks;
};

const mdLinks = path1 => {
  // return validateDirectory(path1);
  let arrFile = [];
  const leeDirectorio = fs.readdirSync(path1); // console.log(leeDirectorio);

  leeDirectorio.forEach(file => {
    const pathSon = path.join(path1, file); // console.log(pathSon);

    if ((0, _getAllMds.validateDirectory)(pathSon)) {
      arrFile = arrFile.concat(mdLinks(pathSon));
    } else if (path.extname(pathSon) === '.md') {
      arrFile.push(pathSon);
    } //         var ext = path.extname('/Users/Refsnes/demo_path.js');
    // console.log(ext);

  });
  return arrFile;
}; // console.log(mdLinks('C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test'));


console.log(mdLinks('./test'));
console.log(getLinksMd(mdLinks('./test'))); // mdLinks('./test');