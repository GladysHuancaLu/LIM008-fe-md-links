// require('../index.js')
import {pathValidate, validateDirectory, getLinksMd, getMdFiles} from"../src/controller/getAllMds.js";
import {linksValidate, linkStats, validateBroken, validateAndStats} from"../src/controller/option.js";
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

const imput1= 
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
const output1=
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
    linksValidate(imput1).then((resolve) => {
      expect(resolve).toEqual(output1); 
      done(); 
    });
  });
});  

const input ='C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test' 
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
 'C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test\\texto.md' } ]

test('Al ingresar la ruta absoluta de una carpeta que contiene archivos debería retornar un array con los links encontrados dentro de la ruta', (done) => {
  mdLinks(input).then((respuesta) => {
    expect(respuesta).toEqual(ouput);
    done();
  });
 });

