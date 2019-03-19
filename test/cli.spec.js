import {cli} from"../src/cli.js"

const input =`${process.cwd()}\\test`;

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

const ouput2= [ { total: 3, unique: 3 } ];
const ouput3= [ { total: 3, unique: 3, broken: 1 } ];

describe('cli', () => {
    it('cli debería ser una funcion', () => {
        expect(typeof cli).toBe('function');
      }); 
    it('Deberia retornar un array de objetos con tres propiedades: href, text, file', (done) => {
        cli([,,input]).then((resolve) => {
        expect(resolve).toEqual(ouput); 
        done(); 
      });
    });
    it('Deberia retornar un array de objetos con cinco propiedades: href, text, file, status, message', (done) => {
        cli([,,input, '--validate']).then((resolve) => {
        expect(resolve).toEqual(ouput1); 
        done(); 
      });
    });
    it('Deberia retornar un array de objetos con dos propiedades: total, unique', (done) => {
        cli([,,input, '--stats']).then((resolve) => {
        expect(resolve).toEqual(ouput2); 
        done(); 
      });
    });
    it('Deberia retornar un array de objetos con tres propiedades: total, unique, brooken', (done) => {
        cli([,,input, '--validate', '--stats']).then((resolve) => {
        expect(resolve).toEqual(ouput3); 
        done(); 
      });
    });
    
  }); 