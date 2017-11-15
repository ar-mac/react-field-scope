'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.scopeFieldForReduxForm = undefined;

var _react = require('react');

var _reactRedux = require('react-redux');

var _reduxForm = require('redux-form');

var _ScopeFieldBase = require('../ScopeFieldBase/ScopeFieldBase');

var _ScopeFieldBase2 = _interopRequireDefault(_ScopeFieldBase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var scopeFieldForReduxForm = exports.scopeFieldForReduxForm = function scopeFieldForReduxForm() {
  var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
    return {
      resetFieldValue: function resetFieldValue() {
        var _Children$only = _react.Children.only(ownProps.children),
            _owner = _Children$only._owner,
            props = _Children$only.props;

        dispatch((0, _reduxForm.change)(_owner._context._reduxForm.form, props.name.split('.')[0], ownProps.onReset ? ownProps.onReset() : ''));
      }
    };
  };

  return (0, _reactRedux.connect)(null, mapDispatchToProps)(_ScopeFieldBase2.default);
};

exports.default = scopeFieldForReduxForm();