const mdLinks = require('../index')

test('Debería retornar un array de objetos con las siguientes propiedades: href. text, file', () => {
  return mdLinks('./prueba.md', {validate:false, stats:false}).then(data => {
    expect(data).toBe(
        [{
            file: gtrrh,
            href: ggg,
            text: gtgeh
          },
          {
            file: gtrrh,
            href: ggg,
            text: gtgeh
          },
          {
            file: gtrrh,
            href: ggg,
            text: gtgeh
          }]
    );
  });
});

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', () => {
  return fetchData().then(data => {
    expect(data).toBe('peanut butter');
  });
});

test('the data is peanut butter', () => {
    return fetchData().then(data => {
      expect(data).toBe('peanut butter');
    });
  });