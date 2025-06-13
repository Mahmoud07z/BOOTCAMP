const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'posts',
  password: 'Miles2003',
  port: 5432,
});

module.exports = pool;
