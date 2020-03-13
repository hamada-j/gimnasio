const express = require("express");
const router = express.Router();

const Ejercicio = require("../models/ejercicios");

/* GET http://localhost:3000/ejercicios */
router.get("/", async (req, res, next) => {
  try {
    const rows = await Ejercicio.getAll();
    console.log(rows);
    res.status(201).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE http://localhost:3000/ejercicios/Id */
router.delete("/:ejercicioId", (req, res, next) => {
  Ejercicio.deleteById(req.params.ejercicioId)
    .then(result => {
      console.log(result);
      res.status(201).send("Borrado el ejercico");
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

/* GET http://localhost:3000/ejercicios/ejerciciId */
router.get("/:ejercicioId", (req, res, next) => {
  Ejercicio.getById(req.params.ejercicioId)
    .then(ejercicio => {
      res.status(201).send(ejercicio);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

/* POST http://localhost:3000/ejercicios */
router.post("/", async (req, res, next) => {
  try {
    const result = await Ejercicio.create({
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      repeticiones: req.body.repeticiones
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
/* PATCH http://localhost:3000/ejercicios/ID*/
router.patch("/:Id", async (req, res, next) => {
  try {
    const result = await Ejercicio.update({
      titulo: req.body.titulo,
      duracion: req.body.duracion,
      repeticiones: req.body.repeticiones,
      id: req.params.Id
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
