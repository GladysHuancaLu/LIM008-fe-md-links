// require('../index.js')
import {pathValidate, validateDirectory, getLinksMd, getMdFiles} from"../src/controller/getAllMds.js";
import {linksValidate} from"../src/controller/option.js";
import {mdLinks} from"../src/main.js";




describe('pathValidate', () => {
  it('pathValidate debería ser una funcion', () => {
    expect(typeof pathValidate).toBe('function');
  });  
  it('pathValidate debería cambiar la ruta a abosoluta si es relativa', () => {
  expect(pathValidate('.\\test')).toBe('C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test');
  });
})

describe('validateDirectory', () => {
  it('validateDirectory debería ser una funcion', () => {
    expect(typeof validateDirectory).toBe('function');
  });  
  it('validateDirectory debería devolver true si la ruta es un directorio', () => {
  expect(validateDirectory('.\\test')).toBe(true);
  });
})

describe('getLinksMd', () => {
  it('getLinksMd debería ser una funcion', () => {
    expect(typeof getLinksMd).toBe('function');
  });  
  it('getLinksMd debería devolver true si la ruta es un directorio', () => {
  expect(getLinksMd([ 'test\\texto.md' ])).toEqual(
    [ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
     'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' } ]
  );
  });
})

describe('getMdFiles', () => {
  it('getMdFiles debería ser una funcion', () => {
    expect(typeof getMdFiles).toBe('function');
  });  
  it('getMdFiles debería devolver un arrays de todos los archivos contenidos', () => {
  expect(getMdFiles('.\\test')).toEqual(
    [ 'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\archivoVacio.md',
      'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' ]
  );
  });
})

const imputLinksValidate= 
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' } ];
const ouputLinksValidate=
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 'no es url',
    message: 'fail' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 200,
    message: 'OK' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 404,
    message: 'Fail' } ];

describe('linksValidate', () => {
  it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', (done) => {
    linksValidate(imputLinksValidate).then((resolve) => {
      expect(resolve).toEqual(ouputLinksValidate); 
      done(); 
    });
  });
});  

const input ='C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test';

const ouput = 
[ { text: 'Google Link',
href: 'http://www.google.com.pee',
file:
 'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
{ text: 'Menta Days: Reinventa tu creatividad',
href: 'https://www.mentadays.com',
file:
 'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' },
{ text: 'Postula a Laboratoria',
href: 'https://www.laboratoria.la/inscibiteAqui/',
file:
 'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' } ];

const ouput1 = 
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 'no es url',
    message: 'fail' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 200,
    message: 'OK' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
     'C:\\Users\\Usuario\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md',
    status: 404,
    message: 'Fail' } ];

  const ouput2= [ { total: 3, unique: 3 } ];

  const ouput3= [ { total: 3, unique: 3, broken: 1 } ];



test('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
 });

 describe('mdLinks', () => {
  it('Deberia retornar un array de objetos con tres propiedades: href, text, file', (done) => {
    mdLinks(imput, {validate: false, stats: false}).then((resolve) => {
      expect(resolve).toEqual(ouput); 
      done(); 
    });
  });
  it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', (done) => {
    mdLinks(imput, {validate: true, stats: false}).then((resolve) => {
      expect(resolve).toEqual(ouput1); 
      done(); 
    });
  });
  it('Deberia retornar un array de objetos con dos propiedades: total, uniques', (done) => {
    mdLinks(imput, {validate: false, stats: true}).then((resolve) => {
      expect(resolve).toEqual(ouput2); 
      done(); 
    });
  });
  it('Deberia retornar un array de objetos con tres propiedades: total, uniques, brooken', (done) => {
    mdLinks(imput, {validate: true, stats: true}).then((resolve) => {
      expect(resolve).toEqual(ouput3); 
      done(); 
    });
  });
});



