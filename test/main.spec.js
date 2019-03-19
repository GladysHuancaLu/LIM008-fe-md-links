// require('../index.js')
import {pathValidate, validateDirectory, getLinksMd, getMdFiles} from"../src/controller/getAllMds.js";
import {linksValidate} from"../src/controller/option.js";
import {mdLinks} from"../src/main.js";




describe('pathValidate', () => {
  it('pathValidate debería ser una funcion', () => {
    expect(typeof pathValidate).toBe('function');
  });  
  it('pathValidate debería cambiar la ruta a abosoluta si es relativa', () => {
  expect(pathValidate('.\\test')).toBe(`${process.cwd()}\\test`);
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
  expect(getLinksMd([`${process.cwd()}\\test\\texto.md`])).toEqual(
    [ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
     `${process.cwd()}\\test\\texto.md` },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
     `${process.cwd()}\\test\\texto.md` },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
     `${process.cwd()}\\test\\texto.md` } ]
  );
  });
})

describe('getMdFiles', () => {
  it('getMdFiles debería ser una funcion', () => {
    expect(typeof getMdFiles).toBe('function');
  });  
  it('getMdFiles debería devolver un arrays de todos los archivos contenidos', () => {
  expect(getMdFiles('.\\test')).toEqual(
    [ `${process.cwd()}\\test\\archivoVacio.md`,
      `${process.cwd()}\\test\\texto.md` ]
  );
  });
})

const imputLinksValidate= 
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
    `${process.cwd()}\\test\\texto.md` },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
    `${process.cwd()}\\test\\texto.md` },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
    `${process.cwd()}\\test\\texto.md` } ];
const ouputLinksValidate=
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
    `${process.cwd()}\\test\\texto.md`,
    status: 'no es url',
    message: 'fail' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
    `${process.cwd()}\\test\\texto.md`,
    status: 200,
    message: 'OK' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
    `${process.cwd()}\\test\\texto.md`,
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

const input =`${process.cwd()}\\test\\texto.md`;

const ouput = 
[ { text: 'Google Link',
href: 'http://www.google.com.pee',
file:
`${process.cwd()}\\test\\texto.md` },
{ text: 'Menta Days: Reinventa tu creatividad',
href: 'https://www.mentadays.com',
file:
`${process.cwd()}\\test\\texto.md` },
{ text: 'Postula a Laboratoria',
href: 'https://www.laboratoria.la/inscibiteAqui/',
file:
`${process.cwd()}\\test\\texto.md` } 
];

const ouput1 = 
[ { text: 'Google Link',
    href: 'http://www.google.com.pee',
    file:
    `${process.cwd()}\\test\\texto.md`,
    status: 'no es url',
    message: 'fail' },
  { text: 'Menta Days: Reinventa tu creatividad',
    href: 'https://www.mentadays.com',
    file:
    `${process.cwd()}\\test\\texto.md`,
    status: 200,
    message: 'OK' },
  { text: 'Postula a Laboratoria',
    href: 'https://www.laboratoria.la/inscibiteAqui/',
    file:
    `${process.cwd()}\\test\\texto.md`,
    status: 404,
    message: 'Fail' } 
  ];



 describe('mdLinks', () => {
  it('Deberia retornar un array de objetos con tres propiedades: href, text, file', (done) => {
    mdLinks(input, {validate: false}).then((resolve) => {
      expect(resolve).toEqual(ouput); 
      done(); 
    });
  });
  it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', (done) => {
    mdLinks(input, {validate: true}).then((resolve) => {
      expect(resolve).toEqual(ouput1); 
      done(); 
    });
  });
});



