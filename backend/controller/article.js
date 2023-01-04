const Pool = require("pg").Pool;
const connectionPool = new Pool({
  host: "localhost",
  user: "dbuser",
  database: "webshop",
  password: "postgres",
  port: 5434,
});

const getArticles = (request, response) => {
  connectionPool.query(
    "SELECT * FROM article ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticleById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM article WHERE id = $1 RETURNING *",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
  response.status(500).send(`An error has occurred.`);
};

const createArticle = (request, response) => {
  const { name, description, ean, articlegroup_id } = request.body;

  connectionPool.query(
    "INSERT INTO article (name, description, ean, articlegroup_id) VALUES ($1, $2, $3, $4)  RETURNING id",
    [name, description, ean, articlegroup_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send(`Article added with ID: ${results.rows[0].id}`);
    }
  );
  response.status(500).send(`An error has occurred.`);
};

const updateArticle = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, description, ean, articlegroup_id } = request.body;

  connectionPool.query(
    "UPDATE article SET name = $2, description = $3, ean = $4, articlegroup_id = $5 WHERE id = $1 RETURNING id",
    [id, name, description, ean, articlegroup_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article modified with ID: ${id}`);
    }
  );
  response.status(500).send(`An error has occurred.`);
};

const deleteArticle = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM article WHERE id = $1 RETURNING id",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`Article deleted with ID: ${id}`);
    }
  );
  response.status(500).send(`An error has occurred.`);
};

module.exports = {
  getArticles,
  getArticleById,
  createArticle,
  updateArticle,
  deleteArticle,
};
