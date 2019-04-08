import React from 'react';
import { Link } from 'react-router';

export default class StudentFilter extends React.Component {
  constructor() {
    super();
    this.clearFilter = this.clearFilter.bind(this);
    this.setFilterMcJoe = this.setFilterMcJoe.bind(this);
    this.setFilterMcLearner = this.setFilterMcLearner.bind(this);
  }

  setFilterMcJoe(e) {
    e.preventDefault();
    this.props.setFilter({ name: 'Bob McJoe' });
  }

  setFilterMcLearner(e) {
    e.preventDefault();
    this.props.setFilter({ name: 'Student McLearner' });
  }

  clearFilter(e) {
    e.preventDefault();
    this.props.setFilter({});
  }

  render() {
    const Separator = () => <span> | </span>;
    return (
      <div>
        <a href="#" onClick={this.clearFilter}>All Students</a>
        <Separator />
        <a href="#" onClick={this.setFilterMcJoe}>Bob McJoe</a>
        <Separator />
        <a href="#" onClick={this.setFilterMcLearner}>Student McLearner</a>
      </div>);
  }
}

StudentFilter.propTypes = {
  setFilter: React.PropTypes.func.isRequired,
};