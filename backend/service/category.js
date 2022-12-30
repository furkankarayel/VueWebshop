const connectionPool = require("../util/dbConnection");

const getCategories = (request, response) => {
  connectionPool.query(
    "SELECT * FROM category ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getCategoryById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM category WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createCategory = (request, response) => {
  const { name, email } = request.body;

  connectionPool.query(
    "INSERT INTO category (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Category added with ID: ${results.insertId}`);
    }
  );
};

const updateCategory = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  connectionPool.query(
    "UPDATE category SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Category modified with ID: ${id}`);
    }
  );
};

const deleteCategory = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM category WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
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
