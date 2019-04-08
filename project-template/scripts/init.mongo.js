// Connect to the issuetracker database. Note, if the issuetracker database
// does not exist, it will create it with this call.
db = new Mongo().getDB('studyBuddy');

// Next, we remove everything inside it. This is helpful to ensure that the
// database starts from a known state.
db.students.remove({});

// Now, we insert some mock data that mirrors the data that we have in the
// in-memory version of the server.js code.

// db.students.insert([
//   {
//     status: 'Open', owner: 'Ravan',
//     created: new Date('2016-08-15'), effort: 5, completionDate: undefined,
//     title: 'Error in console when clicking Add',
//   }, {
//     status: 'Assigned', owner: 'Eddie',
//     created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'),
//     title: 'Missing bottom border on panel',
//   },]);

db.students.insert([
  {
    name: 'Student McLearner',
    major: 'Computer Science',
    bio: 'I love Computer Science and am a huge fan of Tim Richards. I hope he gives me an A for this project',
    courses: [
      {
      course_id: 'COMPSCI 373',
      course_name: 'Intro to Computer Graphics'
      }, {
      course_id: 'COMPSCI 326',
      course_name: 'Intro to Web Programming'
      },
    ]
  }]);

// Lastly, we create "indexes" to make searching faster. For this particular
// application we know that searching on the status, owner, and created properties
// will be common, so we create indexes on those.
db.students.createIndex({ name: 1 });
db.students.createIndex({ bio: 1 });
db.students.createIndex({ courses: 1 });