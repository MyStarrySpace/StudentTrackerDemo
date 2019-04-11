import React from 'react';
import 'isomorphic-fetch';
import { Link } from 'react-router';

import StudentAdd from './StudentAdd.jsx';
import StudentFilter from './StudentFilter.jsx';

const StudentRow = (props) => (
  <tr>
    <td><Link to={`/students/${props.student._id}`}>{props.student._id.substr(-4)}</Link></td>
    <td>{props.student.name}</td>
    <td>{props.student.major}</td>
    <td>{props.student.bio}</td>
  </tr>
);

function StudentTable(props) {
  const studentRows = props.students.map(student => (
    <StudentRow key={student._id} student={student} />
  ));
  return (
    <table className="bordered-table">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Major</th>
          <th>Bio</th>
        </tr>
      </thead>
      <tbody>{studentRows}</tbody>
    </table>
  );
}

export default class StudentList extends React.Component {
  constructor() {
    super();
    this.state = { students: [] };

    this.createStudent = this.createStudent.bind(this);
    this.setFilter = this.setFilter.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }

  // This method is part of the React component "lifecycle". It is invoked
  // when a component property is updated. In this case, we are using it to
  // load new data when the props.location object is changed. In particular,
  // when we click on a link that causes react router to change the view to
  // the StudentList and the URL changes (for example, a search query) it
  // causes the componentDidUpdate() method to be invoked.
  componentDidUpdate(prevProps) {
    const oldQuery = prevProps.location.query;
    const newQuery = this.props.location.query;
    if (oldQuery.status === newQuery.status) {
      return;
    }
    this.loadData();
  }

  loadData() {
    // Note: React Router automatically adds a "location" property to a react
    //       object's "props". The object that the "location" property refers
    //       to also has a "search" property which is the query string of the
    //       URL, including the '?' character  -  which is why we do not need
    //       to add it to the string in the `fetch()` call.
    fetch(`/api/students${this.props.location.search}`).then(response => {
      if (response.ok) {
        response.json().then(data => {
          console.log("Total count of records:", data._metadata.total_count);
          data.records.forEach(student => {
            student.created = new Date(student.created);
            if (student.completionDate)
              student.completionDate = new Date(student.completionDate);
          });
          this.setState({ students: data.records });
        });
      } else {
        response.json().then(error => {
          alert("Failed to fetch students:" + error.message)
        });
      }
    }).catch(err => {
      alert("Error in fetching data from server:", err);
    });
  }

  createStudent(newStudent) {
    fetch('/api/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newStudent),
    })
      .then(res => {
        if (res.ok) {
          res.json()
            .then(updatedStudent => {
              updatedStudent.created = new Date(updatedStudent.created);
              if (updatedStudent.completionDate)
                updatedStudent.completionDate = new Date(updatedStudent.completionDate);
              const newStudents = this.state.students.concat(updatedStudent);
              this.setState({ students: newStudents });
            });
        }
        else {
          res.json()
            .then(error => {
              alert('Failed to add student: ' + error.message);
            });
        }
      });
  }

  setFilter(query) {
    this.props.router.push({ pathname: this.props.location.pathname, query });
  }

  render() {
    return (
      <div>
        <StudentFilter setFilter={this.setFilter} />
        <hr />
        <StudentTable students={this.state.students} />
        <hr />
        <StudentAdd createStudent={this.createStudent} />
      </div>
    );
  }
}

StudentList.propTypes = {
  location: React.PropTypes.object.isRequired,
  router: React.PropTypes.object,
};