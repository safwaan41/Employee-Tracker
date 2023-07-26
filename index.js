// BOILER PLATE SERVER FOR SQL

const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'westeros_db'
  },
  console.log(`Connected to the westeros_db database.`)
);

// QUERY FOR department TABLE (1/3)
db.query('SELECT * FROM department', function (err, results) {
  if (err) {
    console.log(err);
    return;
  }
  console.table(results);
});
// QUERY FOR role TABLE (2/3)
db.query('SELECT * FROM role', function (err, results) {
    if (err) {
      console.log(err);
      return;
    }
    console.table(results);
  });
// QUERY FOR employee TABLE (3/3)
db.query('SELECT * FROM employee', function (err, results) {
    if (err) {
      console.log(err);
      return;
    }
    console.table(results);
  });

app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
