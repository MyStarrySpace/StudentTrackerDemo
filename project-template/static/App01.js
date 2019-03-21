"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Dashboard = function (_React$Component) {
  _inherits(Dashboard, _React$Component);

  function Dashboard() {
    _classCallCheck(this, Dashboard);

    return _possibleConstructorReturn(this, (Dashboard.__proto__ || Object.getPrototypeOf(Dashboard)).call(this));
  }

  _createClass(Dashboard, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "Dashboard"
        ),
        React.createElement(Profile, { name: "Student McLearner", bio: "I love Computer Science and am a huge fan of Tim Richards. I hope he gives me an A for this project" }),
        React.createElement(Classes, null)
      );
    }
  }]);

  return Dashboard;
}(React.Component);

var Profile = function (_React$Component2) {
  _inherits(Profile, _React$Component2);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).apply(this, arguments));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "My Profile"
        ),
        React.createElement(
          "h4",
          null,
          this.props.name
        ),
        React.createElement(
          "p",
          null,
          this.props.bio
        )
      );
    }
  }]);

  return Profile;
}(React.Component);

var Classes = function (_React$Component3) {
  _inherits(Classes, _React$Component3);

  function Classes() {
    _classCallCheck(this, Classes);

    return _possibleConstructorReturn(this, (Classes.__proto__ || Object.getPrototypeOf(Classes)).apply(this, arguments));
  }

  _createClass(Classes, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Classes I am taking:"
        ),
        React.createElement(
          "table",
          null,
          React.createElement(
            "thead",
            null,
            React.createElement(
              "th",
              null,
              "Course ID"
            ),
            React.createElement(
              "th",
              null,
              "Course Name"
            )
          ),
          React.createElement(
            "tbody",
            null,
            React.createElement(ClassRow, { course_id: "COMPSCI 373", course_title: "Intro to Computer Graphics" }),
            React.createElement(ClassRow, { course_id: "COMPSCI 326", course_title: "Intro to Web Programming" })
          )
        )
      );
    }
  }]);

  return Classes;
}(React.Component);

var ClassRow = function (_React$Component4) {
  _inherits(ClassRow, _React$Component4);

  function ClassRow() {
    _classCallCheck(this, ClassRow);

    return _possibleConstructorReturn(this, (ClassRow.__proto__ || Object.getPrototypeOf(ClassRow)).apply(this, arguments));
  }

  _createClass(ClassRow, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          this.props.course_id
        ),
        React.createElement(
          "td",
          null,
          this.props.course_title
        )
      );
    }
  }]);

  return ClassRow;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Dashboard, null), contentNode);