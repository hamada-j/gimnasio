const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("select * from clientes", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getById = pClienteId => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from clientes where id = ?",
      [pClienteId],
      (err, rows) => {
        if (err) {
          reject(err);
        } else {
          if (rows.length === 0) {
            resolve(null);
          } else {
            resolve(rows[0]);
          }
        }
      }
    );
  });
};

const create = ({
  id,
  nombre,
  apellidos,
  direccion,
  email,
  edad,
  sexo,
  fecha_inscripcion,
  cuota,
  fecha_nacimiento,
  dni
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      "insert into clientes (id, nombre, apellidos, direccion, email, edad, sexo, fecha_inscripcion, cuota, fecha_nacimiento, dni ) values (?,?,?,?,?,?,?,?,?,?,?)",
      [
        id,
        nombre,
        apellidos,
        direccion,
        email,
        edad,
        sexo,
        new Date(),
        cuota,
        fecha_nacimiento,
        dni
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const update = ({
  nombre,
  apellidos,
  direccion,
  email,
  edad,
  fecha_inscripcion,
  sexo,
  cuota,
  fecha_nacimiento,
  dni,
  id
}) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE clientes SET  nombre = ?, apellidos = ?, direccion = ?, email = ?, edad = ?, sexo = ?, fecha_inscripcion = ?, cuota = ?, fecha_nacimiento = ?, dni = ? WHERE id = ?",
      [
        nombre,
        apellidos,
        direccion,
        email,
        edad,
        sexo,
        fecha_inscripcion,
        cuota,
        fecha_nacimiento,
        dni,
        id
      ],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const deleteById = pClienteId => {
  return new Promise((resolve, reject) => {
    db.query(
      "delete from clientes where id = ?",
      [pClienteId],
      (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      }
    );
  });
};

module.exports = {
  getAll: getAll,
  getById: getById,
  create: create,
  deleteById: deleteById,
  update: update
};
