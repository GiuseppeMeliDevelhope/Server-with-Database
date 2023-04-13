import pg from 'pg';
const { Client } = pg;

import http from 'http';


const client = new Client({
  user: 'antonellamle',
  host: 'localhost',
  database: 'antonellamle',
  password: 'Antonella18',
  port: 5432,
});

client.connect();

const server = http.createServer((req, res) => {
  
  client.query('SELECT * FROM users', (err, queryRes) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error: ${err}`);
    } else {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(queryRes.rows));
    }
  });
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
