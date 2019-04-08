// NEW: added the import for react.
import React from 'react';

export default class StudentAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let form = document.forms.studentAdd;
    this.props.createStudent({
      name: form.name.value,
      major: form.major.value,
      bio: form.bio.value,
      courses: {},
    });
    // Clear the form for the next input.
    form.name.value = '';
    form.major.value = '';
    form.bio.value = '';
  }

  render() {
    return (
      <div>
        <form name="studentAdd" onSubmit={this.handleSubmit}>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="major" placeholder="Major" />
          <input type="textarea" name="bio" placeholder="Bio" />
          <button>Add</button>
        </form>
      </div>
    );
  }
}