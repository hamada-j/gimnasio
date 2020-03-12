var express = require("express");
var router = express.Router();

const Profesor = require("../models/profesores");

/* GET http://localhost:3000/profesores */
router.get("/", async (req, res, next) => {
  const rows = await Profesor.getAll();
  console.log(rows);
  res.json(rows);
});

/* GET http://localhost:3000/profesores/:profesorId */
router.delete("/:id", (req, res, next) => {
  console.log(req.params.id);
  Profesor.deleteById(req.params.id)
    .then(result => {
      console.log(result);
      res.send("Borrado el profesor");
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

router.get("/:profesorId", (req, res, next) => {
  Profesor.getById(req.params.profesorId)
    .then(profesor => {
      console.log(profesor);
      res.send(profesor);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

/* GET http://localhost:3000/profesores/create */
router.post("/", async (req, res) => {
  console.log(req.body);
  const result = await Profesor.create({
    nombre: req.body.nombre,
    experiencia: req.body.experiencia
  });
  console.log(result);
  res.json(result);
});

router.patch("/:id", async (req, res, next) => {
  console.log(req.params.id);
  console.log(req.body);
  const result = await Profesor.update({
    id: req.params.id,
    nombre: req.body.nombre,
    experiencia: req.body.experiencia
  });
  console.log(result);
  res.json(result);
});

module.exports = router;
