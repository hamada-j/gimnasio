const getAll = () => {
  return new Promise((resolve, reject) => {
    db.query("select * from profesores", (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

const getById = pProfesorId => {
  return new Promise((resolve, reject) => {
    db.query(
      "select * from profesores where id = ?",
      [pProfesord],
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

const create = ({ nombre, experiencia }) => {
  return new Promise((resolve, reject) => {
    db.query(
      "insert into profesores (nombre, experiencia) values (?,?)",
      [nombre, experiencia],
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

const deleteById = pProfesorId => {
  return new Promise((resolve, reject) => {
    db.query(
      "delete from profesores where id = ?",
      [pProfesorId],
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

const update = ({ id, nombre, experiencia }) => {
  return new Promise((resolve, reject) => {
    db.query(
      "UPDATE profesores SET  nombre = ?, experiencia = ?  WHERE id = ?",
      [id, nombre, experiencia],
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
