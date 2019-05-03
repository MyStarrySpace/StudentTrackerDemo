import React from 'react';
import { Link } from 'react-router';

export default class Login extends React.Component {
  render() {
    return (
      <div>
        <h2>Welcome to Study Buddies!</h2>
        <form>
            Name:<br />
            <input type="text" name="firstname"></input><br />
            <input type="submit" value="Submit"></input>
        </form>
        <p><Link to="/students">Login</Link></p>
      </div>
    );
  }
}