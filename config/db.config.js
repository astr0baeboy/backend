// config/db.config.js
const { Pool } = require('pg');   // Use PostgreSQL driver
require('dotenv').config();

// Create the connection pool using Neon DATABASE_URL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL, // Single connection string from .env
  // Optional SSL (Neon requires SSL)
  ssl: {
    rejectUnauthorized: false,
  },
});

console.log('✅ PostgreSQL Pool Created');

// Export the pool so your models/routes can use it
module.exports = pool;
