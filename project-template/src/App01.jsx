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
        <Profile />
        <Classes />
      </div>
    );
  }
}

class Profile extends React.Component {
  render() {
    return (
      <div>
        <h3>My Profile</h3>
      </div>
    );
  }
}

class Classes extends React.Component {
  render() {
    return (
      <div>
        <h3>Classes I am taking:</h3>
        <table>
        	<thead>
        		<th>Course ID</th>
        		<th>Course Name</th>
        	</thead>
        	<tbody>
        		<ClassRow course_id="COMPSCI 373" course_title="Intro to Computer Graphics"/>
        		<ClassRow course_id="COMPSCI 326" course_title="Intro to Web Programming"/>
        	</tbody>
        </table>
      </div>
    );
  }
}

class ClassRow extends React.Component {
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
