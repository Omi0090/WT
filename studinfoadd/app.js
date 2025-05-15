const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const PORT = 3002;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));



app.post('/submit', (req, res) => {
  const { name, email, phone, dob } = req.body;

  const sql = 'INSERT INTO students (name, email, phone, dob) VALUES (?, ?, ?, ?)';
  db.query(sql, [name, email, phone, dob], (err, result) => {
    if (err) throw err;
    res.send('<h3>Student Registered Successfully!</h3><a href="/">Go back</a>');
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});


