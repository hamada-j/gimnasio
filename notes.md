# REST-API FOR GYM

REST-API are Statless Backends

- REST: Respresentational State Transfer ( we can use to transfer data )

- Req -- to --> Server
- Res <-- from -- Server

Stores and Fetches Data { JSON, XML, URLEcode, FormData ... } but doesn`t use/render HTML

- URL and Methods

### /order(id) : GET, DELETE

### /product(id) : GET, PATCH, DELETE

### /products : GET, POST

### /orders : GET, POST

## RESTful CONSTRAINTS

1º`$ mkdir gimnasio`

2º`$ npm init`

3º `% npm install -- express`

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
      message: "you passed an ID"
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

### ADD BODYPARSER AND TEST IN POSTMAN

install
`$ npm install --save body-parser`

in app.js

```javascript
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```

and in products or orders

```javascript
router.post("/", function(req, res, next) {
  const order = {
    productId: req.body.productId,
    quantity: req.body.quantity
  };
  res.status(201).json({
    message: "posted a order correctly",
    createdOrder: order
  });
});
```

### CORS: Security Concept /// right HEADERS ///

client(localhost:3000) <------ that is fine ------> server(localhost3000)

client(localhost:3000) <------- CORS -------> server(localhost4000)

Where '\*' it is the value (and can be IP or specific web ...)

in app.js

```javascript
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
});
```

### DATABASE: MySQL /// DB ///

- Creata and Connect

- install mongoose: `$ npm install mysql`
- database.js
- in app.js added

### Verification /// express validatores ///

- add photo to product

- install multer: `$ npm install express-validatars`
- in clientes.js added
