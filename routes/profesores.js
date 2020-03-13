var express = require("express");
var router = express.Router();

const Profesor = require("../models/profesores");

/* GET http://localhost:3000/profesores */
router.get("/", async (req, res, next) => {
  try {
    const rows = await Profesor.getAll();
    res.status(201).json(rows);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* DELETE http://localhost:3000/profesores/:profesorId */
router.delete("/:id", (req, res, next) => {
  Profesor.deleteById(req.params.id)
    .then(result => {
      console.log(result);
      res.status(201).send("Borrado el profesor");
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});
/* GET http://localhost:3000/profesores/*/
router.get("/:profesorId", (req, res, next) => {
  Profesor.getById(req.params.profesorId)
    .then(profesor => {
      res.status(201).send(profesor);
    })
    .catch(err => {
      res.status(500).json({
        error: err
      });
    });
});

/* POST http://localhost:3000/profesores/*/
router.post("/", async (req, res) => {
  try {
    const result = await Profesor.create({
      nombre: req.body.nombre,
      experiencia: req.body.experiencia
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

/* PATCH http://localhost:3000/profesores/ */
router.patch("/:id", async (req, res, next) => {
  try {
    const result = await Profesor.update({
      id: req.params.id,
      nombre: req.body.nombre,
      experiencia: req.body.experiencia
    });
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
