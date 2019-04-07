const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('App started on port 3000');
});

const MongoClient = require('mongodb').MongoClient;

const studentFieldType = {
  name: 'required',
  bio: 'required',
  courses: 'required',
};

// app.get('/api/students', (req, res) => {
//   const filter = {};
//   if (req.query.status) filter.status = req.query.status;

//   db.collection('students').find(filter).toArray().then(students => {
//     const metadata = { total_count: students.length };
//     res.json({ _metadata: metadata, records: students })
//   }).catch(error => {
//     console.log(error);
//     res.status(500).json({ message: `Internal Server Error: ${error}` });
//   });
// });

// app.post('/api/students', (req, res) => {
//   const newStudent = req.body;
//   newStudent.created = new Date();
//   if (!newStudent.status)
//     newStudent.status = 'New';

//   db.collection('students').insertOne(newStudent).then(result =>
//     db.collection('students').find({ _id: result.insertedId }).limit(1).next()
//   ).then(newStudent => {
//     res.json(newStudent);
//   }).catch(error => {
//     console.log(error);
//     res.status(500).json({ message: `Internal Server Error: ${error}` });
//   });
// });

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('studyBuddy');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});