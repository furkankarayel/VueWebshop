const articleRouter = require("./routes/article");
const articleGroupRouter = require("./routes/articlegroup");
const categoryRouter = require("./routes/category");
const roleRouter = require("./routes/role");
const customerRouter = require("./routes/customer");

const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();
const port = 8081;

// logger lib for requests
app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

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
