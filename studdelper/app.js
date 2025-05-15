const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Route: Get student by ID
app.post('/get-student', (req, res) => {
  const id = req.body.id;
  db.query('SELECT * FROM students WHERE id = ?', [id], (err, results) => {
    if (err) throw err;
    if (results.length > 0) {
      res.send(results[0]);
    } else {
      res.send('Student not found');
    }
  });
});

// Route: Delete student by ID
app.post('/delete-student', (req, res) => {
  const id = req.body.id;
  db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
    if (err) throw err;
    if (result.affectedRows > 0) {
      res.send('Student deleted successfully.');
    } else {
      res.send('Delete failed. Student not found.');
    }
  });
});

// Start the server
app.listen(3003, () => {
  console.log('Server running at http://localhost:3003');
});
