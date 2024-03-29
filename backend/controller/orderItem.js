const pg_conn = require('../util/pg_conn')

const getOrders = (request, response) => {
  pg_conn.query(
    "SELECT * FROM orderItem ORDER BY id ASC",
    (error, results) => {
      if (error) {
        response.status(500).send(`An error has occurred.`);
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
};

const getOrderById = (request, response) => {
  const id = parseInt(request.params.id);

  pg_conn.pool.query(
    "SELECT * FROM order WHERE id = $1 RETURNING *",
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

const getOrderItemsByOrderId = (request, response) => {
  const id = parseInt(request.params.order_id);

  pg_conn.pool.query(
    "SELECT * FROM order_item WHERE order_id = $1 RETURNING *",
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

const createOrder = (request, response) => {
  const { customer_id, articles } = request.body;
  var order_id;
  pg_conn.pool.query(
    `INSERT INTO order (customer_id, create_date) VALUES ($1, to_timestamp(${Date.now() / 1000
    }))  RETURNING id`,
    [customer_id],
    (error, results) => {
      if (error) {
        throw error;
      }
      order_id = results.rows[0].id;
      response.status(201).send(`Order added with ID: ${order_id}`);
    }
  );
  articles.forEach((article) => {
    pg_conn.pool.query(
      `INSERT INTO order_item (order_id, article_id) VALUES (${order_id}, ${article.id}  RETURNING id`,
      (error, results) => {
        if (error) {
          throw error;
        }
        order_item_id = results.rows[0].id;
        response
          .status(201)
          .send(
            `Order_items with ID ${order_item_id} added to order with ID: ${order_id}`
          );
      }
    );
  });

  response.status(500).send(`An error has occurred.`);
};

// const updateArticle = (request, response) => {
//   const id = parseInt(request.params.id);
//   const { name, description, ean, articlegroup_id } = request.body;

//   pg_conn.pool.query(
//     "UPDATE article SET name = $2, description = $3, ean = $4, articlegroup_id = $5 WHERE id = $1 RETURNING id",
//     [id, name, description, ean, articlegroup_id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Article modified with ID: ${id}`);
//     }
//   );
//   response.status(500).send(`An error has occurred.`);
// };

// const deleteArticle = (request, response) => {
//   const id = parseInt(request.params.id);

//   pg_conn.pool.query(
//     "DELETE FROM article WHERE id = $1 RETURNING id",
//     [id],
//     (error, results) => {
//       if (error) {
//         throw error;
//       }
//       response.status(200).send(`Article deleted with ID: ${id}`);
//     }
//   );
//   response.status(500).send(`An error has occurred.`);
// };

module.exports = {
  getOrders,
  getOrderById,
  createOrder,
};
