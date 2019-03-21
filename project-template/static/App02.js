"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// This is a place holder for the initial application state.
var state = [];

// This grabs the DOM element to be used to mount React components.
var contentNode = document.getElementById("contents");

var Profile = function (_React$Component) {
  _inherits(Profile, _React$Component);

  function Profile() {
    _classCallCheck(this, Profile);

    return _possibleConstructorReturn(this, (Profile.__proto__ || Object.getPrototypeOf(Profile)).call(this));
  }

  _createClass(Profile, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "My Profile"
        ),
        React.createElement(Edit, null),
        React.createElement(Name, { name: "Student Mclearner" }),
        React.createElement(Bio, { bio_text: "I love Computer Science and am a huge fan of Tim Richards. I hope he gives me an A for this project" })
      );
    }
  }]);

  return Profile;
}(React.Component);

var Edit = function (_React$Component2) {
  _inherits(Edit, _React$Component2);

  function Edit() {
    _classCallCheck(this, Edit);

    return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
  }

  _createClass(Edit, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "button",
          null,
          "Edit my profile"
        )
      );
    }
  }]);

  return Edit;
}(React.Component);

var Name = function (_React$Component3) {
  _inherits(Name, _React$Component3);

  function Name() {
    _classCallCheck(this, Name);

    return _possibleConstructorReturn(this, (Name.__proto__ || Object.getPrototypeOf(Name)).apply(this, arguments));
  }

  _createClass(Name, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h4",
        null,
        this.props.name
      );
    }
  }]);

  return Name;
}(React.Component);

var Bio = function (_React$Component4) {
  _inherits(Bio, _React$Component4);

  function Bio() {
    _classCallCheck(this, Bio);

    return _possibleConstructorReturn(this, (Bio.__proto__ || Object.getPrototypeOf(Bio)).apply(this, arguments));
  }

  _createClass(Bio, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h4",
          null,
          "My Bio"
        ),
        this.props.bio_text
      );
    }
  }]);

  return Bio;
}(React.Component);

// This renders the JSX component inside the content node:


ReactDOM.render(React.createElement(Profile, null), contentNode);