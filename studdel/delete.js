const express = require('express');
const db = require('./db');
const path = require('path');
const app = express();
const port = 3001;

// Serve static files from "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Parse form data
app.use(express.urlencoded({ extended: true }));

// Route to serve students.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'students.html'));
});

// API to get all students
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) {
            console.error('DB Error:', err);
            return res.status(500).send('Database error');
        }
        res.json(results);
    });
});

// Delete student by ID
app.post('/delete/:id', (req, res) => {
    const id = req.params.id;
    db.query('DELETE FROM students WHERE id = ?', [id], (err, result) => {
        if (err) return res.status(500).send(err);
        res.redirect('/');
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
