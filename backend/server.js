const articleRouter = require("./routes/article");
const articleGroupRouter = require("./routes/articlegroup");
const categoryRouter = require("./routes/category");
const roleRouter = require("./routes/role");
const customerRouter = require("./routes/customer");

const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.BACKEND_PORT || 8081;

// logger lib for requests
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres REST API" });
});

app.use(articleRouter);
app.use(articleGroupRouter);
app.use(categoryRouter);
app.use(roleRouter);
app.use(customerRouter);

app.listen(port, () => {
  console.log(`Webshop REST API running on ${port}.`);
});
