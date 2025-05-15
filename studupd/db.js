const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'mysqlom',       // or your MySQL password
  database: 'studentdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('✅ Connected to MySQL');
});

module.exports = connection;











// CREATE DATABASE studentdb;

// USE studentdb;

// CREATE TABLE students (
//   name VARCHAR(100),
//   email VARCHAR(100),
//   phone VARCHAR(20),
//   dob DATE
// );
// SELECT * FROM students;
// INSERT INTO students
// (name, email, phone , dob) 
// VALUES 
// ("om", "omdhanal@gmail.com", '9637815672', '2005-05-18');

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'mysqlom';
// FLUSH PRIVILEGES;
