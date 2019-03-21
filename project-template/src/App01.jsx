// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Dashboard extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>Dashboard</h1>
        <Profile name="Student McLearner" bio="I love Computer Science and am a huge fan of Tim Richards. I hope he gives me an A for this project"/>
        <Courses />
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>My Profile</h3>
        <h4>{this.props.name}</h4>
        <p>{this.props.bio}</p>
      </div>
    );
  }
}

class Courses extends React.Component {
  render() {
    return (
      <div>
        <h3>Courses I am taking:</h3>
        <table>
        	<thead>
        		<th>Course ID</th>
        		<th>Course Name</th>
        	</thead>
        	<tbody>
        		<CourseRow course_id="COMPSCI 373" course_title="Intro to Computer Graphics"/>
        		<CourseRow course_id="COMPSCI 326" course_title="Intro to Web Programming"/>
        	</tbody>
        </table>
      </div>
    );
  }
}

class CourseRow extends React.Component {
  render() {
    return (
      <tr>
      	<td>{this.props.course_id}</td>
      	<td>{this.props.course_title}</td>
      </tr>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Dashboard />, contentNode);
