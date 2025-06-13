const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'usermanagementapi',
  password: 'Miles2003',
  port: 5432,
});

module.exports = pool;