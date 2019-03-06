// require('../index.js')
import {pathValidate} from"../src/getAllMds.js";



describe('pathValidate', () => {
  it('pathValidate debería ser una funcion', () => {
    expect(typeof pathValidate).toBe('function');
  });  
  it('pathValidate debería cambiar la ruta a abosoluta si es relativa', () => {
  expect(pathValidate('.\\test')).toBe('C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test');
  });
})

describe('convertDirectory', () => {
  it('convertDirectory debería ser una funcion', () => {
    expect(typeof convertDirectory).toBe('function');
  });  
  it('convertDirectory debería devolver true si la ruta es un directorio', () => {
  expect(convertDirectory('.\\test')).toBe('C:\\Users\\Laboratoria\\Desktop\\md-links\\LIM008-fe-md-links\\test');
  });
})

// describe('mostrar', () => {
// it('Debería retornar un array de objetos con las siguientes propiedades: href. text, file', () => {
//   return mdLinks('./prueba.md', {validate:false, stats:false}).then(data => {
//     expect(data).toEqual(
//       [ {
//          file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
//          href: 'http://www.google.com.pee',
//          text: 'Google'
//         },
//         {
//           file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
//           href: 'https://www.mentadays.com',
//           text: 'Menta Days: Reinventa tu creatividad'
//         }
//       ]
//     );
//   });
// });

// it('Debería retornar un array de objetos con las siguientes propiedades: href. text, file y el resultado de la validacion de links', () => {
//   return mdLinks('./prueba.md', {validate:true, stats:false}).then(data => {
//     expect(data).toEqual(
//       [ {
//          file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
//          href: 'http://www.google.com.pee',
//          text: 'Google',
//          response: 'fail',
//          status: 404
//         },
//         {
//           file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
//           href: 'https://www.mentadays.com',
//           text: 'Menta Days: Reinventa tu creatividad',
//           response: 'ok',
//           status: 200
//         }
//       ]
//     );
//   });
// });

// it('Debería retornar un texto con estadísticas básicas sobre los links', () => {
//   return mdLinks('./prueba.md', {validate:false, stats:true}).then(data => {
//     expect(data).toEqual(
//       {
//         Total: 2,
//         Unique: 2
//       }
//     );
//   });
// });

// it('Debería retornar un texto con estadísticas que necesiten de los resultados de la validación', () => {
//   return mdLinks('./prueba.md', {validate:true, stats:true}).then(data => {
//     expect(data).toEqual(
//       {
//         Total: 2,
//         Unique: 2,
//         Broken: 1
//       }
      
//     );
//   });
// });
// })
