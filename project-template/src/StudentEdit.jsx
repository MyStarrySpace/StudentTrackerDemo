import React from 'react';
import { Link } from 'react-router';

export default class StudentEdit extends React.Component {
  render() {
    return (
      <div>
        <p>This is a placeholder for editing student {this.props.params.id}.</p>
        <Link to="/students">Back to student list</Link>
      </div>
    );
  }
}

StudentEdit.propTypes = {
  params: React.PropTypes.object.isRequired,
};