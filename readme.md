# REST-API FOR GYM

REST-API are Statless Backends

- REST: Respresentational State Transfer ( we can use to transfer data )

- Req -- to --> Server
- Res <-- from -- Server

Stores and Fetches Data { JSON, XML, URLEcode, FormData ... } but doesn`t use/render HTML

- URL and Methods

### /clientes(id) : GET, POST, PATCH, DELETE

### /ejercicios(id) : GET, POST, PATCH, DELETE

### /profesores(id) : GET, POST, PATCH, DELETE

## RESTful CONSTRAINTS

1º`$ mkdir gimnasio`

2º`$ npm init`

3º `% npm install -- express`

4º new file .gitignore (NodeJS)

### Creat a basic server with EXPRESS server

`$ express --view = server`

### Generate a firs route

creat in route folder

```javascript
var express = require("express");
var router = express.Router();
// get Method
router.get("/", function(req, res, next) {
  res.send("from clientes url");
});
module.exports = router;
```

expot to app.js

```javascript
const productsRouter = require("./routes/clientes");
```

run

```javascript
app.use("/clientes", productsRouter
```

### TESTING IN POSTMAN

```javascript
router.get("/:clientesId", function(req, res, next) {
  const id = req.params.productId;
  if (id === "special") {
    res.status(200).json({
      message: "you GET SPECIAL ",
      id: id
    });
  } else {
    res.status(200).json({
      message: "I passed an ID"
    });
  }
});
```

### ADD SOME CONTROL ERRORS AT SERVER

in app.js

```javascript
app.use((req, res, next) => {
  const error = new Error("Not Found, I creat this message");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message
  });
});
```

### ADD AND TEST IN POSTMAN

- localhost:3000
- /

### /clientes(id) : GET, POST, PATCH, DELETE

### /ejercicios(id) : GET, POST, PATCH, DELETE

### /profesores(id) : GET, POST, PATCH, DELETE

and in products or orders

```javascript
router.post("/", function(req, res, next) {
  ....
  res.status(201).json({
    message: "correctly",
    create: cliente
  });
});
```

### Security Concept /// ///

client(localhost:3000) <------ that is fine ------> server(localhost3000)

in app.js

```javascript
app.use((req, res, next) => {});
```

- install mongoose: `$ npm install donevt`
- .env ---> file

### DATABASE: MySQL /// DB ///

- Creata and Connect

- install mongoose: `$ npm install mysql`
- database.js
- in app.js added

### Verification /// express validatores ///

- install multer: `$ npm install express-validatars`
- requier from express
- in clientes.js added

### Controllers /// express validatores ///

- validators.js ----> validation for idCard (DNI)

```javascript
exports.dniValidator = pDni => {
  const dni = pDni;
  const expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  ....
```

### Test /// PostMan ///

- Eveything was test in Postman

### Try and Catch Block /// Add statement ///

- try block if some error then the catch block

```javascript
try {
  const rows = await Cliente.getAll();
  res.status(201).json(rows);
} catch (err) {
  res.status(500).json(err);
}
```

### Status/// Add status to responses ///

- To see status of res from server.

```javascript
....
    res.status(201).json(rows);
....
    res.status(500).json(err);
....
```


