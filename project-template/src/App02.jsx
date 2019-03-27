// This is a place holder for the initial application state.
const state = [

];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

class Profile extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>My Profile</h1>
        <Edit />
        <Name name="Student Mclearner"/>
        <Bio bio_text="I love Computer Science and am a huge fan of Tim Richards. I hope he gives me an A for this project"/>
      </div>
    );
  }
}

class Edit extends React.Component {
  constructor(){
    super();
    this.state = {isToggleOn: true};
    this.handleClick = this.handleClick.bind(this);
  }
    handleClick(){
      this.setState(state => ({
        isToggleOn: !state.isToggleOn
      }));
    }

    handleChange(){
      this.setState({name: event.target.value});
    };

  render() {
    return (
      <div>
      <button onClick={this.handleClick}> 
      {this.state.isToggleOn ? 'Edit my Profile' : 'Okay'}
      </button>
      </div>
    );
  }
}

class Name extends React.Component {
  render() {
    return (
      <h4>{this.props.name}</h4>
    );
  }
}

class Bio extends React.Component {
  render() {
    return (
      <div>
      <h4>My Bio</h4>
      {this.props.bio_text}
      </div>
    );
  }
}

// This renders the JSX component inside the content node:
ReactDOM.render(<Profile />, contentNode);
