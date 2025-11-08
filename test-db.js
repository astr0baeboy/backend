const pool = require('./config/db.config');

async function testDB() {
  try {
    const res = await pool.query('SELECT NOW() AS now');
    console.log('✅ Connected to DB:', res.rows[0].now);
  } catch (err) {
    console.error('❌ DB connection failed:', err);
  } finally {
    await pool.end();
  }
}

testDB();
