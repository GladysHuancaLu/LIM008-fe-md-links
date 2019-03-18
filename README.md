# Markdown Links

## Preámbulo

[Markdown](https://es.wikipedia.org/wiki/Markdown) es un lenguaje de marcado
ligero muy popular entre developers. Es usado en muchísimas plataformas que
manejan texto plano (GitHub, foros, blogs, ...), y es muy común
encontrar varios archivos en ese formato en cualquier tipo de repositorio
(empezando por el tradicional `README.md`).

Estos archivos `Markdown` normalmente contienen _links_ (vínculos/ligas) que
muchas veces están rotos o ya no son válidos y eso perjudica mucho el valor de
la información que se quiere compartir.


![md-links](https://user-images.githubusercontent.com/110297/42118443-b7a5f1f0-7bc8-11e8-96ad-9cc5593715a6.jpg)

## Diagrama de flujo

![Diagrama de flujo](./img/diagramaDeFlujo.png "Diagrama de flujo")

## Board con el backlog para la implementación de la librería.

en el proyect del GitHub se detalla el backlog del producto y del sprint

![backlog imagen](./img/backlogProducto.png "Backlog del producto") ![backlog imagen](./img/backlogSprint.png "Backlog del sprint")



## Documentación técnica de la librería.

El módulo puede importarse en otros scripts de Node.js y ofrece la
siguiente interfaz:

#### `mdLinks(path, options)`

##### Argumentos

- `path`: Ruta absoluta o relativa al archivo o directorio. Si la ruta pasada es
  relativa, resuelve como relativa al directorio desde donde se invoca
  node - _current working directory_).
- `options`: Un objeto con las siguientes propiedades:
  * `validate`: Booleano que determina si se desea validar los links
    encontrados.

##### Valor de retorno

La función retorna una promesa (`Promise`) que resuelve un arreglo
(`Array`) de objetos (`Object`), donde cada objeto representa un link y contiene
las siguientes propiedades:

- `href`: URL encontrada.
- `text`: Texto que aparecía dentro del link (`<a>`).
- `file`: Ruta del archivo donde se encontró el link.


## Guía de uso e instalación de la librería

Tu módulo es instalable via `npm install GladysHuancaLu/md-links`. 
Se importa con `require` para usarlo
programáticamente.

El ejecutable de nuestra aplicación debe poder ejecutarse de la siguiente
manera a través de la terminal:

`md-links <path-to-file> [options]`

Existen cuatro posibilidades al ingresar la ruta y las opciones:


##### `<path-to-file> --validate`

Si pasamos la opción `--validate`, el módulo debe hacer una petición HTTP para
averiguar si el link funciona o no. Si el link resulta en una redirección a una
URL que responde ok, entonces consideraremos el link como ok.

![Validate imagen](./img/consola2.png "Ejemplo de validate")

Vemos que el _output_ en este caso incluye la palabra `ok` o `fail` después de
la URL, así como el status de la respuesta recibida a la petición HTTP a dicha
URL.

##### `<path-to-file>`  `--stats`  `--validate --stats`  

Si pasamos la opción `--stats` el output (salida) será un texto con estadísticas
básicas sobre los links.

También podemos combinar `--stats` y `--validate` para obtener estadísticas que
necesiten de los resultados de la validación.

![path imagen](./img/consola1.png "Ejemplo de validate")


