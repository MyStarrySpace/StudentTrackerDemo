'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

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