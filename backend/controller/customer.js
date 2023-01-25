const Pool = require("pg").Pool;
const connectionPool = new Pool({
  host: "backend-postgres-1",
  user: "dbuser",
  database: "webshop",
  password: "postgres",
  port: 5432,
});

const getCustomers = (request, response) => {
  connectionPool.query(
    "SELECT * FROM customer ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getCustomerById = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "SELECT * FROM customer WHERE id = $1",
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

const createCustomer = (request, response) => {
  const { name, email, password, role_id } = request.body;

  connectionPool.query(
    "INSERT INTO customer (name, email, password, role_id) VALUES ($1, $2, $3, $4) RETURNING id",
    [name, email, password, role_id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response
        .status(201)
        .send(`Customer added with ID: ${results.rows[0].id}`);
    }
  );
};

const updateCustomer = (request, response) => {
  const id = parseInt(request.params.id);
  const { name, email, password, role_id } = request.body;

  connectionPool.query(
    "UPDATE customer SET name = $2, email = $3, password = $3, role_id = $4 WHERE id = $1 RETURNING id",
    [id, name, email, password, role_id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Customer modified with ID: ${id}`);
    }
  );
};

const deleteCustomer = (request, response) => {
  const id = parseInt(request.params.id);

  connectionPool.query(
    "DELETE FROM customer WHERE id = $1 RETURNING id",
    [id],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).send(`Customer deleted with ID: ${id}`);
    }
  );
};

module.exports = {
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
