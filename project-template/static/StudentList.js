'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('isomorphic-fetch');

var _reactRouter = require('react-router');

var _StudentAdd = require('./StudentAdd.jsx');

var _StudentAdd2 = _interopRequireDefault(_StudentAdd);

var _StudentFilter = require('./StudentFilter.jsx');

var _StudentFilter2 = _interopRequireDefault(_StudentFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentRow = function StudentRow(props) {
  return _react2.default.createElement(
    'tr',
    null,
    _react2.default.createElement(
      'td',
      null,
      _react2.default.createElement(
        _reactRouter.Link,
        { to: '/students/' + props.student._id },
        props.student._id.substr(-4)
      )
    ),
    _react2.default.createElement(
      'td',
      null,
      props.student.name
    ),
    _react2.default.createElement(
      'td',
      null,
      props.student.major
    ),
    _react2.default.createElement(
      'td',
      null,
      props.student.bio
    ),
    _react2.default.createElement(
      'td',
      null,
      props.student.courses
    )
  );
};

function StudentTable(props) {
  var studentRows = props.students.map(function (student) {
    return _react2.default.createElement(StudentRow, { key: student._id, student: student });
  });
  return _react2.default.createElement(
    'table',
    { className: 'bordered-table' },
    _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'th',
          null,
          'Id'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Name'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Major'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Bio'
        ),
        _react2.default.createElement(
          'th',
          null,
          'Courses'
        )
      )
    ),
    _react2.default.createElement(
      'tbody',
      null,
      studentRows
    )
  );
}

var StudentList = function (_React$Component) {
  _inherits(StudentList, _React$Component);

  function StudentList() {
    _classCallCheck(this, StudentList);

    var _this = _possibleConstructorReturn(this, (StudentList.__proto__ || Object.getPrototypeOf(StudentList)).call(this));

    _this.state = { students: [] };

    _this.createStudent = _this.createStudent.bind(_this);
    _this.setFilter = _this.setFilter.bind(_this);
    return _this;
  }

  _createClass(StudentList, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.loadData();
    }

    // This method is part of the React component "lifecycle". It is invoked
    // when a component property is updated. In this case, we are using it to
    // load new data when the props.location object is changed. In particular,
    // when we click on a link that causes react router to change the view to
    // the StudentList and the URL changes (for example, a search query) it
    // causes the componentDidUpdate() method to be invoked.

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var oldQuery = prevProps.location.query;
      var newQuery = this.props.location.query;
      if (oldQuery.status === newQuery.status) {
        return;
      }
      this.loadData();
    }
  }, {
    key: 'loadData',
    value: function loadData() {
      var _this2 = this;

      // Note: React Router automatically adds a "location" property to a react
      //       object's "props". The object that the "location" property refers
      //       to also has a "search" property which is the query string of the
      //       URL, including the '?' character  -  which is why we do not need
      //       to add it to the string in the `fetch()` call.
      fetch('/api/students' + this.props.location.search).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            console.log("Total count of records:", data._metadata.total_count);
            data.records.forEach(function (student) {
              student.created = new Date(student.created);
              if (student.completionDate) student.completionDate = new Date(student.completionDate);
            });
            _this2.setState({ students: data.records });
          });
        } else {
          response.json().then(function (error) {
            alert("Failed to fetch students:" + error.message);
          });
        }
      }).catch(function (err) {
        alert("Error in fetching data from server:", err);
      });
    }
  }, {
    key: 'createStudent',
    value: function createStudent(newStudent) {
      var _this3 = this;

      fetch('/api/students', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newStudent)
      }).then(function (res) {
        if (res.ok) {
          res.json().then(function (updatedStudent) {
            updatedStudent.created = new Date(updatedStudent.created);
            if (updatedStudent.completionDate) updatedStudent.completionDate = new Date(updatedStudent.completionDate);
            var newStudents = _this3.state.students.concat(updatedStudent);
            _this3.setState({ students: newStudents });
          });
        } else {
          res.json().then(function (error) {
            alert('Failed to add student: ' + error.message);
          });
        }
      });
    }
  }, {
    key: 'setFilter',
    value: function setFilter(query) {
      this.props.router.push({ pathname: this.props.location.pathname, query: query });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_StudentFilter2.default, { setFilter: this.setFilter }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(StudentTable, { students: this.state.students }),
        _react2.default.createElement('hr', null),
        _react2.default.createElement(_StudentAdd2.default, { createStudent: this.createStudent })
      );
    }
  }]);

  return StudentList;
}(_react2.default.Component);

exports.default = StudentList;


StudentList.propTypes = {
  location: _react2.default.PropTypes.object.isRequired,
  router: _react2.default.PropTypes.object
};