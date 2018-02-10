Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var FullHeader = function FullHeader(_ref) {
    var title = _ref.title,
        subtitle = _ref.subtitle;

    var component = _react2['default'].createElement(
        'header',
        null,
        title && _react2['default'].createElement(
            'h1',
            null,
            title
        ),
        subtitle && _react2['default'].createElement(
            'h2',
            null,
            subtitle
        )
    );
    return component;
};

// Package of type definitions:
// https://reactjs.org/docs/typechecking-with-proptypes.html

var propTypes = {
    title: _propTypes2['default'].string,
    subtitle: _propTypes2['default'].string
};

FullHeader.propTypes = propTypes;

exports['default'] = FullHeader;