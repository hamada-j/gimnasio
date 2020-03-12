const express = require("express");
const router = express.Router();

const Ejercicio = require("../models/ejercicios");

/* GET http://localhost:3000/ejercicios */
router.get("/", async (req, res, next) => {
  const rows = await Ejercicio.getAll();
  console.log(rows);
  res.json(rows);
});

/* DELETE http://localhost:3000/ejercicios/Id */
router.delete("/:ejercicioId", (req, res, next) => {
  Ejercicio.deleteById(req.params.ejercicioId)
    .then(result => {
      console.log(result);
      res.send("Borrado el ejercico");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/* GET http://localhost:3000/ejercicios/ejerciciId */
router.get("/:ejercicioId", (req, res, next) => {
  Ejercicio.getById(req.params.ejercicioId)
    .then(ejercicio => {
      console.log(ejercicio);
      res.send(ejercicio);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/* POST http://localhost:3000/ejercicios */
router.post("/", async (req, res, next) => {
  console.log(req.body);
  const result = await Ejercicio.create({
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    repeticiones: req.body.repeticiones
  });
  console.log(result);
  res.json(result);
});
/* PATCH http://localhost:3000/ID*/
router.patch("/:Id", async (req, res, next) => {
  console.log(req.params.Id);
  console.log(req.body);
  const result = await Ejercicio.update({
    titulo: req.body.titulo,
    duracion: req.body.duracion,
    repeticiones: req.body.repeticiones,
    id: req.params.Id
  });
  console.log(result);
  res.json(result);
});
module.exports = router;
