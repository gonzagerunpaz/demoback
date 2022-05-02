# Ejemplo Node.js con express-CRUD muy simple
Aplicacion de ejemplo de un CRUD (CReate, Update, Delete) muy simple que usa un lista de libros en memoria para realizar las operaciones.

Librerias que utilizar
- Express - Framework app server
- cors - Cross-Origin Resource Sharing
- nodemon - Desarrollo

### Instalacion de las librerias
```
npm install --save express  
npm install --save-dev nodemon
```

### Formas de usarlo:
#### Recuperar todos los libros
- GET http://localhost:3000/libros

#### Recuperar un libro por ID
- GET http://localhost:3000/libros/ID
ejemplo de ID= 2
  
#### Borrar un libro por ID
- DELETE http://localhost:3000/libros/ID
ejemplo de ID= 2