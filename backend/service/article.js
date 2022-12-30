const connectionPool = require("../util/dbConnection");

const getArticles = (request, response) => {
  connectionPool.query(
    "SELECT * FROM article ORDER BY id ASC",
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM article WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const createArticle = (request, response) => {
  const { name, email } = request.body;

  connectionPool.query(
    "INSERT INTO article (name, email) VALUES ($1, $2)",
    [name, email],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Article added with ID: ${results.insertId}`);
    }
  );
};

const updateArticle = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email } = request.body;

  connectionPool.query(
    "UPDATE article SET name = $1, email = $2 WHERE id = $3",
    [name, email, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article modified with ID: ${id}`);
    }
  );
};

const deleteArticle = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM article WHERE id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
