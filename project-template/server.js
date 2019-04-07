const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('mongodb');

const app = express();

app.use(express.static('static'));
app.use(bodyParser.json());

const MongoClient = require('mongodb').MongoClient;

const studentFieldType = {
  name: 'required',
  major: 'required',
  bio: 'required',
  courses: 'optional',
};

app.get('/api/students', (req, res) => {
  const filter = {};
  if (req.query.major) filter.major = req.query.major;

  db.collection('students').find(filter).toArray().then(students => {
    const metadata = { total_count: students.length };
    res.json({ _metadata: metadata, records: students })
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

app.post('/api/students', (req, res) => {
  const newStudent = req.body;
   if (!newStudent.courses)
    newStudent.courses = {};

  db.collection('students').insertOne(newStudent).then(result =>
    db.collection('students').find({ _id: result.insertedId }).limit(1).next()
  ).then(newStudent => {
    res.json(newStudent);
  }).catch(error => {
    console.log(error);
    res.status(500).json({ message: `Internal Server Error: ${error}` });
  });
});

let db;
MongoClient.connect('mongodb://localhost', { useNewUrlParser: true }).then(connection => {
  db = connection.db('studyBuddy');
  app.listen(3000, () => {
    console.log('App started on port 3000');
  });
}).catch(error => {
  console.log('ERROR:', error);
});