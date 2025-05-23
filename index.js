// audit-server/index.js
require('dotenv').config();

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');
const app = express();
const port = 4004;

app.use(cors());
app.use(express.json());

const pool = new Pool({
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 host: process.env.DB_HOST,
 port: process.env.DB_PORT,
 database: process.env.DB_NAME
});

app.post('/logs', async (req, res) => {
 const { action_type, description } = req.body;

 try {
  await pool.query(
   'INSERT INTO audit_logs (action_type, description) VALUES ($1, $2)',
   [action_type, description]
  );
  res.status(201).send({ message: 'Log created' });
 } catch (err) {
  console.error(err);
  res.status(500).send({ error: 'Failed to create log' });
 }
});

app.get('/logs', async (req, res) => {
 try {
  const result = await pool.query('SELECT * FROM audit_logs ORDER BY timestamp DESC');
  res.json(result.rows);
 } catch (error) {
  console.error('Error fetching audit logs:', error);
  res.status(500).json({ error: 'Internal Server Error' });
 }
});

app.listen(port, () => {
 console.log(`Audit service running on port ${port}`);
});
