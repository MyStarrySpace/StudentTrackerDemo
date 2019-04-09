webpackJsonp([0],{

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(47);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _reactRouter = __webpack_require__(21);

var _StudentList = __webpack_require__(251);

var _StudentList2 = _interopRequireDefault(_StudentList);

var _StudentEdit = __webpack_require__(255);

var _StudentEdit2 = _interopRequireDefault(_StudentEdit);

var _Login = __webpack_require__(256);

var _Login2 = _interopRequireDefault(_Login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var contentNode = document.getElementById("contents");

// A simple component to indicate that a page was not found.
var NoMatch = function NoMatch() {
  return _react2.default.createElement(
    'p',
    null,
    'Page Not Found'
  );
};

// This defines the main application layout that can be used
// across nested routes. The `props.children` property is received
// by the parent route. See the route definitions below.
var App = function App(props) {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { className: 'header' },
      _react2.default.createElement(
        'h1',
        null,
        'Study Buddies'
      ),
      _react2.default.createElement(
        'p',
        null,
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/' },
          'Logout'
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'contents' },
      props.children
    ),
    _react2.default.createElement(
      'div',
      { className: 'footer' },
      'COMPSCI 326'
    )
  );
};

// For safety, we specify that the prop types received by the
// App component must require a "children" property. If we do
// not include this it will not compile.
App.propTypes = {
  children: _react2.default.PropTypes.object.isRequired
};

// The "routed app" that defines the different routes that
// are supposed in this application. As you can see, If the
// URL path is '/' we will render the IssueList component,
// if the path is '/issues/:id' we render the IssueEdit component,
// and if we get anything else we render the NoMatch view.
// This router uses the "hash history" approach to implement
// single-page apps with multiple views.
var RoutedApp = function RoutedApp() {
  return _react2.default.createElement(
    _reactRouter.Router,
    { history: _reactRouter.hashHistory },
    _react2.default.createElement(
      _reactRouter.Route,
      { path: '/', component: App },
      _react2.default.createElement(_reactRouter.IndexRoute, { component: _Login2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '/students', component: (0, _reactRouter.withRouter)(_StudentList2.default) }),
      _react2.default.createElement(_reactRouter.Route, { path: '/students:id', component: _StudentEdit2.default }),
      _react2.default.createElement(_reactRouter.Route, { path: '*', component: NoMatch })
    )
  );
};

// This renders the JSX router inside the content node:
_reactDom2.default.render(_react2.default.createElement(RoutedApp, null), contentNode);

/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(114);

var _reactRouter = __webpack_require__(21);

var _StudentAdd = __webpack_require__(253);

var _StudentAdd2 = _interopRequireDefault(_StudentAdd);

var _StudentFilter = __webpack_require__(254);

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

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // NEW: added the import for react.


var StudentAdd = function (_React$Component) {
  _inherits(StudentAdd, _React$Component);

  function StudentAdd() {
    _classCallCheck(this, StudentAdd);

    var _this = _possibleConstructorReturn(this, (StudentAdd.__proto__ || Object.getPrototypeOf(StudentAdd)).call(this));

    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
  }

  _createClass(StudentAdd, [{
    key: 'handleSubmit',
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.studentAdd;
      this.props.createStudent({
        name: form.name.value,
        major: form.major.value,
        bio: form.bio.value,
        courses: {}
      });
      // Clear the form for the next input.
      form.name.value = '';
      form.major.value = '';
      form.bio.value = '';
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'form',
          { name: 'studentAdd', onSubmit: this.handleSubmit },
          _react2.default.createElement('input', { type: 'text', name: 'name', placeholder: 'Name' }),
          _react2.default.createElement('input', { type: 'text', name: 'major', placeholder: 'Major' }),
          _react2.default.createElement('input', { type: 'textarea', name: 'bio', placeholder: 'Bio' }),
          _react2.default.createElement(
            'button',
            null,
            'Add'
          )
        )
      );
    }
  }]);

  return StudentAdd;
}(_react2.default.Component);

exports.default = StudentAdd;

/***/ }),

/***/ 254:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentFilter = function (_React$Component) {
  _inherits(StudentFilter, _React$Component);

  function StudentFilter() {
    _classCallCheck(this, StudentFilter);

    var _this = _possibleConstructorReturn(this, (StudentFilter.__proto__ || Object.getPrototypeOf(StudentFilter)).call(this));

    _this.clearFilter = _this.clearFilter.bind(_this);
    _this.setFilterMcJoe = _this.setFilterMcJoe.bind(_this);
    _this.setFilterMcLearner = _this.setFilterMcLearner.bind(_this);
    return _this;
  }

  _createClass(StudentFilter, [{
    key: 'setFilterMcJoe',
    value: function setFilterMcJoe(e) {
      e.preventDefault();
      this.props.setFilter({ name: 'Bob McJoe' });
    }
  }, {
    key: 'setFilterMcLearner',
    value: function setFilterMcLearner(e) {
      e.preventDefault();
      this.props.setFilter({ name: 'Student McLearner' });
    }
  }, {
    key: 'clearFilter',
    value: function clearFilter(e) {
      e.preventDefault();
      this.props.setFilter({});
    }
  }, {
    key: 'render',
    value: function render() {
      var Separator = function Separator() {
        return _react2.default.createElement(
          'span',
          null,
          ' | '
        );
      };
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.clearFilter },
          'All Students'
        ),
        _react2.default.createElement(Separator, null),
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.setFilterMcJoe },
          'Bob McJoe'
        ),
        _react2.default.createElement(Separator, null),
        _react2.default.createElement(
          'a',
          { href: '#', onClick: this.setFilterMcLearner },
          'Student McLearner'
        )
      );
    }
  }]);

  return StudentFilter;
}(_react2.default.Component);

exports.default = StudentFilter;


StudentFilter.propTypes = {
  setFilter: _react2.default.PropTypes.func.isRequired
};

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StudentEdit = function (_React$Component) {
  _inherits(StudentEdit, _React$Component);

  function StudentEdit() {
    _classCallCheck(this, StudentEdit);

    return _possibleConstructorReturn(this, (StudentEdit.__proto__ || Object.getPrototypeOf(StudentEdit)).apply(this, arguments));
  }

  _createClass(StudentEdit, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'p',
          null,
          'This is a placeholder for editing student ',
          this.props.params.id,
          '.'
        ),
        _react2.default.createElement(
          _reactRouter.Link,
          { to: '/students' },
          'Back to student list'
        )
      );
    }
  }]);

  return StudentEdit;
}(_react2.default.Component);

exports.default = StudentEdit;


StudentEdit.propTypes = {
  params: _react2.default.PropTypes.object.isRequired
};

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(21);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).apply(this, arguments));
  }

  _createClass(Dashboard, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Issue Tracker Dashboard'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '/issues' },
              'Login'
            )
          )
        )
      );
    }
  }]);

  return Dashboard;
}(_react2.default.Component);

exports.default = Dashboard;

/***/ })

},[115]);
//# sourceMappingURL=app.bundle.js.map