const express = require('express');
const path = require('path');
const db = require('./db');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route to get student data
app.post('/get-student', (req, res) => {
  const id = req.body.id;
  db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.send('Student not found.');
    }
  });
});

// Route to update student data
app.post('/update-student', (req, res) => {
  const { id, name, email, phone } = req.body;
  db.query('UPDATE students SET name = ?, email = ?, phone = ?,dob = ? WHERE id = ?', 
  [name, email, phone, dob, id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send('Student updated successfully.');
    } else {
      res.send('Update failed. Student not found.');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
