const pg_conn = require('../util/pg_conn')

const getCategories = (request, response) => {
  pg_conn.pool.query(
    "SELECT * FROM category ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id);

  pg_conn.pool.query(
    "SELECT * FROM category WHERE id = $1  RETURNING *",
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

const createCategory = (request, response) => {
  const { name, description } = request.body;

  pg_conn.pool.query(
    "INSERT INTO category (name, description) VALUES ($1, $2) RETURNING id",
    [name, description],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response
        .status(201)
        .send(`Category added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, description } = request.body;

  pg_conn.pool.query(
    "UPDATE category SET name = $2, description = $3 WHERE id = $1 RETURNING id",
    [id, name, description],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Category modified with ID: ${id}`);
    }
  );
};

const deleteCategory = (request, response) => {
  const id = parseInt(request.params.id);

  pg_conn.pool.query(
    "DELETE FROM category WHERE id = $1 RETURNING id",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Category deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getCategories,
  getCategoryById,
  createCategory,
  updateCategory,
  deleteCategory,
};
