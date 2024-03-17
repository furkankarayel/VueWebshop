const pg_conn = require('../util/pg_conn')


const getRoles = (request, response) => {
  pg_conn.pool.query(
    "SELECT * FROM role ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getRoleById = (request, response) => {
  const id = parseInt(request.params.id);

  pg_conn.pool.query(
    "SELECT * FROM role WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createRole = (request, response) => {
  const { name } = request.body;

  pg_conn.pool.query(
    "INSERT INTO role (name) VALUES ($1) RETURNING id",
    [name],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(201).send(`Role created with id ${results.rows[0].id}`);
    }
  );
};

const updateRole = (request, response) => {
  const id = parseInt(request.params.id);
  const { name } = request.body;

  pg_conn.pool.query(
    "UPDATE role SET name = $2 WHERE id = $1 RETURNING id",
    [id, name],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Role modified with ID: ${id}`);
    }
  );
};

const deleteRole = (request, response) => {
  const id = parseInt(request.params.id);

  pg_conn.pool.query(
    "DELETE FROM role WHERE id = $1 RETURNING id",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
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
