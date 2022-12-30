const connectionPool = require("../util/dbConnection");

const getRoles = (request, response) => {
  connectionPool.query(
    "SELECT * FROM role ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getRoleById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM role WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createRole = (request, response) => {
  const { name, email } = request.body;

  connectionPool.query(
    "INSERT INTO role (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Role added with ID: ${results.insertId}`);
    }
  );
};

const updateRole = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  connectionPool.query(
    "UPDATE role SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Role modified with ID: ${id}`);
    }
  );
};

const deleteRole = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM role WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Role deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getRoles,
  getRoleById,
  createRole,
  updateRole,
  deleteRole,
};
