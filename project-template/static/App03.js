"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Courses = function (_React$Component) {
  _inherits(Courses, _React$Component);

  function Courses() {
    _classCallCheck(this, Courses);

    return _possibleConstructorReturn(this, (Courses.__proto__ || Object.getPrototypeOf(Courses)).call(this));
  }

  _createClass(Courses, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h3",
          null,
          "Courses I am taking:"
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
            React.createElement(CourseRow, { course_id: "COMPSCI 373", course_title: "Intro to Computer Graphics" }),
            React.createElement(CourseRow, { course_id: "COMPSCI 326", course_title: "Intro to Web Programming" })
          )
        )
      );
    }
  }]);

  return Courses;
}(React.Component);

var CourseRow = function (_React$Component2) {
  _inherits(CourseRow, _React$Component2);

  function CourseRow() {
    _classCallCheck(this, CourseRow);

    return _possibleConstructorReturn(this, (CourseRow.__proto__ || Object.getPrototypeOf(CourseRow)).apply(this, arguments));
  }

  _createClass(CourseRow, [{
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

  return CourseRow;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Courses, null), contentNode);