const pgCon = require("pg");
const PGHOST = "localhost";
const PGUSER = "postgres";
const PGDATABASE = "webshop";
const PGPASSWORD = "shopshop";

let config = {
  host: PGHOST,
  user: PGUSER,
  database: PGDATABASE,
  password: PGPASSWORD,
  max: 10,
  idleTimeoutMillis: 30000,
};

let connectionPool = new pgCon.Pool(config);

module.exports = connectionPool;
