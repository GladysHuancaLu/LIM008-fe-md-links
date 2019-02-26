const mdLinks = require('../index.js')

test('Debería retornar un array de objetos con las siguientes propiedades: href. text, file', () => {
  return mdLinks('./prueba.md', {validate:false, stats:false}).then(data => {
    expect(data).toEqual(
      [ {
         file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
         href: 'http://www.google.com.pe',
         text: 'Google'
        },
        {
          file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
          href: 'https://www.mentadays.com',
          text: 'Menta Days: Reinventa tu creatividad'
        }
      ]
    );
  });
});

test('Debería retornar un array de objetos con las siguientes propiedades: href. text, file y el resultado de la validacion de links', () => {
  return mdLinks('./prueba.md', {validate:true, stats:false}).then(data => {
    expect(data).toEqual(
      [ {
         file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
         href: 'http://www.google.com.pe',
         text: 'Google',
         response: 'fail',
         status: 404
        },
        {
          file: 'C:\Users\Usuario\Desktop\md-links\LIM008-fe-md-links\test\texto.md',
          href: 'https://www.mentadays.com',
          text: 'Menta Days: Reinventa tu creatividad',
          response: 'ok',
          status: 200
        }
      ]
    );
  });
});
test('Debería retornar un texto con estadísticas básicas sobre los links', () => {
  return mdLinks('./prueba.md', {validate:false, stats:true}).then(data => {
    expect(data).toEqual(
      {
        Total: 2,
        Unique: 2
      }
    );
  });
});

test('Debería retornar un texto con estadísticas que necesiten de los resultados de la validación', () => {
  return mdLinks('./prueba.md', {validate:true, stats:true}).then(data => {
    expect(data).toEqual(
      {
        Total: 2,
        Unique: 2,
        Broken: 1
      }
      
    );
  });
});

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});
