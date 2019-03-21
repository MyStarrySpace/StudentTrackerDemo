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
        <h3>This is a placeholder for the profile component.</h3>
      </div>
    );
  }
}

class Classes extends React.Component {
  render() {
    return (
      <div>
        <h3>This is a placeholder for the classes component.</h3>
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Dashboard />, contentNode);
