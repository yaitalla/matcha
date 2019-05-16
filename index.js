const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const iplocation = require("iplocation").default;

iplocation("127.0.0.1")
    .then((res) => {
      console.log('oui', res)
    })
    .catch(err => {
      console.log('non', err)
    });

const con = mysql.createConnection({
  host     : 'localhost',
  user     : 'yaitalla',
  password : 'supersecretmatcha',
  database : 'matcha_db'
});

// con.connect((err) => {
//   if (err) throw err;
//   console.log("Connected!");
// });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('./dist/'));
app.use(express.static('./src/static/'));


app.listen(process.env.port || 4000, () => {
  console.log('Server listening on http://localhost:4000 or http://127.0.0.1:4000')
});
