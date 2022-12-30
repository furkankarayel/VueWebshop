const connectionPool = require("../util/dbConnection");

const getArticleGroups = (request, response) => {
  connectionPool.query(
    "SELECT * FROM articlegroup ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticleGroupById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM articlegroup WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createArticleGroup = (request, response) => {
  const { name, email } = request.body;

  connectionPool.query(
    "INSERT INTO articlegroup (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response
        .status(201)
        .send(`Article group added with ID: ${results.insertId}`);
    }
  );
};

const updateArticleGroup = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  connectionPool.query(
    "UPDATE articlegroup SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article group modified with ID: ${id}`);
    }
  );
};

const deleteArticleGroup = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM articlegroup WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article group deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getArticleGroups,
  getArticleGroupById,
  createArticleGroup,
  updateArticleGroup,
  deleteArticleGroup,
};
