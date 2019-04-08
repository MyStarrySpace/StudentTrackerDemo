'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

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