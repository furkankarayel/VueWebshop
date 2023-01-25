const Pool = require("pg").Pool;
const connectionPool = new Pool({
  host: "backend-postgres-1",
  user: "dbuser",
  database: "webshop",
  password: "postgres",
  port: 5432,
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
  const { name, description, img, ean, price, articlegroup_id } = request.body;

  connectionPool.query(
    "INSERT INTO article (name, description, img, ean, price, articlegroup_id) VALUES ($1, $2, $3, $4 $5, $6)  RETURNING id",
    [name, description, img, ean, price, articlegroup_id],
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
  const { name, description, img, ean, price, articlegroup_id } = request.body;

  connectionPool.query(
    "UPDATE article SET name = $2, description = $3, img=$4, ean = $5, price = $6, articlegroup_id = $7 WHERE id = $1 RETURNING id",
    [id, name, description, img, ean, price, articlegroup_id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Article modified with ID: ${id}`);
    }
  );
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
