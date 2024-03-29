const pg_conn = require('../util/pg_conn')

const loginCustomer = (request, response) => {
  const { email, password } = request.body;
  pg_conn.pool.query(
    "SELECT * FROM customer WHERE email = $1",
    [email],
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }

      if (password === results.rows[0].password) {
        response.status(200).json(results.rows);
      } else {
        response.status(400).send(`Wrong password.`);
        throw error;
      }
    }
  );
};

const getCustomers = (request, response) => {
  pg_conn.pool.query(
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

  pg_conn.pool.query(
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

  pg_conn.pool.query(
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

  pg_conn.pool.query(
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

  pg_conn.pool.query(
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
  loginCustomer,
  getCustomers,
  getCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
};
