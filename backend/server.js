const express = require("express");
const app = express();
const port = 8081;

app.get("/", (request, response) => {
  response.json({ info: "Node.js, Express, and Postgres REST API" });
});
