"use strict";

var _getAllMds = require("./getAllMds.js");

const fs = require('fs');

const path = require('path');

const mdLinks = path1 => {
  // return validateDirectory(path1);
  let arrFile = [];
  const leeDirectorio = fs.readdirSync(path1);
  console.log(leeDirectorio);
  leeDirectorio.forEach(file => {
    const pathSon = path.join(path1, file); // console.log(pathSon);

    if ((0, _getAllMds.validateDirectory)(pathSon)) {
      arrFile = arrFile.concat(mdLinks(pathSon));
    } else {
      arrFile.push(pathSon);
    }
  });
  return arrFile;
}; // console.log(mdLinks('C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test'));


console.log(mdLinks('./test')); // mdLinks('./test');