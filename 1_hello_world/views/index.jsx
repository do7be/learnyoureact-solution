"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var React = require('react');

var TodoBox = React.createClass({
  displayName: "TodoBox",

  render: function render() {
    return React.createElement(
      "div",
      { className: "todoBox" },
      "Hello, world!"
    );
  }
});

exports["default"] = TodoBox;
module.exports = exports["default"];
