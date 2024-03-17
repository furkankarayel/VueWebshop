const pg = require('pg');

const connectionPool = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    max: 4,
    idleTimeoutMillis: 30000,
};

const pool = new pg.Pool(connectionPool)
    .on('error', err => {
        console.error('idle client error', err.message, err.stack);
    });

async function testConnection() {
    await pool.query('SELECT $1::int AS number', [1]);

    console.log(colors.grey(
        `Postgres is online using ${client.database} as user ${client.user}\n` +
        `and is listening on ${client.host}`));
}

module.exports = {
    pool,
    testConnection,
};