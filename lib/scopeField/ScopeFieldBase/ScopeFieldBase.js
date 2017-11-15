'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _propTypes = require('prop-types');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScopedField = function (_Component) {
  _inherits(ScopedField, _Component);

  function ScopedField() {
    _classCallCheck(this, ScopedField);

    return _possibleConstructorReturn(this, (ScopedField.__proto__ || Object.getPrototypeOf(ScopedField)).apply(this, arguments));
  }

  _createClass(ScopedField, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(oldProps) {
      var _props = this.props,
          scope = _props.scope,
          resetFieldValue = _props.resetFieldValue;

      if (scope !== oldProps.scope) {
        resetFieldValue();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          scope = _props2.scope,
          scopeName = _props2.scopeName,
          _props2$options = _props2.options;
      _props2$options = _props2$options === undefined ? {} : _props2$options;
      var allowEmptyScope = _props2$options.allowEmptyScope,
          missingScopePlaceholderText = _props2$options.missingScopePlaceholderText;

      var child = _react.Children.only(children);
      var childProps = _extends({}, child.props);

      var scopeRequiredButEmpty = !scope && !allowEmptyScope;
      if (scopeRequiredButEmpty) {
        childProps.disabled = true;
        childProps.placeholder = missingScopePlaceholderText || 'Choose ' + scopeName + ' first';
      }

      return (0, _react.cloneElement)(child, _extends({}, childProps, { key: scope }));
    }
  }]);

  return ScopedField;
}(_react.Component);

exports.default = ScopedField;


ScopedField.propTypes = {
  children: _propTypes.PropTypes.node.isRequired,
  scope: _propTypes.PropTypes.string.isRequired,
  scopeName: _propTypes.PropTypes.string.isRequired,
  resetFieldValue: _propTypes.PropTypes.func.isRequired, // provided by wrapper
  onReset: _propTypes.PropTypes.func, // provided by user
  options: _propTypes.PropTypes.shape({
    allowEmptyScope: _propTypes.PropTypes.bool,
    missingScopePlaceholderText: _propTypes.PropTypes.string
  })
};