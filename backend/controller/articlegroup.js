const Pool = require("pg").Pool;
const connectionPool = new Pool({
  host: "backend-postgres-1",
  user: "dbuser",
  database: "webshop",
  password: "postgres",
  port: 5432,
});

const getArticleGroups = (request, response) => {
  connectionPool.query(
    "SELECT * FROM articlegroup ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getArticleGroupById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM articlegroup WHERE id = $1 RETURNING *",
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

const createArticleGroup = (request, response) => {
  const { name, description, discount, category_id } = request.body;

  connectionPool.query(
    "INSERT INTO articlegroup (name, description, discount, category_id) VALUES ($1, $2, $3, $4) RETURNING id",
    [name, description, discount, category_id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response
        .status(201)
        .send(`Article group added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateArticleGroup = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, description, discount, category_id } = request.body;

  connectionPool.query(
    "UPDATE articlegroup SET name = $2, description = $3, discount = $4, category_id = $5 WHERE id = $1 RETURNING id",
    [id, name, description, discount, category_id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Article group modified with ID: ${id}`);
    }
  );
};

const deleteArticleGroup = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM articlegroup WHERE id = $1 RETURNING id",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
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
