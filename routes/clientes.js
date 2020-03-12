const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Validators = require("../controllers/validators");

const Client = require("../models/clientes");

/* GET http://localhost:3000/profesores */
router.get("/", async (req, res, next) => {
  const rows = await Client.getAll();
  console.log(rows);
  res.json(rows);
});

/* GET http://localhost:3000/studen/delete */
router.delete("/delete/:clientId", (req, res, next) => {
  Client.deleteById(req.params.clientId)
    .then(result => {
      console.log(result);
      res.send("Borrado el cliente");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
  // await Alumno.deleteById(req.params.studentId)
  // res.redirect('/student')
});

/* GET http://localhost:3000/studen/studenId */
router.get("/:clientId", (req, res, next) => {
  Client.getById(req.params.clientId)
    .then(clientId => {
      console.log(clientId);
      res.send(clientId);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/* GET http://localhost:3000/clientes/ */
router.post(
  "/create",
  [
    check("dni", "dni valido")
      .exists()
      .custom(Validators.dniValidator)
  ],
  async (req, res, next) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(888).json(errors);
    }
    const result = await Client.create({
      id: req.body.id,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      direccion: req.body.direccion,
      email: req.body.email,
      edad: req.body.edad,
      sexo: req.body.sexo,
      fecha_inscripcion: req.body.fecha_inscripcion,
      cuota: req.body.cuota,
      fecha_nacimiento: req.body.fecha_nacimiento,
      dni: req.body.dni
    });
    console.log(result);
    res.json(`Creado el profesor: ${result}`);
  }
);

router.patch("/:id", async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  const result = await Client.update({
    nombre: req.body.nombre,
    apellidos: req.body.apellidos,
    direccion: req.body.direccion,
    email: req.body.email,
    edad: req.body.edad,
    sexo: req.body.sexo,
    cuota: req.body.cuota,
    fecha_nacimiento: req.body.fecha_nacimiento,
    dni: req.body.dni,
    id: req.params.Id
  });
  console.log(result);
  res.json(result);
});

module.exports = router;
