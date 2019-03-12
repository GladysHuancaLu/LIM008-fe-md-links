// require('../index.js')
import {pathValidate, validateDirectory} from"../src/getAllMds.js";
import {getLinksMd, getMdFiles, linksValidate, linkStats, validateBroken, validateAndStats} from"../src/index.js";




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
  expect(getLinksMd([ 'test\\texto.md' ])).toEqual([ { text: 'Menta Days: Reinventa tu creatividad',
  href: 'https://www.mentadays.com',
  file: 'test\\texto.md' } ]);
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

describe('validateDirectory', () => {
  it('validateDirectory debería ser una funcion', () => {
    expect(typeof validateDirectory).toBe('function');
  });  
  it('validateDirectory debería devolver true si la ruta es un directorio', () => {
  expect(validateDirectory('.\\test')).toBe(true);
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

describe('validateDirectory', () => {
  it('validateDirectory debería ser una funcion', () => {
    expect(typeof validateDirectory).toBe('function');
  });  
  it('validateDirectory debería devolver true si la ruta es un directorio', () => {
  expect(validateDirectory('.\\test')).toBe(true);
  });
})

