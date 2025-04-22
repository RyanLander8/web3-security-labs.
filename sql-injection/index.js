const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'web3_security'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}'`;
  connection.query(query, (error, results) => {
    if (error) throw error;
    if (results.length > 0) {
      res.send('Login successful! 🎉');
    } else {
      res.send('Login failed. 😢');
    }
  });
});

app.get('/', (req, res) => {
  res.send(`
    <h1>Web3 Security Lab: Login</h1>
    <form method="POST" action="/login">
      <label>Username: <input type="text" name="username"></label><br>
      <label>Password: <input type="password" name="password"></label><br>
      <button type="submit">Login</button>
    </form>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
