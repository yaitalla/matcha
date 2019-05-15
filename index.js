const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'yaitalla',
  password : 'supersecretmatcha',
  database : 'matcha_db'
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist/'));


app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
